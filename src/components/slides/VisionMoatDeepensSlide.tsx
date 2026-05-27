"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Shield, Lock, TrendingUp } from "lucide-react";

const ACCENT = "#7EB3E8";
const ACCENT_STRONG = "#2860B2";

const advantages = [
  {
    num: "01",
    icon: Shield,
    title: "Infrastructure is non-replicable.",
    desc: "Carrier interconnects, regulatory approvals, telecom compliance, global routing reliability. Years to build. Not something AI can vibe-code.",
  },
  {
    num: "02",
    icon: Lock,
    title: "Switching costs are asymmetric.",
    desc: "Phone numbers wired to workflows. Compliance configs in place. Messaging logic embedded. Switching is painful and risky — not just expensive.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Usage-based wins as AI scales.",
    desc: "AI explodes interaction volume. Per-seat pricing gets compressed. Usage- and outcome-based pricing — what we charge for — gets amplified.",
  },
];

export default function VisionMoatDeepensSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
          Part 3 — Why the moat deepens
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Three advantages that compound with every AI release.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.55)", margin: "16px auto 0", lineHeight: 1.5, maxWidth: 1280 }}>
          We don&apos;t get weaker as AI gets stronger. We get more valuable.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "56px 100px 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
          alignItems: "stretch",
        }}
      >
        {advantages.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.article
              key={a.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `3px solid ${ACCENT_STRONG}`,
                borderRadius: 16,
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 22 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={26} color={ACCENT} strokeWidth={1.75} />
                </div>
                <span style={{ fontSize: 40, fontWeight: 700, color: "rgba(255,255,255,0.18)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {a.num}
                </span>
              </div>

              <h2 className="font-heading" style={{ fontSize: 30, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.2 }}>
                {a.title}
              </h2>

              <p style={{ fontSize: 19, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.55, flex: 1 }}>
                {a.desc}
              </p>
            </motion.article>
          );
        })}
      </motion.main>

      <div style={{ padding: "36px 100px 18px" }}>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.5)", textAlign: "center", margin: 0, fontStyle: "italic" }}>
          AI commoditizes thin software. AI amplifies infrastructure.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
