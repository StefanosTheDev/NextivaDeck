"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  Sparkles,
  Gauge,
  Wallet,
  TrendingUp,
  FlaskConical,
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
};

const HIGHLIGHTS: Priority[] = [
  {
    key: "core-business",
    title: "Focus on the core business",
    icon: Anchor,
    description: (
      <>
        Strengthen the existing base — especially the{" "}
        <strong style={{ color: NAVY_DARK }}>$350M NextOS platform</strong>{" "}
        — and drive AI adoption inside Nextiva first.
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
        installed base and embedding AI across all surfaces.
      </>
    ),
  },
  {
    key: "productivity",
    title: "Productivity",
    icon: Gauge,
    description: (
      <>
        Compound efficiencies that deliver{" "}
        <strong style={{ color: NAVY_DARK }}>more value</strong> to customers
        and <strong style={{ color: NAVY_DARK }}>lower our cost</strong> — at
        the same time.
      </>
    ),
  },
];

const SECONDARY: Priority[] = [
  {
    key: "unit-economics",
    title: "Disciplined unit economics",
    icon: Wallet,
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
    description: (
      <>
        Revenue per head climbs from{" "}
        <strong style={{ color: NAVY_DARK }}>$255K → $563K</strong> and EBITDA
        margin to <strong style={{ color: NAVY_DARK }}>26% at FY27 Q4 exit</strong>.
      </>
    ),
  },
  {
    key: "hypothesis-driven",
    title: "Hypothesis-driven growth",
    icon: FlaskConical,
    description: (
      <>
        Every partnership, deal, and market opportunity is tested against a{" "}
        <strong style={{ color: NAVY_DARK }}>clear hypothesis</strong> — so we
        invest only behind what proves to be productive.
      </>
    ),
  },
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
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderTop: `4px solid ${BLUE}`,
        borderRadius: 8,
        padding: "24px 28px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        gridColumn,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
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
          fontSize: 16,
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

export default function FutureProductiveOrganizationSummarySlide({
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
          Pillar 02 · Summary
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.1,
            marginTop: 12,
          }}
        >
          Internal priorities → More productive organization
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
          Where we focus internally — and{" "}
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
            marginTop: 18,
            borderRadius: 2,
          }}
        />
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "28px 100px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "1fr 1fr",
          gap: 20,
        }}
      >
        {HIGHLIGHTS.map((p, idx) => (
          <PriorityCard
            key={p.key}
            p={p}
            delay={0.15 + idx * 0.07}
            gridColumn="span 2"
          />
        ))}
        {SECONDARY.map((p, idx) => (
          <PriorityCard
            key={p.key}
            p={p}
            delay={0.4 + idx * 0.07}
            gridColumn="span 2"
          />
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
        Pillar 02 · More Productive Organization · Summary
      </footer>
    </div>
  );
}
