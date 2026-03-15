"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ArrowRight } from "lucide-react";
import { MILESTONES } from "../financialData";

const chapters = [
  {
    number: "01",
    dates: "2008–2018",
    title: "Cloud communications.",
    milestone: MILESTONES.ch1Revenue,
    bullets: [
      "Introduced cloud-based communications at scale.",
      "Established market leadership — no outside capital.",
      "Won through simplicity, amazing service, and reliability.",
    ],
    badge: "Self-funded.",
  },
  {
    number: "02",
    dates: "2018–2023",
    title: "Unified customer experience.",
    milestone: MILESTONES.ch2Revenue,
    bullets: [
      "Unified data layer across every conversation.",
      "From tools to platform — one system for every interaction.",
      "Platform well-positioned for emerging customer needs.",
    ],
    badge: "Investment.",
  },
  {
    number: "03",
    dates: "2023–Future",
    title: "Agentic AI for CX.",
    milestone: MILESTONES.ch3Revenue,
    bullets: [
      "Platform well-positioned for AI + CX convergence.",
      "AI built for busy operators with lean IT teams.",
      "Sustained efficient business execution at scale.",
    ],
    badge: "Balanced growth.",
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
        style={{ padding: "48px 80px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          OUR JOURNEY
        </p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          Always anticipating the shift.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>
          We guide customers through every shift — that&apos;s why they trust us decade after decade.
        </p>
      </motion.header>

      <main style={{ flex: 1, padding: "32px 80px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 20, alignItems: "stretch" }}>
          {chapters.map((ch, i) => (
            <div key={ch.number} style={{ display: "flex", alignItems: "stretch", flex: 1, gap: 12 }}>
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3" }}>CHAPTER {ch.number}</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>{ch.dates}</span>
                </div>
                <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 500, color: "#FFFFFF", margin: "0 0 8px", lineHeight: 1.2 }}>{ch.title}</h2>
                <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 8 }} />
                <p className="font-heading" style={{ fontSize: 24, fontWeight: 700, color: "#CCC7C3", margin: "0 0 8px" }}>{ch.milestone}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {ch.bullets.map((b) => (
                    <li key={b} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 4, paddingLeft: 14, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.3)" }}>&rsaquo;</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto", display: "inline-flex", alignSelf: "flex-start", padding: "5px 14px", borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>{ch.badge}</span>
                </div>
              </motion.article>
              {i < chapters.length - 1 && (
                <ArrowRight size={24} color="rgba(255,255,255,0.3)" strokeWidth={2} style={{ flexShrink: 0, alignSelf: "center" }} />
              )}
            </div>
          ))}
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
