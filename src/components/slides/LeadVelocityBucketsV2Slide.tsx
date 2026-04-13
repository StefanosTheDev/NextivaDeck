"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import SegmentHeaderBox from "./shared/SegmentHeaderBox";

const BUCKET_COLORS = [
  "#7EB3E8",
  "#5A8FC4",
  "#406B9C",
  "#2A4D75",
  "#1A3050",
  "#0F1E33",
];

const BUCKET_LABELS = [
  "Same day",
  "1–3 days",
  "4–7 days",
  "8–14 days",
  "15–30 days",
  "31+ days",
];

interface Column {
  box: {
    name: string;
    range: string;
    badges: readonly string[];
    customers: string;
    custPct: string;
    arr: string;
    arrPct: string;
  };
  shares: readonly [number, number, number, number, number, number];
}

const COLUMNS: readonly Column[] = [
  {
    box: {
      name: "VSB",
      range: "Up to 10 Users",
      badges: ["NEXT", "NextOS", "XBert AI", "NextivaONE"],
      customers: "80,200",
      custPct: "86% of total",
      arr: "$142M",
      arrPct: "41% of total",
    },
    shares: [45, 23, 12, 10, 7, 3],
  },
  {
    box: {
      name: "SMB",
      range: "10 to 50 Users",
      badges: ["NEXT", "XBert AI", "Experience Center"],
      customers: "11,000",
      custPct: "12% of total",
      arr: "$105M",
      arrPct: "30% of total",
    },
    shares: [14, 22, 18, 12, 17, 17],
  },
];

export default function LeadVelocityBucketsV2Slide({
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
            fontSize: 36,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>
            SMBs come to us with high intent.
          </span>{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #0070F3, #00C2FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            We close deals in hours or days,
          </span>{" "}
          <span style={{ color: "rgba(255,255,255,0.75)" }}>
            not weeks or months.
          </span>
        </h1>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 20,
          padding: "14px 100px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", gap: 22, width: "100%" }}>
          {COLUMNS.map((col, colIdx) => (
            <motion.div
              key={col.box.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + colIdx * 0.12 }}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <SegmentHeaderBox {...col.box} size="standard" />

              <article
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: "3px solid #2860B2",
                  borderRadius: 14,
                  padding: "14px 18px 14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    margin: "0 0 10px",
                    lineHeight: 1.25,
                  }}
                >
                  Share of closed-won direct-sales deals by days-to-close window
                </p>
                <div
                  style={{
                    display: "flex",
                    height: 160,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {col.shares.map((share, i) => (
                    <motion.div
                      key={BUCKET_LABELS[i]}
                      initial={{ flexGrow: 0 }}
                      animate={{ flexGrow: share }}
                      transition={{
                        duration: 0.7,
                        delay: 0.45 + colIdx * 0.12 + i * 0.05,
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
                          fontSize: share >= 18 ? 36 : share >= 10 ? 26 : 16,
                          fontWeight: 700,
                          color: i >= 3 ? "rgba(255,255,255,0.9)" : "#FFFFFF",
                          lineHeight: 1,
                        }}
                      >
                        {share}%
                      </span>
                      {share >= 7 && (
                        <span
                          style={{
                            fontSize: share >= 18 ? 13 : share >= 10 ? 12 : 10,
                            color:
                              i >= 3
                                ? "rgba(255,255,255,0.55)"
                                : "rgba(255,255,255,0.75)",
                            marginTop: 8,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            fontWeight: 600,
                            textAlign: "center",
                            padding: "0 4px",
                            lineHeight: 1.1,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {BUCKET_LABELS[i]}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 22, width: "100%" }}>
          {COLUMNS.map((col, colIdx) => {
            const within7 = col.shares[0] + col.shares[1] + col.shares[2];
            return (
              <div key={col.box.name} style={{ flex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + colIdx * 0.08 }}
                  style={{
                    width: `${within7}%`,
                    padding: "12px 20px",
                    textAlign: "center",
                    background:
                      "linear-gradient(135deg, rgba(0,112,243,0.1), rgba(0,194,255,0.08))",
                    border: "1px solid rgba(0,112,243,0.2)",
                    borderRadius: 14,
                  }}
                >
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontWeight: 600,
                    }}
                  >
                    {col.box.name}
                  </p>
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: "4px 0 0",
                      lineHeight: 1.1,
                    }}
                  >
                    {within7}%{" "}
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      within 7 days
                    </span>
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </main>

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
        MQL = reached market. VSB = 1–10 users, SMB = 10–50 users. Mid-Market
        excluded due to sparse lead velocity data.
      </p>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
