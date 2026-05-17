import PrintRawPage from "@/app/print/raw/page";

interface ProjectPrintRawPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectPrintRawPage({ params }: ProjectPrintRawPageProps) {
  const { projectId } = await params;
  return <PrintRawPage projectId={projectId} />;
}
