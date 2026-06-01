"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

export type Verdict = "yes" | "partial" | "no";

export type CompetitiveCell = {
  verdict: Verdict;
  note: string;
};

export type CompetitiveRow = {
  label: string;
  cells: CompetitiveCell[];
};

export type CompetitiveColumn = {
  name: string;
  highlight?: boolean;
};

export type CompetitiveTableProps = {
  slideNumber?: number;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  columns: CompetitiveColumn[];
  rows: CompetitiveRow[];
  footnote?: string;
  compact?: boolean;
};

function VerdictBadge({ verdict }: { verdict: Verdict }) {
  if (verdict === "yes")
    return (
      <CheckCircle2
        size={21}
        color="#34D399"
        strokeWidth={2.2}
        style={{ flexShrink: 0 }}
      />
    );
  if (verdict === "no")
    return (
      <XCircle
        size={21}
        color="#F87171"
        strokeWidth={2.2}
        style={{ flexShrink: 0 }}
      />
    );
  return (
    <MinusCircle
      size={21}
      color="#FBBF24"
      strokeWidth={2.2}
      style={{ flexShrink: 0 }}
    />
  );
}

export default function CompetitiveTable({
  slideNumber = 0,
  eyebrow,
  title,
  subtitle,
  columns,
  rows,
  footnote,
  compact = false,
}: CompetitiveTableProps) {
  const gridTemplate = `250px ${columns
    .map(() => "1fr")
    .join(" ")}`;

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
          padding: "32px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 12px",
          }}
        >
          {eyebrow}
        </p>
        <div
          style={{
            width: 52,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 16px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 42,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
            maxWidth: 1320,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: "12px auto 0",
            fontSize: 18,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 1220,
            lineHeight: 1.45,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: compact ? "60px 90px 110px" : "30px 110px 60px",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          maxWidth: compact ? 1780 : 1720,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow:
              "0 18px 44px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: gridTemplate,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              background:
                "linear-gradient(180deg, rgba(40,96,178,0.18) 0%, rgba(40,96,178,0.06) 100%)",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                padding: "14px 20px",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                display: "flex",
                alignItems: "center",
              }}
            >
              Capability
            </div>
            {columns.map((col) => (
              <div
                key={col.name}
                style={{
                  padding: "14px 16px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: col.highlight ? "#FBBF24" : "#FFFFFF",
                  textAlign: "center",
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                  background: col.highlight
                    ? "rgba(245,158,11,0.08)"
                    : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {col.name}
              </div>
            ))}
          </div>

          {/* Body rows */}
          {rows.map((row, ri) => (
            <div
              key={row.label}
              style={{
                display: "grid",
                gridTemplateColumns: gridTemplate,
                borderBottom:
                  ri === rows.length - 1
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",
                flex: 1,
                minHeight: 0,
              }}
            >
              <div
                style={{
                  padding: "14px 20px",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(0,0,0,0.18)",
                  lineHeight: 1.3,
                }}
              >
                {row.label}
              </div>
              {row.cells.map((cell, ci) => {
                const isHighlight = columns[ci]?.highlight;
                return (
                  <div
                    key={ci}
                    style={{
                      padding: "14px 16px",
                      borderLeft: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      background: isHighlight
                        ? "rgba(245,158,11,0.06)"
                        : "transparent",
                    }}
                  >
                    <VerdictBadge verdict={cell.verdict} />
                    <span
                      style={{
                        fontSize: 14,
                        lineHeight: 1.4,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {cell.note}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>

        {footnote ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            style={{
              marginTop: 14,
              padding: "13px 18px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderLeft: "4px solid #FBBF24",
              fontSize: 15,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {footnote}
          </motion.div>
        ) : null}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
