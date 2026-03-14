"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

import { resolveSlides, DEFAULT_SLIDE_ORDER, type SlideDef } from "./slideRegistry";

export default function InvestorDeck() {
  const [slides, setSlides] = useState<SlideDef[]>(() => resolveSlides(DEFAULT_SLIDE_ORDER));
  const [isPreview, setIsPreview] = useState(false);
  const [cur, setCur] = useState(() => {
    if (typeof window !== "undefined") {
      const param = new URLSearchParams(window.location.search).get("slide");
      if (param) {
        const n = parseInt(param, 10);
        if (!isNaN(n) && n >= 1) return n - 1;
      }
    }
    return 0;
  });
  const [nav, setNav] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview") === "true";
    setIsPreview(preview);

    if (preview) {
      const stored = localStorage.getItem("previewDeckData");
      if (stored) {
        try {
          const data = JSON.parse(stored);
          const previewOrder: string[] = data.order || DEFAULT_SLIDE_ORDER;
          const previewHidden: string[] = data.hiddenSlides || [];
          const visible = previewOrder.filter((id: string) => !previewHidden.includes(id));
          const resolved = resolveSlides(visible);
          if (resolved.length > 0) {
            setSlides(resolved);
            if (cur >= resolved.length) setCur(0);
            return;
          }
        } catch {
          // fall through to API
        }
      }
    }

    fetch("/api/slides")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.order)) {
          const hidden: string[] = Array.isArray(data.hiddenSlides) ? data.hiddenSlides : [];
          const visibleOrder = data.order.filter((id: string) => !hidden.includes(id));
          const resolved = resolveSlides(visibleOrder);
          setSlides(resolved);
          if (cur >= resolved.length) setCur(0);
        }
      })
      .catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = useCallback((i: number) => {
    if (i < 0 || i >= slides.length || i === cur || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCur(i);
      setTimeout(() => setTransitioning(false), 50);
    }, 300);
  }, [cur, transitioning, slides.length]);

  const next = useCallback(() => go(cur + 1), [cur, go]);
  const prev = useCallback(() => go(cur - 1), [cur, go]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") { e.preventDefault(); go(0); }
      else if (e.key === "End") { e.preventDefault(); go(slides.length - 1); }
      else if (e.key === "Escape") setNav(p => !p);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev, go]);

  useEffect(() => {
    let sx = 0, sy = 0;
    const ts = (e: TouchEvent) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; };
    const te = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    };
    window.addEventListener("touchstart", ts);
    window.addEventListener("touchend", te);
    return () => { window.removeEventListener("touchstart", ts); window.removeEventListener("touchend", te); };
  }, [next, prev]);

  useEffect(() => {
    if (isPreview) return;
    let t: NodeJS.Timeout;
    const show = () => { setNav(true); clearTimeout(t); t = setTimeout(() => setNav(false), 3000); };
    window.addEventListener("mousemove", show);
    t = setTimeout(() => setNav(false), 5000);
    return () => { window.removeEventListener("mousemove", show); clearTimeout(t); };
  }, [isPreview]);

  const Slide = slides[cur].component;
  const navTheme = slides[cur].theme === "dark" ? "nav-dark" : "nav-light";

  return (
    <div ref={containerRef} className="deck-viewport">
      {/* Preview banner */}
      {isPreview && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: "10px 24px",
            background: "rgba(217,119,6,0.9)",
            backdropFilter: "blur(8px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          <span>Preview Mode — Changes not published</span>
          <span style={{ fontSize: 13, fontWeight: 400, opacity: 0.7 }}>
            Slide {cur + 1} of {slides.length}
          </span>
          <a
            href="/catalog"
            style={{
              marginLeft: "auto",
              display: "flex", alignItems: "center", gap: 6,
              padding: "5px 14px", borderRadius: 6,
              background: "rgba(0,0,0,0.2)",
              color: "#fff", textDecoration: "none",
              fontSize: 13, fontWeight: 500,
            }}
          >
            <ArrowLeft size={14} />
            Back to Catalog
          </a>
        </div>
      )}

      {/* Slide layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: transitioning ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Slide slideNumber={cur + 1} />
      </div>

      {/* Navigation overlay */}
      <AnimatePresence>
        {nav && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className={`absolute inset-0 pointer-events-none z-50 ${navTheme}`}>

            {cur > 0 && (
              <button onClick={prev}
                className="nav-arrow absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all pointer-events-auto cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {cur < slides.length - 1 && (
              <button onClick={next}
                className="nav-arrow absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all pointer-events-auto cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <div className="nav-pill absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full pointer-events-auto">
              {slides.map((s, i) => (
                <button key={s.id} onClick={() => go(i)} className={`nav-dot ${i === cur ? "active" : ""}`} title={s.label} />
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
