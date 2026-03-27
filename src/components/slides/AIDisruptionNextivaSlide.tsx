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
    subtitle: "Firmly on the insulated side",
    points: [
      { main: "Embedded in mission-critical workflows", detail: "Every customer interaction (voice, SMS, chat, email) flows through Nextiva" },
      { main: "High cost of failure", detail: "Downtime or errors = lost revenue, compliance risk, customer churn" },
      { main: "Regulated environment", detail: "Telecom infrastructure, compliance, reliability requirements" },
      { main: "Deep operational embedding", detail: "Not a tool — part of daily business operations" },
      { main: "Switching costs compound over time", detail: "As workflows, data, and AI get embedded" },
    ],
    takeaway: "THIS PLACES NEXTIVA FIRMLY\nON THE RIGHT SIDE OF THE CHART",
  },
  {
    num: "02",
    icon: Database,
    title: "Proprietary Real-Time Data",
    label: "Far Right Edge",
    subtitle: "Live, decision-grade data at the point of interaction",
    points: [
      { main: "We sit at the moment of conversation", detail: "First-party, real-time interaction data" },
      { main: "Ground truth vs. synthetic or delayed data", detail: "" },
      { main: "Continuous learning loop", detail: "Data flywheel" },
      { main: "Context across channels + systems", detail: "" },
      { main: "Extremely hard to replicate", detail: "" },
    ],
    takeaway: "It is live, decision-grade data\nat the point of interaction",
  },
  {
    num: "03",
    icon: Brain,
    title: "Agentic AI on Owned Stack",
    label: "The Differentiator",
    subtitle: "AI built on our infra + data layer",
    points: [
      { main: "XBert, automation, agent assist", detail: "Built on owned infrastructure" },
      { main: "Better performance, lower hallucination risk", detail: "" },
      { main: "Direct monetization", detail: "Per-resolution, per-interaction" },
      { main: "Most AI companies", detail: "Stateless, API-driven, easily replaceable" },
      { main: "Nextiva AI", detail: "Embedded, contextual, compounding" },
    ],
    takeaway: "AI doesn\u2019t disrupt Nextiva \u2014\nit deepens the moat",
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
        style={{ padding: "28px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 12px" }}>
          WHERE NEXTIVA SITS ON THE AI DISRUPTION SPECTRUM
        </p>
        <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Nextiva operates on the &ldquo;more insulated&rdquo; side
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "12px auto 0", whiteSpace: "nowrap" }}>
          We uniquely combine elements from both sides to win. Three structural layers that compound over time.
        </p>
      </motion.header>

      {/* Three columns */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1, padding: "28px 60px 0",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18,
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
                padding: "24px 22px 18px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Pillar header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={24} color={ACCENT} strokeWidth={1.75} />
                </div>
                <div>
                  <span style={{ fontSize: 16, fontWeight: 700, color: ACCENT, letterSpacing: "0.06em", textTransform: "uppercase" }}>{p.label}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.25)", marginLeft: 8 }}>{p.num}</span>
                </div>
              </div>

              <h3 className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: "8px 0 0", lineHeight: 1.25 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 16, color: ACCENT, fontWeight: 600, margin: "6px 0 14px", opacity: 0.8 }}>
                {p.subtitle}
              </p>

              {/* Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {p.points.map((pt, j) => (
                  <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Check size={16} color="#2E7D32" strokeWidth={3} style={{ flexShrink: 0, marginTop: 3 }} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", fontWeight: 600, lineHeight: 1.4 }}>{pt.main}</span>
                      {pt.detail && (
                        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontWeight: 400, marginTop: 2 }}>
                          → {pt.detail}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Takeaway */}
              <div style={{
                marginTop: 16,
                background: `${ACCENT}10`,
                border: `1px solid ${ACCENT}22`,
                borderRadius: 8,
                padding: "10px 16px",
                textAlign: "center",
              }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "pre-line" }}>
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
