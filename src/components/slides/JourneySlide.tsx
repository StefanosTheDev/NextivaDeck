"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ArrowRight } from "lucide-react";

const chapters = [
  {
    number: "01",
    title: "Cloud Communications at Scale",
    milestone: "$0 → $250M",
    bullets: [
      "Defined and scaled cloud communications for the SMB",
      "Built a market-leading business without external capital",
      "Established a durable operating model anchored in customer trust",
    ],
    badge: "Self-funded. Disciplined. Proven. Operational Investments.",
  },
  {
    number: "02",
    title: "Unified Customer Experience",
    milestone: "$250M → $350M",
    bullets: [
      "Created a single data layer across all customer interactions",
      "Shifted from fragmented tools to system-of-engagement",
      "Positioned the platform at the center of customer operations",
    ],
    badge: "Strategic investment. Platform foundation established.",
  },
  {
    number: "03",
    title: "Agentic AI for Customer Experience",
    milestone: "$350M+",
    bullets: [
      "Positioned at the convergence of AI, CX, and real-time data",
      "Transitioning to autonomous outcomes",
      "Expanding monetization through AI-driven interactions and resolution",
    ],
    badge: "AI-native. Outcome-driven. Scaling efficiently.",
  },
];

export default function JourneySlide({ slideNumber = 7 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
          OUR JOURNEY
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: "0 auto", lineHeight: 1.18 }}>
          Cumulative innovation driving sustained advantage.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>
          We lead through the technology inflection points that matter, while earning customer trust.
        </p>
      </motion.header>

      <main style={{ padding: "28px 90px 0", display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 0, alignItems: "stretch" }}>
        {chapters.map((ch, i) => (
          <React.Fragment key={ch.number}>
            <motion.article
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "3px solid #2860B2",
                borderRadius: 16,
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3" }}>CHAPTER {ch.number}</span>
              </div>
              <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#CCC7C3", margin: "0 0 10px" }}>{ch.milestone}</p>
              <h2 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px", lineHeight: 1.25 }}>
                {ch.title.includes(":") ? ch.title.split(":")[0] : ch.title}
              </h2>
              {ch.title.includes(":") && (
                <p style={{ fontSize: 17, fontWeight: 400, color: "rgba(255,255,255,0.45)", margin: "0 0 14px", lineHeight: 1.3 }}>
                  {ch.title.split(":").slice(1).join(":").trim()}
                </p>
              )}
              <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 14 }} />
              <ul style={{ margin: 0, padding: 0, listStyle: "none", flex: 1 }}>
                {ch.bullets.map((b) => (
                    <li key={b} style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.55, marginBottom: 8, paddingLeft: 14, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.3)" }}>&rsaquo;</span>
                      {b}
                    </li>
                  ))}
              </ul>
              <div
                style={{
                  marginTop: 16,
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  padding: "8px 20px",
                  borderRadius: 8,
                  background: ch.number === "03" ? "#2860B2" : "rgba(255,255,255,0.08)",
                  border: ch.number === "03" ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>{ch.badge}</span>
              </div>
            </motion.article>
            {i < chapters.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 8px" }}>
                <ArrowRight size={24} color="rgba(255,255,255,0.3)" strokeWidth={2} />
              </div>
            )}
          </React.Fragment>
        ))}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
