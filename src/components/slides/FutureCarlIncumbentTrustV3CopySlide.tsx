"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Building2, UserCheck } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const surveyData = [
  { name: "Beneficiaries", pct: 63, fill: BLUE, highlight: true },
  { name: "Neutral", pct: 29, fill: "#B3CCEA", highlight: false },
  { name: "Losers", pct: 8, fill: "#D6E2F0", highlight: false },
];

type PathCard = {
  icon: typeof Building2;
  title: string;
  stat: string;
  statLabel: string;
  cohort: string;
};

const pathCards: PathCard[] = [
  {
    icon: Building2,
    title: "Existing customers ask us for AI",
    stat: "61%",
    statLabel: "high trust on first call",
    cohort: "n=38 · 6× the trust of cold leads",
  },
  {
    icon: UserCheck,
    title: "Active AI shoppers choose us",
    stat: "72%",
    statLabel: "high-intent, high trust",
    cohort: "n=64 · pre-sold + high-awareness + existing",
  },
];

export default function FutureCarlIncumbentTrustV3CopySlide({
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "36px 56px 0",
          flexShrink: 0,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: MUTED,
            margin: "0 0 10px",
          }}
        >
          Appendix
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: NAVY_DARK,
            margin: "0 auto",
            lineHeight: 1.18,
            maxWidth: 1180,
          }}
        >
          Nextiva is seeing AI wins as a trusted incumbent for 92K+ businesses.
        </h1>
        <p
          style={{
            fontSize: 20,
            color: BODY,
            margin: "14px auto 0",
            maxWidth: 1180,
            lineHeight: 1.55,
          }}
        >
          Nextiva has seen this behavior emerge in an extraordinarily short
          period of time.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "28px 56px 20px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 1px minmax(0, 1fr)",
          columnGap: 40,
          minHeight: 0,
          alignItems: "stretch",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            minWidth: 0,
            minHeight: 0,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              minHeight: 52,
              margin: "0 0 14px",
              width: "100%",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: BLUE,
                margin: 0,
                lineHeight: 1.35,
                flex: 1,
                minWidth: 0,
              }}
            >
              Validated by external data
            </p>
            <span
              style={{
                color: MUTED,
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              ·
            </span>
            <p
              style={{
                fontSize: 14,
                color: BODY,
                margin: 0,
                lineHeight: 1.35,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Thoma Bravo
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              width: "100%",
              boxSizing: "border-box",
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderTop: `4px solid ${BLUE}`,
              borderRadius: 16,
              padding: "30px 32px 32px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minHeight: 0,
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(6,26,55,0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
                marginBottom: 18,
              }}
            >
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: NAVY_DARK,
                  margin: 0,
                  lineHeight: 1.28,
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
                  gap: 18,
                  flexShrink: 0,
                  opacity: 0.85,
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    letterSpacing: "0.18em",
                    color: NAVY_DARK,
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
                fontSize: 15,
                color: BODY,
                margin: "0 0 26px",
                lineHeight: 1.5,
                fontStyle: "italic",
              }}
            >
              &ldquo;How do you expect generative AI to affect your existing
              software vendors?&rdquo;
            </p>

            <div
              style={{
                width: "100%",
                flex: 1,
                minHeight: 220,
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={surveyData}
                  layout="vertical"
                  margin={{ top: 10, right: 72, left: 0, bottom: 10 }}
                  barSize={36}
                  barCategoryGap="24%"
                >
                  <XAxis type="number" domain={[0, 75]} hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    width={138}
                    tick={{
                      fontSize: 16,
                      fontWeight: 700,
                      fill: NAVY_DARK,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  />
                  <Bar dataKey="pct" radius={[0, 8, 8, 0]}>
                    {surveyData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={entry.fill}
                        opacity={entry.highlight ? 1 : 0.9}
                      />
                    ))}
                    <LabelList
                      dataKey="pct"
                      position="right"
                      formatter={(v: unknown) => `${v}%`}
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        fill: NAVY_DARK,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                      offset={12}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            minWidth: 1,
            background:
              "linear-gradient(to bottom, rgba(6,26,55,0) 0%, rgba(6,26,55,0.14) 20%, rgba(6,26,55,0.14) 80%, rgba(6,26,55,0) 100%)",
          }}
        />

        {/* RIGHT COLUMN */}
        <div
          style={{
            minWidth: 0,
            minHeight: 0,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              minHeight: 52,
              margin: "0 0 14px",
              width: "100%",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: BLUE,
                margin: 0,
                lineHeight: 1.35,
                flex: 1,
                minWidth: 0,
              }}
            >
              Validated by internal data
            </p>
            <span
              style={{
                color: MUTED,
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              ·
            </span>
            <p
              style={{
                fontSize: 14,
                color: BODY,
                margin: 0,
                lineHeight: 1.35,
                whiteSpace: "nowrap",
                flexShrink: 0,
                textAlign: "right",
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
                  width: "100%",
                  boxSizing: "border-box",
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: 16,
                  padding: "28px 32px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  position: "relative",
                  overflow: "hidden",
                  flex: 1,
                  minHeight: 0,
                  boxShadow: "0 6px 18px rgba(6,26,55,0.04)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: BLUE,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: BLUE_SOFT,
                      border: `1.5px solid ${BLUE}`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} color={BLUE} strokeWidth={2} />
                  </div>
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: NAVY_DARK,
                      margin: 0,
                      lineHeight: 1.25,
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
                        fontSize: 58,
                        fontWeight: 700,
                        color: BLUE,
                        fontFamily: "Georgia, serif",
                        letterSpacing: "-0.03em",
                        lineHeight: 0.95,
                      }}
                    >
                      {card.stat}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 15,
                    color: BLUE,
                    margin: 0,
                    textAlign: "right",
                    lineHeight: 1.35,
                    opacity: 0.9,
                    marginTop: -2,
                  }}
                >
                  {card.statLabel}
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: MUTED,
                    margin: "8px 0 0",
                    lineHeight: 1.4,
                    borderTop: `1px solid ${CARD_BORDER}`,
                    paddingTop: 12,
                  }}
                >
                  {card.cohort}
                </p>
              </motion.article>
            );
          })}
        </div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        style={{ padding: "18px 56px 14px" }}
      >
        <p
          style={{
            fontSize: 12,
            color: MUTED,
            margin: 0,
            textAlign: "left",
            lineHeight: 1.55,
            maxWidth: 1720,
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
          (Jan 2026).
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
