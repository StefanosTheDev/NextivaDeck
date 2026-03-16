"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Save, Check, RotateCcw, ArrowLeft, Download, Loader2, Plus, X, Eye, ArrowRight, FileDown, Trash2 } from "lucide-react";

import { SLIDE_COMPONENTS, SLIDE_COMPONENTS_MAIN, DEFAULT_SLIDE_ORDER, type SlideDef } from "@/components/slideRegistry";
import { SLIDE_COMPONENTS_YANIV, DEFAULT_SLIDE_ORDER_YANIV } from "@/components/slideRegistryYaniv";
import SortableSlideCard from "./SortableSlideCard";
import SlideCardContent from "./SlideCardContent";
import SidebarSlideRow from "./SidebarSlideRow";
import CategoryInput from "./CategoryInput";

type CatalogTab = "main" | "yaniv" | "final";

interface FinalSlideEntry {
  id: string;
  source: "main" | "yaniv";
}

const CATEGORY_COLORS = [
  { bg: "rgba(40,96,178,0.18)",  text: "#5b9cf5", dot: "#2860B2"  },
  { bg: "rgba(5,150,105,0.18)",  text: "#34d399", dot: "#059669"  },
  { bg: "rgba(217,119,6,0.18)",  text: "#fbbf24", dot: "#d97706"  },
  { bg: "rgba(168,85,247,0.18)", text: "#c084fc", dot: "#a855f7"  },
  { bg: "rgba(239,68,68,0.18)",  text: "#f87171", dot: "#ef4444"  },
  { bg: "rgba(14,165,233,0.18)", text: "#38bdf8", dot: "#0ea5e9"  },
  { bg: "rgba(244,114,182,0.18)",text: "#f472b6", dot: "#ec4899"  },
  { bg: "rgba(163,230,53,0.18)", text: "#a3e635", dot: "#84cc16"  },
];

export function getColorForCategory(name: string, allCategories: string[]) {
  const idx = allCategories.indexOf(name);
  return CATEGORY_COLORS[idx % CATEGORY_COLORS.length];
}

function getRegistryForSource(source: "main" | "yaniv"): Record<string, SlideDef> {
  return source === "yaniv" ? SLIDE_COMPONENTS_YANIV : SLIDE_COMPONENTS_MAIN;
}

function resolveFinalSlide(entry: FinalSlideEntry): SlideDef | null {
  const registry = getRegistryForSource(entry.source);
  return registry[entry.id] ?? SLIDE_COMPONENTS_MAIN[entry.id] ?? null;
}

