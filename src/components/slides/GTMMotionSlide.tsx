"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Repeat, Users, Network, Zap, TrendingDown } from "lucide-react";

const ACCENT = "#7EB3E8";

const pillars = [
  {
    icon: Repeat,
    title: "Proven\nRepeatability",
    stat: "20+ yrs",
    statLabel: "compounding execution",
    desc: "Pattern recognition that drives faster, better decisions.",
    color: "#7EB3E8",
  },
  {
    icon: Users,
    title: "Operator\nDNA",
    stat: "Deep Bench",
    statLabel: "execution-first",
    desc: "Proven leaders, not hired theory. Lean teams that move fast.",
    color: "#7EB3E8",
  },
  {
    icon: Network,
    title: "Distribution\nMoat",
    stat: "Multi Gateways",
    statLabel: "direct · partners · affiliates",
    desc: "Relationships built over decades. No single-channel risk.",
    color: "#7EB3E8",
  },
  {
    icon: Zap,
    title: "AI-Driven\nGrowth",
    stat: "Real-time",
    statLabel: "capture & convert",
    desc: "AI embedded across demand gen. Continuous optimization at scale.",
    color: "#7EB3E8",
  },
  {
    icon: TrendingDown,
    title: "Capital\nDiscipline",
    stat: "Organic-first",
    statLabel: "high ROI by design",
    desc: "Scales without proportional spend. Efficiency is structural.",
    color: "#7EB3E8",
  },
];

export default function GTMMotionSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
        width: 1000, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "52px 100px 0", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          GTM ENGINE
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          A machine competitors{" "}
          <span style={{
            background: "linear-gradient(90deg, #0070F3, #00C2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            can&apos;t replicate.
          </span>
        </h1>
        <p style={{ fontSize: 21, color: "rgba(255,255,255,0.45)", margin: "12px 0 0", lineHeight: 1.5 }}>
          Five interlocking pillars — each one hard to build, together impossible to copy.
        </p>
      </motion.header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 80px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: 16, width: "100%" }}>
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: "3px solid #2860B2",
                  borderRadius: 14,
                  padding: "30px 22px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{
                  position: "absolute", top: -20, right: -20,
                  width: 80, height: 80, borderRadius: "50%",
                  background: `radial-gradient(circle, ${p.color}12, transparent 70%)`,
                  pointerEvents: "none",
                }} />

                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${p.color}18`, border: `1px solid ${p.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                }}>
                  <Icon size={22} color={p.color} strokeWidth={1.75} />
                </div>

                <p className="font-heading" style={{
                  fontSize: 32, fontWeight: 700, color: "#FFFFFF", margin: "0 0 2px", lineHeight: 1,
                }}>
                  {p.stat}
                </p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "0 0 16px", lineHeight: 1.3, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                  {p.statLabel}
                </p>

                <div style={{ width: 32, height: 2, background: `${p.color}50`, borderRadius: 1, marginBottom: 14 }} />

                <h2 className="font-heading" style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF", margin: "0 0 10px", lineHeight: 1.2, whiteSpace: "pre-line" }}>
                  {p.title}
                </h2>

                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.55, flex: 1 }}>
                  {p.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ padding: "0 80px 28px", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <div style={{
          display: "flex",
          background: "linear-gradient(135deg, rgba(0,112,243,0.1), rgba(0,194,255,0.08))",
          border: "1px solid rgba(0,112,243,0.2)",
          borderRadius: 14, overflow: "hidden",
        }}>
          {pillars.map((p, i) => (
            <div key={p.title} style={{
              flex: 1, padding: "16px 16px", textAlign: "center",
              borderRight: i < pillars.length - 1 ? "1px solid rgba(0,112,243,0.15)" : "none",
            }}>
              <p className="font-heading" style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1 }}>
                {p.title.replace("\n", " ")}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
