"use client";

import { useState, useEffect } from "react";
import { resolveSlides, DEFAULT_SLIDE_ORDER, type SlideDef } from "@/components/slideRegistry";

export default function PrintRawPage() {
  const [slides, setSlides] = useState<SlideDef[]>(() => resolveSlides(DEFAULT_SLIDE_ORDER));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/slides")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.order)) {
          const hidden: string[] = Array.isArray(data.hiddenSlides) ? data.hiddenSlides : [];
          const visibleOrder = data.order.filter((id: string) => !hidden.includes(id));
          setSlides(resolveSlides(visibleOrder));
        }
        setLoaded(true);
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
