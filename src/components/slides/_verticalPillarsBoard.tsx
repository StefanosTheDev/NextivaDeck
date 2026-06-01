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

export type PillarKey =
  | "cx"
  | "human"
  | "commerce"
  | "bespoke"
  | "trustworthy"
  | "reasoning";

const PILLAR_META: Record<
  PillarKey,
  { icon: LucideIcon; name: string; outcomeHint: string }
> = {
  cx: {
    icon: Layers,
    name: "CX First",
    outcomeHint: "Fewer vendors. Longer contracts. Higher retention.",
  },
  human: {
    icon: Users,
    name: "Human + AI in Tandem",
    outcomeHint:
      "Faster time-to-value · mitigated implementation risk · stickier deployment.",
  },
  commerce: {
    icon: ShoppingCart,
    name: "Conversational Commerce",
    outcomeHint: "ROI is visible to the CFO. Expansion sells itself.",
  },
  bespoke: {
    icon: Settings,
    name: "Bespoke, At Scale",
    outcomeHint:
      "Faster deployments · better margins · replicable across verticals.",
  },
  trustworthy: {
    icon: ShieldCheck,
    name: "Trustworthy",
    outcomeHint:
      "Compliance is a moat. Regulated customers don't churn lightly.",
  },
  reasoning: {
    icon: Database,
    name: "Reasoning over Data",
    outcomeHint:
      "Data compounding drives NRR expansion across locations and use cases.",
  },
};

export type PillarContent = {
  key: PillarKey;
  bullets: string[];
  outcome?: string;
};

export type VerticalPillarsBoardProps = {
  slideNumber?: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  accentGradient?: string;
  pillars: PillarContent[];
  integrations?: string;
};

export default function VerticalPillarsBoard({
  slideNumber = 0,
  eyebrow,
  title,
  subtitle,
  accentGradient = "linear-gradient(90deg, #2860B2, #0070F3)",
  pillars,
  integrations,
}: VerticalPillarsBoardProps) {
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
            fontSize: 14,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 12px",
          }}
        >
          {eyebrow}
        </p>
        <div
          style={{
            width: 52,
            height: 3,
            borderRadius: 2,
            background: accentGradient,
            margin: "0 auto 16px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 42,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
            maxWidth: 1280,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: "12px auto 0",
            fontSize: 18,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 1180,
            lineHeight: 1.45,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "26px 70px 26px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "1fr 1fr",
          gap: 14,
          minHeight: 0,
          maxWidth: 1720,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {pillars.map((p, i) => {
          const meta = PILLAR_META[p.key];
          const Icon = meta.icon;
          return (
            <motion.div
              key={p.key}
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
                  "0 12px 28px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 0,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 11,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(126,179,232,0.16)",
                    border: "1px solid rgba(126,179,232,0.4)",
                    color: "#7EB3E8",
                  }}
                >
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h2
                  className="font-heading"
                  style={{
                    margin: 0,
                    fontSize: 21,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.14,
                  }}
                >
                  {meta.name}
                </h2>
              </div>

              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                  flex: 1,
                }}
              >
                {p.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      display: "flex",
                      gap: 9,
                      alignItems: "flex-start",
                      fontSize: 15,
                      lineHeight: 1.42,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#7EB3E8",
                        marginTop: 8,
                      }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: "auto",
                  padding: "10px 13px",
                  borderRadius: 9,
                  background: "rgba(0,0,0,0.22)",
                  border: "1px solid rgba(126,179,232,0.22)",
                  fontSize: 13.5,
                  lineHeight: 1.4,
                  color: "#7EB3E8",
                  fontWeight: 600,
                }}
              >
                {p.outcome ?? meta.outcomeHint}
              </div>
            </motion.div>
          );
        })}
      </main>

      {integrations ? (
        <div
          style={{
            padding: "0 80px 14px",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
          }}
        >
          {integrations}
        </div>
      ) : null}

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
