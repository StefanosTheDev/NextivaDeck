import { redirect } from "next/navigation";
import { getProject } from "@/lib/projects/store";

interface ProjectLayoutProps {
  children: React.ReactNode;
  params: Promise<{ projectId: string }>;
}

export default async function ProjectLayout({ children, params }: ProjectLayoutProps) {
  const { projectId } = await params;
  const project = await getProject(projectId);

  if (!project || project.status === "deleted") {
    redirect("/");
  }

  return <>{children}</>;
}
