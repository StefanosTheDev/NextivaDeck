"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const cards = [
  {
    stat: "18M",
    label: "Contact center agents globally",
    detail:
      "Most in centers under 30 agents — too small for enterprise platforms",
    highlight: false,
  },
  {
    stat: "Millions",
    label: "SMB & mid-market businesses",
    detail:
      "Operate today with limited to no CX automation whatsoever",
    highlight: false,
  },
  {
    stat: "5–7M",
    label: "Agent workloads replaceable by AI",
    detail: "30–40% interaction shift over next decade",
    highlight: false,
  },
];

export default function BlueOcean2Slide({ slideNumber = 13 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
        >
          The Massive Middle Is Untouched
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", margin: "14px 0 0", lineHeight: 1.5 }}>
          Enterprise CX platforms target large companies. Millions of growing businesses are left behind.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", gap: 32, padding: "0 100px", alignItems: "center" }}
      >
        {cards.map((c, i) => (
          <motion.div
            key={c.stat}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
            style={{
              flex: 1,
              background: c.highlight
                ? "rgba(40,96,178,0.15)"
                : "rgba(255,255,255,0.04)",
              border: c.highlight
                ? "1px solid rgba(40,96,178,0.45)"
                : "1px solid rgba(255,255,255,0.08)",
              borderLeft: c.highlight
                ? "4px solid #3B82F6"
                : "4px solid #2860B2",
              borderRadius: 14,
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              boxShadow: c.highlight
                ? "0 0 40px rgba(59,130,246,0.15)"
                : "none",
            }}
          >
            <p
              className="font-heading"
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: c.highlight ? "#3B82F6" : "#FFFFFF",
                margin: 0,
                lineHeight: 1,
              }}
            >
              {c.stat}
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: c.highlight
                  ? "rgba(255,255,255,0.9)"
                  : "rgba(255,255,255,0.75)",
                margin: "18px 0 0",
                lineHeight: 1.3,
              }}
            >
              {c.label}
            </p>
            <p
              style={{
                fontSize: 16,
                color: c.highlight
                  ? "rgba(255,255,255,0.55)"
                  : "rgba(255,255,255,0.4)",
                margin: "10px 0 0",
                lineHeight: 1.5,
              }}
            >
              {c.detail}
            </p>
          </motion.div>
        ))}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "0 100px 12px", flexShrink: 0 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 32px",
            borderRadius: 14,
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: 0, textAlign: "center" }}>
            Blue ocean opportunity: an enormous underserved segment ready for Agentic CX — and no one is serving it.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
