"use client";

import type { CSSProperties, ReactNode } from "react";
import SlideFooter from "../SlideFooter";

/** Uniform scale — preserves proportions while filling the slide */
const S = 1.12;
const s = (n: number) => Math.round(n * S);

/** Fixed cushion between each card group; middle row flexes to absorb leftover height */
const CUSHION = s(20);

/** Matches the divider under NEXTIVA'S OPPORTUNITY so left callouts align with the right two */
const FALSE_LINE = "1px solid rgba(91,160,224,0.25)";

/** Crowded market — faint reddish “negative” tone, receded vs Nextiva opportunity */
const CROWDED_CARD_STYLE: CSSProperties = {
  border: "1px solid rgba(160,55,55,0.32)",
  borderRadius: 12,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  background: "rgba(90,28,28,0.12)",
  opacity: 0.68,
};
const CROWDED_FALSE_LINE = "1px solid rgba(160,55,55,0.2)";

/** Top metric cards ~2/3 taller (padding); hero / sub-hero / label / foot hierarchy from reference slide */
const TOP_METRIC_BOOST = 5 / 3;
const METRIC_PRIMARY = s(58);
const METRIC_SECONDARY = s(36);
const METRIC_LABEL = s(17);
const METRIC_FOOT = s(13);
const TOP_METRIC_PAD_V = s(Math.round(22 * TOP_METRIC_BOOST));
const TOP_METRIC_PAD_H = s(Math.round(24 * TOP_METRIC_BOOST));

/** Middle row cards — proportional 1.28× type scale to fill flex space */
const MIDDLE_SCALE = 1.28;
const mid = (n: number) => s(Math.round(n * MIDDLE_SCALE));
const MID_SEAT = mid(46);
const MID_TITLE = mid(16);
const MID_SUB = mid(12);
const MID_BODY = mid(12);
const MID_RIBBON_FONT = mid(11);
const MID_RIBBON_PAD_V = mid(6);
const MID_RIBBON_PAD_H = mid(12);
const MID_STATS_PAD_TOP = mid(12);
const MID_STATS_PAD_X = mid(16);
const MID_BODY_PAD_TOP = mid(10);
const MID_BODY_PAD_BOTTOM = mid(14);
const MID_TITLE_GAP = mid(4);
const MID_TITLE_GAP_SM = mid(2);

/** Alignment: fixed blocks so call-out tops line up across all three columns */
const MID_TITLE_LINE_H = Math.ceil(MID_TITLE * 1.25);
const MID_BODY_LINE_H = Math.ceil(MID_BODY * 1.45);
/** Stats block sized for 2-line titles (col 2); cols 1 & 3 get a 1-line spacer */
const MID_STATS_BLOCK_MIN =
  MID_STATS_PAD_TOP +
  Math.ceil(MID_SEAT * 1.05) +
  MID_TITLE_GAP +
  MID_TITLE_LINE_H * 2 +
  MID_TITLE_GAP_SM +
  Math.ceil(MID_SUB * 1.35);
/** Call-out bar height — matches bordered ribbons (cols 1 & 3); col 2 uses same minHeight */
const MID_CALLOUT_MIN_H = MID_RIBBON_PAD_V * 2 + Math.ceil(MID_RIBBON_FONT * 1.2) + 2;
/** Body block fits 3 lines; cols 1 & 3 (2 lines) get a 1-line spacer */
const MID_BODY_BLOCK_MIN = MID_BODY_PAD_TOP + MID_BODY_PAD_BOTTOM + MID_BODY_LINE_H * 3;

const SOURCE_PILL_STYLES = {
  blue: {
    color: "#7EB3E8",
    background: "rgba(91,160,224,0.18)",
    border: "1px solid rgba(91,160,224,0.45)",
  },
  green: {
    color: "#6EE7B7",
    background: "rgba(52,211,153,0.18)",
    border: "1px solid rgba(52,211,153,0.45)",
  },
} as const;

