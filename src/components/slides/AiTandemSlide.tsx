"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { BrainCog, Plane, Bot } from "lucide-react";

const modes = [
  { icon: BrainCog, title: "Agent Assist", line: "AI supports. Humans lead." },
  { icon: Plane, title: "Autopilot", line: "AI drives. Humans oversee." },
  { icon: Bot, title: "Autonomous", line: "AI handles end-to-end." },
];

export default function AiTandemSlide({ slideNumber = 11 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow" style={{ marginBottom: 12 }}>AI FLEXIBILITY</p>
        <h1 className="font-heading" style={{ fontSize: 68, fontWeight: 700, color: "#1A447C", margin: 0, lineHeight: 1.15 }}>
          AI and human in tandem.
        </h1>
      </motion.header>

      {/* Three cards */}
      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 100px 0", gap: 32 }}
      >
        {modes.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.title} style={{
              flex: 1, background: "#FFFFFF", borderRadius: 20, border: "1px solid #E0DEDA",
              boxShadow: "0 4px 24px rgba(0,2,8,0.04)", padding: "48px 32px",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20,
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(40,96,178,0.08), rgba(40,96,178,0.16))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={38} color="#2860B2" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading" style={{ fontSize: 36, fontWeight: 700, color: "#1A447C", margin: 0, lineHeight: 1.2 }}>
                {m.title}
              </h2>
              <p style={{ fontSize: 20, color: "#6C6967", margin: 0, lineHeight: 1.4 }}>
                {m.line}
              </p>
            </div>
          );
        })}
      </motion.main>

      {/* Spectrum bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
        style={{ padding: "0 100px 16px", flexShrink: 0 }}
      >
        <div style={{
          display: "flex", alignItems: "center",
          height: 48, borderRadius: 24,
          background: "linear-gradient(90deg, #1A447C 0%, #2860B2 100%)",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Left side */}
          <div style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            paddingLeft: 16,
          }}>
            <span style={{ fontSize: 18, color: "rgba(255,255,255,0.5)" }}>←</span>
            <span style={{
              fontSize: 13, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.1em",
              textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif",
            }}>
              More Human
            </span>
          </div>

          {/* Center divider */}
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />

          {/* Right side */}
          <div style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            paddingRight: 16,
          }}>
            <span style={{
              fontSize: 13, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.1em",
              textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif",
            }}>
              More AI
            </span>
            <span style={{ fontSize: 18, color: "rgba(255,255,255,0.5)" }}>→</span>
          </div>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
