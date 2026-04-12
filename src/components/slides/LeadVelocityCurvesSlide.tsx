"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

// Data source: CloseVelocityData_2026-04-11.xlsx (Salesforce export).
// Each point is [day, cumulative % of closed-won deals by that day].
// 2023-2026 annual cohorts; size buckets Micro SMB, VSMB, SMB.
// Mid-Market + Enterprise rows are excluded — too sparse to chart cleanly.

// Year cohort palette: 2026 (hero / most recent) is brightest.
const COHORT_COLORS: Record<number, string> = {
  2026: "#7EB3E8",
  2025: "#5A8FC4",
  2024: "#406B9C",
  2023: "#2A4D75",
};

const COHORT_YEARS = [2026, 2025, 2024, 2023] as const;

type Point = readonly [number, number]; // [day, cumulativePct]

interface PanelData {
  label: string;
  sublabel: string;
  cohorts: Record<number, readonly Point[]>;
}

const PANELS: readonly PanelData[] = [
  {
    label: "Micro SMB",
    sublabel: "1–2 users",
    cohorts: {
      2026: [
        [0, 53.0],
        [1, 66.4],
        [2, 70.0],
        [3, 74.6],
        [4, 77.4],
        [5, 79.8],
        [6, 81.7],
        [7, 83.3],
        [8, 85.9],
        [9, 86.7],
        [10, 87.4],
        [11, 88.0],
        [12, 88.5],
        [13, 89.0],
        [14, 89.9],
        [15, 90.7],
        [16, 91.6],
        [17, 92.2],
        [18, 92.5],
      ],
      2025: [
        [0, 59.9],
        [1, 72.0],
        [2, 76.1],
        [3, 79.0],
        [4, 80.9],
        [5, 82.9],
        [6, 85.2],
        [7, 87.0],
        [8, 88.2],
        [9, 88.9],
        [10, 89.4],
        [11, 90.0],
        [12, 90.4],
        [13, 91.0],
        [14, 91.5],
        [15, 92.1],
        [16, 92.4],
        [17, 92.8],
        [18, 93.0],
      ],
      2024: [
        [0, 58.8],
        [1, 70.6],
        [2, 75.7],
        [3, 79.2],
        [4, 81.5],
        [5, 83.3],
        [6, 84.9],
        [7, 86.5],
        [8, 87.5],
        [9, 88.2],
        [10, 88.8],
        [11, 89.4],
        [12, 89.9],
        [13, 90.6],
        [14, 91.2],
        [15, 91.6],
        [16, 92.1],
        [17, 92.3],
        [18, 92.5],
      ],
      2023: [
        [0, 61.0],
        [1, 73.5],
        [2, 77.8],
        [3, 80.8],
        [4, 83.2],
        [5, 84.8],
        [6, 86.6],
        [7, 87.9],
        [8, 89.0],
        [9, 89.7],
        [10, 90.2],
        [11, 90.6],
        [12, 91.0],
        [13, 91.5],
        [14, 91.9],
        [15, 92.2],
        [16, 92.4],
        [17, 92.6],
        [18, 92.8],
      ],
    },
  },
  {
    label: "VSMB",
    sublabel: "3–10 users",
    cohorts: {
      2026: [
        [0, 36.3],
        [1, 47.9],
        [2, 55.2],
        [3, 60.9],
        [4, 64.8],
        [5, 68.1],
        [6, 71.5],
        [7, 75.5],
        [8, 78.9],
        [9, 81.1],
        [10, 82.4],
        [11, 84.1],
        [12, 84.5],
        [13, 87.0],
        [14, 88.7],
        [15, 89.5],
        [16, 89.8],
        [17, 90.3],
        [18, 90.5],
      ],
      2025: [
        [0, 36.6],
        [1, 48.7],
        [2, 53.4],
        [3, 57.2],
        [4, 59.8],
        [5, 62.8],
        [6, 66.4],
        [7, 69.4],
        [8, 71.4],
        [9, 73.1],
        [10, 74.8],
        [11, 75.9],
        [12, 77.7],
        [13, 78.4],
        [14, 80.2],
        [15, 81.2],
        [16, 82.2],
        [17, 83.0],
        [18, 83.6],
      ],
      2024: [
        [0, 40.9],
        [1, 52.2],
        [2, 56.8],
        [3, 61.1],
        [4, 64.8],
        [5, 67.3],
        [6, 69.9],
        [7, 72.4],
        [8, 74.6],
        [9, 75.9],
        [10, 76.8],
        [11, 77.9],
        [12, 78.9],
        [13, 80.0],
        [14, 81.4],
        [15, 82.3],
        [16, 82.9],
        [17, 83.6],
        [18, 84.2],
      ],
      2023: [
        [0, 42.1],
        [1, 54.3],
        [2, 59.8],
        [3, 63.6],
        [4, 66.5],
        [5, 68.8],
        [6, 71.3],
        [7, 73.9],
        [8, 76.2],
        [9, 77.6],
        [10, 78.6],
        [11, 79.7],
        [12, 80.6],
        [13, 81.3],
        [14, 82.8],
        [15, 83.6],
        [16, 84.2],
        [17, 84.7],
        [18, 85.1],
      ],
    },
  },
  {
    label: "SMB",
    sublabel: "11–100 users",
    cohorts: {
      2026: [
        [0, 10.8],
        [1, 15.5],
        [2, 24.9],
        [3, 30.1],
        [4, 35.5],
        [5, 49.7],
        [6, 51.9],
        [7, 53.2],
        [8, 58.1],
        [9, 59.0],
        [10, 59.9],
        [11, 60.9],
        [12, 60.9],
        [13, 62.2],
        [14, 63.4],
        [15, 66.2],
        [16, 69.1],
        [17, 73.3],
        [18, 73.3],
      ],
      2025: [
        [0, 16.2],
        [1, 21.8],
        [2, 28.5],
        [3, 30.8],
        [4, 32.3],
        [5, 34.9],
        [6, 37.9],
        [7, 41.9],
        [8, 43.3],
        [9, 44.7],
        [10, 46.5],
        [11, 47.5],
        [12, 48.1],
        [13, 48.7],
        [14, 50.1],
        [15, 52.2],
        [16, 54.1],
        [17, 55.1],
        [18, 55.7],
      ],
      2024: [
        [0, 10.2],
        [1, 16.3],
        [2, 20.0],
        [3, 23.3],
        [4, 25.2],
        [5, 26.5],
        [6, 28.8],
        [7, 33.3],
        [8, 35.9],
        [9, 38.0],
        [10, 38.5],
        [11, 39.4],
        [12, 39.7],
        [13, 40.9],
        [14, 42.8],
        [15, 45.2],
        [16, 47.0],
        [17, 47.8],
        [18, 48.6],
      ],
      2023: [
        [0, 12.8],
        [1, 17.6],
        [2, 20.0],
        [3, 22.8],
        [4, 25.7],
        [5, 27.2],
        [6, 30.0],
        [7, 32.7],
        [8, 35.5],
        [9, 39.7],
        [10, 41.0],
        [11, 42.5],
        [12, 43.7],
        [13, 44.6],
        [14, 45.4],
        [15, 47.5],
        [16, 49.1],
        [17, 49.6],
        [18, 50.7],
      ],
    },
  },
];

