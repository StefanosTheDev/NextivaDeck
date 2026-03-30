"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Server, Database, Brain, Check } from "lucide-react";

const ACCENT = "#0070F3";

const pillars = [
  {
    num: "01",
    icon: Server,
    title: "Infrastructure + Platform",
    label: "Core Truth",
    points: [
      "Mission-critical workflows",
      "High cost of failure",
      "Regulated environment",
      "Deeply embedded operations",
      "Compounding switching costs",
    ],
    takeaway: "FIRMLY ON THE RIGHT\nSIDE OF THE CHART",
  },
  {
    num: "02",
    icon: Database,
    title: "Proprietary Real-Time Data",
    label: "Far Right Edge",
    points: [
      "First-party conversation data",
      "Ground truth, not synthetic",
      "Continuous learning flywheel",
      "Cross-channel context",
      "Extremely hard to replicate",
    ],
    takeaway: "LIVE, DECISION-GRADE DATA\nAT THE POINT OF INTERACTION",
  },
  {
    num: "03",
    icon: Brain,
    title: "Agentic AI on Owned Stack",
    label: "The Differentiator",
    points: [
      "AI built on owned infrastructure",
      "Lower hallucination risk",
      "Per-resolution monetization",
      "Embedded, not bolt-on",
      "Compounds with every interaction",
    ],
    takeaway: "AI DOESN\u2019T DISRUPT NEXTIVA \u2014\nIT DEEPENS THE MOAT",
  },
];

export default function AIDisruptionNextivaSlide({ slideNumber = 51 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "36px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 12px" }}>
          WHERE NEXTIVA SITS ON THE AI DISRUPTION SPECTRUM
        </p>
        <h1 className="font-heading" style={{ fontSize: 46, fontWeight: 400, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Three structural layers that compound over time.
        </h1>
      </motion.header>

      {/* Three columns */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1, padding: "32px 60px 0",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20,
          alignItems: "stretch",
        }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `3px solid ${ACCENT}`,
                borderRadius: 14,
                padding: "28px 26px 22px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Pillar header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={26} color={ACCENT} strokeWidth={1.75} />
                </div>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: ACCENT, letterSpacing: "0.06em", textTransform: "uppercase" }}>{p.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.2)", marginLeft: 8 }}>{p.num}</span>
                </div>
              </div>

              <h3 className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: "0 0 28px", lineHeight: 1.25 }}>
                {p.title}
              </h3>

              {/* Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                {p.points.map((pt, j) => (
                  <div key={j} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <Check size={18} color="#4CAF50" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", fontWeight: 500, lineHeight: 1.3 }}>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Takeaway */}
              <div style={{
                marginTop: 24,
                background: `${ACCENT}10`,
                border: `1px solid ${ACCENT}22`,
                borderRadius: 10,
                padding: "14px 20px",
                textAlign: "center",
              }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "pre-line", lineHeight: 1.5 }}>
                  {p.takeaway}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
