import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";
import fs from "fs/promises";
import path from "path";

const BLOB_FILENAME = "slide-order.json";
const LOCAL_FILE = path.join(process.cwd(), "slide-order.json");
const IS_VERCEL = !!process.env.VERCEL;
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || process.env.NEXTIVASTORAGE_READ_WRITE_TOKEN || "";

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

const DEFAULT_DATA: SlideData = {
  order: DEFAULT_ORDER,
  categories: {},
  categoryNames: [],
  hiddenSlides: [],
};

interface SlideData {
  order: string[];
  categories: Record<string, string>;
  categoryNames: string[];
  hiddenSlides: string[];
}

function parseData(raw: string): SlideData {
  try {
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

async function readData(): Promise<SlideData> {
  if (IS_VERCEL) {
    try {
      const { blobs } = await list({ prefix: BLOB_FILENAME, token: BLOB_TOKEN });
      if (blobs.length > 0) {
        const res = await fetch(blobs[0].url);
        const raw = await res.text();
        return parseData(raw);
      }
    } catch {
      // blob doesn't exist yet
    }
    return { ...DEFAULT_DATA };
  }

  try {
    const raw = await fs.readFile(LOCAL_FILE, "utf-8");
    return parseData(raw);
  } catch {
    return { ...DEFAULT_DATA };
  }
}

async function writeData(data: SlideData): Promise<void> {
  const json = JSON.stringify(data, null, 2);

  if (IS_VERCEL) {
    await put(BLOB_FILENAME, json, {
      access: "public",
      addRandomSuffix: false,
      token: BLOB_TOKEN,
    });
  } else {
    await fs.writeFile(LOCAL_FILE, json, "utf-8");
  }
}

export async function GET() {
  const data = await readData();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
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
    return NextResponse.json(current);
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}
