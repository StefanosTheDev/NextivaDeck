import PrintPage from "@/app/print/page";

interface ProjectPrintPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectPrintPage({ params }: ProjectPrintPageProps) {
  const { projectId } = await params;
  return <PrintPage projectId={projectId} />;
}
