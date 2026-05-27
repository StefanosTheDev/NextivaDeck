"use client";

import { motion } from "framer-motion";

const NAVY = "#1A447C";
const BLUE = "#2860B2";
const NAVY_DARK = "#061A37";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

interface Priority {
  num: string;
  title: string;
  body: string;
}

const PRIORITIES: Priority[] = [
  {
    num: "01",
    title: "Focus on core business",
    body: "Emphasis on strengthening the existing customer base, particularly the $350 million NextOS platform, and driving AI adoption internally.",
  },
  {
    num: "02",
    title: "AI acceleration",
    body: "Accelerate the AI business by cross-selling into the existing customer base.",
  },
  {
    num: "03",
    title: "Productivity",
    body: "Continuous acceleration of efficiencies that deliver more value to customers while improving our cost structure.",
  },
  {
    num: "04",
    title: "Hypothesis-driven growth",
    body: "When evaluating partnerships, deals, and market opportunities, there should be a clear hypothesis being tested.",
  },
];

export default function FutureInternalPrioritiesStrategySlide({
  slideNumber: _sn,
}: {
  slideNumber?: number;
}) {
  return (
    <div className="slide" style={{ background: "#FFFFFF", color: NAVY_DARK }}>
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <p
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
          }}
        >
          Internal alignment
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.08,
            marginTop: 12,
          }}
        >
          Internal priorities and strategy
        </h1>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            marginTop: 22,
            borderRadius: 2,
          }}
        />
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "28px 100px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          justifyContent: "center",
          minHeight: 0,
        }}
      >
        {PRIORITIES.map((row, idx) => (
          <motion.div
            key={row.num}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 + idx * 0.06 }}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 4px 1fr",
              alignItems: "stretch",
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: 6,
              padding: "16px 0",
              minHeight: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 52,
                fontWeight: 700,
                color: BLUE,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {row.num}
            </div>

            <div
              style={{
                background: BLUE,
                width: 3,
                alignSelf: "stretch",
                justifySelf: "center",
                borderRadius: 1,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 28px 0 24px",
                gap: 6,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: NAVY_DARK,
                  lineHeight: 1.2,
                  letterSpacing: "-0.005em",
                }}
              >
                {row.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  color: BODY,
                  lineHeight: 1.45,
                  maxWidth: 1180,
                }}
              >
                {row.body}
              </p>
            </div>
          </motion.div>
        ))}
      </main>

      <footer
        style={{
          padding: "10px 100px 22px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Future project · Internal priorities
      </footer>
    </div>
  );
}
