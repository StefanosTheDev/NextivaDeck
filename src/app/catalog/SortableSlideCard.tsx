"use client";

import { useRef } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { EyeOff, Trash2 } from "lucide-react";
import type { SlideDef } from "@/components/slideRegistry";
import SlideCardContent from "./SlideCardContent";

interface Props {
  slide: SlideDef;
  index: number;
  isActive: boolean;
  isHidden: boolean;
  onToggleHide: () => void;
  category: string | null;
  categoryColor: { bg: string; text: string; dot: string } | null;
  allCategories: string[];
  onAssignCategory: (category: string | null) => void;
  sourceBadge?: "main" | "yaniv";
  onRemove?: () => void;
}

export default function SortableSlideCard({
  slide, index, isActive, isHidden, onToggleHide,
  category, categoryColor,
  allCategories, onAssignCategory,
  sourceBadge, onRemove,
}: Props) {
  const {
    attributes, listeners, setNodeRef, transform, transition, isDragging,
  } = useSortable({ id: slide.id });
  const didDrag = useRef(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : isHidden ? 0.5 : 1,
    zIndex: isDragging ? 50 : "auto" as const,
  };

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, position: "relative" as const }}
      {...attributes}
      {...listeners}
      onPointerDown={(e) => {
        didDrag.current = false;
        listeners?.onPointerDown?.(e);
      }}
      onPointerMove={(e) => {
        didDrag.current = true;
        listeners?.onPointerMove?.(e);
      }}
      onClick={() => {
        if (!didDrag.current) {
          window.location.href = `/?slide=${index + 1}`;
        }
      }}
    >
      <div
        style={{
          borderRadius: 12, overflow: "hidden",
          border: isActive ? "2px solid #2860B2" : isHidden ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(255,255,255,0.08)",
          background: "#111827",
          cursor: isDragging ? "grabbing" : "pointer",
          transition: "border-color 0.2s, box-shadow 0.2s",
          boxShadow: isActive ? "0 8px 32px rgba(40,96,178,0.3)" : "0 2px 12px rgba(0,0,0,0.3)",
        }}
        onMouseEnter={(e) => {
          if (!isDragging) {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isDragging && !isActive) {
            e.currentTarget.style.borderColor = isHidden ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.3)";
          }
        }}
      >
        {/* Hidden overlay badge */}
        {isHidden && (
          <div
            style={{
              position: "absolute", top: 0, left: 0, right: 0,
              zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center",
              gap: 6, padding: "6px 0",
              background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
              fontSize: 12, fontWeight: 600, color: "#ef4444",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.04em", textTransform: "uppercase",
            }}
          >
            <EyeOff size={13} />
            Hidden from Deck
          </div>
        )}

        <SlideCardContent
          slide={slide}
          index={index}
          category={category}
          categoryColor={categoryColor}
        />

        {/* Bottom bar: source badge + category + hide toggle + remove */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "6px 16px 10px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
          }}
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {sourceBadge && (
            <span
              className={`source-badge source-badge-${sourceBadge}`}
              style={{ flexShrink: 0 }}
            >
              {sourceBadge === "main" ? "Main" : "Yaniv"}
            </span>
          )}
          {!sourceBadge && allCategories.length > 0 && (
            <select
              value={category || ""}
              onChange={(e) => onAssignCategory(e.target.value || null)}
              style={{
                flex: 1,
                padding: "5px 8px",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                color: category ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)",
                fontSize: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <option value="" style={{ background: "#1a1f2e", color: "rgba(255,255,255,0.5)" }}>No category</option>
              {allCategories.map((cat) => (
                <option key={cat} value={cat} style={{ background: "#1a1f2e", color: "#fff" }}>{cat}</option>
              ))}
            </select>
          )}
          <div style={{ flex: 1 }} />
          <button
            onClick={onToggleHide}
            title={isHidden ? "Show in deck" : "Hide from deck"}
            style={{
              display: "flex", alignItems: "center", gap: 5,
              padding: "4px 10px", borderRadius: 6, border: "none",
              background: isHidden ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.04)",
              color: isHidden ? "#f87171" : "rgba(255,255,255,0.35)",
              fontSize: 11, fontWeight: 500,
              fontFamily: "'Space Grotesk', sans-serif",
              cursor: "pointer", transition: "all 0.15s",
              flexShrink: 0,
            }}
          >
            <EyeOff size={12} />
            {isHidden ? "Show" : "Hide"}
          </button>
          {onRemove && (
            <button
              onClick={onRemove}
              title="Remove from Final"
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "4px 10px", borderRadius: 6, border: "none",
                background: "rgba(239,68,68,0.1)",
                color: "rgba(255,255,255,0.35)",
                fontSize: 11, fontWeight: 500,
                fontFamily: "'Space Grotesk', sans-serif",
                cursor: "pointer", transition: "all 0.15s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f87171"; e.currentTarget.style.background = "rgba(239,68,68,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; e.currentTarget.style.background = "rgba(239,68,68,0.1)"; }}
            >
              <Trash2 size={12} />
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
