"use client";
import { motion } from "framer-motion";
import {
  Bot,
  MessageCircle,
  ShieldCheck,
  Workflow,
  Database,
  Settings2,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const pillars = [
  {
    icon: Bot,
    title: "Human + AI in tandem",
    desc: "Every interaction lands at the right blend of automation and human judgment.",
  },
  {
    icon: MessageCircle,
    title: "Conversational Commerce",
    desc: "Intent becomes outcome — engage, resolve, and transact in the channel of choice.",
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy",
    desc: "Six nines of uptime, audited compliance, and geo-redundant disaster recovery.",
  },
  {
    icon: Workflow,
    title: "CX First System of Action",
    desc: "An integrated journey for customers, agents, supervisors, and back office.",
  },
  {
    icon: Database,
    title: "Reasoning over customer & business data",
    desc: "A coherent view of every customer across every system that runs the business.",
  },
  {
    icon: Settings2,
    title: "Bespoke, at Scale",
    desc: "A single multi-tenant core that configures, extends, and white-labels.",
  },
];

export default function BriefingExecSummarySlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          The Nextiva Thesis
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "14px 0 0",
            lineHeight: 1.2,
            maxWidth: 1400,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Nextiva empowers businesses to deliver{" "}
          <span
            style={{
              color: "#7EB3E8",
              fontWeight: 700,
            }}
          >
            the best possible outcome
          </span>{" "}
          at the moment of interaction.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "36px 80px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 20,
          alignContent: "center",
        }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "3px solid #7EB3E8",
                borderRadius: 14,
                padding: "22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color="#7EB3E8" strokeWidth={2} />
                </div>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h2>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {p.desc}
              </p>
            </motion.article>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
