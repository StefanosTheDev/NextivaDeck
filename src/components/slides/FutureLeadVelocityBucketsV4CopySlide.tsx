"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

// Light-theme bucket palette: lightest = earliest window (most prominent on white).
const BUCKET_COLORS = [
  "#2860B2", // Same day — darkest blue (most emphasis)
  "#4A7DC4",
  "#6B9BD2",
  "#8FB4DE",
  "#B3CCEA",
  "#D6E2F0", // 31+ days — palest blue
];

const BUCKET_TEXT_COLORS = [
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  NAVY_DARK,
  NAVY_DARK,
];

const BUCKET_LABELS = [
  "Same day",
  "1–3 days",
  "4–7 days",
  "8–14 days",
  "15–30 days",
  "31+ days",
];

const VELOCITY_BAR_TRACK_HEIGHT_PX = 168;

interface Column {
  box: {
    name: string;
    range: string;
    conversion: {
      value: string;
      label: string;
    };
  };
  shares: readonly [number, number, number, number, number, number];
}

const COLUMNS: readonly Column[] = [
  {
    box: {
      name: "VSB",
      range: "Up to 10 Users",
      conversion: { value: "~50%", label: "Lead → Sale" },
    },
    shares: [45, 23, 12, 10, 7, 3],
  },
  {
    box: {
      name: "SMB",
      range: "10 to 50 Users",
      conversion: { value: "~44%", label: "Lead → Sale" },
    },
    shares: [14, 22, 18, 12, 17, 17],
  },
];

function SegmentBox({
  name,
  range,
  conversion,
  height,
}: {
  name: string;
  range: string;
  conversion: { value: string; label: string };
  height: number;
}) {
  return (
    <div
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderTop: `4px solid ${BLUE}`,
        borderRadius: 12,
        overflow: "hidden",
        height,
        minHeight: height,
        maxHeight: height,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "16px 22px",
        justifyContent: "center",
        minWidth: 200,
      }}
    >
      <h2
        className="font-heading"
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: NAVY_DARK,
          margin: 0,
          lineHeight: 1.05,
        }}
      >
        {name}
      </h2>
      <p
        style={{
          fontSize: 16,
          color: BODY,
          margin: "4px 0 12px",
        }}
      >
        {range}
      </p>
      <div
        style={{
          paddingTop: 12,
          borderTop: `1px solid ${CARD_BORDER}`,
        }}
      >
        <p
          className="font-heading"
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: BLUE,
            margin: 0,
            lineHeight: 1,
          }}
        >
          {conversion.value}
        </p>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            color: MUTED,
            margin: "6px 0 0",
            textTransform: "uppercase",
          }}
        >
          {conversion.label}
        </p>
      </div>
    </div>
  );
}

