import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, Legend, CartesianGrid } from "recharts";
import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";

/* ═══════ COHORT MRR GROWTH DATA ═══════ */
const RAW_COHORTS = [
  [2009, 1.4563, 136], [2010, 1.3969, 173], [2011, 1.3241, 409],
  [2012, 1.9646, 730], [2013, 1.835, 1036], [2014, 1.9749, 1584],
  [2015, 1.7278, 2249], [2016, 1.9537, 3005], [2017, 1.6872, 3495],
  [2018, 1.6902, 4889], [2019, 1.6697, 6045],
  [2020, 1.5541, 7999], [2021, 1.4402, 9203], [2022, 1.4304, 10769],
  [2023, 1.3201, 10217], [2024, 1.3374, 10792], [2025, 1.2095, 14080],
  [2026, 1.1718, 4012],
] as const;

const pre2020 = RAW_COHORTS.filter(([y]) => y < 2020);
const pre2020Avg =
  pre2020.reduce((s, [, m, a]) => s + m * a, 0) /
  pre2020.reduce((s, [, , a]) => s + a, 0);

const COHORT_BARS: { label: string; value: number }[] = [
  { label: "Pre-2020", value: Math.round(pre2020Avg * 100) / 100 },
  ...RAW_COHORTS.filter(([y]) => y >= 2020).map(([y, m]) => ({
    label: String(y),
    value: Math.round((m as number) * 100) / 100,
  })),
];
const cohortMax = Math.max(...COHORT_BARS.map((b) => b.value));

/* ═══════ MRR RETENTION CURVES DATA ═══════ */
const RAW: Record<string, number[]> = {
  "2020": [103.97,102.32,101.88,101.60,103.12,103.85,105.40,106.76,106.56,106.77,106.81,107.57,107.89,108.23,109.02,110.22,110.87,111.37,112.12,111.79,111.72,111.73,112.29,112.47,112.32,112.24,112.49,112.49,113.66,114.61,115.96,116.04,115.99,115.76],
  "2021": [102.83,104.86,106.45,108.81,110.48,112.37,113.26,114.49,115.76,116.74,117.51,117.95,118.62,119.08,119.38,119.70,120.05,120.29,120.48,120.49,120.55,120.47,120.54,120.58,120.66,119.79,118.57,117.32,116.87,116.54,116.45,115.85,115.32,114.67],
  "2022": [101.80,102.98,104.24,105.68,106.76,107.17,107.73,108.06,108.28,108.30,108.27,108.18,107.82,107.10,107.09,107.37,108.38,108.58,108.73,108.75,108.69,108.67,108.46,108.47,108.48,108.53,108.42,108.67,108.93,109.79,110.44,110.93,111.33,111.93],
  "2023": [103.05,104.18,104.99,105.92,106.13,106.78,107.21,107.45,106.92,106.37,105.94,105.37,104.50,103.97,102.10,100.93,100.01,99.88,99.76,99.81,99.98,100.15,101.91,102.55,102.52,105.30,106.55,105.83,107.99],
};

const chartData = Array.from({ length: 34 }, (_, i) => ({
  month: i + 3,
  "2020": RAW["2020"][i] ?? null,
  "2021": RAW["2021"][i] ?? null,
  "2022": RAW["2022"][i] ?? null,
  "2023": RAW["2023"][i] ?? null,
}));

const LINE_COLORS: Record<string, string> = {
  "2020": "#3B7DD8",
  "2021": "#C0592B",
  "2022": "#1B4F72",
  "2023": "#D4922A",
};

/* ═══════ METRICS ═══════ */
const METRICS = [
  { value: "1.48×", label: "MRR growth vs. signup" },
  { value: "72.5%", label: "customers expanded MRR" },
  { value: "15.1%", label: "of customers doubled MRR" },
];

const SPEAKER_NOTES =
  "Combined expansion and retention view. 72.5% of customers expand MRR after signup, with the median cohort growing 1.48x. Expansion comes from both seat growth (1.23x) and ARPU lift (~20%). Dollar-weighted MRR survival curves for the >$500-at-signup segment show every vintage year exceeds 100% by month 12, demonstrating that higher-value customers are a net expansion engine.";

