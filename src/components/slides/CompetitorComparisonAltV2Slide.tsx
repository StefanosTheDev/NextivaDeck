"use client";
import { motion } from "framer-motion";
import { Check, type LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

export type CompetitorAltQuadrant =
  | "UCaaS + CCaaS"
  | "System of Record"
  | "AI Agents"
  | "System of Engagement";

export type FillLevel = 0 | 1 | 2 | 3 | 4;

export interface TextRow {
  dimension: string;
  icon: LucideIcon;
  competitor: string;
  nextiva: string;
}

export interface RatedRow {
  dimension: string;
  icon: LucideIcon;
  competitorFill: FillLevel;
  competitor: string;
  nextivaFill: FillLevel;
  nextiva: string;
}

export interface CompetitorAltData {
  competitorName: string;
  competitorLogo: string;
  quadrant: CompetitorAltQuadrant;
  textRows: TextRow[];
  ratedRows: RatedRow[];
  winLine: string;
}

interface Props extends CompetitorAltData {
  slideNumber?: number;
}

function FillCircle({
  level,
  size = 30,
  accent = false,
}: {
  level: FillLevel;
  size?: number;
  accent?: boolean;
}) {
  const r = size / 2;
  const strokeW = 2.5;
  const innerR = r - strokeW;
  const fillColor = accent ? "#7EB3E8" : "rgba(255,255,255,0.4)";
  const emptyColor = accent
    ? "rgba(126,179,232,0.12)"
    : "rgba(255,255,255,0.06)";
  const strokeColor = accent
    ? "rgba(126,179,232,0.55)"
    : "rgba(255,255,255,0.22)";

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

function DimensionLabel({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div
      className="font-heading"
      style={{
        fontSize: 14,
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
          width: 34,
          height: 34,
          borderRadius: 8,
          background: "rgba(40,96,178,0.14)",
          border: "1px solid rgba(40,96,178,0.32)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={18} color="#7EB3E8" strokeWidth={1.75} />
      </div>
      <span>{label}</span>
    </div>
  );
}

function CompetitorCell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 10,
        padding: "12px 18px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        minHeight: 58,
      }}
    >
      {children}
    </div>
  );
}

function NextivaCell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "rgba(40,96,178,0.12)",
        border: "1px solid rgba(40,96,178,0.35)",
        borderLeft: "3px solid #7EB3E8",
        borderRadius: 10,
        padding: "12px 18px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        minHeight: 58,
      }}
    >
      {children}
    </div>
  );
}

function CompetitorText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: 14.5,
        lineHeight: 1.35,
        color: "rgba(255,255,255,0.7)",
      }}
    >
      {children}
    </span>
  );
}

function NextivaText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: 14.5,
        lineHeight: 1.35,
        color: "#FFFFFF",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

function CheckGlyph() {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 26,
        height: 26,
        borderRadius: 7,
        background:
          "radial-gradient(circle at 30% 25%, rgba(180,230,255,0.55) 0%, rgba(56,140,210,0.95) 60%, rgba(15,60,120,1) 100%)",
        border: "1px solid rgba(150,210,255,0.55)",
        boxShadow:
          "0 2px 6px rgba(15,50,100,0.5), inset 0 1px 0 rgba(255,255,255,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Check size={15} color="#FFFFFF" strokeWidth={3.5} />
    </div>
  );
}

export default function CompetitorComparisonAltV2Slide({
  slideNumber = 0,
  competitorName,
  competitorLogo,
  quadrant,
  textRows,
  ratedRows,
  winLine,
}: Props) {
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
        style={{ padding: "36px 100px 0", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#7EB3E8",
            margin: "0 0 8px",
          }}
        >
          COMPETITIVE LANDSCAPE — {quadrant.toUpperCase()}
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 46,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {competitorName} versus Nextiva
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "20px 100px 0",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr 1fr",
            gap: 14,
            alignItems: "center",
            paddingBottom: 6,
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
              borderRadius: 9,
              padding: "8px 18px",
              minHeight: 44,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={competitorLogo}
              alt={competitorName}
              style={{ maxHeight: 26, maxWidth: 170, objectFit: "contain" }}
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
              borderRadius: 9,
              padding: "8px 18px",
              minHeight: 44,
              boxShadow: "0 0 0 3px rgba(15,44,89,0.4)",
            }}
          >
            <span
              className="font-heading"
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.01em",
              }}
            >
              Nextiva
            </span>
          </div>
        </div>

        {/* Top section — text rows with checkmark on Nextiva side */}
        {textRows.map((row, i) => (
          <motion.div
            key={row.dimension}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.26 + i * 0.06 }}
            style={{
              display: "grid",
              gridTemplateColumns: "240px 1fr 1fr",
              gap: 14,
              alignItems: "stretch",
            }}
          >
            <DimensionLabel icon={row.icon} label={row.dimension} />
            <CompetitorCell>
              <CompetitorText>{row.competitor}</CompetitorText>
            </CompetitorCell>
            <NextivaCell>
              <CheckGlyph />
              <NextivaText>{row.nextiva}</NextivaText>
            </NextivaCell>
          </motion.div>
        ))}

        {/* Section divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: 14,
            alignItems: "center",
            margin: "6px 0 2px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "rgba(126,179,232,0.65)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Framework depth
          </div>
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(to right, rgba(126,179,232,0.35), rgba(126,179,232,0.05))",
            }}
          />
        </motion.div>

        {/* Bottom section — harvey-ball rated rows */}
        {ratedRows.map((row, i) => (
          <motion.div
            key={row.dimension}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.54 + i * 0.06 }}
            style={{
              display: "grid",
              gridTemplateColumns: "240px 1fr 1fr",
              gap: 14,
              alignItems: "stretch",
            }}
          >
            <DimensionLabel icon={row.icon} label={row.dimension} />
            <CompetitorCell>
              <FillCircle level={row.competitorFill} />
              <CompetitorText>{row.competitor}</CompetitorText>
            </CompetitorCell>
            <NextivaCell>
              <FillCircle level={row.nextivaFill} accent />
              <NextivaText>{row.nextiva}</NextivaText>
            </NextivaCell>
          </motion.div>
        ))}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        style={{ padding: "14px 100px 10px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.14)",
            border: "1px solid rgba(40,96,178,0.3)",
            borderRadius: 12,
            padding: "12px 28px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 16,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>
              Nextiva wins when:
            </span>{" "}
            {winLine}
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
