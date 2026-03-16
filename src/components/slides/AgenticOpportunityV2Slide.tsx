"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const topStats = [
  { stat: "18M", label: "Contact center agents globally", sub: "~3M in the U.S. alone" },
  { stat: "85%", label: "Routine inquiries automatable", sub: "Tier-1 service, scheduling, payments" },
  { stat: "5–7M", label: "Agent workloads replaceable by AI", sub: "30–40% interaction shift over next decade" },
];

const marketBullets = [
  "17–18M contact center agents globally",
  "~3M agents in the United States",
  "Majority of contact centers are small (most <30 agents)",
  "Millions of SMB and mid-market businesses still operate with limited or no automation",
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

export default function AgenticOpportunityV2Slide({ slideNumber = 20 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
      data-speaker-notes="There are 18 million contact center agents globally. Up to 85% of routine inquiries can be automated with agentic AI. This isn't just automation — it's the creation of a new digital workforce. The winners will be platforms like Nextiva that combine AI agents, unified data, communication infrastructure, and workflow automation into a single agentic CX platform."
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 80px 0", flexShrink: 0 }}
      >
        <p className="eyebrow eyebrow--light" style={{ margin: 0 }}>
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15 }}
        >
          The next workforce is Agentic
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Millions of contact center interactions will be handled by AI employees — not tools.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ display: "flex", gap: 16, padding: "24px 80px 0" }}
      >
        {topStats.map((s, i) => (
          <motion.div
            key={s.stat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "3px solid #2860B2",
              borderRadius: 14, padding: "28px 28px",
            }}
          >
            <p className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#CCC7C3", margin: 0, lineHeight: 1 }}>
              {s.stat}
            </p>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", margin: "10px 0 4px", lineHeight: 1.3 }}>
              {s.label}
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", margin: 0 }}>
              {s.sub}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, padding: "16px 80px 0", alignItems: "stretch" }}
      >
        <div className="card card--dark" style={{ borderRadius: 14, padding: "24px 24px", display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
            MARKET CONTEXT
          </p>
          <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.25 }}>
            The Agentic AI Opportunity in Customer Service
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {marketBullets.map((b) => (
              <li key={b} style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginBottom: 8, paddingLeft: 14, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.3)" }}>•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="card card--dark" style={{ borderRadius: 14, padding: "24px 24px", display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
            COMPETITIVE LANDSCAPE
          </p>
          <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.25 }}>
            The Massive Middle Is Underserved
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {competitiveBullets.map((b) => (
              <li key={b} style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginBottom: 8, paddingLeft: 14, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.3)" }}>•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="card card--dark" style={{ borderRadius: 14, padding: "24px 24px", display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
            WHY NEXTIVA WINS
          </p>
          <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.25 }}>
            The complete Agentic CX platform
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, justifyContent: "center" }}>
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

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
