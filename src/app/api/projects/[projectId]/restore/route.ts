import { NextResponse } from "next/server";
import { getProject, restoreProject } from "@/lib/projects/store";

interface RouteContext {
  params: Promise<{ projectId: string }>;
}

export async function POST(_request: Request, context: RouteContext) {
  const { projectId } = await context.params;
  const existing = await getProject(projectId);

  if (!existing) {
    return NextResponse.json({ error: `Project not found: ${projectId}` }, { status: 404 });
  }

  try {
    const restored = await restoreProject(projectId);
    return NextResponse.json(restored);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to restore project";
    const status = message.includes("read-only") ? 409 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
