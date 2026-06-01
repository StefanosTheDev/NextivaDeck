"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Coins, Handshake, Flag, ArrowRight } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const BG = "#FFFFFF";

const moves = [
  {
    num: "01",
    icon: Coins,
    title: "Price and bundle to win",
    label: "Asymmetric pricing",
    points: [
      "Bundle AI into the base — make it free where competitors charge",
      "Monetize on outcomes and usage, not seats",
      "Let the installed base self-expand at lower friction",
      "Force the market to defend price while we defend value",
    ],
    takeaway: "PRICE LIKE WE WANT TO WIN —\nNOT LIKE WE WANT TO HOLD",
  },
  {
    num: "02",
    icon: Handshake,
    title: "Acquire and partner ahead of them",
    label: "Inorganic speed",
    points: [
      "Acquire vertical AI specialists before incumbents do",
      "Partner with model labs on co-engineering terms — not vendor / buyer",
      "Recruit agent-native talent at premium",
      "Lock IP and distribution early in healthcare, finance, legal",
    ],
    takeaway: "ACQUIRE FOR SPEED —\nDON'T REBUILD WHAT WE CAN BUY",
  },
  {
    num: "03",
    icon: Flag,
    title: "Declare the category first",
    label: "Narrative leadership",
    points: [
      "Move publicly from \u201cUCaaS / CCaaS with AI\u201d to \u201cConversational AI Platform\u201d",
      "Publish the benchmark and standard for vertical AI agents",
      "Ship one flagship customer outcome as the category proof point",
      "Set the language others have to use to compete",
    ],
    takeaway: "OWN THE CATEGORY BEFORE\nSOMEONE NAMES IT FOR US",
  },
];

export default function FutureOffensiveMovesSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: BG,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -160,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1200,
          height: 480,
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
          padding: "48px 80px 0",
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
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: MUTED,
            margin: "0 0 12px",
          }}
        >
          FROM DEFENSE TO OFFENSE
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 46,
            fontWeight: 400,
            color: NAVY_DARK,
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          If they&apos;d do it — what are we willing to do first?
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "60px 60px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          alignItems: "stretch",
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        {moves.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.article
              key={m.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderTop: `3px solid ${BLUE}`,
                borderRadius: 14,
                padding: "28px 26px 22px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 14px rgba(6,26,55,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(40,96,178,0.10)",
                    border: `1px solid ${BLUE}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} color={BLUE} strokeWidth={1.75} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: BLUE,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.label}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: MUTED,
                      marginLeft: 8,
                    }}
                  >
                    {m.num}
                  </span>
                </div>
              </div>

              <h3
                className="font-heading"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: NAVY_DARK,
                  margin: "0 0 24px",
                  lineHeight: 1.25,
                }}
              >
                {m.title}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {m.points.map((pt, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <ArrowRight
                      size={18}
                      color={BLUE}
                      strokeWidth={2.5}
                      style={{ flexShrink: 0, marginTop: 4 }}
                    />
                    <span
                      style={{
                        fontSize: 17,
                        color: NAVY,
                        fontWeight: 500,
                        lineHeight: 1.35,
                      }}
                    >
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 36,
                }}
              >
                <div
                  style={{
                    background: "rgba(40,96,178,0.08)",
                    border: `1px solid ${BLUE}33`,
                    borderRadius: 10,
                    padding: "14px 20px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: NAVY_DARK,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      whiteSpace: "pre-line",
                      lineHeight: 1.5,
                    }}
                  >
                    {m.takeaway}
                  </span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <footer
        style={{
          padding: "20px 60px 16px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        First-mover advantage is a posture, not a slogan
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
