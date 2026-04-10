"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { ROADMAP_HUMAN_AI_ROWS, ROADMAP_QUARTER_LABELS, type RoadmapBullet } from "./roadmapHumanAiContent";

const TILE_BG = "rgba(255,255,255,0.055)";
const TILE_BORDER = "rgba(255,255,255,0.11)";
const RAIL_BG = "rgba(0,0,0,0.32)";
const MUTED = "rgba(255,255,255,0.84)";
const RAIL_LABEL = "#7EB3E8";

/** Matches ProductBriefingDeckSlide roadmap title: h1.font-heading 36px / 700 — prefix ends before E in NEXT */
const TITLE_PREFIX = "the N";

/** Narrower rail + capped quarter columns (was 118px + 1fr each). */
const GRID_COLS = "96px repeat(3, minmax(0, 188px))";

const HEADER_PAD_X = 56;

const BULLET_FS = 9.75;
const BULLET_LH = 1.2;
const BULLET_GAP = 2;
const NEST_FS = 9.25;

function BulletEntry({ b }: { b: RoadmapBullet }) {
  if (typeof b === "string") {
    const strong = b.startsWith("AI Employee First Onboarding");
    return (
      <li
        style={{
          fontSize: BULLET_FS,
          lineHeight: BULLET_LH,
          color: MUTED,
          marginBottom: BULLET_GAP,
          fontWeight: strong ? 600 : 400,
        }}
      >
        {b}
      </li>
    );
  }
    return (
    <li style={{ fontSize: BULLET_FS, lineHeight: BULLET_LH, color: MUTED, marginBottom: BULLET_GAP }}>
      <span style={{ fontWeight: 500 }}>{b.text}</span>
      <ul
        style={{
          margin: "3px 0 0",
          paddingLeft: 14,
          listStyle: "disc",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        {b.nested.map((n, j) => (
          <li key={j} style={{ fontSize: NEST_FS, lineHeight: BULLET_LH, color: MUTED, marginBottom: 1 }}>
            {n}
          </li>
        ))}
      </ul>
    </li>
  );
}

function QuarterCell({ items }: { items: RoadmapBullet[] }) {
  return (
    <div
      style={{
        padding: "5px 7px 6px",
        minHeight: 0,
        borderLeft: `1px solid ${TILE_BORDER}`,
        boxSizing: "border-box",
      }}
    >
      {items.length === 0 ? null : (
        <ul style={{ margin: 0, padding: "0 0 0 12px", listStyle: "disc", color: "rgba(255,255,255,0.4)" }}>
          {items.map((b, i) => (
            <BulletEntry key={i} b={b} />
          ))}
        </ul>
      )}
    </div>
  );
}

const titlePrefixMeasureStyle: CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  visibility: "hidden",
  pointerEvents: "none",
  whiteSpace: "nowrap",
  fontSize: 36,
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

export default function RoadmapHumanAiBody() {
  const measureRef = useRef<HTMLSpanElement>(null);
  const [prefixToE_px, setPrefixToE_px] = useState(108);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const w = el.getBoundingClientRect().width;
    if (w > 0) setPrefixToE_px(w);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        position: "relative",
        padding: `0 ${HEADER_PAD_X}px 2px`,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        ref={measureRef}
        className="font-heading"
        aria-hidden
        style={titlePrefixMeasureStyle}
      >
        {TITLE_PREFIX}
      </span>

      <div
        style={{
          marginLeft: prefixToE_px,
          width: "fit-content",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          flex: 1,
        }}
      >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: GRID_COLS,
          columnGap: 5,
          rowGap: 0,
          marginBottom: 3,
          flexShrink: 0,
        }}
      >
        <div />
        {ROADMAP_QUARTER_LABELS.map((q) => (
          <div
            key={q}
            style={{
              textAlign: "center",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#FFFFFF",
              padding: "2px 0 1px",
            }}
          >
            {q}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {ROADMAP_HUMAN_AI_ROWS.map((row) => (
          <div
            key={row.labelLines.join("|")}
            style={{
              display: "grid",
              gridTemplateColumns: GRID_COLS,
              columnGap: 5,
              alignItems: "stretch",
              flexShrink: 0,
              background: TILE_BG,
              border: `1px solid ${TILE_BORDER}`,
              borderRadius: 5,
              overflow: "hidden",
              minHeight: 0,
            }}
          >
            <div
              style={{
                background: RAIL_BG,
                padding: "4px 5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 1,
                boxSizing: "border-box",
              }}
            >
              {row.labelLines.map((line) => (
                <p
                  key={line}
                  style={{
                    margin: 0,
                    fontSize: 8.5,
                    fontWeight: 700,
                    lineHeight: 1.12,
                    color: RAIL_LABEL,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
            <QuarterCell items={row.q1} />
            <QuarterCell items={row.q2} />
            <QuarterCell items={row.q3} />
          </div>
        ))}
      </div>
      </div>
    </motion.main>
  );
}
