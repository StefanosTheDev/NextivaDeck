import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

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
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
      deviceScaleFactor: 2,
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

    console.log(`PDF: rendering ${slideIds.length} slides via live deck...`);

    const screenshots: Buffer[] = [];

    for (let i = 0; i < slideIds.length; i++) {
      const slideUrl = `${baseUrl}/?slideId=${encodeURIComponent(slideIds[i])}`;
      await page.goto(slideUrl, {
        waitUntil: "networkidle2",
        timeout: 30_000,
      });

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

      await page.evaluate(() => {
        document.querySelectorAll(".nav-dark, .nav-light, [class*='nav-pill'], [class*='nav-arrow'], [class*='nav-dot']")
          .forEach((el) => ((el as HTMLElement).style.display = "none"));
        const backBtn = document.querySelector('a[href="/catalog"]');
        if (backBtn) (backBtn as HTMLElement).style.display = "none";
      });

      await new Promise((resolve) => setTimeout(resolve, 500));

      const shot = await page.screenshot({
        type: "png",
        clip: { x: 0, y: 0, width: SLIDE_WIDTH, height: SLIDE_HEIGHT },
      });
      screenshots.push(Buffer.from(shot));

      if ((i + 1) % 10 === 0) console.log(`PDF: captured ${i + 1}/${slideIds.length}`);
    }

    console.log(`PDF: all ${screenshots.length} slides captured, assembling...`);

    const imgPage = await browser.newPage();
    await imgPage.setViewport({
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
      deviceScaleFactor: 2,
    });

    const imgTags = screenshots
      .map(
        (buf) =>
          `<div style="width:${SLIDE_WIDTH}px;height:${SLIDE_HEIGHT}px;page-break-after:always;overflow:hidden;">` +
          `<img src="data:image/png;base64,${buf.toString("base64")}" ` +
          `style="width:${SLIDE_WIDTH}px;height:${SLIDE_HEIGHT}px;display:block;" />` +
          `</div>`
      )
      .join("");

    await imgPage.setContent(
      `<!DOCTYPE html>
      <html><head><style>
        * { margin: 0; padding: 0; }
        @page { size: ${SLIDE_WIDTH}px ${SLIDE_HEIGHT}px; margin: 0; }
      </style></head>
      <body>${imgTags}</body></html>`,
      { waitUntil: "load", timeout: 120_000 }
    );

    const pdfBuffer = await imgPage.pdf({
      width: `${SLIDE_WIDTH}px`,
      height: `${SLIDE_HEIGHT}px`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    console.log(`PDF: done, ${Buffer.from(pdfBuffer).length} bytes`);

    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Nextiva-Investor-Deck-2026.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF generation failed:", error);
    return NextResponse.json(
      {
        error: "PDF generation failed",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
