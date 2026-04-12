"use client";
import { motion } from "framer-motion";
import {
  Layers,
  Database,
  Globe,
  Workflow,
  Building2,
  type LucideIcon,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

type FillLevel = 0 | 1 | 2 | 3 | 4;

interface RatedRow {
  dimension: string;
  icon: LucideIcon;
  competitorFill: FillLevel;
  competitorLabel: string;
  nextivaFill: FillLevel;
  nextivaLabel: string;
}

const ROWS: RatedRow[] = [
  {
    dimension: "Platform scope",
    icon: Layers,
    competitorFill: 2,
    competitorLabel: "AI agent layer + emerging voice; no comms backbone",
    nextivaFill: 4,
    nextivaLabel: "Voice, digital, AI, analytics — unified",
  },
  {
    dimension: "Data & AI",
    icon: Database,
    competitorFill: 3,
    competitorLabel: "Strong AOPs + 80% deflection; siloed from human agents",
    nextivaFill: 4,
    nextivaLabel: "10B+ interaction data moat, single data layer",
  },
  {
    dimension: "Distribution",
    icon: Globe,
    competitorFill: 2,
    competitorLabel: "100+ enterprise customers; VC-funded growth stage",
    nextivaFill: 4,
    nextivaLabel: "92K+ accounts, AI deploys into existing base",
  },
  {
    dimension: "Deployment",
    icon: Workflow,
    competitorFill: 3,
    competitorLabel: "Outbound voice + callbacks; custom integration per deal",
    nextivaFill: 3,
    nextivaLabel: "Enterprise integrations; unified AI + human inbox",
  },
  {
    dimension: "Scale & fit",
    icon: Building2,
    competitorFill: 2,
    competitorLabel: "$481M raised, 300+ employees; not yet profitable",
    nextivaFill: 4,
    nextivaLabel: "Profitable, 92K+ accounts, carrier-class voice",
  },
];

function FillCircle({
  level,
  size = 32,
  accent = false,
}: {
  level: FillLevel;
  size?: number;
  accent?: boolean;
}) {
  const r = size / 2;
  const strokeW = 2.5;
  const innerR = r - strokeW;
  const fillColor = accent ? "#7EB3E8" : "rgba(255,255,255,0.35)";
  const emptyColor = accent
    ? "rgba(126,179,232,0.12)"
    : "rgba(255,255,255,0.06)";
  const strokeColor = accent
    ? "rgba(126,179,232,0.5)"
    : "rgba(255,255,255,0.2)";

  if (level === 0) {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={r}
          cy={r}
          r={innerR}
          fill={emptyColor}
          stroke={strokeColor}
          strokeWidth={strokeW}
        />
      </svg>
    );
  }
  if (level === 4) {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={r}
          cy={r}
          r={innerR}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeW}
        />
      </svg>
    );
  }

  const fraction = level / 4;
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + 2 * Math.PI * fraction;
  const largeArc = fraction > 0.5 ? 1 : 0;
  const sx = r + innerR * Math.cos(startAngle);
  const sy = r + innerR * Math.sin(startAngle);
  const ex = r + innerR * Math.cos(endAngle);
  const ey = r + innerR * Math.sin(endAngle);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={r}
        cy={r}
        r={innerR}
        fill={emptyColor}
        stroke={strokeColor}
        strokeWidth={strokeW}
      />
      <path
        d={`M ${r} ${r} L ${sx} ${sy} A ${innerR} ${innerR} 0 ${largeArc} 1 ${ex} ${ey} Z`}
        fill={fillColor}
      />
    </svg>
  );
}

export default function DecagonComparisonAltSlide({
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
        style={{ padding: "40px 100px 0", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#7EB3E8",
            margin: "0 0 10px",
          }}
        >
          COMPETITIVE LANDSCAPE — AI AGENTS
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Decagon versus Nextiva
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "28px 100px 0",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr 1fr",
            gap: 16,
            alignItems: "center",
            paddingBottom: 8,
            borderBottom: "1px solid rgba(126,179,232,0.2)",
          }}
        >
          <div />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.92)",
              borderRadius: 10,
              padding: "10px 20px",
              minHeight: 52,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/competitors/agentic/TR__decagon.png"
              alt="Decagon"
              style={{ maxHeight: 30, maxWidth: 180, objectFit: "contain" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at 30% 30%, #3d7cc9 0%, #1f4a8c 60%, #0f2c59 100%)",
              border: "1px solid rgba(126,179,232,0.4)",
              borderRadius: 10,
              padding: "10px 20px",
              minHeight: 52,
              boxShadow: "0 0 0 3px rgba(15,44,89,0.4)",
            }}
          >
            <span
              className="font-heading"
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.01em",
              }}
            >
              Nextiva
            </span>
          </div>
        </div>

        {ROWS.map((row, i) => (
          <motion.div
            key={row.dimension}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 + i * 0.07 }}
            style={{
              display: "grid",
              gridTemplateColumns: "260px 1fr 1fr",
              gap: 16,
              alignItems: "stretch",
            }}
          >
            <div
              className="font-heading"
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#7EB3E8",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "rgba(40,96,178,0.14)",
                  border: "1px solid rgba(40,96,178,0.32)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <row.icon size={20} color="#7EB3E8" strokeWidth={1.75} />
              </div>
              <span>{row.dimension}</span>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <FillCircle level={row.competitorFill} />
              <span
                style={{
                  fontSize: 15,
                  lineHeight: 1.35,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {row.competitorLabel}
              </span>
            </div>
            <div
              style={{
                background: "rgba(40,96,178,0.12)",
                border: "1px solid rgba(40,96,178,0.35)",
                borderLeft: "3px solid #7EB3E8",
                borderRadius: 10,
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <FillCircle level={row.nextivaFill} accent />
              <span
                style={{
                  fontSize: 15,
                  lineHeight: 1.35,
                  color: "#FFFFFF",
                  fontWeight: 500,
                }}
              >
                {row.nextivaLabel}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ padding: "18px 100px 10px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.14)",
            border: "1px solid rgba(40,96,178,0.3)",
            borderRadius: 14,
            padding: "16px 32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 17,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>
              Nextiva wins when:
            </span>{" "}
            the buyer needs AI agents on an existing voice + digital platform —
            not a VC-funded point solution requiring a separate contact center
            stack.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
