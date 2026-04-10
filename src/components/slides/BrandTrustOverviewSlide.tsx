"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const mindsetData = [
  { name: "Pre-Sold", pct: 1.9, avgScore: "9.0", fill: "#6EE7B7" },
  { name: "Warm", pct: 37.5, avgScore: "7.1", fill: "#7BB3E0" },
  { name: "Neutral", pct: 57.0, avgScore: "5.6", fill: "#E8B84D" },
  { name: "Skeptical", pct: 3.5, avgScore: "3.0", fill: "#E07E7E" },
];

const awarenessLevels = [
  { label: "High", pct: 0.9, color: "#6EE7B7" },
  { label: "Medium", pct: 62, color: "#7BB3E0" },
  { label: "Low", pct: 16, color: "#E8B84D" },
  { label: "None", pct: 22, color: "#E07E7E" },
];

const initiatedComparison = [
  {
    label: "Customer-Initiated",
    pct: "10%",
    stats: [
      { key: "Avg Score", value: "6.7", highlight: true },
      { key: "Skeptics", value: "0%" },
      { key: "Warm", value: "66%" },
    ],
  },
  {
    label: "Rep-Initiated",
    pct: "90%",
    stats: [
      { key: "Avg Score", value: "6.0", highlight: false },
      { key: "Skeptics", value: "4%" },
      { key: "Warm", value: "35%" },
    ],
  },
];

export default function BrandTrustOverviewSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          Brand Trust Analysis — 1,383 SB Calls
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          1,156 calls decoded.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            margin: "10px auto 0",
            maxWidth: 680,
            lineHeight: 1.5,
          }}
        >
          Every SB call where XBert AI was discussed — analyzed for trust,
          awareness, and mindset
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "16px 100px 0",
          display: "flex",
          gap: 24,
          minHeight: 0,
        }}
      >
        {/* Left — Entry Mindset chart */}
        <div
          style={{
            flex: "1 1 55%",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#7BB3E0",
              margin: "0 0 12px",
            }}
          >
            Entry Mindset Distribution
          </p>

          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              padding: "20px 16px 12px",
              minHeight: 0,
            }}
          >
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                data={mindsetData}
                layout="vertical"
                margin={{ top: 8, right: 60, left: 8, bottom: 8 }}
                barSize={28}
              >
                <XAxis type="number" domain={[0, 65]} hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  width={80}
                  tick={{
                    fontSize: 15,
                    fontWeight: 600,
                    fill: "rgba(255,255,255,0.7)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                />
                <Bar dataKey="pct" radius={[0, 8, 8, 0]}>
                  {mindsetData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} opacity={0.85} />
                  ))}
                  <LabelList
                    dataKey="pct"
                    position="right"
                    formatter={(v: unknown) => `${v}%`}
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      fill: "rgba(255,255,255,0.6)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    offset={8}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Score annotations */}
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                padding: "4px 8px 0",
              }}
            >
              {mindsetData.map((d) => (
                <div
                  key={d.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 2,
                      background: d.fill,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {d.name}: avg{" "}
                    <span style={{ fontWeight: 700, color: d.fill }}>
                      {d.avgScore}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pill badges */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 12,
              flexWrap: "wrap",
            }}
          >
            {[
              { text: "83% assume AI works", color: "#6EE7B7" },
              { text: "92% rep-initiated", color: "#7BB3E0" },
              { text: "Only 3.5% skeptical", color: "#E07E7E" },
            ].map((pill) => (
              <span
                key={pill.text}
                style={{
                  display: "inline-block",
                  padding: "5px 14px",
                  borderRadius: 20,
                  border: `1.5px solid ${pill.color}`,
                  fontSize: 12,
                  fontWeight: 600,
                  color: pill.color,
                  background: `${pill.color}10`,
                }}
              >
                {pill.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Metric cards */}
        <div
          style={{
            flex: "1 1 45%",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            minWidth: 0,
          }}
        >
          {/* Card 1: Awareness Distribution */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "18px 22px",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7BB3E0",
                margin: "0 0 12px",
              }}
            >
              Customer Awareness Level
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {awarenessLevels.map((level) => (
                <div key={level.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 3,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {level.label}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: level.color,
                      }}
                    >
                      {level.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 3,
                      background: "rgba(255,255,255,0.06)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${Math.max(level.pct, 2)}%`,
                        borderRadius: 3,
                        background: level.color,
                        opacity: 0.8,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Card 2: Customer-Initiated Advantage */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "18px 22px",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7BB3E0",
                margin: "0 0 12px",
              }}
            >
              Customer-Initiated vs Rep-Initiated
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              {initiatedComparison.map((col) => (
                <div
                  key={col.label}
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    borderRadius: 10,
                    background:
                      col.label === "Customer-Initiated"
                        ? "rgba(110,231,183,0.08)"
                        : "rgba(255,255,255,0.03)",
                    border:
                      col.label === "Customer-Initiated"
                        ? "1px solid rgba(110,231,183,0.2)"
                        : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color:
                        col.label === "Customer-Initiated"
                          ? "#6EE7B7"
                          : "rgba(255,255,255,0.5)",
                      margin: "0 0 2px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {col.label}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.3)",
                      margin: "0 0 8px",
                    }}
                  >
                    {col.pct} of calls
                  </p>
                  {col.stats.map((s) => (
                    <div
                      key={s.key}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "2px 0",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {s.key}
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: s.highlight ? "#6EE7B7" : "#FFFFFF",
                        }}
                      >
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.article>

          {/* Card 3: High Awareness = High Trust */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              background: "rgba(110,231,183,0.06)",
              border: "1px solid rgba(110,231,183,0.2)",
              borderRadius: 14,
              padding: "18px 22px",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            {/* Arc indicator */}
            <div
              style={{
                position: "relative",
                width: 80,
                height: 80,
                flexShrink: 0,
              }}
            >
              <svg width={80} height={80} viewBox="0 0 80 80">
                {/* Background arc */}
                <circle
                  cx={40}
                  cy={40}
                  r={34}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth={6}
                />
                {/* Fill arc — 70% = 252 degrees of 360 */}
                <circle
                  cx={40}
                  cy={40}
                  r={34}
                  fill="none"
                  stroke="#6EE7B7"
                  strokeWidth={6}
                  strokeDasharray={`${0.7 * 2 * Math.PI * 34} ${
                    0.3 * 2 * Math.PI * 34
                  }`}
                  strokeDashoffset={2 * Math.PI * 34 * 0.25}
                  strokeLinecap="round"
                />
                <text
                  x={40}
                  y={38}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    fill: "#FFFFFF",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  70%
                </text>
                <text
                  x={40}
                  y={53}
                  textAnchor="middle"
                  style={{
                    fontSize: 9,
                    fill: "rgba(255,255,255,0.45)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  high-trust
                </text>
              </svg>
            </div>

            <div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "0 0 4px",
                  lineHeight: 1.3,
                }}
              >
                High Awareness = High Trust
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                40% customer-initiated vs 10% baseline.
                <br />
                Avg score 7.6 vs 6.1 population.
              </p>
            </div>
          </motion.article>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
