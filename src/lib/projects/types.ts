export interface SlideDeckState {
  order: string[];
  categories: Record<string, string>;
  categoryNames: string[];
  hiddenSlides: string[];
}

export type ProjectStatus = "active" | "deleted";

export interface ProjectSummary {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  status: ProjectStatus;
  deletedAt?: string | null;
  slideCount?: number;
}

export interface ProjectsIndex {
  defaultProjectId: string;
  projects: ProjectSummary[];
}
