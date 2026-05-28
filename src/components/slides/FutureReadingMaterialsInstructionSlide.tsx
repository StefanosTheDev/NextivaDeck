"use client";

import { motion } from "framer-motion";
import {
  Info,
  Target,
  Megaphone,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const OUTCOMES = [
  {
    icon: Target,
    label: "ICP",
    sub: "Who we serve — and who we don't.",
  },
  {
    icon: Megaphone,
    label: "GTM",
    sub: "How we acquire, expand and retain.",
  },
  {
    icon: Sparkles,
    label: "Unique Value Proposition",
    sub: "Why us — and why only us.",
  },
];

const QUESTIONS = [
  "Is our ICP narrow and disciplined enough — or are we still trying to be everything to everyone?",
  "Where do we truly have a right-to-win, and where are we a fast follower, slow follower, short on skills, or chasing ambition beyond our DNA?",
  "What is the one thing every function must stop, start, or scale to land the FY27 plan?",
];

export default function FutureReadingMaterialsInstructionSlide({
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
          padding: "40px 72px 0",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
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
            marginBottom: 18,
          }}
        >
          <Info size={16} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            How to read this section
          </span>
        </div>

        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.22,
            letterSpacing: "-0.005em",
            margin: 0,
            maxWidth: 1320,
            marginInline: "auto",
          }}
        >
          The following materials are summaries of our{" "}
          <span style={{ color: BLUE, fontWeight: 700 }}>
            collective thinking
          </span>{" "}
          across ICP, Product, GTM, Verticals and Market.
        </h1>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 1px minmax(0, 1fr)",
          columnGap: 40,
          padding: "28px 72px 16px",
          position: "relative",
          zIndex: 1,
          minHeight: 0,
          alignItems: "stretch",
        }}
      >
        {/* LEFT — What we need from you */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          style={{
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: BLUE,
              margin: 0,
            }}
          >
            What we need from you
          </p>

          <p
            style={{
              fontSize: 19,
              color: NAVY_DARK,
              lineHeight: 1.45,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Take a critical look at every page. Internalize the logic.{" "}
            <span style={{ color: BLUE, fontWeight: 700 }}>
              Question every assumption.
            </span>{" "}
            So that — together — we land on a sharper:
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {OUTCOMES.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderLeft: `4px solid ${BLUE}`,
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      background: BLUE_SOFT,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={BLUE} strokeWidth={2.2} />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 17,
                        fontWeight: 700,
                        color: NAVY_DARK,
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {o.label}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        color: BODY,
                        margin: "2px 0 0",
                        lineHeight: 1.35,
                      }}
                    >
                      {o.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            minWidth: 1,
            background:
              "linear-gradient(to bottom, rgba(6,26,55,0) 0%, rgba(6,26,55,0.14) 20%, rgba(6,26,55,0.14) 80%, rgba(6,26,55,0) 100%)",
          }}
        />

        {/* RIGHT — Questions for leadership */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: BLUE,
              margin: 0,
            }}
          >
            Questions to challenge as you read
          </p>

          <p
            style={{
              fontSize: 17,
              color: BODY,
              lineHeight: 1.45,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Bring sharp answers — and sharper push-backs — to the working
            session.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              flex: 1,
            }}
          >
            {QUESTIONS.map((q, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "14px 16px",
                  borderRadius: 12,
                  background: "#FFFFFF",
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `3px solid ${BLUE}`,
                  boxShadow: "0 4px 14px rgba(6,26,55,0.04)",
                  flex: 1,
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 999,
                    background: BLUE_SOFT,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <HelpCircle size={16} color={BLUE} strokeWidth={2.2} />
                </span>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 16,
                    fontWeight: 500,
                    color: NAVY_DARK,
                    margin: 0,
                    lineHeight: 1.4,
                    flex: 1,
                  }}
                >
                  {q}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <div
        style={{
          padding: "0 72px 12px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 14,
            color: MUTED,
            margin: 0,
            letterSpacing: "0.02em",
            fontStyle: "italic",
          }}
        >
          Read for context — not for sign-off. We&apos;ll use the working
          session to pressure-test, sharpen and decide.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
