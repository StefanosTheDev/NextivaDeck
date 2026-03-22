"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Check, Download, FileDown, Loader2, CheckSquare, Square } from "lucide-react";
import type { SlideDef } from "@/components/slideRegistry";

type ExportFormat = "pdf" | "pptx";

interface Props {
  format: ExportFormat;
  slides: { id: string; slide: SlideDef; isHidden: boolean }[];
  onClose: () => void;
}

type GenerationState =
  | { status: "picking" }
  | { status: "generating"; current: number; total: number; slideLabel: string }
  | { status: "done" }
  | { status: "error"; message: string };

export default function ExportPickerModal({ format, slides, onClose }: Props) {
  const publishedSlides = slides.filter((s) => !s.isHidden);
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(publishedSlides.map((s) => s.id))
  );
  const [state, setState] = useState<GenerationState>({ status: "picking" });
  const offscreenRef = useRef<HTMLDivElement>(null);
  const [renderSlides, setRenderSlides] = useState(false);

  const toggle = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectAll = useCallback(() => {
    setSelected(new Set(publishedSlides.map((s) => s.id)));
  }, [publishedSlides]);

  const deselectAll = useCallback(() => {
    setSelected(new Set());
  }, []);

  const selectedSlides = publishedSlides.filter((s) => selected.has(s.id));

  const handleGenerate = useCallback(async () => {
    if (selectedSlides.length === 0) return;

    setState({
      status: "generating",
      current: 0,
      total: selectedSlides.length,
      slideLabel: "Preparing slides...",
    });
    setRenderSlides(true);
  }, [selectedSlides]);

  useEffect(() => {
    if (!renderSlides || state.status !== "generating") return;

    const timer = setTimeout(async () => {
      const container = offscreenRef.current;
      if (!container) return;

      try {
        await document.fonts.ready;
        // Wait for all images in the offscreen container to load
        const imgs = container.querySelectorAll("img");
        await Promise.all(Array.from(imgs).map((img) =>
          img.complete ? Promise.resolve() : new Promise((r) => { img.onload = r; img.onerror = r; })
        ));
        await new Promise((r) => setTimeout(r, 1500));

        const exportFn = format === "pdf"
          ? (await import("@/lib/clientExport")).generatePdfClient
          : (await import("@/lib/clientExport")).generatePptxClient;

        await exportFn(container, (progress) => {
          setState({
            status: "generating",
            current: progress.current,
            total: progress.total,
            slideLabel: progress.slideLabel || "",
          });
        });

        setState({ status: "done" });
      } catch (err) {
        setState({
          status: "error",
          message: err instanceof Error ? err.message : "Generation failed",
        });
      } finally {
        setRenderSlides(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [renderSlides, state.status, format]);

  const allSelected = selected.size === publishedSlides.length;
  const noneSelected = selected.size === 0;
  const isGenerating = state.status === "generating";

  return (
    <>
      {/* Offscreen render container for html2canvas capture */}
      {renderSlides && createPortal(
        <>
          <style dangerouslySetInnerHTML={{ __html: `
            #export-offscreen .print-slide {
              width: 1920px !important;
              height: 1080px !important;
              overflow: hidden !important;
              position: relative !important;
              flex-shrink: 0 !important;
            }
            #export-offscreen .print-slide .slide {
              width: 1920px !important;
              height: 1080px !important;
            }
            #export-offscreen * {
              animation-duration: 0s !important;
              animation-delay: 0s !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          `}} />
          <div
            ref={offscreenRef}
            id="export-offscreen"
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: 1920,
              height: 1080,
              overflow: "hidden",
              zIndex: -9999,
              pointerEvents: "none",
              background: "#000208",
              clipPath: "inset(0 0 0 0)",
            }}
          >
            {selectedSlides.map((s, idx) => {
              const Slide = s.slide.component;
              return (
                <div
                  key={s.id}
                  className="print-slide"
                  data-slide-id={s.id}
                  data-slide-label={s.slide.label}
                  style={{
                    width: 1920,
                    height: 1080,
                    overflow: "hidden",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <Slide slideNumber={idx + 1} />
                </div>
              );
            })}
          </div>
        </>,
        document.body
      )}

      <div
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 40,
        }}
        onClick={isGenerating ? undefined : onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#111827", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, width: "100%", maxWidth: 600, maxHeight: "85vh",
            display: "flex", flexDirection: "column",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {/* Header */}
          <div style={{
            padding: "20px 24px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: 0 }}>
                {format === "pdf" ? "Generate PDF" : "Generate PowerPoint"}
              </h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>
                {state.status === "picking"
                  ? `Select slides to include (${selected.size} of ${publishedSlides.length})`
                  : state.status === "generating"
                    ? `Rendering slide ${state.current} of ${state.total}...`
                    : state.status === "done"
                      ? "Download complete!"
                      : "Generation failed"}
              </p>
            </div>
            {!isGenerating && (
              <button
                onClick={onClose}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: 4 }}
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Progress bar */}
          {(state.status === "generating" || state.status === "done") && (
            <div style={{ padding: "12px 24px 0" }}>
              <div style={{
                height: 6, borderRadius: 3,
                background: "rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", borderRadius: 3,
                  background: state.status === "done" ? "#059669" : "#2860B2",
                  width: state.status === "done"
                    ? "100%"
                    : `${Math.max(2, (state.current / state.total) * 100)}%`,
                  transition: "width 0.5s ease-out, background 0.3s",
                }} />
              </div>
              {state.status === "generating" && (
                <p style={{
                  fontSize: 12, color: "rgba(255,255,255,0.4)",
                  margin: "8px 0 0", textAlign: "center",
                }}>
                  {state.slideLabel}
                </p>
              )}
            </div>
          )}

          {/* Error message */}
          {state.status === "error" && (
            <div style={{
              margin: "12px 24px 0", padding: "10px 14px",
              background: "rgba(239,68,68,0.1)", borderRadius: 8,
              border: "1px solid rgba(239,68,68,0.2)",
              color: "#f87171", fontSize: 13,
            }}>
              {state.message}
            </div>
          )}

          {/* Slide list (picking) */}
          {(state.status === "picking" || state.status === "error") && (
            <>
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "12px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                <button
                  onClick={allSelected ? deselectAll : selectAll}
                  style={{
                    display: "flex", alignItems: "center", gap: 6,
                    background: "none", border: "none",
                    color: "rgba(255,255,255,0.5)", cursor: "pointer",
                    fontSize: 13, fontFamily: "'Space Grotesk', sans-serif",
                    padding: "4px 0",
                  }}
                >
                  {allSelected
                    ? <><CheckSquare size={14} /> Deselect All</>
                    : <><Square size={14} /> Select All</>
                  }
                </button>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
                  {selected.size} selected
                </span>
              </div>

              <div style={{ flex: 1, overflowY: "auto", padding: "4px 24px 12px" }}>
                {publishedSlides.map((s, idx) => {
                  const isChecked = selected.has(s.id);
                  return (
                    <label
                      key={s.id}
                      style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "7px 8px", borderRadius: 6, cursor: "pointer",
                        background: isChecked ? "rgba(40,96,178,0.06)" : "transparent",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = isChecked
                          ? "rgba(40,96,178,0.1)"
                          : "rgba(255,255,255,0.03)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = isChecked
                          ? "rgba(40,96,178,0.06)"
                          : "transparent";
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(s.id)}
                        style={{ display: "none" }}
                      />
                      <div style={{
                        width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        border: isChecked ? "none" : "1.5px solid rgba(255,255,255,0.2)",
                        background: isChecked ? "#2860B2" : "transparent",
                        transition: "all 0.15s",
                      }}>
                        {isChecked && <Check size={12} color="#fff" strokeWidth={3} />}
                      </div>
                      <span style={{
                        fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.3)",
                        minWidth: 24, textAlign: "right", flexShrink: 0,
                      }}>
                        {idx + 1}
                      </span>
                      <span style={{
                        fontSize: 13,
                        color: isChecked ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)",
                        flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                      }}>
                        {s.slide.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </>
          )}

          {/* Generating slide list */}
          {state.status === "generating" && (
            <div style={{ flex: 1, overflowY: "auto", padding: "4px 24px 12px" }}>
              {selectedSlides.map((s, idx) => {
                const isDone = idx < state.current;
                const isCurrent = idx === state.current - 1;
                return (
                  <div
                    key={s.id}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "6px 8px", borderRadius: 6,
                      background: isCurrent ? "rgba(40,96,178,0.08)" : "transparent",
                    }}
                  >
                    <div style={{
                      width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: isDone ? "#059669" : isCurrent ? "rgba(40,96,178,0.3)" : "rgba(255,255,255,0.05)",
                    }}>
                      {isDone
                        ? <Check size={12} color="#fff" strokeWidth={3} />
                        : isCurrent
                          ? <Loader2 size={12} color="#5b9cf5" style={{ animation: "spin 1s linear infinite" }} />
                          : null
                      }
                    </div>
                    <span style={{
                      fontSize: 12, fontWeight: 600,
                      color: "rgba(255,255,255,0.3)", minWidth: 24, textAlign: "right", flexShrink: 0,
                    }}>
                      {idx + 1}
                    </span>
                    <span style={{
                      fontSize: 13, flex: 1,
                      color: isDone ? "rgba(255,255,255,0.5)"
                        : isCurrent ? "#5b9cf5"
                          : "rgba(255,255,255,0.25)",
                      fontWeight: isCurrent ? 500 : 400,
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {s.slide.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Done view */}
          {state.status === "done" && (
            <div style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 12,
              padding: "40px 24px",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "rgba(5,150,105,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Check size={24} color="#34d399" />
              </div>
              <p style={{ color: "#34d399", fontSize: 16, fontWeight: 600, margin: 0 }}>
                Download complete!
              </p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: 0 }}>
                {selected.size} slides exported as {format.toUpperCase()}
              </p>
            </div>
          )}

          {/* Footer */}
          <div style={{
            padding: "14px 24px 18px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            {state.status === "picking" || state.status === "error" ? (
              <>
                <button
                  onClick={onClose}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "9px 20px", borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "transparent", color: "rgba(255,255,255,0.6)",
                    fontSize: 14, fontFamily: "'Space Grotesk', sans-serif",
                    cursor: "pointer", marginRight: "auto",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleGenerate}
                  disabled={noneSelected}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "9px 24px", borderRadius: 8, border: "none",
                    background: noneSelected ? "rgba(255,255,255,0.08)" : "#2860B2",
                    color: noneSelected ? "rgba(255,255,255,0.3)" : "#fff",
                    fontSize: 14, fontWeight: 500,
                    fontFamily: "'Space Grotesk', sans-serif",
                    cursor: noneSelected ? "default" : "pointer",
                  }}
                >
                  {format === "pdf"
                    ? <><Download size={15} /> Generate PDF ({selected.size} slides)</>
                    : <><FileDown size={15} /> Generate PPTX ({selected.size} slides)</>
                  }
                </button>
              </>
            ) : state.status === "generating" ? (
              <p style={{
                color: "rgba(255,255,255,0.4)", fontSize: 13,
                margin: 0, textAlign: "center", flex: 1,
              }}>
                Please wait — this may take a minute for {state.total} slides...
              </p>
            ) : (
              <button
                onClick={onClose}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "9px 24px", borderRadius: 8, border: "none",
                  background: "#059669", color: "#fff",
                  fontSize: 14, fontWeight: 500,
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer", marginLeft: "auto",
                }}
              >
                <Check size={15} /> Done
              </button>
            )}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}} />
      </div>
    </>
  );
}
