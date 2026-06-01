"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Zap, Building2, Cloud, ArrowRight } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const CORAL = "#E85A4F";
const BG = "#FFFFFF";

const competitors = [
  {
    num: "01",
    icon: Zap,
    title: "AI-native challengers",
    label: "Agent specialists & newcomers",
    points: [
      "Single-product focus on agentic AI",
      "Move faster than full-stack vendors",
      "Win green-field deployments first",
      "Reference customers in our verticals",
      "Bottoms-up, developer-led adoption",
    ],
    takeaway: "OUTPACE ON STACK BREADTH\nAND CUSTOMER TRUST",
  },
  {
    num: "02",
    icon: Building2,
    title: "Established incumbents",
    label: "Concurrent direct competition",
    points: [
      "Bundle AI free into existing seats",
      "Lean on entrenched customer relationships",
      "Compete on price as AI commoditizes",
      "Cross-sell into our base via enterprise deals",
      "Match feature parity to neutralize differentiation",
    ],
    takeaway: "OUTPACE ON SPEED, VERTICAL DEPTH,\nAND END-TO-END VALUE",
  },
  {
    num: "03",
    icon: Cloud,
    title: "Large players, deep pockets",
    label: "Hyperscalers & frontier-AI",
    points: [
      "Move down-market with productized agentic AI",
      "Distribute via cloud and enterprise channels",
      "Subsidize price — AI as a loss-leader",
      "Win on superior models and infrastructure",
      "Acquire or partner into our verticals",
    ],
    takeaway: "OUTPACE ON FIRST-PARTY DATA\nAND VERTICAL OPERATIONS",
  },
];

export default function FutureCompetitorCounterMovesSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: BG,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -160,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1200,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,90,79,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "48px 80px 0",
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
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: MUTED,
            margin: "0 0 12px",
          }}
        >
          COUNTER-MOVES BY COMPETITOR TYPE
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 46,
            fontWeight: 400,
            color: NAVY_DARK,
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Where the threats come from — and how we hold our ground.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "60px 60px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {competitors.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.article
              key={c.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderTop: `3px solid ${CORAL}`,
                borderRadius: 14,
                padding: "28px 26px 22px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 14px rgba(6,26,55,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(232,90,79,0.10)",
                    border: `1px solid ${CORAL}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} color={CORAL} strokeWidth={1.75} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: CORAL,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.label}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: MUTED,
                      marginLeft: 8,
                    }}
                  >
                    {c.num}
                  </span>
                </div>
              </div>

              <h3
                className="font-heading"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: NAVY_DARK,
                  margin: "0 0 24px",
                  lineHeight: 1.25,
                }}
              >
                {c.title}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {c.points.map((pt, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <ArrowRight
                      size={18}
                      color={CORAL}
                      strokeWidth={2.5}
                      style={{ flexShrink: 0, marginTop: 4 }}
                    />
                    <span
                      style={{
                        fontSize: 17,
                        color: NAVY,
                        fontWeight: 500,
                        lineHeight: 1.35,
                      }}
                    >
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 36,
                  background: "rgba(40,96,178,0.08)",
                  border: `1px solid ${BLUE}33`,
                  borderRadius: 10,
                  padding: "14px 20px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    whiteSpace: "pre-line",
                    lineHeight: 1.5,
                  }}
                >
                  {c.takeaway}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <footer
        style={{
          padding: "20px 60px 16px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        Top of card = their move · Bottom band = our defensive posture
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
