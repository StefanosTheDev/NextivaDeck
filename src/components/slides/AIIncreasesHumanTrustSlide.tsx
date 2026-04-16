"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const points = [
  "AI is becoming mission-critical infrastructure",
  "Buyers want confidence before adopting AI into core workflows",
  "Pure self-serve AI motions will struggle with less sophisticated buyers",
  "Human guidance will remain a competitive differentiator for years",
  "Nextiva is positioned to combine AI, communications, and trusted advisory support",
];

export default function AIIncreasesHumanTrustSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          AI & trust
        </p>
        <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15, maxWidth: 980, marginLeft: "auto", marginRight: "auto" }}>
          The rise of AI strengthens the hybrid sales advantage
        </h1>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.55)", margin: "14px auto 0", maxWidth: 880, lineHeight: 1.5 }}>
          As AI becomes more important to business operations, customers will require even greater trust, reassurance, and support.
        </p>
      </motion.header>

      <main style={{ flex: 1, padding: "24px 72px 36px", minHeight: 0, display: "flex", alignItems: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            width: "100%",
            borderRadius: 16,
            padding: "26px 36px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid #0070F3",
          }}
        >
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 48px" }}>
            {points.map((t) => (
              <li
                key={t}
                style={{
                  fontSize: 18,
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
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
