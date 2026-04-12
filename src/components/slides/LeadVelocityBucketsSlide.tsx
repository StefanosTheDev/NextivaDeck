"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

// Data source: CloseVelocityData_2026-04-11.xlsx (Salesforce export).
// Each row shows the share of closed-won deals landing in each day-window.
// Values are averaged across 2023-2026 annual cohorts. Rows sum to 100%.
// Mid-Market + Enterprise excluded — too sparse to chart cleanly.

// Day-window palette: darkest/most saturated = earliest window (the "win").
const BUCKET_COLORS = [
  "#7EB3E8", // Same day
  "#5A8FC4", // 1–3 days
  "#406B9C", // 4–7 days
  "#2A4D75", // 8–14 days
  "#1A3050", // 15–30 days
];

const BUCKET_LABELS = [
  "Same day",
  "1–3 days",
  "4–7 days",
  "8–14 days",
  "15–30 days",
];

interface BucketRow {
  label: string;
  sublabel: string;
  // Five values, one per bucket — must sum to 100
  shares: readonly [number, number, number, number, number];
}

const ROWS: readonly BucketRow[] = [
  {
    label: "Micro SMB",
    sublabel: "1–2 users",
    shares: [62, 21, 8, 5, 4],
  },
  {
    label: "VSMB",
    sublabel: "3–10 users",
    shares: [43, 24, 13, 11, 9],
  },
  {
    label: "SMB",
    sublabel: "11–100 users",
    shares: [17, 21, 20, 15, 27],
  },
];

// Bottom hero band — "close within a week" using a uniform 7-day window
// so the comparison across segments is honest and consistent.
// Averaged across 2023-2026 cohorts. Source: CloseVelocityData_2026-04-11.xlsx
const BOTTOM_HERO = [
  { bucket: "Micro SMB (1–2)", pct: "86%", window: "within 7 days" },
  { bucket: "VSMB (3–10)", pct: "73%", window: "within 7 days" },
  { bucket: "SMB (11–100)", pct: "40%", window: "within 7 days" },
];

export default function LeadVelocityBucketsSlide({
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
          padding: "52px 100px 0",
          flexShrink: 0,
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
          GTM ENGINE · CONVERSION VELOCITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 54,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.1,
          }}
        >
          Demand arrives ready to buy.{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #0070F3, #00C2FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            We close it in days.
          </span>
        </h1>
        <p
          style={{
            fontSize: 19,
            color: "rgba(255,255,255,0.5)",
            margin: "12px 0 0",
            lineHeight: 1.5,
          }}
        >
          Share of closed-won deals landing in each day-window from lead
          creation — most of every segment wins before the end of week one.
        </p>
      </motion.header>

      {/* CENTERPIECE — segmented horizontal bars per deal-size bucket */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "20px 100px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            width: "100%",
          }}
        >
          {ROWS.map((row, rowIdx) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + rowIdx * 0.12 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
              }}
            >
              {/* Row label */}
              <div style={{ width: 220, flexShrink: 0 }}>
                <p
                  className="font-heading"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  {row.label}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.4)",
                    margin: "3px 0 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                  }}
                >
                  {row.sublabel}
                </p>
              </div>

              {/* Segmented bar */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  height: 64,
                  borderRadius: 10,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {row.shares.map((share, i) => (
                  <motion.div
                    key={BUCKET_LABELS[i]}
                    initial={{ flexGrow: 0 }}
                    animate={{ flexGrow: share }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + rowIdx * 0.12 + i * 0.05,
                      ease: "easeOut",
                    }}
                    style={{
                      flexBasis: 0,
                      background: BUCKET_COLORS[i],
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRight:
                        i < row.shares.length - 1
                          ? "1px solid rgba(0,0,0,0.25)"
                          : "none",
                      minWidth: 0,
                      overflow: "hidden",
                    }}
                  >
                    <span
                      className="font-heading"
                      style={{
                        fontSize: share >= 15 ? 24 : share >= 8 ? 17 : 12,
                        fontWeight: 700,
                        color: i >= 3 ? "rgba(255,255,255,0.9)" : "#FFFFFF",
                        lineHeight: 1,
                      }}
                    >
                      {share}%
                    </span>
                    {share >= 10 && (
                      <span
                        style={{
                          fontSize: 10,
                          color:
                            i >= 3
                              ? "rgba(255,255,255,0.55)"
                              : "rgba(255,255,255,0.7)",
                          marginTop: 4,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          fontWeight: 600,
                        }}
                      >
                        {BUCKET_LABELS[i]}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Bucket legend strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.95 }}
        style={{
          padding: "14px 100px 0",
          display: "flex",
          justifyContent: "center",
          gap: 24,
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {BUCKET_LABELS.map((label, i) => (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                background: BUCKET_COLORS[i],
                borderRadius: 3,
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* BOTTOM HERO BAND — 7-day close rate by segment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.05 }}
        style={{
          padding: "18px 80px 24px",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            background:
              "linear-gradient(135deg, rgba(0,112,243,0.1), rgba(0,194,255,0.08))",
            border: "1px solid rgba(0,112,243,0.2)",
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          {BOTTOM_HERO.map((h, i) => (
            <div
              key={h.bucket}
              style={{
                flex: 1,
                padding: "18px 20px",
                textAlign: "center",
                borderRight:
                  i < BOTTOM_HERO.length - 1
                    ? "1px solid rgba(0,112,243,0.15)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                }}
              >
                {h.bucket}
              </p>
              <p
                className="font-heading"
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "6px 0 0",
                  lineHeight: 1.1,
                }}
              >
                {h.pct}{" "}
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {h.window}
                </span>
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
