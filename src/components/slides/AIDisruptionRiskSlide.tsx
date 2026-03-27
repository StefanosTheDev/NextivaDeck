"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ShieldCheck } from "lucide-react";

const ACCENT = "#0070F3";
const WARM = "#E8956A";
const COOL = "#5BAD78";

const leftRows = [
  "Generalist Knowledge",
  "Simple, or Low-Stakes Workflows",
  "Point Solutions or Standalone Tools",
  "Higher Tolerance for Mistakes",
  "Low Cost of Failure",
  "Light Regulatory Oversight",
  "Commoditized or Publicly Available Data",
];

const rightRows = [
  "Deep, Specialized Domain Expertise",
  "Complex, Critically Important Workflows",
  "Embedded Platforms",
  "No Room for Mistakes",
  "High Cost of Failure",
  "Stringent Regulation & Compliance Requirements",
  "Proprietary Data or Proprietary Know-How",
];

export default function AIDisruptionRiskSlide({ slideNumber = 50 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "#0A0F1C",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "44px 80px 0", flexShrink: 0 }}
      >
        <h1 className="font-heading" style={{ fontSize: 40, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
          AI Disruption Risk Is Not Uniform Across Software
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ flex: 1, padding: "24px 80px 0", display: "flex", flexDirection: "column" }}
      >
        {/* Arrow bar */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 20, position: "relative" }}>
          {/* Left arrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: 0,
          }}>
            <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
              <polygon points="28,0 28,40 0,20" fill={WARM} />
            </svg>
            <div style={{
              background: WARM, padding: "10px 32px", borderRadius: "0 8px 8px 0",
              display: "flex", alignItems: "center",
            }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.02em" }}>More at Risk</span>
            </div>
          </div>

          {/* Center line */}
          <div style={{ flex: 1, height: 3, background: "linear-gradient(90deg, rgba(232,149,106,0.4), rgba(255,255,255,0.08), rgba(91,173,120,0.4))" }} />

          {/* Right arrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: 0,
          }}>
            <div style={{
              background: COOL, padding: "10px 32px", borderRadius: "8px 0 0 8px",
              display: "flex", alignItems: "center",
            }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.02em" }}>More Insulated</span>
            </div>
            <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
              <polygon points="0,0 0,40 28,20" fill={COOL} />
            </svg>
          </div>
        </div>

        {/* Column headers */}
        <div style={{ display: "flex", gap: 24, marginBottom: 8 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.7)", margin: 0, textAlign: "center" }}>
              Fast, Forgiving, Low-Stakes Environments
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.7)", margin: 0, textAlign: "center" }}>
              High-Stakes, Complex, Regulated Systems
            </p>
          </div>
        </div>

        {/* Comparison rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {leftRows.map((left, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              style={{ display: "flex", gap: 24 }}
            >
              <div style={{
                flex: 1,
                background: `${WARM}18`,
                border: `1px solid ${WARM}30`,
                borderRadius: 6,
                padding: "10px 16px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 14, color: WARM, textAlign: "center", fontWeight: 600 }}>{left}</span>
              </div>
              <div style={{
                flex: 1,
                background: `${COOL}18`,
                border: `1px solid ${COOL}30`,
                borderRadius: 6,
                padding: "10px 16px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 14, color: COOL, textAlign: "center", fontWeight: 600 }}>{rightRows[i]}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nextiva badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: 16, gap: 16 }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: `${ACCENT}15`,
            border: `1px solid ${ACCENT}35`,
            borderRadius: 10, padding: "10px 24px",
          }}>
            <ShieldCheck size={20} color={ACCENT} strokeWidth={2} />
            <span className="font-heading" style={{ fontSize: 15, fontWeight: 700, color: ACCENT }}>NEXTIVA IS HERE</span>
          </div>
        </motion.div>
      </motion.main>

      {/* Thoma Bravo attribution */}
      <div style={{ padding: "0 80px 6px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", margin: 0, maxWidth: 600, lineHeight: 1.4 }}>
          For illustrative purposes only. Framework developed by Thoma Bravo. The classifications represent generalizations and do not constitute a guarantee of future performance or insulation from AI-related disruption.
        </p>
        <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", margin: 0, letterSpacing: "0.06em" }}>
          THOMA BRAVO
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
