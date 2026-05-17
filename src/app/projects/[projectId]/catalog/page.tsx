import CatalogPage from "@/app/catalog/page";

interface ProjectCatalogPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectCatalogPage({ params }: ProjectCatalogPageProps) {
  const { projectId } = await params;
  return <CatalogPage projectId={projectId} />;
}
