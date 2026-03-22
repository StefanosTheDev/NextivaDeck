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

async function loadPrintIframe(slideIds: string[]): Promise<HTMLIFrameElement> {
  const slidesParam = encodeURIComponent(slideIds.join(","));
  const url = `/print/raw?slides=${slidesParam}`;

  return new Promise((resolve, reject) => {
    const iframe = document.createElement("iframe");
    iframe.style.cssText = "position:fixed;left:0;top:0;width:1920px;height:1080px;z-index:-9999;pointer-events:none;border:none;";
    iframe.src = url;

    const timeout = setTimeout(() => {
      reject(new Error("Timed out loading print view"));
    }, 30000);

    iframe.onload = () => {
      clearTimeout(timeout);
      resolve(iframe);
    };
    iframe.onerror = () => {
      clearTimeout(timeout);
      reject(new Error("Failed to load print view"));
    };

    document.body.appendChild(iframe);
  });
}

async function waitForIframeReady(iframe: HTMLIFrameElement): Promise<void> {
  const doc = iframe.contentDocument;
  if (!doc) throw new Error("Cannot access iframe document");

  // Wait for #print-deck to appear
  let attempts = 0;
  while (!doc.querySelector("#print-deck") && attempts < 100) {
    await new Promise((r) => setTimeout(r, 100));
    attempts++;
  }

  // Wait for fonts
  await iframe.contentWindow?.document.fonts.ready;

  // Wait for all images
  const imgs = doc.querySelectorAll("img");
  await Promise.all(Array.from(imgs).map((img) =>
    img.complete ? Promise.resolve() : new Promise((r) => { img.onload = r; img.onerror = r; })
  ));

  // Extra paint settle time
  await new Promise((r) => setTimeout(r, 2000));
}

async function captureFromIframe(
  iframe: HTMLIFrameElement,
  onProgress?: ProgressCallback
): Promise<string[]> {
  const html2canvas = (await import("html2canvas")).default;
  const doc = iframe.contentDocument;
  if (!doc) throw new Error("Cannot access iframe document");

  const slideEls = doc.querySelectorAll<HTMLElement>(".print-slide");
  const total = slideEls.length;
  const images: string[] = [];

  for (let i = 0; i < total; i++) {
    const el = slideEls[i];
    const label = el.getAttribute("data-slide-label") || `Slide ${i + 1}`;
    onProgress?.({ phase: "rendering", current: i + 1, total, slideLabel: label });

    // Show only current slide
    for (let j = 0; j < slideEls.length; j++) {
      (slideEls[j] as HTMLElement).style.display = j === i ? "block" : "none";
    }
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

  return images;
}

export async function generatePdfClient(
  slideIds: string[],
  onProgress?: ProgressCallback
) {
  onProgress?.({ phase: "rendering", current: 0, total: slideIds.length, slideLabel: "Loading slides..." });

  const iframe = await loadPrintIframe(slideIds);
  try {
    await waitForIframeReady(iframe);

    const images = await captureFromIframe(iframe, onProgress);
    if (images.length === 0) throw new Error("No slides captured");

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
  } finally {
    iframe.remove();
  }
}

export async function generatePptxClient(
  slideIds: string[],
  onProgress?: ProgressCallback
) {
  onProgress?.({ phase: "rendering", current: 0, total: slideIds.length, slideLabel: "Loading slides..." });

  const iframe = await loadPrintIframe(slideIds);
  try {
    await waitForIframeReady(iframe);

    const images = await captureFromIframe(iframe, onProgress);
    if (images.length === 0) throw new Error("No slides captured");

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
  } finally {
    iframe.remove();
  }
}