export default function CatalogPage() {
  const [activeTab, setActiveTab] = useState<CatalogTab>("main");

  // Main branch data (read-only)
  const [mainOrder, setMainOrder] = useState<string[]>([]);
  const [mainHidden, setMainHidden] = useState<string[]>([]);

  // Yaniv branch data (read-only)
  const [yanivOrder, setYanivOrder] = useState<string[]>([]);
  const [yanivHidden, setYanivHidden] = useState<string[]>([]);

  // Final deliverable data (editable)
  const [finalOrder, setFinalOrder] = useState<FinalSlideEntry[]>([]);
  const [savedFinalOrder, setSavedFinalOrder] = useState<FinalSlideEntry[]>([]);
  const [finalHidden, setFinalHidden] = useState<string[]>([]);
  const [savedFinalHidden, setSavedFinalHidden] = useState<string[]>([]);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [viewFilter, setViewFilter] = useState<"all" | "published" | "hidden">("all");
  const [showPreview, setShowPreview] = useState(false);
  const savedTimeout = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    Promise.all([
      fetch("/api/slides?source=main").then((r) => r.json()),
      fetch("/api/slides?source=yaniv").then((r) => r.json()),
      fetch("/api/slides?source=final").then((r) => r.json()),
    ])
      .then(([mainData, yanivData, finalData]) => {
        setMainOrder(Array.isArray(mainData.order) ? mainData.order : DEFAULT_SLIDE_ORDER);
        setMainHidden(Array.isArray(mainData.hiddenSlides) ? mainData.hiddenSlides : []);

        setYanivOrder(Array.isArray(yanivData.order) ? yanivData.order : DEFAULT_SLIDE_ORDER_YANIV);
        setYanivHidden(Array.isArray(yanivData.hiddenSlides) ? yanivData.hiddenSlides : []);

        const rawFinal: FinalSlideEntry[] = Array.isArray(finalData.order)
          ? finalData.order.map((e: string | FinalSlideEntry) =>
              typeof e === "string" ? { id: e, source: "main" as const } : e
            )
          : [];
        setFinalOrder(rawFinal);
        setSavedFinalOrder(rawFinal);
        setFinalHidden(Array.isArray(finalData.hiddenSlides) ? finalData.hiddenSlides : []);
        setSavedFinalHidden(Array.isArray(finalData.hiddenSlides) ? finalData.hiddenSlides : []);

        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  const finalOrderIds = finalOrder.map((e) => `${e.source}::${e.id}`);

  const hasChanges =
    JSON.stringify(finalOrder) !== JSON.stringify(savedFinalOrder) ||
    JSON.stringify(finalHidden) !== JSON.stringify(savedFinalHidden);

  const saveFinal = useCallback(async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/slides?source=final", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: finalOrder, hiddenSlides: finalHidden }),
      });
      if (res.ok) {
        setSavedFinalOrder([...finalOrder]);
        setSavedFinalHidden([...finalHidden]);
        setSaved(true);
        clearTimeout(savedTimeout.current);
        savedTimeout.current = setTimeout(() => setSaved(false), 2000);
      }
    } finally {
      setSaving(false);
    }
  }, [finalOrder, finalHidden]);

  const resetFinal = useCallback(() => {
    setFinalOrder([...savedFinalOrder]);
    setFinalHidden([...savedFinalHidden]);
  }, [savedFinalOrder, savedFinalHidden]);

  const addToFinal = useCallback((id: string, source: "main" | "yaniv") => {
    setFinalOrder((prev) => {
      const exists = prev.some((e) => e.id === id && e.source === source);
      if (exists) return prev;
      return [...prev, { id, source }];
    });
  }, []);

  const removeFromFinal = useCallback((compositeKey: string) => {
    setFinalOrder((prev) => prev.filter((e) => `${e.source}::${e.id}` !== compositeKey));
  }, []);

  const toggleFinalHide = useCallback((compositeKey: string) => {
    setFinalHidden((prev) =>
      prev.includes(compositeKey)
        ? prev.filter((k) => k !== compositeKey)
        : [...prev, compositeKey]
    );
  }, []);

  const gridSensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const sidebarSensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 3 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleFinalGridDragEnd(event: DragEndEvent) {
    setActiveId(null);
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setFinalOrder((prev) => {
        const keys = prev.map((e) => `${e.source}::${e.id}`);
        const oldIndex = keys.indexOf(active.id as string);
        const newIndex = keys.indexOf(over.id as string);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  function handleFinalSidebarDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setFinalOrder((prev) => {
        const keys = prev.map((e) => `${e.source}::${e.id}`);
        const oldIndex = keys.indexOf(active.id as string);
        const newIndex = keys.indexOf(over.id as string);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  const activeFinalEntry = activeId
    ? finalOrder.find((e) => `${e.source}::${e.id}` === activeId)
    : null;
  const activeFinalSlide = activeFinalEntry ? resolveFinalSlide(activeFinalEntry) : null;

  const [pdfStatus, setPdfStatus] = useState<"idle" | "generating" | "done">("idle");
  const [pptxStatus, setPptxStatus] = useState<"idle" | "generating" | "done">("idle");

  const downloadPdf = useCallback(async () => {
    setPdfStatus("generating");
    try {
      const res = await fetch("/api/generate-pdf");
      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Nextiva-Investor-Deck-2026.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setPdfStatus("done");
      setTimeout(() => setPdfStatus("idle"), 3000);
    } catch {
      setPdfStatus("idle");
      alert("Failed to generate PDF. Please try again.");
    }
  }, []);

  const downloadPptx = useCallback(async () => {
    setPptxStatus("generating");
    try {
      const res = await fetch("/api/generate-pptx");
      if (!res.ok) throw new Error("PPTX generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Nextiva-Investor-Deck-2026.pptx";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setPptxStatus("done");
      setTimeout(() => setPptxStatus("idle"), 3000);
    } catch {
      setPptxStatus("idle");
      alert("Failed to generate PowerPoint. Please try again.");
    }
  }, []);

  if (!loaded) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0a0f1a" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif", fontSize: 18 }}>Loading slides…</p>
      </div>
    );
  }

  const TAB_CONFIG: { key: CatalogTab; label: string; count: number }[] = [
    { key: "main", label: "Main (Seksom)", count: mainOrder.filter((id) => !mainHidden.includes(id)).length },
    { key: "yaniv", label: "Yaniv", count: yanivOrder.filter((id) => !yanivHidden.includes(id)).length },
    { key: "final", label: "Final Deliverable", count: finalOrder.length },
  ];

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(180deg, #0a0f1a 0%, #111827 100%)",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(10, 15, 26, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            href="/"
            style={{
              display: "flex", alignItems: "center", gap: 8,
              color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            <ArrowLeft size={16} />
            Back to Deck
          </a>
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: 0 }}>Slide Catalog</h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0, marginTop: 2 }}>
              Browse developer decks and build the final deliverable
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {activeTab === "final" && (
            <>
              <button
                onClick={downloadPdf}
                disabled={pdfStatus === "generating"}
                className="catalog-btn-outline"
                style={{ opacity: pdfStatus === "generating" ? 0.6 : 1 }}
              >
                {pdfStatus === "generating" ? <Loader2 size={15} style={{ animation: "spin 1s linear infinite", flexShrink: 0 }} /> : pdfStatus === "done" ? <Check size={15} style={{ flexShrink: 0 }} /> : <Download size={15} style={{ flexShrink: 0 }} />}
                {pdfStatus === "generating" ? "Generating…" : pdfStatus === "done" ? "Downloaded!" : "Generate PDF"}
              </button>
              <button
                onClick={downloadPptx}
                disabled={pptxStatus === "generating"}
                className="catalog-btn-outline"
                style={{ opacity: pptxStatus === "generating" ? 0.6 : 1 }}
              >
                {pptxStatus === "generating" ? <Loader2 size={15} style={{ animation: "spin 1s linear infinite", flexShrink: 0 }} /> : pptxStatus === "done" ? <Check size={15} style={{ flexShrink: 0 }} /> : <FileDown size={15} style={{ flexShrink: 0 }} />}
                {pptxStatus === "generating" ? "Generating…" : pptxStatus === "done" ? "Downloaded!" : "Generate PPTX"}
              </button>
              {hasChanges && (
                <button onClick={() => { if (window.confirm("Undo all unsaved changes?")) resetFinal(); }} className="catalog-btn-outline">
                  <RotateCcw size={15} style={{ flexShrink: 0 }} />
                  Undo Changes
                </button>
              )}
              <button
                onClick={saveFinal}
                disabled={!hasChanges || saving}
                className="catalog-btn-primary"
                style={{
                  background: saved ? "#059669" : hasChanges ? "#2860B2" : "rgba(255,255,255,0.08)",
                  color: hasChanges || saved ? "#fff" : "rgba(255,255,255,0.3)",
                  cursor: hasChanges ? "pointer" : "default",
                  opacity: saving ? 0.6 : 1,
                }}
              >
                {saved ? <Check size={15} style={{ flexShrink: 0 }} /> : <Save size={15} style={{ flexShrink: 0 }} />}
                {saving ? "Saving…" : saved ? "Saved!" : "Save Final"}
              </button>
            </>
          )}
        </div>
      </header>

      {/* Tab bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          padding: "0 32px",
          background: "rgba(0,0,0,0.2)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          flexShrink: 0,
        }}
      >
        {TAB_CONFIG.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: "14px 24px",
              border: "none",
              borderBottom: activeTab === tab.key ? "2px solid #5b9cf5" : "2px solid transparent",
              fontSize: 14,
              fontWeight: activeTab === tab.key ? 600 : 400,
              fontFamily: "'Space Grotesk', sans-serif",
              cursor: "pointer",
              transition: "all 0.15s",
              background: "transparent",
              color: activeTab === tab.key ? "#fff" : "rgba(255,255,255,0.4)",
            }}
          >
            {tab.label}
            <span
              style={{
                marginLeft: 8,
                fontSize: 12,
                padding: "2px 8px",
                borderRadius: 10,
                background: activeTab === tab.key
                  ? tab.key === "final" ? "rgba(5,150,105,0.25)" : "rgba(40,96,178,0.25)"
                  : "rgba(255,255,255,0.06)",
                color: activeTab === tab.key
                  ? tab.key === "final" ? "#34d399" : "#5b9cf5"
                  : "rgba(255,255,255,0.3)",
              }}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
        {activeTab === "main" && (
          <ReadOnlySlideGrid
            order={mainOrder}
            hiddenSlides={mainHidden}
            registry={SLIDE_COMPONENTS_MAIN}
            source="main"
            onAddToFinal={addToFinal}
            finalOrder={finalOrder}
          />
        )}
        {activeTab === "yaniv" && (
          <ReadOnlySlideGrid
            order={yanivOrder}
            hiddenSlides={yanivHidden}
            registry={SLIDE_COMPONENTS_YANIV}
            source="yaniv"
            onAddToFinal={addToFinal}
            finalOrder={finalOrder}
          />
        )}
        {activeTab === "final" && (
          <FinalDeliverableTab
            finalOrder={finalOrder}
            setFinalOrder={setFinalOrder}
            finalHidden={finalHidden}
            toggleFinalHide={toggleFinalHide}
            removeFromFinal={removeFromFinal}
            gridSensors={gridSensors}
            sidebarSensors={sidebarSensors}
            onDragStart={handleDragStart}
            onGridDragEnd={handleFinalGridDragEnd}
            onSidebarDragEnd={handleFinalSidebarDragEnd}
            activeId={activeId}
            activeFinalSlide={activeFinalSlide}
            activeFinalEntry={activeFinalEntry ?? null}
            viewFilter={viewFilter}
            setViewFilter={setViewFilter}
          />
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .catalog-btn-outline {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 20px; border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent; color: rgba(255,255,255,0.6);
          font-size: 14px; font-family: 'Space Grotesk', sans-serif;
          cursor: pointer; transition: all 0.2s;
          white-space: nowrap;
        }
        .catalog-btn-outline:hover {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.8);
        }
        .catalog-btn-primary {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 24px; border-radius: 8px; border: none;
          font-size: 14px; font-weight: 500;
          font-family: 'Space Grotesk', sans-serif;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .sidebar-icon-btn {
          background: none; border: none; padding: 3px;
          color: rgba(255,255,255,0.2); cursor: pointer;
          display: flex; align-items: center;
          border-radius: 4; transition: color 0.15s;
        }
        .sidebar-icon-btn:hover:not(:disabled) {
          color: rgba(255,255,255,0.6);
        }
        .sidebar-icon-btn:disabled {
          opacity: 0.2; cursor: default;
        }
        .source-badge {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 2px 8px; border-radius: 4px;
          font-size: 11px; font-weight: 600;
          font-family: 'Space Grotesk', sans-serif;
        }
        .source-badge-main {
          background: rgba(40,96,178,0.2); color: #5b9cf5;
        }
        .source-badge-yaniv {
          background: rgba(168,85,247,0.2); color: #c084fc;
        }
        .add-to-final-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 6px; border: none;
          font-size: 12px; font-weight: 600;
          font-family: 'Space Grotesk', sans-serif;
          cursor: pointer; transition: all 0.15s;
          background: rgba(5,150,105,0.15); color: #34d399;
        }
        .add-to-final-btn:hover { background: rgba(5,150,105,0.3); }
        .add-to-final-btn:disabled {
          opacity: 0.4; cursor: default;
          background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.3);
        }
      `}} />
    </div>
  );
}

/* ──────────────────────────────────────────────
   Read-only grid for Main / Yaniv tabs
   ────────────────────────────────────────────── */

function ReadOnlySlideGrid({
  order,
  hiddenSlides,
  registry,
  source,
  onAddToFinal,
  finalOrder,
}: {
  order: string[];
  hiddenSlides: string[];
  registry: Record<string, SlideDef>;
  source: "main" | "yaniv";
  onAddToFinal: (id: string, source: "main" | "yaniv") => void;
  finalOrder: FinalSlideEntry[];
}) {
  const [filter, setFilter] = useState<"all" | "published" | "hidden">("all");

  const published = order.filter((id) => !hiddenSlides.includes(id));
  const hidden = order.filter((id) => hiddenSlides.includes(id));

  const displayOrder =
    filter === "published" ? published :
    filter === "hidden" ? hidden :
    order;

  return (
    <div style={{ height: "100%", overflowY: "auto", display: "flex", flexDirection: "column" }}>
      {/* Filter bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "20px 32px 0", flexShrink: 0 }}>
        {([
          { key: "all" as const, label: "All Slides", count: order.length },
          { key: "published" as const, label: "Published", count: published.length },
          { key: "hidden" as const, label: "Hidden", count: hidden.length },
        ]).map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            style={{
              padding: "8px 18px", borderRadius: 8, border: "none",
              fontSize: 13,
              fontWeight: filter === tab.key ? 600 : 400,
              fontFamily: "'Space Grotesk', sans-serif",
              cursor: "pointer", transition: "all 0.15s",
              background: filter === tab.key ? "rgba(40,96,178,0.2)" : "transparent",
              color: filter === tab.key ? "#5b9cf5" : "rgba(255,255,255,0.4)",
            }}
          >
            {tab.label}
            <span style={{
              marginLeft: 8, fontSize: 12, padding: "1px 7px", borderRadius: 10,
              background: filter === tab.key ? "rgba(40,96,178,0.25)" : "rgba(255,255,255,0.06)",
              color: filter === tab.key ? "#5b9cf5" : "rgba(255,255,255,0.3)",
            }}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ padding: "20px 32px 60px", flex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {displayOrder.map((id, idx) => {
            const slide = registry[id];
            if (!slide) return null;
            const isHidden = hiddenSlides.includes(id);
            const alreadyInFinal = finalOrder.some((e) => e.id === id && e.source === source);

            return (
              <div
                key={id}
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "#111827",
                  opacity: isHidden ? 0.5 : 1,
                  transition: "all 0.2s",
                }}
              >
                <SlideCardContent
                  slide={slide}
                  index={order.indexOf(id)}
                  category={null}
                  categoryColor={null}
                />
                <div
                  style={{
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(0,0,0,0.2)",
                  }}
                >
                  <span className={`source-badge source-badge-${source}`}>
                    {source === "main" ? "Main" : "Yaniv"}
                  </span>
                  <button
                    className="add-to-final-btn"
                    onClick={() => onAddToFinal(id, source)}
                    disabled={alreadyInFinal}
                  >
                    {alreadyInFinal ? (
                      <><Check size={12} /> In Final</>
                    ) : (
                      <><Plus size={12} /> Add to Final</>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Final Deliverable tab (editable with DnD)
   ────────────────────────────────────────────── */

function FinalDeliverableTab({
  finalOrder,
  setFinalOrder,
  finalHidden,
  toggleFinalHide,
  removeFromFinal,
  gridSensors,
  sidebarSensors,
  onDragStart,
  onGridDragEnd,
  onSidebarDragEnd,
  activeId,
  activeFinalSlide,
  activeFinalEntry,
  viewFilter,
  setViewFilter,
}: {
  finalOrder: FinalSlideEntry[];
  setFinalOrder: React.Dispatch<React.SetStateAction<FinalSlideEntry[]>>;
  finalHidden: string[];
  toggleFinalHide: (compositeKey: string) => void;
  removeFromFinal: (compositeKey: string) => void;
  gridSensors: ReturnType<typeof useSensors>;
  sidebarSensors: ReturnType<typeof useSensors>;
  onDragStart: (event: DragStartEvent) => void;
  onGridDragEnd: (event: DragEndEvent) => void;
  onSidebarDragEnd: (event: DragEndEvent) => void;
  activeId: string | null;
  activeFinalSlide: SlideDef | null;
  activeFinalEntry: FinalSlideEntry | null;
  viewFilter: "all" | "published" | "hidden";
  setViewFilter: (f: "all" | "published" | "hidden") => void;
}) {
  const compositeKeys = finalOrder.map((e) => `${e.source}::${e.id}`);

  if (finalOrder.length === 0) {
    return (
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        height: "100%", flexDirection: "column", gap: 16,
      }}>
        <div style={{
          fontSize: 48, opacity: 0.2,
        }}>
          📋
        </div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, margin: 0 }}>
          No slides in the Final Deliverable yet
        </p>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 14, margin: 0 }}>
          Switch to the Main or Yaniv tabs and add slides using the &quot;Add to Final&quot; button
        </p>
      </div>
    );
  }

  const publishedCount = finalOrder.filter((e) => !finalHidden.includes(`${e.source}::${e.id}`)).length;
  const hiddenCount = finalOrder.filter((e) => finalHidden.includes(`${e.source}::${e.id}`)).length;

  return (
    <div style={{ display: "flex", flex: 1, minHeight: 0, overflow: "hidden", height: "100%" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 340, minWidth: 340,
          borderRight: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.15)",
          overflowY: "auto", padding: "24px 20px",
          display: "flex", flexDirection: "column", gap: 4,
          height: "100%",
        }}
      >
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "6px 8px", marginBottom: 6,
        }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Final Order
          </span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>Drag to reorder</span>
        </div>

        <DndContext
          sensors={sidebarSensors}
          collisionDetection={closestCenter}
          onDragEnd={onSidebarDragEnd}
        >
          <SortableContext items={compositeKeys} strategy={verticalListSortingStrategy}>
            {finalOrder.map((entry, idx) => {
              const key = `${entry.source}::${entry.id}`;
              const slide = resolveFinalSlide(entry);
              if (!slide) return null;
              const isHidden = finalHidden.includes(key);
              return (
                <FinalSidebarRow
                  key={key}
                  id={key}
                  slide={slide}
                  position={idx + 1}
                  source={entry.source}
                  isHidden={isHidden}
                  onToggleHide={() => toggleFinalHide(key)}
                  onRemove={() => removeFromFinal(key)}
                />
              );
            })}
          </SortableContext>
        </DndContext>
      </aside>

      {/* Main grid */}
      <main style={{ flex: 1, overflowY: "auto", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "20px 32px 0", flexShrink: 0 }}>
          {([
            { key: "all" as const, label: "All Slides", count: finalOrder.length },
            { key: "published" as const, label: "Published", count: publishedCount },
            { key: "hidden" as const, label: "Hidden", count: hiddenCount },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setViewFilter(tab.key)}
              style={{
                padding: "8px 18px", borderRadius: 8, border: "none",
                fontSize: 13,
                fontWeight: viewFilter === tab.key ? 600 : 400,
                fontFamily: "'Space Grotesk', sans-serif",
                cursor: "pointer", transition: "all 0.15s",
                background: viewFilter === tab.key ? "rgba(5,150,105,0.2)" : "transparent",
                color: viewFilter === tab.key ? "#34d399" : "rgba(255,255,255,0.4)",
              }}
            >
              {tab.label}
              <span style={{
                marginLeft: 8, fontSize: 12, padding: "1px 7px", borderRadius: 10,
                background: viewFilter === tab.key ? "rgba(5,150,105,0.25)" : "rgba(255,255,255,0.06)",
                color: viewFilter === tab.key ? "#34d399" : "rgba(255,255,255,0.3)",
              }}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div style={{ padding: "20px 32px 60px", flex: 1 }}>
          <DndContext
            sensors={gridSensors}
            collisionDetection={closestCenter}
            onDragStart={onDragStart}
            onDragEnd={onGridDragEnd}
          >
            <SortableContext items={compositeKeys} strategy={rectSortingStrategy}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: 24,
                }}
              >
                {finalOrder.map((entry) => {
                  const key = `${entry.source}::${entry.id}`;
                  const slide = resolveFinalSlide(entry);
                  if (!slide) return null;
                  const isHidden = finalHidden.includes(key);
                  if (viewFilter === "published" && isHidden) return null;
                  if (viewFilter === "hidden" && !isHidden) return null;
                  const globalIndex = compositeKeys.indexOf(key);

                  return (
                    <SortableSlideCard
                      key={key}
                      slide={{ ...slide, id: key }}
                      index={globalIndex}
                      isActive={activeId === key}
                      isHidden={isHidden}
                      onToggleHide={() => toggleFinalHide(key)}
                      category={null}
                      categoryColor={null}
                      allCategories={[]}
                      onAssignCategory={() => {}}
                      sourceBadge={entry.source}
                      onRemove={() => removeFromFinal(key)}
                    />
                  );
                })}
              </div>
            </SortableContext>

            <DragOverlay adjustScale={false}>
              {activeFinalSlide && activeFinalEntry ? (
                <div
                  style={{
                    borderRadius: 12, overflow: "hidden",
                    border: "2px solid #059669",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(5,150,105,0.3)",
                    background: "#111827", cursor: "grabbing", transform: "scale(1.03)",
                  }}
                >
                  <SlideCardContent slide={activeFinalSlide} index={0} category={null} categoryColor={null} />
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </main>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Final sidebar row (draggable)
   ────────────────────────────────────────────── */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function FinalSidebarRow({
  id,
  slide,
  position,
  source,
  isHidden,
  onToggleHide,
  onRemove,
}: {
  id: string;
  slide: SlideDef;
  position: number;
  source: "main" | "yaniv";
  isHidden: boolean;
  onToggleHide: () => void;
  onRemove: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : isHidden ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 8px",
        borderRadius: 6,
        cursor: "grab",
        userSelect: "none",
      }}
      {...attributes}
      {...listeners}
    >
      <span style={{
        fontSize: 12, fontWeight: 600, minWidth: 22, textAlign: "right",
        color: "rgba(255,255,255,0.3)",
      }}>
        {position}
      </span>
      <span className={`source-badge source-badge-${source}`} style={{ fontSize: 9, padding: "1px 5px" }}>
        {source === "main" ? "M" : "Y"}
      </span>
      <span style={{
        flex: 1, fontSize: 13, color: "rgba(255,255,255,0.6)",
        textDecoration: isHidden ? "line-through" : "none",
        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
      }}>
        {slide.label}
      </span>
      <button
        className="sidebar-icon-btn"
        onClick={(e) => { e.stopPropagation(); onToggleHide(); }}
        title={isHidden ? "Show" : "Hide"}
      >
        <Eye size={12} />
      </button>
      <button
        className="sidebar-icon-btn"
        onClick={(e) => { e.stopPropagation(); onRemove(); }}
        title="Remove from Final"
        onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
      >
        <Trash2 size={12} />
      </button>
    </div>
  );
}

function SlideCardOverlay({ slide, index, category, categoryColor }: {
  slide: SlideDef;
  index: number;
  category: string | null;
  categoryColor: { bg: string; text: string; dot: string } | null;
}) {
  return (
    <div
      style={{
        borderRadius: 12, overflow: "hidden",
        border: "2px solid #2860B2",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(40,96,178,0.3)",
        background: "#111827", cursor: "grabbing", transform: "scale(1.03)",
      }}
    >
      <SlideCardContent slide={slide} index={index} category={category} categoryColor={categoryColor} />
    </div>
  );
}
