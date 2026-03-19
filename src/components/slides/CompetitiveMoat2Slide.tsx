"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Database, Server, TrendingUp, Lock } from "lucide-react";
import type { ReactNode } from "react";

const moats: { Icon: typeof Database; title: ReactNode; body: ReactNode; metric: string; metricLabel: string }[] = [
  {
    Icon: Database,
    title: (<>Real-time conversational data moat<br /><span style={{ visibility: "hidden" }}>.</span></>),
    body: "Billions of always-fresh, real-time conversations create a data moat no static model can replicate. Our AI learns from live interactions — not synthetic benchmarks.",
    metric: "10B+",
    metricLabel: "interactions processed",
  },
  {
    Icon: Server,
    title: "Infrastructure embedded into daily operations",
    body: "Carrier-grade telephony, real-time routing, and physical network infrastructure operate below the software layer — where AI cannot reach. HIPAA, PCI, and TCPA compliance create regulatory barriers no vibe-coded alternative can clear.",
    metric: "86%",
    metricLabel: "customers on annual+ contracts",
  },
  {
    Icon: TrendingUp,
    title: "Outcome-based pricing model",
    body: "Revenue is shifting from per-line pricing to usage and outcome-based models. This insulates the business from workforce reduction — when customers need fewer seats, they pay for results instead.",
    metric: "92%",
    metricLabel: "net dollar retention",
  },
  {
    Icon: Lock,
    title: (<>No customer concentration risk<br /><span style={{ visibility: "hidden" }}>.</span></>),
    body: "92K+ accounts, no customer above 0.6% of ARR, across every US industry. This isn't one big contract — it's a diversified annuity stream.",
    metric: "<0.6%",
    metricLabel: "max customer concentration",
  },
];

export default function CompetitiveMoat2Slide({ slideNumber = 20 }: { slideNumber?: number }) {
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
            key={m.metricLabel}
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
          <p style={{ fontSize: 17, fontWeight: 700, color: "#7EB3E8", margin: "0 0 4px", lineHeight: 1.4 }}>
            Data + Infrastructure + Regulation = a moat AI cannot cross.
          </p>
          <p style={{ fontSize: 15, color: "#FFFFFF", margin: 0, lineHeight: 1.5 }}>
            Every interaction deepens the data layer. Every compliance requirement raises the barrier. Every infrastructure dependency increases switching cost.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
