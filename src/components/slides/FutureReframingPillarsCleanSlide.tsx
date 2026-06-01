"use client";

import { motion } from "framer-motion";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

interface Pillar {
  num: string;
  title: string;
  description: React.ReactNode;
}

const PILLARS: Pillar[] = [
  {
    num: "01",
    title: "Grow the Base",
    description: (
      <>
        Shift from{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
          &ldquo;Protect the Base&rdquo;
        </strong>{" "}
        to an expansion mindset across the installed base.
      </>
    ),
  },
  {
    num: "02",
    title: "More Productive Organization",
    description: (
      <>
        Focus on efficiency and the metrics that matter —{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>LTV : CAC</strong> and{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>gross margin</strong>.
      </>
    ),
  },
  {
    num: "03",
    title: "Accelerate Growth",
    description: (
      <>
        Drive{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>new bookings</strong>{" "}
        through targeted growth initiatives.
      </>
    ),
  },
];

export default function FutureReframingPillarsCleanSlide({
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
        style={{ padding: "64px 100px 0", flexShrink: 0 }}
      >
        <p className="eyebrow" style={{ color: BLUE, margin: 0 }}>
          Strategic Reframe
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.1,
            marginTop: 14,
          }}
        >
          Reframing strategic pillars
        </h1>
        <p
          style={{
            marginTop: 10,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 26,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.3,
            letterSpacing: "-0.005em",
            maxWidth: 1180,
          }}
        >
          Where we&apos;re putting our growth bets.
        </p>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            marginTop: 26,
            borderRadius: 2,
          }}
        />
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "56px 100px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 28,
          alignItems: "stretch",
          alignContent: "stretch",
        }}
      >
        {PILLARS.map((p, idx) => (
          <motion.article
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderTop: `4px solid ${BLUE}`,
              borderRadius: 8,
              padding: "44px 44px 48px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 76,
                  fontWeight: 700,
                  color: BLUE,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {p.num}
              </span>
              <span
                style={{
                  flex: 1,
                  height: 2,
                  background: BLUE_SOFT,
                  borderRadius: 1,
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 34,
                fontWeight: 700,
                color: NAVY_DARK,
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              {p.title}
            </h2>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 22,
                fontWeight: 400,
                color: BODY,
                lineHeight: 1.55,
                margin: 0,
                marginTop: "auto",
              }}
            >
              {p.description}
            </p>
          </motion.article>
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
        Strategic Reframe
      </footer>
    </div>
  );
}
