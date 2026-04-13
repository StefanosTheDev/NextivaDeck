"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import SegmentHeaderBox from "./shared/SegmentHeaderBox";

const COHORT_COLORS: Record<number, string> = {
  2026: "#7EB3E8",
  2025: "#5A8FC4",
  2024: "#406B9C",
  2023: "#2A4D75",
};

const COHORT_YEARS = [2026, 2025, 2024, 2023] as const;

type Point = readonly [number, number];

interface PanelData {
  box: {
    name: string;
    range: string;
    badges: readonly string[];
    customers: string;
    custPct: string;
    arr: string;
    arrPct: string;
  };
  cohorts: Record<number, readonly Point[]>;
}

const PANELS: readonly PanelData[] = [
  {
    box: {
      name: "VSB",
      range: "Up to 10 Users",
      badges: ["NEXT", "NextOS", "XBert AI", "NextivaONE"],
      customers: "80,200",
      custPct: "86% of total",
      arr: "$142M",
      arrPct: "41% of total",
    },
    cohorts: {
      2026: [
        [0, 45.2], [1, 57.8], [2, 63.0], [3, 68.1], [4, 71.4],
        [5, 74.2], [6, 76.9], [7, 79.7], [8, 82.5], [9, 84.1],
        [10, 85.0], [11, 86.1], [12, 86.6], [13, 88.1], [14, 89.2],
        [15, 90.0], [16, 90.7], [17, 91.2], [18, 91.5],
      ],
      2025: [
        [0, 48.9], [1, 61.1], [2, 65.4], [3, 68.8], [4, 71.1],
        [5, 73.7], [6, 76.5], [7, 79.0], [8, 80.5], [9, 81.6],
        [10, 82.7], [11, 83.5], [12, 84.6], [13, 85.2], [14, 86.3],
        [15, 87.1], [16, 87.8], [17, 88.4], [18, 88.8],
      ],
      2024: [
        [0, 50.5], [1, 62.1], [2, 67.0], [3, 70.9], [4, 73.8],
        [5, 76.0], [6, 78.2], [7, 80.2], [8, 81.6], [9, 82.6],
        [10, 83.4], [11, 84.3], [12, 85.1], [13, 86.0], [14, 86.9],
        [15, 87.5], [16, 88.0], [17, 88.5], [18, 88.8],
      ],
      2023: [
        [0, 51.2], [1, 63.7], [2, 68.5], [3, 71.9], [4, 74.6],
        [5, 76.6], [6, 78.8], [7, 80.9], [8, 82.6], [9, 83.6],
        [10, 84.4], [11, 85.1], [12, 85.8], [13, 86.3], [14, 87.3],
        [15, 87.9], [16, 88.3], [17, 88.7], [18, 89.0],
      ],
    },
  },
  {
    box: {
      name: "SMB",
      range: "10 to 50 Users",
      badges: ["NEXT", "XBert AI", "Experience Center"],
      customers: "11,000",
      custPct: "12% of total",
      arr: "$105M",
      arrPct: "30% of total",
    },
    cohorts: {
      2026: [
        [0, 14.1], [1, 19.7], [2, 30.0], [3, 35.6], [4, 41.2],
        [5, 50.8], [6, 52.7], [7, 53.9], [8, 59.6], [9, 60.4],
        [10, 61.9], [11, 62.8], [12, 62.8], [13, 63.9], [14, 66.0],
        [15, 68.6], [16, 71.3], [17, 75.0], [18, 75.0],
      ],
      2025: [
        [0, 16.6], [1, 23.7], [2, 30.7], [3, 33.5], [4, 35.3],
        [5, 36.9], [6, 40.6], [7, 44.9], [8, 46.8], [9, 48.6],
        [10, 50.6], [11, 51.8], [12, 52.8], [13, 53.6], [14, 55.3],
        [15, 57.3], [16, 58.5], [17, 59.4], [18, 60.2],
      ],
      2024: [
        [0, 15.0], [1, 23.1], [2, 27.1], [3, 31.7], [4, 34.5],
        [5, 36.3], [6, 39.3], [7, 44.7], [8, 47.3], [9, 50.0],
        [10, 50.5], [11, 51.3], [12, 51.9], [13, 53.5], [14, 55.3],
        [15, 57.1], [16, 58.8], [17, 59.9], [18, 61.1],
      ],
      2023: [
        [0, 19.1], [1, 26.1], [2, 30.1], [3, 33.8], [4, 36.5],
        [5, 38.5], [6, 41.7], [7, 44.9], [8, 48.2], [9, 49.6],
        [10, 51.1], [11, 52.3], [12, 53.7], [13, 54.9], [14, 56.2],
        [15, 57.7], [16, 59.6], [17, 60.4], [18, 61.6],
      ],
    },
  },
];

