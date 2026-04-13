"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Building2, Search, UserCheck } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const surveyData = [
  {
    name: "Beneficiaries",
    pct: 63,
    fill: "#6EE7B7",
    highlight: true,
  },
  {
    name: "Neutral",
    pct: 29,
    fill: "rgba(255,255,255,0.28)",
    highlight: false,
  },
  {
    name: "Losers",
    pct: 8,
    fill: "rgba(224,126,126,0.45)",
    highlight: false,
  },
];

type PathCard = {
  icon: typeof Building2;
  color: string;
  title: string;
  quotes: { text: string; industry: string; score: number }[];
  stat: string;
  statLabel: string;
  cohort: string;
};

const pathCards: PathCard[] = [
  {
    icon: Building2,
    color: "#7BB3E0",
    title: "Existing customers ask us for AI",
    quotes: [
      {
        text: "Since we\u2019re already Nextiva customers, do we get a discount when we add the AI?",
        industry: "SMB · Existing Nextiva customer",
        score: 7,
      },
    ],
    stat: "61%",
    statLabel: "high trust on first call",
    cohort: "n=38 · 6× the trust of cold leads",
  },
  {
    icon: Search,
    color: "#6EE7B7",
    title: "First-time AI buyers find us",
    quotes: [
      {
        text: "I wanted to get information on signing up for the AI Receptionist.",
        industry: "Inbound inquiry · Customer-initiated",
        score: 8,
      },
    ],
    stat: "51%",
    statLabel: "high trust from outside channels",
    cohort: "n=306 · arrived via website, search, referral, social",
  },
  {
    icon: UserCheck,
    color: "#E8B84D",
    title: "Active AI shoppers choose us",
    quotes: [
      {
        text: "I\u2019m not looking for any other Nextiva-type competitor. Nextiva is going to be the one.",
        industry: "Home Improvement · Evaluated competitors",
        score: 9,
      },
    ],
    stat: "72%",
    statLabel: "high-intent, high trust",
    cohort: "n=64 · pre-sold + high-awareness + existing",
  },
];

