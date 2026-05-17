import fs from "fs/promises";
import path from "path";
import type {
  ProjectStatus,
  ProjectSummary,
  ProjectsIndex,
  SlideDeckState,
} from "./types";

export const DEFAULT_PROJECT_ID = "investor-deck";
export const DEFAULT_PROJECT_NAME = "Nextiva Investor Deck";

const PROJECTS_DIR = path.join(process.cwd(), "data", "projects");
const PROJECTS_INDEX_FILE = path.join(PROJECTS_DIR, "index.json");
const LEGACY_SLIDES_FILE = path.join(process.cwd(), "slide-order.json");
const IS_VERCEL = !!process.env.VERCEL;

const LEGACY_DEFAULT_ORDER = [
  "cover",
  "safe-harbor",
  "glance",
  "founder",
  "who",
  "journey",
  "problem",
  "platform",
  "solution",
  "market",
  "agentic-opp",
  "ai-tandem",
  "cx-market-sizing",
  "labor-cost-savings",
  "ai-tailwind",
  "win",
  "leadership",
  "summary",
  "closing",
  "appendix-customers",
  "appendix-products",
  "ai-gateways-revenue",
  "financial-divider",
  "arr-gross-margin",
  "ebitda",
  "nrr-churn",
  "expansion-retention",
  "target-model",
  "operating-leverage",
  "customer-base",
  "revenue-visibility",
  "cash-flow-trends",
];

function normalizeProjectStatus(value: unknown): ProjectStatus {
  return value === "deleted" ? "deleted" : "active";
}

export function isProjectActive(project: ProjectSummary | null): project is ProjectSummary {
  return !!project && project.status === "active";
}

export const STARTER_SLIDE_IDS: string[] = ["hello-world"];

export function createBlankDeckState(): SlideDeckState {
  return {
    order: [],
    categories: {},
    categoryNames: [],
    hiddenSlides: [],
  };
}

export function createStarterDeckState(): SlideDeckState {
  return {
    order: [...STARTER_SLIDE_IDS],
    categories: {},
    categoryNames: [],
    hiddenSlides: [],
  };
}

export function getProjectStateFile(projectId: string): string {
  return path.join(PROJECTS_DIR, `${projectId}.json`);
}

function normalizeProjectIdBase(input: string): string {
  const normalized = input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || "project";
}

function createProjectId(name: string, existingIds: Set<string>): string {
  const base = normalizeProjectIdBase(name);
  if (!existingIds.has(base)) return base;

  let counter = 2;
  let candidate = `${base}-${counter}`;
  while (existingIds.has(candidate)) {
    counter += 1;
    candidate = `${base}-${counter}`;
  }
  return candidate;
}

function sanitizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((entry): entry is string => typeof entry === "string");
}

function sanitizeCategories(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  const record = value as Record<string, unknown>;
  const out: Record<string, string> = {};
  for (const [key, maybeValue] of Object.entries(record)) {
    if (typeof maybeValue === "string") out[key] = maybeValue;
  }
  return out;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((entry) => typeof entry === "string");
}

function isStringRecord(value: unknown): value is Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  return Object.values(value).every((entry) => typeof entry === "string");
}

function sanitizeSlideDeckState(raw: unknown, fallbackOrder: string[]): SlideDeckState {
  if (Array.isArray(raw)) {
    return {
      order: raw.filter((entry): entry is string => typeof entry === "string"),
      categories: {},
      categoryNames: [],
      hiddenSlides: [],
    };
  }

  if (!raw || typeof raw !== "object") {
    return {
      order: [...fallbackOrder],
      categories: {},
      categoryNames: [],
      hiddenSlides: [],
    };
  }

  const source = raw as Record<string, unknown>;
  const categories = sanitizeCategories(source.categories);
  const namesFromAssignments = Object.values(categories);
  const categoryNames = Array.from(
    new Set([...sanitizeStringArray(source.categoryNames), ...namesFromAssignments])
  );

  return {
    order: Array.isArray(source.order)
      ? sanitizeStringArray(source.order)
      : [...fallbackOrder],
    categories,
    categoryNames,
    hiddenSlides: sanitizeStringArray(source.hiddenSlides),
  };
}

