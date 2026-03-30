"use client";
import { motion } from "framer-motion";

export default function ClosingSlide({ slideNumber: _sn }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          NEXTIVA
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading"
          style={{ fontSize: 80, fontWeight: 500, color: "#FFFFFF", marginTop: 24, lineHeight: 1.15 }}>
          Thank you.
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: 36, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <a href="https://www.nextiva.com" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            nextiva.com
          </a>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.25)", margin: 0 }}>949-519-1086</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
          style={{ width: 80, height: 1, background: "rgba(255,255,255,0.15)", marginTop: 44 }} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
          style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 24, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
          <span>Scottsdale, Arizona</span>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "inline-block" }} />
          <span>Confidential</span>
        </motion.div>
      </div>
    </div>
  );
}
