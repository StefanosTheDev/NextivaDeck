import { NextResponse } from "next/server";
import { getProject, softDeleteProject } from "@/lib/projects/store";

interface RouteContext {
  params: Promise<{ projectId: string }>;
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { projectId } = await context.params;

  const existing = await getProject(projectId);
  if (!existing) {
    return NextResponse.json({ error: `Project not found: ${projectId}` }, { status: 404 });
  }

  try {
    const deleted = await softDeleteProject(projectId);
    return NextResponse.json(deleted);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to delete project";
    const status =
      message.includes("cannot be deleted")
        ? 400
        : message.includes("read-only")
          ? 409
          : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
