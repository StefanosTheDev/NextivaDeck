"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import SegmentHeaderBox from "./shared/SegmentHeaderBox";

// Data source: CloseVelocityData_2026-04-11_VSBandSMB.xlsx (Salesforce export).
// Filters: MQL=1, RTM=Direct, phone-line buckets 1 / 2–5 / 6–9 (VSB + SMB),
// excludes freemium/zoominfo/partner/paid/self-signup. Mid-Market not shown
// — data too sparse after the Direct filter.
// 2026 cohort (YTD). Buckets derived from cumulative curves:
//   Same day = cum(0), 1–3 = cum(3)-cum(0), 4–7 = cum(7)-cum(3),
//   8–14 = cum(14)-cum(7), 15–30 = cum(30)-cum(14), 31+ = 100-cum(30).
// Rows sum to 100.

// Bucket palette: darkest/most saturated = earliest window (the "win").
const BUCKET_COLORS = [
  "#7EB3E8", // Same day
  "#5A8FC4", // 1–3 days
  "#406B9C", // 4–7 days
  "#2A4D75", // 8–14 days
  "#1A3050", // 15–30 days
  "#0F1E33", // 31+ days
];

const BUCKET_LABELS = [
  "Same day",
  "1–3 days",
  "4–7 days",
  "8–14 days",
  "15–30 days",
  "31+ days",
];

/** Same row height: left segment cards + right velocity bars (largeFonts segment fits). */
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
  // Six values, one per bucket — must sum to ~100
  shares: readonly [number, number, number, number, number, number];
}

const COLUMNS: readonly Column[] = [
  {
    box: {
      name: "VSB",
      range: "Up to 10 Users",
      conversion: {
        value: "~50%",
        label: "Lead → Sale",
      },
    },
    shares: [45, 23, 12, 10, 7, 3],
  },
  {
    box: {
      name: "SMB",
      range: "10 to 50 Users",
      conversion: {
        value: "~44%",
        label: "Lead → Sale",
      },
    },
    shares: [14, 22, 18, 12, 17, 17],
  },
];

export default function LeadVelocityBucketsV4Slide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "32px 100px 0",
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
            color: "#CCC7C3",
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
            color: "#FFFFFF",
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
          <span style={{ color: "rgba(255,255,255,0.7)" }}>
            For businesses up to 50 users,
          </span>{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #0070F3, #00C2FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            we close deals in hours or days,
          </span>{" "}
          <span style={{ color: "rgba(255,255,255,0.7)" }}>
            not weeks or months.
          </span>
        </p>
      </motion.header>

      {/* CENTERPIECE — top callouts, VSB bar, SMB bar */}
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
        {/* TOP HERO CALLOUTS — the two biggest takeaways, full width + lit up */}
        <div
          style={{
            display: "flex",
            gap: 22,
          }}
        >
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
                  background:
                    "linear-gradient(135deg, rgba(40,140,255,0.28), rgba(126,179,232,0.18))",
                  border: "1px solid rgba(126,179,232,0.55)",
                  borderRadius: 16,
                  boxShadow:
                    "0 0 40px rgba(40,140,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.78)",
                    margin: 0,
                    letterSpacing: "0.02em",
                    fontWeight: 500,
                    lineHeight: 1.35,
                  }}
                >
                  {isVSB ? (
                    <>
                      For {usersLabel}, lead-to-contact in{" "}
                      <span style={{ color: "#7EB3E8", fontWeight: 700 }}>
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
                    color: "#FFFFFF",
                    margin: "4px 0 0",
                    lineHeight: 1.15,
                  }}
                >
                  <span
                    style={{
                      background: "linear-gradient(90deg, #4DA8FF, #7EB3E8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: 32,
                      fontWeight: 800,
                    }}
                  >
                    {within7}%
                  </span>{" "}
                  <span style={{ color: "rgba(255,255,255,0.92)" }}>
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
            {/* Left: segment card — same height as velocity bar */}
            <div
              style={{
                minWidth: 0,
                justifySelf: "start",
                display: "flex",
                alignItems: "stretch",
                height: VELOCITY_BAR_TRACK_HEIGHT_PX,
              }}
            >
              <SegmentHeaderBox
                {...col.box}
                omitCustomerArrMetrics
                largeFonts
                rowHeightPx={VELOCITY_BAR_TRACK_HEIGHT_PX}
              />
            </div>

            {/* Right: horizontal stacked bar — fills remaining width */}
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
                          ? "1px solid rgba(0,0,0,0.25)"
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
                        color: i >= 3 ? "rgba(255,255,255,0.92)" : "#FFFFFF",
                        lineHeight: 1,
                      }}
                    >
                      {share}%
                    </span>
                    <span
                      style={{
                        fontSize: share >= 10 ? 11 : share >= 5 ? 9 : 7,
                        color:
                          i >= 3
                            ? "rgba(255,255,255,0.6)"
                            : "rgba(255,255,255,0.78)",
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

      {/* Footnote — scope disclosure, left-aligned with nextiva.com footer */}
      <p
        style={{
          padding: "4px 100px 0",
          fontSize: 11,
          color: "rgba(255,255,255,0.35)",
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

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
