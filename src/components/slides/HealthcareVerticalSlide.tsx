"use client";

import { motion } from "framer-motion";
import { Activity, Shield, Zap, type LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

const ACCENT = "#58a6ff";
const BG =
  "radial-gradient(ellipse 85% 55% at 50% 42%, rgba(88,166,255,0.14) 0%, transparent 52%), radial-gradient(ellipse 90% 80% at 50% 18%, rgba(15,44,89,0.5) 0%, rgba(6,26,55,0.72) 45%, #000208 100%)";

const metrics = [
  {
    value: "~8,000",
    label: "Healthcare Customers",
    detail: "8.5% of total customer base",
  },
  {
    value: "~$58M",
    label: "Healthcare Run-Rate ARR",
    detail: "As of FY26",
  },
  {
    value: "~$8T",
    label: "US Healthcare Spend",
    detail: "Massive addressable market",
  },
];

const customers: { name: string; mrr: string; initials: string; hue: number }[] = [
  { name: "Acuity Eyecare Group", mrr: "$74K MRR", initials: "AE", hue: 210 },
  { name: "HealthPoint", mrr: "$46K MRR", initials: "HP", hue: 195 },
  { name: "VieMed / Sleep Mgmt", mrr: "$56K MRR", initials: "VM", hue: 175 },
  { name: "Midwest Eye Consultants", mrr: "$52K MRR", initials: "ME", hue: 200 },
  { name: "Summit Urgent Care", mrr: "$41K MRR", initials: "SU", hue: 188 },
  { name: "Coastal Pediatrics", mrr: "$38K MRR", initials: "CP", hue: 205 },
];

const demands: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Activity,
    title: "Reliable",
    body: "Healthcare will not tolerate downtime. As we go up-market, tolerance rapidly decreases.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliance, Security & Privacy",
    body: "Full Health Insurance Portability and Accountability Act posture — per-patient databases, conversational memory, end-to-end safeguards for protected health information.",
  },
  {
    icon: Zap,
    title: "Zero Touch Install",
    body: "Self-serve across every product. If a customer can't do it, we want to know and fix it.",
  },
];

export default function HealthcareVerticalSlide({ slideNumber = 48 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: BG,
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(88,166,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88,166,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          pointerEvents: "none",
          opacity: 0.85,
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{
          padding: "36px 96px 0",
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
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            margin: "0 0 10px",
          }}
        >
          Healthcare vertical
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.2,
            maxWidth: 1500,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Scaled healthcare business: critical mass of customers, revenue, diverse sub-segments
        </h1>
        <p
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.42)",
            marginTop: 12,
            lineHeight: 1.45,
          }}
        >
          Investing in deeper vertical-specific product and GTM based on large TAM. Others following close behind.
        </p>
      </motion.header>

      {/* Top metrics */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        style={{
          display: "flex",
          gap: 22,
          padding: "22px 96px 0",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{
              flex: 1,
              borderRadius: 14,
              border: "1px solid rgba(88,166,255,0.28)",
              background: "rgba(6,18,42,0.55)",
              padding: "22px 20px 20px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 28px rgba(88,166,255,0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
                opacity: 0.95,
              }}
            />
            <p
              className="font-heading"
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 8px",
                lineHeight: 1.05,
              }}
            >
              {m.value}
            </p>
            <p
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: ACCENT,
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {m.label}
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", margin: "8px 0 0", lineHeight: 1.35 }}>{m.detail}</p>
          </div>
        ))}
      </motion.div>

      {/* Bottom panels */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          gap: 28,
          padding: "22px 96px 16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Key customers */}
        <section
          style={{
            flex: 1,
            borderRadius: 16,
            border: "1px solid rgba(88,166,255,0.22)",
            background: "rgba(4,14,32,0.5)",
            padding: "22px 26px 18px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              margin: "0 0 16px",
            }}
          >
            Key customers
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "14px 20px",
              flex: 1,
              alignContent: "start",
            }}
          >
            {customers.map((c) => (
              <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: `linear-gradient(135deg, hsl(${c.hue}, 45%, 42%), hsl(${c.hue}, 35%, 22%))`,
                    border: `1px solid rgba(88,166,255,0.35)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.92)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {c.initials}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.25 }}>{c.name}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", margin: "4px 0 0" }}>{c.mrr}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
            {["<1% MRR churn", "39% on 36+ month contracts"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: ACCENT,
                  border: `1px solid rgba(88,166,255,0.45)`,
                  borderRadius: 999,
                  padding: "8px 16px",
                  background: "rgba(88,166,255,0.06)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* What healthcare demands */}
        <section
          style={{
            flex: 1,
            borderRadius: 16,
            border: "1px solid rgba(88,166,255,0.22)",
            background: "rgba(4,14,32,0.5)",
            padding: "22px 26px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              margin: 0,
            }}
          >
            What healthcare demands
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, justifyContent: "space-between" }}>
            {demands.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      flexShrink: 0,
                      background: "rgba(0,8,24,0.85)",
                      border: `1px solid rgba(88,166,255,0.35)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} color={ACCENT} strokeWidth={2} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.25 }}>{d.title}</p>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", margin: "6px 0 0", lineHeight: 1.45 }}>{d.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
