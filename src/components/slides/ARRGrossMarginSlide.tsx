"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { PNL } from "../financialData";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts";

const ALL_YEARS = ["FY25", "FY26", "FY27", "FY28", "FY29", "FY30"] as const;
const PROJECTION_YEARS = new Set(["FY28", "FY29", "FY30"]);

const data = ALL_YEARS.map((fy) => ({
  name: fy,
  revenue: PNL.revenue[fy],
  gm: PNL.grossMarginPct[fy],
  isProjection: PROJECTION_YEARS.has(fy),
}));

const GM_LINE_COLOR = "#E8B84D";
const TARGET_BAR_COLOR = "#7EB3E8";
const REVENUE_BAR_COLOR = "#2860B2";

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
    highlight: true,
  },
  {
    value: `$${PNL.revenue.FY30}M`,
    label: "Revenue (FY30)",
    detail: "",
    highlight: true,
  },
];

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
  return <rect x={x} y={y} width={width} height={height} rx={8} ry={8} fill="#2860B2" />;
};

export default function ARRGrossMarginSlide({ slideNumber = 24 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)", justifyContent: "space-between" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCC7C3", margin: "0 0 10px" }}>Long-term model</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Durable Top Line Momentum.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.45)", marginTop: 10, lineHeight: 1.5 }}>
          Revenue compounds steadily while gross margins expand toward best-in-class levels.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "24px 100px 0", display: "flex", gap: 36 }}
      >
        <div style={{ flex: 55, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <ResponsiveContainer width="100%" height="90%">
            <ComposedChart data={data} margin={{ top: 24, right: 20, left: 20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 20, fill: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }} axisLine={{ stroke: "rgba(255,255,255,0.1)" }} tickLine={false} interval={0} />
              <YAxis yAxisId="left" domain={[0, 500]} tick={{ fontSize: 18, fill: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${v}M`} />
              <YAxis yAxisId="right" orientation="right" domain={[50, 90]} tick={{ fontSize: 18, fill: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v}%`} />
              <Bar yAxisId="left" dataKey="revenue" name="Revenue" shape={<ProjectionBarShape />} maxBarSize={100}>
                <LabelList
                  dataKey="revenue"
                  position="top"
                  formatter={(v: any) => (v != null ? `$${v}M` : "")}
                  style={{ fontSize: 18, fontWeight: 700, fill: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}
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
                <LabelList dataKey="gm" position="top" formatter={(v: any) => (v != null ? `${v}%` : "")} style={{ fontSize: 16, fontWeight: 700, fill: GM_LINE_COLOR, fontFamily: "'Space Grotesk', sans-serif" }} />
              </Line>
              <Legend
                verticalAlign="bottom"
                iconType="square"
                wrapperStyle={{ fontSize: 16, fontFamily: "'Space Grotesk', sans-serif", color: "rgba(255,255,255,0.92)", paddingTop: 8 }}
                iconSize={12}
                content={({ payload }) => (
                  <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
                    {payload?.map((entry) => (
                      <span key={entry.value} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: 2,
                            background: entry.color,
                            border: entry.value === "Revenue" ? "1.5px solid rgba(255,255,255,0.7)" : "none",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ color: "rgba(255,255,255,0.92)" }}>{entry.value}</span>
                      </span>
                    ))}
                  </div>
                )}
                {...{ payload: [
                  { value: "Revenue", type: "square", color: REVENUE_BAR_COLOR },
                  { value: "Revenue (Long-Term Plan)", type: "square", color: TARGET_BAR_COLOR },
                  { value: "Gross Margin %", type: "circle", color: GM_LINE_COLOR },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ] } as any}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div style={{ flex: 45, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div
                style={
                  m.highlight
                    ? { padding: "32px 36px", textAlign: "center", background: "rgba(40,96,178,0.12)", border: "2px solid rgba(40,96,178,0.4)", borderRadius: 16, boxShadow: "0 4px 16px rgba(40,96,178,0.15)" }
                    : { padding: "32px 36px", textAlign: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 }
                }
              >
                <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: m.highlight ? "#7EB3E8" : "rgba(255,255,255,0.4)", margin: 0 }}>{m.label}</p>
                <p className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#FFFFFF", margin: "8px 0 0", lineHeight: 1 }}>{m.value}</p>
                {m.detail && <p style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", margin: "6px 0 0" }}>{m.detail}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
