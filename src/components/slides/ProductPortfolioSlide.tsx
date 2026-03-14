"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Phone, Database, Bot, Headset } from "lucide-react";

const products = [
  {
    icon: Phone,
    name: "NextOS",
    desc: "Conversation Platform",
    detail: "Unified communications across voice, video, chat, SMS, and email.",
  },
  {
    icon: Database,
    name: "NEXT",
    desc: "Data Platform",
    detail: "Unified customer data model — one source of truth powering every decision.",
  },
  {
    icon: Bot,
    name: "XBert",
    desc: "Agentic AI Engine",
    detail: "Autonomous AI agents that learn, decide, and act across interactions.",
  },
  {
    icon: Headset,
    name: "Experience Center",
    desc: "Customer Experience Hub",
    detail: "Omnichannel contact center with AI-powered routing, analytics, and QA.",
  },
];

export default function ProductPortfolioSlide({ slideNumber = 19 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow">Appendix</p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 700, color: "#1A447C", marginTop: 10, lineHeight: 1.15 }}>
          Nextiva product portfolio.
        </h1>
      </motion.header>

      <main style={{ flex: 1, padding: "48px 100px 0", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, alignContent: "center" }}>
        {products.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="card card--accent"
              style={{ padding: "36px 36px", display: "flex", gap: 24, alignItems: "flex-start" }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(40,96,178,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={26} color="#2860B2" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="font-heading" style={{ fontSize: 30, fontWeight: 600, color: "#1A447C", lineHeight: 1.2 }}>
                  {p.name}
                </h2>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#2860B2", marginTop: 4 }}>{p.desc}</p>
                <p style={{ fontSize: 18, color: "#4A4846", marginTop: 12, lineHeight: 1.55 }}>{p.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
