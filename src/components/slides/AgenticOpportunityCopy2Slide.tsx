"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const stats = [
  { value: "25M+", label: "businesses with\ncustomer-facing teams" },
  { value: "18M", label: "traditional contact\ncenter seats" },
  { value: "7M", label: "businesses doing CX\nwithout calling it contact center" },
];

const pyramidSegments = [
  {
    label: "Enterprise (1,000+ seats)",
    annotation: "Where competitors fight",
    width: "55%",
    bg: "rgba(232,116,97,0.18)",
    border: "rgba(232,116,97,0.35)",
    accent: "#E87461",
  },
  {
    label: "Mid-market (50–1,000 seats)",
    annotation: "Underserved",
    width: "72%",
    bg: "rgba(40,96,178,0.10)",
    border: "rgba(40,96,178,0.22)",
    accent: "#5BA0E0",
  },
  {
    label: "SMB & Massive Middle (<50 seats) — 70% of all centers",
    annotation: "← NEXTIVA'S MARKET",
    width: "100%",
    bg: "rgba(40,96,178,0.18)",
    border: "rgba(40,96,178,0.35)",
    accent: "#2860B2",
    highlight: true,
  },
];

const marketGapItems = [
  "Legacy platforms require large IT teams to deploy",
  "6-figure implementation budgets out of reach",
  "12–18 month deployment cycles",
  "Software not designed for self-service",
];

const purposeBuiltItems = [
  { keyword: "self-serve", desc: "No IT team or integrators required" },
  { keyword: "affordable", desc: "Enterprise-grade tools at accessible pricing" },
  { keyword: "fast", desc: "Designed for immediate time to value" },
  { keyword: "unified", desc: "All channels & data, one platform" },
];

export default function AgenticOpportunityCopy2Slide({ slideNumber = 17 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "36px 100px 0", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          WHERE WE WIN
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
        >
          A massive market hiding in plain sight.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.45)",
            margin: "10px 0 0",
            lineHeight: 1.5,
            maxWidth: 640,
          }}
        >
          Millions of businesses need enterprise-grade CX — but legacy vendors only serve the top of the pyramid.
        </p>
      </motion.header>

      {/* Two-column body */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1,
          display: "flex",
          gap: 28,
          padding: "20px 100px 0",
          minHeight: 0,
        }}
      >
        {/* Left column: stats + pyramid */}
        <div style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              margin: 0,
            }}
          >
            THE FULL OPPORTUNITY
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", gap: 16 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <p
                  className="font-heading"
                  style={{
                    fontSize: 38,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                    lineHeight: 1.35,
                    whiteSpace: "pre-line",
                  }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Pyramid */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              flex: 1,
              justifyContent: "center",
            }}
          >
            {pyramidSegments.map((seg, i) => (
              <motion.div
                key={seg.label}
                initial={{ opacity: 0, scaleX: 0.85 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.12 }}
                style={{
                  width: seg.width,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    background: seg.bg,
                    border: `1px solid ${seg.border}`,
                    borderLeft: `4px solid ${seg.accent}`,
                    borderRadius: 10,
                    padding: "12px 20px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: seg.highlight ? 14 : 13,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {seg.label}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: seg.highlight ? "#7EB3E8" : "rgba(255,255,255,0.4)",
                    margin: 0,
                    whiteSpace: "nowrap",
                    fontStyle: seg.highlight ? "normal" : "italic",
                    letterSpacing: seg.highlight ? "0.03em" : undefined,
                    flexShrink: 0,
                  }}
                >
                  {seg.annotation}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right column: two cards */}
        <div style={{ flex: 0.85, display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
          {/* The Market Gap */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              background: "rgba(232,116,97,0.06)",
              border: "1px solid rgba(232,116,97,0.18)",
              borderTop: "3px solid #E87461",
              borderRadius: 14,
              padding: "22px 26px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "#E87461",
                margin: "0 0 14px",
              }}
            >
              THE MARKET GAP
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
              {marketGapItems.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span
                    style={{
                      color: "#E87461",
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: 1.4,
                      flexShrink: 0,
                    }}
                  >
                    ✕
                  </span>
                  <p
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.65)",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.35)",
                margin: "12px 0 0",
                lineHeight: 1.45,
              }}
            >
              Most businesses simply can&apos;t afford what legacy vendors charge.
            </p>
          </motion.div>

          {/* Nextiva Is Purpose-Built */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              background: "rgba(40,96,178,0.08)",
              border: "1px solid rgba(40,96,178,0.2)",
              borderTop: "3px solid #2860B2",
              borderRadius: 14,
              padding: "22px 26px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: "0 0 14px",
              }}
            >
              NEXTIVA IS PURPOSE-BUILT FOR THIS
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
              {purposeBuiltItems.map((item) => (
                <div key={item.keyword} style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      minWidth: 100,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.keyword}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.55)",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.main>

      {/* Bottom banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ padding: "16px 100px 12px", flexShrink: 0 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 32px",
            borderRadius: 14,
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", margin: 0, textAlign: "center" }}>
            Enterprise-grade CX for every business&ensp;·&ensp;Purpose-built, not dumbed down&ensp;·&ensp;
            <span style={{ color: "#7EB3E8" }}>This is Nextiva&apos;s space to win</span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
