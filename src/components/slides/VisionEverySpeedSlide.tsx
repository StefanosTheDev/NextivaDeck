"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Wrench, Coffee, Heart, Sparkles } from "lucide-react";

const ACCENT = "#7EB3E8";

const operators = [
  {
    icon: Wrench,
    type: "HVAC / Plumbing",
    subtype: "Family-run, mobile",
    quote: "Just don't drop my calls.",
    mode: "Agent-assist",
    modeBg: "rgba(255,255,255,0.07)",
    modeBorder: "rgba(255,255,255,0.16)",
    modeColor: "rgba(255,255,255,0.75)",
    stage: "AI-cautious",
    stageColor: "rgba(255,255,255,0.45)",
  },
  {
    icon: Coffee,
    type: "Restaurant group",
    subtype: "Multi-location",
    quote: "AI takes reservations.",
    mode: "Autopilot",
    modeBg: "rgba(126,179,232,0.10)",
    modeBorder: "rgba(126,179,232,0.30)",
    modeColor: "#9CC8EE",
    stage: "AI-ready",
    stageColor: "rgba(156,200,238,0.85)",
  },
  {
    icon: Heart,
    type: "Healthcare network",
    subtype: "Multi-clinic, regulated",
    quote: "AI handles intake. Humans clinical.",
    mode: "Hybrid",
    modeBg: "rgba(126,179,232,0.16)",
    modeBorder: "rgba(126,179,232,0.45)",
    modeColor: "#7EB3E8",
    stage: "AI-ready",
    stageColor: "rgba(126,179,232,0.85)",
  },
  {
    icon: Sparkles,
    type: "Digital-native bar",
    subtype: "Younger audience",
    quote: "AI does it all.",
    mode: "Autonomous",
    modeBg: "rgba(40,96,178,0.22)",
    modeBorder: "rgba(40,96,178,0.55)",
    modeColor: "#5BA0E8",
    stage: "AI-forward",
    stageColor: "#5BA0E8",
  },
];

export default function VisionEverySpeedSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
          One platform. Every speed.
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          We meet operators where they are — and grow with them.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.55)", margin: "16px auto 0", lineHeight: 1.5, maxWidth: 1320 }}>
          Different operators move at different speeds. The agentic continuum flexes to each one. AI is a setting, not a project.
        </p>
      </motion.header>

      {/* Continuum gradient bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        style={{
          margin: "36px 100px 0",
          height: 5,
          borderRadius: 999,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.16) 0%, rgba(126,179,232,0.55) 50%, rgba(40,96,178,0.95) 100%)",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 100px 0",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.45)" }}>AI-cautious</span>
        <span style={{ color: "rgba(156,200,238,0.85)" }}>AI-ready</span>
        <span style={{ color: "#5BA0E8" }}>AI-forward</span>
      </div>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          flex: 1,
          padding: "28px 80px 0",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {operators.map((o, i) => {
          const Icon = o.icon;
          return (
            <motion.article
              key={o.type}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${o.modeBorder}`,
                borderTop: `3px solid ${o.modeColor}`,
                borderRadius: 14,
                padding: "28px 26px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: o.modeBg,
                  border: `1px solid ${o.modeBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Icon size={24} color={o.modeColor} strokeWidth={1.75} />
              </div>

              <h2 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.25 }}>
                {o.type}
              </h2>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{o.subtype}</span>

              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", margin: "20px 0 22px", lineHeight: 1.45, fontStyle: "italic", flex: 1 }}>
                &ldquo;{o.quote}&rdquo;
              </p>

              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: o.modeBg,
                  border: `1px solid ${o.modeBorder}`,
                  alignSelf: "flex-start",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: o.modeColor }}>
                  → {o.mode}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <div style={{ padding: "30px 100px 16px" }}>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", textAlign: "center", margin: 0, fontStyle: "italic" }}>
          Each mode is a setting, not a project. Operators dial AI up or down as they&apos;re ready.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
      <span aria-hidden style={{ color: ACCENT, position: "absolute", visibility: "hidden" }}>·</span>
    </div>
  );
}
