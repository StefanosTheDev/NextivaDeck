"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ShieldCheck } from "lucide-react";

const ACCENT = "#0070F3";
const MUTED = "rgba(255,255,255,0.06)";
const BORDER = "rgba(255,255,255,0.1)";

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
        background: "radial-gradient(ellipse 90% 80% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        overflow: "hidden",
      }}
    >
      {/* Header with arrow bar integrated */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "44px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <h1 className="font-heading" style={{ fontSize: 44, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI Disruption Risk Is Not Uniform Across Software
        </h1>

        {/* Arrow spectrum bar — directly under title */}
        <div style={{ display: "flex", alignItems: "center", marginTop: 24 }}>
          <svg width="22" height="32" viewBox="0 0 22 32" fill="none" style={{ flexShrink: 0 }}>
            <polygon points="22,0 22,32 0,16" fill="rgba(255,255,255,0.15)" />
          </svg>
          <div style={{
            background: "rgba(255,255,255,0.08)", padding: "7px 24px",
            border: `1px solid ${BORDER}`,
            borderRight: "none",
          }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em", textTransform: "uppercase" }}>More at Risk</span>
          </div>
          <div style={{
            flex: 1, height: 1,
            background: "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05), rgba(0,112,243,0.3))",
          }} />
          <div style={{
            background: `${ACCENT}15`, padding: "7px 24px",
            border: `1px solid ${ACCENT}30`,
            borderLeft: "none",
          }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: ACCENT, letterSpacing: "0.04em", textTransform: "uppercase" }}>More Insulated</span>
          </div>
          <svg width="22" height="32" viewBox="0 0 22 32" fill="none" style={{ flexShrink: 0 }}>
            <polygon points="0,0 0,32 22,16" fill={`${ACCENT}40`} />
          </svg>
        </div>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1, padding: "20px 100px 0",
          display: "flex", flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Column headers */}
        <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
          <p style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.4)", margin: 0, textAlign: "center", letterSpacing: "0.02em" }}>
            Fast, Forgiving, Low-Stakes Environments
          </p>
          <p style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.4)", margin: 0, textAlign: "center", letterSpacing: "0.02em" }}>
            High-Stakes, Complex, Regulated Systems
          </p>
        </div>

        {/* Comparison rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              style={{ display: "flex", gap: 20 }}
            >
              <div style={{
                flex: 1,
                background: MUTED,
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                padding: "12px 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", textAlign: "center", fontWeight: 500 }}>{row.left}</span>
              </div>
              <div style={{
                flex: 1,
                background: `${ACCENT}08`,
                border: `1px solid ${ACCENT}20`,
                borderRadius: 8,
                padding: "12px 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", textAlign: "center", fontWeight: 600 }}>{row.right}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nextiva badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: `${ACCENT}12`,
            border: `1px solid ${ACCENT}30`,
            borderRadius: 10, padding: "10px 24px",
          }}>
            <ShieldCheck size={20} color={ACCENT} strokeWidth={2} />
            <span className="font-heading" style={{ fontSize: 15, fontWeight: 700, color: ACCENT }}>NEXTIVA IS HERE</span>
          </div>
        </motion.div>
      </motion.main>

      {/* Thoma Bravo attribution */}
      <div style={{ padding: "0 100px 8px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", margin: 0, maxWidth: 560, lineHeight: 1.4 }}>
          For illustrative purposes only. Framework developed by Thoma Bravo. The classifications represent generalizations and do not constitute a guarantee of future performance or insulation from AI-related disruption.
        </p>
        <p style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,0.25)", margin: 0, letterSpacing: "0.08em" }}>
          THOMA BRAVO
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
