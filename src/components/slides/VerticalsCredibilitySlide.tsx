"use client";

import { motion } from "framer-motion";
import { Heart, Scale, Landmark, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const verticals: {
  icon: LucideIcon;
  name: string;
  accounts: string;
  arr: string;
  arpa: string;
  tam: string;
  color: string;
}[] = [
  {
    icon: Heart,
    name: "Healthcare",
    accounts: "10,080",
    arr: "$59M",
    arpa: "$5,840",
    tam: "$16.9B",
    color: "#F87171",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    accounts: "8,531",
    arr: "$38M",
    arpa: "$4,434",
    tam: "$29.6B",
    color: "#7EB3E8",
  },
  {
    icon: Scale,
    name: "Legal Services",
    accounts: "4,688",
    arr: "$18M",
    arpa: "$3,866",
    tam: "$5.3B",
    color: "#A78BFA",
  },
];

// 36-month MRR retention curves (Distributed Orgs / Healthcare / Legal / FS)
// Data points: 0, 12, 24, 36 months → retention %
const retention: { label: string; color: string; points: number[] }[] = [
  { label: "Distributed Organizations", color: "#FBBF24", points: [100, 138, 175, 204] },
  { label: "Healthcare", color: "#F87171", points: [100, 118, 130, 138] },
  { label: "Legal", color: "#A78BFA", points: [100, 112, 122, 128] },
  { label: "Financial Services", color: "#7EB3E8", points: [100, 116, 126, 132] },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <span
        style={{
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        {label}
      </span>
      <span
        className="font-heading"
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1.05,
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function VerticalsCredibilitySlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  // Build SVG path for each retention line
  // viewBox 0 0 100 100 — x is months 0/12/24/36 → 0/33/66/100
  // y is retention % → inverted (100% = bottom area 80, 220% = top area 0)
  // Map 60 to bottom (95) and 220 to top (5)
  const yMap = (pct: number) => {
    const min = 60;
    const max = 220;
    const top = 6;
    const bottom = 94;
    const t = (pct - min) / (max - min);
    return bottom - t * (bottom - top);
  };
  const xs = [4, 36, 68, 96];

  return (
    <div
      className="slide"
      style={{ background: BG, overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "36px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          Vertical credibility
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 18px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
            maxWidth: 1140,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Nextiva has critical mass across several core verticals.
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            maxWidth: 1140,
            margin: "18px auto 0",
            padding: "16px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.72)",
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            Strong MRR retention curves across all verticals — with{" "}
            <strong style={{ color: "#FBBF24", fontWeight: 700 }}>
              distributed organization customers expanding to 204% at 36 months
            </strong>{" "}
            — driven by user growth, location rollouts, and acquisitions.
            Well-positioned for AI upsell momentum.
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "20px 80px 28px",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 18,
          minHeight: 0,
          maxWidth: 1640,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT — 3 vertical stat cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {verticals.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.12 + i * 0.06 }}
                style={{
                  padding: "16px 20px",
                  borderRadius: 14,
                  background:
                    "linear-gradient(165deg, rgba(40, 96, 178, 0.06) 0%, rgba(255,255,255,0.025) 100%)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow:
                    "0 10px 28px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: `${v.color}22`,
                    border: `1px solid ${v.color}66`,
                    color: v.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} strokeWidth={1.9} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    className="font-heading"
                    style={{
                      margin: "0 0 10px",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1.1,
                    }}
                  >
                    {v.name}
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: 12,
                    }}
                  >
                    <Stat label="Accounts" value={v.accounts} />
                    <Stat label="Run-rate ARR" value={v.arr} />
                    <Stat label="ARPA" value={v.arpa} />
                    <Stat label="2026 TAM" value={v.tam} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT — 36-month MRR retention curves */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            padding: "18px 22px 16px",
            borderRadius: 14,
            background:
              "linear-gradient(165deg, rgba(40, 96, 178, 0.08) 0%, rgba(255,255,255,0.025) 100%)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow:
              "0 14px 36px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
            <TrendingUp size={18} color="#7EB3E8" strokeWidth={2} />
            <p
              style={{
                margin: 0,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              36-month MRR retention curves
            </p>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.4,
            }}
          >
            Healthcare, Financial Services, and Legal counted standalone — and
            within Distributed Organizations where applicable.
          </p>

          <div
            style={{
              flex: 1,
              minHeight: 0,
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{
                width: "100%",
                height: "100%",
                minHeight: 220,
                overflow: "visible",
              }}
            >
              {/* Y-axis gridlines: 60, 100, 140, 180, 220 */}
              {[60, 100, 140, 180, 220].map((g) => (
                <g key={g}>
                  <line
                    x1="0"
                    x2="100"
                    y1={yMap(g)}
                    y2={yMap(g)}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.2"
                  />
                  <text
                    x="-1"
                    y={yMap(g) + 1.5}
                    fontSize="3.5"
                    fill="rgba(255,255,255,0.45)"
                    textAnchor="end"
                  >
                    {g}%
                  </text>
                </g>
              ))}

              {/* 100% baseline emphasized */}
              <line
                x1="0"
                x2="100"
                y1={yMap(100)}
                y2={yMap(100)}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="0.3"
                strokeDasharray="1 1"
              />

              {/* Curves */}
              {retention.map((r) => {
                const path = r.points
                  .map((p, idx) => `${idx === 0 ? "M" : "L"} ${xs[idx]} ${yMap(p)}`)
                  .join(" ");
                return (
                  <g key={r.label}>
                    <path
                      d={path}
                      fill="none"
                      stroke={r.color}
                      strokeWidth="0.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {r.points.map((p, idx) => (
                      <circle
                        key={idx}
                        cx={xs[idx]}
                        cy={yMap(p)}
                        r={r.label === "Distributed Organizations" ? "0.9" : "0.7"}
                        fill={r.color}
                      />
                    ))}
                    {/* Endpoint label */}
                    <text
                      x={xs[3] + 1.5}
                      y={yMap(r.points[3]) + 1}
                      fontSize="3.2"
                      fill={r.color}
                      fontWeight={r.label === "Distributed Organizations" ? "700" : "500"}
                    >
                      {r.points[3]}%
                    </text>
                  </g>
                );
              })}

              {/* X-axis labels */}
              {[0, 12, 24, 36].map((m, idx) => (
                <text
                  key={m}
                  x={xs[idx]}
                  y="99"
                  fontSize="3.2"
                  fill="rgba(255,255,255,0.5)"
                  textAnchor="middle"
                >
                  {m} mo
                </text>
              ))}
            </svg>

            {/* Legend */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 10,
                fontSize: 11.5,
              }}
            >
              {retention.map((r) => (
                <span
                  key={r.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "rgba(255,255,255,0.78)",
                    fontWeight: r.label === "Distributed Organizations" ? 700 : 500,
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 3,
                      background: r.color,
                      display: "inline-block",
                    }}
                  />
                  {r.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
