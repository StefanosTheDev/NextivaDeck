export type SlideTheme = "light" | "dark";

/** Lightweight slide info for the catalog UI (no React components). */
export type SlideCatalogMeta = {
  id: string;
  label: string;
  theme: SlideTheme;
  isNew?: boolean;
};

export type SlideCatalogApiResponse = {
  order: string[];
  categories: Record<string, string>;
  categoryNames: string[];
  hiddenSlides: string[];
  meta: Record<string, SlideCatalogMeta>;
  defaultOrder?: string[];
};
