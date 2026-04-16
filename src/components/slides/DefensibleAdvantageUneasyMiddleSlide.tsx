"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const points = [
  "Ability to generate leads at scale",
  "Ability to respond immediately and frame the conversation",
  "Lower-cost operating model",
  "Deep expertise in mission-critical categories",
  "Strong LTV/CAC and payback economics",
];

export default function DefensibleAdvantageUneasyMiddleSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: BG, overflow: "hidden" }}>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "40px 72px 8px", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 12px",
          }}
        >
          Competitive advantage
        </p>
        <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15, maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}>
          Very few companies can profitably operate in this segment
        </h1>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.55)", margin: "14px auto 0", maxWidth: 900, lineHeight: 1.5 }}>
          Serving the uneasy middle requires a combination of operating discipline, efficient lead generation, rapid engagement, and low-cost delivery. Most competitors lack this combination.
        </p>
      </motion.header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, padding: "20px 72px 28px", minHeight: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            borderRadius: 16,
            padding: "22px 32px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid #2860B2",
            flex: "1 1 auto",
          }}
        >
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 36px" }}>
            {points.map((t) => (
              <li
                key={t}
                style={{
                  fontSize: 17,
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.45,
                  paddingLeft: 18,
                  position: "relative",
                }}
              >
                <span style={{ position: "absolute", left: 0, top: 2, color: "#7EB3E8", fontWeight: 700 }}>&rsaquo;</span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            borderRadius: 14,
            padding: "18px 28px",
            textAlign: "center",
            background: "rgba(0, 112, 243, 0.12)",
            border: "1px solid rgba(0, 112, 243, 0.35)",
            flexShrink: 0,
          }}
        >
          <p className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.35 }}>
            The Southwest Airlines model for mission-critical software and AI
          </p>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