export default function FutureLeadVelocityBucketsV4CopySlide({
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
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "28px 100px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: MUTED,
            margin: 0,
          }}
        >
          GTM EFFICIENCY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: NAVY_DARK,
            margin: "8px 0 0",
            lineHeight: 1.1,
          }}
        >
          Demand lands with high intent.
        </h1>
        <p
          className="font-heading"
          style={{
            fontSize: 22,
            fontWeight: 400,
            margin: "6px 0 0",
            lineHeight: 1.25,
          }}
        >
          <span style={{ color: BODY }}>For businesses up to 50 users,</span>{" "}
          <span style={{ color: BLUE, fontWeight: 700 }}>
            we close deals in hours or days,
          </span>{" "}
          <span style={{ color: BODY }}>not weeks or months.</span>
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 18,
          padding: "8px 100px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top hero callouts */}
        <div style={{ display: "flex", gap: 22 }}>
          {COLUMNS.map((col, i) => {
            const within7 = col.shares[0] + col.shares[1] + col.shares[2];
            const isVSB = col.box.name === "VSB";
            const usersLabel = isVSB
              ? "businesses with up to 10 users"
              : "businesses with 10 to 50 users";
            return (
              <motion.div
                key={col.box.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                style={{
                  flex: 1,
                  padding: "18px 32px",
                  textAlign: "center",
                  background: BLUE_SOFT,
                  border: `1px solid ${BLUE}55`,
                  borderRadius: 16,
                  boxShadow: "0 6px 24px rgba(40,96,178,0.10)",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    color: BODY,
                    margin: 0,
                    letterSpacing: "0.02em",
                    fontWeight: 500,
                    lineHeight: 1.35,
                  }}
                >
                  {isVSB ? (
                    <>
                      For {usersLabel}, lead-to-contact in{" "}
                      <span style={{ color: BLUE, fontWeight: 700 }}>
                        under 90 seconds
                      </span>{" "}
                      — then
                    </>
                  ) : (
                    <>For {usersLabel},</>
                  )}
                </p>
                <p
                  className="font-heading"
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    margin: "4px 0 0",
                    lineHeight: 1.15,
                  }}
                >
                  <span
                    style={{
                      color: BLUE,
                      fontSize: 32,
                      fontWeight: 800,
                    }}
                  >
                    {within7}%
                  </span>{" "}
                  <span style={{ color: NAVY_DARK }}>
                    {isVSB
                      ? "of won deals close within 7 days"
                      : "of deals close within 7 days"}
                  </span>
                </p>
              </motion.div>
            );
          })}
        </div>

        {COLUMNS.map((col, rowIdx) => (
          <motion.div
            key={col.box.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 + rowIdx * 0.12 }}
            style={{
              display: "grid",
              gridTemplateColumns: "max-content 1fr",
              columnGap: 18,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                justifySelf: "start",
                display: "flex",
                alignItems: "stretch",
                height: VELOCITY_BAR_TRACK_HEIGHT_PX,
              }}
            >
              <SegmentBox
                name={col.box.name}
                range={col.box.range}
                conversion={col.box.conversion}
                height={VELOCITY_BAR_TRACK_HEIGHT_PX}
              />
            </div>

            <div
              style={{
                minWidth: 0,
                height: VELOCITY_BAR_TRACK_HEIGHT_PX,
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: VELOCITY_BAR_TRACK_HEIGHT_PX,
                  minHeight: VELOCITY_BAR_TRACK_HEIGHT_PX,
                  maxHeight: VELOCITY_BAR_TRACK_HEIGHT_PX,
                  flexShrink: 0,
                  boxSizing: "border-box",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: `1px solid ${CARD_BORDER}`,
                }}
              >
                {col.shares.map((share, i) => (
                  <motion.div
                    key={BUCKET_LABELS[i]}
                    initial={{ flexGrow: 0 }}
                    animate={{ flexGrow: share }}
                    transition={{
                      duration: 0.7,
                      delay: 0.45 + rowIdx * 0.12 + i * 0.05,
                      ease: "easeOut",
                    }}
                    style={{
                      flexBasis: 0,
                      alignSelf: "stretch",
                      minHeight: VELOCITY_BAR_TRACK_HEIGHT_PX,
                      height: "100%",
                      background: BUCKET_COLORS[i],
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRight:
                        i < col.shares.length - 1
                          ? "1px solid rgba(255,255,255,0.5)"
                          : "none",
                      minWidth: 0,
                      overflow: "hidden",
                    }}
                  >
                    <span
                      className="font-heading"
                      style={{
                        fontSize: share >= 18 ? 32 : share >= 10 ? 24 : 14,
                        fontWeight: 700,
                        color: BUCKET_TEXT_COLORS[i],
                        lineHeight: 1,
                      }}
                    >
                      {share}%
                    </span>
                    <span
                      style={{
                        fontSize: share >= 10 ? 11 : share >= 5 ? 9 : 7,
                        color: BUCKET_TEXT_COLORS[i],
                        opacity: 0.85,
                        marginTop: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        fontWeight: 600,
                        textAlign: "center",
                        padding: "0 3px",
                        lineHeight: 1.1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {BUCKET_LABELS[i]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      <p
        style={{
          padding: "4px 100px 0",
          fontSize: 11,
          color: MUTED,
          margin: 0,
          textAlign: "left",
          fontStyle: "italic",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        Source: Salesforce opportunity data as of April 2026, direct sales only.
        MQL = reached market. VSB = 1–10 users, SMB = 10–50 users.
        Lead-to-contact &lt;90s per internal ops dashboard, Q1 FY26.
      </p>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
