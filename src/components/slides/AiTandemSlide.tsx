"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { BrainCog, Plane, Briefcase } from "lucide-react";

const modes = [
  { icon: BrainCog, title: "Agent Assist", line: "AI supports. Humans lead." },
  { icon: Plane, title: "Autopilot", line: "AI drives. Humans oversee." },
  { icon: Briefcase, title: "Autonomous", line: "AI handles end-to-end." },
];

export default function AiTandemSlide({ slideNumber = 11 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", marginBottom: 12 }}>AI FLEXIBILITY & KEY DIFFERENTIATOR</p>
        <h1 className="font-heading" style={{ fontSize: 68, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI and humans in tandem
        </h1>
        <p style={{ fontSize: 24, color: "rgba(255,255,255,0.45)", margin: "14px 0 0", lineHeight: 1.4 }}>
          Full range of agentic experiences, from assist to autonomous.
        </p>
      </motion.header>

      {/* Three cards */}
      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px 0", gap: 32, marginTop: -60 }}
      >
        {modes.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.title} style={{
              flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)",
              padding: "48px 32px",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20,
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: "rgba(40,96,178,0.15)",
                border: "1px solid rgba(40,96,178,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={38} color="#7EB3E8" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading" style={{ fontSize: 36, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
                {m.title}
              </h2>
              <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.4 }}>
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

          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />

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

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
