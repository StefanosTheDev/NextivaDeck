"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const cards = [
  { stat: "18M", label: "Contact center agents globally" },
  { stat: "Millions", label: "SMB & mid-market businesses" },
  { stat: "5–7M", label: "Agent workloads replaceable by AI" },
];

const BLUE_DARK = "rgba(30, 80, 160, 0.35)";
const BLUE_MED = "rgba(50, 120, 200, 0.30)";
const BLUE_LIGHT = "rgba(60, 180, 160, 0.25)";
const RED_TONE = "rgba(200, 60, 60, 0.28)";

const BORDER_BLUE_DARK = "rgba(40, 100, 200, 0.6)";
const BORDER_BLUE_MED = "rgba(70, 140, 220, 0.5)";
const BORDER_BLUE_LIGHT = "rgba(70, 200, 170, 0.5)";
const BORDER_RED = "rgba(220, 70, 70, 0.5)";

const ACCENT_BLUE_DARK = "#2563EB";
const ACCENT_BLUE_MED = "#3B82F6";
const ACCENT_BLUE_LIGHT = "#34D399";
const ACCENT_RED = "#EF4444";

const seatBands = [
  {
    band: "1–20 seats",
    share: "~25%",
    seats: "~4.5M",
    customers: "Small businesses, clinics, dealerships, service companies",
    bg: BLUE_DARK,
    border: BORDER_BLUE_DARK,
    accent: ACCENT_BLUE_DARK,
    zone: "underserved" as const,
  },
  {
    band: "21–100 seats",
    share: "~30%",
    seats: "~5.4M",
    customers: "SMB contact centers, franchises, regional service orgs",
    bg: BLUE_MED,
    border: BORDER_BLUE_MED,
    accent: ACCENT_BLUE_MED,
    zone: "underserved" as const,
  },
  {
    band: "101–500 seats",
    share: "~25%",
    seats: "~4.5M",
    customers: "Mid-market companies, distributed operations",
    bg: BLUE_LIGHT,
    border: BORDER_BLUE_LIGHT,
    accent: ACCENT_BLUE_LIGHT,
    zone: "underserved" as const,
  },
  {
    band: "501–2,000 seats",
    share: "~12%",
    seats: "~2.1M",
    customers: "Enterprise CX operations",
    bg: RED_TONE,
    border: BORDER_RED,
    accent: ACCENT_RED,
    zone: "crowded" as const,
  },
  {
    band: "2,000+ seats",
    share: "~8%",
    seats: "~1.4M",
    customers: "Global enterprises, BPO providers",
    bg: RED_TONE,
    border: BORDER_RED,
    accent: ACCENT_RED,
    zone: "crowded" as const,
  },
];

const colWidths = ["18%", "14%", "12%", "56%"];

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
      {/* ── Header ── */}
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

      {/* ── Compact stat boxes ── */}
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
              borderLeft: "4px solid #2860B2",
              borderRadius: 12,
              padding: "22px 28px",
              display: "flex",
              alignItems: "baseline",
              gap: 14,
            }}
          >
            <p
              className="font-heading"
              style={{ fontSize: 40, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}
            >
              {c.stat}
            </p>
            <p
              style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.3 }}
            >
              {c.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Color-coded seat band table ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{ padding: "18px 100px 0", flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}
      >
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
          Breakdown by Seat Band &amp; Competitive Landscape
        </p>

        {/* Table header */}
        <div
          style={{
            display: "flex",
            padding: "10px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {["Seat Band", "Share", "Seats (Est.)", "Typical Customers"].map((h, i) => (
            <p
              key={h}
              style={{
                width: colWidths[i],
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                margin: 0,
              }}
            >
              {h}
            </p>
          ))}
        </div>

        {/* Table rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
          {seatBands.map((row, i) => (
            <motion.div
              key={row.band}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.07 }}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "11px 20px",
                background: row.bg,
                border: `1px solid ${row.border}`,
                borderLeft: `4px solid ${row.accent}`,
                borderRadius: 8,
              }}
            >
              <p style={{ width: colWidths[0], fontSize: 15, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                {row.band}
              </p>
              <p style={{ width: colWidths[1], fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.85)", margin: 0 }}>
                {row.share}
              </p>
              <p style={{ width: colWidths[2], fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.85)", margin: 0 }}>
                {row.seats}
              </p>
              <p style={{ width: colWidths[3], fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                {row.customers}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Legend ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          style={{
            display: "flex",
            gap: 32,
            marginTop: 12,
            justifyContent: "flex-start",
            paddingLeft: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 32,
                height: 10,
                borderRadius: 3,
                background: "linear-gradient(90deg, #2563EB, #34D399)",
              }}
            />
            <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: 0 }}>
              The Underserved Middle
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 32,
                height: 10,
                borderRadius: 3,
                background: ACCENT_RED,
              }}
            />
            <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: 0 }}>
              Crowded Enterprise Space
            </p>
          </div>
        </motion.div>
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
            Enterprise (500+) is where everyone fights — we own the massive middle.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
