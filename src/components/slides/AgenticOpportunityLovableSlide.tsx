"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const CORAL = "#F0A88C";

const statCards = [
  { number: "18M", label: "Contact center agents globally", sub: "~3M in the U.S. alone" },
  { number: "85%", label: "Routine inquiries automatable", sub: "Tier-1 service, scheduling, payments" },
  { number: "5–7M", label: "Agent workloads replaceable by AI", sub: "30–40% interaction shift over next decade" },
];

const todayItems = [
  "17–18M contact center agents globally",
  "~3M agents in the United States",
  "Majority of contact centers are small (most <30 agents)",
  "Millions of SMB and mid-market businesses still operate with limited or no automation",
];

const futureItems = [
  "The Massive Middle of CX Is Underserved",
  "Most CX platforms are built for enterprises",
  "Millions of growing businesses are left behind",
  "Solutions are expensive and complex to deploy",
];

const platformPillars = [
  "Unified Customer Interactions",
  "Unified Customer Data",
  "Agentic & Human in Tandem",
  "Go-to-Market Moat",
  "Product Led Motion",
];

export default function AgenticOpportunityLovableSlide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle coral glow */}
      <div style={{
        position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)",
        width: 1400, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,168,140,0.07) 0%, transparent 70%)",
      }} />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "56px 120px 0", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <p style={{
          fontWeight: 700, fontSize: 16, letterSpacing: "0.2em",
          textTransform: "uppercase", color: CORAL, margin: 0,
        }}>
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1 className="font-heading" style={{
          fontSize: 52, fontWeight: 600,
          color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.1, maxWidth: 1500,
        }}>
          The next workforce is Agentic
        </h1>
        <p style={{
          fontSize: 24, color: "rgba(255,255,255,0.5)", margin: "12px 0 0", lineHeight: 1.4,
        }}>
          Millions of contact center interactions will be handled by AI employees — not tools.
        </p>
      </motion.header>

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          flex: 1, padding: "36px 120px 0", position: "relative", zIndex: 1,
          display: "flex", flexDirection: "column", gap: 28,
        }}
      >
        {/* Stat cards row - coral numbers */}
        <div style={{ display: "flex", gap: 24 }}>
          {statCards.map((s) => (
            <div key={s.number} style={{
              flex: 1,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16, padding: "32px 36px",
            }}>
              <p className="font-heading" style={{
                fontSize: 56, fontWeight: 700, color: CORAL,
                margin: 0, lineHeight: 1,
              }}>
                {s.number}
              </p>
              <p style={{
                fontSize: 22, fontWeight: 600, color: "#FFFFFF",
                margin: "10px 0 4px", lineHeight: 1.25,
              }}>
                {s.label}
              </p>
              <p style={{
                fontSize: 17, color: "rgba(255,255,255,0.45)",
                margin: 0, lineHeight: 1.3,
              }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Three-box row with coral-accented side cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, flex: 1 }}>
          {/* Market Context - coral gradient */}
          <div style={{
            flex: 1,
            background: "linear-gradient(135deg, rgba(240,168,140,0.15) 0%, rgba(240,168,140,0.05) 100%)",
            border: "2px solid rgba(240,168,140,0.35)",
            borderRadius: 16, padding: "28px 32px",
            display: "flex", flexDirection: "column",
          }}>
            <p style={{
              fontSize: 14, fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", color: CORAL, margin: "0 0 4px",
            }}>MARKET CONTEXT</p>
            <p style={{
              fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px",
            }}>The Agentic AI Opportunity in Customer Service</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {todayItems.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 18, marginTop: 2 }}>●</span>
                  <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.4 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Landscape - coral gradient */}
          <div style={{
            flex: 1,
            background: "linear-gradient(135deg, rgba(240,168,140,0.15) 0%, rgba(240,168,140,0.05) 100%)",
            border: "2px solid rgba(240,168,140,0.35)",
            borderRadius: 16, padding: "28px 32px",
            display: "flex", flexDirection: "column",
          }}>
            <p style={{
              fontSize: 14, fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", color: CORAL, margin: "0 0 4px",
            }}>COMPETITIVE LANDSCAPE</p>
            <p style={{
              fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px",
            }}>The Massive Middle of CX Is Underserved</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {futureItems.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 18, marginTop: 2 }}>●</span>
                  <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.4 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Nextiva Wins - numbered pillars */}
          <div style={{
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, padding: "28px 28px",
            display: "flex", flexDirection: "column",
          }}>
            <p style={{
              fontSize: 14, fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", color: CORAL, margin: "0 0 4px",
            }}>WHY NEXTIVA WINS</p>
            <p style={{
              fontSize: 20, fontWeight: 700, color: "#FFFFFF", margin: "0 0 20px", lineHeight: 1.3,
            }}>The complete Agentic CX platform</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, justifyContent: "center" }}>
              {platformPillars.map((p, i) => (
                <div key={p} style={{
                  background: "rgba(240,168,140,0.08)",
                  border: "1px solid rgba(240,168,140,0.18)",
                  borderRadius: 10, padding: "12px 16px",
                  display: "flex", alignItems: "center", gap: 12,
                }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: "50%",
                    background: CORAL, color: "#0A1628",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 800, flexShrink: 0,
                  }}>{i + 1}</span>
                  <p style={{ fontSize: 17, fontWeight: 600, color: "#FFFFFF", margin: 0 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
