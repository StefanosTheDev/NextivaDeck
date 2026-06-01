"use client";

import { motion } from "framer-motion";
import { Target, Users, Gauge, Lock, Sparkles, Flag } from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const DELIVERABLES = [
  {
    icon: Target,
    title: "A named ICP",
    body: "Segments, verticals, and disciplined exclusions — plus named personas (consumer-style, not segment codes). Who Nextiva is built to serve, on the page.",
  },
  {
    icon: Users,
    title: "Customer profiles ranked by economics",
    body: "Who drives MRR expansion, and net-positive churn below and above $500 cohorts — and who doesn't. Establishing a base is the model.",
  },
  {
    icon: Gauge,
    title: "Operational & economic leverage mapped",
    body: "Where leverage already lives today — and an honest call on what is structural vs. one-time correction.",
  },
];

export default function FutureDay1DeliverablesSlide({
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
            marginBottom: 14,
          }}
        >
          <Sparkles size={14} color={BLUE} strokeWidth={2.4} />
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
            FY27 Strategic Session · Day 01
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
          Who we serve, what&apos;s working.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 18,
            color: BODY,
            margin: "10px auto 0",
            maxWidth: 1100,
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: NAVY_DARK }}>Posture —</strong> warm up first.
          People share before the room debates. Land on where Nextiva actually
          <em> is</em> before deciding where to go.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "20px 72px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            padding: "18px 24px",
            borderRadius: 14,
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F1F5FB 100%)",
            border: `1px solid ${BLUE}33`,
            boxShadow: "0 6px 24px rgba(40,96,178,0.08)",
            display: "flex",
            gap: 18,
            alignItems: "flex-start",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 42,
              height: 42,
              borderRadius: 11,
              background: BLUE,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            <Flag size={20} color="#FFFFFF" strokeWidth={2.2} />
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: BLUE,
                marginBottom: 6,
              }}
            >
              Executive walk-out · Day 1
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 15.5,
                color: NAVY_DARK,
                lineHeight: 1.5,
              }}
            >
              <strong>Ground truth before commitments.</strong> The room walks
              out aligned on <em>who</em> Nextiva is built to serve — named
              ICP, named personas, named exclusions — and on the customer
              profiles that prove the model below and above the{" "}
              <strong>$500</strong> cohorts.{" "}
              <strong>Establishing the base is the model.</strong>
            </p>
          </div>
        </motion.div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <Lock size={18} color={BLUE} strokeWidth={2.4} />
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: BLUE,
              margin: 0,
            }}
          >
            By end of Day 1 — locked
          </p>
          <span
            style={{
              flex: 1,
              height: 1,
              background: `linear-gradient(to right, ${CARD_BORDER}, transparent)`,
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 22,
            flex: 1,
            minHeight: 0,
          }}
        >
          {DELIVERABLES.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.article
                key={d.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 + i * 0.08 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `5px solid ${BLUE}`,
                  borderRadius: 14,
                  padding: "22px 24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: "0 6px 20px rgba(6,26,55,0.05)",
                  position: "relative",
                  minHeight: 0,
                }}
              >
                <span
                  className="font-heading"
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 18,
                    fontSize: 64,
                    fontWeight: 700,
                    color: BLUE,
                    opacity: 0.12,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    pointerEvents: "none",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: BLUE_SOFT,
                    border: `1px solid ${BLUE}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color={BLUE} strokeWidth={2} />
                </span>

                <div>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: NAVY_DARK,
                      margin: 0,
                      lineHeight: 1.2,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {d.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 14.5,
                      color: BODY,
                      margin: "8px 0 0",
                      lineHeight: 1.5,
                    }}
                  >
                    {d.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.45 }}
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
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
              flexShrink: 0,
            }}
          >
            Why order matters
          </span>
          <span style={{ width: 1, height: 18, background: `${BLUE}55` }} />
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              color: NAVY_DARK,
              lineHeight: 1.45,
              flex: 1,
            }}
          >
            Day 1 must land the ICP before Day 2 can credibly debate{" "}
            <strong>Expand vs. Drop</strong> — otherwise the room is
            force-ranking work for a customer base it hasn&apos;t agreed on.
          </p>
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
        Three-day session framework · Day 1 of 3
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
