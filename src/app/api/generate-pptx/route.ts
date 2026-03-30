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

    console.log(`PPTX: rendering ${slideIds.length} slides via live deck...`);

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

      if ((i + 1) % 10 === 0) console.log(`PPTX: captured ${i + 1}/${slideIds.length}`);
    }

    console.log(`PPTX: all ${screenshots.length} slides captured, assembling...`);

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

    console.log(`PPTX: done, ${Buffer.from(pptxBuffer).length} bytes`);

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
