import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { PNL } from "./financialData";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts";

const ALL_YEARS = ["FY25", "FY26", "FY27", "FY28", "FY29", "FY30"] as const;
const PROJECTION_YEARS = new Set(["FY28", "FY29", "FY30"]);

const data = ALL_YEARS.map((fy) => ({
  name: fy,
  revenue: PNL.revenue[fy],
  gm: PNL.grossMarginPct[fy],
  isProjection: PROJECTION_YEARS.has(fy),
}));

const GM_LINE_COLOR = "#B8860B";
const TARGET_BAR_COLOR = "#6B9BD2"; // lighter blue for target/projection

const metrics = [
  {
    value: `${PNL.grossMarginPct.FY26}%`,
    label: "Gross Margin (FY26)",
    detail: `Up ~${PNL.grossMarginPct.FY26 - PNL.grossMarginPct.FY25}00bps y/y. Targeting ${PNL.grossMarginPct.FY30}% by FY30.`,
    highlight: true,
  },
  {
    value: "76%",
    label: "Subscription Margin (FY26)",
    detail: "Grows to 81% by FY30.",
    highlight: false,
  },
  {
    value: `${Math.round((Math.pow(PNL.revenue.FY30 / PNL.revenue.FY25, 1 / 5) - 1) * 100)}%`,
    label: "Revenue CAGR (FY25–FY30)",
    detail: `$${PNL.revenue.FY25}M to $${PNL.revenue.FY30}M`,
    highlight: false,
  },
];

/* Custom bar shape: lighter fill for projection years */
const ProjectionBarShape = (props: any) => {
  const { x, y, width, height, isProjection } = props;
  if (isProjection) {
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} rx={8} ry={8} fill={TARGET_BAR_COLOR} fillOpacity={0.45} />
        <rect x={x} y={y} width={width} height={height} rx={8} ry={8} fill="none" stroke={TARGET_BAR_COLOR} strokeWidth={2} strokeDasharray="6 4" />
      </g>
    );
  }
  return <rect x={x} y={y} width={width} height={height} rx={8} ry={8} fill={COLORS.brandBlue} />;
};

const SlideARRGrossMargin = ({ slideNumber = "21" }: { slideNumber?: string }) => (
  <div
    style={{ width: 1920, height: 1080, background: COLORS.dawnCream, display: "flex", flexDirection: "column", fontFamily: FONTS.body, overflow: "hidden" }}
    data-speaker-notes={`Revenue grows from $${PNL.revenue.FY25}M to $${PNL.revenue.FY30}M at ${Math.round((Math.pow(PNL.revenue.FY30 / PNL.revenue.FY25, 1 / 5) - 1) * 100)}% CAGR. Near-term visibility through FY27; FY30 shown as long-term target. Gross margin expands from ${PNL.grossMarginPct.FY25}% to ${PNL.grossMarginPct.FY30}%.`}
  >
    <header style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>Long-term model</p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 68, fontWeight: 400, color: COLORS.navy, margin: "12px 0 0", lineHeight: 1.15 }}>Durable Top Line Momentum.</h1>
      <p style={{ fontSize: 24, color: COLORS.darkWarmGray, margin: "12px auto 0", lineHeight: 1.5, whiteSpace: "nowrap" }}>
        Revenue compounds steadily while gross margins expand toward best-in-class levels.
      </p>
    </header>

    <main style={{ flex: 1, padding: "32px 100px 0", display: "flex", gap: 48 }}>
      {/* Left: Combo Chart with break */}
      <div style={{ flex: 55, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <ResponsiveContainer width="100%" height="90%">
          <ComposedChart data={data} margin={{ top: 24, right: 20, left: 20, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.paleWarm} vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 22, fill: COLORS.darkWarmGray, fontFamily: FONTS.body }} axisLine={{ stroke: COLORS.paleWarm }} tickLine={false} interval={0} />
            <YAxis yAxisId="left" domain={[0, 500]} tick={{ fontSize: 20, fill: COLORS.warmGray, fontFamily: FONTS.body }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${v}M`} />
            <YAxis yAxisId="right" orientation="right" domain={[50, 90]} tick={{ fontSize: 20, fill: COLORS.warmGray, fontFamily: FONTS.body }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v}%`} />
            <Bar yAxisId="left" dataKey="revenue" name="Revenue" shape={<ProjectionBarShape />} maxBarSize={100}>
              <LabelList
                dataKey="revenue"
                position="top"
                formatter={(v: number | null) => (v != null ? `$${v}M` : "")}
                style={{ fontSize: 20, fontWeight: 700, fill: COLORS.navy, fontFamily: FONTS.body }}
              />
            </Bar>
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="gm"
              name="Gross Margin %"
              stroke={GM_LINE_COLOR}
              strokeWidth={3}
              dot={(dotProps: any) => {
                if (dotProps.payload.isProjection) {
                  return <circle key={dotProps.index} cx={dotProps.cx} cy={dotProps.cy} r={5} fill="none" stroke={GM_LINE_COLOR} strokeWidth={2} strokeDasharray="4 3" />;
                }
                return <circle key={dotProps.index} cx={dotProps.cx} cy={dotProps.cy} r={5} fill={GM_LINE_COLOR} />;
              }}
            >
              <LabelList dataKey="gm" position="top" formatter={(v: number | null) => (v != null ? `${v}%` : "")} style={{ fontSize: 18, fontWeight: 700, fill: GM_LINE_COLOR, fontFamily: FONTS.body }} />
            </Line>
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{ fontSize: 18, fontFamily: FONTS.body, color: COLORS.darkWarmGray, paddingTop: 8 }}
              payload={[
                { value: "Revenue", type: "circle", color: COLORS.brandBlue },
                { value: "Revenue (Long-Term Plan)", type: "circle", color: TARGET_BAR_COLOR },
                { value: "Gross Margin %", type: "circle", color: GM_LINE_COLOR },
              ]}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Right: Metric Cards */}
      <div style={{ flex: 45, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{
              background: COLORS.pureWhite,
              border: m.highlight ? `2px solid ${COLORS.brandBlue}` : `1px solid ${COLORS.paleWarm}`,
              borderRadius: 16,
              padding: "36px 40px",
              boxShadow: m.highlight ? "0 4px 16px rgba(40,96,178,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
              textAlign: "center" as const,
            }}
          >
            <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: m.highlight ? COLORS.brandBlue : COLORS.warmGray, margin: 0 }}>{m.label}</p>
            <p style={{ fontFamily: FONTS.heading, fontSize: 64, fontWeight: 700, color: COLORS.navy, margin: "8px 0 0", lineHeight: 1 }}>{m.value}</p>
            {m.detail && <p style={{ fontSize: 22, color: COLORS.midWarmGray, margin: "6px 0 0" }}>{m.detail}</p>}
          </div>
        ))}
      </div>
    </main>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideARRGrossMargin;
