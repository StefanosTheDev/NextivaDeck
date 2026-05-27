"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

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
        From <strong style={{ color: NAVY_DARK }}>$XXM</strong> today ·{" "}
        <strong style={{ color: NAVY_DARK }}>$XXM</strong> gap to fill
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
  num: string;
  title: string;
  detail: React.ReactNode;
};

const moves: Move[] = [
  {
    num: "01",
    title: "Mindset shift",
    detail: (
      <>
        Rebrand{" "}
        <strong style={{ color: NAVY_DARK }}>
          &ldquo;Protect the Base&rdquo;
        </strong>{" "}
        as{" "}
        <strong style={{ color: BLUE }}>&ldquo;Grow the Base&rdquo;</strong>{" "}
        — the installed base is our biggest, fastest revenue runway.
      </>
    ),
  },
  {
    num: "02",
    title: "Key product levers",
    detail: (
      <>
        Leverage the full{" "}
        <strong style={{ color: BLUE }}>product portfolio</strong> — pick the{" "}
        <strong style={{ color: NAVY_DARK }}>right products</strong> and invest
        behind them to penetrate the customer base.
      </>
    ),
  },
  {
    num: "03",
    title: "Tactical and go-to-market",
    detail: (
      <>
        Find{" "}
        <strong style={{ color: BLUE }}>
          disruptive, low-friction motions
        </strong>{" "}
        that penetrate a{" "}
        <strong style={{ color: NAVY_DARK }}>large percentage</strong> of the
        installed base.
      </>
    ),
  },
];

export default function FutureGrowTheBaseCleanSlide({
  slideNumber: _sn,
}: {
  slideNumber?: number;
}) {
  return (
    <div className="slide" style={{ background: "#FFFFFF", color: NAVY_DARK }}>
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <p className="eyebrow" style={{ color: BLUE, margin: 0 }}>
          Strategic Pillar 01 · Grow the Base
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginTop: 18,
            display: "flex",
            alignItems: "center",
            gap: 22,
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              color: NAVY_DARK,
              opacity: 0.45,
            }}
          >
            Protect the base.
          </span>
          <span
            aria-hidden
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: BLUE,
              boxShadow: "0 8px 24px rgba(40,96,178,0.35)",
              flexShrink: 0,
            }}
          >
            <ArrowRight size={32} color="#FFFFFF" strokeWidth={2.5} />
          </span>
          <span
            style={{
              color: NAVY,
              paddingBottom: 4,
              borderBottom: `5px solid ${BLUE}`,
              lineHeight: 1.05,
            }}
          >
            Grow the base.
          </span>
        </h1>
        <p
          style={{
            marginTop: 26,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.4,
            maxWidth: 1180,
          }}
        >
          The existing customer base is our{" "}
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
            biggest and fastest revenue runway
          </strong>
          .
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "36px 100px 32px",
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          gap: 24,
        }}
      >
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
              style={{
                background: BLUE_SOFT,
                border: `1px solid ${CARD_BORDER}`,
                borderTop: `4px solid ${BLUE}`,
                borderRadius: 8,
                padding: "36px 36px 38px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 72,
                  fontWeight: 700,
                  color: BLUE,
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  fontVariantNumeric: "tabular-nums",
                  margin: 0,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: NAVY_DARK,
                  lineHeight: 1.25,
                  margin: 0,
                  marginTop: 6,
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 17,
                  fontWeight: 400,
                  color: BODY,
                  lineHeight: 1.5,
                  margin: 0,
                  marginTop: "auto",
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
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
          }}
        >
          {moves.map((m, i) => (
            <motion.article
              key={m.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderLeft: `5px solid ${BLUE}`,
                borderRadius: 8,
                padding: "32px 34px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 40,
                    fontWeight: 700,
                    color: BLUE,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {m.num}
                </span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    lineHeight: 1.2,
                    letterSpacing: "-0.005em",
                    margin: 0,
                  }}
                >
                  {m.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 19,
                  fontWeight: 400,
                  color: BODY,
                  lineHeight: 1.55,
                  margin: 0,
                  marginTop: "auto",
                }}
              >
                {m.detail}
              </p>
            </motion.article>
          ))}
        </motion.section>
      </main>

      <footer
        style={{
          padding: "10px 100px 24px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Strategic Pillar 01 · Grow the Base
      </footer>
    </div>
  );
}
