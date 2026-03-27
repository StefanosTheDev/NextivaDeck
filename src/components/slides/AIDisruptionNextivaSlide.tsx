"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Server, Database, Brain } from "lucide-react";

const ACCENT = "#0070F3";

const pillars = [
  {
    num: "01",
    icon: Server,
    title: "Infrastructure +\nPlatform Company",
    subtitle: "We are the operating layer",
    bullets: [
      "Every interaction (voice, SMS, chat, email) flows through Nextiva",
      "Downtime = lost revenue, compliance risk, customer churn",
      "Telecom infrastructure with regulatory requirements",
      "Not a tool \u2014 part of daily business operations",
      "Switching costs compound as workflows & AI embed deeper",
    ],
    badge: "Firmly on the insulated side",
  },
  {
    num: "02",
    icon: Database,
    title: "Proprietary\nReal-Time Data",
    subtitle: "Live, decision-grade data at the point of interaction",
    bullets: [
      "We sit at the moment of conversation \u2014 first-party data",
      "Ground truth vs. synthetic or delayed data",
      "Continuous learning loop (data flywheel)",
      "Context across channels + systems",
      "Extremely hard to replicate",
    ],
    badge: "Far right edge of the spectrum",
  },
  {
    num: "03",
    icon: Brain,
    title: "Agentic AI on\nOwned Stack",
    subtitle: "AI built on our infra + data layer",
    bullets: [
      "XBert, automation, agent assist \u2014 built on owned infrastructure",
      "Better performance, lower hallucination risk",
      "Direct monetization: per-resolution, per-interaction",
      "Most AI companies: stateless, API-driven, easily replaceable",
      "Nextiva AI: embedded, contextual, compounding",
    ],
    badge: "The differentiator",
  },
];

export default function AIDisruptionNextivaSlide({ slideNumber = 51 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        overflow: "hidden",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "44px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 10px" }}>
          WHERE NEXTIVA SITS
        </p>
        <h1 className="font-heading" style={{ fontSize: 44, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Why Nextiva is insulated from AI disruption.
        </h1>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.45)", margin: "10px 0 0" }}>
          Three structural layers that compound over time &mdash; each one hard to build, together impossible to replicate.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1, padding: "24px 60px 0",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16,
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
                padding: "28px 24px 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={22} color={ACCENT} strokeWidth={1.75} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: ACCENT, letterSpacing: "0.04em" }}>{p.num}</span>
              </div>

              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "8px 0 0", lineHeight: 1.2, whiteSpace: "pre-line" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13, color: ACCENT, fontWeight: 600, margin: "6px 0 14px" }}>
                {p.subtitle}
              </p>

              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                {p.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: ACCENT, fontSize: 12, lineHeight: "20px", flexShrink: 0 }}>&rsaquo;</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div style={{
                marginTop: 16,
                background: `${ACCENT}12`,
                border: `1px solid ${ACCENT}25`,
                borderRadius: 8,
                padding: "8px 14px",
                textAlign: "center",
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {p.badge}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{ padding: "14px 60px 8px", textAlign: "center" }}
      >
        <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: 0 }}>
          AI doesn&apos;t disrupt Nextiva &mdash; it deepens the moat.
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
