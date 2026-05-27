"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_DEEP = "#1A447C";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";
const GROWTH = "#1E7E5E";
const GRID = "rgba(6,26,55,0.08)";
const TICK = "rgba(6,26,55,0.55)";
const AXIS = "rgba(6,26,55,0.18)";

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
  "2020": "#2860B2",
  "2021": "#C76B3F",
  "2022": "#4A86C6",
  "2023": "#B8860B",
};

const METRICS = [
  { value: "1.48\u00d7", label: "MRR growth vs. signup" },
  { value: "72.5%", label: "customers expanded MRR" },
  { value: "15.1%", label: "of customers doubled MRR" },
];

export default function FutureExpansionRetentionCopySlide({
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
        transition={{ duration: 0.6 }}
        style={{ padding: "36px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
            fontSize: 14,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Customer Expansion
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: NAVY,
            marginTop: 8,
            lineHeight: 1.12,
          }}
        >
          Customer expansion after signup.
        </h1>
        <p style={{ fontSize: 18, color: BODY, marginTop: 8, lineHeight: 1.5 }}>
          Customers materially expand spending after signup, driven by organic user base growth and product attach.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ display: "flex", gap: 20, padding: "16px 100px 0", flexShrink: 0 }}
      >
        <div
          style={{
            flex: "0 0 65%",
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: CARD_BG,
            border: `1px solid ${CARD_BORDER}`,
            borderLeft: `3px solid ${BLUE}`,
            borderRadius: 10,
          }}
        >
          <p
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: BLUE,
              margin: 0,
            }}
          >
            MRR Expansion Drivers
          </p>
          <p style={{ fontSize: 16, color: BODY, margin: "6px 0 14px", lineHeight: 1.5 }}>
            Expansion comes from both adding seats (lines) and from product mix &amp; pricing — MRR grows faster than seats, indicating meaningful ARPU expansion.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 18, fontWeight: 600 }}>
            <span>
              <span className="font-heading" style={{ fontSize: 32, color: BLUE }}>
                1.23&times;
              </span>{" "}
              <span style={{ color: MUTED, fontSize: 14 }}>Seats / lines</span>
            </span>
            <span style={{ color: MUTED, fontSize: 24 }}>+</span>
            <span>
              <span className="font-heading" style={{ fontSize: 32, color: BLUE }}>
                20%
              </span>{" "}
              <span style={{ color: MUTED, fontSize: 14 }}>ARPU lift</span>
            </span>
            <span style={{ color: MUTED, fontSize: 24 }}>=</span>
            <span>
              <span className="font-heading" style={{ fontSize: 32, color: GROWTH }}>
                1.48&times;
              </span>{" "}
              <span style={{ color: MUTED, fontSize: 14 }}>Total MRR</span>
            </span>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {METRICS.map((m) => (
            <div
              key={m.label}
              style={{
                flex: 1,
                padding: "12px 20px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
                borderRadius: 10,
              }}
            >
              <p
                className="font-heading"
                style={{ fontSize: 30, fontWeight: 700, color: NAVY, margin: 0, lineHeight: 1.1 }}
              >
                {m.value}
              </p>
              <p style={{ fontSize: 13, color: BODY, margin: "4px 0 0", fontWeight: 500 }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ flex: 1, display: "flex", gap: 36, padding: "14px 100px 0", minHeight: 0 }}
      >
        <div style={{ flex: "0 0 30%" }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: BLUE,
              margin: "0 0 2px",
            }}
          >
            Cohort MRR Growth
          </p>
          <p style={{ fontSize: 13, color: BODY, margin: "0 0 8px", lineHeight: 1.4 }}>
            Active customer avg MRR vs. avg MRR at signup by cohort.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {COHORT_BARS.map((b) => {
              const pct = (b.value / cohortMax) * 100;
              return (
                <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span
                    style={{
                      width: 65,
                      fontSize: 12,
                      color: BODY,
                      textAlign: "right",
                      flexShrink: 0,
                      fontWeight: b.label === "Pre-2020" ? 600 : 400,
                    }}
                  >
                    {b.label}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: 14,
                      background: "rgba(6,26,55,0.06)",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${pct}%`,
                        height: "100%",
                        background: b.label === "Pre-2020" ? BLUE_DEEP : BLUE,
                        borderRadius: 3,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      width: 40,
                      fontSize: 12,
                      fontWeight: 600,
                      color: NAVY_DARK,
                      flexShrink: 0,
                    }}
                  >
                    {b.value.toFixed(2)}&times;
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 4 }}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: BLUE,
                margin: 0,
              }}
            >
              36-month MRR retention curves
            </p>
            <p style={{ fontSize: 12, fontWeight: 400, color: BODY, margin: "2px 0 0" }}>
              Cohorts by signup year. Customers above $6,000 ARR at signup.
            </p>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={chartData} margin={{ top: 8, right: 16, bottom: 4, left: 4 }}>
              <CartesianGrid horizontal vertical={false} stroke={GRID} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                type="number"
                domain={[3, 36]}
                ticks={[6, 12, 18, 24, 30, 36]}
                tick={{ fontSize: 12, fill: TICK, fontFamily: "'Space Grotesk', sans-serif" }}
                tickLine={false}
                axisLine={{ stroke: AXIS }}
                label={{
                  value: "Months from signup",
                  position: "insideBottom",
                  offset: -2,
                  fontSize: 11,
                  fill: MUTED,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              />
              <YAxis
                domain={[95, 125]}
                ticks={[95, 100, 105, 110, 115, 120, 125]}
                tick={{ fontSize: 12, fill: TICK, fontFamily: "'Space Grotesk', sans-serif" }}
                tickLine={false}
                axisLine={{ stroke: AXIS }}
                tickFormatter={(v: number) => `${v}%`}
                width={44}
              />
              <ReferenceLine y={100} stroke="rgba(6,26,55,0.3)" strokeDasharray="8 4" />
              <Tooltip
                contentStyle={{
                  background: "#FFFFFF",
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: 10,
                  boxShadow: "0 4px 12px rgba(6,26,55,0.08)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  color: NAVY_DARK,
                }}
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
                wrapperStyle={{
                  fontSize: 12,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: BODY,
                  paddingTop: 4,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.main>

      <p
        style={{
          textAlign: "center",
          fontSize: 11,
          color: MUTED,
          margin: "0 100px 4px",
          lineHeight: 1.4,
        }}
      >
        Trailing 3-month smoothed MRR retention. Dollar-weighted by MRR at observation. Segment fixed at signup (&gt;$500/mo &asymp; $6K ARR). Data: Jan 2020 – Jan 2026.
      </p>

      <footer
        style={{
          padding: "6px 100px 18px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Customer Expansion · 1.48× MRR growth post-signup
      </footer>
    </div>
  );
}
