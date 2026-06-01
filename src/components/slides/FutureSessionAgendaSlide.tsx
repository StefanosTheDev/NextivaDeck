"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  ListChecks,
  CircleDot,
  Check,
  Info,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

type Day = {
  num: string;
  title: string;
  description: string;
  topics: string[];
  outputs: string[];
};

const DAYS: Day[] = [
  {
    num: "01",
    title: "Ground Truth",
    description:
      "Align on what is already embedded in the strategy and determine who we are built to serve.",
    topics: ["Strategic Truths", "What We Learned", "ICP", "Grow the Base"],
    outputs: [
      "Strategic truths validated",
      "Lessons learned documented",
      "ICP defined",
      "Initial Grow-the-Base framework",
    ],
  },
  {
    num: "02",
    title: "Focus & Choices",
    description:
      "Determine what earns investment, what gets retired, and what execution requires.",
    topics: [
      "Grow the Base (continued)",
      "More Productive Organization",
      "Acceleration of Growth",
      "Expand",
      "Drop",
      "Execution Requirements",
      "Strategic Narrative",
    ],
    outputs: [
      "Grow-the-Base model",
      "Expand list",
      "Drop list",
      "Capability gaps & execution requirements",
      "Leadership narrative",
    ],
  },
  {
    num: "03",
    title: "Operationalization",
    description:
      "Translate strategic decisions from Days 1 and 2 into FY27 execution planning.",
    topics: [
      "FY27 priorities",
      "H1 priorities",
      "Q1 OKRs",
      "Ownership & accountability",
      "Post-meeting workstreams",
    ],
    outputs: [
      "FY27 & H1 priorities",
      "Q1 OKRs",
      "Ownership model",
      "Planning framework locked",
    ],
  },
];

export default function FutureSessionAgendaSlide({
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
            padding: "8px 18px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 12,
          }}
        >
          <CalendarDays size={14} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            Session Agenda
          </span>
        </div>

        <h1
          className="font-heading"
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          FY27 Strategic Planning.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            color: BODY,
            margin: "10px auto 0",
            maxWidth: 1100,
            lineHeight: 1.5,
          }}
        >
          Three days, one arc — from{" "}
          <strong style={{ color: NAVY_DARK }}>ground truth</strong> to{" "}
          <strong style={{ color: NAVY_DARK }}>focus &amp; choices</strong> to{" "}
          <strong style={{ color: NAVY_DARK }}>operationalization</strong>. Each
          day builds on the last.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "22px 56px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 18,
            flex: 1,
            minHeight: 0,
          }}
        >
          {DAYS.map((d, i) => (
            <motion.article
              key={d.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 + i * 0.08 }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderTop: `5px solid ${BLUE}`,
                borderRadius: 14,
                padding: "20px 22px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxShadow: "0 6px 20px rgba(6,26,55,0.05)",
                position: "relative",
                minHeight: 0,
              }}
            >
              <span
                className="font-heading"
                style={{
                  position: "absolute",
                  top: 10,
                  right: 18,
                  fontSize: 64,
                  fontWeight: 700,
                  color: BLUE,
                  opacity: 0.1,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  pointerEvents: "none",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {d.num}
              </span>

              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: BLUE,
                    marginBottom: 4,
                  }}
                >
                  Day {d.num}
                </div>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    margin: 0,
                    lineHeight: 1.15,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {d.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    color: BODY,
                    margin: "6px 0 0",
                    lineHeight: 1.5,
                  }}
                >
                  {d.description}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flex: 1,
                  minHeight: 0,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 6,
                    }}
                  >
                    <ListChecks size={14} color={BLUE} strokeWidth={2.4} />
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 10.5,
                        fontWeight: 800,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: BLUE,
                      }}
                    >
                      Topics
                    </span>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    {d.topics.map((t) => (
                      <li
                        key={t}
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 13,
                          color: NAVY_DARK,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          lineHeight: 1.4,
                        }}
                      >
                        <CircleDot
                          size={11}
                          color={BLUE}
                          strokeWidth={2.4}
                          style={{ flexShrink: 0, marginTop: 4 }}
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    height: 0,
                    borderTop: `1.5px dotted ${BLUE}66`,
                    margin: "4px 0",
                  }}
                />

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 6,
                    }}
                  >
                    <Check size={14} color={BLUE} strokeWidth={2.8} />
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 10.5,
                        fontWeight: 800,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: BLUE,
                      }}
                    >
                      Outputs
                    </span>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    {d.outputs.map((o) => (
                      <li
                        key={o}
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 13,
                          color: NAVY_DARK,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          lineHeight: 1.4,
                        }}
                      >
                        <span
                          aria-hidden
                          style={{
                            width: 16,
                            height: 16,
                            borderRadius: 4,
                            background: BLUE_SOFT,
                            border: `1px solid ${BLUE}`,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        >
                          <Check
                            size={10}
                            color={BLUE}
                            strokeWidth={3}
                          />
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 22px",
            borderRadius: 12,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}33`,
          }}
        >
          <Info size={16} color={BLUE} strokeWidth={2.4} />
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13.5,
              color: NAVY_DARK,
              lineHeight: 1.45,
              flex: 1,
            }}
          >
            <strong>Each day builds on the last —</strong> outputs from Day 1
            and Day 2 are inputs to Day 3.
          </p>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
              padding: "4px 10px",
              borderRadius: 6,
              background: "#FFFFFF",
              border: `1px solid ${BLUE}55`,
              flexShrink: 0,
            }}
          >
            Ieasha joins Day 3
          </span>
        </motion.div>
      </motion.main>

      <footer
        style={{
          padding: "0 72px 14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        FY27 Strategic Planning · Session Agenda
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
