"use client";
import { motion } from "framer-motion";
import { Network, Workflow, Handshake } from "lucide-react";
import SlideFooter from "../SlideFooter";
import SegmentHeaderBox from "./shared/SegmentHeaderBox";

// Data source: CloseVelocityData_2026-04-11_VSBandSMB.xlsx (Salesforce export).
// Filters: MQL=1, RTM=Direct, phone-line buckets 1 / 2–5 / 6–9 (VSB + SMB),
// excludes freemium/zoominfo/partner/paid/self-signup. Mid-Market excluded
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

interface Column {
  box: {
    name: string;
    range: string;
    badges: readonly string[];
    customers: string;
    custPct: string;
    arr: string;
    arrPct: string;
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
      badges: ["NEXT", "NextOS", "XBert AI", "NextivaONE"],
      customers: "80,200",
      custPct: "86% of total",
      arr: "$142M",
      arrPct: "41% of total",
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
      badges: ["NEXT", "XBert AI", "Experience Center"],
      customers: "11,000",
      custPct: "12% of total",
      arr: "$105M",
      arrPct: "30% of total",
      conversion: {
        value: "~44%",
        label: "Lead → Sale",
      },
    },
    shares: [14, 22, 18, 12, 17, 17],
  },
];

// Bottom row — Mid-Market story. Reuses the customer-base-broad data
// (slide 11) and replaces the velocity bar chart with three commentary
// callouts about Nextiva's mid-market GTM fit.
const MID_MARKET_BOX = {
  name: "Mid-Market",
  range: "50+ Users",
  badges: ["NEXT", "XBert AI", "Experience Center"],
  customers: "1,800",
  custPct: "2% of total",
  arr: "$104M",
  arrPct: "29% of total",
} as const;

const MID_MARKET_CALLOUTS = [
  {
    icon: Network,
    title: "Built for distributed teams",
    desc: "Purpose-built for multi-site, multi-region, hybrid workforces.",
  },
  {
    icon: Workflow,
    title: "Complex workflows",
    desc: "Custom routing, CRM integrations, and vertical compliance baked in.",
  },
  {
    icon: Handshake,
    title: "Solution selling",
    desc: "Named AEs and verticalized SEs running multi-year partnerships.",
  },
] as const;

export default function LeadVelocityBucketsSlide({
  slideNumber = 0,
  excludeMidMarket = false,
}: {
  slideNumber?: number;
  /** When true, hides the Mid-Market row + divider. Used by the
   *  `lead-velocity-buckets-no-mm` variant. */
  excludeMidMarket?: boolean;
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

      {/* CENTERPIECE — top callouts, VSB bar, SMB bar, [Mid-Market] */}
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
              display: "flex",
              gap: 24,
              alignItems: "stretch",
            }}
          >
            {/* Left: segment card (1/3 of slide width) */}
            <div style={{ flex: 1, display: "flex" }}>
              <div style={{ width: "100%", alignSelf: "center" }}>
                <SegmentHeaderBox {...col.box} />
              </div>
            </div>

            {/* Right: horizontal stacked bar (2/3 of slide width) */}
            <div
              style={{
                flex: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: 110,
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

        {/* Cohort-parallel insight band — HubSpot-style unit economics
            framing validates the hybrid model. Quiet glass treatment so it
            supports (doesn't compete with) the hero callouts above. Slimmer
            than the velocity bars above so the title can breathe. */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            padding: "16px 28px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            width: "92%",
            alignSelf: "center",
          }}
        >
          <div
            className="font-heading"
            style={{
              fontSize: 19,
              fontWeight: 700,
              color: "#7EB3E8",
              letterSpacing: "0.02em",
              flexShrink: 0,
              maxWidth: 230,
              lineHeight: 1.2,
            }}
          >
            Speed Moat & Best-in-Class LTV/CAC
          </div>
          <div
            aria-hidden="true"
            style={{
              width: 1,
              alignSelf: "stretch",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(126,179,232,0.4) 50%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.82)",
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              Similar to HubSpot&apos;s early playbook — acquire high volumes of
              lower-spend customers cheaply and accept first-year churn.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.82)",
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              After month 12, implied retention is often{" "}
              <span style={{ color: "#FFFFFF", fontWeight: 700 }}>
                stronger below $500 MRR
              </span>{" "}
              than above it: weak customers have already churned out.{" "}
              <span style={{ color: "#FFFFFF", fontWeight: 600 }}>
                Highly efficient, high ROI funnel and leading LTV/CAC.
              </span>
            </p>
          </div>
        </motion.div>

        {!excludeMidMarket && (
          <>
            {/* Divider — visually separates velocity segments from Mid-Market */}
            <div
              aria-hidden="true"
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(126,179,232,0.35) 50%, rgba(255,255,255,0) 100%)",
                margin: "4px 0 2px",
              }}
            />

            {/* Mid-Market row — segment card on left, commentary on right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.7 }}
              style={{
                display: "flex",
                gap: 24,
                alignItems: "stretch",
              }}
            >
              <div style={{ flex: 1, display: "flex" }}>
                <div style={{ width: "100%", alignSelf: "center" }}>
                  <SegmentHeaderBox {...MID_MARKET_BOX} />
                </div>
              </div>

              <div
                style={{
                  flex: 2,
                  display: "flex",
                  gap: 12,
                  alignItems: "stretch",
                }}
              >
                {MID_MARKET_CALLOUTS.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.85 + i * 0.08 }}
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderTop: "3px solid #2860B2",
                        borderRadius: 14,
                        padding: "14px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background:
                            "linear-gradient(135deg, rgba(40,96,178,0.3), rgba(126,179,232,0.15))",
                          border: "1px solid rgba(126,179,232,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#7EB3E8",
                        }}
                      >
                        <Icon size={17} strokeWidth={1.8} />
                      </div>
                      <p
                        className="font-heading"
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: "#FFFFFF",
                          margin: "2px 0 0",
                          lineHeight: 1.15,
                        }}
                      >
                        {c.title}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.6)",
                          margin: 0,
                          lineHeight: 1.35,
                        }}
                      >
                        {c.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
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
        MQL = reached market. VSB = 1–10 users, SMB = 10–50 users. Mid-Market
        excluded due to sparse lead velocity data. Lead-to-contact &lt;90s per
        internal ops dashboard, Q1 FY26. Cohort retention per internal BI
        review; HubSpot framing per their early-stage investor disclosures.
      </p>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
