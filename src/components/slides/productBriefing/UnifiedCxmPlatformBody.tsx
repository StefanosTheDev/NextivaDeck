"use client";

import { motion } from "framer-motion";
import { UNIFIED_CXM_STANDALONE, UNIFIED_CXM_TRIAD } from "./unifiedCxmPlatformContent";

/** Match CxpaasArchitectureBody / product briefing dark panels */
const PANEL_BG = "rgba(255,255,255,0.07)";
const PANEL_BORDER = "rgba(255,255,255,0.14)";
const MUTED = "rgba(255,255,255,0.78)";
const HEADER_COLOR = "#7EB3E8";

/** Same visual header size for columns 1–4; column 5 slightly smaller so one line fits */
const HEADER_SIZE_PX = 18;
const HEADER_SIZE_BESPOKE_PX = 16;

/**
 * Fixed-height band so first header line aligns across columns and bullet lists start at one y.
 * Fits up to two lines at 18px (e.g. “Conversational Commerce”).
 */
const HEADER_BAND_HEIGHT_PX = 84;

/** Space between bottom of header band and first bullet — same for all five */
const LIST_TOP_GAP_PX = 22;

const COLUMN_PAD = "12px 12px 10px";

function PillarHeaderBand({ title, fontSizePx }: { title: string; fontSizePx: number }) {
  return (
    <div
      style={{
        height: HEADER_BAND_HEIGHT_PX,
        flexShrink: 0,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
      }}
    >
      <p
        className="font-heading"
        style={{
          margin: 0,
          fontSize: fontSizePx,
          fontWeight: 700,
          letterSpacing: "0.02em",
          color: HEADER_COLOR,
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        {title}
      </p>
    </div>
  );
}

function BulletList({ bullets, compact }: { bullets: string[]; compact?: boolean }) {
  return (
    <ul
      style={{
        margin: 0,
        padding: 0,
        listStyle: "none",
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: compact ? 3 : 4,
      }}
    >
      {bullets.map((line, idx) => (
        <li
          key={`${line}-${idx}`}
          style={{
            fontSize: compact ? 11.5 : 12.5,
            lineHeight: 1.32,
            color: MUTED,
            fontWeight: 400,
          }}
        >
          {line}
        </li>
      ))}
    </ul>
  );
}

function TriadColumn({
  title,
  bullets,
  showDivider,
  compact,
}: {
  title: string;
  bullets: string[];
  showDivider: boolean;
  compact: boolean;
}) {
  return (
    <div
      style={{
        minWidth: 0,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        padding: COLUMN_PAD,
        borderRight: showDivider ? `1px solid ${PANEL_BORDER}` : undefined,
        boxSizing: "border-box",
      }}
    >
      <PillarHeaderBand title={title} fontSizePx={HEADER_SIZE_PX} />
      <div style={{ marginTop: LIST_TOP_GAP_PX, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <BulletList bullets={bullets} compact={compact} />
      </div>
    </div>
  );
}

function StandalonePillar({ title, bullets, headerFontSizePx }: { title: string; bullets: string[]; headerFontSizePx: number }) {
  return (
    <div
      style={{
        minWidth: 0,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        background: PANEL_BG,
        border: `1px solid ${PANEL_BORDER}`,
        borderRadius: 10,
        padding: COLUMN_PAD,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <PillarHeaderBand title={title} fontSizePx={headerFontSizePx} />
      <div style={{ marginTop: LIST_TOP_GAP_PX, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <BulletList bullets={bullets} compact={false} />
      </div>
    </div>
  );
}

/** One line, same words as PDF/PPTX two-line title */
const BESPOKE_HEADER_ONE_LINE = "Built to be Bespoke, At Scale";

export default function UnifiedCxmPlatformBody() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{
        flex: 1,
        minHeight: 0,
        width: "100%",
        padding: "0 40px 10px",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1680,
          minHeight: 0,
          height: "100%",
          display: "grid",
          gridTemplateColumns: "minmax(0, 2.35fr) minmax(0, 1fr) minmax(0, 1fr)",
          columnGap: 12,
          alignItems: "stretch",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            minWidth: 0,
            minHeight: 0,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
            alignItems: "stretch",
            background: PANEL_BG,
            border: `1px solid ${PANEL_BORDER}`,
            borderRadius: 10,
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {UNIFIED_CXM_TRIAD.map((col, i) => (
            <TriadColumn
              key={col.title}
              title={col.title}
              bullets={col.bullets}
              showDivider={i < UNIFIED_CXM_TRIAD.length - 1}
              compact={col.title === "CX First"}
            />
          ))}
        </div>

        <StandalonePillar title={UNIFIED_CXM_STANDALONE[0].titleLines.join(" ")} bullets={UNIFIED_CXM_STANDALONE[0].bullets} headerFontSizePx={HEADER_SIZE_PX} />
        <StandalonePillar title={BESPOKE_HEADER_ONE_LINE} bullets={UNIFIED_CXM_STANDALONE[1].bullets} headerFontSizePx={HEADER_SIZE_BESPOKE_PX} />
      </div>
    </motion.main>
  );
}
