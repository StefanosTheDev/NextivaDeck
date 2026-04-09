"use client";

import { motion } from "framer-motion";

/** Column widths match PDF p.9 drawing rects; row heights use auto + 1fr so top cards don’t overlap the platform. */
const BLUE_CARD = "#0B6EF6";
const PANEL_BG = "rgba(255,255,255,0.07)";
const PANEL_BORDER = "rgba(255,255,255,0.14)";
const MUTED = "rgba(255,255,255,0.78)";
const SUB = "rgba(255,255,255,0.55)";
/** Uppercase card titles on dark panels — contrasts with body copy */
const CARD_LABEL_BLUE = "#7EB3E8";
/** Padlocks on dark translucent rows — light cyan reads clearly vs panel + body text */
const LOCK_ICON_FILL = "#C8E7FF";

/** Same cushion: top trio ↔ platform, and platform ↔ blue data cards */
const STACK_GAP_PX = 6;

/** ~30% larger diagram vs prior cap — width pre-scaled so 1.3× fits without clipping sides */
const DIAGRAM_SCALE = 1.3;

function LockIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill={LOCK_ICON_FILL}
      aria-hidden
      style={{
        flexShrink: 0,
        filter: "drop-shadow(0 0 1px rgba(0,0,0,0.75))",
      }}
    >
      <path d="M17 8h-1V6c0-2.76-2.24-5-5-5S6 3.24 6 6v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H8V6z" />
    </svg>
  );
}

function ByoBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "#fff",
        background: BLUE_CARD,
        padding: "3px 8px",
        borderRadius: 4,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function Panel({
  children,
  style,
  horizontal,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  horizontal?: boolean;
}) {
  return (
    <div
      style={{
        background: PANEL_BG,
        border: `1px solid ${PANEL_BORDER}`,
        borderRadius: 8,
        padding: "8px 10px",
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        alignItems: horizontal ? "center" : "stretch",
        gap: horizontal ? 8 : 4,
        minHeight: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function CxpaasArchitectureBody() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{
        flex: 1,
        minHeight: 0,
        padding: "0 24px 2px",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          minHeight: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: `${100 / DIAGRAM_SCALE}%`,
            maxWidth: `min(${100 / DIAGRAM_SCALE}%, ${Math.round(1180 / DIAGRAM_SCALE)}px)`,
            height: "100%",
            flexShrink: 0,
            transform: `scale(${DIAGRAM_SCALE})`,
            transformOrigin: "bottom center",
            display: "grid",
            /*
             * Row 1: flex column (justify end) = top 3 cards + STACK_GAP + platform, grouped above blue row.
             * Row 2–3: cushion + Customer/Business data cards.
             */
            gridTemplateRows: `minmax(0, 1fr) ${STACK_GAP_PX}px auto`,
            rowGap: 0,
            minHeight: 0,
          }}
        >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "stretch",
            minHeight: 0,
            width: "100%",
          }}
        >
        {/* ——— Top row: NEXT Studio | CX Agent Experiences | Customer Experiences ——— */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 155fr) minmax(0, 354fr) minmax(0, 297fr)",
            columnGap: 10,
            minHeight: 0,
            alignItems: "stretch",
            flexShrink: 0,
          }}
        >
          <Panel style={{ padding: "9px 11px", justifyContent: "flex-start", gap: 6 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: CARD_LABEL_BLUE,
                margin: "0 0 8px",
                textAlign: "center",
              }}
            >
              NEXT Studio
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minHeight: 0 }}>
              {["Customer Experience Designer", "CX Agent Experience Designer", "Data + AI Model Manager"].map((t) => (
                <div
                  key={t}
                  style={{
                    flex: 1,
                    minHeight: 36,
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${PANEL_BORDER}`,
                    borderRadius: 6,
                    padding: "8px 10px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: MUTED,
                    lineHeight: 1.25,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </Panel>
          <Panel style={{ padding: "9px 11px", gap: 6 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: CARD_LABEL_BLUE,
                margin: "0 0 8px",
                textAlign: "center",
              }}
            >
              CX Agent Experiences
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.42fr) minmax(0, 1fr)", gap: 10, flex: 1, minHeight: 0 }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${PANEL_BORDER}`,
                  borderRadius: 6,
                  padding: "10px 10px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: MUTED,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Nextiva Apps
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, minHeight: 0 }}>
                {["Nextiva Embedded", "Nextiva Cards +\nWorkflows"].map((t) => (
                  <div
                    key={t}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${PANEL_BORDER}`,
                      borderRadius: 6,
                      padding: "8px 8px",
                      fontSize: 11,
                      fontWeight: 600,
                      color: MUTED,
                      lineHeight: 1.2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Panel>
          <Panel style={{ padding: "9px 11px", gap: 6 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: CARD_LABEL_BLUE,
                margin: "0 0 8px",
                textAlign: "center",
              }}
            >
              Customer Experiences (omnichannel)
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "1fr 1fr", gap: 8, flex: 1, minHeight: 0 }}>
              {["Search", "Live Chat", "Voice", "Video", "In Person", "FB", "LinkedIn", "X/…"].map((t, i) => {
                const social = i >= 5;
                return (
                <div
                  key={t}
                  style={{
                    background: social ? "rgba(11,110,246,0.35)" : "rgba(255,255,255,0.06)",
                    border: `1px solid ${social ? "rgba(11,110,246,0.5)" : PANEL_BORDER}`,
                    borderRadius: 5,
                    fontSize: 10,
                    fontWeight: 600,
                    color: MUTED,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "6px 4px",
                  }}
                >
                  {t}
                </div>
              );
              })}
            </div>
          </Panel>
        </div>

        <div aria-hidden style={{ minHeight: STACK_GAP_PX, flexShrink: 0 }} />

        {/* ——— Nextiva Data & Intelligence Platform ——— */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            flexShrink: 0,
            border: `1px solid ${PANEL_BORDER}`,
            borderRadius: 10,
            padding: "7px 11px 6px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <Panel
              horizontal
              style={{
                justifyContent: "space-between",
                flexWrap: "wrap",
                padding: "6px 11px",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 600, color: MUTED, lineHeight: 1.35, flex: "1 1 200px" }}>
                Programmable + Agentic Journeys
                <span style={{ color: SUB, fontWeight: 500 }}> (Programmable Flows + AI Agents)</span>
              </span>
              <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                <ByoBadge>BYO Agents</ByoBadge>
                <ByoBadge>BYO Flows</ByoBadge>
              </div>
            </Panel>

            <Panel horizontal style={{ padding: "6px 11px", alignItems: "center", gap: 10 }}>
              <LockIcon />
              <span style={{ fontSize: 11, fontWeight: 600, color: MUTED, lineHeight: 1.35 }}>Nextiva Customer Journal</span>
            </Panel>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.45fr 1fr",
                gap: 6,
                alignItems: "stretch",
              }}
            >
              <Panel
                horizontal
                style={{
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  padding: "6px 11px",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, flex: "1 1 160px" }}>
                  <LockIcon />
                  <span style={{ fontSize: 10.5, fontWeight: 600, color: MUTED, lineHeight: 1.35 }}>
                    Cognitive &amp; Assist Models for CX Agents
                    <span style={{ color: SUB, fontWeight: 500 }}> (AI + Human)</span>
                  </span>
                </div>
                <ByoBadge>BYO Models</ByoBadge>
              </Panel>
              <Panel
                horizontal
                style={{
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  padding: "6px 11px",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 600, color: MUTED, lineHeight: 1.35 }}>Analytics &amp; Reporting</span>
                <ByoBadge>BYO Analytics</ByoBadge>
              </Panel>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, alignItems: "stretch" }}>
              <Panel horizontal style={{ padding: "6px 11px", alignItems: "center", gap: 10 }}>
                <LockIcon />
                <span style={{ fontSize: 10.5, fontWeight: 600, color: MUTED, lineHeight: 1.35 }}>
                  Customer Data Model + Governance
                  <span style={{ color: SUB, fontWeight: 500 }}> (Data Store, Connectors)</span>
                </span>
              </Panel>
              <Panel horizontal style={{ padding: "6px 11px", alignItems: "center", gap: 10 }}>
                <LockIcon />
                <span style={{ fontSize: 10.5, fontWeight: 600, color: MUTED, lineHeight: 1.35 }}>
                  Business Data Model + Governance
                  <span style={{ color: SUB, fontWeight: 500 }}> (Data Store, Connectors)</span>
                </span>
              </Panel>
            </div>
          </div>

          <p
            style={{
              margin: "6px 0 0",
              paddingTop: 1,
              textAlign: "center",
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: CARD_LABEL_BLUE,
            }}
          >
            Nextiva Data &amp; Intelligence Platform
          </p>
        </div>
        </div>

        <div aria-hidden style={{ minHeight: STACK_GAP_PX }} />

        {/* ——— Bottom: Customer Data | Business Data ——— */}
        <div style={{ display: "grid", gridTemplateColumns: "321fr 326fr", columnGap: 12, minHeight: 0, alignItems: "stretch" }}>
          <div
            style={{
              background: BLUE_CARD,
              borderRadius: 8,
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span className="font-heading" style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
              Customer Data (1st &amp; 3rd Party)
            </span>
          </div>
          <div
            style={{
              background: BLUE_CARD,
              borderRadius: 8,
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span className="font-heading" style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
              Business Data
            </span>
          </div>
        </div>
        </div>
      </div>
    </motion.main>
  );
}
