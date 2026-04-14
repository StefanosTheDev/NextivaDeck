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
        text: "I tried other companies and yours sounds really more like upbeat.",
        industry: "Tax Preparation",
        score: 8,
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
        text: "I know what you guys do. You\u2019re awesome. I need your service.",
        industry: "Office Management",
        score: 9,
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
        text: "I just need to go in and sign the contract thing. But we\u2019re good.",
        industry: "Laundromat Services",
        score: 9,
      },
    ],
    stat: "72%",
    statLabel: "high-intent, high trust",
    cohort: "n=64 · pre-sold + high-awareness + existing",
  },
];

export default function CarlIncumbentTrustSlide({
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
          Nextiva is seeing AI wins as a trusted incumbent for 92K+ businesses.
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
          Nextiva has seen this behavior emerge in an extraordinarily short
          period of time.
        </p>
      </motion.header>

      {/* Main 2-column body */}
      <main
        style={{
          flex: 1,
          padding: "22px 80px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          minHeight: 0,
        }}
      >
        {/* ── LEFT COLUMN ── Market view ─────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            minWidth: 0,
            minHeight: 0,
          }}
        >
          <div style={{ height: 36, display: "flex", alignItems: "flex-end", gap: 12 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7BB3E0",
                margin: 0,
              }}
            >
              Market View
            </p>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Survey of enterprise buyers
            </p>
          </div>

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
              AI benefits{" "}
              <span style={{ color: "#6EE7B7" }}>accrue to scaled</span>{" "}
              incumbents with embedded customer relationships.
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
              padding: "22px 26px 18px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <p
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 4px",
                lineHeight: 1.3,
                letterSpacing: "0.01em",
              }}
            >
              Enterprise Software Buyer Survey
            </p>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 14px",
                lineHeight: 1.4,
                fontStyle: "italic",
              }}
            >
              &ldquo;How do you expect generative AI to affect your existing
              software vendors?&rdquo;
            </p>

            <div
              style={{
                flex: 1,
                width: "100%",
                minHeight: 0,
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={surveyData}
                  layout="vertical"
                  margin={{ top: 8, right: 80, left: 0, bottom: 8 }}
                  barSize={48}
                  barCategoryGap="18%"
                >
                  <XAxis type="number" domain={[0, 75]} hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    width={140}
                    tick={{
                      fontSize: 19,
                      fontWeight: 700,
                      fill: "rgba(255,255,255,0.82)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  />
                  <Bar dataKey="pct" radius={[0, 10, 10, 0]}>
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
                        fontSize: 24,
                        fontWeight: 700,
                        fill: "#FFFFFF",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                      offset={14}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN ── Internal / Nextiva CARL data ─────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minWidth: 0,
          }}
        >
          <div style={{ height: 36, display: "flex", alignItems: "flex-end", gap: 12 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#E8B84D",
                margin: 0,
              }}
            >
              Validated by internal data
            </p>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                lineHeight: 1.3,
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
          (Jan 2026, survey data Dec 2025).
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
