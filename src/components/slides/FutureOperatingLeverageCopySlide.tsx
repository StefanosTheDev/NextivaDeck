"use client";

import { motion } from "framer-motion";
import { HEADCOUNT, FISCAL_YEARS, RD_REV_PER_HEAD } from "../financialData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_LIGHT = "#4D9AE8";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";
const GROWTH = "#1E7E5E";
const GRID = "rgba(6,26,55,0.08)";
const TICK = "rgba(6,26,55,0.6)";

const revPerHeadData = FISCAL_YEARS.map((fy) => ({
  name: fy,
  value: HEADCOUNT.revPerHead[fy],
  rdValue: RD_REV_PER_HEAD[fy],
}));

const formatK = (v: number) => (v >= 1000 ? `$${(v / 1000).toFixed(1)}M` : `$${v}K`);

const topCards = [
  {
    label: "Revenue per Head",
    from: `$${HEADCOUNT.revPerHead.FY25}K`,
    to: `$${HEADCOUNT.revPerHead.FY30}K`,
    direction: "up" as const,
    detail: "2.2× improvement driven by AI-powered productivity.",
  },
  {
    label: "Revenue per R&D Head",
    from: formatK(RD_REV_PER_HEAD.FY25),
    to: formatK(RD_REV_PER_HEAD.FY30),
    direction: "up" as const,
    detail: "2.8× improvement — AI-driven productivity.",
  },
];

export default function FutureOperatingLeverageCopySlide({
  slideNumber: _sn,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "#FFFFFF",
        color: NAVY_DARK,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: BLUE,
            margin: "0 0 10px",
          }}
        >
          Operating Leverage
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 52, fontWeight: 700, color: NAVY, marginTop: 10, lineHeight: 1.12 }}
        >
          Realizing permanent operational efficiencies.
        </h1>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            margin: "14px auto 0",
            borderRadius: 2,
          }}
        />
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "14px 100px 0",
          gap: 8,
          minHeight: 0,
        }}
      >
        <div style={{ flex: 1, display: "flex", gap: 28, minHeight: 0 }}>
          <div
            style={{
              flex: "0 0 62%",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: BLUE,
                margin: "0 0 2px",
                letterSpacing: "0.02em",
              }}
            >
              Headcount efficiency
            </p>
            <p style={{ fontSize: 13, color: BODY, margin: "0 0 4px", lineHeight: 1.4 }}>
              Revenue per full-time equivalent
            </p>
            <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  bottom: 52,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 18,
                  zIndex: 1,
                  fontSize: 14,
                  color: NAVY_DARK,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span
                    style={{
                      width: 18,
                      height: 3,
                      background: BLUE,
                      display: "inline-block",
                      borderRadius: 2,
                    }}
                  />
                  Rev / Head
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <svg width="18" height="3" style={{ display: "inline-block" }}>
                    <line
                      x1="0"
                      y1="1.5"
                      x2="18"
                      y2="1.5"
                      stroke={BLUE_LIGHT}
                      strokeWidth="3"
                      strokeDasharray="4 3"
                    />
                  </svg>
                  Rev / R&D Head
                </span>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revPerHeadData}
                  margin={{ top: 12, right: 24, left: 36, bottom: 12 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{
                      fontSize: 16,
                      fill: NAVY_DARK,
                      fontWeight: 700,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    axisLine={{ stroke: "rgba(6,26,55,0.12)" }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 2800]}
                    ticks={[500, 1000, 1500, 2000, 2500]}
                    tick={{
                      fontSize: 14,
                      fill: TICK,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) =>
                      v >= 1000 ? `$${(v / 1000).toFixed(1)}M` : `$${v}K`
                    }
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={BLUE}
                    strokeWidth={4}
                    dot={{ r: 6, fill: BLUE, strokeWidth: 1.5, stroke: "#FFFFFF" }}
                    name="Rev / Head"
                    isAnimationActive={false}
                  >
                    <LabelList
                      dataKey="value"
                      position="top"
                      formatter={(v) => (typeof v === "number" ? `$${v}K` : String(v ?? ""))}
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        fill: NAVY_DARK,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    />
                  </Line>
                  <Line
                    type="monotone"
                    dataKey="rdValue"
                    stroke={BLUE_LIGHT}
                    strokeWidth={4}
                    dot={{ r: 6, fill: BLUE_LIGHT, strokeWidth: 1.5, stroke: "#FFFFFF" }}
                    strokeDasharray="6 4"
                    name="Rev / R&D Head"
                    isAnimationActive={false}
                  >
                    <LabelList
                      dataKey="rdValue"
                      position="top"
                      formatter={(v) =>
                        typeof v === "number"
                          ? v >= 1000
                            ? `$${(v / 1000).toFixed(1)}M`
                            : `$${v}K`
                          : String(v ?? "")
                      }
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        fill: BLUE,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            style={{
              flex: "0 0 38%",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {topCards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                style={{
                  padding: "22px 26px",
                  textAlign: "center",
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderLeft: `3px solid ${BLUE}`,
                  borderRadius: 12,
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: BLUE,
                    margin: 0,
                  }}
                >
                  {c.label}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 14,
                    margin: "10px 0",
                  }}
                >
                  <span
                    className="font-heading"
                    style={{ fontSize: 28, fontWeight: 700, color: MUTED }}
                  >
                    {c.from}
                  </span>
                  <span style={{ fontSize: 22, color: GROWTH }}>↑</span>
                  <span
                    className="font-heading"
                    style={{ fontSize: 28, fontWeight: 700, color: NAVY }}
                  >
                    {c.to}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: MUTED,
                    margin: 0,
                  }}
                >
                  FY25 → FY30
                </p>
                <p style={{ fontSize: 13, color: BODY, margin: "6px 0 0", lineHeight: 1.4 }}>
                  {c.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>

      <div style={{ padding: "0 100px 4px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>
          All figures presented on a non-GAAP basis unless otherwise noted.
        </p>
      </div>
      <p
        style={{
          fontSize: 12,
          color: MUTED,
          fontFamily: "'Space Grotesk', sans-serif",
          padding: "0 100px 4px",
          margin: 0,
          flexShrink: 0,
          fontStyle: "italic",
        }}
      >
        FY26 is pro forma for efficiency actions taken at the end of Q3, applied retroactively to the beginning of the quarter.
      </p>

      <footer
        style={{
          padding: "4px 100px 18px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Operating Leverage · Rev/Head $255K → $563K · Rev/R&amp;D $921K → $2.6M
      </footer>
    </div>
  );
}
