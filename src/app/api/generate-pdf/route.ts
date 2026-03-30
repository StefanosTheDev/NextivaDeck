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
    const printUrl = slidesParam
      ? `${baseUrl}/print/raw?slides=${encodeURIComponent(slidesParam)}`
      : `${baseUrl}/print/raw`;

    await page.goto(printUrl, {
      waitUntil: "networkidle2",
      timeout: 120_000,
    });

    await page.waitForSelector("#print-deck", { timeout: 30_000 });

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

    await new Promise((resolve) => setTimeout(resolve, 500));

    const slideElements = await page.$$(".print-slide");
    console.log(`PDF: rendering ${slideElements.length} slides...`);

    const screenshots: Buffer[] = [];
    for (let i = 0; i < slideElements.length; i++) {
      const shot = await slideElements[i].screenshot({
        type: "png",
        omitBackground: false,
      });
      screenshots.push(Buffer.from(shot));
      if ((i + 1) % 10 === 0) console.log(`PDF: captured ${i + 1}/${slideElements.length}`);
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