export default function CarlIncumbentTrustV3Slide({
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
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "40px 80px 0",
          flexShrink: 0,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 6px",
          }}
        >
          Appendix
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Nextiva is seeing AI wins as a trusted incumbent for 100K businesses.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.55)",
            margin: "10px auto 0",
            maxWidth: 1200,
            lineHeight: 1.5,
          }}
        >
          The market expects incumbents to win AI. Our data shows we already
          are.
        </p>
      </motion.header>

      {/* Main 2-column body with central divider */}
      <main
        style={{
          flex: 1,
          padding: "22px 80px 0",
          display: "flex",
          gap: 32,
          minHeight: 0,
          alignItems: "stretch",
        }}
      >
        {/* ── LEFT COLUMN ── Market view ─────────────── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minWidth: 0,
            minHeight: 0,
          }}
        >
          {/* Section label */}
          <p
            style={{
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#7BB3E0",
              margin: "0 0 2px",
              lineHeight: 1.3,
              height: 36,
              display: "flex",
              alignItems: "center",
            }}
          >
            Market perspectives on AI benefits to incumbent software vendors
          </p>

          {/* Market View hero statement */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              background: "rgba(110,231,183,0.1)",
              border: "1px solid rgba(110,231,183,0.35)",
              borderRadius: 14,
              padding: "22px 28px",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              AI commercial benefits will accrue to{" "}
              <span style={{ color: "#6EE7B7" }}>
                scaled and embedded incumbents
              </span>
              .
            </p>
          </motion.div>

          {/* TB chart card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              padding: "12px 22px 10px",
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            {/* Header row with title + source badges */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: 2,
              }}
            >
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.25,
                  letterSpacing: "0.01em",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                Enterprise Software Buyer Survey
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexShrink: 0,
                  opacity: 0.85,
                }}
              >
                {/* Thoma Bravo — real SVG (Wikimedia public domain), recolored white */}
                <img
                  src="/logos/thoma-bravo-white.svg"
                  alt="Thoma Bravo"
                  style={{
                    height: 16,
                    width: "auto",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    width: 1,
                    height: 16,
                    background: "rgba(255,255,255,0.18)",
                  }}
                />
                {/* Avenir — text wordmark (matches their actual text-based brand identity) */}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.92)",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontStyle: "normal",
                    textTransform: "uppercase",
                  }}
                >
                  Avenir
                </span>
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 4px",
                lineHeight: 1.3,
                fontStyle: "italic",
              }}
            >
              &ldquo;How do you expect generative AI to affect your existing
              software vendors?&rdquo;
            </p>

            <div
              style={{
                width: "100%",
                height: 150,
              }}
            >
              <ResponsiveContainer width="100%" height={150}>
                <BarChart
                  data={surveyData}
                  layout="vertical"
                  margin={{ top: 2, right: 64, left: 0, bottom: 2 }}
                  barSize={28}
                  barCategoryGap="12%"
                >
                  <XAxis type="number" domain={[0, 75]} hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    width={120}
                    tick={{
                      fontSize: 14,
                      fontWeight: 700,
                      fill: "rgba(255,255,255,0.82)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  />
                  <Bar dataKey="pct" radius={[0, 8, 8, 0]}>
                    {surveyData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={entry.fill}
                        opacity={entry.highlight ? 1 : 0.85}
                      />
                    ))}
                    <LabelList
                      dataKey="pct"
                      position="right"
                      formatter={(v: unknown) => `${v}%`}
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        fill: "#FFFFFF",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                      offset={10}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Source box 1 — Gartner (mini bar-chart viz) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: "14px 20px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                Worldwide AI spending forecast
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "rgba(123,179,224,0.85)",
                  margin: 0,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                Gartner · Jan 2026
              </p>
            </div>

            {/* Mini bar chart: 2025 vs 2026 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                paddingTop: 2,
              }}
            >
              {/* Row: 2025 */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.5)",
                    width: 34,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  2025
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 14,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "68%",
                      height: "100%",
                      background: "rgba(123,179,224,0.5)",
                      borderRadius: 3,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.65)",
                    width: 54,
                    textAlign: "right",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  $1.74T
                </span>
              </div>
              {/* Row: 2026 */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#7BB3E0",
                    width: 34,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  2026
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 14,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "#7BB3E0",
                      borderRadius: 3,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    width: 54,
                    textAlign: "right",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  $2.5T
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.55)",
                margin: "2px 0 0",
                lineHeight: 1.3,
              }}
            >
              Enterprise AI budgets grow{" "}
              <span style={{ color: "#7BB3E0", fontWeight: 700 }}>
                +44% YoY
              </span>{" "}
              — concentrated in incumbent software stacks.
            </p>
          </motion.div>

          {/* Source box 2 — Goldman Sachs Agentic AI TAM expansion */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: "12px 20px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                Customer Service Software TAM (SaaS + Agents)
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "rgba(110,231,183,0.85)",
                  margin: 0,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                Goldman Sachs · Jun 2025
              </p>
            </div>

            {/* Big number → arrow → big number visualization */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                paddingTop: 2,
              }}
            >
              {/* Left value: $30B 2025 */}
              <div style={{ textAlign: "center", flexShrink: 0 }}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "Georgia, serif",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  $30B
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 2,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  2025
                </div>
              </div>

              {/* Growth connector: gray line with CAGR annotation */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  minWidth: 90,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#6EE7B7",
                    marginBottom: 4,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  ~11% CAGR
                </span>
                <svg
                  width="100%"
                  height="10"
                  viewBox="0 0 120 10"
                  preserveAspectRatio="none"
                  style={{ display: "block" }}
                >
                  <line
                    x1="0"
                    y1="5"
                    x2="110"
                    y2="5"
                    stroke="rgba(255,255,255,0.32)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="104,1 112,5 104,9"
                    fill="none"
                    stroke="rgba(255,255,255,0.45)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 3,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  5-year forecast
                </span>
              </div>

              {/* Right value: $50B+ 2030 */}
              <div style={{ textAlign: "center", flexShrink: 0 }}>
                <div
                  style={{
                    fontSize: 38,
                    fontWeight: 700,
                    color: "#6EE7B7",
                    fontFamily: "Georgia, serif",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  $50B+
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#6EE7B7",
                    marginTop: 2,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.05em",
                    opacity: 0.8,
                  }}
                >
                  2030
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.55)",
                margin: "2px 0 0",
                lineHeight: 1.35,
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              Agents layer on top of SaaS —{" "}
              <span style={{ color: "#6EE7B7", fontStyle: "normal" }}>
                incumbents capture outsized share
              </span>{" "}
              of the new Agent TAM.
            </p>
          </motion.div>
        </div>

        {/* Vertical divider */}
        <div
          style={{
            width: 1,
            alignSelf: "stretch",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0) 100%)",
            flexShrink: 0,
          }}
        />

        {/* ── RIGHT COLUMN ── Internal / Nextiva CARL data ─────── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minWidth: 0,
            minHeight: 0,
          }}
        >
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              height: 36,
              margin: "0 0 2px",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#E8B84D",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              Validated by internal data
            </p>
            <span
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: 12,
              }}
            >
              ·
            </span>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                lineHeight: 1.3,
                whiteSpace: "nowrap",
              }}
            >
              Q3 FY26 sales call transcripts
            </p>
          </div>

          {pathCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "14px 18px 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  position: "relative",
                  overflow: "hidden",
                  flex: 1,
                  minHeight: 0,
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: card.color,
                  }}
                />

                {/* Header row: icon + title + big stat */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${card.color}15`,
                      border: `1.5px solid ${card.color}40`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={card.color} strokeWidth={2} />
                  </div>
                  <h2
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.2,
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    {card.title}
                  </h2>
                  <div
                    style={{
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 52,
                        fontWeight: 700,
                        color: card.color,
                        fontFamily: "Georgia, serif",
                        letterSpacing: "-0.03em",
                        lineHeight: 0.95,
                      }}
                    >
                      {card.stat}
                    </span>
                  </div>
                </div>

                {/* Stat label */}
                <p
                  style={{
                    fontSize: 13,
                    color: `${card.color}`,
                    margin: 0,
                    textAlign: "right",
                    lineHeight: 1.3,
                    opacity: 0.85,
                    marginTop: -4,
                  }}
                >
                  {card.statLabel}
                </p>

                {/* Quotes */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    flex: 1,
                    minHeight: 0,
                  }}
                >
                  {card.quotes.map((q) => (
                    <div
                      key={q.text}
                      style={{
                        borderLeft: `2px solid ${card.color}`,
                        paddingLeft: 10,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 14,
                          fontStyle: "italic",
                          color: "rgba(255,255,255,0.85)",
                          margin: 0,
                          lineHeight: 1.35,
                        }}
                      >
                        &ldquo;{q.text}&rdquo;
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.4)",
                          margin: "2px 0 0",
                          lineHeight: 1.2,
                        }}
                      >
                        {q.industry} · Score {q.score}/10
                      </p>
                    </div>
                  ))}
                </div>

                {/* Cohort footer */}
                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.35)",
                    margin: "4px 0 0",
                    lineHeight: 1.3,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: 6,
                  }}
                >
                  {card.cohort}
                </p>
              </motion.article>
            );
          })}
        </div>
      </main>

      {/* Source footnote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        style={{ padding: "14px 80px 12px" }}
      >
        <p
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.32)",
            margin: 0,
            textAlign: "left",
            lineHeight: 1.5,
          }}
        >
          Sources: Thoma Bravo,{" "}
          <span style={{ fontStyle: "italic" }}>
            &ldquo;We Believe AI Adoption Favors Incumbents&rdquo;
          </span>
          , citing Avenir,{" "}
          <span style={{ fontStyle: "italic" }}>
            &ldquo;The Future of SaaS — A Fork in the Road&rdquo;
          </span>{" "}
          (Jan 2026). · Gartner,{" "}
          <span style={{ fontStyle: "italic" }}>
            &ldquo;Worldwide AI Spending Forecast&rdquo;
          </span>{" "}
          (Jan 2026). · Goldman Sachs Equity Research,{" "}
          <span style={{ fontStyle: "italic" }}>
            &ldquo;Generative AI Part XI: Agentic AI Expands the App Software
            TAM&rdquo;
          </span>{" "}
          (Jun 2025).
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
