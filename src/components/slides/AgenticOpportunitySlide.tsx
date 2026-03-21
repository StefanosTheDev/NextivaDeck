"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const topCards = [
  { stat: "18M", label: "Contact center seats total" },
  { stat: "18M", label: "contact center seats" },
  { stat: "7M", label: "businesses doing CX without calling it a contact center" },
];

const marketText = "Fierce battle amongst incumbents to address one-third of available contact center seats and less than 10% of global contact centers.";

const marketGaps = [
  "Legacy platforms require large IT teams to deploy",
  "6-figure implementation budgets out of reach",
  "12–18 month deployment cycles",
  "Software not designed for self-service",
];

const competitiveBullets = [
  "Most CX platforms are built for enterprises",
  "Millions of growing businesses are left behind",
  "Solutions are expensive and complex to deploy",
];

const whyNextiva = [
  "Unified Customer Interactions & Data",
  "Agentic & Human in Tandem",
  "Go-to-Market Moat",
  "Product Led Motion",
  "Quick Time to Value",
];

export default function AgenticOpportunitySlide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          The next workforce is Agentic
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Millions of customer interactions will be handled by AI employees — not people.
        </p>
      </motion.header>

      {/* Stat cards (18M = 6M+12M + 7M) - same space as prior 18M/85%/5-7M row */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }}
        style={{ padding: "100px 80px 0", position: "relative" }}
      >
        <div style={{ width: "100%", position: "relative", paddingBottom: 6 }}>
          {/* Nextiva blue ocean - above oval */}
          <p className="font-heading" style={{
            fontSize: 28, fontWeight: 700, color: "#FFFFFF", marginBottom: 16, marginTop: 0,
            textAlign: "center", letterSpacing: "0.02em",
            textShadow: "0 0 24px rgba(255,255,255,0.3)",
            marginLeft: "calc((100% - 112px) / 2 + 64px)",
            width: "calc((100% - 112px) / 2 - 8px)",
          }}>
            Nextiva&apos;s &quot;white space&quot; opportunity
          </p>
          {/* Gold oval */}
          <svg
            style={{
              position: "absolute",
              left: "calc((100% - 112px) / 2 + 64px)",
              top: 52,
              width: "calc((100% - 112px) / 2 - 8px)",
              height: 158,
              pointerEvents: "none",
            }}
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
          >
            <ellipse cx="100" cy="50" rx="97" ry="47" fill="none" stroke="#FFB800" strokeWidth="2.5" />
          </svg>
          <div style={{ display: "flex", alignItems: "stretch", width: "100%", gap: 0 }}>
            {topCards.map((card, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.05 }}
                  style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  {i === 0 ? (
                    <p className="font-heading" style={{
                      fontSize: 16, fontWeight: 700, color: "#7EB8E0", margin: "0 0 10px", lineHeight: 1.2,
                      letterSpacing: "0.04em", textTransform: "uppercase", textShadow: "0 0 20px rgba(126,184,224,0.4)",
                      textAlign: "center",
                    }}>
                      A market primed for disruption
                    </p>
                  ) : (
                    <div style={{ height: 20, marginBottom: 10 }} />
                  )}
                  <div style={{
                    flex: 1, width: "100%",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14, padding: "24px 16px",
                    display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                  }}>
                    {i === 1 ? (
                      <>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", flex: 1 }}>
                          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: 0 }}>
                            <p className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>6M</p>
                            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "6px 0 0", lineHeight: 1.2 }}>greater than 250 agents</p>
                          </div>
                          <span className="font-heading" style={{ flexShrink: 0, fontSize: 48, fontWeight: 700, color: "#FFFFFF", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>+</span>
                          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: 0 }}>
                            <p className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>12M</p>
                            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "6px 0 0", lineHeight: 1.2 }}>less than 250 agents</p>
                          </div>
                        </div>
                        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "12px 0 0", lineHeight: 1.35 }}>{card.label}</p>
                      </>
                    ) : (
                      <>
                        <p className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1, minHeight: 48, fontVariantNumeric: "tabular-nums" }}>{card.stat}</p>
                        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "12px 0 0", lineHeight: 1.35 }}>{card.label}</p>
                      </>
                    )}
                  </div>
                </motion.div>
                {i === 0 && (
                  <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", minWidth: 56 }}>
                    <span className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>=</span>
                  </div>
                )}
                {i === 1 && (
                  <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", minWidth: 56 }}>
                    <span className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>+</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Three detail cards */}
      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
        style={{ display: "flex", gap: 16, padding: "16px 80px 0", alignItems: "stretch" }}
      >
        {/* Market Context */}
        <div style={{
          flex: 1, background: "rgba(180,60,60,0.08)", border: "1px solid rgba(200,80,80,0.2)",
          borderRadius: 14, padding: "24px 24px",
        }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#E07E7E", margin: "0 0 12px" }}>
            Enterprise CX
          </p>
          <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.25 }}>
            The Crowded Space
          </h3>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: "0 0 14px" }}>
            {marketText}
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {marketGaps.map((g) => (
              <li key={g} style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginBottom: 6, paddingLeft: 18, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "#E07E7E", fontWeight: 700 }}>✗</span>
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* The Massive Middle */}
        <div style={{
          flex: 1, background: "rgba(40,96,178,0.08)", border: "1px solid rgba(40,96,178,0.2)",
          borderRadius: 14, padding: "24px 24px",
        }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7EB8E0", margin: "0 0 12px" }}>
            The Massive Middle
          </p>
          <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.25 }}>
            The Underserved Market
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {competitiveBullets.map((b) => (
              <li key={b} style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginBottom: 6, paddingLeft: 14, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "#7EB8E0" }}>•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Why Nextiva Wins */}
        <div style={{
          flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14, padding: "24px 24px",
        }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
            WHY NEXTIVA WINS
          </p>
          <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.25 }}>
            The complete Agentic CX platform
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {whyNextiva.map((item, i) => (
              <div key={item} style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)",
                borderRadius: 10, padding: "10px 16px",
              }}>
                <span style={{
                  width: 24, height: 24, borderRadius: "50%", background: "#2860B2",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, color: "#FFFFFF", flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.main>

      <div style={{ flex: 1 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