// SVG plot geometry — viewBox is fixed; the SVG scales to its container.
const VBW = 320;
const VBH = 200;
const PAD_L = 38;
const PAD_R = 16;
const PAD_T = 18;
const PAD_B = 30;
const PLOT_W = VBW - PAD_L - PAD_R;
const PLOT_H = VBH - PAD_T - PAD_B;
const MAX_DAYS = 18;

const scaleX = (d: number) => PAD_L + (d / MAX_DAYS) * PLOT_W;
const scaleY = (p: number) => PAD_T + ((100 - p) / 100) * PLOT_H;

const pointsToPath = (points: readonly Point[]) =>
  points
    .map(
      ([d, p], i) =>
        `${i === 0 ? "M" : "L"} ${scaleX(d).toFixed(1)} ${scaleY(p).toFixed(1)}`,
    )
    .join(" ");

// Bottom hero band — "close within a week" using a uniform 7-day window
// so the comparison across segments is honest and consistent.
// Averaged across 2023-2026 cohorts. Source: CloseVelocityData_2026-04-11.xlsx
const BOTTOM_HERO = [
  { bucket: "Micro SMB (1–2)", pct: "86%", window: "within 7 days" },
  { bucket: "VSMB (3–10)", pct: "73%", window: "within 7 days" },
  { bucket: "SMB (11–100)", pct: "40%", window: "within 7 days" },
];

