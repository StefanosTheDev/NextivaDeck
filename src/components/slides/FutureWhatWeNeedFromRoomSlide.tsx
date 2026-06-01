"use client";

import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";
import SlideFooter from "../SlideFooter";
import SessionSectionNav from "./strategic-truths/SessionSectionNav";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const QUESTIONS = [
  {
    n: "1",
    title: "What changed from FY26?",
    body: "Market, competitive, or customer dynamics that shift our starting assumptions.",
  },
  {
    n: "2",
    title: "What assumptions are wrong?",
    body: "Where is the model too optimistic? Where are we underestimating risk?",
  },
  {
    n: "3",
    title: "What are we not seeing?",
    body: "Blind spots — in segments, products, or GTM — that aren't in the plan.",
  },
  {
    n: "4",
    title: "What has earned the right to scale?",
    body: "Where has execution been strong enough to deserve more resource concentration?",
  },
  {
    n: "5",
    title: "What should we leave behind?",
    body: "Products, motions, or investments that are diluting focus without earning returns.",
  },
];

export default function FutureWhatWeNeedFromRoomSlide({
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
          padding: "26px 72px 0",
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
            padding: "6px 14px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 10,
          }}
        >
          <span
            className="font-heading"
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: BLUE,
              letterSpacing: "-0.02em",
            }}
          >
            05
          </span>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            Pressure Test
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
          What We Need From the Room.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            color: BODY,
            margin: "8px auto 0",
            maxWidth: 1100,
            lineHeight: 1.5,
          }}
        >
          Five pressure-test questions. Every one of them matters.
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
          gap: 12,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            flex: 1,
            minHeight: 0,
          }}
        >
          {QUESTIONS.map((q, i) => (
            <motion.article
              key={q.n}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.14 + i * 0.06 }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderLeft: `5px solid ${BLUE}`,
                borderRadius: 10,
                padding: "14px 22px",
                display: "flex",
                gap: 18,
                alignItems: "center",
                boxShadow: "0 4px 14px rgba(6,26,55,0.04)",
              }}
            >
              <div
                className="font-heading"
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: BLUE,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  width: 42,
                  textAlign: "center",
                  flexShrink: 0,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {q.n}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    margin: 0,
                    lineHeight: 1.2,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {q.title}
                </h2>
                <p
                  style={{
                    margin: "3px 0 0",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13.5,
                    color: BODY,
                    lineHeight: 1.45,
                  }}
                >
                  {q.body}
                </p>
              </div>
              <Megaphone
                size={20}
                color={BLUE}
                strokeWidth={2}
                style={{ opacity: 0.35, flexShrink: 0 }}
              />
            </motion.article>
          ))}
        </div>

        <SessionSectionNav active="pressure" />
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
        FY27 Strategic Planning · Day 1 · Pressure Test
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
