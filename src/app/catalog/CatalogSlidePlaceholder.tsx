"use client";

import { GripVertical, EyeOff, ImageIcon } from "lucide-react";
import type { SlideCatalogMeta } from "@/types/slideCatalog";

interface Props {
  slide: SlideCatalogMeta;
  index: number;
  category?: string | null;
  categoryColor?: { bg: string; text: string; dot: string } | null;
  compact?: boolean;
}

export default function CatalogSlidePlaceholder({
  slide,
  index,
  category,
  categoryColor,
  compact = false,
}: Props) {
  const accent = categoryColor?.dot ?? "#2860B2";

  if (compact) {
    return (
      <div
        style={{
          width: 48,
          height: 28,
          borderRadius: 4,
          background: `linear-gradient(135deg, ${accent}33 0%, rgba(0,2,8,0.9) 100%)`,
          border: "1px solid rgba(255,255,255,0.08)",
          flexShrink: 0,
        }}
      />
    );
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          position: "relative",
          background: `linear-gradient(145deg, ${accent}22 0%, #000208 55%, #0a1628 100%)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: 16,
        }}
      >
        <ImageIcon size={28} style={{ color: "rgba(255,255,255,0.15)" }} />
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'Space Grotesk', sans-serif",
            textAlign: "center",
          }}
        >
          Click to preview
        </span>
        {category && categoryColor && (
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "3px 9px",
              borderRadius: 6,
              background: "rgba(0,0,0,0.65)",
              fontSize: 11,
              fontWeight: 600,
              color: categoryColor.text,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: categoryColor.dot }} />
            {category}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <GripVertical size={16} style={{ color: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: 6,
            background: categoryColor ? categoryColor.bg : "rgba(40,96,178,0.15)",
            color: categoryColor ? categoryColor.text : "#5b9cf5",
            fontSize: 13,
            fontWeight: 600,
            flexShrink: 0,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {index + 1}
        </span>
        <span
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "'Space Grotesk', sans-serif",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flex: 1,
          }}
        >
          {slide.label}
        </span>
        {slide.isNew && (
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#2860B2",
              padding: "2px 7px",
              borderRadius: 4,
              flexShrink: 0,
            }}
          >
            New
          </span>
        )}
      </div>
    </>
  );
}

export function CatalogHiddenBadge() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        background: "rgba(0,0,0,0.7)",
        fontSize: 12,
        fontWeight: 600,
        color: "#ef4444",
        fontFamily: "'Space Grotesk', sans-serif",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        borderBottomRightRadius: 8,
      }}
    >
      <EyeOff size={13} />
      Hidden
    </div>
  );
}
