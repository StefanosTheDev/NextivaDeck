"use client";

import type { CSSProperties, ReactNode } from "react";
import SlideFooter from "../SlideFooter";

const S = 1.12;
const s = (n: number) => Math.round(n * S);

/** Right-column cards */
const CARD_SCALE = 1.32;
const c = (n: number) => s(Math.round(n * CARD_SCALE));

const CARD_EYEBROW = c(11);
const CARD_METRIC = c(48);
const CARD_SUBTITLE = c(15);
const CARD_BODY = c(13);
const RIBBON_LEAD = s(14);
const RIBBON_BODY = s(13);
const FY30_LINE = c(15);
const FY30_RESULT = c(26);
const CARD_PAD = c(12);
const CARD_GAP = c(8);

/** Left attach-rate table — sized to align with top two right cards */
const TABLE_SCALE = 1.42;
const t = (n: number) => s(Math.round(n * TABLE_SCALE));

const TABLE_TITLE = t(13);
const TABLE_SUB = t(14);
const TH = t(11);
const TD = t(16);
const BADGE = t(10);
const ROW_PAD_V = t(8);
const TABLE_PAD = t(12);

type AttachRow = {
  rate: string;
  badge?: string;
  incrementalArr: string;
  lift: string;
  newTotal: string;
  highlight?: "green" | "greenBright";
};

const ROW_HIGHLIGHT: Record<
  NonNullable<AttachRow["highlight"]>,
  { background: string; accent: string; value: string }
> = {
  green: {
    background: "rgba(28,72,48,0.42)",
    accent: "#34D399",
    value: "#6EE7B7",
  },
  greenBright: {
    background: "rgba(40,128,72,0.68)",
    accent: "#4ADE80",
    value: "#A7F3D0",
  },
};

const ATTACH_ROWS: AttachRow[] = [
  { rate: "2.09%", badge: "TODAY", incrementalArr: "$2.95M", lift: "+1%", newTotal: "$302.9M" },
  { rate: "10%", incrementalArr: "$18.8M", lift: "+6%", newTotal: "$318.8M" },
  { rate: "25%", incrementalArr: "$46.9M", lift: "+16%", newTotal: "$346.9M" },
  {
    rate: "41.4%",
    badge: "NEXT NOW",
    incrementalArr: "$77.7M",
    lift: "+26%",
    newTotal: "$377.7M",
    highlight: "green",
  },
  { rate: "50%", incrementalArr: "$96.9M", lift: "+32%", newTotal: "$396.9M", highlight: "greenBright" },
  { rate: "75%", incrementalArr: "$147.0M", lift: "+49%", newTotal: "$447.0M" },
];

const FOOTNOTE =
  "Base ARR = $300M (total company). Sensitivity modeled on observed ARPA uplift from active XBert cohorts. · Sources: XBert AI internal metrics, NEXT IVA / Revenue dashboard, FY2026 Q4 actuals · Nextiva · Confidential";

const thStyle: CSSProperties = {
  fontSize: TH,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.52)",
  textAlign: "center",
  padding: `${t(10)}px ${t(8)}px`,
  borderBottom: "1px solid rgba(91,160,224,0.38)",
};

const tdStyle: CSSProperties = {
  fontSize: TD,
  color: "rgba(255,255,255,0.92)",
  padding: `${ROW_PAD_V}px ${t(8)}px`,
  borderBottom: "1px solid rgba(91,160,224,0.16)",
  fontFamily: "'Space Grotesk', sans-serif",
  lineHeight: 1.22,
  textAlign: "center",
};

const COL_LEFT = "1 1 56%";
const COL_RIGHT = "0 0 44%";

const tablePanelStyle: CSSProperties = {
  border: "1px solid rgba(91,160,224,0.35)",
  borderRadius: 10,
  background: "rgba(255,255,255,0.02)",
  padding: TABLE_PAD,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: 0,
};

