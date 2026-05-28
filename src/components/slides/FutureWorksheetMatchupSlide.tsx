"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  WorksheetTextarea,
  WorksheetPageBadge,
} from "./worksheet/WorksheetField";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

interface Cell {
  key: string;
  title: string;
  blurb: string;
}

const CELLS: Cell[] = [
  {
    key: "s_x_o",
    title: "Strengths × Opportunities",
    blurb: "Where do we attack? Press our strengths into open opportunities.",
  },
  {
    key: "s_x_t",
    title: "Strengths × Threats",
    blurb: "Where do we defend? Use our strengths to neutralize threats.",
  },
  {
    key: "w_x_o",
    title: "Weaknesses × Opportunities",
    blurb: "Where do we invest? Close gaps to capture opportunities.",
  },
  {
    key: "w_x_t",
    title: "Weaknesses × Threats",
    blurb: "Where do we avoid? Areas where weaknesses + threats compound.",
  },
];

export default function FutureWorksheetMatchupSlide({
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
        <WorksheetPageBadge page={6} />
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
          Strategy matchup.
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
          Cross your SWOT — match strengths and weaknesses to opportunities and
          threats to find the moves.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "16px 56px 10px",
          display: "grid",
          gridTemplateColumns: "120px 1fr 1fr",
          gridTemplateRows: "auto 1fr 1fr",
          gap: 10,
          minHeight: 0,
        }}
      >
        <div />
        <AxisLabel text="Opportunities" />
        <AxisLabel text="Threats" />

        <AxisLabel text="Strengths" vertical />
        <Cell c={CELLS[0]} />
        <Cell c={CELLS[1]} />

        <AxisLabel text="Weaknesses" vertical />
        <Cell c={CELLS[2]} />
        <Cell c={CELLS[3]} />
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}

function AxisLabel({
  text,
  vertical = false,
}: {
  text: string;
  vertical?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BLUE_SOFT,
        color: BLUE,
        borderRadius: 8,
        padding: vertical ? "10px 8px" : "10px 14px",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textAlign: "center",
        writingMode: vertical ? "vertical-rl" : "horizontal-tb",
        transform: vertical ? "rotate(180deg)" : undefined,
      }}
    >
      {text}
    </div>
  );
}

function Cell({ c }: { c: Cell }) {
  return (
    <div
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderTop: `4px solid ${BLUE}`,
        borderRadius: 14,
        padding: "14px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        minHeight: 0,
      }}
    >
      <div>
        <h2
          className="font-heading"
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: NAVY_DARK,
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          {c.title}
        </h2>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            color: BODY,
            margin: "3px 0 0",
            lineHeight: 1.35,
          }}
        >
          {c.blurb}
        </p>
      </div>
      <WorksheetTextarea
        storageKey={`matchup.${c.key}`}
        placeholder="What moves does this matchup unlock?"
        fontSize={13}
      />
    </div>
  );
}
