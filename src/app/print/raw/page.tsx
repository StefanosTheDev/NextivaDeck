"use client";

import { useState, useEffect } from "react";
import { resolveSlides, DEFAULT_SLIDE_ORDER, type SlideDef } from "@/components/slideRegistry";

export default function PrintRawPage() {
  const [slides, setSlides] = useState<SlideDef[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [startNum, setStartNum] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slidesParam = params.get("slides");
    const sn = parseInt(params.get("startNumber") || "1", 10);
    if (!isNaN(sn) && sn >= 1) setStartNum(sn);

    fetch("/api/slides")
      .then((r) => r.json())
      .then((data) => {
        if (slidesParam) {
          const requestedIds = slidesParam.split(",");
          setSlides(resolveSlides(requestedIds));
        } else if (Array.isArray(data.order)) {
          const hidden: string[] = Array.isArray(data.hiddenSlides) ? data.hiddenSlides : [];
          const visibleOrder = data.order.filter((id: string) => !hidden.includes(id));
          setSlides(resolveSlides(visibleOrder));
        } else {
          setSlides(resolveSlides(DEFAULT_SLIDE_ORDER));
        }
        setLoaded(true);
      })
      .catch(() => {
        if (slidesParam) {
          setSlides(resolveSlides(slidesParam.split(",")));
        } else {
          setSlides(resolveSlides(DEFAULT_SLIDE_ORDER));
        }
        setLoaded(true);
      });
  }, []);

  if (!loaded) return null;

  return (
    <div id="print-deck" data-slide-count={slides.length}>
      {slides.map((s, i) => {
        const Slide = s.component;
        return (
          <div
            key={s.id}
            className="print-slide"
            data-slide-id={s.id}
            data-slide-label={s.label}
            style={{
              width: 1920,
              height: 1080,
              overflow: "hidden",
              position: "relative",
              pageBreakAfter: "always",
              flexShrink: 0,
            }}
          >
            <Slide slideNumber={startNum + i} />
          </div>
        );
      })}
    </div>
  );
}
