"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BORDER = "#E0DEDA";
const ROW_ALT = "#F8F6F2";

type Row = {
  func: string;
  owner: string;
  mandate: string;
  bookingTarget?: string;
  salesBudget?: string;
  marketingBudget?: string;
};

const ROWS: Row[] = [
  {
    func: "SB New Sales",
    owner: "Josh",
    mandate: "Scale bookings per rep, supported by lead flow.",
    bookingTarget: "$450K \u2192 $600K / qtr (+33%)",
  },
  {
    func: "Platform New Sales",
    owner: "Chris",
    mandate: "Establish a predictable, sustainable growth model.",
  },
  {
    func: "SB Expansion",
    owner: "Lukas",
    mandate: "Scale bookings per rep.",
    bookingTarget: "$150K \u2192 $200K / qtr (+33%)",
  },
  {
    func: "Platform Expansion",
    owner: "Chris / Mike",
    mandate: "Set a baseline and scale the rep-to-booking ratio.",
  },
  {
    func: "SB Support & Implementation",
    owner: "Lukas",
    mandate: "Turn every conversation into a sales opportunity.",
  },
  {
    func: "Platform Support & Implementation",
    owner: "Ken",
    mandate: "Turn every interaction into value-added services.",
  },
  {
    func: "Channel",
    owner: "Tracy",
    mandate: "Grow channel bookings as a % of total bookings.",
  },
  {
    func: "Strategic Growth & Partnerships",
    owner: "Mitch",
    mandate:
      "Deliver bookings from strategic relationships, partnerships, and M&A.",
  },
  {
    func: "AI Verticals",
    owner: "Sasha",
    mandate: "Deliver bookings from AI-vertical initiatives.",
  },
  {
    func: "Marketing",
    owner: "Yaniv",
    mandate:
      "Drive bookings via e-commerce, PLG, and brand-to-pipeline conversion.",
  },
  {
    func: "Product",
    owner: "Tomas / Ran",
    mandate:
      "Own revenue accountability for product-led growth and time-from-launch to revenue.",
  },
];

const COL_FN = "minmax(0, 1.0fr)";
const COL_OW = "minmax(0, 0.5fr)";
const COL_MD = "minmax(0, 1.55fr)";
const COL_BT = "minmax(0, 0.65fr)";
const COL_SB = "minmax(0, 0.5fr)";
const COL_MB = "minmax(0, 0.5fr)";
const COL_TEMPLATE = `${COL_FN} ${COL_OW} ${COL_MD} ${COL_BT} ${COL_SB} ${COL_MB}`;

const cellBase = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 13,
  lineHeight: 1.4,
  padding: "11px 18px",
  display: "flex",
  alignItems: "center",
} as const;

export default function FutureBookingsCommitsTableSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "#FFFFFF",
        color: NAVY_DARK,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1400,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "26px 60px 0",
          textAlign: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 14px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 10,
          }}
        >
          <Briefcase size={12} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            Functional Ownership · FY27
          </span>
        </div>
        <h1
          className="font-heading"
          style={{
            fontSize: 42,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Bookings commits by function.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15,
            color: BODY,
            margin: "6px auto 0",
            maxWidth: 1080,
            lineHeight: 1.45,
          }}
        >
          One mandate per function, one owner accountable for delivery — revenue
          is everyone&apos;s job.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "20px 60px 12px",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          role="table"
          aria-label="Bookings commits by function"
          style={{
            border: `1px solid ${CARD_BORDER}`,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 4px 18px rgba(6,26,55,0.05)",
            background: "#FFFFFF",
          }}
        >
          <div
            role="row"
            style={{
              display: "grid",
              gridTemplateColumns: COL_TEMPLATE,
              background: NAVY_DARK,
              color: "#FFFFFF",
            }}
          >
            {[
              "Function",
              "Owner",
              "Mandate",
              "Booking Targets",
              "Sales Budget",
              "Marketing Budget",
            ].map((h) => (
              <div
                key={h}
                role="columnheader"
                style={{
                  ...cellBase,
                  fontWeight: 800,
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  padding: "12px 18px",
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {ROWS.map((r, i) => (
            <motion.div
              key={r.func}
              role="row"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.18 + i * 0.025 }}
              style={{
                display: "grid",
                gridTemplateColumns: COL_TEMPLATE,
                background: i % 2 === 0 ? "#FFFFFF" : ROW_ALT,
                borderTop: `1px solid ${CARD_BORDER}`,
              }}
            >
              <div
                role="cell"
                style={{
                  ...cellBase,
                  fontWeight: 700,
                  color: NAVY_DARK,
                  borderLeft: `3px solid ${BLUE}`,
                  paddingLeft: 15,
                }}
              >
                {r.func}
              </div>
              <div
                role="cell"
                style={{
                  ...cellBase,
                  fontWeight: 600,
                  color: BLUE,
                  letterSpacing: "0.01em",
                }}
              >
                {r.owner}
              </div>
              <div
                role="cell"
                style={{
                  ...cellBase,
                  color: BODY,
                }}
              >
                {r.mandate}
              </div>
              <div
                role="cell"
                style={{
                  ...cellBase,
                  fontWeight: r.bookingTarget ? 700 : 500,
                  color: r.bookingTarget ? NAVY_DARK : MUTED,
                  borderLeft: `1px solid ${CARD_BORDER}`,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.bookingTarget ?? ""}
              </div>
              <div
                role="cell"
                style={{
                  ...cellBase,
                  fontWeight: r.salesBudget ? 700 : 500,
                  color: r.salesBudget ? NAVY_DARK : MUTED,
                  borderLeft: `1px solid ${CARD_BORDER}`,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.salesBudget ?? ""}
              </div>
              <div
                role="cell"
                style={{
                  ...cellBase,
                  fontWeight: r.marketingBudget ? 700 : 500,
                  color: r.marketingBudget ? NAVY_DARK : MUTED,
                  borderLeft: `1px solid ${CARD_BORDER}`,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.marketingBudget ?? ""}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      <footer
        style={{
          padding: "0 60px 14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        Revenue is everyone&apos;s job
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
