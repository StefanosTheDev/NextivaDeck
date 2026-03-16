import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const IS_VERCEL = !!process.env.VERCEL;

type Source = "main" | "yaniv" | "final";

const FILE_MAP: Record<Source, string> = {
  main: path.join(process.cwd(), "slide-order-main.json"),
  yaniv: path.join(process.cwd(), "slide-order-yaniv.json"),
  final: path.join(process.cwd(), "slide-order-final.json"),
};

// Legacy fallback for old single-file format
const LEGACY_FILE = path.join(process.cwd(), "slide-order.json");

interface SlideEntry {
  id: string;
  source: Source;
}

interface SlideData {
  order: (string | SlideEntry)[];
  categories: Record<string, string>;
  categoryNames: string[];
  hiddenSlides: string[];
}

const DEFAULT_DATA: SlideData = {
  order: [],
  categories: {},
  categoryNames: [],
  hiddenSlides: [],
};

function resolveSource(url: string): Source {
  const { searchParams } = new URL(url);
  const src = searchParams.get("source");
  if (src === "yaniv" || src === "final") return src;
  return "main";
}

async function readData(source: Source): Promise<SlideData> {
  const filePath = FILE_MAP[source];
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return { order: parsed, categories: {}, categoryNames: [], hiddenSlides: [] };
    }

    return {
      order: Array.isArray(parsed.order) ? parsed.order : [],
      categories:
        parsed.categories && typeof parsed.categories === "object"
          ? parsed.categories
          : {},
      categoryNames: Array.isArray(parsed.categoryNames) ? parsed.categoryNames : [],
      hiddenSlides: Array.isArray(parsed.hiddenSlides) ? parsed.hiddenSlides : [],
    };
  } catch {
    // If main file not found, try legacy single file
    if (source === "main") {
      try {
        const raw = await fs.readFile(LEGACY_FILE, "utf-8");
        const parsed = JSON.parse(raw);
        return {
          order: Array.isArray(parsed.order) ? parsed.order : Array.isArray(parsed) ? parsed : [],
          categories: parsed.categories && typeof parsed.categories === "object" ? parsed.categories : {},
          categoryNames: Array.isArray(parsed.categoryNames) ? parsed.categoryNames : [],
          hiddenSlides: Array.isArray(parsed.hiddenSlides) ? parsed.hiddenSlides : [],
        };
      } catch {
        return { ...DEFAULT_DATA };
      }
    }
    return { ...DEFAULT_DATA };
  }
}

async function writeData(source: Source, data: SlideData): Promise<void> {
  const filePath = FILE_MAP[source];
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET(request: NextRequest) {
  const source = resolveSource(request.url);
  const data = await readData(source);
  return NextResponse.json(data);
}

export async function PUT(request: NextRequest) {
  if (IS_VERCEL) {
    const source = resolveSource(request.url);
    const data = await readData(source);
    return NextResponse.json(data);
  }

  const source = resolveSource(request.url);

  // Only the final deliverable is writable from the catalog
  if (source !== "final") {
    return NextResponse.json(
      { error: `Source "${source}" is read-only. Only "final" can be written.` },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const current = await readData(source);

    if (body.order !== undefined) {
      if (!Array.isArray(body.order)) {
        return NextResponse.json(
          { error: "Invalid order — expected array" },
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

    await writeData(source, current);
    return NextResponse.json(current);
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}
