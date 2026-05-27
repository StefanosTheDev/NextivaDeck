"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Cpu,
  Gauge,
  Wallet,
  Repeat,
  Shield,
  Users,
  Layers,
} from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";
const GROWTH = "#1E7E5E";

interface WatchItem {
  icon: typeof TrendingUp;
  topic: string;
  headline: string;
  detail: string;
  metrics: string[];
}

const ITEMS: WatchItem[] = [
  {
    icon: TrendingUp,
    topic: "Revenue & Gross Margin",
    headline: "Durable growth at expanding margins",
    detail:
      "Quarterly revenue climbs through FY27 while gross margin steps up on AI leverage and platform mix.",
    metrics: ["$87M → $92M / Q", "GM 67% → 74%"],
  },
  {
    icon: Cpu,
    topic: "AI Revenue Mix",
    headline: "AI moves from feature to revenue engine",
    detail:
      "AI gateways scale and embedded AI is activated across the installed base, opening tokenized AI-outcomes revenue.",
    metrics: ["Installed base activation 17% → 62%", "Gateways 22–28% of revenue"],
  },
  {
    icon: Gauge,
    topic: "Operating Leverage",
    headline: "Permanent productivity gains",
    detail:
      "Revenue per head and per R&D head step-change as AI compounds productivity across the organization.",
    metrics: ["Rev/Head $255K → $563K", "Rev/R&D $921K → $2.6M"],
  },
  {
    icon: Wallet,
    topic: "Cash Flow & EBITDA",
    headline: "Margin expansion and cash conversion",
    detail:
      "Adj. EBITDA margin scales toward FY27 exit; free cash flow conversion approaches 90% with low capex.",
    metrics: ["EBITDA 1% → 26% · $100M annualized", "FCF conv. 20% → 88%"],
  },
  {
    icon: Repeat,
    topic: "Customer Expansion",
    headline: "Customers expand materially after signup",
    detail:
      "Organic user growth and product attach drive MRR expansion across cohorts.",
    metrics: ["1.48× MRR vs. signup", "72.5% of customers expand"],
  },
  {
    icon: Shield,
    topic: "Retention & Churn",
    headline: "NRR rising · churn improving across segments",
    detail:
      "Net revenue retention strengthens and >$500 cohorts show net MRR expansion.",
    metrics: ["NRR 91% → 94%", ">$500 cohort: net expansion"],
  },
  {
    icon: Users,
    topic: "Bookings Mix",
    headline: "Healthy mix of bookings — new vs. existing customers",
    detail:
      "Bookings balanced across acquiring new logos and expanding within the installed base, de-risking growth.",
    metrics: ["New + existing in balance"],
  },
  {
    icon: Layers,
    topic: "Revenue Mix",
    headline: "From pure subscription to a diversified revenue model",
    detail:
      "Revenue base broadens from monolithic subscription into a healthy mix of platform, usage, interaction, and outcome-based streams.",
    metrics: ["Sub · Platform · Usage", "Interaction · Outcome"],
  },
];

function WatchCard({ item, index }: { item: WatchItem; index: number }) {
  const Icon = item.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 + index * 0.06 }}
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderLeft: `3px solid ${BLUE}`,
        borderRadius: 8,
        padding: "16px 18px",
        display: "grid",
        gridTemplateColumns: "44px 1fr",
        gap: 14,
        alignItems: "start",
        minHeight: 0,
      }}
    >
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

      <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
        <p
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
            fontSize: 11,
            letterSpacing: "0.14em",
          }}
        >
          {item.topic}
        </p>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: NAVY_DARK,
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {item.headline}
        </h3>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13,
            color: BODY,
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {item.detail}
        </p>
        <ul
          style={{
            listStyle: "none",
            margin: "4px 0 0",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {item.metrics.map((m) => (
            <li
              key={m}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: GROWTH,
                lineHeight: 1.3,
              }}
            >
              · {m}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function FutureInvestorWatchCoverSlide({
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
          Financial Indicators · What the room will watch
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.08,
            marginTop: 10,
          }}
        >
          What investors, lenders &amp; bankers will watch
        </h1>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            marginTop: 14,
            borderRadius: 2,
          }}
        />
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "20px 100px 12px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridAutoRows: "1fr",
          columnGap: 20,
          rowGap: 14,
          minHeight: 0,
        }}
      >
        {ITEMS.map((it, i) => (
          <WatchCard key={it.topic} item={it} index={i} />
        ))}
      </main>

      <footer
        style={{
          padding: "8px 100px 20px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Cover · Revenue · AI Mix · Leverage · Cash · Expansion · Retention
      </footer>
    </div>
  );
}
