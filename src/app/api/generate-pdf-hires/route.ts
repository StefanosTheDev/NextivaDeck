import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";

// Boss's exact screenshot specs (Tomas's Retina Mac @ 144 DPI)
const CSS_WIDTH = 1717;   // CSS pixels
const CSS_HEIGHT = 922;   // CSS pixels
const SCALE = 2;          // 2x Retina
const OUTPUT_WIDTH = 3434;  // Final pixel width (1717 * 2)
const OUTPUT_HEIGHT = 1844; // Final pixel height (922 * 2)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const baseUrl =
    searchParams.get("baseUrl") || new URL(request.url).origin;

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      protocolTimeout: 600_000,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
        "--font-render-hinting=none",
      ],
    });

    const page = await browser.newPage();
    await page.setViewport({
      width: CSS_WIDTH,
      height: CSS_HEIGHT,
      deviceScaleFactor: SCALE,
    });

    const slidesParam = searchParams.get("slides");
    let slideIds: string[];

    if (slidesParam) {
      slideIds = slidesParam.split(",").map((s) => s.trim()).filter(Boolean);
    } else {
      const apiRes = await fetch(`${baseUrl}/api/slides`);
      const data = await apiRes.json();
      const hidden: string[] = Array.isArray(data.hiddenSlides) ? data.hiddenSlides : [];
      slideIds = (data.order as string[]).filter((id) => !hidden.includes(id));
    }

    console.log(`Hi-Res PDF (PNG): rendering ${slideIds.length} slides at ${OUTPUT_WIDTH}×${OUTPUT_HEIGHT}...`);

    // Capture each slide as PNG
    const pngBuffers: Buffer[] = [];

    for (let i = 0; i < slideIds.length; i++) {
      const slideUrl = `${baseUrl}/?slideId=${encodeURIComponent(slideIds[i])}`;
      await page.goto(slideUrl, {
        waitUntil: "networkidle2",
        timeout: 60_000,
      });

      // Wait for fonts and images
      await page.evaluate(() =>
        Promise.all([
          document.fonts.ready,
          ...Array.from(document.querySelectorAll("img")).map((img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((resolve) => {
                  img.onload = resolve;
                  img.onerror = resolve;
                })
          ),
        ])
      );

      // Hide navigation elements
      await page.evaluate(() => {
        document.querySelectorAll(".nav-dark, .nav-light, [class*='nav-pill'], [class*='nav-arrow'], [class*='nav-dot']")
          .forEach((el) => ((el as HTMLElement).style.display = "none"));
        const backBtn = document.querySelector('a[href="/catalog"]');
        if (backBtn) (backBtn as HTMLElement).style.display = "none";
      });

      // Wait 5 seconds for all animations to complete
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Capture as PNG (lossless)
      const shot = await page.screenshot({
        type: "png",
        clip: { x: 0, y: 0, width: CSS_WIDTH, height: CSS_HEIGHT },
      });
      pngBuffers.push(Buffer.from(shot));

      console.log(`Hi-Res PDF: captured ${i + 1}/${slideIds.length} - ${slideIds[i]}`);
    }

    console.log(`Hi-Res PDF: all ${pngBuffers.length} PNGs captured, assembling PDF...`);

    // Create PDF with pdf-lib (embeds PNGs directly, no quality loss)
    const pdfDoc = await PDFDocument.create();

    for (let i = 0; i < pngBuffers.length; i++) {
      // Embed PNG image
      const pngImage = await pdfDoc.embedPng(pngBuffers[i]);
      
      // Add page with exact pixel dimensions
      const pdfPage = pdfDoc.addPage([OUTPUT_WIDTH, OUTPUT_HEIGHT]);
      
      // Draw PNG filling the entire page
      pdfPage.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: OUTPUT_WIDTH,
        height: OUTPUT_HEIGHT,
      });
    }

    // Generate PDF bytes
    const pdfBytes = await pdfDoc.save();
    const pdfBuffer = Buffer.from(pdfBytes);

    console.log(`Hi-Res PDF: done, ${pdfBuffer.length} bytes (${(pdfBuffer.length / 1024 / 1024).toFixed(1)} MB)`);

    await browser.close();

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          `attachment; filename="Nextiva-Deck-HiRes-PNG_${new Date().toISOString().slice(0, 10).replace(/-/g, "")}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Hi-Res PDF generation failed:", error);
    if (browser) {
      await browser.close();
    }
    return NextResponse.json(
      {
        error: "Hi-Res PDF generation failed",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
