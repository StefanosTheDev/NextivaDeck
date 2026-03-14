import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import PptxGenJS from "pptxgenjs";

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

    // Build the PowerPoint presentation
    const pptx = new PptxGenJS();
    pptx.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
    pptx.layout = "CUSTOM";
    pptx.author = "Nextiva";
    pptx.title = "Nextiva Investor Deck 2026";

    for (const screenshotBuf of screenshots) {
      const slide = pptx.addSlide();
      slide.addImage({
        data: `image/png;base64,${screenshotBuf.toString("base64")}`,
        x: 0,
        y: 0,
        w: 10,
        h: 5.625,
      });
    }

    const pptxBuffer = await pptx.write({ outputType: "nodebuffer" }) as Buffer;

    return new NextResponse(Buffer.from(pptxBuffer), {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "Content-Disposition":
          'attachment; filename="Nextiva-Investor-Deck-2026.pptx"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PPTX generation failed:", error);
    return NextResponse.json(
      {
        error: "PPTX generation failed",
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
