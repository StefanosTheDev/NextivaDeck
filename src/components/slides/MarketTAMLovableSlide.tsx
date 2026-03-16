"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const metrics = [
  { value: "$176B", label: "Total CX market (CY26)" },
  { value: "$262B", label: "CY29 target", highlight: true },
];

export default function MarketTAMLovableSlide({ slideNumber = 50 }: { slideNumber?: number }) {
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
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 20, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
          MARKET OPPORTUNITY
        </p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          CX is a large market, growing fast.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px", gap: 0 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "60px 64px",
            display: "flex", flexDirection: "column",
            alignItems: "center", textAlign: "center",
            minWidth: 320,
          }}
        >
          <p className="font-heading" style={{ fontSize: 96, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
            {metrics[0].value}
          </p>
          <p style={{ fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,0.5)", margin: "16px 0 0", lineHeight: 1.4 }}>
            {metrics[0].label}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "0 40px" }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ marginBottom: 4 }}>
            <path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#5BA0E0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-heading" style={{ fontSize: 36, fontWeight: 700, color: "#5BA0E0", margin: 0, lineHeight: 1.2 }}>
            14%
          </p>
          <p className="font-heading" style={{ fontSize: 36, fontWeight: 700, color: "#5BA0E0", margin: 0, lineHeight: 1.2 }}>
            CAGR
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "2px solid rgba(40,96,178,0.4)",
            borderRadius: 20,
            padding: "60px 64px",
            display: "flex", flexDirection: "column",
            alignItems: "center", textAlign: "center",
            minWidth: 320,
          }}
        >
          <p className="font-heading" style={{ fontSize: 96, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
            {metrics[1].value}
          </p>
          <p style={{ fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,0.5)", margin: "16px 0 0", lineHeight: 1.4 }}>
            {metrics[1].label}
          </p>
        </motion.div>
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "0 100px 12px", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.35)", margin: 0, fontStyle: "italic" }}>
          Segment detail available in appendix.
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
