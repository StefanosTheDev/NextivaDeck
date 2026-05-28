"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  WorksheetInput,
  WorksheetPageBadge,
} from "./worksheet/WorksheetField";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const COLUMNS: { key: string; title: string; helper: string }[] = [
  {
    key: "opportunities",
    title: "Opportunities",
    helper: "Where can we win? What openings exist for us?",
  },
  {
    key: "roadblocks",
    title: "Roadblocks",
    helper: "What is in the way? What slows us down or blocks us?",
  },
  {
    key: "ksf",
    title: "Key Success Factors",
    helper: "What absolutely has to be true for us to succeed?",
  },
];

export default function FutureWorksheetOpportunitiesSlide({
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
        style={{
          padding: "26px 56px 0",
          flexShrink: 0,
        }}
      >
        <WorksheetPageBadge page={3} />
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
          Opportunities · Roadblocks · Key success factors.
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
          List up to eight items per column. Be specific — short, sharp,
          concrete.
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
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 14,
          minHeight: 0,
        }}
      >
        {COLUMNS.map((col) => (
          <div
            key={col.key}
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderTop: `4px solid ${BLUE}`,
              borderRadius: 14,
              padding: "16px 18px",
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
                  fontSize: 20,
                  fontWeight: 700,
                  color: NAVY_DARK,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {col.title}
              </h2>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  color: BODY,
                  margin: "4px 0 6px",
                  lineHeight: 1.35,
                }}
              >
                {col.helper}
              </p>
            </div>
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateRows: "repeat(8, 1fr)",
                gap: 6,
                flex: 1,
                minHeight: 0,
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 0,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      flexShrink: 0,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: BLUE,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {i + 1}.
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <WorksheetInput
                      storageKey={`opps.${col.key}.${i + 1}`}
                      placeholder=""
                      fontSize={13}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
