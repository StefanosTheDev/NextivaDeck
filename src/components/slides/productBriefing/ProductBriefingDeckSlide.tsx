"use client";

import { motion } from "framer-motion";
import SlideFooter from "../../SlideFooter";
import CxpaasArchitectureBody from "./CxpaasArchitectureBody";
import UnifiedCxmPlatformBody from "./UnifiedCxmPlatformBody";
import { PRODUCT_BRIEFING_SPECS, type ProductBriefingSlideSpec } from "./productBriefingSlidesContent";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)";

function BriefingBody({ spec }: { spec: ProductBriefingSlideSpec }) {
  if (spec.variant === "unified-cxm-platform") {
    return <UnifiedCxmPlatformBody />;
  }
  if (spec.variant === "cxpaas-architecture") {
    return <CxpaasArchitectureBody />;
  }

  /** PDF raster — must win over plain NDA/center text layouts */
  if (spec.referenceImage) {
    return (
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{
          flex: 1,
          minHeight: 0,
          padding: "4px 40px 12px",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            minHeight: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px 8px 8px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- static briefing export */}
          <img
            src={spec.referenceImage.src}
            alt={spec.referenceImage.alt}
            style={{
              maxWidth: "100%",
              maxHeight: "min(72vh, 640px)",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </motion.main>
    );
  }

  if (spec.variant === "nda") {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <p className="font-heading" style={{ fontSize: 48, fontWeight: 600, color: "#FFFFFF", margin: 0, textAlign: "center", lineHeight: 1.2 }}>
          {spec.title}
        </p>
        {spec.subtitle && (
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "24px 0 0", textAlign: "center", maxWidth: 720 }}>
            {spec.subtitle}
          </p>
        )}
      </div>
    );
  }

  if (spec.variant === "center") {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        {spec.eyebrow && (
          <p style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 16px" }}>
            {spec.eyebrow}
          </p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading"
          style={{ fontSize: 56, fontWeight: 600, color: "#FFFFFF", margin: 0, textAlign: "center", lineHeight: 1.15 }}
        >
          {spec.title}
        </motion.h1>
      </div>
    );
  }

  const hasMain =
    (spec.pillars?.length ?? 0) > 0 ||
    (spec.sections?.length ?? 0) > 0 ||
    (spec.bullets?.length ?? 0) > 0 ||
    (spec.metrics?.length ?? 0) > 0 ||
    (spec.denseBlocks?.length ?? 0) > 0;

  if (!hasMain) return null;

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{
        flex: 1,
        minHeight: 0,
        padding: "8px 100px 24px",
        overflowY: "auto",
      }}
    >
      {spec.pillars && spec.pillars.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: spec.pillars.length > 4 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
            gap: 14,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {spec.pillars.map((p) => (
            <div
              key={p.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: "18px 20px",
              }}
            >
              <p className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.25 }}>
                {p.title}
              </p>
              {p.subtitle && (
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", margin: "8px 0 0", lineHeight: 1.4 }}>
                  {p.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {spec.sections && spec.sections.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 1100, margin: "0 auto" }}>
          {spec.sections.map((sec) => (
            <div key={sec.heading}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7EB3E8", margin: "0 0 8px" }}>
                {sec.heading}
              </p>
              <ul style={{ margin: 0, paddingLeft: 20, color: "rgba(255,255,255,0.82)", fontSize: 17, lineHeight: 1.45 }}>
                {sec.bullets.map((b) => (
                  <li key={b.slice(0, 40)} style={{ marginBottom: 6 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {spec.bullets && spec.bullets.length > 0 && !spec.sections && (
        <ul style={{ margin: 0, paddingLeft: 20, maxWidth: 1000, marginInline: "auto", color: "rgba(255,255,255,0.85)", fontSize: 17, lineHeight: 1.45 }}>
          {spec.bullets.map((b) => (
            <li key={b.slice(0, 48)} style={{ marginBottom: 10 }}>
              {b}
            </li>
          ))}
        </ul>
      )}

      {spec.metrics && spec.metrics.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 900, margin: "0 auto" }}>
          {spec.metrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "24px 28px",
              }}
            >
              <p className="font-heading" style={{ fontSize: 36, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                {m.value}
              </p>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", margin: "8px 0 0" }}>{m.label}</p>
            </div>
          ))}
        </div>
      )}

      {spec.denseBlocks && spec.denseBlocks.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 1100, margin: "0 auto" }}>
          {spec.denseBlocks.map((block) => (
            <div
              key={block.heading}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "14px 18px",
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 700, color: "#7EB3E8", margin: "0 0 8px" }}>{block.heading}</p>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.4, color: "rgba(255,255,255,0.78)" }}>
                {block.lines.map((line) => (
                  <li key={line.slice(0, 50)} style={{ marginBottom: 4 }}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </motion.main>
  );
}

export function ProductBriefingDeckSlide({ slideIndex, slideNumber = 0 }: { slideIndex: number; slideNumber?: number }) {
  const spec = PRODUCT_BRIEFING_SPECS[slideIndex - 1];
  if (!spec) {
    return (
      <div className="slide" style={{ background: BG }}>
        <p style={{ color: "#fff" }}>Missing briefing slide {slideIndex}</p>
        <SlideFooter slideNumber={slideNumber} variant="dark" />
      </div>
    );
  }

  if (spec.variant === "center") {
    return (
      <div className="slide" style={{ background: BG, justifyContent: "space-between" }}>
        <BriefingBody spec={spec} />
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textAlign: "center", padding: "0 24px 4px", margin: 0 }}>
          Proprietary & confidential — Nextiva Corporation
        </p>
        <SlideFooter slideNumber={slideNumber} variant="dark" />
      </div>
    );
  }

  return (
    <div className="slide" style={{ background: BG, justifyContent: "space-between" }}>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{
          padding:
            spec.variant === "nda"
              ? "72px 100px 16px"
              : spec.variant === "cxpaas-architecture" || spec.variant === "unified-cxm-platform"
                ? "32px 56px 4px"
                : "56px 100px 12px",
          flexShrink: 0,
          textAlign: spec.variant === "nda" ? "center" : "left",
        }}
      >
        {spec.eyebrow && spec.variant !== "nda" && (
          <p style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
            {spec.eyebrow}
          </p>
        )}
        {spec.eyebrow && spec.variant === "nda" && (
          <p style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 16px" }}>
            {spec.eyebrow}
          </p>
        )}
        {spec.title && spec.variant !== "nda" && (
          <h1
            className="font-heading"
            style={{
              fontSize:
                spec.variant === "unified-cxm-platform"
                  ? 34
                  : spec.variant === "cxpaas-architecture"
                    ? 38
                    : spec.pillars && spec.pillars.length <= 4
                      ? 44
                      : 38,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.15,
              maxWidth: 1100,
            }}
          >
            {spec.title}
          </h1>
        )}
        {spec.subtitle && spec.variant !== "nda" && (
          <p
            style={{
              fontSize: spec.variant === "unified-cxm-platform" ? 17 : 20,
              color: "rgba(255,255,255,0.5)",
              margin: "12px 0 0",
              lineHeight: 1.4,
              maxWidth: spec.variant === "unified-cxm-platform" ? 1100 : 920,
            }}
          >
            {spec.subtitle}
          </p>
        )}
      </motion.header>

      <BriefingBody spec={spec} />

      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textAlign: "center", padding: "0 24px 4px", margin: 0 }}>
        Proprietary & confidential — Nextiva Corporation
      </p>
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}

function mk(n: number) {
  return function ProductBriefingSlideN({ slideNumber }: { slideNumber?: number }) {
    return <ProductBriefingDeckSlide slideIndex={n} slideNumber={slideNumber} />;
  };
}

export const ProductBriefingSlide01 = mk(1);
export const ProductBriefingSlide02 = mk(2);
export const ProductBriefingSlide03 = mk(3);
export const ProductBriefingSlide04 = mk(4);
export const ProductBriefingSlide05 = mk(5);
export const ProductBriefingSlide06 = mk(6);
export const ProductBriefingSlide07 = mk(7);
export const ProductBriefingSlide08 = mk(8);
export const ProductBriefingSlide09 = mk(9);
export const ProductBriefingSlide10 = mk(10);
export const ProductBriefingSlide11 = mk(11);
export const ProductBriefingSlide12 = mk(12);
export const ProductBriefingSlide13 = mk(13);
export const ProductBriefingSlide14 = mk(14);
export const ProductBriefingSlide15 = mk(15);
export const ProductBriefingSlide16 = mk(16);
export const ProductBriefingSlide17 = mk(17);
export const ProductBriefingSlide18 = mk(18);
export const ProductBriefingSlide19 = mk(19);
export const ProductBriefingSlide20 = mk(20);
export const ProductBriefingSlide21 = mk(21);
export const ProductBriefingSlide22 = mk(22);
export const ProductBriefingSlide23 = mk(23);
export const ProductBriefingSlide24 = mk(24);
export const ProductBriefingSlide25 = mk(25);
