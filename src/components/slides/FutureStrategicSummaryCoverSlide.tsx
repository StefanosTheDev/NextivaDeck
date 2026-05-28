"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Gauge } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

type Pillar = {
  num: string;
  title: string;
  tagline: string;
  icon: typeof Sparkles;
};

const PILLARS: Pillar[] = [
  {
    num: "01",
    title: "Grow the base",
    tagline: "Protect, expand and monetize the customer base we already have.",
    icon: Sparkles,
  },
  {
    num: "02",
    title: "More productive organization",
    tagline:
      "Compound efficiency — more value to customers, lower cost to serve.",
    icon: Gauge,
  },
  {
    num: "03",
    title: "Acceleration of Growth",
    tagline:
      "Win new markets through disciplined, hypothesis-driven bets.",
    icon: TrendingUp,
  },
];

export default function FutureStrategicSummaryCoverSlide({
  slideNumber: _sn,
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
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1400,
          height: 1400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 100px 0",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          gap: 28,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
            fontSize: 20,
            letterSpacing: "0.22em",
          }}
        >
          Where we&apos;re going
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading"
          style={{
            fontSize: 132,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Strategic Summary.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 24,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.4,
            maxWidth: 1180,
            margin: 0,
          }}
        >
          Three pillars · one direction —{" "}
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
            protect the base, compound productivity, accelerate growth
          </strong>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            width: 128,
            height: 5,
            background: BLUE,
            borderRadius: 2,
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
            width: "100%",
            maxWidth: 1280,
            marginTop: 16,
          }}
        >
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `4px solid ${BLUE}`,
                  borderRadius: 10,
                  padding: "24px 24px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: BLUE_SOFT,
                      border: `1px solid ${BLUE}`,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={BLUE} strokeWidth={2} />
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: BLUE,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    Pillar {p.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    margin: 0,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: BODY,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {p.tagline}
                </p>
              </motion.article>
            );
          })}
        </div>
      </main>

      <footer
        style={{
          padding: "12px 100px 24px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        Strategic Summary · Nextiva FY27
      </footer>
    </div>
  );
}
