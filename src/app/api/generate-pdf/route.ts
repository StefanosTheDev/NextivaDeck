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

    await page.goto(`${baseUrl}/print/raw`, {
      waitUntil: "networkidle0",
      timeout: 60_000,
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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const slideCount = await page.$$eval(".print-slide", (els) => els.length);

    // Screenshot each slide individually, then assemble into a clean PDF
    // where each page is exactly one slide
    const screenshots: Buffer[] = [];
    for (let i = 0; i < slideCount; i++) {
      const clip = {
        x: 0,
        y: i * SLIDE_HEIGHT,
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
      };
      const shot = await page.screenshot({
        type: "png",
        clip,
        omitBackground: false,
      });
      screenshots.push(Buffer.from(shot));
    }

    // Build a simple HTML page with one image per page and use pdf() on that
    const imgPage = await browser.newPage();
    await imgPage.setViewport({
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
      deviceScaleFactor: 1,
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
      { waitUntil: "load" }
    );

    const pdfBuffer = await imgPage.pdf({
      width: `${SLIDE_WIDTH}px`,
      height: `${SLIDE_HEIGHT}px`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

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
