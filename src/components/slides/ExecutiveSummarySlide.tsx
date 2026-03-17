"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const bullets = [
  "Positioned to benefit from and lead in the AI-driven transformation, with AI acting as a structural tailwind to growth.",
  "A highly predictable, recurring revenue model with strong contractual commitments, delivering current profitability and a clear path to expanding margins.",
  "Third point to come.",
];

export default function ExecutiveSummarySlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Executive Summary
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "32px 100px", display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}
      >
        {bullets.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "28px 36px",
              display: "flex",
              alignItems: "flex-start",
              gap: 20,
            }}
          >
            <span style={{ color: "#2860B2", fontSize: 28, lineHeight: 1.4, flexShrink: 0 }}>•</span>
            <p style={{ fontSize: 26, fontWeight: 600, color: "rgba(255,255,255,0.95)", lineHeight: 1.35, margin: 0 }}>
              {text}
            </p>
          </motion.div>
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
