import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import {
  Bar, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, BarChart, LabelList, Customized,
} from "recharts";

/* ── Data (% of customer base, sums to 100) ── */
const CHART_DATA = [
  { quarter: "FY25\nQ4", gateways: 7,  outcomes: 0,  embeddedActive: 17, embeddedInactive: 76, projected: false },
  { quarter: "FY26\nQ1", gateways: 9,  outcomes: 0,  embeddedActive: 30, embeddedInactive: 61, projected: false },
  { quarter: "FY26\nQ2", gateways: 10, outcomes: 0,  embeddedActive: 35, embeddedInactive: 55, projected: false },
  { quarter: "FY26\nQ3", gateways: 12, outcomes: 0,  embeddedActive: 45, embeddedInactive: 43, projected: true },
  { quarter: "FY26\nQ4", gateways: 15, outcomes: 0,  embeddedActive: 53, embeddedInactive: 32, projected: true },
  { quarter: "FY27\nQ1", gateways: 17, outcomes: 3,  embeddedActive: 60, embeddedInactive: 20, projected: true },
  { quarter: "FY27\nQ2", gateways: 19, outcomes: 12, embeddedActive: 62, embeddedInactive: 8,  projected: true },
  { quarter: "FY27\nQ3", gateways: 22, outcomes: 21, embeddedActive: 54, embeddedInactive: 4,  projected: true },
  { quarter: "FY27\nQ4", gateways: 25, outcomes: 31, embeddedActive: 42, embeddedInactive: 2,  projected: true },
];

const withActivation = CHART_DATA.map((d) => ({
  ...d,
  activationPct: d.gateways + d.outcomes + d.embeddedActive,
}));

const SEGMENT_COLORS = {
  gateways: COLORS.deepNavy,
  outcomes: COLORS.brandBlue,
  embeddedActive: "#C8D3DF",
  embeddedInactive: "#C8D3DF", // base color for pattern
};

const SPEAKER_NOTES =
  "AI Revenue Mix Evolution slide: 100% stacked bars showing customer base segmentation across AI revenue categories. AI Gateways (XBert AI) grows to 25%, AI Outcomes to 31%, Embedded Active to 39%, while Embedded Inactive shrinks from 79% to 5% — representing 95% AI activation by FY27 Q4.";

/* ── Activation % label at top of embeddedActive (just above boundary with embeddedInactive) ── */
const ActivationLabel = (props: any) => {
  const { x, y, width, index } = props;
  const d = withActivation[index];
  if (!d || d.embeddedActive < 10) return null;
  return (
    <text
      x={x + width / 2}
      y={y + 18}
      textAnchor="middle"
      fontSize={17}
      fontWeight={700}
      fontFamily={FONTS.body}
      fill={COLORS.deepNavy}
    >
      {d.activationPct}%
    </text>
  );
};

/* ── Projection divider between index 2 and 3 ── */
const ProjectionDivider = (props: any) => {
  const { xAxisMap, yAxisMap } = props;
  if (!xAxisMap || !yAxisMap) return null;
  const xAxis = Object.values(xAxisMap)[0] as any;
  const yAxis = Object.values(yAxisMap)[0] as any;
  if (!xAxis || !yAxis) return null;

  const bandWidth = xAxis.bandSize || 0;
  const x2 = xAxis.scale(withActivation[2].quarter) + bandWidth / 2;
  const x3 = xAxis.scale(withActivation[3].quarter) + bandWidth / 2;
  const midX = (x2 + x3) / 2;
  const yTop = yAxis.y;
  const yBottom = yAxis.y + yAxis.height;

  return (
    <g>
      <line
        x1={midX} y1={yTop} x2={midX} y2={yBottom}
        stroke={COLORS.midWarmGray} strokeDasharray="6 4" strokeWidth={1.5}
      />
      <text
        x={midX} y={yBottom + 48}
        textAnchor="middle" fontSize={13} fill={COLORS.warmGray}
        fontFamily={FONTS.body} fontStyle="italic"
      >
        Projected →
      </text>
    </g>
  );
};

/* ── Dotted line connector for right-side cards ── */
const DottedConnector = ({ color }: { color: string }) => (
  <div style={{
    position: "absolute", left: -44, top: "50%", width: 44, height: 0,
    borderTop: `2px dotted ${color}`,
  }} />
);

