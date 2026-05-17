import { NextResponse } from "next/server";
import {
  applySlidesPatch,
  getProject,
  getProjectSlides,
  saveProjectSlides,
} from "@/lib/projects/store";

interface RouteContext {
  params: Promise<{ projectId: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { projectId } = await context.params;
  const project = await getProject(projectId);
  if (!project || project.status === "deleted") {
    return NextResponse.json({ error: `Project not found: ${projectId}` }, { status: 404 });
  }

  const data = await getProjectSlides(projectId);

  if (!data) {
    return NextResponse.json({ error: `Project not found: ${projectId}` }, { status: 404 });
  }

  return NextResponse.json({
    ...data,
    projectId: project.id,
    projectName: project.name,
  });
}

export async function PUT(request: Request, context: RouteContext) {
  const { projectId } = await context.params;
  const project = await getProject(projectId);
  if (!project || project.status === "deleted") {
    return NextResponse.json({ error: `Project not found: ${projectId}` }, { status: 404 });
  }

  const current = await getProjectSlides(projectId);

  if (!current) {
    return NextResponse.json({ error: `Project not found: ${projectId}` }, { status: 404 });
  }

  try {
    const body = await request.json();
    const next = applySlidesPatch(current, body);
    const saved = await saveProjectSlides(projectId, next);
    return NextResponse.json(saved);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid JSON body";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
