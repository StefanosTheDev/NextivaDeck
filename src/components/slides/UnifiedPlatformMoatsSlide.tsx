"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Radio, Database, Brain } from "lucide-react";

const ACCENT = "#0070F3";

const layers = [
  {
    icon: Radio,
    label: "Infrastructure Layer",
    title: "Communications Network",
    desc: "Voice, chat, email, video — every channel on a single owned network.",
    color: "#0070F3",
  },
  {
    icon: Database,
    label: "Data Layer",
    title: "Customer Journal",
    desc: "Real-time + historical interaction data unified in one model.",
    color: "#00C2FF",
  },
  {
    icon: Brain,
    label: "Intelligence Layer",
    title: "AI Orchestration",
    desc: "Listens, decides, and acts across every conversation automatically.",
    color: "#7B61FF",
  },
];

export default function UnifiedPlatformMoatsSlide({ slideNumber = 42 }: { slideNumber?: number }) {
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
          OUR MOAT
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          A unified platform,{" "}
          <span style={{
            background: "linear-gradient(90deg, #0070F3, #00C2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            not fragmented products.
          </span>
        </h1>
      </motion.header>

      {/* Three stacked layers */}
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
        style={{
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          gap: 18, padding: "32px 80px 0", position: "relative", zIndex: 1,
        }}
      >
        {layers.map((l, i) => {
          const Icon = l.icon;
          return (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                display: "flex", alignItems: "center", gap: 28,
                background: `linear-gradient(135deg, ${l.color}08, ${l.color}04)`,
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: `5px solid ${l.color}`,
                borderRadius: 16,
                padding: "28px 36px",
              }}
            >
              <div style={{
                width: 60, height: 60, borderRadius: 16, flexShrink: 0,
                background: `${l.color}15`, border: `1px solid ${l.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={30} color={l.color} strokeWidth={1.75} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: l.color, margin: "0 0 4px" }}>
                  {l.label}
                </p>
                <p className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
                  {l.title}
                </p>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", margin: "6px 0 0", lineHeight: 1.45 }}>
                  {l.desc}
                </p>
              </div>
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
            Innovation compounds across the{" "}
            <span style={{ color: ACCENT, fontWeight: 700 }}>entire platform.</span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