export default function LeadVelocityCurvesSlide({
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
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "52px 100px 0",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          GTM ENGINE · CONVERSION VELOCITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 54,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.1,
          }}
        >
          Demand arrives ready to buy.{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #0070F3, #00C2FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            We close it in days.
          </span>
        </h1>
        <p
          style={{
            fontSize: 19,
            color: "rgba(255,255,255,0.5)",
            margin: "12px 0 0",
            lineHeight: 1.5,
          }}
        >
          Cumulative share of closed-won deals by days from lead creation. Four
          annual cohorts, three deal-size segments, one consistent engine.
        </p>
      </motion.header>

      {/* CENTERPIECE — small-multiple S-curve panels */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "20px 80px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", gap: 18, width: "100%" }}>
          {PANELS.map((panel, panelIdx) => (
            <motion.article
              key={panel.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + panelIdx * 0.1 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "3px solid #2860B2",
                borderRadius: 14,
                padding: "20px 20px 16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {panel.label}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  margin: "3px 0 10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                }}
              >
                {panel.sublabel}
              </p>

              <svg
                viewBox={`0 0 ${VBW} ${VBH}`}
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                {/* Y-axis gridlines at 0/25/50/75/100 */}
                {[0, 25, 50, 75, 100].map((p) => (
                  <g key={p}>
                    <line
                      x1={PAD_L}
                      x2={VBW - PAD_R}
                      y1={scaleY(p)}
                      y2={scaleY(p)}
                      stroke="rgba(255,255,255,0.07)"
                      strokeWidth={1}
                    />
                    <text
                      x={PAD_L - 6}
                      y={scaleY(p) + 3}
                      textAnchor="end"
                      fill="rgba(255,255,255,0.4)"
                      fontSize={9}
                      fontFamily="Space Grotesk, sans-serif"
                    >
                      {p}%
                    </text>
                  </g>
                ))}

                {/* X-axis day labels — include day 0 (same-day close) */}
                {[0, 3, 7, 14, 18].map((d) => (
                  <text
                    key={d}
                    x={scaleX(d)}
                    y={VBH - PAD_B + 14}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.4)"
                    fontSize={9}
                    fontFamily="Space Grotesk, sans-serif"
                  >
                    {d === 0 ? "same day" : `${d}d`}
                  </text>
                ))}

                {/* Axis baseline */}
                <line
                  x1={PAD_L}
                  x2={VBW - PAD_R}
                  y1={scaleY(0)}
                  y2={scaleY(0)}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth={1}
                />

                {/* Cohort curves — draw oldest first so newest sits on top */}
                {[...COHORT_YEARS].reverse().map((year, i) => {
                  const points = panel.cohorts[year];
                  const isHeroYear = year === 2026;
                  return (
                    <motion.path
                      key={year}
                      d={pointsToPath(points)}
                      fill="none"
                      stroke={COHORT_COLORS[year]}
                      strokeWidth={isHeroYear ? 2.6 : 1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        pathLength: {
                          duration: 1.0,
                          delay: 0.45 + panelIdx * 0.1 + i * 0.06,
                        },
                        opacity: {
                          duration: 0.3,
                          delay: 0.45 + panelIdx * 0.1 + i * 0.06,
                        },
                      }}
                    />
                  );
                })}
              </svg>
            </motion.article>
          ))}
        </div>
      </main>

      {/* Cohort legend strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.85 }}
        style={{
          padding: "10px 100px 0",
          display: "flex",
          justifyContent: "center",
          gap: 22,
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {COHORT_YEARS.map((year) => (
          <div
            key={year}
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            <span
              style={{
                width: 22,
                height: 2.5,
                background: COHORT_COLORS[year],
                borderRadius: 1,
              }}
            />
            <span
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {year}
              {year === 2026 && (
                <span
                  style={{
                    marginLeft: 4,
                    color: "rgba(255,255,255,0.35)",
                    fontSize: 11,
                    fontWeight: 500,
                  }}
                >
                  YTD
                </span>
              )}
            </span>
          </div>
        ))}
      </motion.div>

      {/* BOTTOM HERO BAND — 7-day close rate by segment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        style={{
          padding: "18px 80px 24px",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            background:
              "linear-gradient(135deg, rgba(0,112,243,0.1), rgba(0,194,255,0.08))",
            border: "1px solid rgba(0,112,243,0.2)",
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          {BOTTOM_HERO.map((h, i) => (
            <div
              key={h.bucket}
              style={{
                flex: 1,
                padding: "18px 20px",
                textAlign: "center",
                borderRight:
                  i < BOTTOM_HERO.length - 1
                    ? "1px solid rgba(0,112,243,0.15)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                }}
              >
                {h.bucket}
              </p>
              <p
                className="font-heading"
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "6px 0 0",
                  lineHeight: 1.1,
                }}
              >
                {h.pct}{" "}
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {h.window}
                </span>
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
