"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Target, ArrowRight } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const EMERALD = "#34D399";
const EMERALD_DEEP = "#059669";
const EMERALD_SOFT = "rgba(52,211,153,0.12)";
const EMERALD_BORDER = "rgba(52,211,153,0.32)";

type Stat = {
  value: string;
  label: string;
  detail: React.ReactNode;
};

const stats: Stat[] = [
  {
    value: "$XXM",
    label: "Revenue runway from the base",
    detail: (
      <>
        From <strong style={{ color: "#FFFFFF" }}>$XXM</strong> today ·{" "}
        <strong style={{ color: "#FFFFFF" }}>$XXM</strong> gap to fill
      </>
    ),
  },
  {
    value: "+XX%",
    label: "Growth from existing customers",
    detail: <>Broad expansion goal across the installed base</>,
  },
  {
    value: "XX%",
    label: "Product attach rate",
    detail: <>Target attach on expansion sales</>,
  },
];

type Move = {
  icon: typeof Sparkles;
  title: string;
  detail: React.ReactNode;
};

const moves: Move[] = [
  {
    icon: Sparkles,
    title: "Mindset shift",
    detail: (
      <>
        Rebrand{" "}
        <strong style={{ color: "#FFFFFF" }}>
          &ldquo;Protect the Base&rdquo;
        </strong>{" "}
        as <strong style={{ color: EMERALD }}>&ldquo;Grow the Base&rdquo;</strong> —
        the installed base is our biggest, fastest revenue runway.
      </>
    ),
  },
  {
    icon: Rocket,
    title: "Key product levers",
    detail: (
      <>
        Leverage the full{" "}
        <strong style={{ color: EMERALD }}>product portfolio</strong> — pick the{" "}
        <strong style={{ color: "#FFFFFF" }}>right products</strong> and invest
        behind them to penetrate our existing customer base.
      </>
    ),
  },
  {
    icon: Target,
    title: "Tactical and Go-to-Market",
    detail: (
      <>
        Find{" "}
        <strong style={{ color: EMERALD }}>
          disruptive, low-friction motions
        </strong>{" "}
        that penetrate a{" "}
        <strong style={{ color: "#FFFFFF" }}>large percentage</strong> of the
        installed base.
      </>
    ),
  },
];

export default function FutureGrowTheBaseSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: BG, position: "relative", overflow: "hidden" }}
    >
      {/* Layered ambient color glows */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 92%, rgba(52,211,153,0.14) 0%, transparent 55%), " +
            "radial-gradient(circle at 10% 18%, rgba(52,211,153,0.08) 0%, transparent 30%), " +
            "radial-gradient(circle at 90% 22%, rgba(40,96,178,0.10) 0%, transparent 32%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle dot-grid texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 55%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 55%, black 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{
          padding: "48px 100px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 14px 6px 12px",
            borderRadius: 999,
            background: EMERALD_SOFT,
            border: `1px solid ${EMERALD_BORDER}`,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: EMERALD,
              boxShadow: `0 0 12px ${EMERALD}`,
            }}
          />
          <p
            style={{
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: EMERALD,
              margin: 0,
            }}
          >
            Strategic Pillar 01 · Grow the Base
          </p>
        </div>

        <h1
          className="font-heading"
          style={{
            fontSize: 62,
            fontWeight: 600,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            flexWrap: "wrap",
          }}
        >
          <span>Protect the base.</span>
          <span
            aria-hidden
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(52,211,153,0.22) 0%, rgba(52,211,153,0.08) 100%)",
              border: `1px solid ${EMERALD_BORDER}`,
              boxShadow: `0 0 28px rgba(52,211,153,0.35)`,
            }}
          >
            <ArrowRight size={28} color={EMERALD} strokeWidth={2.25} />
          </span>
          <span
            style={{
              background: `linear-gradient(90deg, ${EMERALD} 0%, ${EMERALD_DEEP} 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Grow the base.
          </span>
        </h1>

        <p
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.72)",
            margin: "20px auto 0",
            lineHeight: 1.5,
            maxWidth: 1100,
          }}
        >
          The existing customer base is our{" "}
          <strong style={{ color: "#FFFFFF" }}>
            biggest and fastest revenue runway
          </strong>
          .
        </p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 28,
          padding: "40px 100px 18px",
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            style={{
              position: "relative",
              background: EMERALD_SOFT,
              border: `1px solid ${EMERALD_BORDER}`,
              borderTop: `3px solid ${EMERALD_DEEP}`,
              borderRadius: 16,
              padding: "28px 28px 26px",
              boxShadow: "0 18px 40px rgba(0,0,0,0.3)",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -70,
                right: -50,
                width: 180,
                height: 180,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(52,211,153,0.22) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <p
              className="font-heading"
              style={{
                fontSize: 64,
                fontWeight: 700,
                margin: 0,
                lineHeight: 1,
                background: `linear-gradient(180deg, ${EMERALD} 0%, ${EMERALD_DEEP} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontVariantNumeric: "tabular-nums",
                position: "relative",
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "14px 0 6px",
                lineHeight: 1.3,
                position: "relative",
              }}
            >
              {s.label}
            </p>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.58)",
                margin: 0,
                lineHeight: 1.45,
                position: "relative",
              }}
            >
              {s.detail}
            </p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
          padding: "8px 100px 32px",
          flex: 1,
          alignContent: "start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {moves.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.article
              key={m.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: EMERALD_SOFT,
                  border: `1px solid ${EMERALD_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={22} color={EMERALD} strokeWidth={1.75} />
              </div>
              <h3
                className="font-heading"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {m.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.74)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {m.detail}
              </p>
            </motion.article>
          );
        })}
      </motion.section>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
