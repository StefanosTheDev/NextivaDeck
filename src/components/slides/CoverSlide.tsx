"use client";
import { motion } from "framer-motion";

export default function CoverSlide({ slideNumber: _sn }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: `radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.55) 0%, rgba(6,26,55,0.85) 50%, #000208 100%)`,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}
        >
          NEXTIVA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading"
          style={{ fontSize: 88, fontWeight: 500, color: "#FFFFFF", marginTop: 24, lineHeight: 1.15, textAlign: "center", maxWidth: 1540 }}
        >
          Agentic CX Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: 28, fontWeight: 400, color: "rgba(255,255,255,0.6)", margin: "20px 0 0", lineHeight: 1.4 }}
        >
          Turning every customer interaction into real-time outcomes
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ width: 120, height: 1, background: "rgba(255,255,255,0.2)", margin: "32px 0" }}
        />

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ fontSize: 24, fontWeight: 400, color: "rgba(255,255,255,0.5)", margin: 0 }}
        >
          Confidential
        </motion.p>
      </div>
    </div>
  );
}
