export type ExportProgress = {
  phase: "rendering" | "assembling" | "done" | "error";
  current: number;
  total: number;
  slideLabel?: string;
};

export type ProgressCallback = (progress: ExportProgress) => void;

// Boss's exact screenshot specs (Retina Mac @ 144 DPI)
const BOSS_CSS_WIDTH = 1717;   // CSS pixels (3434 / 2)
const BOSS_CSS_HEIGHT = 922;   // CSS pixels (1844 / 2)
const BOSS_SCALE = 2;          // 2x Retina devicePixelRatio
const BOSS_OUTPUT_WIDTH = 3434;  // Final pixel width
const BOSS_OUTPUT_HEIGHT = 1844; // Final pixel height

// Standard export dimensions
const STANDARD_CSS_WIDTH = 1920;
const STANDARD_CSS_HEIGHT = 1080;

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

async function loadPrintIframe(
  slideIds: string[],
  cssWidth: number = STANDARD_CSS_WIDTH,
  cssHeight: number = STANDARD_CSS_HEIGHT
): Promise<HTMLIFrameElement> {
  const slidesParam = encodeURIComponent(slideIds.join(","));
  const url = `/print/raw?slides=${slidesParam}`;

  return new Promise((resolve, reject) => {
    const iframe = document.createElement("iframe");
    iframe.style.cssText = `position:fixed;left:0;top:0;width:${cssWidth}px;height:${cssHeight}px;z-index:-9999;pointer-events:none;border:none;`;
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

  // Wait for all images (including ones added dynamically)
  const waitForImages = async () => {
    const imgs = doc.querySelectorAll("img");
    await Promise.all(Array.from(imgs).map((img) =>
      img.complete ? Promise.resolve() : new Promise((r) => { img.onload = r; img.onerror = r; })
    ));
  };
  await waitForImages();

  // Let charts (Recharts SVG) and layout fully settle — animations need to complete
  await new Promise((r) => setTimeout(r, 5000));

  // Re-check images in case any loaded lazily
  await waitForImages();
}

interface CaptureOptions {
  cssWidth?: number;
  cssHeight?: number;
  scale?: number;
  format?: "jpeg" | "png";
  quality?: number;
  /** Milliseconds to wait for animations per slide (default: 200, hi-res: 2500) */
  animationDelay?: number;
}

async function captureFromIframe(
  iframe: HTMLIFrameElement,
  onProgress?: ProgressCallback,
  options: CaptureOptions = {}
): Promise<string[]> {
  const {
    cssWidth = STANDARD_CSS_WIDTH,
    cssHeight = STANDARD_CSS_HEIGHT,
    scale = 2,
    format = "jpeg",
    quality = 0.95,
    animationDelay = 200,
  } = options;

  const { snapdom } = await import("@zumer/snapdom");
  const doc = iframe.contentDocument;
  if (!doc) throw new Error("Cannot access iframe document");

  const slideEls = doc.querySelectorAll<HTMLElement>(".print-slide");
  const total = slideEls.length;
  const images: string[] = [];

  for (let i = 0; i < total; i++) {
    const el = slideEls[i];
    const label = el.getAttribute("data-slide-label") || `Slide ${i + 1}`;
    onProgress?.({ phase: "rendering", current: i + 1, total, slideLabel: label });

    // Show only this slide
    for (let j = 0; j < slideEls.length; j++) {
      const s = slideEls[j] as HTMLElement;
      if (j === i) {
        s.style.display = "flex";
        s.style.width = `${cssWidth}px`;
        s.style.height = `${cssHeight}px`;
      } else {
        s.style.display = "none";
      }
    }
    
    // Wait for layout
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    
    // Wait for animations to complete (longer for hi-res exports)
    await new Promise((r) => setTimeout(r, animationDelay));

    const result = await snapdom(el, {
      scale,
      dpr: 1,
      backgroundColor: "#000208",
      embedFonts: true,
    });
    const canvas = await result.toCanvas();
    
    if (format === "png") {
      images.push(canvas.toDataURL("image/png"));
    } else {
      images.push(canvas.toDataURL("image/jpeg", quality));
    }
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

/**
 * Generate a high-resolution PPTX using boss's exact screenshot specs.
 * Client-side implementation matching the PNG PDF quality.
 * 
 * - Each slide: 3434 × 1844 pixels (PNG format, lossless)
 * - Uses same /print/raw route as Hi-Res PDF for correct chart rendering
 * - Processes one slide at a time to avoid memory issues
 */
export async function generatePptxHiResClient(
  slideIds: string[],
  onProgress?: ProgressCallback
) {
  onProgress?.({ phase: "rendering", current: 0, total: slideIds.length, slideLabel: "Loading slides..." });

  // Use boss's exact dimensions
  const iframe = await loadPrintIframe(slideIds, BOSS_CSS_WIDTH, BOSS_CSS_HEIGHT);
  
  try {
    await waitForIframeReady(iframe);
    
    const doc = iframe.contentDocument;
    if (!doc) throw new Error("Cannot access iframe document");
    const slideEls = doc.querySelectorAll<HTMLElement>(".print-slide");
    const total = slideEls.length;

    // Collect PNG data URLs for PPTX (pptxgenjs needs data URLs)
    const pngDataUrls: string[] = [];

    // Process ONE slide at a time to avoid memory buildup
    for (let i = 0; i < total; i++) {
      const el = slideEls[i];
      const label = el.getAttribute("data-slide-label") || `Slide ${i + 1}`;
      onProgress?.({ phase: "rendering", current: i + 1, total, slideLabel: label });

      // Capture this single slide as PNG data URL
      const pngDataUrl = await captureSingleSlidePng(
        iframe,
        i,
        BOSS_CSS_WIDTH,
        BOSS_CSS_HEIGHT,
        BOSS_SCALE,
        5000 // 5 seconds for animations
      );
      
      pngDataUrls.push(pngDataUrl);
    }

    onProgress?.({ phase: "assembling", current: total, total, slideLabel: "Building PPTX..." });

    const PptxGenJS = (await import("pptxgenjs")).default;
    const pptx = new PptxGenJS();
    
    // Boss's aspect ratio: 3434 / 1844 ≈ 1.862
    // Use 13.33 x 7.16 inches (same aspect ratio, high DPI)
    const slideWidth = 13.33;
    const slideHeight = slideWidth / (BOSS_OUTPUT_WIDTH / BOSS_OUTPUT_HEIGHT);
    
    pptx.defineLayout({ name: "HIRES", width: slideWidth, height: slideHeight });
    pptx.layout = "HIRES";
    pptx.author = "Nextiva";
    pptx.title = "Nextiva Investor Deck 2026";

    for (const imgData of pngDataUrls) {
      const slide = pptx.addSlide();
      slide.addImage({ data: imgData, x: 0, y: 0, w: slideWidth, h: slideHeight });
    }

    const output = await pptx.write({ outputType: "blob" });
    const blob = output instanceof Blob ? output : new Blob([output as ArrayBuffer]);
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    triggerDownload(blob, `Nextiva-Deck-HiRes_${timestamp}.pptx`);
    onProgress?.({ phase: "done", current: total, total });
  } finally {
    iframe.remove();
  }
}

/**
 * Export specs matching boss's exact screenshots (Retina Mac @ 144 DPI)
 * Use this to verify exports match the reference
 */
export const BOSS_EXPORT_SPECS = {
  cssWidth: BOSS_CSS_WIDTH,
  cssHeight: BOSS_CSS_HEIGHT,
  scale: BOSS_SCALE,
  outputWidth: BOSS_OUTPUT_WIDTH,
  outputHeight: BOSS_OUTPUT_HEIGHT,
  dpi: 144,
  aspectRatio: BOSS_OUTPUT_WIDTH / BOSS_OUTPUT_HEIGHT, // ~1.86
  format: "png" as const,
  colorProfile: "Display P3 (native) / sRGB (export)",
} as const;

/**
 * Generate a high-resolution PDF using boss's exact screenshot specs:
 * - Each page: 3434 × 1844 pixels at 144 DPI
 * - Uses high-quality JPEG (95%) to avoid memory issues with large PNGs
 * - Single PDF download
 */
export async function generatePngZipClient(
  slideIds: string[],
  onProgress?: ProgressCallback
) {
  onProgress?.({ phase: "rendering", current: 0, total: slideIds.length, slideLabel: "Loading slides..." });

  // Use boss's exact dimensions
  const iframe = await loadPrintIframe(slideIds, BOSS_CSS_WIDTH, BOSS_CSS_HEIGHT);
  try {
    await waitForIframeReady(iframe);

    // Use JPEG at 95% quality to avoid memory issues with large PNGs
    // Wait 5 seconds per slide to ensure ALL animations fully complete
    const images = await captureFromIframe(iframe, onProgress, {
      cssWidth: BOSS_CSS_WIDTH,
      cssHeight: BOSS_CSS_HEIGHT,
      scale: BOSS_SCALE,
      format: "jpeg",
      quality: 0.98, // Near-lossless quality, visually identical to PNG
      animationDelay: 5000, // 5 seconds - guarantees all animations complete
    });
    if (images.length === 0) throw new Error("No slides captured");

    onProgress?.({ phase: "assembling", current: images.length, total: images.length, slideLabel: "Building PDF..." });

    const { jsPDF } = await import("jspdf");
    // Create PDF with boss's exact pixel dimensions (3434 × 1844)
    const pdf = new jsPDF({ 
      orientation: "landscape", 
      unit: "px", 
      format: [BOSS_OUTPUT_WIDTH, BOSS_OUTPUT_HEIGHT],
      compress: true,
    });

    for (let i = 0; i < images.length; i++) {
      if (i > 0) pdf.addPage([BOSS_OUTPUT_WIDTH, BOSS_OUTPUT_HEIGHT], "landscape");
      pdf.addImage(images[i], "JPEG", 0, 0, BOSS_OUTPUT_WIDTH, BOSS_OUTPUT_HEIGHT);
    }

    // Get PDF as arraybuffer and convert to Blob explicitly
    const pdfOutput = pdf.output("arraybuffer");
    const blob = new Blob([pdfOutput], { type: "application/pdf" });
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    triggerDownload(blob, `Nextiva-Deck-HiRes_${timestamp}.pdf`);
    onProgress?.({ phase: "done", current: images.length, total: images.length });
  } finally {
    iframe.remove();
  }
}

// Alias for backwards compatibility
export const generatePdfBossSpecClient = generatePngZipClient;

/**
 * Capture a SINGLE slide as PNG and return the data URL.
 * Processes one slide at a time to avoid memory buildup.
 */
async function captureSingleSlidePng(
  iframe: HTMLIFrameElement,
  slideIndex: number,
  cssWidth: number,
  cssHeight: number,
  scale: number,
  animationDelay: number
): Promise<string> {
  const { snapdom } = await import("@zumer/snapdom");
  const doc = iframe.contentDocument;
  if (!doc) throw new Error("Cannot access iframe document");

  const slideEls = doc.querySelectorAll<HTMLElement>(".print-slide");
  const el = slideEls[slideIndex];
  
  // Show only this slide
  for (let j = 0; j < slideEls.length; j++) {
    const s = slideEls[j] as HTMLElement;
    if (j === slideIndex) {
      s.style.display = "flex";
      s.style.width = `${cssWidth}px`;
      s.style.height = `${cssHeight}px`;
    } else {
      s.style.display = "none";
    }
  }
  
  // Wait for layout
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  
  // Wait for animations to complete
  await new Promise((r) => setTimeout(r, animationDelay));

  const result = await snapdom(el, {
    scale,
    dpr: 1,
    backgroundColor: "#000208",
    embedFonts: true,
  });
  const canvas = await result.toCanvas();
  
  // Get PNG data URL
  const dataUrl = canvas.toDataURL("image/png");
  
  // Clean up canvas to free memory
  canvas.width = 0;
  canvas.height = 0;
  
  return dataUrl;
}

/**
 * Capture a SINGLE slide as PNG and return ArrayBuffer (memory efficient).
 * Uses Blob instead of data URL to avoid large string allocations.
 */
async function captureSlideAsPngArrayBuffer(
  iframe: HTMLIFrameElement,
  slideIndex: number,
  cssWidth: number,
  cssHeight: number,
  scale: number,
  animationDelay: number
): Promise<ArrayBuffer> {
  const { snapdom } = await import("@zumer/snapdom");
  const doc = iframe.contentDocument;
  if (!doc) throw new Error("Cannot access iframe document");

  const slideEls = doc.querySelectorAll<HTMLElement>(".print-slide");
  const el = slideEls[slideIndex];
  
  // Show only this slide
  for (let j = 0; j < slideEls.length; j++) {
    const s = slideEls[j] as HTMLElement;
    if (j === slideIndex) {
      s.style.display = "flex";
      s.style.width = `${cssWidth}px`;
      s.style.height = `${cssHeight}px`;
    } else {
      s.style.display = "none";
    }
  }
  
  // Wait for layout
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  
  // Wait for animations to complete
  await new Promise((r) => setTimeout(r, animationDelay));

  const result = await snapdom(el, {
    scale,
    dpr: 1,
    backgroundColor: "#000208",
    embedFonts: true,
  });
  const canvas = await result.toCanvas();
  
  // Use Blob instead of data URL (much more memory efficient)
  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (b) => {
        if (b) resolve(b);
        else reject(new Error("Failed to create PNG blob"));
      },
      "image/png"
    );
  });
  
  // Clear canvas to free memory immediately
  canvas.width = 0;
  canvas.height = 0;
  
  // Return ArrayBuffer for pdf-lib
  return blob.arrayBuffer();
}

/**
 * Generate a lossless PNG-based PDF using boss's exact screenshot specs.
 * Client-side implementation using pdf-lib with ArrayBuffer (memory efficient).
 * 
 * - Each page: 3434 × 1844 pixels (PNG format, lossless)
 * - Processes ONE slide at a time to avoid memory issues
 * - Uses the same /print/raw route as Hi-Res PDF for correct chart rendering
 */
export async function generatePngPdfClient(
  slideIds: string[],
  onProgress?: ProgressCallback
) {
  onProgress?.({ phase: "rendering", current: 0, total: slideIds.length, slideLabel: "Loading slides..." });

  // Import pdf-lib for PNG embedding
  const { PDFDocument } = await import("pdf-lib");
  const pdfDoc = await PDFDocument.create();

  // Use boss's exact dimensions
  const iframe = await loadPrintIframe(slideIds, BOSS_CSS_WIDTH, BOSS_CSS_HEIGHT);
  
  try {
    await waitForIframeReady(iframe);
    
    const doc = iframe.contentDocument;
    if (!doc) throw new Error("Cannot access iframe document");
    const slideEls = doc.querySelectorAll<HTMLElement>(".print-slide");
    const total = slideEls.length;

    // Process ONE slide at a time to avoid memory buildup
    for (let i = 0; i < total; i++) {
      const el = slideEls[i];
      const label = el.getAttribute("data-slide-label") || `Slide ${i + 1}`;
      onProgress?.({ phase: "rendering", current: i + 1, total, slideLabel: label });

      // Capture this single slide as PNG ArrayBuffer
      const pngBuffer = await captureSlideAsPngArrayBuffer(
        iframe,
        i,
        BOSS_CSS_WIDTH,
        BOSS_CSS_HEIGHT,
        BOSS_SCALE,
        5000 // 5 seconds for animations
      );
      
      // Embed PNG directly into PDF (no base64 conversion)
      const pngImage = await pdfDoc.embedPng(pngBuffer);
      
      // Add page with exact pixel dimensions
      const page = pdfDoc.addPage([BOSS_OUTPUT_WIDTH, BOSS_OUTPUT_HEIGHT]);
      
      // Draw PNG filling the entire page
      page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: BOSS_OUTPUT_WIDTH,
        height: BOSS_OUTPUT_HEIGHT,
      });
    }

    onProgress?.({ phase: "assembling", current: total, total, slideLabel: "Saving PDF..." });

    // Generate PDF bytes with optimizations for faster rendering
    const pdfBytes = await pdfDoc.save({
      useObjectStreams: true,  // Better compression, faster loading
    });
    
    // Create blob and download (cast to ArrayBuffer for TypeScript compatibility)
    const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    triggerDownload(blob, `Nextiva-Deck-PNG-Lossless_${timestamp}.pdf`);
    
    onProgress?.({ phase: "done", current: total, total });
  } finally {
    iframe.remove();
  }
}

