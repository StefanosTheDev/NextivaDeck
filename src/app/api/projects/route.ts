import { NextResponse } from "next/server";
import { createProject, getProjectSlides, listProjects } from "@/lib/projects/store";
import type { ProjectSummary } from "@/lib/projects/types";

async function withSlideCounts(
  projects: ProjectSummary[]
): Promise<ProjectSummary[]> {
  return Promise.all(
    projects.map(async (project) => {
      const slides = await getProjectSlides(project.id);
      return { ...project, slideCount: slides?.order.length ?? 0 };
    })
  );
}

export async function GET() {
  const index = await listProjects();
  const projects = await withSlideCounts(index.projects);
  return NextResponse.json({ ...index, projects });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { name?: unknown };
    const rawName = body?.name;

    if (typeof rawName !== "string" || !rawName.trim()) {
      return NextResponse.json(
        { error: "Invalid name - expected non-empty string" },
        { status: 400 }
      );
    }

    const project = await createProject(rawName);
    const slides = await getProjectSlides(project.id);
    return NextResponse.json(
      { ...project, slideCount: slides?.order.length ?? 0 },
      { status: 201 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create project";
    const status = message.includes("read-only") ? 409 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
