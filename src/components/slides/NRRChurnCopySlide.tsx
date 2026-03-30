"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const churnCards = [
  {
    label: "<$500 AVG MONTHLY\nCHURN FIRST 12 MO",
    value: "1.36%",
    color: "#FFFFFF",
    detail: "Blended 2021-2025 · net MRR loss",
  },
  {
    label: ">$500 AVG MONTHLY\nCHURN FIRST 12 MO",
    value: "\u20130.24%",
    color: "#FFFFFF",
    detail: "Blended 2021-2025 · net MRR expansion",
  },
  {
    label: "<$500 BLENDED MONTHLY\nCHURN MO 0\u219253",
    value: "1.07%",
    color: "#FFFFFF",
    detail: "Blended 2021-2025 · 100.0%\n\u2192 56.5%",
  },
  {
    label: ">$500 BLENDED MONTHLY\nCHURN MO 0\u219253",
    value: "0.41%",
    color: "#4CAF50",
    detail: "Blended 2021-2025 · 100.0%\n\u2192 80.4%",
  },
];

export default function NRRChurnCopySlide({ slideNumber = 26 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCC7C3", margin: "0 0 10px" }}>Retention trends</p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 400, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Churn and Retention both improving across segments.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", flexDirection: "column", padding: "24px 80px", justifyContent: "center", gap: 20 }}
      >
        {/* Top: Net Revenue Retention box */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            padding: "32px 48px",
            textAlign: "center" as const,
            display: "flex",
            flexDirection: "column" as const,
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderTop: "3px solid #2860B2",
            borderRadius: 16,
          }}
        >
          <p style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#7EB3E8", margin: 0 }}>
            Net revenue retention
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, margin: "16px 0" }}>
            <span className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "rgba(255,255,255,0.35)" }}>91%</span>
            <span style={{ fontSize: 40, color: "#4CAF50" }}>{"\u2191"}</span>
            <span className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#FFFFFF" }}>94%</span>
          </div>
          <p style={{ fontSize: 16, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: 0 }}>FY25 → FY27</p>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>Expanding through upsell and cross-sell</p>
        </motion.article>

        {/* Bottom: 4 churn cards */}
        <div style={{ display: "flex", gap: 16 }}>
          {churnCards.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={{
                flex: 1,
                padding: "28px 20px",
                textAlign: "center" as const,
                display: "flex",
                flexDirection: "column" as const,
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "3px solid #2860B2",
                borderRadius: 16,
              }}
            >
              <p style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                margin: 0,
                lineHeight: 1.4,
                whiteSpace: "pre-line",
              }}>
                {c.label}
              </p>
              <p className="font-heading" style={{
                fontSize: 42,
                fontWeight: 700,
                color: c.color,
                margin: "12px 0 0",
                lineHeight: 1,
              }}>
                {c.value}
              </p>
              <p style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                margin: "10px 0 0",
                lineHeight: 1.4,
                whiteSpace: "pre-line",
              }}>
                {c.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
