"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  WorksheetInput,
  WorksheetTextarea,
  WorksheetPageBadge,
} from "./worksheet/WorksheetField";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const ROW_COUNT = 5;

const COL_HEADERS = [
  { label: "KR / Measure", width: "1.6fr" },
  { label: "Target", width: "1fr" },
  { label: "Who", width: "0.9fr" },
  { label: "Q1", width: "0.7fr" },
  { label: "Q2", width: "0.7fr" },
  { label: "Q3", width: "0.7fr" },
  { label: "Q4", width: "0.7fr" },
];

const GRID_TEMPLATE = COL_HEADERS.map((c) => c.width).join(" ");

export default function FutureWorksheetActionPlanSlide({
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{ padding: "26px 56px 0", flexShrink: 0 }}
      >
        <WorksheetPageBadge page={7} />
        <h1
          className="font-heading"
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: NAVY_DARK,
            margin: "8px 0 4px",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Action plan.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15,
            color: BODY,
            margin: 0,
            lineHeight: 1.45,
          }}
        >
          Anchor the goal, then break it into measurable key results with
          owners and a quarterly cadence.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "16px 56px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          minHeight: 0,
        }}
      >
        {/* Top — organization goal */}
        <div
          style={{
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}33`,
            borderRadius: 12,
            padding: "12px 16px",
          }}
        >
          <WorksheetTextarea
            storageKey="action.goal"
            label="Organization goal"
            placeholder="The single most important outcome this team must deliver."
            minHeight={56}
            fontSize={14}
          />
        </div>

        {/* OKR table */}
        <div
          style={{
            flex: 1,
            background: CARD_BG,
            border: `1px solid ${CARD_BORDER}`,
            borderTop: `4px solid ${BLUE}`,
            borderRadius: 14,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minHeight: 0,
            overflow: "hidden",
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: GRID_TEMPLATE,
              gap: 8,
              paddingBottom: 6,
              borderBottom: `1px solid ${CARD_BORDER}`,
            }}
          >
            {COL_HEADERS.map((c) => (
              <span
                key={c.label}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: BLUE,
                }}
              >
                {c.label}
              </span>
            ))}
          </div>

          {/* Data rows */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateRows: `repeat(${ROW_COUNT}, 1fr)`,
              gap: 8,
              minHeight: 0,
            }}
          >
            {Array.from({ length: ROW_COUNT }).map((_, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: GRID_TEMPLATE,
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <WorksheetInput
                  storageKey={`action.row.${i + 1}.measure`}
                  placeholder={i === 0 ? "e.g. NRR ≥ 105%" : ""}
                  fontSize={13}
                />
                <WorksheetInput
                  storageKey={`action.row.${i + 1}.target`}
                  fontSize={13}
                />
                <WorksheetInput
                  storageKey={`action.row.${i + 1}.who`}
                  fontSize={13}
                />
                <WorksheetInput
                  storageKey={`action.row.${i + 1}.q1`}
                  fontSize={13}
                />
                <WorksheetInput
                  storageKey={`action.row.${i + 1}.q2`}
                  fontSize={13}
                />
                <WorksheetInput
                  storageKey={`action.row.${i + 1}.q3`}
                  fontSize={13}
                />
                <WorksheetInput
                  storageKey={`action.row.${i + 1}.q4`}
                  fontSize={13}
                />
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              color: MUTED,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Tip: write KRs that are quantitative, time-bound, and owned by one
            person.
          </p>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
