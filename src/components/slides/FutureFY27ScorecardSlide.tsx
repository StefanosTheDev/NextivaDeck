"use client";

import { motion } from "framer-motion";
import { MessageSquare, Target, Sparkles } from "lucide-react";
import SlideFooter from "../SlideFooter";
import SessionSectionNav from "./strategic-truths/SessionSectionNav";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

type Metric = {
  value: string;
  label: string;
  sub?: string;
  audaciousLabel?: string;
  audaciousValue?: string;
};

const METRICS: Metric[] = [
  { value: "~$369M", label: "Annualized Revenue", sub: "exit run rate" },
  { value: "74%", label: "Gross Margin" },
  { value: "80%", label: "Subscription Margin" },
  { value: "26%", label: "EBITDA Margin", sub: "~$100M annualized" },
  { value: "88%", label: "Free Cash Flow", sub: "conversion" },
  { value: "~$109M", label: "Cash Position" },
  {
    value: "91 → 94%",
    label: "Net Revenue Retention",
    audaciousLabel: "Audacious goal",
    audaciousValue: "100% by FY27 exit",
  },
  { value: "17 → 62%", label: "AI Embedded Activation" },
  { value: "22 – 28%", label: "AI Gateway Revenue", sub: "of revenue" },
  { value: "29 – 33%", label: "AI Outcome Revenue", sub: "of revenue" },
];

export default function FutureFY27ScorecardSlide({
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
            03
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
            Scorecard
          </span>
        </div>

        <h1
          className="font-heading"
          style={{
            fontSize: 42,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          FY27 Scorecard.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            color: BODY,
            margin: "8px auto 0",
            maxWidth: 1000,
            lineHeight: 1.5,
          }}
        >
          Embedded commitments to board, lenders, and investors.
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
          gap: 14,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridAutoRows: "1fr",
            gap: 12,
            flex: 1,
            minHeight: 0,
          }}
        >
          {METRICS.map((m, i) => (
            <motion.article
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + i * 0.04 }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderTop: `4px solid ${BLUE}`,
                borderRadius: 12,
                padding: "16px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                boxShadow: "0 4px 14px rgba(6,26,55,0.04)",
                position: "relative",
                minHeight: 0,
              }}
            >
              <div
                className="font-heading"
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: BLUE,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: NAVY_DARK,
                  lineHeight: 1.3,
                  marginTop: 4,
                }}
              >
                {m.label}
              </div>
              {m.sub && (
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 11.5,
                    color: BODY,
                    lineHeight: 1.35,
                  }}
                >
                  {m.sub}
                </div>
              )}
              {m.audaciousValue && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + i * 0.04,
                    type: "spring",
                    stiffness: 200,
                  }}
                  style={{
                    marginTop: "auto",
                    padding: "10px 12px",
                    borderRadius: 10,
                    background:
                      "linear-gradient(135deg, #FFE9DD 0%, #FFD4BD 100%)",
                    border: "1.5px solid #E76F51",
                    boxShadow: "0 6px 18px rgba(231,111,81,0.28)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Sparkles
                    size={16}
                    color="#C73E1D"
                    strokeWidth={2.4}
                    style={{ flexShrink: 0 }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 9,
                        fontWeight: 800,
                        letterSpacing: "0.16em",
                        color: "#C73E1D",
                        textTransform: "uppercase",
                        lineHeight: 1,
                      }}
                    >
                      {m.audaciousLabel ?? "Audacious goal"}
                    </div>
                    <div
                      className="font-heading"
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#7A1F0E",
                        letterSpacing: "-0.015em",
                        lineHeight: 1.15,
                      }}
                    >
                      {m.audaciousValue}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 22px",
            borderRadius: 12,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}33`,
          }}
        >
          <MessageSquare size={16} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
              flexShrink: 0,
            }}
          >
            Discussion
          </span>
          <span style={{ width: 1, height: 18, background: `${BLUE}55` }} />
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              color: NAVY_DARK,
              lineHeight: 1.45,
              flex: 1,
            }}
          >
            Are these the outcomes we are collectively trying to deliver?
          </p>
          <Target size={16} color={BLUE} strokeWidth={2.2} />
        </div>

        <SessionSectionNav active="scorecard" />
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
        FY27 Strategic Planning · Day 1 · Scorecard
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
