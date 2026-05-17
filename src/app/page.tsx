import ProjectHub from "@/components/ProjectHub";
import { redirect } from "next/navigation";

interface HomePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const LEGACY_DECK_QUERY_KEYS = ["slideId", "slide", "preview", "from"] as const;

function appendParam(
  target: URLSearchParams,
  key: string,
  value: string | string[] | undefined
) {
  if (typeof value === "string") {
    target.set(key, value);
    return;
  }
  if (Array.isArray(value)) {
    for (const entry of value) {
      target.append(key, entry);
    }
  }
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const hasLegacyDeckQuery = LEGACY_DECK_QUERY_KEYS.some(
    (key) => params[key] !== undefined
  );

  if (hasLegacyDeckQuery) {
    const query = new URLSearchParams();
    for (const key of LEGACY_DECK_QUERY_KEYS) {
      appendParam(query, key, params[key]);
    }
    const suffix = query.toString();
    redirect(`/projects/investor-deck${suffix ? `?${suffix}` : ""}`);
  }

  return <ProjectHub />;
}