function TopMetricCard({
  primary,
  secondary,
  label,
  foot,
  sourcePill,
  sourcePillTone = "green",
  border,
  footColor,
}: {
  primary: ReactNode;
  secondary: ReactNode;
  label: string;
  foot?: string;
  sourcePill?: string;
  sourcePillTone?: keyof typeof SOURCE_PILL_STYLES;
  border: string;
  footColor?: string;
}) {
  const pillStyle = SOURCE_PILL_STYLES[sourcePillTone];
  return (
    <div
      style={{
        border: `1px solid ${border}`,
        borderRadius: 12,
        padding: sourcePill
          ? `${TOP_METRIC_PAD_V}px ${TOP_METRIC_PAD_H}px ${s(8)}px`
          : `${TOP_METRIC_PAD_V}px ${TOP_METRIC_PAD_H}px`,
        background: "rgba(255,255,255,0.03)",
        textAlign: "center",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <p
        className="font-heading"
        style={{ fontSize: METRIC_PRIMARY, fontWeight: 700, margin: 0, lineHeight: 1.05 }}
      >
        {primary}
      </p>
      <p
        className="font-heading"
        style={{
          fontSize: METRIC_SECONDARY,
          fontWeight: 700,
          margin: `${s(6)}px 0 0`,
          lineHeight: 1.15,
        }}
      >
        {secondary}
      </p>
      <p
        style={{
          fontSize: METRIC_LABEL,
          fontWeight: 600,
          color: "#FFFFFF",
          margin: `${s(14)}px 0 0`,
          lineHeight: 1.35,
        }}
      >
        {label}
      </p>
      {foot ? (
        <p
          style={{
            fontSize: METRIC_FOOT,
            color: footColor ?? "rgba(126,179,232,0.85)",
            margin: `${s(6)}px 0 0`,
            lineHeight: 1.35,
            flexShrink: 0,
          }}
        >
          {foot}
        </p>
      ) : null}
      {sourcePill ? (
        <div
          style={{
            marginTop: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: s(16),
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: `${s(5)}px ${s(14)}px`,
              borderRadius: 999,
              fontSize: METRIC_FOOT,
              fontWeight: 600,
              letterSpacing: "0.04em",
              lineHeight: 1.2,
              ...pillStyle,
            }}
          >
            {sourcePill}
          </span>
        </div>
      ) : null}
    </div>
  );
}

function MiddleColumn({
  seat,
  seatColor,
  title,
  titleColor = "#FFFFFF",
  subtitle,
  subtitleColor,
  titleLineSpacer = false,
  bodyLineSpacer = false,
  callout,
  body,
}: {
  seat: string;
  seatColor: string;
  title: string;
  titleColor?: string;
  subtitle: string;
  subtitleColor: string;
  /** Cols 1 & 3: pad below subtitle to match col 2 two-line title block height */
  titleLineSpacer?: boolean;
  /** Cols 1 & 3: two-line body copy — pad to match col 2 three-line block */
  bodyLineSpacer?: boolean;
  callout: ReactNode;
  body: ReactNode;
}) {
  return (
    <>
      <div
        style={{
          padding: `${MID_STATS_PAD_TOP}px ${MID_STATS_PAD_X}px 0`,
          flexShrink: 0,
          minHeight: MID_STATS_BLOCK_MIN,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          className="font-heading"
          style={{ fontSize: MID_SEAT, fontWeight: 700, color: seatColor, margin: 0, lineHeight: 1.05 }}
        >
          {seat}
        </p>
        <p
          style={{
            fontSize: MID_TITLE,
            fontWeight: 700,
            color: titleColor,
            margin: `${MID_TITLE_GAP}px 0 ${MID_TITLE_GAP_SM}px`,
            lineHeight: 1.25,
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: MID_SUB, color: subtitleColor, margin: 0, lineHeight: 1.35 }}>{subtitle}</p>
        {titleLineSpacer ? (
          <div style={{ flex: 1, minHeight: MID_TITLE_LINE_H }} aria-hidden />
        ) : null}
      </div>
      <div style={{ flex: 1, minHeight: 0 }} />
      <div
        style={{
          flexShrink: 0,
          minHeight: MID_CALLOUT_MIN_H,
          display: "flex",
          alignItems: "stretch",
          width: "100%",
        }}
      >
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>{callout}</div>
      </div>
      <div
        style={{
          flexShrink: 0,
          minHeight: MID_BODY_BLOCK_MIN,
          padding: `${MID_BODY_PAD_TOP}px ${MID_STATS_PAD_X}px ${MID_BODY_PAD_BOTTOM}px`,
          boxSizing: "border-box",
        }}
      >
        {body}
        {bodyLineSpacer ? (
          <div style={{ height: MID_BODY_LINE_H, marginTop: 0 }} aria-hidden />
        ) : null}
      </div>
    </>
  );
}

function StatusRibbon({
  children,
  bg,
  color,
  border,
  compact,
  middleCompact,
}: {
  children: ReactNode;
  bg: string;
  color: string;
  border?: string;
  compact?: boolean;
  /** Scaled call-out ribbons inside middle row cards */
  middleCompact?: boolean;
}) {
  const isCompact = compact || middleCompact;
  return (
    <div
      style={{
        width: "100%",
        marginLeft: 0,
        marginRight: 0,
        padding: middleCompact
          ? `${MID_RIBBON_PAD_V}px ${MID_RIBBON_PAD_H}px`
          : isCompact
            ? `${s(6)}px ${s(12)}px`
            : `${s(10)}px ${s(16)}px`,
        textAlign: "center",
        background: bg,
        border: border ?? "none",
        boxSizing: "border-box",
        ...(middleCompact
          ? {
              minHeight: MID_CALLOUT_MIN_H,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }
          : {}),
      }}
    >
      <span
        style={{
          fontSize: middleCompact ? MID_RIBBON_FONT : isCompact ? s(11) : s(12),
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color,
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {children}
      </span>
    </div>
  );
}

const topMetrics = [
  {
    primary: <span style={{ color: "#7EB3E8" }}>$176B</span>,
    secondary: (
      <>
        <span style={{ color: "rgba(255,255,255,0.35)", marginRight: s(10) }}>→</span>
        <span style={{ color: "#FFFFFF" }}>$262B</span>
      </>
    ),
    label: "Total CX market",
    foot: "CY26 to CY29 · 14% CAGR",
    sourcePill: "Industry Analysts",
    sourcePillTone: "blue",
    border: "rgba(126,179,232,0.45)",
  },
  {
    primary: <span style={{ color: "#5BA0E0" }}>45%</span>,
    secondary: <span style={{ color: "#FFFFFF" }}>CAGR</span>,
    label: "AI Agents Market Growth Through 2030",
    foot: "Over the next five years",
    sourcePill: "BCG",
    sourcePillTone: "blue",
    border: "rgba(91,160,224,0.55)",
  },
  {
    primary: <span style={{ color: "#34D399" }}>80%</span>,
    secondary: <span style={{ color: "#FFFFFF" }}>by 2029</span>,
    label: "Autonomous AI customer issue resolution",
    sourcePill: "Gartner",
    sourcePillTone: "green",
    border: "rgba(52,211,153,0.45)",
  },
];

const NARRATIVE_RIBBON =
  "45% CAGR is driven by operator adoption — mid-market operators won't self-serve AI. They need a partner embedded in how they run. Nextiva is that partner. No one else is in the room.";

const FOOTNOTE =
  "Note: CX Market data — Grand View Research, MarketsandMarkets, Statista, IBISWorld. AI Agent Market — BCG. AI issue resolution — Gartner. CC seats — Industry estimates.";

export default function NewTamSlide({
  slideNumber = 12,
  slideId,
}: {
  slideNumber?: number;
  slideId?: string;
}) {
  return (
    <div
      className="slide"
      data-slide-id={slideId}
      style={{
        background:
          "radial-gradient(ellipse 85% 75% at 50% 25%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.75) 50%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ padding: `${s(32)}px 72px 0`, flexShrink: 0, textAlign: "center" }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: s(16),
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9BB5CC",
            margin: `0 0 ${s(10)}px`,
          }}
        >
          MARKET OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: s(48),
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.18,
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          A Massive Market at a Clear Inflection Point.
        </h1>
        <p
          style={{
            fontSize: s(20),
            color: "rgba(255,255,255,0.5)",
            margin: `${s(12)}px auto 0`,
            lineHeight: 1.45,
            maxWidth: 1100,
          }}
        >
          The convergence of AI and CX is creating the largest platform consolidation opportunity in a
          decade — and the mid-market is where it plays out first.
        </p>
      </header>

      <main
        style={{
          flex: 1,
          minHeight: 0,
          padding: `${s(24)}px 72px ${CUSHION}px`,
          display: "flex",
          flexDirection: "column",
          gap: CUSHION,
        }}
      >
        {/* Top metrics — taller fixed row; middle row flexes smaller */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: s(16),
            flexShrink: 0,
            alignItems: "stretch",
          }}
        >
          {topMetrics.map((m) => (
            <TopMetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* Bottom cards — flex-grow fills space between metrics and ribbon */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(260px, 0.85fr) 1.15fr",
            gap: s(16),
            alignItems: "stretch",
            flex: 1,
            minHeight: 0,
          }}
        >
            {/* Crowded market — de-emphasized */}
            <div style={CROWDED_CARD_STYLE}>
              <StatusRibbon compact bg="rgba(120,35,35,0.55)" color="rgba(255,210,200,0.65)">
                CROWDED MARKET
              </StatusRibbon>
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  display: "flex",
                  flexDirection: "column",
                  borderTop: CROWDED_FALSE_LINE,
                }}
              >
                <MiddleColumn
                  seat="6M"
                  seatColor="rgba(220,140,130,0.45)"
                  title="Enterprise"
                  titleColor="rgba(255,200,190,0.5)"
                  subtitle="250+ agents"
                  subtitleColor="rgba(200,150,140,0.42)"
                  titleLineSpacer
                  bodyLineSpacer
                  callout={
                    <StatusRibbon
                      middleCompact
                      bg="rgba(70,32,32,0.55)"
                      color="rgba(212,165,116,0.6)"
                      border="1px solid rgba(140,60,50,0.3)"
                    >
                      WHERE COMPETITORS FOCUS
                    </StatusRibbon>
                  }
                  body={
                    <p style={{ fontSize: MID_BODY, color: "rgba(220,170,160,0.45)", margin: 0, lineHeight: 1.45 }}>
                      Crowded. Field sales, six-figure deploys, 12–18 month cycles. Every major competitor is fighting
                      here.
                    </p>
                  }
                />
              </div>
            </div>

            {/* Nextiva opportunity */}
            <div
              style={{
                border: "1px solid rgba(91,160,224,0.55)",
                borderRadius: 12,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                background: "rgba(40,96,178,0.05)",
              }}
            >
              <StatusRibbon compact bg="transparent" color="#7EB3E8">
                NEXTIVA&apos;S OPPORTUNITY
              </StatusRibbon>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                  flex: 1,
                  minHeight: 0,
                  borderTop: FALSE_LINE,
                }}
              >
                {/* The Massive Middle */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRight: "1px solid rgba(91,160,224,0.2)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <MiddleColumn
                    seat="12M"
                    seatColor="#7EB3E8"
                    title="The Massive Middle"
                    subtitle="1–250 agents"
                    subtitleColor="rgba(126,179,232,0.75)"
                    callout={
                      <StatusRibbon
                        middleCompact
                        bg="#2860B2"
                        color="#B8D4F0"
                        border="1px solid transparent"
                      >
                        PRIMARY OPPORTUNITY
                      </StatusRibbon>
                    }
                    body={
                      <p style={{ fontSize: MID_BODY, color: "rgba(200,220,255,0.7)", margin: 0, lineHeight: 1.45 }}>
                        Enterprise-grade CX without enterprise complexity. Left behind by every competitor category.
                        The largest untapped surface in CX.
                      </p>
                    }
                  />
                </div>

                {/* Beyond Contact Centers */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <MiddleColumn
                    seat="7M"
                    seatColor="#34D399"
                    title="Beyond Contact Centers"
                    subtitle="Main Street operators"
                    subtitleColor="rgba(255,255,255,0.4)"
                    titleLineSpacer
                    bodyLineSpacer
                    callout={
                      <StatusRibbon
                        middleCompact
                        bg="rgba(28,72,48,0.92)"
                        color="#5EEAD4"
                        border="1px solid rgba(52,211,153,0.35)"
                      >
                        CORE &amp; FUTURE GROWTH
                      </StatusRibbon>
                    }
                    body={
                      <p style={{ fontSize: MID_BODY, color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.45 }}>
                        Front and back office CX outside the contact center model. Same operator buyer, same GTM
                        motion.
                      </p>
                    }
                  />
                </div>
              </div>
            </div>
        </div>

        {/* Narrative ribbon — fixed height, cushion above/below via main gap */}
        <div
          style={{
            border: "1px solid rgba(91,160,224,0.45)",
            borderRadius: 8,
            padding: `${s(8)}px ${s(20)}px`,
            background: "rgba(40,96,178,0.14)",
            boxSizing: "border-box",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontSize: s(13),
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              margin: 0,
              lineHeight: 1.4,
              textAlign: "center",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {NARRATIVE_RIBBON}
          </p>
        </div>

        {/* Source footnote — sits just above footer */}
        <p
          style={{
            fontSize: s(11),
            color: "rgba(255,255,255,0.28)",
            margin: 0,
            lineHeight: 1.4,
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          {FOOTNOTE}
        </p>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