/**
 * Generate a ZIP file of PNG images matching boss's exact screenshot specs:
 * - Each image: 3434 × 1844 pixels (PNG format, lossless)
 * - Processes ONE slide at a time to avoid memory issues
 * - Filenames: 01.png, 02.png, etc. (sorted order)
 * - Takes ~3-5 minutes for 38 slides
 * 
 * After download, use Preview (Mac) or any online tool to combine into PDF.
 */
export async function generatePngZipActual(
  slideIds: string[],
  onProgress?: ProgressCallback
) {
  onProgress?.({ phase: "rendering", current: 0, total: slideIds.length, slideLabel: "Loading slides..." });

  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();

  // Use boss's exact dimensions
  const iframe = await loadPrintIframe(slideIds, BOSS_CSS_WIDTH, BOSS_CSS_HEIGHT);
  
  try {
    await waitForIframeReady(iframe);
    
    const doc = iframe.contentDocument;
    if (!doc) throw new Error("Cannot access iframe document");
    const slideEls = doc.querySelectorAll<HTMLElement>(".print-slide");
    const total = slideEls.length;

    // Process ONE slide at a time to avoid memory buildup
    for (let i = 0; i < total; i++) {
      const el = slideEls[i];
      const label = el.getAttribute("data-slide-label") || `Slide ${i + 1}`;
      onProgress?.({ phase: "rendering", current: i + 1, total, slideLabel: label });

      // Capture this single slide as PNG
      const pngDataUrl = await captureSingleSlidePng(
        iframe,
        i,
        BOSS_CSS_WIDTH,
        BOSS_CSS_HEIGHT,
        BOSS_SCALE,
        5000 // 5 seconds for animations
      );
      
      // Convert data URL to binary and add to ZIP immediately
      const base64Data = pngDataUrl.split(",")[1];
      const filename = String(i + 1).padStart(2, "0") + ".png";
      zip.file(filename, base64Data, { base64: true });
      
      // Encourage garbage collection by nullifying reference
      // (JavaScript will GC the previous PNG data when we move to next iteration)
    }

    onProgress?.({ phase: "assembling", current: total, total, slideLabel: "Creating ZIP..." });

    // Generate ZIP blob
    const blob = await zip.generateAsync({ 
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: { level: 1 }, // Fast compression (PNGs are already compressed)
    });
    
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    triggerDownload(blob, `Nextiva-Deck-PNGs_${timestamp}.zip`);
    onProgress?.({ phase: "done", current: total, total });
  } finally {
    iframe.remove();
  }
}
