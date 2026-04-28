"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const quotes = [
  {
    stat: "$41.4B",
    text: "Conversational AI market by 2030",
    subtext: "",
  },
  {
    stat: "44.5%",
    text: "CAGR — Agentic AI in contact centers — the fastest growing segment",
  },
  {
    stat: "80%",
    text: "of customer service issues will be resolved autonomously by AI by 2029",
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
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15 }}>
          The AI + CX convergence is accelerating
        </h1>
      </motion.header>

      <main style={{ flex: 1, padding: "36px 100px 0", display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex", alignItems: "center", gap: 40,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, padding: "32px 48px",
          }}
        >
          <span className="font-heading" style={{
            fontSize: 64, fontWeight: 700, color: "#FFFFFF",
            lineHeight: 1, flexShrink: 0, minWidth: 180, textAlign: "center",
          }}>
            {quotes[0].stat}
          </span>
          <div style={{ width: 1, height: 56, background: "rgba(255,255,255,0.12)", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.45 }}>
              {quotes[0].text}
            </p>
            {quotes[0].subtext && (
              <p style={{ fontSize: 16, color: "#5BA0E0", margin: "8px 0 0", fontWeight: 700, letterSpacing: "0.03em" }}>
                {quotes[0].subtext}
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex", alignItems: "center", gap: 40,
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.25)",
            borderRadius: 16, padding: "32px 48px",
          }}
        >
          <span className="font-heading" style={{
            fontSize: 64, fontWeight: 700, color: "#5BA0E0",
            lineHeight: 1, flexShrink: 0, minWidth: 180, textAlign: "center",
          }}>
            {quotes[1].stat}
          </span>
          <div style={{ width: 1, height: 56, background: "rgba(91,160,224,0.2)", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.45 }}>
              {quotes[1].text}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: "flex", alignItems: "center", gap: 40,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, padding: "32px 48px",
          }}
        >
          <span className="font-heading" style={{
            fontSize: 64, fontWeight: 700, color: "#FFFFFF",
            lineHeight: 1, flexShrink: 0, minWidth: 180, textAlign: "center",
          }}>
            {quotes[2].stat}
          </span>
          <div style={{ width: 1, height: 56, background: "rgba(255,255,255,0.12)", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.45 }}>
              {quotes[2].text}
            </p>
          </div>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
