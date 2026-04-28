"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { DollarSign, Brain, Users, TrendingUp, Zap } from "lucide-react";

const ACCENT = "#7EB3E8";

const points = [
  {
    icon: Users,
    stat: "Massive, Underserved Market",
    headline: "Tackling a very important — and structurally underserved — part of the market.",
  },
  {
    icon: TrendingUp,
    stat: "AI Expands the Opportunity",
    headline: "AI is deepening and expanding our addressable market — and our ability to penetrate it.",
  },
  {
    icon: Brain,
    stat: "Real Platform Leadership",
    headline: "50+ CX and AI patents over the last three years — leader in a large and growing market.",
  },
  {
    icon: Zap,
    stat: "AI as a Proven Growth Accelerant",
    headline: "Business model and pricing engineered for the AI tailwind — already experienced as growth, not theory.",
  },
  {
    icon: DollarSign,
    stat: "Scaled & Efficient at $350M",
    headline: "Each incremental dollar of revenue over the next 12 months flows to the bottom line at ~60¢.",
  },
];

export default function InvestorSummaryEndSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1000,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <p
          style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}
        >
          HIGHLIGHTS
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}
        >
          Why Nextiva
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "0 100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          position: "relative",
          zIndex: 1,
        }}
      >
        {points.map((point, i) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: `4px solid ${ACCENT}`,
                borderRadius: 14,
                padding: "24px 32px",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(40,96,178,0.15)",
                  border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={24} color={ACCENT} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: ACCENT, margin: 0, lineHeight: 1.2 }}>
                  {point.stat}
                </p>
                <p style={{ fontSize: 20, fontWeight: 500, color: "rgba(255,255,255,0.75)", margin: "4px 0 0", lineHeight: 1.4 }}>
                  {point.headline}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.main>

      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontFamily: "'Space Grotesk', 'Work Sans', Arial, sans-serif", padding: "0 80px 6px", margin: 0, flexShrink: 0, fontStyle: "italic" }}>
        Forward incremental margin reflects management&apos;s expectation for the next twelve months.
      </p>
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
