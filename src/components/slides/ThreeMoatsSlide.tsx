"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Radio, Database, Brain } from "lucide-react";

const ACCENT = "#0070F3";

const moats = [
  {
    icon: Radio,
    label: "Communications",
    desc: "Voice, chat, email, video — every channel, owned end-to-end.",
    accent: "#0070F3",
  },
  {
    icon: Database,
    label: "Customer Data",
    desc: "Billions of interactions powering a unified, proprietary data layer.",
    accent: "#00C2FF",
  },
  {
    icon: Brain,
    label: "AI Orchestration",
    desc: "Real-time intelligence that listens, decides, and acts autonomously.",
    accent: "#7B61FF",
  },
];

export default function ThreeMoatsSlide({ slideNumber = 41 }: { slideNumber?: number }) {
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
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 900, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.header
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        style={{ padding: "56px 80px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 10px" }}>
          WHY NEXTIVA WINS
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          We own the{" "}
          <span style={{
            background: "linear-gradient(90deg, #0070F3, #00C2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            interaction layer.
          </span>
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: "16px auto 0", lineHeight: 1.5, maxWidth: 700 }}>
          Three moats that no competitor can replicate — combined in a single platform.
        </p>
      </motion.header>

      {/* Three moat cards */}
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
        style={{
          flex: 1, display: "flex", gap: 24, padding: "36px 80px 0",
          alignItems: "stretch", position: "relative", zIndex: 1,
        }}
      >
        {moats.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `4px solid ${m.accent}`,
                borderRadius: 16,
                padding: "40px 32px",
                display: "flex", flexDirection: "column", alignItems: "center",
                textAlign: "center", position: "relative", overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: -40, right: -40,
                width: 120, height: 120, borderRadius: "50%",
                background: `radial-gradient(circle, ${m.accent}12, transparent 70%)`,
                pointerEvents: "none",
              }} />
              <div style={{
                width: 64, height: 64, borderRadius: 18,
                background: `${m.accent}15`, border: `1px solid ${m.accent}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
              }}>
                <Icon size={32} color={m.accent} strokeWidth={1.75} />
              </div>
              <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                {m.label}
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", margin: "14px 0 0", lineHeight: 1.55 }}>
                {m.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.main>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}
        style={{ padding: "16px 80px 24px", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <div style={{
          background: "linear-gradient(135deg, rgba(0,112,243,0.1), rgba(0,194,255,0.06))",
          border: `1px solid ${ACCENT}20`,
          borderRadius: 14, padding: "22px 40px", textAlign: "center",
        }}>
          <p style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.5 }}>
            Turn every conversation into{" "}
            <span style={{ color: ACCENT, fontWeight: 700 }}>an action.</span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
