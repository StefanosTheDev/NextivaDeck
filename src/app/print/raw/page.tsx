"use client";

import { useState, useEffect } from "react";
import { SLIDE_COMPONENTS, resolveSlides, DEFAULT_SLIDE_ORDER, type SlideDef } from "@/components/slideRegistry";
import { SLIDE_COMPONENTS_YANIV } from "@/components/slideRegistryYaniv";

interface FinalSlideEntry {
  id: string;
  source: "main" | "yaniv";
}

function resolveFinalOrder(entries: FinalSlideEntry[], hidden: string[]): SlideDef[] {
  return entries
    .filter((e) => !hidden.includes(`${e.source}::${e.id}`))
    .map((e) => {
      const registry = e.source === "yaniv" ? SLIDE_COMPONENTS_YANIV : SLIDE_COMPONENTS;
      const def = registry[e.id];
      if (!def) return null;
      return { ...def, id: `${e.source}::${e.id}` };
    })
    .filter((s): s is SlideDef => s != null);
}

export default function PrintRawPage() {
  const [slides, setSlides] = useState<SlideDef[]>(() => resolveSlides(DEFAULT_SLIDE_ORDER));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/slides?source=final")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.order) && data.order.length > 0) {
          const hidden: string[] = Array.isArray(data.hiddenSlides) ? data.hiddenSlides : [];
          const isFinalFormat = typeof data.order[0] === "object" && data.order[0].source;
          if (isFinalFormat) {
            const resolved = resolveFinalOrder(data.order as FinalSlideEntry[], hidden);
            if (resolved.length > 0) {
              setSlides(resolved);
              setLoaded(true);
              return;
            }
          } else {
            const visibleOrder = (data.order as string[]).filter((id: string) => !hidden.includes(id));
            const resolved = resolveSlides(visibleOrder);
            if (resolved.length > 0) {
              setSlides(resolved);
              setLoaded(true);
              return;
            }
          }
        }
        // Fallback to main if final is empty
        return fetch("/api/slides?source=main")
          .then((r) => r.json())
          .then((mainData) => {
            if (Array.isArray(mainData.order)) {
              const hidden: string[] = Array.isArray(mainData.hiddenSlides) ? mainData.hiddenSlides : [];
              const visibleOrder = mainData.order.filter((id: string) => !hidden.includes(id));
              setSlides(resolveSlides(visibleOrder));
            }
            setLoaded(true);
          });
      })
      .catch(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  return (
    <div id="print-deck">
      {slides.map((s, i) => {
        const Slide = s.component;
        return (
          <div
            key={s.id}
            className="print-slide"
            style={{
              width: 1920,
              height: 1080,
              overflow: "hidden",
              position: "relative",
              pageBreakAfter: "always",
              flexShrink: 0,
            }}
          >
            <Slide slideNumber={i + 1} />
          </div>
        );
      })}
    </div>
  );
}
