"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ShieldCheck } from "lucide-react";

const ACCENT = "#0070F3";
const WARM = "#D4845C";
const COOL = "#4A9E64";

const rows = [
  { left: "Generalist Knowledge", right: "Deep, Specialized Domain Expertise" },
  { left: "Simple, or Low-Stakes Workflows", right: "Complex, Critically Important Workflows" },
  { left: "Point Solutions or Standalone Tools", right: "Embedded Platforms" },
  { left: "Higher Tolerance for Mistakes", right: "No Room for Mistakes" },
  { left: "Low Cost of Failure", right: "High Cost of Failure" },
  { left: "Light Regulatory Oversight", right: "Stringent Regulation & Compliance Requirements" },
  { left: "Commoditized or Publicly Available Data", right: "Proprietary Data or Proprietary Know-How" },
];

export default function AIDisruptionRiskSlide({ slideNumber = 50 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "#080C18",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 0 0", flexShrink: 0, textAlign: "center" }}
      >
        <h1 className="font-heading" style={{ fontSize: 44, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI Disruption Risk Is Not Uniform Across Software
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1, padding: "28px 120px 0",
          display: "flex", flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Arrow spectrum bar */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none" style={{ flexShrink: 0 }}>
            <polygon points="24,0 24,36 0,18" fill={WARM} />
          </svg>
          <div style={{
            background: WARM, padding: "8px 28px",
            display: "flex", alignItems: "center",
          }}>
            <span style={{ fontSize: 17, fontWeight: 800, color: "#FFFFFF" }}>More at Risk</span>
          </div>
          <div style={{
            flex: 1, height: 4,
            background: "linear-gradient(90deg, #D4845C, #888, #4A9E64)",
          }} />
          <div style={{
            background: COOL, padding: "8px 28px",
            display: "flex", alignItems: "center",
          }}>
            <span style={{ fontSize: 17, fontWeight: 800, color: "#FFFFFF" }}>More Insulated</span>
          </div>
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none" style={{ flexShrink: 0 }}>
            <polygon points="0,0 0,36 24,18" fill={COOL} />
          </svg>
        </div>

        {/* Column headers */}
        <div style={{ display: "flex", gap: 32, marginBottom: 12 }}>
          <p style={{ flex: 1, fontSize: 16, fontWeight: 700, color: "#FFFFFF", margin: 0, textAlign: "center" }}>
            Fast, Forgiving, Low-Stakes Environments
          </p>
          <p style={{ flex: 1, fontSize: 16, fontWeight: 700, color: "#FFFFFF", margin: 0, textAlign: "center" }}>
            High-Stakes, Complex, Regulated Systems
          </p>
        </div>

        {/* Comparison rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              style={{ display: "flex", gap: 32 }}
            >
              <div style={{
                flex: 1,
                background: "rgba(212,132,92,0.12)",
                borderLeft: `3px solid ${WARM}`,
                borderRadius: 4,
                padding: "12px 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 16, color: "#F0C4A8", textAlign: "center", fontWeight: 600 }}>{row.left}</span>
              </div>
              <div style={{
                flex: 1,
                background: "rgba(74,158,100,0.12)",
                borderLeft: `3px solid ${COOL}`,
                borderRadius: 4,
                padding: "12px 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 16, color: "#A8DEBA", textAlign: "center", fontWeight: 700 }}>{row.right}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nextiva badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: `${ACCENT}18`,
            border: `2px solid ${ACCENT}50`,
            borderRadius: 10, padding: "10px 28px",
          }}>
            <ShieldCheck size={22} color={ACCENT} strokeWidth={2} />
            <span className="font-heading" style={{ fontSize: 17, fontWeight: 700, color: ACCENT }}>NEXTIVA IS HERE</span>
          </div>
        </motion.div>
      </motion.main>

      {/* Thoma Bravo attribution */}
      <div style={{ padding: "0 120px 8px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", margin: 0, maxWidth: 580, lineHeight: 1.4 }}>
          For illustrative purposes only. Framework developed by Thoma Bravo. The classifications represent generalizations and do not constitute a guarantee of future performance or insulation from AI-related disruption.
        </p>
        <p style={{ fontSize: 12, fontWeight: 800, color: "rgba(255,255,255,0.35)", margin: 0, letterSpacing: "0.08em" }}>
          THOMA BRAVO
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