const SlideExpansionRetention = ({ slideNumber = "20" }: { slideNumber?: string }) => (
  <div
    data-speaker-notes={SPEAKER_NOTES}
    style={{
      width: 1920,
      height: 1080,
      background: COLORS.dawnCream,
      display: "flex",
      flexDirection: "column",
      fontFamily: FONTS.body,
      overflow: "hidden",
    }}
  >
    {/* Header — centered */}
    <header style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>
        Customer Expansion
      </p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 64, fontWeight: 600, color: COLORS.navy, margin: "8px 0 0", lineHeight: 1.15 }}>
        Customer Expansion After Signup.
      </h1>
      <p style={{ fontSize: 22, color: COLORS.darkWarmGray, margin: "8px 0 0", lineHeight: 1.5 }}>
        Customers materially expand spending after signup, driven by both organic user base growth and product attach rates.
      </p>
    </header>

    {/* Top section: Expansion Drivers card + 3 metric cards */}
    <div style={{ display: "flex", gap: 20, padding: "20px 100px 0", flexShrink: 0 }}>
      {/* Left: Expansion Drivers card */}
      <div
        style={{
          flex: "0 0 65%",
          background: COLORS.pureWhite,
          border: `1px solid ${COLORS.paleWarm}`,
          borderRadius: 16,
          padding: "24px 32px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>
          MRR Expansion Drivers
        </p>
        <p style={{ fontSize: 24, color: COLORS.midWarmGray, margin: "6px 0 16px", lineHeight: 1.5 }}>
          Expansion comes from both adding seats (lines) and from product mix &amp; pricing — MRR grows faster than seats, indicating meaningful ARPU expansion.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 28, fontWeight: 600 }}>
          <span>
            <span style={{ fontFamily: FONTS.heading, fontSize: 40, color: COLORS.brandBlue }}>1.23×</span>{" "}
            <span style={{ color: COLORS.darkWarmGray, fontSize: 18 }}>Seats / lines</span>
          </span>
          <span style={{ color: COLORS.warmGray, fontSize: 32 }}>+</span>
          <span>
            <span style={{ fontFamily: FONTS.heading, fontSize: 40, color: COLORS.brandBlue }}>20%</span>{" "}
            <span style={{ color: COLORS.darkWarmGray, fontSize: 18 }}>ARPU lift</span>
          </span>
          <span style={{ color: COLORS.warmGray, fontSize: 32 }}>=</span>
          <span>
            <span style={{ fontFamily: FONTS.heading, fontSize: 40, color: COLORS.navy }}>1.48×</span>{" "}
            <span style={{ color: COLORS.darkWarmGray, fontSize: 18 }}>Total MRR</span>
          </span>
        </div>
      </div>

      {/* Right: 3 stacked metric cards */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        {METRICS.map((m) => (
          <article
            key={m.label}
            style={{
              flex: 1,
              background: COLORS.pureWhite,
              border: `1px solid ${COLORS.paleWarm}`,
              borderRadius: 16,
              padding: "14px 22px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ fontFamily: FONTS.heading, fontSize: 36, fontWeight: 700, color: COLORS.navy, margin: 0, lineHeight: 1.1 }}>
              {m.value}
            </p>
            <p style={{ fontSize: 15, color: COLORS.darkWarmGray, margin: "4px 0 0", fontWeight: 500 }}>
              {m.label}
            </p>
          </article>
        ))}
      </div>
    </div>

    {/* Bottom section: Cohort bars (1/3) + Retention curves (2/3) */}
    <main style={{ flex: 1, display: "flex", gap: 40, padding: "16px 100px 0", minHeight: 0 }}>
      {/* Left 1/3: Cohort MRR Growth bars */}
      <div style={{ flex: "0 0 30%" }}>
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: COLORS.brandBlue, margin: "0 0 2px" }}>
          Cohort MRR Growth
        </p>
        <p style={{ fontSize: 16, color: COLORS.warmGray, margin: "0 0 8px", lineHeight: 1.4 }}>
          Active Customer avg MRR versus avg MRR at signup by cohort
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {COHORT_BARS.map((b) => {
            const pct = (b.value / cohortMax) * 100;
            return (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 70, fontSize: 14, color: COLORS.darkWarmGray, textAlign: "right", flexShrink: 0, fontWeight: b.label === "Pre-2020" ? 600 : 400 }}>
                  {b.label}
                </span>
                <div style={{ flex: 1, height: 16, background: COLORS.paleWarm, borderRadius: 3, overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${pct}%`,
                      height: "100%",
                      background: b.label === "Pre-2020" ? COLORS.navy : COLORS.brandBlue,
                      borderRadius: 3,
                    }}
                  />
                </div>
                <span style={{ width: 42, fontSize: 14, fontWeight: 600, color: COLORS.navy, flexShrink: 0 }}>
                  {b.value.toFixed(2)}×
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right 2/3: MRR Retention Curves */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 4 }}>
          <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>
            36-month MRR Retention Curves
          </p>
          <p style={{ fontSize: 16, fontWeight: 400, color: COLORS.warmGray, margin: "2px 0 0" }}>
            Cohorts by signup year. Customers above $6,000 ARR at signup.
          </p>
        </div>

        <LineChart width={1060} height={340} data={chartData} margin={{ top: 8, right: 16, bottom: 4, left: 4 }}>
          <CartesianGrid horizontal vertical={false} stroke={COLORS.paleWarm} strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            type="number"
            domain={[3, 36]}
            ticks={[6, 12, 18, 24, 30, 36]}
            tick={{ fontSize: 13, fill: COLORS.midWarmGray, fontFamily: FONTS.body }}
            tickLine={false}
            axisLine={{ stroke: COLORS.paleWarm }}
            label={{ value: "Months from Signup", position: "insideBottom", offset: -2, fontSize: 12, fill: COLORS.warmGray, fontFamily: FONTS.body }}
          />
          <YAxis
            domain={[95, 125]}
            ticks={[95, 100, 105, 110, 115, 120, 125]}
            tick={{ fontSize: 13, fill: COLORS.midWarmGray, fontFamily: FONTS.body }}
            tickLine={false}
            axisLine={{ stroke: COLORS.paleWarm }}
            tickFormatter={(v: number) => `${v}%`}
            width={44}
          />
          <ReferenceLine y={100} stroke={COLORS.warmGray} strokeDasharray="8 4" />
          <Tooltip
            contentStyle={{ background: COLORS.pureWhite, border: `1px solid ${COLORS.paleWarm}`, borderRadius: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.08)", fontFamily: FONTS.body, fontSize: 13 }}
            formatter={(value: number, name: string) => [`${value.toFixed(1)}%`, name]}
            labelFormatter={(label: number) => `Month ${label}`}
          />
          {(["2020", "2021", "2022", "2023"] as const).map((year) => (
            <Line
              key={year}
              dataKey={year}
              type="monotone"
              stroke={LINE_COLORS[year]}
              strokeWidth={2.5}
              strokeDasharray={year === "2023" ? "6 3" : undefined}
              dot={false}
              connectNulls
              isAnimationActive={false}
            />
          ))}
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 13, fontFamily: FONTS.body, color: COLORS.charcoal, paddingTop: 4 }}
          />
        </LineChart>
      </div>
    </main>

    {/* Footnote */}
    <p style={{ textAlign: "center", fontSize: 11, color: COLORS.warmGray, margin: "0 100px 4px", lineHeight: 1.4, fontFamily: FONTS.body }}>
      Trailing 3-month smoothed MRR retention. Dollar-weighted by MRR at observation. Segment fixed at signup (&gt;$500/mo ≈ $6K ARR). Data: Jan 2020 – Jan 2026.
    </p>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideExpansionRetention;
