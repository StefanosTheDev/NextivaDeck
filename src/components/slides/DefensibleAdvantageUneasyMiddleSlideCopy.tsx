"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Plane } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const capabilityStack = [
  {
    label: "Efficient demand generation",
    detail: "Scale qualified inbound without enterprise field cost",
  },
  {
    label: "Immediate engagement",
    detail: "Sub-90-second SLA frames the conversation first",
  },
  {
    label: "Low-cost operating model",
    detail: "Unit economics that support profitable human touch",
  },
  {
    label: "Mission-critical expertise",
    detail: "Category depth in communications, CX, and AI",
  },
  {
    label: "LTV / CAC discipline",
    detail: "Strong payback and cohort durability at mid-market scale",
  },
];

export default function DefensibleAdvantageUneasyMiddleSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: BG, overflow: "hidden", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "36px 80px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          Defensible advantage
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 18px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.16,
            maxWidth: 1040,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Very few companies can profitably operate in this segment.
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            maxWidth: 920,
            margin: "18px auto 0",
            padding: "16px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.5 }}>
            Winning the middle market requires five capabilities operating simultaneously — a stack that is hard to
            assemble and even harder to run profitably.{" "}
            <strong style={{ fontWeight: 700, color: "#FFFFFF" }}>That is the barrier to entry.</strong>
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.35fr 1fr",
          gap: 22,
          padding: "22px 80px 12px",
          minHeight: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            borderRadius: 18,
            padding: "26px 30px 20px",
            background:
              "linear-gradient(165deg, rgba(40, 96, 178, 0.10) 0%, rgba(255,255,255,0.03) 45%, rgba(0,0,0,0.12) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            The capability stack
          </p>
          <h2
            className="font-heading"
            style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: "6px 0 18px", lineHeight: 1.2 }}
          >
            What it takes to win the middle market
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1, justifyContent: "space-between" }}>
            {capabilityStack.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.22 + i * 0.06 }}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "12px 0",
                  borderBottom:
                    i < capabilityStack.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 112, 243, 0.15)",
                    border: "1px solid rgba(0, 112, 243, 0.35)",
                  }}
                >
                  <CheckCircle2 size={18} color="#7EB3E8" strokeWidth={2.25} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 18,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.94)",
                      lineHeight: 1.3,
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: 15,
                      color: "rgba(255,255,255,0.62)",
                      lineHeight: 1.45,
                    }}
                  >
                    {c.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          style={{
            borderRadius: 18,
            padding: "28px 30px",
            background:
              "linear-gradient(195deg, rgba(0, 112, 243, 0.14) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.1) 100%)",
            border: "1px solid rgba(126,179,232,0.3)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0, 112, 243, 0.18)",
              border: "1px solid rgba(0, 112, 243, 0.4)",
              marginBottom: 18,
            }}
          >
            <Plane size={30} color="#7EB3E8" strokeWidth={1.75} />
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#7EB3E8",
            }}
          >
            The analogy
          </p>
          <p
            className="font-heading"
            style={{ fontSize: 30, fontWeight: 600, color: "#FFFFFF", margin: "8px 0 16px", lineHeight: 1.22 }}
          >
            The Southwest Airlines model for mission-critical software + AI.
          </p>
          <p style={{ margin: 0, fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.55 }}>
            Operating discipline, scale demand generation, and a low-cost structure — engineered into a single
            operating system that competitors can&apos;t easily replicate.
          </p>
        </motion.section>
      </main>

      <div style={{ padding: "0 80px 14px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          style={{
            borderRadius: 12,
            padding: "12px 22px",
            background: "rgba(0, 112, 243, 0.08)",
            border: "1px solid rgba(0, 112, 243, 0.22)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              flexShrink: 0,
            }}
          >
            Investor takeaway
          </span>
          <span style={{ width: 1, height: 18, background: "rgba(126,179,232,0.3)" }} />
          <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.45, flex: 1, textAlign: "center" }}>
            Five capabilities × operational excellence = a moat that scales cost-effectively and compounds.
          </p>
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
