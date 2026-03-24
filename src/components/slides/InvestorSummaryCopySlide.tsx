"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Radio, Database, Brain, DollarSign, TrendingUp } from "lucide-react";

const ACCENT = "#0070F3";

const pillars = [
  { icon: Radio, label: "Communications", color: "#0070F3" },
  { icon: Database, label: "Customer Data", color: "#00C2FF" },
  { icon: Brain, label: "AI Orchestration", color: "#7B61FF" },
];

const stats = [
  { stat: "$353M", label: "Revenue · 70%+ margin" },
  { stat: "93%", label: "Net Revenue Retention" },
  { stat: "AI", label: "Expands every deal" },
];

export default function InvestorSummaryCopySlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)",
        width: 900, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.header
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        style={{ padding: "56px 80px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 10px" }}>
          NEXTIVA
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Positioned at the intersection of
        </h1>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, margin: "4px 0 0", lineHeight: 1.15 }}>
          <span style={{ color: "#0070F3" }}>AI</span>
          {" + "}
          <span style={{ color: "#00C2FF" }}>Communications</span>
          {" + "}
          <span style={{ color: "#7B61FF" }}>Customer Data</span>
        </h1>
      </motion.header>

      {/* Three pillars */}
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
        style={{
          flex: 1, display: "flex", gap: 24, padding: "36px 80px 0",
          alignItems: "stretch", position: "relative", zIndex: 1,
        }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                flex: 1, background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `4px solid ${p.color}`,
                borderRadius: 16, padding: "40px 32px",
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", textAlign: "center",
              }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: 18,
                background: `${p.color}15`, border: `1px solid ${p.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon size={32} color={p.color} strokeWidth={1.75} />
              </div>
              <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                {p.label}
              </h2>
            </motion.div>
          );
        })}
      </motion.main>

      {/* Bottom stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }}
        style={{ padding: "16px 80px 24px", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <div style={{
          display: "flex",
          background: "linear-gradient(135deg, rgba(0,112,243,0.1), rgba(0,194,255,0.06))",
          border: `1px solid ${ACCENT}20`,
          borderRadius: 14, overflow: "hidden",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              flex: 1, padding: "20px 24px", textAlign: "center",
              borderRight: i < stats.length - 1 ? `1px solid ${ACCENT}15` : "none",
            }}>
              <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>{s.stat}</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: "6px 0 0" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
