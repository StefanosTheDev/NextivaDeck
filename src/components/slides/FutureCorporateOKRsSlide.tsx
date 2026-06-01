"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Network,
  Cpu,
  TrendingUp,
  Plus,
  Users,
  ArrowRight,
  Target,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const GROWTH = "#1E7E5E";
const GROWTH_SOFT = "#E5F4EE";
const PURPLE = "#6849A8";
const PURPLE_SOFT = "#EFEAF7";

type Row = {
  num: string;
  okrEyebrow: string;
  okrTitle: string;
  okrBody: string;
  okrIcon: typeof Sparkles;
  kpiLabel: string;
  kpiBigPrefix?: string;
  kpiBigCore: string;
  kpiBigSuffix?: string;
  kpiSub: string;
  accent: string;
  accentSoft: string;
};

const ROWS: Row[] = [
  {
    num: "01",
    okrEyebrow: "Activate the base",
    okrTitle: "Prove the base can compound.",
    okrBody:
      "Prove that our existing customer base — made AI-enabled and agentic — can compound: lifting NRR from the low 90s toward 100%.",
    okrIcon: Sparkles,
    kpiLabel: "Net Revenue Retention",
    kpiBigPrefix: "\u2248",
    kpiBigCore: "100",
    kpiBigSuffix: "%",
    kpiSub: "by FY27 exit",
    accent: BLUE,
    accentSoft: BLUE_SOFT,
  },
  {
    num: "02",
    okrEyebrow: "New vectors",
    okrTitle: "Grow on top of the core.",
    okrBody:
      "Grow new products through partnerships and channels — add roughly 10% of growth on top of the core.",
    okrIcon: Network,
    kpiLabel: "New growth on top",
    kpiBigPrefix: "+",
    kpiBigCore: "10",
    kpiBigSuffix: "%",
    kpiSub: "partnerships \u00B7 channels \u00B7 new products",
    accent: BLUE,
    accentSoft: BLUE_SOFT,
  },
  {
    num: "03",
    okrEyebrow: "Modernize the operation",
    okrTitle: "Make the operation agentic.",
    okrBody:
      "Run like a modern AI-native company — agentic workflows in every function, lifting revenue per employee toward the AI-native benchmark.",
    okrIcon: Cpu,
    kpiLabel: "Revenue / employee",
    kpiBigPrefix: "\u2248 $",
    kpiBigCore: "3.5",
    kpiBigSuffix: "M",
    kpiSub: "AI-native benchmark \u00B7 vs ~$610K trad. SaaS",
    accent: BLUE,
    accentSoft: BLUE_SOFT,
  },
];