export function applySlidesPatch(
  current: SlideDeckState,
  patchRaw: unknown
): SlideDeckState {
  if (!patchRaw || typeof patchRaw !== "object" || Array.isArray(patchRaw)) {
    throw new Error("Invalid JSON body");
  }

  const patch = patchRaw as Record<string, unknown>;
  const next: SlideDeckState = {
    order: [...current.order],
    categories: { ...current.categories },
    categoryNames: [...current.categoryNames],
    hiddenSlides: [...current.hiddenSlides],
  };

  if (patch.order !== undefined) {
    if (!isStringArray(patch.order)) {
      throw new Error("Invalid order - expected string[]");
    }
    next.order = patch.order;
  }

  if (patch.categories !== undefined) {
    if (!isStringRecord(patch.categories)) {
      throw new Error("Invalid categories - expected Record<string, string>");
    }
    next.categories = patch.categories;
  }

  if (patch.categoryNames !== undefined) {
    if (!isStringArray(patch.categoryNames)) {
      throw new Error("Invalid categoryNames - expected string[]");
    }
    next.categoryNames = patch.categoryNames;
  }

  if (patch.hiddenSlides !== undefined) {
    if (!isStringArray(patch.hiddenSlides)) {
      throw new Error("Invalid hiddenSlides - expected string[]");
    }
    next.hiddenSlides = patch.hiddenSlides;
  }

  return next;
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readJsonFile(filePath: string): Promise<unknown | null> {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeJsonFile(filePath: string, value: unknown): Promise<void> {
  if (IS_VERCEL) return;

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(value, null, 2), "utf-8");
}

async function readLegacySlidesState(): Promise<SlideDeckState> {
  const parsed = await readJsonFile(LEGACY_SLIDES_FILE);
  return sanitizeSlideDeckState(parsed, LEGACY_DEFAULT_ORDER);
}

function normalizeProjectsIndex(raw: unknown): ProjectsIndex | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;

  const source = raw as Record<string, unknown>;
  const projectsRaw = Array.isArray(source.projects) ? source.projects : [];
  const seen = new Set<string>();
  const projects: ProjectSummary[] = [];

  for (const item of projectsRaw) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    const record = item as Record<string, unknown>;
    if (typeof record.id !== "string" || !record.id.trim()) continue;
    if (typeof record.name !== "string" || !record.name.trim()) continue;
    if (seen.has(record.id)) continue;

    const createdAt =
      typeof record.createdAt === "string" && record.createdAt
        ? record.createdAt
        : new Date().toISOString();
    const updatedAt =
      typeof record.updatedAt === "string" && record.updatedAt
        ? record.updatedAt
        : createdAt;
    const status = normalizeProjectStatus(record.status);
    const deletedAt =
      typeof record.deletedAt === "string" && record.deletedAt
        ? record.deletedAt
        : null;

    projects.push({
      id: record.id,
      name: record.name,
      createdAt,
      updatedAt,
      status,
      deletedAt,
    });
    seen.add(record.id);
  }

  const defaultProjectId =
    typeof source.defaultProjectId === "string" && source.defaultProjectId
      ? source.defaultProjectId
      : DEFAULT_PROJECT_ID;

  return {
    defaultProjectId,
    projects,
  };
}

async function writeProjectsIndex(index: ProjectsIndex): Promise<void> {
  await writeJsonFile(PROJECTS_INDEX_FILE, index);
}

async function ensureDefaultProject(index: ProjectsIndex): Promise<ProjectsIndex> {
  const defaultProject = index.projects.find((project) => project.id === DEFAULT_PROJECT_ID);
  if (defaultProject) {
    if (defaultProject.status === "active") return index;

    const restored: ProjectsIndex = {
      ...index,
      projects: index.projects.map((project) =>
        project.id === DEFAULT_PROJECT_ID
          ? { ...project, status: "active", deletedAt: null }
          : project
      ),
    };
    if (!IS_VERCEL) await writeProjectsIndex(restored);
    return restored;
  }

  const now = new Date().toISOString();
  const next: ProjectsIndex = {
    ...index,
    defaultProjectId: DEFAULT_PROJECT_ID,
    projects: [
      {
        id: DEFAULT_PROJECT_ID,
        name: DEFAULT_PROJECT_NAME,
        createdAt: now,
        updatedAt: now,
        status: "active",
        deletedAt: null,
      },
      ...index.projects,
    ],
  };

  if (!IS_VERCEL) await writeProjectsIndex(next);
  return next;
}

