import { NextResponse } from "next/server";
import {
  DEFAULT_PROJECT_ID,
  DEFAULT_PROJECT_NAME,
  applySlidesPatch,
  getProject,
  getProjectSlides,
  saveProjectSlides,
} from "@/lib/projects/store";

export async function GET() {
  const data = await getProjectSlides(DEFAULT_PROJECT_ID);
  if (!data) {
    return NextResponse.json(
      { error: `Project not found: ${DEFAULT_PROJECT_ID}` },
      { status: 404 }
    );
  }
  const project = await getProject(DEFAULT_PROJECT_ID);
  return NextResponse.json({
    ...data,
    projectId: DEFAULT_PROJECT_ID,
    projectName: project?.name ?? DEFAULT_PROJECT_NAME,
  });
}

export async function PUT(request: Request) {
  const current = await getProjectSlides(DEFAULT_PROJECT_ID);
  if (!current) {
    return NextResponse.json(
      { error: `Project not found: ${DEFAULT_PROJECT_ID}` },
      { status: 404 }
    );
  }

  try {
    const body = await request.json();
    const next = applySlidesPatch(current, body);
    const saved = await saveProjectSlides(DEFAULT_PROJECT_ID, next);
    return NextResponse.json(saved);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid JSON body";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
