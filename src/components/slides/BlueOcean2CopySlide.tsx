"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const cards = [
  { stat: "18M", label: "Contact center agents globally" },
  { stat: "Millions", label: "SMB & mid-market businesses" },
  { stat: "5–7M", label: "Agent workloads replaceable by AI" },
];

const segments = [
  {
    segment: "<50 agents",
    seats: "~6.3M",
    share: "~35%",
    bg: "rgba(34, 197, 94, 0.22)",
    border: "rgba(34, 197, 94, 0.4)",
    accent: "#22C55E",
  },
  {
    segment: "50–250 agents",
    seats: "~5.4M",
    share: "~30%",
    bg: "rgba(34, 197, 94, 0.15)",
    border: "rgba(34, 197, 94, 0.3)",
    accent: "#4ADE80",
  },
  {
    segment: "250–1,000 agents",
    seats: "~3.6M",
    share: "~20%",
    bg: "rgba(239, 68, 68, 0.10)",
    border: "rgba(239, 68, 68, 0.22)",
    accent: "#F87171",
  },
  {
    segment: "1,000+ agents",
    seats: "~2.7M",
    share: "~15%",
    bg: "rgba(239, 68, 68, 0.20)",
    border: "rgba(239, 68, 68, 0.4)",
    accent: "#EF4444",
  },
];

export default function BlueOcean2CopySlide({ slideNumber = 13 }: { slideNumber?: number }) {
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
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
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
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 52, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
        >
          The Massive Middle Is Untouched
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Enterprise CX platforms target large companies. Millions of growing businesses are left behind.
        </p>
      </motion.header>

      {/* ── Stat boxes ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ display: "flex", gap: 24, padding: "20px 100px 0", flexShrink: 0 }}
      >
        {cards.map((c, i) => (
          <motion.div
            key={c.stat}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderLeft: "5px solid #2860B2",
              borderRadius: 14,
              padding: "30px 34px",
              display: "flex",
              alignItems: "baseline",
              gap: 16,
            }}
          >
            <p
              className="font-heading"
              style={{ fontSize: 46, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}
            >
              {c.stat}
            </p>
            <p
              style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.3 }}
            >
              {c.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Table: positioned under the first stat box ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{
          padding: "20px 100px 0",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <div style={{ maxWidth: "calc(33.333% - 8px)" }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              margin: "0 0 10px",
            }}
          >
            Breakdown by Segment
          </p>

          {/* Table header */}
          <div
            style={{
              display: "flex",
              padding: "8px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p style={{ flex: 2, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              Segment
            </p>
            <p style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0, textAlign: "right" }}>
              Seats
            </p>
            <p style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0, textAlign: "right" }}>
              Share
            </p>
          </div>

          {/* Table rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
            {segments.map((row, i) => (
              <motion.div
                key={row.segment}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 16px",
                  background: row.bg,
                  border: `1px solid ${row.border}`,
                  borderLeft: `4px solid ${row.accent}`,
                  borderRadius: 8,
                }}
              >
                <p style={{ flex: 2, fontSize: 15, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                  {row.segment}
                </p>
                <p style={{ flex: 1, fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.85)", margin: 0, textAlign: "right" }}>
                  {row.seats}
                </p>
                <p style={{ flex: 1, fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.85)", margin: 0, textAlign: "right" }}>
                  {row.share}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            style={{ display: "flex", gap: 32, marginTop: 16, paddingLeft: 4 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 12, borderRadius: 3, background: "#22C55E" }} />
              <p style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                The Underserved Middle
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 12, borderRadius: 3, background: "#EF4444" }} />
              <p style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                Crowded Enterprise Space
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom callout ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ padding: "0 100px 12px", flexShrink: 0 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "18px 32px",
            borderRadius: 14,
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
          }}
        >
          <p style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", margin: 0, textAlign: "center" }}>
            ~9.9M seats in the 1–100 range alone are underserved.
            Enterprise (1,000+) is where everyone fights — we own the massive middle.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
