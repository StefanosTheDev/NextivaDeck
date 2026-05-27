"use client";

import { motion } from "framer-motion";
import { Compass, CheckCircle2 } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";
const GROWTH = "#1E7E5E";

interface Indicator {
  metric: string;
  label: string;
  source: string;
}

const LEADING: Indicator[] = [
  {
    metric: "100% booking attainment",
    label: "Predictably meet quarterly booking targets — SB & Platform",
    source: "Bookings discipline",
  },
  {
    metric: "1.6% → 1.4%",
    label: "Bring blended monthly churn down",
    source: "Retention quality",
  },
  {
    metric: "≥ 95% in 90 days",
    label: "SB & Platform bookings convert to recognized revenue",
    source: "Bookings → revenue",
  },
  {
    metric: "XBert AI Growth · TBD",
    label: "Acquire XBert customers via sales + e-commerce marketing",
    source: "Product-led GTM",
  },
  {
    metric: "AI in the installed base",
    label: "Focus on penetrating existing Nextiva customers with AI capabilities",
    source: "Installed base growth",
  },
];

const LAGGING: Indicator[] = [
  {
    metric: "$87M → $92M",
    label: "Quarterly revenue (Q1'25 → Q4'27)",
    source: "ARR run-rate",
  },
  {
    metric: "67% → 74%",
    label: "Gross margin · up ~700 bps from FY25 entry",
    source: "ARR & gross margin trend",
  },
  {
    metric: "91% → 94%",
    label: "Net revenue retention (FY25 → FY27)",
    source: "Retention & churn",
  },
  {
    metric: "1% → 26%",
    label: "EBITDA margin · $100M annualized at FY27 Q4 exit",
    source: "Cash flow trends",
  },
  {
    metric: "≥ 3× · ≥ 3.5× · ≥ 3×",
    label: "LTV:CAC — Blended · VSB · Platform",
    source: "Unit economics targets",
  },
];

interface ColumnProps {
  kind: "leading" | "lagging";
  title: string;
  caption: string;
  items: Indicator[];
}

function IndicatorColumn({ kind, title, caption, items }: ColumnProps) {
  const accent = kind === "leading" ? BLUE : NAVY;
  const Icon = kind === "leading" ? Compass : CheckCircle2;
  const metricColor = kind === "leading" ? BLUE : GROWTH;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, minHeight: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: BLUE_SOFT,
            border: `1px solid ${accent}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={22} color={accent} strokeWidth={2} />
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            className="eyebrow"
            style={{ color: accent, margin: 0, fontSize: 13, letterSpacing: "0.18em" }}
          >
            {kind === "leading" ? "Leading indicators" : "Lagging indicators"}
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 26,
              fontWeight: 700,
              color: NAVY_DARK,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {title}
          </h2>
        </div>
      </div>

      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 14,
          color: BODY,
          lineHeight: 1.45,
          margin: 0,
        }}
      >
        {caption}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: kind === "leading" ? -12 : 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + idx * 0.06 }}
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderLeft: `3px solid ${accent}`,
              borderRadius: 6,
              padding: "14px 18px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: metricColor,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                {item.metric}
              </span>
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
                {item.source}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: NAVY_DARK,
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function FutureLeadingLaggingIndicatorsSlide({
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
        style={{ padding: "44px 100px 0", flexShrink: 0 }}
      >
        <p
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
          }}
        >
          Financial Indicators
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.08,
            marginTop: 12,
          }}
        >
          What predicts growth · what proves it
        </h1>
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
          padding: "26px 100px 16px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "start",
          minHeight: 0,
        }}
      >
        <IndicatorColumn
          kind="leading"
          title="What we need to prove"
          caption="Predictive signals from the funnel, the installed base, and trust. Move these and revenue follows."
          items={LEADING}
        />
        <IndicatorColumn
          kind="lagging"
          title="What we need to deliver"
          caption="They confirm that the leading moves landed."
          items={LAGGING}
        />
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
        Financial Indicators · Leading &amp; Lagging
      </footer>
    </div>
  );
}
