"use client";

import { motion } from "framer-motion";
import { UNIFIED_CXM_STANDALONE, UNIFIED_CXM_TRIAD } from "./unifiedCxmPlatformContent";

/** Outer shell for triad and for the right pair — one visual “card” each */
const GROUP_BG = "rgba(12, 42, 88, 0.72)";
const GROUP_BORDER = "rgba(110, 178, 240, 0.45)";
/** Inner columns — gap shows shell; contrast with outer */
const TILE_BG = "rgba(255,255,255,0.06)";
const TILE_BORDER = "rgba(255,255,255,0.12)";
const MUTED = "rgba(255,255,255,0.78)";
const HEADER_COLOR = "#7EB3E8";

/** Same outer + inner padding as triad so header bands line up across all five */
const GROUP_OUTER_PAD_PX = 12;
const GROUP_INNER_GAP_PX = 12;

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

/** CX First list typography — ruler for phantom lines */
const COMPACT_FONT_PX = 11.5;
const COMPACT_LINE_HEIGHT = 1.32;
const COMPACT_GAP_PX = 3;
/** Pretend this many extra lines after the real CX First bullets; bottom sits just under the last phantom line */
const PHANTOM_LINES_BELOW_CX_FIRST = 7;
const UNDER_LAST_PHANTOM_LINE_PX = 4;

const cxFirstBulletCount = UNIFIED_CXM_TRIAD[0].bullets.length;
const rulerLineCount = cxFirstBulletCount + PHANTOM_LINES_BELOW_CX_FIRST;

const listRegionHeightPx =
  rulerLineCount * (COMPACT_FONT_PX * COMPACT_LINE_HEIGHT) +
  (rulerLineCount - 1) * COMPACT_GAP_PX +
  UNDER_LAST_PHANTOM_LINE_PX;

/** One inner tile: pad + header + gap + fixed list band + pad (same for all five columns) */
const INNER_TILE_HEIGHT_PX =
  12 + HEADER_BAND_HEIGHT_PX + LIST_TOP_GAP_PX + listRegionHeightPx + 10;

/** Group shell includes outer padding around tiles */
const GROUP_SHELL_HEIGHT_PX = INNER_TILE_HEIGHT_PX + 2 * GROUP_OUTER_PAD_PX;

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

function BulletList({ bullets, compact, fillHeight }: { bullets: string[]; compact?: boolean; fillHeight?: boolean }) {
  return (
    <ul
      style={{
        margin: 0,
        padding: 0,
        listStyle: "none",
        flex: fillHeight ? 1 : undefined,
        minHeight: fillHeight ? 0 : undefined,
        height: fillHeight ? "100%" : undefined,
        overflowY: fillHeight ? "auto" : "visible",
        display: "flex",
        flexDirection: "column",
        gap: compact ? 3 : 4,
        justifyContent: "flex-start",
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

/** Inner tile inside a grouped shell (triad or right pair) */
function InnerPillarTile({
  title,
  bullets,
  compact,
  headerFontSizePx,
}: {
  title: string;
  bullets: string[];
  compact: boolean;
  headerFontSizePx: number;
}) {
  return (
    <div
      style={{
        minWidth: 0,
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        padding: COLUMN_PAD,
        boxSizing: "border-box",
        background: TILE_BG,
        border: `1px solid ${TILE_BORDER}`,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <PillarHeaderBand title={title} fontSizePx={headerFontSizePx} />
      <div
        style={{
          marginTop: LIST_TOP_GAP_PX,
          height: listRegionHeightPx,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <BulletList bullets={bullets} compact={compact} fillHeight />
      </div>
    </div>
  );
}

function GroupedPillarShell({ columnCount, children }: { columnCount: 2 | 3; children: React.ReactNode }) {
  return (
    <div
      style={{
        minWidth: 0,
        height: GROUP_SHELL_HEIGHT_PX,
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        columnGap: GROUP_INNER_GAP_PX,
        alignItems: "stretch",
        padding: GROUP_OUTER_PAD_PX,
        background: GROUP_BG,
        border: `1px solid ${GROUP_BORDER}`,
        borderRadius: 12,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {children}
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
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1680,
          alignSelf: "center",
          flexShrink: 0,
          display: "grid",
          gridTemplateColumns: "minmax(0, 2.35fr) minmax(0, 2fr)",
          columnGap: 18,
          alignItems: "start",
          boxSizing: "border-box",
        }}
      >
        <GroupedPillarShell columnCount={3}>
          {UNIFIED_CXM_TRIAD.map((col) => (
            <InnerPillarTile
              key={col.title}
              title={col.title}
              bullets={col.bullets}
              compact={col.title === "CX First"}
              headerFontSizePx={HEADER_SIZE_PX}
            />
          ))}
        </GroupedPillarShell>

        <GroupedPillarShell columnCount={2}>
          <InnerPillarTile
            title={UNIFIED_CXM_STANDALONE[0].titleLines.join(" ")}
            bullets={UNIFIED_CXM_STANDALONE[0].bullets}
            compact={false}
            headerFontSizePx={HEADER_SIZE_PX}
          />
          <InnerPillarTile title={BESPOKE_HEADER_ONE_LINE} bullets={UNIFIED_CXM_STANDALONE[1].bullets} compact={false} headerFontSizePx={HEADER_SIZE_BESPOKE_PX} />
        </GroupedPillarShell>
      </div>
    </motion.main>
  );
}
