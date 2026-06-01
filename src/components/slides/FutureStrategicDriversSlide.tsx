"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Banknote,
  TrendingUp,
  Calculator,
  Compass,
} from "lucide-react";
import SlideFooter from "../SlideFooter";
import SessionSectionNav from "./strategic-truths/SessionSectionNav";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const ANCHORS = [
  {
    icon: Landmark,
    title: "Board",
    body: "Approved strategic direction and capital allocation.",
    bullets: [
      "A faster growth rate.",
      "Platform economics in line with SB.",
      "Introduction of new AI billing models.",
      "Hitting the numbers, every quarter.",
      "New avenues: partnerships, channel, e-commerce.",
    ],
  },
  {
    icon: Banknote,
    title: "Lenders",
    body: "Covenants and growth assumptions baked into terms.",
    bullets: [
      "Committed growth to ~$369M.",
      "EBITDA 26% / ~$100M annualized.",
      "AI story unfolding on plan.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investors",
    body: "Narrative and return expectations already set.",
    bullets: [
      "NRR 100%+.",
      "Reframing Nextiva from a UCaaS, CCaaS, CX-only company to a \u201CConversational AI\u201D company.",
      "Path to the AI-compounder re-rating.",
    ],
  },
  {
    icon: Calculator,
    title: "FY27 Plan",
    body: "Strategic direction, financial model, and scorecard assumptions embedded.",
    bullets: [
      <>
        Grow the base &mdash; audacious goal of{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>100% NRR</strong>
        .
      </>,
      "Demonstrate growth acceleration.",
      "Continue building the muscle for both top- and bottom-line accountability.",
      "Build the muscle to take a product from idea \u2192 launch \u2192 successful commercialization.",
    ],
  },
];

export default function FutureStrategicDriversSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "#FFFFFF",
        color: NAVY_DARK,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1400,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "28px 72px 0",
          textAlign: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 18px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 12,
          }}
        >
          <Compass size={14} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            FY27 · Day 01 · Context
          </span>
        </div>

        <h1
          className="font-heading"
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          FY27 Strategic Drivers.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 17,
            color: BODY,
            margin: "8px auto 0",
            maxWidth: 1000,
            lineHeight: 1.5,
          }}
        >
          What is already embedded in the plan.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "22px 72px 8px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            padding: "16px 24px",
            borderRadius: 14,
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F1F5FB 100%)",
            border: `1px solid ${BLUE}33`,
            boxShadow: "0 6px 24px rgba(40,96,178,0.08)",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
              marginBottom: 6,
            }}
          >
            Purpose of this document
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 15,
              color: NAVY_DARK,
              lineHeight: 1.5,
            }}
          >
            Before we discuss the strategy, we need to align on what is already
            embedded in our board discussions, lender discussions, investor
            narrative, and FY27 planning assumptions. The purpose of this
            session is to <strong>pressure-test, sharpen, and execute</strong>{" "}
            against these assumptions — not to re-litigate decisions already
            reflected in the plan.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 14,
            flex: 1,
            minHeight: 0,
          }}
        >
          {ANCHORS.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 + i * 0.06 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `5px solid ${BLUE}`,
                  borderRadius: 14,
                  padding: "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  boxShadow: "0 6px 20px rgba(6,26,55,0.05)",
                }}
              >
                <span
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 11,
                    background: BLUE_SOFT,
                    border: `1px solid ${BLUE}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={BLUE} strokeWidth={2.2} />
                </span>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    margin: 0,
                    lineHeight: 1.2,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {a.title}
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14,
                    color: BODY,
                    lineHeight: 1.5,
                  }}
                >
                  {a.body}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "24px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {a.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 12.5,
                        color: BODY,
                        lineHeight: 1.4,
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: BLUE,
                          marginTop: 7,
                          flexShrink: 0,
                        }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <SessionSectionNav active="context" />
      </motion.main>

      <footer
        style={{
          padding: "0 72px 14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        FY27 Strategic Planning · Day 1
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
