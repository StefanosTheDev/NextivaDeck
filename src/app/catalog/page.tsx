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
import { Save, Check, RotateCcw, ArrowLeft, Download, Loader2, Plus, X, Eye, ArrowRight, FileDown } from "lucide-react";

import { SLIDE_COMPONENTS, DEFAULT_SLIDE_ORDER, type SlideDef } from "@/components/slideRegistry";
import SortableSlideCard from "./SortableSlideCard";
import SlideCardContent from "./SlideCardContent";
import SidebarSlideRow from "./SidebarSlideRow";
import CategoryInput from "./CategoryInput";

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

export default function CatalogPage() {
  const [order, setOrder] = useState<string[]>(DEFAULT_SLIDE_ORDER);
  const [savedOrder, setSavedOrder] = useState<string[]>(DEFAULT_SLIDE_ORDER);
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [savedCategories, setSavedCategories] = useState<Record<string, string>>({});
  const [categoryNames, setCategoryNames] = useState<string[]>([]);
  const [savedCategoryNames, setSavedCategoryNames] = useState<string[]>([]);
  const [hiddenSlides, setHiddenSlides] = useState<string[]>([]);
  const [savedHiddenSlides, setSavedHiddenSlides] = useState<string[]>([]);
  const [serverVersion, setServerVersion] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [viewFilter, setViewFilter] = useState<"all" | "published" | "hidden">("all");
  const [showPreview, setShowPreview] = useState(false);
  const savedTimeout = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    fetch("/api/slides")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.order)) {
          setSavedOrder(data.order);
        }
        if (data.categories && typeof data.categories === "object") {
          setCategories(data.categories);
          setSavedCategories(data.categories);
        }
        const savedNames: string[] = Array.isArray(data.categoryNames) ? data.categoryNames : [];
        const namesFromAssignments = data.categories ? Object.values(data.categories) as string[] : [];
        const merged = Array.from(new Set([...savedNames, ...namesFromAssignments])).sort();
        setCategoryNames(merged);
        setSavedCategoryNames(merged);
        if (Array.isArray(data.hiddenSlides)) {
          setSavedHiddenSlides(data.hiddenSlides);
        }

        const sv = data.version || "";
        setServerVersion(sv);
        const serverVersion = sv;
        try {
          const pending = localStorage.getItem("catalogPendingChanges");
          if (pending) {
            const p = JSON.parse(pending);
            if (!p.version || p.version !== serverVersion) {
              localStorage.removeItem("catalogPendingChanges");
              setOrder(data.order);
              setHiddenSlides(data.hiddenSlides || []);
            } else {
              setOrder(Array.isArray(p.order) ? p.order : data.order);
              setHiddenSlides(Array.isArray(p.hiddenSlides) ? p.hiddenSlides : (data.hiddenSlides || []));
              if (p.categories && typeof p.categories === "object" && !Array.isArray(p.categories)) {
                setCategories(p.categories);
              }
              if (Array.isArray(p.categoryNames)) {
                setCategoryNames(p.categoryNames);
              }
            }
          } else {
            setOrder(data.order);
            setHiddenSlides(data.hiddenSlides || []);
          }
        } catch {
          localStorage.removeItem("catalogPendingChanges");
          setOrder(data.order);
          setHiddenSlides(data.hiddenSlides || []);
        }

        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  // Persist all pending changes to localStorage so they survive refreshes
  useEffect(() => {
    if (!loaded) return;
    const orderChanged = JSON.stringify(order) !== JSON.stringify(savedOrder);
    const hiddenChanged = JSON.stringify(hiddenSlides) !== JSON.stringify(savedHiddenSlides);
    const catsChanged = JSON.stringify(categories) !== JSON.stringify(savedCategories);
    const catNamesChanged = JSON.stringify(categoryNames) !== JSON.stringify(savedCategoryNames);
    if (orderChanged || hiddenChanged || catsChanged || catNamesChanged) {
      localStorage.setItem("catalogPendingChanges", JSON.stringify({ version: serverVersion, order, hiddenSlides, categories, categoryNames }));
    } else {
      localStorage.removeItem("catalogPendingChanges");
    }
  }, [order, hiddenSlides, categories, categoryNames, savedOrder, savedHiddenSlides, savedCategories, savedCategoryNames, serverVersion, loaded]);

  const uniqueCategories = categoryNames;

  const hasOrderChanges = JSON.stringify(order) !== JSON.stringify(savedOrder);
  const hasHiddenChanges = JSON.stringify(hiddenSlides) !== JSON.stringify(savedHiddenSlides);
  const hasCategoryChanges =
    JSON.stringify(categories) !== JSON.stringify(savedCategories) ||
    JSON.stringify(categoryNames) !== JSON.stringify(savedCategoryNames);
  const hasDeckChanges = hasOrderChanges || hasHiddenChanges || hasCategoryChanges;
  const hasChanges = hasDeckChanges;

  const saveAll = useCallback(async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/slides", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order, categories, categoryNames, hiddenSlides }),
      });
      if (res.ok) {
        const result = await res.json();
        if (result.version) setServerVersion(result.version);
        setSavedOrder([...order]);
        setSavedCategories({ ...categories });
        setSavedCategoryNames([...categoryNames]);
        setSavedHiddenSlides([...hiddenSlides]);
        localStorage.removeItem("catalogPendingChanges");
        setSaved(true);
        clearTimeout(savedTimeout.current);
        savedTimeout.current = setTimeout(() => setSaved(false), 2000);
      }
    } finally {
      setSaving(false);
    }
  }, [order, categories, categoryNames, hiddenSlides]);

  const resetToDefault = useCallback(async () => {
    const defaultData = {
      order: DEFAULT_SLIDE_ORDER,
      categories: {},
      categoryNames: [],
      hiddenSlides: [],
    };
    const res = await fetch("/api/slides", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(defaultData),
    });
    if (res.ok) {
      setOrder([...DEFAULT_SLIDE_ORDER]);
      setSavedOrder([...DEFAULT_SLIDE_ORDER]);
      setCategories({});
      setSavedCategories({});
      setCategoryNames([]);
      setSavedCategoryNames([]);
      setHiddenSlides([]);
      setSavedHiddenSlides([]);
      localStorage.removeItem("catalogPendingChanges");
      setSaved(true);
      clearTimeout(savedTimeout.current);
      savedTimeout.current = setTimeout(() => setSaved(false), 2000);
    }
  }, []);

  const resetAll = useCallback(() => {
    setOrder([...savedOrder]);
    setCategories({ ...savedCategories });
    setCategoryNames([...savedCategoryNames]);
    setHiddenSlides([...savedHiddenSlides]);
    localStorage.removeItem("catalogPendingChanges");
  }, [savedOrder, savedCategories, savedCategoryNames, savedHiddenSlides]);

  const assignCategory = useCallback((slideId: string, category: string | null) => {
    setCategories((prev) => {
      const next = { ...prev };
      if (category === null) {
        delete next[slideId];
      } else {
        next[slideId] = category;
      }
      return next;
    });
  }, []);

  const createCategory = useCallback((name: string) => {
    setCategoryNames((prev) => [...prev, name].sort());
  }, []);

  const deleteCategory = useCallback((catName: string) => {
    setCategoryNames((prev) => prev.filter((n) => n !== catName));
    setCategories((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(next)) {
        if (next[key] === catName) delete next[key];
      }
      return next;
    });
  }, []);

  const toggleHideSlide = useCallback((slideId: string) => {
    setHiddenSlides((prev) =>
      prev.includes(slideId)
        ? prev.filter((id) => id !== slideId)
        : [...prev, slideId]
    );
  }, []);

  const [pdfStatus, setPdfStatus] = useState<"idle" | "generating" | "done">("idle");
  const [pdfProgress, setPdfProgress] = useState("");

  const downloadPdf = useCallback(async () => {
    setPdfStatus("generating");
    setPdfProgress("Preparing slides…");
    try {
      const { generatePdfClient } = await import("@/lib/clientExport");
      await generatePdfClient((done, total) => {
        setPdfProgress(`${done}/${total} slides`);
      });
      setPdfStatus("done");
      setPdfProgress("");
      setTimeout(() => setPdfStatus("idle"), 3000);
    } catch (e) {
      console.error("PDF generation failed:", e);
      setPdfStatus("idle");
      setPdfProgress("");
      alert("Failed to generate PDF. Please try again.");
    }
  }, []);

  const [pptxStatus, setPptxStatus] = useState<"idle" | "generating" | "done">("idle");
  const [pptxProgress, setPptxProgress] = useState("");

  const downloadPptx = useCallback(async () => {
    setPptxStatus("generating");
    setPptxProgress("Preparing slides…");
    try {
      const { generatePptxClient } = await import("@/lib/clientExport");
      await generatePptxClient((done, total) => {
        setPptxProgress(`${done}/${total} slides`);
      });
      setPptxStatus("done");
      setPptxProgress("");
      setTimeout(() => setPptxStatus("idle"), 3000);
    } catch (e) {
      console.error("PPTX generation failed:", e);
      setPptxStatus("idle");
      setPptxProgress("");
      alert("Failed to generate PowerPoint. Please try again.");
    }
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

  function handleGridDragEnd(event: DragEndEvent) {
    setActiveId(null);
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setOrder((prev) => {
        const oldIndex = prev.indexOf(active.id as string);
        const newIndex = prev.indexOf(over.id as string);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  function handleSidebarDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setOrder((prev) => {
        const oldIndex = prev.indexOf(active.id as string);
        const newIndex = prev.indexOf(over.id as string);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  const activeSlide = activeId ? SLIDE_COMPONENTS[activeId] : null;

  const uncategorizedSlides = order.filter((id) => !categories[id]);

  if (!loaded) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0a0f1a" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif", fontSize: 18 }}>Loading slides…</p>
      </div>
    );
  }

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
              {order.length} slides · Drag to reorder
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={downloadPdf}
            disabled={pdfStatus === "generating"}
            className="catalog-btn-outline"
            style={{ opacity: pdfStatus === "generating" ? 0.6 : 1 }}
          >
            {pdfStatus === "generating" ? <Loader2 size={15} style={{ animation: "spin 1s linear infinite", flexShrink: 0 }} /> : pdfStatus === "done" ? <Check size={15} style={{ flexShrink: 0 }} /> : <Download size={15} style={{ flexShrink: 0 }} />}
            {pdfStatus === "generating" ? (pdfProgress || "Generating…") : pdfStatus === "done" ? "Downloaded!" : "Generate PDF"}
          </button>
          <button
            onClick={downloadPptx}
            disabled={pptxStatus === "generating"}
            className="catalog-btn-outline"
            style={{ opacity: pptxStatus === "generating" ? 0.6 : 1 }}
          >
            {pptxStatus === "generating" ? <Loader2 size={15} style={{ animation: "spin 1s linear infinite", flexShrink: 0 }} /> : pptxStatus === "done" ? <Check size={15} style={{ flexShrink: 0 }} /> : <FileDown size={15} style={{ flexShrink: 0 }} />}
            {pptxStatus === "generating" ? (pptxProgress || "Generating…") : pptxStatus === "done" ? "Downloaded!" : "Generate PPTX"}
          </button>
          {hasChanges && (
            <button onClick={() => { if (window.confirm("Undo all unsaved changes? This will revert slide order and visibility back to the last saved state.")) resetAll(); }} className="catalog-btn-outline">
              <RotateCcw size={15} style={{ flexShrink: 0 }} />
              Undo Changes
            </button>
          )}
          {hasDeckChanges && (
            <button onClick={() => setShowPreview(true)} className="catalog-btn-outline">
              <Eye size={15} style={{ flexShrink: 0 }} />
              Preview Changes
            </button>
          )}
          <button
            onClick={hasDeckChanges ? () => setShowPreview(true) : saveAll}
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
            {saving ? "Saving…" : saved ? "Saved!" : "Save Order"}
          </button>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1, minHeight: 0, overflow: "hidden" }}>
        {/* Left sidebar — category overview, scrolls independently */}
        <aside
          style={{
            width: 340,
            minWidth: 340,
            borderRight: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(0,0,0,0.15)",
            overflowY: "auto",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            height: "100%",
          }}
        >
          <CategoryInput existingNames={uniqueCategories} onCreateCategory={createCategory} />

          {/* Category headers (non-draggable) */}
          {uniqueCategories.map((cat) => {
            const color = getColorForCategory(cat, uniqueCategories);
            const count = order.filter((id) => categories[id] === cat).length;
            return (
              <div key={`cat-header-${cat}`} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "6px 8px", borderRadius: 6, marginBottom: 4, marginTop: 8,
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: color.dot, flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: color.text, flex: 1 }}>{cat}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginRight: 4 }}>{count}</span>
                <button
                  onClick={() => {
                    if (window.confirm(`Delete category "${cat}"? All slides in this category will be moved to Uncategorized.`)) {
                      deleteCategory(cat);
                    }
                  }}
                  title={`Delete "${cat}"`}
                  style={{
                    background: "none", border: "none", padding: 2,
                    color: "rgba(255,255,255,0.2)", cursor: "pointer",
                    flexShrink: 0, display: "flex", alignItems: "center",
                    borderRadius: 4, transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
                >
                  <X size={13} />
                </button>
              </div>
            );
          })}

          {/* Slide order list — draggable */}
          <div style={{ marginTop: 16 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "6px 8px", marginBottom: 6,
            }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Slide Order
              </span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>Drag to reorder</span>
            </div>

            <DndContext
              sensors={sidebarSensors}
              collisionDetection={closestCenter}
              onDragEnd={handleSidebarDragEnd}
            >
              <SortableContext items={order} strategy={verticalListSortingStrategy}>
                {order.map((id) => {
                  const slide = SLIDE_COMPONENTS[id];
                  if (!slide) return null;
                  const pos = order.indexOf(id) + 1;
                  const savedPos = savedOrder.indexOf(id) + 1;
                  const cat = categories[id] || null;
                  const catColor = cat ? getColorForCategory(cat, uniqueCategories) : null;

                  return (
                    <SidebarSlideRow
                      key={id}
                      id={id}
                      slide={slide}
                      position={pos}
                      savedPosition={savedPos > 0 ? savedPos : null}
                      isHidden={hiddenSlides.includes(id)}
                      color={catColor}
                      onToggleHide={() => toggleHideSlide(id)}
                      onRemoveCategory={cat ? () => {
                        if (window.confirm(`Remove "${slide.label}" from "${cat}"?`)) {
                          assignCategory(id, null);
                        }
                      } : undefined}
                      categoryAssignDropdown={!cat && uniqueCategories.length > 0 ? (
                        <select
                          value=""
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => {
                            if (e.target.value) assignCategory(id, e.target.value);
                          }}
                          style={{
                            padding: "1px 2px", borderRadius: 4, fontSize: 11,
                            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.4)", cursor: "pointer", outline: "none",
                            fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0,
                            maxWidth: 80,
                          }}
                        >
                          <option value="" style={{ background: "#1a1f2e" }}>Assign…</option>
                          {uniqueCategories.map((c) => (
                            <option key={c} value={c} style={{ background: "#1a1f2e", color: "#fff" }}>{c}</option>
                          ))}
                        </select>
                      ) : undefined}
                    />
                  );
                })}
              </SortableContext>
            </DndContext>
          </div>
        </aside>

        {/* Main grid — scrolls independently */}
        <main style={{ flex: 1, overflowY: "auto", height: "100%", display: "flex", flexDirection: "column" }}>
          {/* View filter tabs */}
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "20px 32px 0",
            flexShrink: 0,
          }}>
            {([
              { key: "all" as const, label: "All Slides", count: order.length },
              { key: "published" as const, label: "Published", count: order.filter((id) => !hiddenSlides.includes(id)).length },
              { key: "hidden" as const, label: "Hidden", count: hiddenSlides.length },
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setViewFilter(tab.key)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: "none",
                  fontSize: 13,
                  fontWeight: viewFilter === tab.key ? 600 : 400,
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  background: viewFilter === tab.key ? "rgba(40,96,178,0.2)" : "transparent",
                  color: viewFilter === tab.key ? "#5b9cf5" : "rgba(255,255,255,0.4)",
                }}
              >
                {tab.label}
                <span style={{
                  marginLeft: 8,
                  fontSize: 12,
                  padding: "1px 7px",
                  borderRadius: 10,
                  background: viewFilter === tab.key ? "rgba(40,96,178,0.25)" : "rgba(255,255,255,0.06)",
                  color: viewFilter === tab.key ? "#5b9cf5" : "rgba(255,255,255,0.3)",
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
            onDragStart={handleDragStart}
            onDragEnd={handleGridDragEnd}
          >
            <SortableContext items={order} strategy={rectSortingStrategy}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: 24,
                }}
              >
                {(() => {
                  const hiddenSet = new Set(hiddenSlides);
                  const publishedIndexMap = new Map<string, number>();
                  let pubIdx = 0;
                  for (const id of order) {
                    if (!hiddenSet.has(id)) {
                      publishedIndexMap.set(id, pubIdx);
                      pubIdx++;
                    }
                  }

                  return order.map((id) => {
                    const slide = SLIDE_COMPONENTS[id];
                    if (!slide) return null;
                    const isHidden = hiddenSet.has(id);
                    if (viewFilter === "published" && isHidden) return null;
                    if (viewFilter === "hidden" && !isHidden) return null;
                    const displayIndex = viewFilter === "published"
                      ? (publishedIndexMap.get(id) ?? order.indexOf(id))
                      : order.indexOf(id);
                    return (
                      <SortableSlideCard
                        key={id}
                        slide={slide}
                        index={displayIndex}
                        isActive={activeId === id}
                        isHidden={isHidden}
                        onToggleHide={() => toggleHideSlide(id)}
                        category={categories[id] || null}
                        categoryColor={categories[id] ? getColorForCategory(categories[id], uniqueCategories) : null}
                        allCategories={uniqueCategories}
                        onAssignCategory={(cat) => assignCategory(id, cat)}
                      />
                    );
                  });
                })()}
              </div>
            </SortableContext>

            <DragOverlay adjustScale={false}>
              {activeSlide ? (
                <SlideCardOverlay
                  slide={activeSlide}
                  index={order.indexOf(activeSlide.id)}
                  category={categories[activeSlide.id] || null}
                  categoryColor={categories[activeSlide.id] ? getColorForCategory(categories[activeSlide.id], uniqueCategories) : null}
                />
              ) : null}
            </DragOverlay>
          </DndContext>
          </div>
        </main>
      </div>

      {/* Preview Changes Modal */}
      {showPreview && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 40,
          }}
          onClick={() => setShowPreview(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111827", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16, width: "100%", maxWidth: 700, maxHeight: "80vh",
              display: "flex", flexDirection: "column",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {/* Modal header */}
            <div style={{
              padding: "24px 28px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: 0 }}>Preview Slide Order Changes</h2>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>
                  Review your changes before saving. Slides that moved are highlighted.
                </p>
              </div>
              <button
                onClick={() => setShowPreview(false)}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: 4 }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Change list */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 28px" }}>
              {/* Summary counts */}
              {(() => {
                const movedSlides = order.filter((id, i) => savedOrder[i] !== id);
                const newlyHidden = hiddenSlides.filter((id) => !savedHiddenSlides.includes(id));
                const newlyShown = savedHiddenSlides.filter((id) => !hiddenSlides.includes(id));
                const catChanges = order.filter((id) => (categories[id] || "") !== (savedCategories[id] || "")).length;
                return (
                  <div style={{
                    display: "flex", gap: 16, marginBottom: 20, padding: "12px 16px",
                    background: "rgba(217,119,6,0.08)", borderRadius: 10, border: "1px solid rgba(217,119,6,0.15)",
                    flexWrap: "wrap",
                  }}>
                    {movedSlides.length > 0 && (
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 24, fontWeight: 700, color: "#fbbf24" }}>{movedSlides.length}</div>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>moved</div>
                      </div>
                    )}
                    {newlyHidden.length > 0 && (
                      <>
                        {movedSlides.length > 0 && <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />}
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 24, fontWeight: 700, color: "#ef4444" }}>{newlyHidden.length}</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>hidden</div>
                        </div>
                      </>
                    )}
                    {newlyShown.length > 0 && (
                      <>
                        <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 24, fontWeight: 700, color: "#34d399" }}>{newlyShown.length}</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>restored</div>
                        </div>
                      </>
                    )}
                    {catChanges > 0 && (
                      <>
                        <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 24, fontWeight: 700, color: "#a78bfa" }}>{catChanges}</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>recategorized</div>
                        </div>
                      </>
                    )}
                    <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 24, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>{order.filter((id) => !hiddenSlides.includes(id)).length}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>published</div>
                    </div>
                  </div>
                );
              })()}

              {/* New order with change indicators */}
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {order.map((id, newIdx) => {
                  const slide = SLIDE_COMPONENTS[id];
                  if (!slide) return null;
                  const oldIdx = savedOrder.indexOf(id);
                  const moved = oldIdx !== newIdx;
                  const diff = oldIdx - newIdx;
                  const cat = categories[id] || null;
                  const savedCat = savedCategories[id] || null;
                  const catChanged = cat !== savedCat;
                  const catColor = cat ? getColorForCategory(cat, uniqueCategories) : null;
                  const isHidden = hiddenSlides.includes(id);
                  const hasAnyChange = moved || catChanged;

                  return (
                    <div
                      key={id}
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "8px 12px",
                        borderRadius: 8,
                        background: hasAnyChange ? "rgba(217,119,6,0.06)" : "transparent",
                        borderLeft: hasAnyChange ? "3px solid #d97706" : "3px solid transparent",
                        opacity: isHidden ? 0.4 : 1,
                      }}
                    >
                      {/* New position */}
                      <span style={{
                        fontSize: 14, fontWeight: 700, minWidth: 28, textAlign: "right",
                        color: moved ? "#fbbf24" : "rgba(255,255,255,0.3)",
                      }}>
                        {newIdx + 1}
                      </span>

                      {/* Category dot */}
                      {catColor && (
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: catColor.dot, flexShrink: 0 }} />
                      )}

                      {/* Slide name */}
                      <span style={{
                        flex: 1, fontSize: 14, color: moved ? "#fff" : "rgba(255,255,255,0.5)",
                        fontWeight: moved ? 500 : 400,
                        textDecoration: isHidden ? "line-through" : "none",
                      }}>
                        {slide.label}
                      </span>

                      {/* Movement indicator */}
                      {moved && (
                        <span style={{
                          display: "flex", alignItems: "center", gap: 4,
                          fontSize: 12, fontWeight: 600, flexShrink: 0,
                          color: diff > 0 ? "#34d399" : "#f87171",
                        }}>
                          was {oldIdx + 1}
                          <ArrowRight size={12} />
                          {newIdx + 1}
                          <span style={{
                            marginLeft: 4, padding: "1px 6px", borderRadius: 4,
                            background: diff > 0 ? "rgba(5,150,105,0.15)" : "rgba(239,68,68,0.15)",
                            fontSize: 11,
                          }}>
                            {diff > 0 ? `↑${diff}` : `↓${Math.abs(diff)}`}
                          </span>
                        </span>
                      )}
                      {/* Category change indicator */}
                      {catChanged && (
                        <span style={{
                          fontSize: 11, fontWeight: 500, flexShrink: 0,
                          color: "#a78bfa", padding: "2px 8px", borderRadius: 4,
                          background: "rgba(167,139,250,0.12)",
                        }}>
                          {savedCat ? cat ? `${savedCat} → ${cat}` : `removed from ${savedCat}` : `→ ${cat}`}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal footer */}
            <div style={{
              padding: "16px 28px 20px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <button
                onClick={() => {
                  localStorage.setItem("previewDeckData", JSON.stringify({ order, hiddenSlides }));
                  window.open("/?preview=true", "_blank");
                }}
                className="catalog-btn-outline"
                style={{ marginRight: "auto" }}
              >
                <Eye size={15} style={{ flexShrink: 0 }} />
                Preview Deck
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className="catalog-btn-outline"
              >
                Go Back
              </button>
              <button
                onClick={() => { setShowPreview(false); saveAll(); }}
                className="catalog-btn-primary"
                style={{ background: "#2860B2", color: "#fff", cursor: "pointer" }}
              >
                <Check size={15} style={{ flexShrink: 0 }} />
                Confirm &amp; Save
              </button>
            </div>
          </div>
        </div>
      )}

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
      `}} />
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
