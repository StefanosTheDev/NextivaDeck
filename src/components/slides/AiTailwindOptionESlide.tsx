"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const pills = [
  "Embedded everywhere",
  "XBert + NEXT",
  "50%+ CAGR",
  "Data moat",
];

export default function AiTailwindOptionESlide({ slideNumber = 54 }: { slideNumber?: number }) {
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
        style={{ padding: "48px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>
          AI TAILWIND — OPTION E
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI is the tailwind — not the thesis.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Hero stat + supporting pills.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 80px", gap: 32 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            padding: "48px 80px",
            background: "rgba(40,96,178,0.15)", border: "2px solid rgba(40,96,178,0.3)",
            borderRadius: 24, textAlign: "center",
          }}
        >
          <p className="font-heading" style={{ fontSize: 96, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
            22% → 31%+
          </p>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.6)", margin: "12px 0 0" }}>
            AI bookings as % of total
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}
        >
          {pills.map((p, i) => (
            <span
              key={p}
              style={{
                padding: "12px 24px",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 24, fontSize: 16, fontWeight: 600, color: "#FFFFFF",
              }}
            >
              {p}
            </span>
          ))}
        </motion.div>

        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", margin: 0 }}>
          New revenue, not cannibalization
        </p>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
