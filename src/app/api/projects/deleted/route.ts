import { NextResponse } from "next/server";
import { purgeAllDeletedProjects } from "@/lib/projects/store";

export async function DELETE() {
  try {
    const removed = await purgeAllDeletedProjects();
    return NextResponse.json({ ok: true, removed });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to purge deleted projects";
    const status = message.includes("read-only") ? 409 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
