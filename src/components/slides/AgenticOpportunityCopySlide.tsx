"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const topCards = [
  { stat: "25M", label: "under 25 million customer-facing businesses" },
  { stat: "18M", label: "contact center seats" },
  { stat: "7M", label: "businesses doing CX without calling it a contact center" },
];

const competitiveBullets = [
  "The Massive Middle of CX is underserved",
  "Most CX platforms are built for enterprises",
  "Millions of growing businesses are left behind",
  "Solutions are expensive and complex to deploy",
];

const whyNextiva = [
  "Unified Customer Interactions",
  "Unified Customer Data",
  "Agentic & Human in Tandem",
  "Go-to-Market Moat",
  "Product Led Motion",
];

export default function AgenticOpportunityCopySlide({ slideNumber = 12 }: { slideNumber?: number }) {
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
          Tomorrow&apos;s Agentic Workforce.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          30 to 50% of interactions expected to be automated within five years.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        style={{ flex: 1, padding: "12px 80px 0", display: "flex", flexDirection: "column", minHeight: 0 }}
      >
        {/* Three detail cards - moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: "flex", gap: 16, marginTop: 24, flexShrink: 0, alignItems: "stretch" }}
        >
          {/* Market Context */}
          <div style={{
            flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14, padding: "20px 20px", minHeight: 0,
          }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
              MARKET CONTEXT
            </p>
            <h3 className="font-heading" style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "0 0 12px", lineHeight: 1.25 }}>
              Enterprise Contact Centers Market
            </h3>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.4 }}>
              Fierce battle amongst incumbents to address one-third of available contact center seats and less than 10% of global contact centers.
            </p>
          </div>

          {/* Competitive Landscape */}
          <div style={{
            flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14, padding: "20px 20px", minHeight: 0,
          }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
              COMPETITIVE LANDSCAPE
            </p>
            <h3 className="font-heading" style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "0 0 12px", lineHeight: 1.25 }}>
              The Massive Middle Is Underserved
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {competitiveBullets.map((b) => (
                <li key={b} style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.45, marginBottom: 4, paddingLeft: 12, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.3)" }}>•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Nextiva Wins */}
          <div style={{
            flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14, padding: "20px 20px", minHeight: 0,
          }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
              WHY NEXTIVA WINS
            </p>
            <h3 className="font-heading" style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "0 0 12px", lineHeight: 1.25 }}>
              The complete Agentic CX platform
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto auto", gap: 8, flex: 1, minHeight: 0, alignContent: "start" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)", borderRadius: 8, padding: "6px 10px" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#FFFFFF", flexShrink: 0 }}>1</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#FFFFFF" }}>{whyNextiva[0]}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)", borderRadius: 8, padding: "6px 10px" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#FFFFFF", flexShrink: 0 }}>4</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#FFFFFF" }}>{whyNextiva[3]}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)", borderRadius: 8, padding: "6px 10px" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#FFFFFF", flexShrink: 0 }}>2</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#FFFFFF" }}>{whyNextiva[1]}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)", borderRadius: 8, padding: "6px 10px" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#FFFFFF", flexShrink: 0 }}>5</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#FFFFFF" }}>{whyNextiva[4]}</span>
              </div>
              <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 8, background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)", borderRadius: 8, padding: "6px 10px" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#FFFFFF", flexShrink: 0 }}>3</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#FFFFFF" }}>{whyNextiva[2]}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stat cards (25M = 18M + 7M) */}
        <div style={{
          width: "100%",
          flexShrink: 0,
          marginTop: 20,
          paddingBottom: 6,
        }}>
          <div style={{
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            gap: 0,
          }}>
            {topCards.map((card, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.05 }}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {i === 0 ? (
                    <p className="font-heading" style={{
                      fontSize: 16, fontWeight: 700, color: "#F0A88C", margin: "0 0 10px", lineHeight: 1.2,
                      letterSpacing: "0.04em", textTransform: "uppercase", textShadow: "0 0 20px rgba(240,168,140,0.4)",
                      textAlign: "center",
                    }}>
                      Large market opportunity
                    </p>
                  ) : (
                    <div style={{ height: 20, marginBottom: 10 }} />
                  )}
                  <div style={{
                    flex: 1,
                    width: "100%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14,
                    padding: "24px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}>
                    {i === 1 ? (
                      <>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", flex: 1 }}>
                          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <p className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>6M</p>
                            <p style={{ fontSize: 11, fontWeight: 600, color: "#E57373", margin: "6px 0 0", lineHeight: 1.2 }}>&gt;250</p>
                          </div>
                          <span className="font-heading" style={{ flexShrink: 0, fontSize: 44, fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}>+</span>
                          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <p className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>12M</p>
                            <p style={{ fontSize: 11, fontWeight: 600, color: "#FFFFFF", margin: "6px 0 0", lineHeight: 1.2 }}>&lt;250</p>
                          </div>
                        </div>
                        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "12px 0 0", lineHeight: 1.35 }}>
                          {card.label}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1, minHeight: 48 }}>
                          {card.stat}
                        </p>
                        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "12px 0 0", lineHeight: 1.35 }}>
                          {card.label}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
                {i === 0 && (
                  <div style={{
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 56,
                  }}>
                    <span className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}>=</span>
                  </div>
                )}
                {i === 1 && (
                  <div style={{
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 56,
                  }}>
                    <span className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}>+</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
