"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Brain, Server, Database, Users } from "lucide-react";

const ACCENT = "#7EB3E8";
const ACCENT_STRONG = "#2860B2";

const quadrants = [
  {
    icon: Server,
    title: "Our infrastructure",
    desc: "We own the network AI runs on. Every interaction lives on Nextiva's stack — not someone else's API.",
  },
  {
    icon: Brain,
    title: "Our AI-native CX platform",
    desc: "The first platform built to fuse AI, communications, and data — 50+ CX & AI patents since 2014.",
  },
  {
    icon: Database,
    title: "Our real-time, proprietary data",
    desc: "Live conversation signals at the moment of decision — ground truth no competitor can replicate.",
  },
  {
    icon: Users,
    title: "Human and AI in tandem",
    desc: "AI that amplifies human judgment — embedded inside the workflows where outcomes are won.",
  },
];

export default function InvestorSummaryVisionSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
        style={{ padding: "56px 100px 0", flexShrink: 0, position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <p
          style={{ fontWeight: 700, fontSize: 20, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}
        >
          HIGHLIGHTS
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15 }}
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
          padding: "44px 120px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: 24,
          alignContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {quadrants.map((q, i) => {
          const Icon = q.icon;
          return (
            <motion.article
              key={q.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderTop: `3px solid ${ACCENT_STRONG}`,
                borderRadius: 16,
                padding: "32px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 18 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "rgba(40,96,178,0.18)",
                    border: "1px solid rgba(40,96,178,0.30)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={32} color={ACCENT} strokeWidth={1.75} />
                </div>
                <h2 className="font-heading" style={{ fontSize: 34, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
                  {q.title}
                </h2>
              </div>

              <p style={{ fontSize: 20, fontWeight: 500, color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.5 }}>
                {q.desc}
              </p>
            </motion.article>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
