"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ArrowRight } from "lucide-react";

interface Era {
  label: string;
  title: string;
  items: string[];
  accent: boolean;
}

const eras: Era[] = [
  {
    label: "Yesterday",
    title: "Fragmented and reactive",
    items: [
      "Fragmented tools",
      "Reactive workflows",
      "Transactional interactions",
    ],
    accent: false,
  },
  {
    label: "Today",
    title: "Connected and unified",
    items: [
      "Unified platforms",
      "Conversational engagement",
      "Data-informed decisions",
    ],
    accent: false,
  },
  {
    label: "Next",
    title: "Agentic and autonomous",
    items: [
      "AI agents + humans working together",
      "Autonomous resolution",
      "Every interaction drives real-time outcomes",
    ],
    accent: true,
  },
];

export default function TheShiftSlide({ slideNumber = 8 }: { slideNumber?: number }) {
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
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          THE SHIFT
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
          }}
        >
          Customer experience is becoming real-time,
          <br />
          AI-driven, and outcome-based
        </h1>
      </motion.header>

      <main style={{ flex: 1, padding: "28px 80px 0", display: "flex", gap: 20, alignItems: "stretch" }}>
        {eras.map((era, i) => (
          <div key={era.label} style={{ display: "flex", alignItems: "center", flex: "1 1 0", minWidth: 0, gap: 12 }}>
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: era.accent ? "3px solid #2860B2" : "3px solid rgba(255,255,255,0.15)",
                borderRadius: 16,
                padding: "36px 36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#CCC7C3",
                  marginBottom: 10,
                }}
              >
                {era.label}
              </span>
              <h2
                className="font-heading"
                style={{
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#FFFFFF",
                  margin: "0 0 18px",
                  lineHeight: 1.2,
                }}
              >
                {era.title}
              </h2>
              <div style={{ width: 36, height: 2, background: era.accent ? "#2860B2" : "rgba(255,255,255,0.15)", borderRadius: 1, marginBottom: 22 }} />
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {era.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 19,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.55,
                      marginBottom: 10,
                      paddingLeft: 16,
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.3)" }}>&rsaquo;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
            {i < eras.length - 1 ? (
              <ArrowRight size={24} color="rgba(255,255,255,0.3)" strokeWidth={2} style={{ flexShrink: 0 }} />
            ) : (
              <div style={{ width: 24, flexShrink: 0 }} aria-hidden />
            )}
          </div>
        ))}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
