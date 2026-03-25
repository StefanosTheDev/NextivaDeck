"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ArrowRight } from "lucide-react";
import { MILESTONES } from "../financialData";

const chapters = [
  {
    number: "01",
    dates: "2008–2018",
    title: "Cloud communications",
    milestone: MILESTONES.ch1Revenue,
    bullets: [
      "Built cloud comms from zero — no outside capital.",
      "Won on simplicity, service, and reliability.",
      "Scaled without sacrificing customer-first culture.",
      "",
    ],
    badge: "Self-funded.",
  },
  {
    number: "02",
    dates: "2018–2023",
    title: "Unified customer experience",
    milestone: MILESTONES.ch2Revenue,
    bullets: [
      "One data layer across every conversation.",
      "From tools to platform — single system of record.",
      "Built the foundation AI now runs on.",
      "",
      "",
    ],
    badge: "Investment.",
  },
  {
    number: "03",
    dates: "2023–Future",
    title: "Agentic AI for CX",
    milestone: MILESTONES.ch3Revenue,
    bullets: [
      "XBert: purpose-built Agentic AI.",
      "Native to our infra and data — not bolted on.",
      "Assist → autopilot → full autonomy.",
    ],
    badge: "Balanced growth.",
  },
];

export default function JourneyCopySlide({ slideNumber = 44 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
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

      <main style={{ padding: "88px 90px 0", display: "flex", gap: 16, alignItems: "stretch" }}>
        {chapters.map((ch, i) => (
          <div key={ch.number} style={{ display: "flex", alignItems: "stretch", flex: "1 1 0", minWidth: 0, gap: 12 }}>
            <motion.article
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "3px solid #2860B2",
                borderRadius: 16,
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3" }}>CHAPTER {ch.number}</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>{ch.dates}</span>
              </div>
              <h2 className="font-heading" style={{ fontSize: 30, fontWeight: 500, color: "#FFFFFF", margin: "0 0 14px", lineHeight: 1.2 }}>{ch.title}</h2>
              <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 14 }} />
              <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#CCC7C3", margin: "0 0 14px" }}>{ch.milestone}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", flex: 1 }}>
                {ch.bullets.map((b, idx) =>
                  b === "" ? (
                    <li key={`${ch.number}-spacer-${idx}`} style={{ lineHeight: 1.5, marginBottom: 6, minHeight: 24 }} aria-hidden />
                  ) : (
                    <li key={b} style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 6, paddingLeft: 14, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.3)" }}>&rsaquo;</span>
                      {b}
                    </li>
                  )
                )}
              </ul>
              <div
                style={{
                  marginTop: 14,
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  padding: "7px 18px",
                  borderRadius: 8,
                  background: ch.number === "03" ? "#2860B2" : "rgba(255,255,255,0.08)",
                  border: ch.number === "03" ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>{ch.badge}</span>
              </div>
            </motion.article>
            {i < chapters.length - 1 ? (
              <ArrowRight size={24} color="rgba(255,255,255,0.3)" strokeWidth={2} style={{ flexShrink: 0 }} />
            ) : (
              <div style={{ width: 24, flexShrink: 0 }} aria-hidden />
            )}
          </div>
        ))}
      </main>

      <div style={{ flex: 1 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
