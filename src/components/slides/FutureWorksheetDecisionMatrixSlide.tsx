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

interface Quadrant {
  key: string;
  title: string;
  blurb: string;
  haveIt: "Yes" | "No";
  wantIt: "Yes" | "No";
}

const QUADS: Quadrant[] = [
  {
    key: "preserve",
    title: "Preserve",
    blurb: "We have it · we want it. Protect and defend.",
    haveIt: "Yes",
    wantIt: "Yes",
  },
  {
    key: "achieve",
    title: "Achieve",
    blurb: "We don't have it · we want it. Build, buy, or partner.",
    haveIt: "No",
    wantIt: "Yes",
  },
  {
    key: "eliminate",
    title: "Eliminate",
    blurb: "We have it · we don't want it. Remove, sunset, divest.",
    haveIt: "Yes",
    wantIt: "No",
  },
  {
    key: "avoid",
    title: "Avoid",
    blurb: "We don't have it · we don't want it. Stay out.",
    haveIt: "No",
    wantIt: "No",
  },
];

export default function FutureWorksheetDecisionMatrixSlide({
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
        <WorksheetPageBadge page={4} />
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
          Achieve · Preserve · Avoid · Eliminate.
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
          Plot capabilities and motions against{" "}
          <em>do we have it?</em> × <em>do we want it?</em>
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
        {/* Top-left corner */}
        <div />
        {/* Column headers (Do we want it?) */}
        <AxisLabel text="Do we want it? — Yes" />
        <AxisLabel text="Do we want it? — No" />

        {/* Row label · Yes */}
        <AxisLabel text="Do we have it? — Yes" vertical />
        <Quadrant q={QUADS[0]} />
        <Quadrant q={QUADS[2]} />

        {/* Row label · No */}
        <AxisLabel text="Do we have it? — No" vertical />
        <Quadrant q={QUADS[1]} />
        <Quadrant q={QUADS[3]} />
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

function Quadrant({ q }: { q: Quadrant }) {
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
            fontSize: 22,
            fontWeight: 700,
            color: NAVY_DARK,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {q.title}
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
          {q.blurb}
        </p>
      </div>
      <WorksheetTextarea
        storageKey={`decision.${q.key}`}
        placeholder="List items here…"
        fontSize={13}
      />
    </div>
  );
}
