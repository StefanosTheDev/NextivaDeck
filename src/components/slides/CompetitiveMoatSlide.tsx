"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Database, Users, Layers, Lock } from "lucide-react";

const moats = [
  {
    Icon: Database,
    title: "Conversation data moat",
    body: "Billions of real customer conversations power our AI. Competitors starting from scratch can't replicate years of proprietary interaction data.",
    metric: "10B+",
    metricLabel: "interactions processed",
  },
  {
    Icon: Users,
    title: "Embedded in daily operations",
    body: "Nextiva's Unified Customer Interaction Platform powers mission-critical operations for mainstream businesses, deeply integrated across their ecosystem.",
    metric: "83%",
    metricLabel: "in annual contracts",
  },
  {
    Icon: Layers,
    title: "Unified platform economics",
    body: "Competitors offer point solutions. Nextiva brings communications + CX + AI on one data layer. It enables lasting expansion model.",
    metric: "~1.6%",
    metricLabel: "monthly MRR churn",
  },
  {
    Icon: Lock,
    title: "No concentration risk",
    body: "92K+ accounts, no customer above 0.6% of ARR, across every US industry. This isn't one big contract — it's a diversified annuity stream.",
    metric: "<0.6%",
    metricLabel: "max customer concentration",
  },
];

export default function CompetitiveMoatSlide({ slideNumber = 20 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
          COMPETITIVE MOAT
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          What makes Nextiva's moat defensible.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "14px 0 0", lineHeight: 1.5 }}>
          Four interlocking advantages that compound over time.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "28px 100px 0", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, alignContent: "center" }}
      >
        {moats.map((m, i) => (
          <motion.article
            key={m.title}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "3px solid #2860B2",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex", flexDirection: "column",
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: "rgba(40,96,178,0.15)", border: "1px solid rgba(40,96,178,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
            }}>
              <m.Icon size={22} color="#7EB3E8" strokeWidth={1.75} />
            </div>

            <h2 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.25 }}>
              {m.title}
            </h2>

            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: "12px 0 0", lineHeight: 1.55, flex: 1 }}>
              {m.body}
            </p>

            <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(40,96,178,0.2)" }}>
              <p className="font-heading" style={{ fontSize: 32, fontWeight: 700, color: "#7EB3E8", margin: 0, lineHeight: 1 }}>
                {m.metric}
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>
                {m.metricLabel}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "0 100px 8px", flexShrink: 0 }}
      >
        <div style={{
          background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)",
          borderRadius: 14, padding: "18px 40px", textAlign: "center",
        }}>
          <p style={{ fontSize: 17, color: "#FFFFFF", margin: 0, lineHeight: 1.5 }}>
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>Switching cost is high.</span>{" "}
            Every interaction enriches the data layer, strengthening the moat and expanding product adoption.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