async function ensureSeededStore(): Promise<ProjectsIndex> {
  const parsed = await readJsonFile(PROJECTS_INDEX_FILE);
  const normalized = normalizeProjectsIndex(parsed);

  if (!normalized) {
    const now = new Date().toISOString();
    const seededIndex: ProjectsIndex = {
      defaultProjectId: DEFAULT_PROJECT_ID,
      projects: [
        {
          id: DEFAULT_PROJECT_ID,
          name: DEFAULT_PROJECT_NAME,
          createdAt: now,
          updatedAt: now,
          status: "active",
          deletedAt: null,
        },
      ],
    };

    const legacyState = await readLegacySlidesState();
    if (!IS_VERCEL) {
      await writeProjectsIndex(seededIndex);
      await writeJsonFile(getProjectStateFile(DEFAULT_PROJECT_ID), legacyState);
    }

    return seededIndex;
  }

  const withDefault = await ensureDefaultProject(normalized);
  const defaultStateFile = getProjectStateFile(DEFAULT_PROJECT_ID);

  if (!(await fileExists(defaultStateFile))) {
    const legacyState = await readLegacySlidesState();
    if (!IS_VERCEL) await writeJsonFile(defaultStateFile, legacyState);
  }

  return withDefault;
}

export async function listProjects(): Promise<ProjectsIndex> {
  return ensureSeededStore();
}

export async function getProject(projectId: string): Promise<ProjectSummary | null> {
  const index = await listProjects();
  return index.projects.find((project) => project.id === projectId) ?? null;
}

export async function getActiveProject(projectId: string): Promise<ProjectSummary | null> {
  const project = await getProject(projectId);
  return isProjectActive(project) ? project : null;
}

export async function getProjectSlides(projectId: string): Promise<SlideDeckState | null> {
  const project = await getProject(projectId);
  if (!project) return null;

  const stateFile = getProjectStateFile(projectId);
  const parsed = await readJsonFile(stateFile);

  if (parsed != null) {
    const fallbackOrder =
      projectId === DEFAULT_PROJECT_ID ? (await readLegacySlidesState()).order : [];
    return sanitizeSlideDeckState(parsed, fallbackOrder);
  }

  if (projectId === DEFAULT_PROJECT_ID) {
    const legacyState = await readLegacySlidesState();
    if (!IS_VERCEL) await writeJsonFile(stateFile, legacyState);
    return legacyState;
  }

  const blank = createBlankDeckState();
  if (!IS_VERCEL) await writeJsonFile(stateFile, blank);
  return blank;
}

async function touchProject(index: ProjectsIndex, projectId: string): Promise<void> {
  if (IS_VERCEL) return;

  const now = new Date().toISOString();
  const updated: ProjectsIndex = {
    ...index,
    projects: index.projects.map((project) =>
      project.id === projectId ? { ...project, updatedAt: now } : project
    ),
  };
  await writeProjectsIndex(updated);
}

export async function saveProjectSlides(
  projectId: string,
  incoming: unknown
): Promise<SlideDeckState> {
  const index = await listProjects();
  const project = index.projects.find((entry) => entry.id === projectId);
  if (!project) throw new Error(`Project not found: ${projectId}`);
  if (project.status !== "active") {
    throw new Error(`Project is deleted: ${projectId}`);
  }

  const fallbackOrder =
    projectId === DEFAULT_PROJECT_ID ? (await readLegacySlidesState()).order : [];
  const normalized = sanitizeSlideDeckState(incoming, fallbackOrder);

  if (IS_VERCEL) return normalized;

  await writeJsonFile(getProjectStateFile(projectId), normalized);
  await touchProject(index, projectId);
  return normalized;
}

