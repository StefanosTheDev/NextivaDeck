"use client";

import { motion } from "framer-motion";
import { FlaskConical, TrendingUp, Sprout, XCircle, type LucideIcon } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";
const GROWTH = "#1E7E5E";
const GROWTH_SOFT = "#E6F2EC";
const GOLD = "#B8860B";
const GOLD_SOFT = "#FBF3E0";
const DROP = "#7A6A66";
const DROP_SOFT = "#EFEBE8";

interface Quadrant {
  key: string;
  label: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  accentSoft: string;
  description: string;
  helper: string;
}

const QUADRANTS: Quadrant[] = [
  {
    key: "test",
    label: "01 · Test",
    title: "Test new opportunities",
    icon: FlaskConical,
    accent: BLUE,
    accentSoft: BLUE_SOFT,
    description:
      "Run small, hypothesis-driven bets in adjacent spaces. Time-boxed, low-cost, clear success criteria — keep the option open.",
    helper: "Posture: explore",
  },
  {
    key: "expand",
    label: "02 · Expand",
    title: "Expand on what's already working",
    icon: TrendingUp,
    accent: GROWTH,
    accentSoft: GROWTH_SOFT,
    description:
      "Where the proof is in — installed base, attach, AI gateways — pour fuel on it. More investment, sharper focus, faster motion.",
    helper: "Posture: accelerate",
  },
  {
    key: "harvest",
    label: "03 · Harvest",
    title: "Harvest opportunities in motion",
    icon: Sprout,
    accent: GOLD,
    accentSoft: GOLD_SOFT,
    description:
      "Operate the steady-state businesses for margin and cash. Take the yield, defend the position, redeploy the proceeds.",
    helper: "Posture: monetize",
  },
  {
    key: "drop",
    label: "04 · Drop",
    title: "Drop what doesn't fit",
    icon: XCircle,
    accent: DROP,
    accentSoft: DROP_SOFT,
    description:
      "Step away from work where we don't have the skill, the timing, or the focus. Free up energy, money, and attention for the other three.",
    helper: "Posture: exit",
  },
];

function QuadrantCard({ q, idx }: { q: Quadrant; idx: number }) {
  const Icon = q.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderTop: `4px solid ${q.accent}`,
        borderRadius: 10,
        padding: "26px 28px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: q.accentSoft,
              border: `1px solid ${q.accent}`,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={22} color={q.accent} strokeWidth={2} />
          </span>
          <span
            className="eyebrow"
            style={{
              color: q.accent,
              margin: 0,
              fontSize: 12,
              letterSpacing: "0.18em",
            }}
          >
            {q.label}
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: MUTED,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {q.helper}
        </span>
      </div>

      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 26,
          fontWeight: 700,
          color: NAVY_DARK,
          lineHeight: 1.18,
          letterSpacing: "-0.005em",
          margin: 0,
        }}
      >
        {q.title}
      </h2>

      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 16,
          fontWeight: 400,
          color: BODY,
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {q.description}
      </p>
    </motion.article>
  );
}

export default function FutureOpportunityPortfolioSlide({
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
        style={{ padding: "40px 100px 0", flexShrink: 0 }}
      >
        <p className="eyebrow" style={{ color: BLUE, margin: 0 }}>
          Open the Conversation
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.08,
            marginTop: 12,
          }}
        >
          Where do we test, expand, harvest, or drop?
        </h1>
        <p
          style={{
            marginTop: 10,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 20,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.4,
            maxWidth: 1320,
          }}
        >
          A frame for the team to debate where each opportunity sits —{" "}
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
            and how we choose to spend our next dollar and hour
          </strong>
          .
        </p>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            marginTop: 18,
            borderRadius: 2,
          }}
        />
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "28px 100px 22px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 20,
          alignItems: "stretch",
          minHeight: 0,
        }}
      >
        {QUADRANTS.map((q, idx) => (
          <QuadrantCard key={q.key} q={q} idx={idx} />
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
        Opportunity Portfolio · Test · Expand · Harvest · Drop
      </footer>
    </div>
  );
}
