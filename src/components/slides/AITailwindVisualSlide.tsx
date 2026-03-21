"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Package, Bot, TrendingUp, Lock, Building2, Radio, Zap, ShieldCheck } from "lucide-react";

const ACCENT = "#7EB3E8";
const GLASS = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.1)";

const positioning = [
  {
    Icon: Package,
    title: "AI in every product",
    bullets: ["Ships across the full portfolio", "Smarter tools, no vendor switch", "Drives expansion revenue"],
  },
  {
    Icon: Bot,
    title: "New standalone AI products",
    bullets: ["XBert: agentic AI agent", "NEXT: real-time data platform", "New entry points, bigger TAM"],
  },
  {
    Icon: TrendingUp,
    title: "AI bookings accelerating",
    bullets: ["22% AI-attached bookings (FY26)", "31%+ growth projected by FY28", "Additive — not cannibalization"],
  },
  {
    Icon: Lock,
    title: "Proprietary data advantage",
    bullets: ["Billions of live conversations", "A moat competitors can't copy", "Real interactions, not synthetic"],
  },
];

const structural = [
  {
    Icon: Building2,
    title: "Own the infrastructure",
    bullets: ["Telephony, routing, carrier interconnects", "Physical network endpoints", "Below the app layer — LLMs can't replicate"],
  },
  {
    Icon: Radio,
    title: "Real-time data on the edge",
    bullets: ["Always-fresh conversation data", "Static models can't replicate it", "Trained on live interactions"],
  },
  {
    Icon: Zap,
    title: "AI ships natively",
    bullets: ["Inside every product", "Deepens switching costs", "Smarter tools, same vendor"],
  },
  {
    Icon: ShieldCheck,
    title: "Regulated industry",
    bullets: ["HIPAA, PCI, TCPA, carrier compliance", "Regulation favors certified infra", "A barrier AI startups can't clear"],
  },
];

function CardRow({ items, delay }: { items: typeof positioning; delay: number }) {
  return (
    <div style={{ display: "flex", gap: 16, width: "100%" }}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.06 }}
          style={{
            flex: 1,
            background: GLASS, border: `1px solid ${BORDER}`, borderRadius: 14,
            padding: "20px 20px",
            display: "flex", flexDirection: "column", gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: "rgba(40,96,178,0.15)", border: "1px solid rgba(40,96,178,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <item.Icon size={20} color={ACCENT} strokeWidth={1.75} />
            </div>
            <h3 className="font-heading" style={{
              fontSize: 19, fontWeight: 600,
              color: "#FFFFFF", margin: 0, lineHeight: 1.2,
            }}>
              {item.title}
            </h3>
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 18px", listStyle: "disc" }}>
            {item.bullets.map((b, j) => (
              <li key={j} style={{
                fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.55,
              }}>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default function AITailwindVisualSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex", flexDirection: "column",
        overflow: "hidden", position: "relative",
      }}
      data-speaker-notes="AI is a tailwind for Nextiva. Strong AI positioning: embedded AI, standalone products, accelerating bookings, proprietary data. Structural advantages: own infrastructure, real-time edge data, native AI, regulated industry barriers."
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", position: "relative", zIndex: 1, flexShrink: 0 }}
      >
        <p style={{
          fontWeight: 700, fontSize: 18, letterSpacing: "0.05em",
          textTransform: "uppercase", color: "#CCC7C3", margin: 0,
        }}>
          AI &amp; NEXTIVA
        </p>
        <h1 className="font-heading" style={{
          fontSize: 46, fontWeight: 500,
          color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15,
        }}>
          AI is a tailwind for Nextiva.
        </h1>
        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.5)", margin: "8px 0 0", lineHeight: 1.5,
        }}>
          Embedded AI drives growth. Structural advantages make it defensible.
        </p>
      </motion.header>

      <main style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 80px", gap: 20,
        position: "relative", zIndex: 1,
      }}>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontWeight: 700, fontSize: 18, letterSpacing: "0.05em",
              textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px",
            }}
          >
            STRONG AI POSITIONING
          </motion.p>
          <CardRow items={positioning} delay={0.2} />
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              fontWeight: 700, fontSize: 18, letterSpacing: "0.05em",
              textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px",
            }}
          >
            STRUCTURAL ADVANTAGES
          </motion.p>
          <CardRow items={structural} delay={0.5} />
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