export async function createProject(name: string): Promise<ProjectSummary> {
  const trimmedName = name.trim();
  if (!trimmedName) throw new Error("Project name is required");

  if (IS_VERCEL) {
    throw new Error("Project creation is disabled in this read-only environment");
  }

  const index = await listProjects();
  const existingIds = new Set(index.projects.map((project) => project.id));
  const id = createProjectId(trimmedName, existingIds);
  const now = new Date().toISOString();

  const project: ProjectSummary = {
    id,
    name: trimmedName,
    createdAt: now,
    updatedAt: now,
    status: "active",
    deletedAt: null,
  };

  const updatedIndex: ProjectsIndex = {
    ...index,
    projects: [...index.projects, project],
  };

  await writeProjectsIndex(updatedIndex);
  await writeJsonFile(getProjectStateFile(id), createStarterDeckState());
  return project;
}

export async function softDeleteProject(projectId: string): Promise<ProjectSummary> {
  if (projectId === DEFAULT_PROJECT_ID) {
    throw new Error("Default project cannot be deleted");
  }
  if (IS_VERCEL) {
    throw new Error("Project deletion is disabled in this read-only environment");
  }

  const index = await listProjects();
  const existing = index.projects.find((project) => project.id === projectId);
  if (!existing) throw new Error(`Project not found: ${projectId}`);
  if (existing.status === "deleted") return existing;

  const now = new Date().toISOString();
  const updatedProject: ProjectSummary = {
    ...existing,
    status: "deleted",
    deletedAt: now,
    updatedAt: now,
  };

  const updatedIndex: ProjectsIndex = {
    ...index,
    projects: index.projects.map((project) =>
      project.id === projectId ? updatedProject : project
    ),
  };
  await writeProjectsIndex(updatedIndex);
  return updatedProject;
}

export async function restoreProject(projectId: string): Promise<ProjectSummary> {
  if (IS_VERCEL) {
    throw new Error("Project restore is disabled in this read-only environment");
  }

  const index = await listProjects();
  const existing = index.projects.find((project) => project.id === projectId);
  if (!existing) throw new Error(`Project not found: ${projectId}`);
  if (existing.status === "active") return existing;

  const now = new Date().toISOString();
  const updatedProject: ProjectSummary = {
    ...existing,
    status: "active",
    deletedAt: null,
    updatedAt: now,
  };

  const updatedIndex: ProjectsIndex = {
    ...index,
    projects: index.projects.map((project) =>
      project.id === projectId ? updatedProject : project
    ),
  };
  await writeProjectsIndex(updatedIndex);
  return updatedProject;
}

export async function hardDeleteProjects(projectIds: string[]): Promise<string[]> {
  if (projectIds.length === 0) return [];
  if (IS_VERCEL) {
    throw new Error("Permanent deletion is disabled in this read-only environment");
  }

  const uniqueIds = Array.from(new Set(projectIds));
  for (const id of uniqueIds) {
    if (id === DEFAULT_PROJECT_ID) {
      throw new Error("Default project cannot be permanently deleted");
    }
  }

  const index = await listProjects();
  for (const id of uniqueIds) {
    const existing = index.projects.find((project) => project.id === id);
    if (!existing) {
      throw new Error(`Project not found: ${id}`);
    }
    if (existing.status !== "deleted") {
      throw new Error(
        `Move a project to Deleted Projects before removing it permanently: ${id}`
      );
    }
  }

  const idSet = new Set(uniqueIds);
  const remaining = index.projects.filter((project) => !idSet.has(project.id));

  for (const id of uniqueIds) {
    const stateFile = getProjectStateFile(id);
    try {
      await fs.unlink(stateFile);
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code;
      if (code !== "ENOENT") throw error;
    }
  }

  const updatedIndex: ProjectsIndex = {
    ...index,
    projects: remaining,
  };
  await writeProjectsIndex(updatedIndex);
  return uniqueIds;
}

export async function purgeAllDeletedProjects(): Promise<string[]> {
  const index = await listProjects();
  const deletedIds = index.projects
    .filter((project) => project.status === "deleted")
    .map((project) => project.id)
    .filter((id) => id !== DEFAULT_PROJECT_ID);

  return hardDeleteProjects(deletedIds);
}
