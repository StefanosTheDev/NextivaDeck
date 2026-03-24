"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Ear, Brain, Rocket } from "lucide-react";

const ACCENT = "#7EB3E8";
const ACCENT_STRONG = "#2860B2";

const steps = [
  {
    Icon: Ear,
    label: "Listen",
    detail: "Every channel. Every signal.",
    sub: "Voice · Chat · Email · Intent · Tone",
  },
  {
    Icon: Brain,
    label: "Think",
    detail: "Full context. Real time.",
    sub: "CRM · History · Sentiment · Workflow",
  },
  {
    Icon: Rocket,
    label: "Act",
    detail: "Resolve. Not report.",
    sub: "Route · Automate · Close · Upsell",
  },
];

export default function SystemOfActionCombinedSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: -300,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1200,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,96,178,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          HOW IT WORKS
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 58,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "12px auto 0",
            lineHeight: 1.15,
            textAlign: "center",
          }}
        >
          AI that acts <span style={{ color: ACCENT }}>during</span> the conversation
          <br />
          — not after it.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
          position: "relative",
          zIndex: 1,
          gap: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "stretch", width: "100%", maxWidth: 1200 }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: `3px solid ${ACCENT_STRONG}`,
                  borderRadius: 14,
                  padding: "36px 32px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: `linear-gradient(135deg, rgba(40,96,178,0.25) 0%, rgba(40,96,178,0.08) 100%)`,
                    border: "1px solid rgba(40,96,178,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <step.Icon size={30} color={ACCENT} strokeWidth={1.75} />
                </div>
                <h2
                  className="font-heading"
                  style={{ fontSize: 36, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}
                >
                  {step.label}
                </h2>
                <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", margin: 0, fontWeight: 600 }}>
                  {step.detail}
                </p>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", margin: 0, letterSpacing: "0.02em" }}>
                  {step.sub}
                </p>
              </div>
              {i < 2 && (
                <div style={{ padding: "0 24px", display: "flex", alignItems: "center", flexShrink: 0 }}>
                  <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                    <path
                      d="M0 12h40m0 0l-8-8m8 8l-8 8"
                      stroke={ACCENT}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "16px 100px 24px", position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "18px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.4 }}>
            Not a system of record.{" "}
            <span style={{ color: ACCENT }}>A system of action.</span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
