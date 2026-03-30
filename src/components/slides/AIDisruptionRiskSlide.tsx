"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ShieldCheck, ArrowRight, Check } from "lucide-react";

const ACCENT = "#7EB3E8";

const leftItems = [
  "Generalist Knowledge",
  "Simple, or Low-Stakes Workflows",
  "Point Solutions or Standalone Tools",
  "Higher Tolerance for Mistakes",
  "Low Cost of Failure",
  "Light Regulatory Oversight",
  "Commoditized or Publicly Available Data",
];

const rightItems = [
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "36px 80px 0", flexShrink: 0, textAlign: "center", position: "relative" }}
      >
        <img
          src="/logos/THOMABRAVO.png"
          alt="Thoma Bravo"
          style={{ position: "absolute", top: 36, right: 80, height: 34, opacity: 0.5 }}
        />
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          DEFENSIBILITY
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}
        >
          AI disruption risk is not uniform across software.
        </h1>
      </motion.header>

      {/* ─── ARROW SPECTRUM BAR ─── */}
      <div style={{ padding: "48px 80px 0" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none" style={{ flexShrink: 0 }}>
            <polygon points="22,0 22,34 0,17" fill="rgba(255,255,255,0.15)" />
          </svg>
          <div style={{ background: "rgba(255,255,255,0.08)", padding: "7px 24px" }}>
            <span style={{ fontSize: 20, fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>More at Risk</span>
          </div>
          <div style={{ flex: 1, height: 2, background: "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03), rgba(0,112,243,0.35))" }} />
          <div style={{ background: `${ACCENT}20`, padding: "7px 24px" }}>
            <span style={{ fontSize: 20, fontWeight: 800, color: ACCENT, letterSpacing: "0.05em" }}>More Insulated</span>
          </div>
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none" style={{ flexShrink: 0 }}>
            <polygon points="0,0 0,34 22,17" fill={ACCENT} fillOpacity={0.45} />
          </svg>
        </div>
      </div>

      {/* ─── COLUMN HEADERS ─── */}
      <div style={{ padding: "48px 80px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <p
          className="font-heading"
          style={{
            fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.45)",
            margin: 0, textAlign: "center", textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Fast, Forgiving, Low-Stakes Environments
        </p>
        <p
          className="font-heading"
          style={{
            fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.85)",
            margin: 0, textAlign: "center", textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          High-Stakes, Complex, Regulated Systems
        </p>
      </div>

      {/* ─── TWO-COLUMN ITEMS ─── */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          padding: "24px 80px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          flexShrink: 0,
        }}
      >
        {/* LEFT COLUMN — individual boxes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {leftItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "14px 24px",
                display: "flex", alignItems: "center", justifyContent: "flex-start",
              }}
            >
              <span style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", textAlign: "left", fontWeight: 500 }}>{item}</span>
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN — individual boxes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {rightItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              style={{
                background: `rgba(0,112,243,0.07)`,
                border: `1px solid rgba(0,112,243,0.18)`,
                borderRadius: 10,
                padding: "14px 24px",
                display: "flex", alignItems: "center", justifyContent: "flex-start",
                position: "relative" as const,
              }}
            >
              <span style={{ fontSize: 18, color: "#FFFFFF", textAlign: "left", fontWeight: 600 }}>{item}</span>
              <Check size={20} color="#2E7D32" strokeWidth={3} style={{ position: "absolute", right: 20, flexShrink: 0 }} />
            </motion.div>
          ))}
        </div>
      </motion.main>

      {/* ─── NEXTIVA BADGE — centered as one unit under right column ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{
          padding: "32px 80px 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        <div style={{ gridColumn: "2", display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 20, flexWrap: "nowrap", transform: "translateX(42px)" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 14,
              background: `linear-gradient(135deg, ${ACCENT}18, ${ACCENT}08)`,
              border: `1px solid ${ACCENT}40`,
              borderRadius: 14, padding: "14px 32px",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/nextiva-logo-white.svg"
                alt="Nextiva"
                style={{ height: 28, opacity: 1 }}
              />
              <div style={{ width: 1, height: 24, background: `${ACCENT}40` }} />
              <span className="font-heading" style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.04em" }}>IS HERE</span>
              <Check size={20} color="#2E7D32" strokeWidth={3} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
              <span style={{ fontSize: 20, color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>See why</span>
              <ArrowRight size={20} color="rgba(255,255,255,0.35)" strokeWidth={2} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* spacer pushes footer to bottom */}
      <div style={{ flex: 1 }} />

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
