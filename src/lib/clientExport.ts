export type ExportProgress = {
  phase: "rendering" | "assembling" | "done" | "error";
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

async function captureSlideImages(
  container: HTMLElement,
  onProgress?: ProgressCallback
): Promise<string[]> {
  const html2canvas = (await import("html2canvas")).default;
  const slideEls = container.querySelectorAll<HTMLElement>(".print-slide");
  const total = slideEls.length;
  const images: string[] = [];

  for (let i = 0; i < total; i++) {
    const el = slideEls[i];
    const label = el.getAttribute("data-slide-label") || `Slide ${i + 1}`;
    onProgress?.({ phase: "rendering", current: i + 1, total, slideLabel: label });

    // Make only the current slide visible for capture
    for (let j = 0; j < slideEls.length; j++) {
      (slideEls[j] as HTMLElement).style.display = j === i ? "block" : "none";
    }
    // Let the browser paint
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    const canvas = await html2canvas(el, {
      width: 1920,
      height: 1080,
      windowWidth: 1920,
      windowHeight: 1080,
      scale: 1,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#000208",
      logging: false,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
    });

    images.push(canvas.toDataURL("image/jpeg", 0.92));
  }

  // Restore visibility
  for (let j = 0; j < slideEls.length; j++) {
    (slideEls[j] as HTMLElement).style.display = "";
  }

  return images;
}

export async function generatePdfClient(
  container: HTMLElement,
  onProgress?: ProgressCallback
) {
  const images = await captureSlideImages(container, onProgress);
  if (images.length === 0) throw new Error("No slides to export");

  onProgress?.({ phase: "assembling", current: images.length, total: images.length, slideLabel: "Building PDF..." });

  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080] });

  for (let i = 0; i < images.length; i++) {
    if (i > 0) pdf.addPage([1920, 1080], "landscape");
    pdf.addImage(images[i], "JPEG", 0, 0, 1920, 1080);
  }

  const blob = pdf.output("blob");
  triggerDownload(blob, "Nextiva-Investor-Deck-2026.pdf");
  onProgress?.({ phase: "done", current: images.length, total: images.length });
}

export async function generatePptxClient(
  container: HTMLElement,
  onProgress?: ProgressCallback
) {
  const images = await captureSlideImages(container, onProgress);
  if (images.length === 0) throw new Error("No slides to export");

  onProgress?.({ phase: "assembling", current: images.length, total: images.length, slideLabel: "Building PPTX..." });

  const PptxGenJS = (await import("pptxgenjs")).default;
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
  pptx.layout = "CUSTOM";
  pptx.author = "Nextiva";
  pptx.title = "Nextiva Investor Deck 2026";

  for (const imgData of images) {
    const slide = pptx.addSlide();
    slide.addImage({ data: imgData, x: 0, y: 0, w: 10, h: 5.625 });
  }

  const output = await pptx.write({ outputType: "blob" });
  const blob = output instanceof Blob ? output : new Blob([output as ArrayBuffer]);
  triggerDownload(blob, "Nextiva-Investor-Deck-2026.pptx");
  onProgress?.({ phase: "done", current: images.length, total: images.length });
}
