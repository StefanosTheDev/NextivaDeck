"use client";

import { motion } from "framer-motion";
import { Layers, Repeat, Users, Workflow } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const proofMetrics = [
  {
    value: "Digital + human",
    unit: "motion",
    label: "Hybrid playbook",
    note: "Demand gen blended with conversion support",
  },
  {
    value: "Partner",
    unit: "ecosystem",
    label: "Channel leverage",
    note: "Sales and integration partners",
  },
  {
    value: "92K+ / 1M",
    unit: "customers / users served",
    label: "Cumulative reach",
    note: "Land and expand motion",
  },
];

const capabilities = [
  {
    icon: Users,
    title: "Scale digital acquisition",
    detail:
      "Full-funnel performance marketing tuned to mid-market CAC — predictable, low-cost inbound at volume, without enterprise field cost.",
  },
  {
    icon: Workflow,
    title: "Human-assisted conversion",
    detail:
      "Category specialists engage qualified intent in under 90 seconds — lifting win rates and ACV on the exact deals self-serve can't close.",
  },
  {
    icon: Repeat,
    title: "Repeatable operating model",
    detail:
      "A productized go-to-market run like a factory — same motion compounding across cohorts, products, and geos with minimal rework.",
  },
  {
    icon: Layers,
    title: "Serving underserved buyers profitably",
    detail:
      "Unit economics engineered for the middle — strong payback, durable cohort retention, and expanding LTV without enterprise pricing.",
  },
];

export default function ProvenCapabilityScaleMiddleSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
        style={{ padding: "32px 80px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
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
          Track record
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 16px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 38,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.16,
            maxWidth: 1060,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Nextiva has already proven this motion at scale.
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            maxWidth: 920,
            margin: "14px auto 0",
            padding: "14px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.5 }}>
            We have run both e-commerce and human-assisted sales motions at scale before —{" "}
            <strong style={{ fontWeight: 700, color: "#FFFFFF" }}>
              this is an execution replay, not a new experiment.
            </strong>
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          padding: "18px 80px 10px",
          minHeight: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            flexShrink: 0,
          }}
        >
          {proofMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 + i * 0.06 }}
              style={{
                borderRadius: 16,
                padding: "16px 20px",
                background:
                  "linear-gradient(180deg, rgba(0, 112, 243, 0.14) 0%, rgba(40, 96, 178, 0.06) 100%)",
                border: "1px solid rgba(126,179,232,0.3)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#7EB3E8",
                }}
              >
                {m.label}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "6px 0 4px" }}>
                <span
                  className="font-heading"
                  style={{ fontSize: 34, fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}
                >
                  {m.value}
                </span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{m.unit}</span>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>
                {m.note}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            flex: 1,
            minHeight: 0,
            borderRadius: 16,
            padding: "20px 28px",
            background: "rgba(255,255,255,0.035)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: 36,
            rowGap: 14,
          }}
        >
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "10px 0",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    flexShrink: 0,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 112, 243, 0.14)",
                    border: "1px solid rgba(0, 112, 243, 0.32)",
                  }}
                >
                  <Icon size={24} color="#7EB3E8" strokeWidth={1.9} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 19,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.95)",
                      lineHeight: 1.3,
                    }}
                  >
                    {c.title}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: 15,
                      color: "rgba(255,255,255,0.68)",
                      lineHeight: 1.5,
                    }}
                  >
                    {c.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.section>
      </main>

      <div style={{ padding: "0 80px 14px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          style={{
            borderRadius: 14,
            padding: "14px 22px",
            background:
              "linear-gradient(90deg, rgba(0, 112, 243, 0.16) 0%, rgba(40, 96, 178, 0.08) 100%)",
            border: "1px solid rgba(126,179,232,0.3)",
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
            Thesis
          </span>
          <span style={{ width: 1, height: 22, background: "rgba(126,179,232,0.3)" }} />
          <p
            style={{
              margin: 0,
              fontSize: 15,
              color: "#FFFFFF",
              lineHeight: 1.45,
              fontWeight: 500,
              flex: 1,
              textAlign: "center",
            }}
          >
            The next era of software + AI won&apos;t be won by pure self-serve or pure enterprise sales — it will be
            won by companies that can <strong style={{ color: "#7EB3E8" }}>profitably serve the middle</strong>.
          </p>
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
