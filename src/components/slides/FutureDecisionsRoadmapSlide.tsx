"use client";

import { motion } from "framer-motion";
import {
  Target as TargetIcon,
  Sprout,
  ArrowUpRight,
  XCircle,
  Wrench,
  BookOpen,
  ArrowRight,
  AlertTriangle,
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

const PRIMARY = [
  {
    n: "01",
    icon: TargetIcon,
    title: "ICP",
    body: "Ideal customer profile — sharpened and agreed. The foundation everything else builds on.",
  },
  {
    n: "02",
    icon: Sprout,
    title: "Grow the Base Model",
    body: "The specific motion, segments, and plays that drive expansion. Defines how we win.",
  },
];

const SUPPORTING = [
  {
    n: "03",
    icon: ArrowUpRight,
    title: "Expand",
    body: "What we double down on.",
  },
  {
    n: "04",
    icon: XCircle,
    title: "Drop",
    body: "What we exit or stop resourcing.",
  },
  {
    n: "05",
    icon: Wrench,
    title: "Execution Requirements",
    body: "Cross-functional commitments to deliver the plan.",
  },
  {
    n: "06",
    icon: BookOpen,
    title: "Strategic Narrative",
    body: "The story we tell — externally and internally — into FY27.",
  },
];

function FlowChip({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 12.5,
        fontWeight: 700,
        color: NAVY_DARK,
        padding: "6px 12px",
        borderRadius: 999,
        background: "#FFFFFF",
        border: `1px solid ${BLUE}55`,
      }}
    >
      {label}
    </span>
  );
}

export default function FutureDecisionsRoadmapSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  const flow = [
    "Right ICP",
    "Better Retention",
    "Higher NRR",
    "Customer Value ↑",
    "Enterprise Value ↑",
  ];

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
          padding: "24px 72px 0",
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
            marginBottom: 8,
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
            06
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
            Decisions
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
          Decisions We Must Leave With.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15.5,
            color: BODY,
            margin: "6px auto 0",
            maxWidth: 1100,
            lineHeight: 1.5,
          }}
        >
          The roadmap for the next two days.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "16px 56px 8px",
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
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "10px 14px",
            borderRadius: 12,
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F1F5FB 100%)",
            border: `1px solid ${BLUE}33`,
            flexWrap: "wrap",
          }}
        >
          {flow.map((label, i) => (
            <span
              key={label}
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <FlowChip label={label} />
              {i < flow.length - 1 && (
                <ArrowRight size={14} color={BLUE} strokeWidth={2.2} />
              )}
            </span>
          ))}
        </div>

        <div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
              marginBottom: 8,
            }}
          >
            Primary decisions
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {PRIMARY.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.16 + i * 0.06 }}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderTop: `5px solid ${BLUE}`,
                    borderRadius: 12,
                    padding: "14px 18px",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    boxShadow: "0 4px 14px rgba(6,26,55,0.05)",
                    position: "relative",
                  }}
                >
                  <span
                    className="font-heading"
                    style={{
                      position: "absolute",
                      top: 6,
                      right: 12,
                      fontSize: 36,
                      fontWeight: 700,
                      color: BLUE,
                      opacity: 0.12,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {p.n}
                  </span>
                  <span
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: BLUE_SOFT,
                      border: `1px solid ${BLUE}`,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={BLUE} strokeWidth={2.2} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h2
                      className="font-heading"
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: NAVY_DARK,
                        margin: 0,
                        lineHeight: 1.15,
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {p.title}
                    </h2>
                    <p
                      style={{
                        margin: "4px 0 0",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 13,
                        color: BODY,
                        lineHeight: 1.45,
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
              marginBottom: 8,
            }}
          >
            Supporting decisions
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
              flex: 1,
              minHeight: 0,
            }}
          >
            {SUPPORTING.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.28 + i * 0.05 }}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderTop: `4px solid ${BLUE}`,
                    borderRadius: 12,
                    padding: "12px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    boxShadow: "0 4px 14px rgba(6,26,55,0.04)",
                    position: "relative",
                    minHeight: 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 9,
                        background: BLUE_SOFT,
                        border: `1px solid ${BLUE}`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color={BLUE} strokeWidth={2.2} />
                    </span>
                    <span
                      className="font-heading"
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: BLUE,
                        opacity: 0.6,
                        letterSpacing: "-0.01em",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {p.n}
                    </span>
                  </div>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: 15.5,
                      fontWeight: 700,
                      color: NAVY_DARK,
                      margin: 0,
                      lineHeight: 1.2,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 12.5,
                      color: BODY,
                      lineHeight: 1.4,
                    }}
                  >
                    {p.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 18px",
            borderRadius: 10,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}33`,
          }}
        >
          <AlertTriangle size={15} color={BLUE} strokeWidth={2.4} />
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              color: NAVY_DARK,
              lineHeight: 1.45,
              flex: 1,
            }}
          >
            We do not leave this session without clear answers on all six. If we
            cannot decide, we must <strong>agree on how we decide — and by
            when</strong>.
          </p>
        </div>

        <SessionSectionNav active="decisions" />
      </motion.main>

      <footer
        style={{
          padding: "0 72px 12px",
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
        FY27 Strategic Planning · Day 1 · Decisions
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