const SlideAIGatewaysRevenue = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920, height: 1080, background: COLORS.dawnCream,
      display: "flex", flexDirection: "column", fontFamily: FONTS.body, overflow: "hidden",
    }}
    data-speaker-notes={SPEAKER_NOTES}
  >
    {/* Header */}
    <header style={{ padding: "52px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p style={{
        fontWeight: 700, fontSize: 22, letterSpacing: "0.05em",
        textTransform: "uppercase", color: COLORS.brandBlue, margin: 0,
      }}>
        AI Revenue Mix
      </p>
        <h1 style={{
          fontFamily: FONTS.heading, fontSize: 56, fontWeight: 400,
          color: COLORS.navy, margin: "10px 0 0", lineHeight: 1.15,
        }}>
          Projecting roughly 95%+ activation on AI by FY28.
        </h1>
    </header>

    {/* Body */}
    <main style={{ flex: 1, padding: "16px 100px 0", display: "flex", gap: 48 }}>
      {/* Chart area */}
      <div style={{ flex: 60, display: "flex", flexDirection: "column" }}>
        <p style={{
          fontSize: 28, fontWeight: 700, color: COLORS.navy,
          margin: "20px 0 2px", lineHeight: 1.3,
        }}>
          24-Month AI Revenue Mix Evolution
        </p>

        {/* Legend — 2×2 grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 32px", margin: "8px 0 12px" }}>
          <LegendItem color={SEGMENT_COLORS.gateways} label="AI Gateways Revenue" />
          <LegendItem color={SEGMENT_COLORS.embeddedActive} label="AI Embedded Revenue (Activated on AI)" />
          <LegendItem color={SEGMENT_COLORS.outcomes} label="AI Outcomes Revenue" />
          <LegendHatched label="AI Embedded (Not Utilizing AI)" />
        </div>

        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={withActivation}
              margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
              barCategoryGap="14%"
            >
              {/* Hatched pattern definition */}
              <defs>
                <pattern id="hatchEmbedded" patternUnits="userSpaceOnUse" width={8} height={8} patternTransform="rotate(45)">
                  <rect width={8} height={8} fill="#E4E9EF" />
                  <line x1={0} y1={0} x2={0} y2={8} stroke="#C8D3DF" strokeWidth={3} />
                </pattern>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.paleWarm} vertical={false} />
              <Customized component={ProjectionDivider} />

              <XAxis
                dataKey="quarter"
                tick={({ x, y, payload }: any) => {
                  const lines = (payload.value as string).split("\n");
                  return (
                    <text x={x} y={y + 14} textAnchor="middle" fontSize={15} fill={COLORS.darkWarmGray} fontFamily={FONTS.body}>
                      {lines.map((line: string, i: number) => (
                        <tspan x={x} dy={i === 0 ? 0 : 17} key={i}>{line}</tspan>
                      ))}
                    </text>
                  );
                }}
                axisLine={{ stroke: COLORS.paleWarm }}
                tickLine={false}
                interval={0}
                height={50}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fontSize: 16, fill: COLORS.warmGray, fontFamily: FONTS.body }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => `${v}%`}
              />

              {/* Stack bottom-to-top: gateways → outcomes → embeddedActive → embeddedInactive */}
              <Bar dataKey="gateways" stackId="a" fill={SEGMENT_COLORS.gateways} radius={[0, 0, 0, 0]} isAnimationActive={false} />
              <Bar dataKey="outcomes" stackId="a" fill={SEGMENT_COLORS.outcomes} radius={[0, 0, 0, 0]} isAnimationActive={false} />
              <Bar dataKey="embeddedActive" stackId="a" fill={SEGMENT_COLORS.embeddedActive} radius={[0, 0, 0, 0]} isAnimationActive={false} />
              
              <Bar dataKey="embeddedInactive" stackId="a" fill="url(#hatchEmbedded)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right column — 3 commentary cards */}
      <div style={{ flex: 35, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, position: "relative" }}>
        {/* Card 1 — Embedded + Activation */}
        <div style={{ position: "relative" }}>
          
          <div style={{
            background: COLORS.pureWhite, border: `2px solid ${SEGMENT_COLORS.embeddedActive}`,
            borderRadius: 14, padding: "24px 32px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}>
            <p style={{
              fontSize: 18, fontWeight: 700, letterSpacing: "0.04em",
              textTransform: "uppercase", color: COLORS.warmGray, margin: 0,
            }}>
              AI EMBEDDED CUSTOMER AI ACTIVATION TARGET RANGE
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <p style={{
                fontFamily: FONTS.heading, fontSize: 56, fontWeight: 700,
                color: COLORS.navy, margin: "6px 0 0", lineHeight: 1,
              }}>
                93% <span style={{ fontSize: 46 }}>to</span> 98%
              </p>
              <span style={{
                background: COLORS.brandBlue, color: COLORS.pureWhite,
                fontSize: 13, fontWeight: 700, letterSpacing: "0.04em",
                textTransform: "uppercase", padding: "6px 12px",
                borderRadius: 6, lineHeight: 1.3, marginTop: 6,
              }}>
                % of Users<br />AI Activated
              </span>
            </div>
            <p style={{ fontSize: 21, color: COLORS.darkWarmGray, margin: "10px 0 0", lineHeight: 1.5 }}>
              AI is embedded across all surfaces — NEXT IQ, Transcription, GenAI summarization, NextIQ Analytics. Adoption projected to grow nearly 5×.
            </p>
          </div>
        </div>

        {/* Card 2 — AI Outcomes */}
        <div style={{ position: "relative" }}>
          
          <div style={{
            background: COLORS.pureWhite, border: `2px solid ${COLORS.brandBlue}`,
            borderRadius: 14, padding: "24px 32px",
            boxShadow: "0 4px 16px rgba(40,96,178,0.1)",
          }}>
            <p style={{
              fontSize: 18, fontWeight: 700, letterSpacing: "0.04em",
              textTransform: "uppercase", color: COLORS.brandBlue, margin: 0,
            }}>
              AI Outcomes Revenue Target Range
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <p style={{
                fontFamily: FONTS.heading, fontSize: 56, fontWeight: 700,
                color: COLORS.navy, margin: "6px 0 0", lineHeight: 1,
              }}>
                29% <span style={{ fontSize: 46 }}>to</span> 33%
              </p>
              <span style={{
                background: COLORS.brandBlue, color: COLORS.pureWhite,
                fontSize: 13, fontWeight: 700, letterSpacing: "0.04em",
                textTransform: "uppercase", padding: "6px 12px",
                borderRadius: 6, lineHeight: 1.3, marginTop: 6,
              }}>
                % of Revenue<br />AI Outcomes
              </span>
            </div>
            <p style={{ fontSize: 21, color: COLORS.darkWarmGray, margin: "10px 0 0", lineHeight: 1.5 }}>
              Tokenized AI Outcomes and usage-based revenue projected to reach ~30% of revenue. Agentic AI outcomes compound across the platform.
            </p>
          </div>
        </div>

        {/* Card 3 — AI Gateways */}
        <div style={{ position: "relative" }}>
          
          <div style={{
            background: COLORS.pureWhite, border: `2px solid ${COLORS.deepNavy}`,
            borderRadius: 14, padding: "24px 32px",
            boxShadow: "0 4px 16px rgba(15,44,89,0.1)",
          }}>
            <p style={{
              fontSize: 18, fontWeight: 700, letterSpacing: "0.04em",
              textTransform: "uppercase", color: COLORS.deepNavy, margin: 0,
            }}>
              AI GATEWAYS REVENUE TARGET RANGE
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <p style={{
                fontFamily: FONTS.heading, fontSize: 56, fontWeight: 700,
                color: COLORS.navy, margin: "6px 0 0", lineHeight: 1,
              }}>
                22% <span style={{ fontSize: 46 }}>to</span> 28%
              </p>
              <span style={{
                background: COLORS.brandBlue, color: COLORS.pureWhite,
                fontSize: 13, fontWeight: 700, letterSpacing: "0.04em",
                textTransform: "uppercase", padding: "6px 12px",
                borderRadius: 6, lineHeight: 1.3, marginTop: 6,
              }}>
                % of Revenue<br />AI Gateways
              </span>
            </div>
            <p style={{ fontSize: 21, color: COLORS.darkWarmGray, margin: "10px 0 0", lineHeight: 1.5 }}>
              XBert AI is the lead edge product for platform-agnostic AI gateway attach.<br />
              New signup ARPA up 2× with XBert AI in Q2 FY26.
            </p>
          </div>
        </div>
      </div>
    </main>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

/* ── Legend helpers ── */
const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div style={{ width: 18, height: 18, borderRadius: 3, background: color }} />
    <span style={{ fontSize: 25, color: COLORS.midWarmGray }}>{label}</span>
  </div>
);

const LegendHatched = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg width={18} height={18}>
      <defs>
        <pattern id="legendHatch" patternUnits="userSpaceOnUse" width={6} height={6} patternTransform="rotate(45)">
          <rect width={6} height={6} fill="#E4E9EF" />
          <line x1={0} y1={0} x2={0} y2={6} stroke="#C8D3DF" strokeWidth={2} />
        </pattern>
      </defs>
      <rect width={18} height={18} rx={3} fill="url(#legendHatch)" />
    </svg>
    <span style={{ fontSize: 25, color: COLORS.midWarmGray }}>{label}</span>
  </div>
);

export default SlideAIGatewaysRevenue;
