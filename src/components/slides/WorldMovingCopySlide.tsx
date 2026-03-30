"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ArrowRight, Phone, MessageCircle, Bot } from "lucide-react";

const eras = [
  {
    icon: Phone,
    era: "YESTERDAY",
    title: "Transactional",
    subtitle: "One-way notifications",
    points: [
      "Fragmented tools across channels",
      "Reactive, ticket-based workflows",
      "No shared context between interactions",
    ],
    borderColor: "rgba(255,255,255,0.15)",
    iconBg: "rgba(255,255,255,0.06)",
  },
  {
    icon: MessageCircle,
    era: "TODAY",
    title: "Conversational",
    subtitle: "Two-way engagement",
    points: [
      "Unified platform across voice & digital",
      "Personalized conversations, all channels",
      "Front and back office converging",
    ],
    borderColor: "rgba(40,96,178,0.4)",
    iconBg: "rgba(40,96,178,0.12)",
  },
  {
    icon: Bot,
    era: "TOMORROW",
    title: "Agentic",
    subtitle: "Autonomous outcomes",
    points: [
      "AI agents + humans in tandem",
      "Real-time resolution at scale",
      "Every interaction drives measurable value",
    ],
    borderColor: "#2860B2",
    iconBg: "rgba(40,96,178,0.18)",
    highlight: true,
  },
];

export default function WorldMovingCopySlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          THE SHIFT
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          CX is now real-time, AI-driven,
          <br />
          and outcome-based.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "16px 0 0", lineHeight: 1.5 }}>
          The industry is shifting from reactive tools to autonomous, agentic experiences.
        </p>
      </motion.header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", padding: "32px 100px", marginTop: -40 }}>
        <div style={{ display: "flex", gap: 0, width: "100%", alignItems: "stretch" }}>
          {eras.map((era, i) => {
            const Icon = era.icon;
            return (
              <div key={era.era} style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0 }}>
                <motion.article
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  style={{
                    flex: 1,
                    background: era.highlight ? "rgba(40,96,178,0.08)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${era.borderColor}`,
                    borderTop: `3px solid ${era.borderColor}`,
                    borderRadius: 16,
                    padding: "40px 36px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: "50%",
                      background: era.iconBg,
                      border: `1.5px solid ${era.borderColor}`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={24} color={era.highlight ? "#7EB3E8" : "#CCC7C3"} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
                        {era.era}
                      </p>
                      <p className="font-heading" style={{ fontSize: 30, fontWeight: 500, color: "#FFFFFF", margin: "2px 0 0", lineHeight: 1.2 }}>
                        {era.title}
                      </p>
                    </div>
                  </div>

                  <p style={{
                    fontSize: 18, fontWeight: 600,
                    color: era.highlight ? "#7EB3E8" : "rgba(255,255,255,0.6)",
                    margin: "0 0 20px", lineHeight: 1.4,
                  }}>
                    {era.subtitle}
                  </p>

                  <div style={{ width: 40, height: 2, background: era.highlight ? "#2860B2" : "rgba(255,255,255,0.12)", borderRadius: 1, marginBottom: 22 }} />

                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {era.points.map((p) => (
                      <li key={p} style={{
                        fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.55,
                        marginBottom: 12, paddingLeft: 18, position: "relative",
                      }}>
                        <span style={{ position: "absolute", left: 0, color: era.highlight ? "#2860B2" : "rgba(255,255,255,0.25)" }}>&rsaquo;</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.article>

                {i < eras.length - 1 && (
                  <div style={{ flexShrink: 0, padding: "0 12px" }}>
                    <ArrowRight size={22} color="rgba(255,255,255,0.25)" strokeWidth={2} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
