"use client";

import { motion } from "framer-motion";

const NAVY = "#1A447C";
const BLUE = "#2860B2";
const NAVY_DARK = "#061A37";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

interface Rule {
  num: string;
  title: string;
  body: string;
}

const RULES: Rule[] = [
  {
    num: "01",
    title: "Narrow the product focus",
    body: "There is only so much we can do well. Concentrate effort on the bets that move the needle and stop spreading resources thin.",
  },
  {
    num: "02",
    title: "Full team alignment behind the bets",
    body: "Product, sales, ops, and BT need to be in lockstep — same priorities, same sequencing, same definition of done.",
  },
  {
    num: "03",
    title: "Revenue is everyone's job",
    body: "Bring the same momentum we built behind EBITDA, and broaden accountability for revenue and bookings delivery to every function in the business.",
  },
];

export default function RulesOfEngagementSlide({ slideNumber: _sn }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "#FFFFFF", color: NAVY_DARK }}>
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "64px 100px 0", flexShrink: 0 }}
      >
        <p
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
          }}
        >
          Strategic Discussion
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.1,
            marginTop: 14,
          }}
        >
          Rules of engagement
        </h1>
        <p
          style={{
            marginTop: 10,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 30,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.25,
            letterSpacing: "-0.005em",
          }}
        >
          for our strategic meeting
        </p>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            marginTop: 28,
            borderRadius: 2,
          }}
        />
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "44px 100px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {RULES.map((rule, idx) => (
          <motion.div
            key={rule.num}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "130px 4px 1fr",
              alignItems: "stretch",
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: 6,
              padding: "24px 0",
              minHeight: 128,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 64,
                fontWeight: 700,
                color: BLUE,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {rule.num}
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
                padding: "0 36px 0 32px",
                gap: 10,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: NAVY_DARK,
                  lineHeight: 1.2,
                  letterSpacing: "-0.005em",
                }}
              >
                {rule.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 19,
                  fontWeight: 400,
                  color: BODY,
                  lineHeight: 1.5,
                  maxWidth: 1180,
                }}
              >
                {rule.body}
              </p>
            </div>
          </motion.div>
        ))}
      </main>

      <footer
        style={{
          padding: "12px 100px 28px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Strategic Discussion
      </footer>
    </div>
  );
}
