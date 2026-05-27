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

const PILLAR_NUM = "03";
const PILLAR_LABEL = "Strategic Pillar 03";
const PILLAR_TITLE = "Acceleration of Growth";

const SUPPORTING = [
  {
    eyebrow: "New bookings",
    body: (
      <>
        Drive{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>new bookings</strong>{" "}
        through targeted growth initiatives — predictably meeting{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
          100% booking attainment
        </strong>{" "}
        across SB &amp; Platform.
      </>
    ),
  },
  {
    eyebrow: "Bookings → revenue",
    body: (
      <>
        SB &amp; Platform bookings convert at{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
          ≥ 95% to recognized revenue
        </strong>{" "}
        within 90 days.
      </>
    ),
  },
  {
    eyebrow: "Healthy mix",
    body: (
      <>
        Acquire{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>XBert AI</strong> customers at
        scale through sales + e-commerce marketing, while keeping a healthy{" "}
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>new + existing</strong> bookings mix.
      </>
    ),
  },
];

export default function FutureAccelerationGrowthCoverSlide({
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
        style={{ padding: "56px 100px 0", flexShrink: 0 }}
      >
        <p className="eyebrow" style={{ color: BLUE, margin: 0 }}>
          {PILLAR_LABEL}
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            marginTop: 18,
          }}
        >
          {PILLAR_TITLE}.
        </h1>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            marginTop: 24,
            borderRadius: 2,
          }}
        />
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "minmax(260px, 380px) 1fr",
          gap: 56,
          padding: "44px 100px 32px",
          alignItems: "stretch",
          minHeight: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: CARD_BG,
            border: `1px solid ${CARD_BORDER}`,
            borderTop: `4px solid ${BLUE}`,
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 28px",
            gap: 20,
            minHeight: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 220,
              fontWeight: 700,
              color: BLUE,
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {PILLAR_NUM}
          </span>
          <span
            style={{
              width: 72,
              height: 4,
              background: BLUE_SOFT,
              borderRadius: 2,
            }}
          />
          <p
            className="eyebrow"
            style={{
              color: BLUE,
              margin: 0,
              fontSize: 14,
              letterSpacing: "0.18em",
              textAlign: "center",
            }}
          >
            Pillar of Three
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, minHeight: 0 }}>
          {SUPPORTING.map((s, idx) => (
            <motion.div
              key={s.eyebrow}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.25 + idx * 0.08 }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
                borderRadius: 10,
                padding: "22px 26px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 0,
              }}
            >
              <p
                className="eyebrow"
                style={{
                  color: BLUE,
                  margin: 0,
                  fontSize: 12,
                  letterSpacing: "0.14em",
                }}
              >
                {s.eyebrow}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 20,
                  fontWeight: 400,
                  color: BODY,
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer
        style={{
          padding: "10px 100px 24px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Strategic Reframe · Pillar 03 of 03
      </footer>
    </div>
  );
}
