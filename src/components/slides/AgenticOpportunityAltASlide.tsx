"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, Users, Zap, ShoppingCart, Timer } from "lucide-react";
import SlideFooter from "../SlideFooter";

const whyNextiva = [
  { icon: Layers, label: "Unified Interactions & Data" },
  { icon: Users, label: "Agentic & Human in Tandem" },
  { icon: ShoppingCart, label: "Go-to-Market Moat" },
  { icon: Zap, label: "Product-Led Motion" },
  { icon: Timer, label: "Quick Time to Value" },
];

const bars: {
  value: string;
  width: string;
  label: string;
  sublabel: string;
  color: string;
  bg: string;
  border: string;
  isNextiva: boolean;
}[] = [
  {
    value: "6M",
    width: "24%",
    label: "Enterprise contact centers",
    sublabel: "250+ agents — the crowded space",
    color: "#E07E7E",
    bg: "rgba(180,60,60,0.15)",
    border: "rgba(200,80,80,0.3)",
    isNextiva: false,
  },
  {
    value: "12M",
    width: "48%",
    label: "Mid-market contact centers",
    sublabel: "<250 agents — underserved by incumbents",
    color: "#7EB3E8",
    bg: "rgba(40,96,178,0.12)",
    border: "rgba(126,179,232,0.3)",
    isNextiva: true,
  },
  {
    value: "7M",
    width: "28%",
    label: "Businesses doing CX",
    sublabel: "Without calling it a contact center",
    color: "#7EB3E8",
    bg: "rgba(40,96,178,0.12)",
    border: "rgba(126,179,232,0.3)",
    isNextiva: true,
  },
];

export default function AgenticOpportunityAltASlide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      {/* ── Header ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
        >
          The next workforce is Agentic
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Millions of customer interactions will be handled by AI employees — not people.
        </p>
      </motion.header>

      {/* ── Total opportunity callout ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        style={{
          padding: "32px 100px 0",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <span
          className="font-heading"
          style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}
        >
          25M
        </span>
        <span style={{ fontSize: 20, fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>
          total CX workforce opportunity
        </span>
      </motion.div>

      {/* ── Horizontal bars ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ padding: "28px 100px 0", flex: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Bar chart area */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {bars.map((bar, i) => (
            <motion.div
              key={bar.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                opacity: bar.isNextiva ? 1 : 0.6,
              }}
            >
              {/* The bar */}
              <div
                style={{
                  width: bar.width,
                  minWidth: 120,
                  background: bar.bg,
                  border: `1.5px solid ${bar.border}`,
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexShrink: 0,
                }}
              >
                <span
                  className="font-heading"
                  style={{
                    fontSize: 40,
                    fontWeight: 700,
                    color: bar.color,
                    lineHeight: 1,
                    flexShrink: 0,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {bar.value}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>
                    {bar.label}
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.3 }}>
                    {bar.sublabel}
                  </span>
                </div>
              </div>

              {/* Label tag to the right of red bar */}
              {!bar.isNextiva && (
                <div
                  style={{
                    marginLeft: 16,
                    background: "rgba(180,60,60,0.12)",
                    border: "1px solid rgba(200,80,80,0.2)",
                    borderRadius: 8,
                    padding: "6px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: "#E07E7E", fontWeight: 700, fontSize: 14 }}>✗</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#E07E7E" }}>
                    Incumbents fight here
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Gold bracket spanning the two blue bars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: 8,
          }}
        >
          {/* Spacer to align bracket start with second bar */}
          <div style={{ width: 0, flexShrink: 0 }} />

          {/* Bracket + label */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* SVG bracket */}
            <svg width="100%" height="24" viewBox="0 0 1000 24" preserveAspectRatio="none">
              <path
                d="M 40 2 L 40 10 L 500 10 L 500 22 L 500 10 L 960 10 L 960 2"
                fill="none"
                stroke="#FFB800"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* White space badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 4,
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #FFB800 0%, #E5A200 100%)",
                  borderRadius: 20,
                  padding: "6px 20px",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#000",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Nextiva&apos;s White Space
                </span>
              </div>
              <span
                className="font-heading"
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#7EB3E8",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                19M
              </span>
              <span style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
                underserved opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom ribbon: Why Nextiva Wins ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        style={{ padding: "0 100px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: "16px 28px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#CCC7C3",
              flexShrink: 0,
              marginRight: 8,
            }}
          >
            WHY NEXTIVA WINS
          </span>
          <div
            style={{
              width: 1,
              height: 28,
              background: "rgba(255,255,255,0.12)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {whyNextiva.map(({ icon: Icon, label }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "rgba(40,96,178,0.2)",
                    border: "1px solid rgba(40,96,178,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} color="#7EB3E8" />
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div style={{ flex: 1, maxHeight: 20 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
