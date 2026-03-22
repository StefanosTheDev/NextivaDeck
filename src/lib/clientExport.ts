export type ExportProgress = {
  phase: "rendering" | "assembling" | "done";
  current: number;
  total: number;
  slideLabel?: string;
};

export type ProgressCallback = (progress: ExportProgress) => void;

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export async function generatePdfFromApi(
  slideIds?: string[],
  onProgress?: ProgressCallback
) {
  const total = slideIds?.length ?? 0;
  onProgress?.({ phase: "rendering", current: 0, total, slideLabel: "Starting..." });

  const url = slideIds
    ? `/api/generate-pdf?slides=${encodeURIComponent(slideIds.join(","))}`
    : "/api/generate-pdf";

  const res = await fetch(url);

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.details ?? `PDF generation failed (${res.status})`);
  }

  onProgress?.({ phase: "done", current: total, total });

  const blob = await res.blob();
  triggerDownload(blob, "Nextiva-Investor-Deck-2026.pdf");
}

export async function generatePptxFromApi(
  slideIds?: string[],
  onProgress?: ProgressCallback
) {
  const total = slideIds?.length ?? 0;
  onProgress?.({ phase: "rendering", current: 0, total, slideLabel: "Starting..." });

  const url = slideIds
    ? `/api/generate-pptx?slides=${encodeURIComponent(slideIds.join(","))}`
    : "/api/generate-pptx";

  const res = await fetch(url);

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.details ?? `PPTX generation failed (${res.status})`);
  }

  onProgress?.({ phase: "done", current: total, total });

  const blob = await res.blob();
  triggerDownload(blob, "Nextiva-Investor-Deck-2026.pptx");
}
