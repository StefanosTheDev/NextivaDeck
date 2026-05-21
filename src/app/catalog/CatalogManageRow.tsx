"use client";

import { useRef } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Eye, EyeOff } from "lucide-react";
import type { SlideCatalogMeta } from "@/types/slideCatalog";
import CatalogSlidePlaceholder from "./CatalogSlidePlaceholder";

interface Props {
  slide: SlideCatalogMeta;
  index: number;
  isActive: boolean;
  isSelected: boolean;
  isHidden: boolean;
  onToggleHide: () => void;
  onSelect: () => void;
  category: string | null;
  categoryColor: { bg: string; text: string; dot: string } | null;
  allCategories: string[];
  onAssignCategory: (category: string | null) => void;
}

export default function CatalogManageRow({
  slide,
  index,
  isActive,
  isSelected,
  isHidden,
  onToggleHide,
  onSelect,
  category,
  categoryColor,
  allCategories,
  onAssignCategory,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: slide.id });
  const didDrag = useRef(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.45 : isHidden ? 0.65 : 1,
    zIndex: isDragging ? 50 : ("auto" as const),
  };

  const openInDeck = () => {
    localStorage.setItem("catalogScrollTarget", slide.id);
    window.location.href = `/?slideId=${slide.id}&from=catalog`;
  };

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, position: "relative" as const }}
      data-slide-id={slide.id}
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
        if (!didDrag.current) onSelect();
      }}
      onDoubleClick={(e) => {
        e.preventDefault();
        if (!didDrag.current) openInDeck();
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: 12,
          padding: "10px 14px",
          borderRadius: 10,
          border: isActive
            ? "2px solid #2860B2"
            : isSelected
              ? "1px solid rgba(40,96,178,0.55)"
              : isHidden
                ? "1px solid rgba(255,255,255,0.04)"
                : "1px solid rgba(255,255,255,0.08)",
          background: isSelected ? "rgba(40,96,178,0.12)" : "#111827",
          cursor: isDragging ? "grabbing" : "pointer",
          boxShadow: isSelected ? "0 4px 20px rgba(40,96,178,0.2)" : "none",
          transition: "border-color 0.15s, background 0.15s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgba(255,255,255,0.25)",
            flexShrink: 0,
            touchAction: "none",
          }}
        >
          <GripVertical size={16} />
        </div>

        <CatalogSlidePlaceholder
          slide={slide}
          index={index}
          category={category}
          categoryColor={categoryColor}
          compact
        />

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 28,
                height: 24,
                padding: "0 6px",
                borderRadius: 5,
                background: categoryColor ? categoryColor.bg : "rgba(40,96,178,0.15)",
                color: categoryColor ? categoryColor.text : "#5b9cf5",
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                flexShrink: 0,
              }}
            >
              {index + 1}
            </span>
            <span
              style={{
                color: isHidden ? "rgba(255,255,255,0.35)" : "#fff",
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "'Space Grotesk', sans-serif",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                textDecoration: isHidden ? "line-through" : "none",
              }}
            >
              {slide.label}
            </span>
            {slide.isNew && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: "#2860B2",
                  padding: "2px 6px",
                  borderRadius: 4,
                  flexShrink: 0,
                }}
              >
                New
              </span>
            )}
            {isHidden && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#f87171",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  flexShrink: 0,
                }}
              >
                Hidden
              </span>
            )}
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>
            {slide.id}
          </span>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {allCategories.length > 0 && (
            <select
              value={category || ""}
              onChange={(e) => onAssignCategory(e.target.value || null)}
              style={{
                maxWidth: 120,
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
              <option value="" style={{ background: "#1a1f2e" }}>
                Category…
              </option>
              {allCategories.map((cat) => (
                <option key={cat} value={cat} style={{ background: "#1a1f2e", color: "#fff" }}>
                  {cat}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={onToggleHide}
            title={isHidden ? "Show in deck" : "Hide from deck"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "6px 12px",
              borderRadius: 6,
              border: "none",
              background: isHidden ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.04)",
              color: isHidden ? "#f87171" : "rgba(255,255,255,0.4)",
              fontSize: 12,
              fontFamily: "'Space Grotesk', sans-serif",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {isHidden ? <EyeOff size={14} /> : <Eye size={14} />}
            {isHidden ? "Show" : "Hide"}
          </button>
        </div>
      </div>
    </div>
  );
}
