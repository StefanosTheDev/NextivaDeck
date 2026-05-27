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
const GROWTH = "#1E7E5E";

const churnCards = [
  {
    label: "<$500 AVG MONTHLY\nCHURN FIRST 12 MO",
    value: "1.36%",
    color: NAVY_DARK,
    detail: "Blended 2021-2025 · net MRR loss",
  },
  {
    label: ">$500 AVG MONTHLY\nCHURN FIRST 12 MO",
    value: "\u20130.24%",
    color: GROWTH,
    detail: "Blended 2021-2025 · net MRR expansion",
  },
  {
    label: "<$500 BLENDED MONTHLY\nCHURN MO 0\u219253",
    value: "1.07%",
    color: NAVY_DARK,
    detail: "Blended 2021-2025 · 100.0%\n\u2192 56.5%",
  },
  {
    label: ">$500 BLENDED MONTHLY\nCHURN MO 0\u219253",
    value: "0.41%",
    color: GROWTH,
    detail: "Blended 2021-2025 · 100.0%\n\u2192 80.4%",
  },
];

export default function FutureNRRChurnCopyCopySlide({
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
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
            fontSize: 14,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Retention trends
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: NAVY,
            marginTop: 10,
            lineHeight: 1.12,
          }}
        >
          Churn and retention both improving across segments.
        </h1>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            margin: "14px auto 0",
            borderRadius: 2,
          }}
        />
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "24px 100px",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            padding: "32px 48px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: CARD_BG,
            border: `1px solid ${CARD_BORDER}`,
            borderTop: `3px solid ${BLUE}`,
            borderRadius: 12,
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: BLUE,
              margin: 0,
            }}
          >
            Net revenue retention
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              margin: "16px 0",
            }}
          >
            <span
              className="font-heading"
              style={{ fontSize: 56, fontWeight: 700, color: MUTED }}
            >
              91%
            </span>
            <span style={{ fontSize: 40, color: GROWTH }}>↑</span>
            <span
              className="font-heading"
              style={{ fontSize: 56, fontWeight: 700, color: NAVY }}
            >
              94%
            </span>
          </div>
          <p
            style={{
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: MUTED,
              margin: 0,
            }}
          >
            FY25 → FY27
          </p>
          <p style={{ fontSize: 18, color: BODY, margin: "10px 0 0", lineHeight: 1.5 }}>
            Expanding through upsell and cross-sell.
          </p>
        </motion.article>

        <div style={{ display: "flex", gap: 16 }}>
          {churnCards.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={{
                flex: 1,
                padding: "26px 20px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderTop: `3px solid ${BLUE}`,
                borderRadius: 12,
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: MUTED,
                  margin: 0,
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {c.label}
              </p>
              <p
                className="font-heading"
                style={{
                  fontSize: 42,
                  fontWeight: 700,
                  color: c.color,
                  margin: "12px 0 0",
                  lineHeight: 1,
                }}
              >
                {c.value}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: BODY,
                  margin: "10px 0 0",
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {c.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.main>

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
        Retention &amp; Churn · NRR 91% → 94%
      </footer>
    </div>
  );
}
