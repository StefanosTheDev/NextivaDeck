"use client";

import { useEffect, useCallback, useState, type ComponentType } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X, Loader2 } from "lucide-react";
import type { SlideCatalogMeta } from "@/types/slideCatalog";

interface Props {
  slide: SlideCatalogMeta | null;
  slideIndex: number;
  totalCount: number;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
  onEditInDeck: (slideId: string) => void;
}

export default function CatalogSlidePreviewPanel({
  slide,
  slideIndex,
  totalCount,
  onPrevious,
  onNext,
  onClose,
  onEditInDeck,
}: Props) {
  const [SlideComponent, setSlideComponent] = useState<ComponentType<{
    slideNumber: number;
    slideId?: string;
  }> | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);

  useEffect(() => {
    if (!slide) {
      setSlideComponent(null);
      return;
    }
    let cancelled = false;
    setPreviewLoading(true);
    import("@/components/slideRegistry")
      .then((mod) => {
        if (cancelled) return;
        const def = mod.SLIDE_COMPONENTS[slide.id];
        setSlideComponent(() => def?.component ?? null);
      })
      .finally(() => {
        if (!cancelled) setPreviewLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [slide?.id]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!slide) return;
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    },
    [slide, onPrevious, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!slide) {
    return (
      <aside
        style={{
          width: 420,
          minWidth: 420,
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
          height: "100%",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 14,
            textAlign: "center",
            fontFamily: "'Space Grotesk', sans-serif",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Select a slide from the list to preview it here.
          <br />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            Double-click any slide to open it in the deck for editing.
          </span>
        </p>
      </aside>
    );
  }

  const canGoPrev = slideIndex > 0;
  const canGoNext = slideIndex < totalCount - 1;

  return (
    <aside
      style={{
        width: 420,
        minWidth: 420,
        borderLeft: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexShrink: 0,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 4,
            }}
          >
            Preview · {slideIndex + 1} of {totalCount}
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {slide.label}
          </div>
        </div>
        <button
          onClick={onClose}
          title="Clear preview"
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            cursor: "pointer",
            padding: 4,
          }}
        >
          <X size={18} />
        </button>
      </div>

      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 360,
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "#000208",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {previewLoading && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                background: "rgba(0,2,8,0.85)",
              }}
            >
              <Loader2
                size={28}
                style={{ color: "#5b9cf5", animation: "spin 1s linear infinite" }}
              />
            </div>
          )}
          {SlideComponent && (
            <div
              style={{
                width: 1920,
                height: 1080,
                transform: "scale(0.1875)",
                transformOrigin: "top left",
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <SlideComponent slideNumber={slideIndex + 1} slideId={slide.id} />
            </div>
          )}
          {!previewLoading && !SlideComponent && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.4)",
                fontSize: 13,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Preview unavailable
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          padding: "14px 20px 20px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={onPrevious}
            disabled={!canGoPrev}
            className="catalog-btn-outline"
            style={{
              flex: 1,
              justifyContent: "center",
              opacity: canGoPrev ? 1 : 0.35,
              cursor: canGoPrev ? "pointer" : "default",
            }}
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={!canGoNext}
            className="catalog-btn-outline"
            style={{
              flex: 1,
              justifyContent: "center",
              opacity: canGoNext ? 1 : 0.35,
              cursor: canGoNext ? "pointer" : "default",
            }}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
        <button
          onClick={() => onEditInDeck(slide.id)}
          className="catalog-btn-primary"
          style={{
            width: "100%",
            justifyContent: "center",
            background: "#2860B2",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <ExternalLink size={15} />
          Edit in Deck
        </button>
        <p
          style={{
            margin: 0,
            fontSize: 11,
            color: "rgba(255,255,255,0.25)",
            textAlign: "center",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          ← → arrow keys · double-click list item for deck
        </p>
      </div>
    </aside>
  );
}