export default function FutureCorporateOKRsSlide({
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
        position: "relative",
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
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1400,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "26px 72px 0",
          textAlign: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 14px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 12,
          }}
        >
          <Target size={12} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            FY26 Commitments · Three OKRs
          </span>
        </div>
        <h1
          className="font-heading"
          style={{
            fontSize: 46,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Three objectives. Three numbers.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 17,
            color: BODY,
            margin: "8px auto 0",
            maxWidth: 1080,
            lineHeight: 1.5,
          }}
        >
          The whole company aligns to{" "}
          <strong style={{ color: NAVY_DARK }}>three measurable outcomes</strong>{" "}
          — what we commit to on the left, the number we move on the right.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "20px 72px 14px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.55fr) minmax(0, 1fr)",
          gridTemplateRows: "auto 1fr 1fr 1fr",
          columnGap: 18,
          rowGap: 12,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 14px",
            borderRadius: 8,
            background: "#FFFFFF",
            border: `1px solid ${CARD_BORDER}`,
          }}
        >
          <Users size={14} color={NAVY} strokeWidth={2.2} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: NAVY,
            }}
          >
            What we commit to
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 14px",
            borderRadius: 8,
            background: "#FFFFFF",
            border: `1px solid ${CARD_BORDER}`,
          }}
        >
          <TrendingUp size={14} color={NAVY} strokeWidth={2.2} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: NAVY,
            }}
          >
            The number we move
          </span>
        </div>

        {ROWS.map((row, i) => {
          const Icon = row.okrIcon;
          return (
            <motion.div
              key={row.num}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
              style={{ display: "contents" }}
            >
              <article
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderLeft: `5px solid ${row.accent}`,
                  borderRadius: 12,
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  boxShadow: "0 4px 14px rgba(6,26,55,0.05)",
                  position: "relative",
                  minHeight: 0,
                }}
              >
                <span
                  className="font-heading"
                  style={{
                    fontSize: 44,
                    fontWeight: 700,
                    color: row.accent,
                    opacity: 0.22,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    fontVariantNumeric: "tabular-nums",
                    flexShrink: 0,
                    minWidth: 56,
                  }}
                >
                  {row.num}
                </span>
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 6,
                        background: row.accentSoft,
                        border: `1px solid ${row.accent}55`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={13} color={row.accent} strokeWidth={2.2} />
                    </span>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 11,
                        fontWeight: 800,
                        color: row.accent,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                      }}
                    >
                      {row.okrEyebrow}
                    </span>
                  </div>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: NAVY_DARK,
                      lineHeight: 1.2,
                      letterSpacing: "-0.005em",
                      margin: 0,
                    }}
                  >
                    {row.okrTitle}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13.5,
                      color: BODY,
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {row.okrBody}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  color={row.accent}
                  strokeWidth={2.2}
                  style={{
                    flexShrink: 0,
                    alignSelf: "center",
                    opacity: 0.7,
                  }}
                />
              </article>

              <aside
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${row.accent}55`,
                  borderTop: `5px solid ${row.accent}`,
                  borderRadius: 12,
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 4,
                  boxShadow: `0 6px 18px ${row.accent}1A`,
                  position: "relative",
                  minHeight: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 10.5,
                    fontWeight: 800,
                    color: row.accent,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {row.kpiLabel}
                </span>
                <div
                  className="font-heading"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 2,
                    color: NAVY_DARK,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {row.kpiBigPrefix && (
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: row.accent,
                      }}
                    >
                      {row.kpiBigPrefix}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: 56,
                      fontWeight: 700,
                      color: row.accent,
                    }}
                  >
                    {row.kpiBigCore}
                  </span>
                  {row.kpiBigSuffix && (
                    <span
                      style={{
                        fontSize: 32,
                        fontWeight: 700,
                        color: row.accent,
                      }}
                    >
                      {row.kpiBigSuffix}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: BODY,
                    lineHeight: 1.4,
                  }}
                >
                  {row.kpiSub}
                </span>
              </aside>
            </motion.div>
          );
        })}
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.55 }}
        style={{
          margin: "0 72px 14px",
          padding: "12px 22px",
          borderRadius: 12,
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F1F5FB 100%)",
          border: `1px solid ${BLUE}33`,
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          className="font-heading"
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: BLUE,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          Together
        </span>
        <span
          style={{
            width: 1,
            height: 22,
            background: `${BLUE}55`,
            flexShrink: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flex: 1,
            flexWrap: "nowrap",
          }}
        >
          <span
            className="font-heading"
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: NAVY_DARK,
              letterSpacing: "-0.005em",
            }}
          >
            NRR → 100%
          </span>
          <Plus size={14} color={BLUE} strokeWidth={2.4} />
          <span
            className="font-heading"
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: NAVY_DARK,
              letterSpacing: "-0.005em",
            }}
          >
            +10% new growth
          </span>
          <Plus size={14} color={BLUE} strokeWidth={2.4} />
          <span
            className="font-heading"
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: NAVY_DARK,
              letterSpacing: "-0.005em",
            }}
          >
            ~$3.5M rev/emp
          </span>
          <ArrowRight size={18} color={BLUE} strokeWidth={2.4} />
          <span
            className="font-heading"
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: BLUE,
              letterSpacing: "-0.005em",
              whiteSpace: "nowrap",
            }}
          >
            ≈ 2× Enterprise Value
          </span>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
