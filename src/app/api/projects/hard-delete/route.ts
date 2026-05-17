import { NextResponse } from "next/server";
import { hardDeleteProjects } from "@/lib/projects/store";

export async function POST(request: Request) {
  try {
    const raw = (await request.json()) as unknown;
    const body = raw && typeof raw === "object" && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
    const ids = body.projectIds;
    if (!Array.isArray(ids) || !ids.every((id): id is string => typeof id === "string")) {
      return NextResponse.json({ error: "Invalid body - expected { projectIds: string[] }" }, { status: 400 });
    }

    const removed = await hardDeleteProjects(ids);
    return NextResponse.json({ ok: true, removed });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to permanently delete projects";
    const status =
      message.includes("read-only") ? 409 : message.includes("not found") ? 404 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
