"use client";

import { motion } from "framer-motion";
import { Cpu, HandHeart, ShieldCheck, Users } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const observations = [
  {
    icon: Cpu,
    eyebrow: "Market reality",
    title: "AI is becoming mission-critical",
    detail: "Moving from experimentation to core revenue workflows",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Buyer psychology",
    title: "Trust gates adoption",
    detail: "Customers need confidence before embedding AI in critical operations",
  },
  {
    icon: Users,
    eyebrow: "Distribution gap",
    title: "Self-serve AI underserves mid-market",
    detail: "Pure digital motions struggle with less sophisticated buyers",
  },
  {
    icon: HandHeart,
    eyebrow: "Durable differentiator",
    title: "Human guidance keeps mattering",
    detail: "A multi-year window where advisory + AI outperforms AI alone",
  },
];

export default function AIIncreasesHumanTrustSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: BG, overflow: "hidden", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "36px 80px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          AI tailwind
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 18px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.16,
            maxWidth: 1040,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          The rise of AI strengthens the hybrid sales advantage.
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            maxWidth: 940,
            margin: "18px auto 0",
            padding: "16px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.5 }}>
            As AI enters mission-critical workflows, buyers need more trust, not less — which widens Nextiva&apos;s
            moat.{" "}
            <strong style={{ fontWeight: 700, color: "#FFFFFF" }}>AI is a tailwind, not a threat.</strong>
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "20px 80px 12px",
          minHeight: 0,
          width: "100%",
          maxWidth: 1480,
          marginLeft: "auto",
          marginRight: "auto",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 14,
            flex: 1,
            minHeight: 0,
          }}
        >
          {observations.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.article
                key={o.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + i * 0.07 }}
                style={{
                  borderRadius: 16,
                  padding: "18px 22px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 112, 243, 0.14)",
                    border: "1px solid rgba(0, 112, 243, 0.35)",
                  }}
                >
                  <Icon size={22} color="#7EB3E8" strokeWidth={1.75} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {o.eyebrow}
                  </p>
                  <h3
                    className="font-heading"
                    style={{ fontSize: 19, fontWeight: 700, color: "#FFFFFF", margin: "3px 0 4px", lineHeight: 1.25 }}
                  >
                    {o.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.45 }}>
                    {o.detail}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            borderRadius: 14,
            padding: "14px 22px",
            background:
              "linear-gradient(90deg, rgba(0, 112, 243, 0.18) 0%, rgba(40, 96, 178, 0.12) 100%)",
            border: "1px solid rgba(126,179,232,0.32)",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              flexShrink: 0,
            }}
          >
            Nextiva edge
          </span>
          <span style={{ width: 1, height: 24, background: "rgba(126,179,232,0.3)" }} />
          <p style={{ margin: 0, fontSize: 15, color: "#FFFFFF", lineHeight: 1.45, fontWeight: 500 }}>
            Only Nextiva combines <strong style={{ color: "#7EB3E8" }}>AI at scale</strong>, unified
            communications, and <strong style={{ color: "#7EB3E8" }}>trusted advisory support</strong> — purpose-built
            for the mid-market.
          </p>
        </motion.div>
      </main>

      <div style={{ padding: "0 80px 14px", width: "100%", maxWidth: 1480, marginLeft: "auto", marginRight: "auto", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.55 }}
          style={{
            borderRadius: 12,
            padding: "12px 22px",
            background: "rgba(0, 112, 243, 0.08)",
            border: "1px solid rgba(0, 112, 243, 0.22)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              flexShrink: 0,
            }}
          >
            Investor takeaway
          </span>
          <span style={{ width: 1, height: 18, background: "rgba(126,179,232,0.3)" }} />
          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.45,
              flex: 1,
              textAlign: "center",
            }}
          >
            AI adoption accelerates platform attach · trust-led motion lifts conversion · hybrid model widens moat.
          </p>
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
