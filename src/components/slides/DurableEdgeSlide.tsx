"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Phone, BarChart3, Brain, MessageCircle } from "lucide-react";

const pillars = [
  {
    icon: Phone,
    title: "Communications Foundation",
    body: "Every channel. Always on. We own customer conversations.",
    stat: "96%",
    statLabel: "UPTIME SLA",
    gradient: "linear-gradient(160deg, #2860B2, #1A447C)",
  },
  {
    icon: BarChart3,
    title: "Unified Data Platform",
    body: "One source of truth. Every interaction builds compounding intelligence.",
    stat: "B+",
    statLabel: "INTERACTIONS CAPTURED",
    gradient: "linear-gradient(160deg, #1A447C, #2860B2)",
  },
  {
    icon: Brain,
    title: "17 Years of Trust and Vertical Expertise",
    body: "On-prem to cloud. Voice to omni. Manual to AI. We led every shift. Our customers came with us.",
    stat: "3",
    statLabel: "MARKET SHIFTS SURVIVED",
    gradient: "linear-gradient(160deg, #0F2C59, #1A447C)",
  },
  {
    icon: MessageCircle,
    title: "92,000+ Businesses. Millions of Relationships.",
    body: "Trusted. Embedded. In their workflow every day. They give us trust; we give them superpowers.",
    stat: "~1.6%",
    statLabel: "MONTHLY MRR CHURN",
    gradient: "linear-gradient(160deg, #061A37, #0F2C59)",
  },
];

const heights = ["48%", "56%", "64%", "72%"];

export default function DurableEdgeSlide({ slideNumber = 20 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream" style={{ justifyContent: "space-between" }}>
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow" style={{ color: "#2860B2" }}>Our Durable Edge</p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#1A447C", margin: "10px 0 0", lineHeight: 1.15 }}>
          Massive Moats. Trusted Position. Built to Thrive.
        </h1>
        <p style={{ fontSize: 20, color: "#4A4846", margin: "12px auto 0", maxWidth: 900, lineHeight: 1.5 }}>
          Proven ability to innovate ahead of tech change means our customers trust us to bring them along into the future.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "24px 100px 0", display: "flex", alignItems: "flex-end", gap: 20, overflow: "hidden" }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              style={{
                flex: 1,
                height: heights[i],
                borderRadius: "14px 14px 0 0",
                background: p.gradient,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#FFFFFF",
                overflow: "hidden",
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14,
              }}>
                <Icon size={22} color="#fff" strokeWidth={1.75} />
              </div>

              <div style={{ flex: 1 }}>
                <h2 className="font-heading" style={{ fontSize: 20, fontWeight: 700, margin: 0, lineHeight: 1.25, color: "#FFFFFF" }}>
                  {p.title}
                </h2>
                <p style={{ fontSize: 14, lineHeight: 1.5, margin: "10px 0 0", opacity: 0.8 }}>
                  {p.body}
                </p>
              </div>

              <div style={{ marginTop: 16 }}>
                <p className="font-heading" style={{ fontSize: 32, fontWeight: 700, margin: 0, lineHeight: 1.1, color: "#FFFFFF" }}>
                  {p.stat}
                </p>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: "4px 0 0", opacity: 0.55 }}>
                  {p.statLabel}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "16px 100px 0", flexShrink: 0 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#1A447C", whiteSpace: "nowrap" }}>Foundation</span>
          <div style={{ flex: 1, height: 2, background: "#2860B2", margin: "0 16px", borderRadius: 2 }} />
          <span style={{ fontSize: 14, fontWeight: 500, color: "#6C6967", textAlign: "center", flex: 2 }}>
            Each layer makes the others stronger — together, they make us hard to replace.
          </span>
          <div style={{ flex: 1, height: 2, background: "#2860B2", margin: "0 16px", borderRadius: 2 }} />
          <span style={{ fontSize: 16, fontWeight: 700, color: "#1A447C", whiteSpace: "nowrap" }}>Durability</span>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