function RightCard({
  children,
  flex,
  grow = true,
  border,
  borderLeft,
  background,
}: {
  children: ReactNode;
  flex?: number;
  grow?: boolean;
  border: string;
  borderLeft?: string;
  background: string;
}) {
  return (
    <div
      style={{
        border,
        borderLeft: borderLeft ?? border,
        borderRadius: 10,
        background,
        padding: CARD_PAD,
        flex: grow ? `${flex ?? 1} 1 0` : "0 0 auto",
        minHeight: grow ? 0 : undefined,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: c(5),
      }}
    >
      {children}
    </div>
  );
}

export default function XbertOpportunitySlide({
  slideNumber = 1,
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
      <header style={{ padding: `${s(18)}px 72px 0`, flexShrink: 0 }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: s(14),
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9BB5CC",
            margin: `0 0 ${s(6)}px`,
          }}
        >
          XBERT · INSTALLED BASE OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: s(40),
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.12,
            maxWidth: 1100,
          }}
        >
          Anticipated growth requires no additional customers.
        </h1>
        <p
          style={{
            fontSize: s(18),
            color: "rgba(126,179,232,0.8)",
            margin: `${s(6)}px 0 0`,
            lineHeight: 1.35,
          }}
        >
          ~92,000 existing accounts. 2.09% attached today. Grounded economics already observed in live
          cohorts.
        </p>
      </header>

      <main
        style={{
          flex: 1,
          minHeight: 0,
          padding: `${s(10)}px 72px ${s(6)}px`,
          display: "flex",
          flexDirection: "column",
          gap: CARD_GAP,
        }}
      >
        {/* Top band: table height-matched to cards 1 & 2 */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            gap: t(14),
            alignItems: "stretch",
          }}
        >
          <div style={{ flex: COL_LEFT, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column" }}>
            <div style={tablePanelStyle}>
          <p
            style={{
              fontSize: TABLE_TITLE,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              margin: `0 0 ${t(3)}px`,
              lineHeight: 1.2,
            }}
          >
            Incremental ARR at varying attach rates
          </p>
          <p
            style={{
              fontSize: TABLE_SUB,
              color: "rgba(255,255,255,0.52)",
              margin: `0 0 ${t(8)}px`,
              lineHeight: 1.3,
            }}
          >
            Modeled on observed ARPA uplift across live XBert cohorts — not assumed.
          </p>
          <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "stretch" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", height: "100%", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "28%" }} />
                <col style={{ width: "26%" }} />
                <col style={{ width: "22%" }} />
                <col style={{ width: "24%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th style={thStyle}>Attach rate</th>
                  <th style={thStyle}>Incremental ARR</th>
                  <th style={thStyle}>Lift to total rev</th>
                  <th style={thStyle}>New total ARR</th>
                </tr>
              </thead>
              <tbody>
                {ATTACH_ROWS.map((row) => {
                  const tone = row.highlight ? ROW_HIGHLIGHT[row.highlight] : null;
                  return (
                    <tr
                      key={`${row.rate}-${row.badge ?? ""}`}
                      style={{ background: tone?.background }}
                    >
                      <td style={{ ...tdStyle, fontWeight: 700, color: tone ? tone.value : tdStyle.color }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: t(3),
                          }}
                        >
                          <span>{row.rate}</span>
                          {row.badge ? (
                            <span
                              style={{
                                fontSize: BADGE,
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: tone?.accent ?? "rgba(126,179,232,0.85)",
                                lineHeight: 1.1,
                              }}
                            >
                              {row.badge}
                            </span>
                          ) : null}
                        </div>
                      </td>
                      <td
                        style={{
                          ...tdStyle,
                          color: tone ? tone.value : tdStyle.color,
                          fontWeight: 700,
                        }}
                      >
                        {row.incrementalArr}
                      </td>
                      <td
                        style={{
                          ...tdStyle,
                          color: tone ? tone.value : "rgba(255,255,255,0.72)",
                          fontWeight: 600,
                        }}
                      >
                        {row.lift}
                      </td>
                      <td style={{ ...tdStyle, fontWeight: tone ? 700 : 600, color: tone ? tone.value : tdStyle.color }}>
                        {row.newTotal}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
            </div>
          </div>

          <div
            style={{
              flex: COL_RIGHT,
              display: "flex",
              flexDirection: "column",
              gap: CARD_GAP,
              minWidth: 0,
              minHeight: 0,
            }}
          >
          <RightCard
            flex={1.15}
            border="1px solid rgba(52,211,153,0.5)"
            borderLeft="4px solid #34D399"
            background="rgba(28,72,48,0.18)"
          >
            <p
              style={{
                fontSize: CARD_EYEBROW,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#34D399",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Proof point — NEXT cohort
            </p>
            <p
              className="font-heading"
              style={{
                fontSize: CARD_METRIC,
                fontWeight: 700,
                color: "#34D399",
                margin: 0,
                lineHeight: 1,
              }}
            >
              41.4%
            </p>
            <p
              style={{
                fontSize: CARD_SUBTITLE,
                fontWeight: 700,
                color: "rgba(255,255,255,0.92)",
                margin: 0,
                lineHeight: 1.22,
              }}
            >
              XBert attach on NEXT today
            </p>
            <p style={{ fontSize: CARD_BODY, color: "rgba(255,255,255,0.58)", margin: 0, lineHeight: 1.38 }}>
              This is not a projection. It is the actual attach rate achieved in the NEXT product cohort in under 12
              months — proof that the installed base will adopt when the product is embedded in the core motion.
            </p>
          </RightCard>

          <RightCard flex={1} border="1px solid rgba(91,160,224,0.45)" background="rgba(40,96,178,0.12)">
            <p
              style={{
                fontSize: CARD_EYEBROW,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              The FY30 math closes
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: c(7) }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: FY30_LINE,
                  color: "rgba(255,255,255,0.82)",
                  gap: c(10),
                }}
              >
                <span>Base ARR today</span>
                <span style={{ fontWeight: 700 }}>$300M</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: FY30_LINE,
                  color: "#34D399",
                  gap: c(10),
                }}
              >
                <span>+ XBert at 50% attach</span>
                <span style={{ fontWeight: 700 }}>+$97M</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: FY30_LINE,
                  color: "rgba(255,255,255,0.82)",
                  gap: c(10),
                }}
              >
                <span>+ Organic base growth</span>
                <span style={{ fontWeight: 700 }}>+~$57M</span>
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(91,160,224,0.3)",
                  marginTop: c(2),
                  paddingTop: c(8),
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: c(10),
                }}
              >
                <span style={{ fontSize: FY30_LINE, fontWeight: 700, color: "rgba(255,255,255,0.92)" }}>
                  = FY30 target range
                </span>
                <span className="font-heading" style={{ fontSize: FY30_RESULT, fontWeight: 700, color: "#FBBF24" }}>
                  ~$454–472M
                </span>
              </div>
            </div>
          </RightCard>
          </div>
        </div>

        {/* Full-width upsell ribbon */}
        <div
          style={{
            flexShrink: 0,
            border: "1px solid rgba(91,160,224,0.45)",
            borderLeft: "4px solid #FBBF24",
            borderRadius: 10,
            background: "rgba(40,96,178,0.1)",
            padding: `${s(10)}px ${s(24)}px`,
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              margin: 0,
              lineHeight: 1.4,
              textAlign: "center",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <span style={{ fontSize: RIBBON_LEAD, fontWeight: 700, color: "rgba(255,255,255,0.95)" }}>
              Zero new customers required.
            </span>{" "}
            <span style={{ fontSize: RIBBON_BODY, color: "rgba(255,255,255,0.62)" }}>
              The entire upside is an upsell motion into ~92,000 existing accounts already paying, already
              trusting
              Nextiva.
            </span>
          </p>
        </div>
      </main>

      <p
        style={{
          fontSize: s(11),
          color: "rgba(255,255,255,0.28)",
          margin: 0,
          padding: `0 72px ${s(4)}px`,
          lineHeight: 1.35,
          textAlign: "center",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}
      >
        {FOOTNOTE}
      </p>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
