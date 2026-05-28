"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  Sparkles,
  Gauge,
  Wallet,
  TrendingUp,
  Plus,
} from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

type Priority = {
  key: string;
  title: string;
  icon: typeof Anchor;
  description: React.ReactNode;
  highlight?: boolean;
};

const REAL: Priority[] = [
  {
    key: "core-business",
    title: "Focus on core business",
    icon: Anchor,
    description: (
      <>
        Strengthen the existing customer base — especially the{" "}
        <strong style={{ color: NAVY_DARK }}>$350M NextOS platform</strong>{" "}
        — and drive AI adoption internally.
      </>
    ),
  },
  {
    key: "ai-acceleration",
    title: "AI acceleration",
    icon: Sparkles,
    description: (
      <>
        Accelerate the AI business by{" "}
        <strong style={{ color: NAVY_DARK }}>cross-selling</strong> into our
        existing customer base.
      </>
    ),
  },
  {
    key: "productivity",
    title: "Productivity",
    icon: Gauge,
    highlight: true,
    description: (
      <>
        Compound efficiencies that deliver{" "}
        <strong style={{ color: NAVY_DARK }}>more value</strong> to customers
        and <strong style={{ color: NAVY_DARK }}>lower our cost</strong> — at
        the same time.
      </>
    ),
  },
  {
    key: "unit-economics",
    title: "Disciplined unit economics",
    icon: Wallet,
    highlight: true,
    description: (
      <>
        Hold{" "}
        <strong style={{ color: NAVY_DARK }}>LTV : CAC ≥ 3×</strong> blended,
        ≥ 3.5× VSB, ≥ 3× platform — and grow{" "}
        <strong style={{ color: NAVY_DARK }}>gross margin to 74%</strong>.
      </>
    ),
  },
  {
    key: "operating-leverage",
    title: "Operating leverage",
    icon: TrendingUp,
    highlight: true,
    description: (
      <>
        Revenue per head climbs from{" "}
        <strong style={{ color: NAVY_DARK }}>$255K → $563K</strong> and EBITDA
        margin to <strong style={{ color: NAVY_DARK }}>26% at FY27 Q4 exit</strong>.
      </>
    ),
  },
];

const PLACEHOLDERS: Priority[] = [
  { key: "ph-last", title: "Acceleration of Growth", icon: Plus, description: <></> },
];

function PriorityCard({
  p,
  delay,
  gridColumn,
}: {
  p: Priority;
  delay: number;
  gridColumn?: string;
}) {
  const Icon = p.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{
        background: p.highlight ? BLUE_SOFT : CARD_BG,
        border: p.highlight ? `1px solid ${BLUE}` : `1px solid ${CARD_BORDER}`,
        borderTop: p.highlight ? `6px solid ${BLUE}` : `4px solid ${BLUE}`,
        borderRadius: 8,
        padding: "28px 30px 30px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        gridColumn,
        boxShadow: p.highlight
          ? "0 6px 22px rgba(40,96,178,0.16)"
          : undefined,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            width: 48,
            height: 48,
            borderRadius: 11,
            background: p.highlight ? "#FFFFFF" : BLUE_SOFT,
            border: `1px solid ${BLUE}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={24} color={BLUE} strokeWidth={2} />
        </span>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 26,
            fontWeight: 700,
            color: NAVY_DARK,
            lineHeight: 1.2,
            letterSpacing: "-0.005em",
            margin: 0,
          }}
        >
          {p.title}
        </h3>
      </div>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 18,
          fontWeight: 400,
          color: BODY,
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {p.description}
      </p>
    </motion.article>
  );
}

function PlaceholderCard({
  p,
  delay,
  gridColumn,
}: {
  p: Priority;
  delay: number;
  gridColumn?: string;
}) {
  const Icon = p.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{
        background: "transparent",
        border: `2px dashed ${BLUE}55`,
        borderRadius: 8,
        padding: "28px 30px 30px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        gridColumn,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            width: 48,
            height: 48,
            borderRadius: 11,
            background: "transparent",
            border: `2px dashed ${BLUE}55`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={24} color={BLUE} strokeWidth={2} />
        </span>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 26,
            fontWeight: 700,
            color: MUTED,
            lineHeight: 1.2,
            letterSpacing: "-0.005em",
            margin: 0,
          }}
        >
          {p.title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function FuturePillar02PrioritiesSlide({
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
        <p className="eyebrow" style={{ color: BLUE, margin: 0 }}>
          Pillar 02 · More productive organization
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.1,
            marginTop: 14,
          }}
        >
          Internal priorities &amp; strategy
        </h1>
        <p
          style={{
            marginTop: 12,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.4,
            maxWidth: 1320,
          }}
        >
          Where we focus — and{" "}
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
            how those choices show up as productivity
          </strong>
          .
        </p>
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
          padding: "32px 100px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "1fr 1fr",
          gap: 22,
        }}
      >
        {REAL.map((p, idx) => (
          <PriorityCard
            key={p.key}
            p={p}
            delay={0.15 + idx * 0.07}
            gridColumn="span 2"
          />
        ))}
        {PLACEHOLDERS.map((p, idx) => (
          <PlaceholderCard
            key={p.key}
            p={p}
            delay={0.5 + idx * 0.06}
            gridColumn="span 2"
          />
        ))}
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
        Pillar 02 · More productive organization
      </footer>
    </div>
  );
}