const VBW = 320;
const VBH = 150;
const PAD_L = 38;
const PAD_R = 16;
const PAD_T = 14;
const PAD_B = 26;
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

const BOTTOM_HERO = [
  { bucket: "VSB", pct: "80%", window: "within 7 days" },
  { bucket: "SMB", pct: "54%", window: "within 7 days" },
];

export default function LeadVelocityCurvesV2Slide({
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
          padding: "32px 100px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          GTM EFFICIENCY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 34,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>
            SMBs come to us with high intent.
          </span>{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #0070F3, #00C2FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            We close deals in hours or days,
          </span>{" "}
          <span style={{ color: "rgba(255,255,255,0.75)" }}>
            not weeks or months.
          </span>
        </h1>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 16,
          padding: "14px 100px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", gap: 22, width: "100%" }}>
          {PANELS.map((panel, panelIdx) => (
            <motion.div
              key={panel.box.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + panelIdx * 0.1 }}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <SegmentHeaderBox {...panel.box} />

              <article
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: "3px solid #2860B2",
                  borderRadius: 14,
                  padding: "14px 18px 12px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    margin: "0 0 8px",
                    lineHeight: 1.25,
                  }}
                >
                  Cumulative share of closed-won direct-sales deals by days from
                  lead creation
                </p>
                <svg
                  viewBox={`0 0 ${VBW} ${VBH}`}
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
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

                  <line
                    x1={PAD_L}
                    x2={VBW - PAD_R}
                    y1={scaleY(0)}
                    y2={scaleY(0)}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth={1}
                  />

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

                <div
                  style={{
                    marginTop: 8,
                    paddingTop: 8,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    justifyContent: "center",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  {COHORT_YEARS.map((year) => (
                    <div
                      key={year}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <span
                        style={{
                          width: 18,
                          height: 2.5,
                          background: COHORT_COLORS[year],
                          borderRadius: 1,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.6)",
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {year}
                        {year === 2026 && (
                          <span
                            style={{
                              marginLeft: 3,
                              color: "rgba(255,255,255,0.35)",
                              fontSize: 9,
                              fontWeight: 500,
                            }}
                          >
                            YTD
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
                padding: "12px 20px",
                textAlign: "center",
                borderRight:
                  i < BOTTOM_HERO.length - 1
                    ? "1px solid rgba(0,112,243,0.15)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontSize: 11,
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
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "4px 0 0",
                  lineHeight: 1.1,
                }}
              >
                {h.pct}{" "}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {h.window}
                </span>
              </p>
            </div>
          ))}
        </motion.div>
      </main>

      <p
        style={{
          padding: "4px 100px 0",
          fontSize: 9,
          color: "rgba(255,255,255,0.35)",
          margin: 0,
          textAlign: "left",
          fontStyle: "italic",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        Source: Salesforce opportunity data as of April 2026, direct sales only.
        MQL = reached market. VSB = 1–10 users, SMB = 10–50 users. Mid-Market
        excluded due to sparse lead velocity data.
      </p>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
