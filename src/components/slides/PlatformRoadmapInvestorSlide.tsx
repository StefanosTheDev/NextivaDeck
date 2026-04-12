"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const HORIZONS = [
  {
    key: "now",
    label: "In market",
    sub: "Revenue today",
    accent: "#7EB3E8",
    glow: "rgba(126,179,232,0.25)",
  },
  {
    key: "next",
    label: "Near term",
    sub: "12–24 months",
    accent: "#E8B84D",
    glow: "rgba(232,184,77,0.2)",
  },
  {
    key: "arc",
    label: "Strategic arc",
    sub: "Platform & TAM",
    accent: "#6EE7B7",
    glow: "rgba(110,231,183,0.2)",
  },
] as const;

type Lane = {
  title: string;
  investorHook: string;
  cells: [string, string, string];
  /** 0–1 visual “weight” per column for the lane bar (illustrative, not a metric) */
  bar: [number, number, number];
};

const LANES: Lane[] = [
  {
    title: "Customer experience",
    investorHook: "Deeper engagement → higher NRR",
    cells: [
      "Omnichannel NEXT live with voice-led CX",
      "Faster channel roadmap + NEXAR v2 canvas",
      "AI-led outbound and AI employees at scale",
    ],
    bar: [1, 0.72, 0.35],
  },
  {
    title: "AI & automation",
    investorHook: "Software intensity + labor leverage",
    cells: [
      "Live agents, workflows, and reactive NextIQ",
      "Proactive insights, journey design, simulation",
      "Autopilot, supervisor tools, AI–human handoffs",
    ],
    bar: [1, 0.65, 0.4],
  },
  {
    title: "Ecosystem & scale",
    investorHook: "Attach, marketplace, vertical depth",
    cells: [
      "CRM/ERP fabric, marketplace, multi-site",
      "Commerce + healthcare + financial verticals",
      "Partner multi-tenant, AI SKU marketplace, data BYO",
    ],
    bar: [0.95, 0.55, 0.38],
  },
  {
    title: "Trust, compliance & reach",
    investorHook: "Regulatory moat + geography",
    cells: [
      "Mission-critical cloud, audited posture (HIPAA, PCI…)",
      "Healthcare-grade guardrails + Canada expansion",
      "SOC 2 Type II, regional clouds, enterprise segments",
    ],
    bar: [1, 0.5, 0.42],
  },
  {
    title: "GTM & PLG",
    investorHook: "Land fast, expand deliberately",
    cells: [
      "xBERT overlay + sub-minute onboarding paths",
      "PLG bridge from xBERT into NEXT",
      "Legacy UC/CC migrations and suite upgrades",
    ],
    bar: [0.9, 0.48, 0.36],
  },
];

function HorizonArrow() {
  return (
    <svg width="100%" height="14" viewBox="0 0 400 14" preserveAspectRatio="none" style={{ opacity: 0.35 }}>
      <defs>
        <linearGradient id="hrGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7EB3E8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#E8B84D" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M 4 7 L 380 7"
        stroke="url(#hrGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M 372 3 L 392 7 L 372 11 Z" fill="#6EE7B7" fillOpacity="0.85" />
    </svg>
  );
}

export default function PlatformRoadmapInvestorSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 95% 85% at 50% 12%, rgba(15,44,89,0.5) 0%, rgba(6,26,55,0.72) 42%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "40px 64px 8px", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 6px",
          }}
        >
          Strategic roadmap
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 44,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Three horizons — investor view
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.45)",
            margin: "10px 0 0",
            maxWidth: 900,
            lineHeight: 1.45,
          }}
        >
          How today’s platform, the near-term roadmap, and the long arc compound: attach rate, AI leverage, compliance
          depth, and addressable market — without the feature matrix.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        style={{ padding: "12px 64px 0", flexShrink: 0 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr 1fr 1fr",
            gap: 12,
            alignItems: "end",
            marginBottom: 8,
          }}
        >
          <div />
          {HORIZONS.map((h) => (
            <div
              key={h.key}
              style={{
                textAlign: "center",
                padding: "12px 8px 10px",
                borderRadius: 12,
                background: `linear-gradient(180deg, ${h.glow} 0%, transparent 85%)`,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: h.accent,
                  marginBottom: 4,
                }}
              >
                {h.label}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{h.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 1fr 1fr", gap: 12 }}>
          <div />
          <div style={{ gridColumn: "span 3", paddingTop: 4 }}>
            <HorizonArrow />
          </div>
        </div>
      </motion.div>

      <motion.main
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.18 }}
        style={{
          flex: 1,
          minHeight: 0,
          padding: "8px 64px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {LANES.map((lane, li) => (
          <motion.section
            key={lane.title}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.22 + li * 0.06 }}
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr 1fr 1fr",
              gap: 12,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                padding: "10px 12px 10px 0",
                borderRight: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}
              >
                {lane.title}
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.35 }}>{lane.investorHook}</div>
              <div
                style={{
                  marginTop: 8,
                  display: "flex",
                  gap: 3,
                  height: 6,
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.06)",
                }}
                aria-hidden
              >
                {lane.bar.map((w, bi) => (
                  <div
                    key={bi}
                    style={{
                      flex: Math.max(0.12, w),
                      minWidth: 4,
                      borderRadius: 3,
                      background: HORIZONS[bi].accent,
                      opacity: 0.35 + w * 0.55,
                    }}
                  />
                ))}
              </div>
            </div>
            {lane.cells.map((text, ci) => (
              <div
                key={ci}
                style={{
                  position: "relative",
                  padding: "14px 16px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.035)",
                  boxShadow: `inset 0 0 0 1px ${HORIZONS[ci].glow}`,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 10,
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: HORIZONS[ci].accent,
                    boxShadow: `0 0 12px ${HORIZONS[ci].accent}`,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    paddingLeft: 14,
                    fontSize: 14,
                    lineHeight: 1.4,
                    color: "rgba(255,255,255,0.88)",
                    fontWeight: 500,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </motion.section>
        ))}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        style={{
          padding: "0 64px 6px",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          gap: 28,
          flexWrap: "wrap",
        }}
      >
        {[
          { k: "Expand", v: "Verticals, channels, AI SKUs" },
          { k: "Compound", v: "Data + workflow depth" },
          { k: "Defend", v: "Compliance & critical-grade ops" },
        ].map((item) => (
          <div
            key={item.k}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 8,
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8", letterSpacing: "0.04em" }}>{item.k}</span>
            <span>{item.v}</span>
          </div>
        ))}
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
