"use client";

import { GripVertical } from "lucide-react";
import type { SlideDef } from "@/components/slideRegistry";

interface Props {
  slide: SlideDef;
  index: number;
  category?: string | null;
  categoryColor?: { bg: string; text: string; dot: string } | null;
}

export default function SlideCardContent({ slide, index, category, categoryColor }: Props) {
  const Slide = slide.component;

  return (
    <>
      {/* Thumbnail */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          position: "relative",
          background: "#000208",
        }}
      >
        <div
          style={{
            width: 1920,
            height: 1080,
            transform: "scale(0.177)",
            transformOrigin: "top left",
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Slide slideNumber={index + 1} />
        </div>
        {/* Category pill overlay on thumbnail */}
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
              backdropFilter: "blur(8px)",
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

      {/* Label bar */}
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
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 28, height: 28, borderRadius: 6,
            background: categoryColor ? categoryColor.bg : "rgba(40,96,178,0.15)",
            color: categoryColor ? categoryColor.text : "#5b9cf5",
            fontSize: 13, fontWeight: 600, flexShrink: 0,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {index + 1}
        </span>
        <span
          style={{
            color: "#fff", fontSize: 14, fontWeight: 500,
            fontFamily: "'Space Grotesk', sans-serif",
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}
        >
          {slide.label}
        </span>
        {slide.isNew && (
          <span
            style={{
              fontSize: 10, fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "#fff", background: "#2860B2",
              padding: "2px 7px", borderRadius: 4, flexShrink: 0, lineHeight: 1.4,
            }}
          >
            New
          </span>
        )}
      </div>
    </>
  );
}
