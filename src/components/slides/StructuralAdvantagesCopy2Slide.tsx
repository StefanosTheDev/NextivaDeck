"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Radio, Activity, Brain } from "lucide-react";

const pillars = [
  {
    icon: Radio,
    number: "01",
    title: "Comm Infrastructure",
    subtitle: "We own the layer AI runs on.",
    points: [
      "Native voice + digital channel network",
      "Operates in a regulated, high-barrier environment",
      "Deeply embedded, mission-critical infrastructure",
    ],
    badge: "Hard to replicate at scale",
  },
  {
    icon: Activity,
    number: "02",
    title: "Data & Intelligence",
    subtitle: "We see interactions as they happen.",
    points: [
      "AI trained and executed on live interaction data",
      "Ground truth at the moment of conversation, not static or delayed datasets",
      "Proprietary data flywheel compounding with every interaction",
    ],
    badge: "Value compounds over time",
  },
  {
    icon: Brain,
    number: "03",
    title: "Agentic AI Platform",
    subtitle: "Human + AI, fully orchestrated.",
    points: [
      "Autonomous + assistive AI working together",
      "Seamless handoff between AI and humans",
      "Monetization aligned to interactions, resolutions, and outcomes",
    ],
    badge: "Platform AI & Human in tandem advantage",
  },
];

const ACCENT = "#0070F3";

export default function StructuralAdvantagesCopy2Slide({ slideNumber = 43 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
          CUMULATIVE STRUCTURAL ADVANTAGE
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.18 }}>
          Only platform fusing{" "}
          <span style={{ color: ACCENT }}>AI</span>, comms & data.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Not easy to replicate. Innovation compounds across the entire platform.
        </p>
      </motion.header>

      <main style={{ flex: 1, padding: "32px 100px 0", display: "flex", gap: 20, alignItems: "stretch" }}>
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "3px solid #2860B2",
                borderRadius: 16,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(40,96,178,0.12)",
                  border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={24} color="#7EB3E8" strokeWidth={1.75} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
                  {p.number}
                </span>
              </div>

              <h2 className="font-heading" style={{ fontSize: 30, fontWeight: 700, color: "#FFFFFF", margin: "0 0 6px", lineHeight: 1.15 }}>
                {p.title}
              </h2>

              <p style={{ fontSize: 18, fontWeight: 600, color: "#7EB3E8", margin: "0 0 16px", lineHeight: 1.4 }}>
                {p.subtitle}
              </p>

              <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 16 }} />

              <ul style={{ margin: 0, padding: 0, listStyle: "none", flex: 1 }}>
                {p.points.map((point) => (
                  <li key={point} style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.55, marginBottom: 10, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 1, color: "#7EB3E8", fontWeight: 700 }}>&rsaquo;</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: 16,
                padding: "12px 20px",
                borderRadius: 10,
                background: "#2860B2",
                border: "1px solid rgba(255,255,255,0.15)",
                textAlign: "center",
              }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.03em" }}>
                  {p.badge}
                </span>
              </div>
            </motion.article>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
