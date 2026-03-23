"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { MessageSquare, Layers, Brain, Workflow } from "lucide-react";

const ACCENT = "#7EB3E8";
const BLUE = "#2860B2";
const GLASS = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.1)";

const steps = [
  {
    num: "01",
    Icon: MessageSquare,
    label: "Signal",
    description: "Customer interactions generate real-time signals",
  },
  {
    num: "02",
    Icon: Layers,
    label: "Context",
    description: "Context is enriched from across systems",
  },
  {
    num: "03",
    Icon: Brain,
    label: "Decision",
    description: "AI determines next-best action instantly",
  },
  {
    num: "04",
    Icon: Workflow,
    label: "Execution",
    description: "Workflows execute automatically",
  },
];

export default function HowItWorksSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1200,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "56px 100px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 12px",
          }}
        >
          HOW IT WORKS
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 54,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "0 auto",
            lineHeight: 1.15,
          }}
        >
          From conversation to context to{" "}
          <span style={{ color: ACCENT }}>action.</span>
        </h1>
      </motion.header>

      {/* 4-step flow */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            maxWidth: 1600,
          }}
        >
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                style={{
                  flex: 1,
                  background: GLASS,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${BLUE}`,
                  borderRadius: 16,
                  padding: "36px 28px 32px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 4,
                  }}
                >
                  <step.Icon size={26} color={ACCENT} strokeWidth={1.75} />
                </div>

                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: ACCENT,
                    margin: 0,
                    textTransform: "uppercase",
                  }}
                >
                  {step.num}
                </p>

                <h2
                  className="font-heading"
                  style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {step.label}
                </h2>

                <div
                  style={{
                    width: 36,
                    height: 2,
                    background: BLUE,
                    borderRadius: 1,
                    margin: "4px 0",
                  }}
                />

                <p
                  style={{
                    fontSize: 17,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: 280,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>

              {i < steps.length - 1 && (
                <div
                  style={{
                    padding: "0 14px",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="48"
                    height="24"
                    viewBox="0 0 48 24"
                    fill="none"
                  >
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

      {/* Bottom callout */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{
          padding: "16px 100px 24px",
          position: "relative",
          zIndex: 1,
        }}
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
          <p
            style={{
              fontSize: 21,
              fontWeight: 600,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Not a system of record &mdash;{" "}
            <span style={{ color: ACCENT }}>a system of action.</span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
