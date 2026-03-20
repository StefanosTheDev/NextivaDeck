type ProgressCallback = (done: number, total: number) => void;

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

export async function generatePdfClient(onProgress?: ProgressCallback) {
  onProgress?.(0, 1);

  const res = await fetch("/api/generate-pdf");

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.details ?? `PDF generation failed (${res.status})`);
  }

  onProgress?.(1, 1);

  const blob = await res.blob();
  triggerDownload(blob, "Nextiva-Investor-Deck-2026.pdf");
}

export async function generatePptxClient(onProgress?: ProgressCallback) {
  onProgress?.(0, 1);

  const res = await fetch("/api/generate-pptx");

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.details ?? `PPTX generation failed (${res.status})`);
  }

  onProgress?.(1, 1);

  const blob = await res.blob();
  triggerDownload(blob, "Nextiva-Investor-Deck-2026.pptx");
}
