"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  Replace,
  MessageSquare,
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

const PROMPTS = [
  {
    icon: CheckCircle2,
    title: "Which FY26 assumptions proved true?",
    body: "Where did the model hold? What executed as expected?",
  },
  {
    icon: XCircle,
    title: "Which proved false?",
    body: "Where were we wrong? What did we over- or under-estimate?",
  },
  {
    icon: Sparkles,
    title: "What surprised us?",
    body: "Customer behavior, competitive dynamics, or market shifts we didn't model.",
  },
  {
    icon: Replace,
    title: "What are we intentionally changing?",
    body: "Decisions we're making because of what we learned — not despite it.",
  },
];

export default function FutureWhatWeLearnedSlide({
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
            04
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
            What We Learned
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
          What Have We Learned?
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
          FY26 to FY27 — the assumptions that held, the ones that didn&apos;t.
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
            gridTemplateColumns: "1fr 1fr",
            gridAutoRows: "1fr",
            gap: 16,
            flex: 1,
            minHeight: 0,
          }}
        >
          {PROMPTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 + i * 0.06 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `5px solid ${BLUE}`,
                  borderRadius: 14,
                  padding: "22px 26px",
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                  boxShadow: "0 6px 20px rgba(6,26,55,0.05)",
                }}
              >
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: BLUE_SOFT,
                    border: `1px solid ${BLUE}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color={BLUE} strokeWidth={2.2} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: NAVY_DARK,
                      margin: 0,
                      lineHeight: 1.2,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {p.title}
                  </h2>
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 14,
                      color: BODY,
                      lineHeight: 1.5,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
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
            What are we intentionally carrying forward — and what are we
            intentionally leaving behind?
          </p>
        </div>

        <SessionSectionNav active="learned" />
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
        FY27 Strategic Planning · Day 1 · What We Learned
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
