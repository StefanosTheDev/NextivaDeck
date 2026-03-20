import { NextResponse } from "next/server";
import { createHash } from "crypto";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "slide-order.json");
const IS_VERCEL = !!process.env.VERCEL;

const DEFAULT_ORDER = [
  "cover",
  "safe-harbor",
  "glance",
  "founder",
  "who",
  "journey",
  "problem",
  "platform",
  "solution",
  "market",
  "agentic-opp",
  "ai-tandem",
  "cx-market-sizing",
  "labor-cost-savings",
  "ai-tailwind",
  "win",
  "leadership",
  "summary",
  "closing",
  "appendix-customers",
  "appendix-products",
  "ai-gateways-revenue",
  "financial-divider",
  "arr-gross-margin",
  "ebitda",
  "nrr-churn",
  "expansion-retention",
  "target-model",
  "operating-leverage",
  "customer-base",
  "revenue-visibility",
  "cash-flow-trends",
];

interface SlideData {
  order: string[];
  categories: Record<string, string>;
  categoryNames: string[];
  hiddenSlides: string[];
}

const DEFAULT_DATA: SlideData = {
  order: DEFAULT_ORDER,
  categories: {},
  categoryNames: [],
  hiddenSlides: [],
};

async function readData(): Promise<SlideData> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return { order: parsed, categories: {}, categoryNames: [], hiddenSlides: [] };
    }

    return {
      order: Array.isArray(parsed.order) ? parsed.order : DEFAULT_ORDER,
      categories:
        parsed.categories && typeof parsed.categories === "object"
          ? parsed.categories
          : {},
      categoryNames: Array.isArray(parsed.categoryNames) ? parsed.categoryNames : [],
      hiddenSlides: Array.isArray(parsed.hiddenSlides) ? parsed.hiddenSlides : [],
    };
  } catch {
    return { ...DEFAULT_DATA };
  }
}

async function writeData(data: SlideData): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

function hashData(data: SlideData): string {
  return createHash("md5").update(JSON.stringify(data)).digest("hex").slice(0, 12);
}

export async function GET() {
  const data = await readData();
  return NextResponse.json({ ...data, version: hashData(data) });
}

export async function PUT(request: Request) {
  // In prod, the filesystem is read-only — changes are made locally and pushed via Git
  if (IS_VERCEL) {
    const data = await readData();
    return NextResponse.json(data);
  }

  try {
    const body = await request.json();
    const current = await readData();

    if (body.order !== undefined) {
      if (
        !Array.isArray(body.order) ||
        !body.order.every((v: unknown) => typeof v === "string")
      ) {
        return NextResponse.json(
          { error: "Invalid order — expected string[]" },
          { status: 400 }
        );
      }
      current.order = body.order;
    }

    if (body.categories !== undefined) {
      if (
        typeof body.categories !== "object" ||
        Array.isArray(body.categories)
      ) {
        return NextResponse.json(
          { error: "Invalid categories — expected Record<string, string>" },
          { status: 400 }
        );
      }
      current.categories = body.categories;
    }

    if (body.categoryNames !== undefined) {
      if (
        !Array.isArray(body.categoryNames) ||
        !body.categoryNames.every((v: unknown) => typeof v === "string")
      ) {
        return NextResponse.json(
          { error: "Invalid categoryNames — expected string[]" },
          { status: 400 }
        );
      }
      current.categoryNames = body.categoryNames;
    }

    if (body.hiddenSlides !== undefined) {
      if (
        !Array.isArray(body.hiddenSlides) ||
        !body.hiddenSlides.every((v: unknown) => typeof v === "string")
      ) {
        return NextResponse.json(
          { error: "Invalid hiddenSlides — expected string[]" },
          { status: 400 }
        );
      }
      current.hiddenSlides = body.hiddenSlides;
    }

    await writeData(current);
    return NextResponse.json({ ...current, version: hashData(current) });
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}
