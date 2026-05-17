import InvestorDeck from "@/components/InvestorDeck";

interface ProjectDeckPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectDeckPage({ params }: ProjectDeckPageProps) {
  const { projectId } = await params;
  return <InvestorDeck projectId={projectId} />;
}
