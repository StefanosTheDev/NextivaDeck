"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const quotes = [
  {
    stat: "91%",
    text: "of customer service leaders are under pressure to implement AI in 2026.",
    source: "Gartner, Feb 2026",
  },
  {
    stat: "80%",
    text: "Agentic AI will autonomously resolve 80% of common customer service issues without human intervention by 2029.",
    source: "Gartner, March 2025",
  },
  {
    stat: "70%",
    text: "of customers will use a conversational AI interface to start their service journey by 2028.",
    source: "Gartner, 2025",
  },
];

export default function MarketSlide({ slideNumber = 13 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 25%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 20, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          MARKET VALIDATION
        </p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 400, color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15, whiteSpace: "nowrap" }}>
          The AI + CX convergence is accelerating.
        </h1>
      </motion.header>

      <main style={{ flex: 1, padding: "48px 100px 0", display: "flex", flexDirection: "column", gap: 32, justifyContent: "center" }}>
        {/* Quote 1 — white stat, subtle card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex", alignItems: "center", gap: 40,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, padding: "40px 48px",
          }}
        >
          <span className="font-heading" style={{
            fontSize: 72, fontWeight: 700, color: "#FFFFFF",
            lineHeight: 1, flexShrink: 0, minWidth: 160, textAlign: "center",
          }}>
            {quotes[0].stat}
          </span>
          <div style={{ width: 1, height: 64, background: "rgba(255,255,255,0.12)", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.45 }}>
              {quotes[0].text}
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", margin: "10px 0 0", fontWeight: 600 }}>
              — {quotes[0].source}
            </p>
          </div>
        </motion.div>

        {/* Quote 2 — blue stat, blue-tinted card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex", alignItems: "center", gap: 40,
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.25)",
            borderRadius: 16, padding: "40px 48px",
          }}
        >
          <span className="font-heading" style={{
            fontSize: 72, fontWeight: 700, color: "#5BA0E0",
            lineHeight: 1, flexShrink: 0, minWidth: 160, textAlign: "center",
          }}>
            {quotes[1].stat}
          </span>
          <div style={{ width: 1, height: 64, background: "rgba(91,160,224,0.2)", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.45 }}>
              {quotes[1].text}
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", margin: "10px 0 0", fontWeight: 600 }}>
              — {quotes[1].source}
            </p>
          </div>
        </motion.div>

        {/* Quote 3 — white stat, subtle card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: "flex", alignItems: "center", gap: 40,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, padding: "40px 48px",
          }}
        >
          <span className="font-heading" style={{
            fontSize: 72, fontWeight: 700, color: "#FFFFFF",
            lineHeight: 1, flexShrink: 0, minWidth: 160, textAlign: "center",
          }}>
            {quotes[2].stat}
          </span>
          <div style={{ width: 1, height: 64, background: "rgba(255,255,255,0.12)", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.45 }}>
              {quotes[2].text}
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", margin: "10px 0 0", fontWeight: 600 }}>
              — {quotes[2].source}
            </p>
          </div>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
