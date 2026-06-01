"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  Target as TargetIcon,
  Database,
  Sparkles,
} from "lucide-react";
import SlideFooter from "../../SlideFooter";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

export type FramingTopic = {
  areaNum: string;
  title: string;
  questions: string[];
  output: string[];
  evidence: string[];
};

function Column({
  Icon,
  label,
  items,
  numbered = false,
}: {
  Icon: typeof HelpCircle;
  label: string;
  items: string[];
  numbered?: boolean;
}) {
  return (
    <article
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderTop: `5px solid ${BLUE}`,
        borderRadius: 14,
        padding: "22px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        boxShadow: "0 6px 20px rgba(6,26,55,0.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            width: 36,
            height: 36,
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
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: BLUE,
          }}
        >
          {label}
        </span>
      </div>
      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {items.map((it, i) => (
          <li
            key={it}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              color: NAVY_DARK,
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              lineHeight: 1.5,
            }}
          >
            {numbered ? (
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  color: BLUE,
                  flexShrink: 0,
                  marginTop: 2,
                  minWidth: 14,
                }}
              >
                {i + 1}
              </span>
            ) : (
              <span
                aria-hidden
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: BLUE,
                  flexShrink: 0,
                  marginTop: 8,
                }}
              />
            )}
            <span>{it}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function DecisionFramingTemplate({
  topic,
  slideNumber = 0,
}: {
  topic: FramingTopic;
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
          padding: "30px 72px 0",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
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
            <Sparkles size={12} color={BLUE} strokeWidth={2.4} />
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
              Decision Area {topic.areaNum} · Decision Framing
            </span>
          </div>
          <h1
            className="font-heading"
            style={{
              fontSize: 50,
              fontWeight: 600,
              color: NAVY_DARK,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {topic.title}.
          </h1>
        </div>

        <span
          className="font-heading"
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: BLUE,
            opacity: 0.12,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            fontVariantNumeric: "tabular-nums",
            flexShrink: 0,
          }}
        >
          {topic.areaNum}
        </span>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "24px 72px 10px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1.1fr",
          gap: 20,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <Column
          Icon={HelpCircle}
          label="Questions"
          items={topic.questions}
          numbered
        />
        <Column
          Icon={TargetIcon}
          label="Output"
          items={topic.output}
        />
        <Column
          Icon={Database}
          label="Evidence Required"
          items={topic.evidence}
        />
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>FY27 Strategic Planning · Decision Framing</span>
        <span style={{ color: BODY, fontWeight: 500 }}>
          Pressure-test before you decide.
        </span>
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
