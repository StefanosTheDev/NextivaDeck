"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Users,
  ShoppingCart,
  Settings,
  ShieldCheck,
  Database,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const pillars: {
  icon: LucideIcon;
  name: string;
  description: string;
  outcome: string;
}[] = [
  {
    icon: Layers,
    name: "CX First",
    description:
      "Single-platform consolidation reduces vendor sprawl and creates durable switching costs.",
    outcome: "Fewer vendors. Longer contracts. Higher retention.",
  },
  {
    icon: Users,
    name: "Human + AI in Tandem",
    description:
      "Tunable autonomy accelerates AI adoption without forcing customers to overhaul existing workflows.",
    outcome:
      "Faster time-to-value · mitigated implementation risk · stickier deployment.",
  },
  {
    icon: ShoppingCart,
    name: "Conversational Commerce",
    description:
      "Measurable revenue impact at the conversation level justifies budget and accelerates expansion.",
    outcome: "ROI is visible to the CFO. Expansion sells itself.",
  },
  {
    icon: Settings,
    name: "Bespoke, At Scale",
    description:
      "No-code configurability shortens deployment cycles and reduces professional-services dependency.",
    outcome: "Faster deployments · better margins · replicable across verticals.",
  },
  {
    icon: ShieldCheck,
    name: "Trustworthy",
    description:
      "Six-nines of uptime and compliance coverage — often contract-level requirements in regulated verticals.",
    outcome:
      "Compliance is a moat. Regulated customers don't churn lightly. Channel partners need it to remove liability.",
  },
  {
    icon: Database,
    name: "Reasoning over Data",
    description:
      "Context deepens with every interaction — making displacement increasingly costly for the customer.",
    outcome:
      "Data compounding drives NRR expansion as customers add locations and use cases.",
  },
];

export default function VerticalsSixPillarsSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: BG, overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "32px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
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
          Vertical approach · Platform economics
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
            fontSize: 38,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.16,
            maxWidth: 1140,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Six pillars leveraged across all verticals. One compounding business
          case.
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            maxWidth: 1140,
            margin: "16px auto 0",
            padding: "14px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.72)",
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            Each pillar drives a distinct financial outcome. Together they
            create a platform that{" "}
            <strong style={{ color: "#FFFFFF", fontWeight: 700 }}>
              compounds with scale
            </strong>
            .
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "22px 80px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "1fr 1fr",
          gap: 14,
          minHeight: 0,
          maxWidth: 1640,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.04 }}
              style={{
                padding: "16px 18px",
                borderRadius: 14,
                background:
                  "linear-gradient(165deg, rgba(40, 96, 178, 0.07) 0%, rgba(255,255,255,0.025) 100%)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow:
                  "0 12px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(126,179,232,0.16)",
                    border: "1px solid rgba(126,179,232,0.4)",
                    color: "#7EB3E8",
                  }}
                >
                  <Icon size={17} strokeWidth={2} />
                </div>
                <h2
                  className="font-heading"
                  style={{
                    margin: 0,
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  {p.name}
                </h2>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13.5,
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                {p.description}
              </p>
              <div
                style={{
                  marginTop: "auto",
                  padding: "8px 10px",
                  borderRadius: 8,
                  background: "rgba(0,0,0,0.22)",
                  border: "1px solid rgba(126,179,232,0.25)",
                  fontSize: 12,
                  lineHeight: 1.4,
                  color: "#7EB3E8",
                  fontWeight: 600,
                }}
              >
                {p.outcome}
              </div>
            </motion.div>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
