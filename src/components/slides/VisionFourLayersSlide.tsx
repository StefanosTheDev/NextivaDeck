"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Server, Radio, Brain, Layers } from "lucide-react";

const ACCENT = "#7EB3E8";
const ACCENT_STRONG = "#2860B2";

const pillars = [
  {
    num: "01",
    icon: Server,
    title: "Infrastructure",
    desc: "Carrier-grade voice, SMS, video. Compliance, routing, E911, A2P. The pipes AI runs on.",
  },
  {
    num: "02",
    icon: Radio,
    title: "Real-Time Data",
    desc: "Every call, message, interaction captured live. Unstructured + structured, unified at the source.",
  },
  {
    num: "03",
    icon: Brain,
    title: "AI Execution",
    sub: "xBert",
    desc: "Autonomous, autopilot, or assist mode. Moves from insight to action — and resolves outcomes.",
  },
  {
    num: "04",
    icon: Layers,
    title: "Orchestration",
    sub: "NEXT",
    desc: "Manages journeys, routes workflows, coordinates across channels. One unified system.",
  },
];

export default function VisionFourLayersSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          Part 2 — What we own
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Four layers. Built on one platform. Stitched by no one else.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.55)", margin: "16px auto 0", lineHeight: 1.5, maxWidth: 1320 }}>
          Pure agentic startups rent the pipes. Wrappers don&apos;t have data. Incumbents own infrastructure but silo the data. We own all four.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "48px 80px 0",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 22,
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
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `3px solid ${ACCENT_STRONG}`,
                borderRadius: 14,
                padding: "30px 26px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 12,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={24} color={ACCENT} strokeWidth={1.75} />
                </div>
                <span style={{ fontSize: 32, fontWeight: 700, color: "rgba(255,255,255,0.18)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {p.num}
                </span>
              </div>

              <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
                {p.title}
              </h2>
              {p.sub && (
                <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: ACCENT, margin: "6px 0 0" }}>
                  {p.sub}
                </span>
              )}

              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.62)", margin: "16px 0 0", lineHeight: 1.5, flex: 1 }}>
                {p.desc}
              </p>
            </motion.article>
          );
        })}
      </motion.main>

      <div style={{ padding: "32px 100px 16px" }}>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.5)", textAlign: "center", margin: 0, fontStyle: "italic" }}>
          Four layers, built once. None replicable. Together — a platform competitors cannot stitch.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
