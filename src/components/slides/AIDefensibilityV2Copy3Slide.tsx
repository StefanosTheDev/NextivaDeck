"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Shield, Radio, Zap } from "lucide-react";

const ACCENT = "#7EB3E8";
const ACCENT_STRONG = "#2860B2";

const pillars = [
  {
    icon: Shield,
    title: "Deep Infrastructure",
    desc: "We own the network AI runs on — not an app on someone else's stack.",
    badge: "Hard to replicate",
  },
  {
    icon: Radio,
    title: "Proprietary Real-Time Data",
    desc: "Live interaction signals at the moment of conversation — ground truth others don't have.",
    badge: "Compounds over time",
  },
  {
    icon: Zap,
    title: "Outcome-Based Monetization",
    desc: "Revenue scales with interactions and outcomes, not seats.",
    badge: "Growth accelerator",
  },
];

export default function AIDefensibilityV2Copy3Slide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          AI ACCELERATOR
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          Three advantages that make Nextiva{" "}
          <span style={{ color: ACCENT }}>AI-proof.</span>
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "14px 0 0", lineHeight: 1.5 }}>
          Infrastructure, data, and monetization — each one compounds, together they're a moat.
        </p>
      </motion.header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 100px" }}>
        <div style={{ display: "flex", gap: 24, width: "100%" }}>
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `3px solid ${ACCENT_STRONG}`,
                  borderRadius: 16,
                  padding: "44px 36px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22,
                }}>
                  <Icon size={26} color={ACCENT} strokeWidth={1.75} />
                </div>

                <h2 className="font-heading" style={{ fontSize: 30, fontWeight: 700, color: "#FFFFFF", margin: "0 0 14px", lineHeight: 1.2 }}>
                  {p.title}
                </h2>

                <p style={{ fontSize: 20, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.55, flex: 1 }}>
                  {p.desc}
                </p>

                <div style={{
                  marginTop: 40, padding: "10px 20px", borderRadius: 10,
                  background: ACCENT_STRONG, textAlign: "center",
                }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>{p.badge}</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ padding: "0 100px 28px", flexShrink: 0 }}
      >
        <div style={{
          background: "rgba(40,96,178,0.08)", border: "1px solid rgba(40,96,178,0.15)",
          borderRadius: 12, padding: "18px 40px", textAlign: "center",
        }}>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", margin: 0 }}>
            <span style={{ fontWeight: 700, color: "#FFFFFF" }}>Not a tool — the infrastructure layer</span> where AI executes.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
