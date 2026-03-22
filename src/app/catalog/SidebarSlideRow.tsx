"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Eye, EyeOff, X } from "lucide-react";
import type { SlideDef } from "@/components/slideRegistry";

interface Props {
  id: string;
  slide: SlideDef;
  position: number;
  savedPosition: number | null;
  isHidden: boolean;
  color: { text: string; dot: string } | null;
  onToggleHide: () => void;
  onRemoveCategory?: () => void;
  categoryAssignDropdown?: React.ReactNode;
}

export default function SidebarSlideRow({
  id, slide, position, savedPosition, isHidden, color,
  onToggleHide, onRemoveCategory, categoryAssignDropdown,
}: Props) {
  const {
    attributes, listeners, setNodeRef, transform, transition, isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 100 : "auto" as const,
  };

  const moved = savedPosition !== null && savedPosition !== position;
  const textColor = color?.text || "rgba(255,255,255,0.25)";
  const resolvedOpacity = isDragging ? 0.5 : isHidden ? 0.6 : 1;

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        display: "flex", alignItems: "center", gap: 6,
        padding: "5px 6px 5px 8px",
        fontSize: 14,
        color: isHidden ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.5)",
        borderRadius: 6,
        background: isDragging
          ? "rgba(40,96,178,0.15)"
          : moved
            ? "rgba(217,119,6,0.08)"
            : "transparent",
        borderLeft: moved ? "3px solid #d97706" : "3px solid transparent",
        opacity: resolvedOpacity,
      }}
    >
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          display: "flex", alignItems: "center",
          color: "rgba(255,255,255,0.2)",
          flexShrink: 0,
          touchAction: "none",
        }}
      >
        <GripVertical size={14} />
      </div>

      {/* Position number */}
      {moved ? (
        <span style={{ fontSize: 11, fontWeight: 600, flexShrink: 0, minWidth: 44, textAlign: "right", whiteSpace: "nowrap" }}>
          <span style={{ color: "rgba(255,255,255,0.25)", textDecoration: "line-through" }}>{savedPosition}</span>
          <span style={{ color: "#d97706" }}>{" → "}{position}</span>
        </span>
      ) : (
        <span style={{ fontSize: 12, fontWeight: 600, color: isHidden ? "rgba(255,255,255,0.15)" : textColor, minWidth: 44, textAlign: "right", flexShrink: 0 }}>
          {position}
        </span>
      )}

      {/* Slide name */}
      <span
        onDoubleClick={() => {
          localStorage.setItem("catalogScrollTarget", id);
          window.location.href = `/?slideId=${id}&from=catalog`;
        }}
        style={{
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          flex: 1, cursor: "pointer",
          textDecoration: isHidden ? "line-through" : "none",
        }}
      >
        {slide.label}
      </span>

      {/* Action buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: 2, flexShrink: 0 }}>
        <button
          onClick={onToggleHide}
          className="sidebar-icon-btn"
          title={isHidden ? "Show in deck" : "Hide from deck"}
          style={{ color: isHidden ? "#ef4444" : undefined }}
        >
          {isHidden ? <EyeOff size={13} /> : <Eye size={13} />}
        </button>
        {onRemoveCategory && (
          <button onClick={onRemoveCategory} className="sidebar-icon-btn" title="Remove from category">
            <X size={12} />
          </button>
        )}
        {categoryAssignDropdown}
      </div>
    </div>
  );
}
