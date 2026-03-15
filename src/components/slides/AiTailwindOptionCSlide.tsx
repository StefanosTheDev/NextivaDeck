"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const rows = [
  { phrase: "Embedded everywhere", stat: "22% AI-attached" },
  { phrase: "New products (XBert, NEXT)", stat: "31%+ by FY28" },
  { phrase: "Conversations = moat", stat: "Additive revenue" },
];

export default function AiTailwindOptionCSlide({ slideNumber = 52 }: { slideNumber?: number }) {
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
          AI TAILWIND — OPTION C
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI is the tailwind — not the thesis.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          AI expands the opportunity.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 100px", gap: 20 }}
      >
        {rows.map((r, i) => (
          <motion.div
            key={r.phrase}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              width: "100%", maxWidth: 800,
              padding: "24px 40px",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              borderLeft: "4px solid #2860B2", borderRadius: 12,
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF" }}>{r.phrase}</span>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#7EB3E8" }}>{r.stat}</span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            padding: "20px 48px", background: "rgba(40,96,178,0.15)", border: "1px solid rgba(40,96,178,0.25)",
            borderRadius: 16, marginTop: 8,
          }}
        >
          <p style={{ fontSize: 32, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
            22% → 31%+
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: "4px 0 0" }}>
            AI bookings as % of total · New revenue, not cannibalization
          </p>
        </motion.div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
