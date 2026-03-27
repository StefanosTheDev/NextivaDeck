"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ShieldCheck } from "lucide-react";

const ACCENT = "#0070F3";
const RED_BG = "rgba(220,80,60,0.18)";
const RED_BORDER = "rgba(220,80,60,0.35)";
const RED_TEXT = "#E8624D";
const GREEN_BG = "rgba(34,170,80,0.18)";
const GREEN_BORDER = "rgba(34,170,80,0.35)";
const GREEN_TEXT = "#2ECC71";

const atRiskRows = [
  "Generalist Knowledge",
  "Simple, or Low-Stakes Workflows",
  "Point Solutions or Standalone Tools",
  "Higher Tolerance for Mistakes",
  "Low Cost of Failure",
  "Light Regulatory Oversight",
  "Commoditized or Publicly Available Data",
];

const insulatedRows = [
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
        background: "radial-gradient(ellipse 90% 80% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        overflow: "hidden",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "44px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 10px" }}>
          AI DISRUPTION RISK
        </p>
        <h1 className="font-heading" style={{ fontSize: 44, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI Disruption Risk Is Not Uniform Across Software
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "24px 80px 0", display: "flex", flexDirection: "column" }}
      >
        {/* Arrow bar — styled like the original with arrow shapes */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 20, position: "relative" }}>
          {/* Left arrow */}
          <div style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", height: 48,
          }}>
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, right: 0,
              background: "linear-gradient(90deg, rgba(220,80,60,0.25) 0%, rgba(220,80,60,0.08) 100%)",
              borderRadius: "24px 4px 4px 24px",
              border: `1px solid ${RED_BORDER}`,
            }} />
            <svg width="20" height="20" viewBox="0 0 20 20" style={{ position: "absolute", left: 12 }}>
              <path d="M14 3L6 10L14 17" stroke={RED_TEXT} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: 18, fontWeight: 800, color: RED_TEXT, position: "relative", zIndex: 1 }}>
              More at Risk
            </span>
          </div>

          <div style={{ width: 40 }} />

          {/* Right arrow */}
          <div style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", height: 48,
          }}>
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, right: 0,
              background: "linear-gradient(90deg, rgba(34,170,80,0.08) 0%, rgba(34,170,80,0.25) 100%)",
              borderRadius: "4px 24px 24px 4px",
              border: `1px solid ${GREEN_BORDER}`,
            }} />
            <span style={{ fontSize: 18, fontWeight: 800, color: GREEN_TEXT, position: "relative", zIndex: 1 }}>
              More Insulated
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" style={{ position: "absolute", right: 12 }}>
              <path d="M6 3L14 10L6 17" stroke={GREEN_TEXT} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Column sub-headers */}
        <div style={{ display: "flex", gap: 40, marginBottom: 10 }}>
          <p style={{ flex: 1, fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: 0, textAlign: "center" }}>
            Fast, Forgiving, Low-Stakes Environments
          </p>
          <p style={{ flex: 1, fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: 0, textAlign: "center" }}>
            High-Stakes, Complex, Regulated Systems
          </p>
        </div>

        {/* Comparison rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {atRiskRows.map((left, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
              style={{ display: "flex", gap: 40 }}
            >
              <div style={{
                flex: 1, background: RED_BG, border: `1px solid ${RED_BORDER}`,
                borderRadius: 6, padding: "12px 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 15, color: RED_TEXT, textAlign: "center", fontWeight: 600 }}>{left}</span>
              </div>
              <div style={{
                flex: 1, background: GREEN_BG, border: `1px solid ${GREEN_BORDER}`,
                borderRadius: 6, padding: "12px 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 15, color: GREEN_TEXT, textAlign: "center", fontWeight: 700 }}>{insulatedRows[i]}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nextiva indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 14, paddingRight: 20 }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(0,112,243,0.15)", border: "1px solid rgba(0,112,243,0.35)",
            borderRadius: 10, padding: "10px 24px",
          }}>
            <ShieldCheck size={20} color={ACCENT} strokeWidth={2} />
            <span className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: ACCENT }}>NEXTIVA IS HERE</span>
          </div>
        </motion.div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
