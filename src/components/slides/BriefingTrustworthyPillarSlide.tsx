"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Clock, BadgeCheck } from "lucide-react";
import SlideFooter from "../SlideFooter";

const heroMetrics = [
  {
    icon: Activity,
    value: "99.9999%",
    label: "Platform Uptime",
    desc: "Six nines of availability across regions — BPO-grade reliability.",
  },
  {
    icon: Clock,
    value: "<2 min",
    label: "Regional Disaster Recovery",
    desc: "Geographical failover inside a two-minute window.",
  },
  {
    icon: ShieldCheck,
    value: "ZERO",
    label: "Maintenance Windows",
    desc: "Non-disruptive rolling deploys — never offline for planned work.",
  },
  {
    icon: BadgeCheck,
    value: "Audited",
    label: "Third-Party Certified",
    desc: "HITRUST and PCI controls attested by independent auditors.",
  },
];

const badges = [
  { label: "HIPAA", sub: "Privacy + Security" },
  { label: "HITRUST", sub: "CSF Certified" },
  { label: "PCI DSS", sub: "Payment Data" },
  { label: "GDPR", sub: "EU Privacy" },
  { label: "TCPA", sub: "Telecom Consent" },
  { label: "DNC", sub: "Registry Compliant" },
];

export default function BriefingTrustworthyPillarSlide({
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
        style={{ padding: "40px 80px 0", textAlign: "center", flexShrink: 0 }}
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
          Platform Pillar
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
          }}
        >
          Trustworthy by design. Secure by default.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            margin: "14px auto 0",
            maxWidth: 760,
            lineHeight: 1.5,
          }}
        >
          Mission-critical infrastructure engineered for the regulated
          industries that demand uptime, audit trails, and data sovereignty.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "28px 80px 0",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          justifyContent: "center",
        }}
      >
        {/* Hero metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {heroMetrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.article
                key={m.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: "3px solid #7EB3E8",
                  borderRadius: 14,
                  padding: "22px 22px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} color="#7EB3E8" strokeWidth={2} />
                </div>

                <p
                  className="font-heading"
                  style={{
                    fontSize: 34,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: "4px 0 0",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {m.value}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#7EB3E8",
                    margin: 0,
                  }}
                >
                  {m.label}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                    margin: "6px 0 0",
                    lineHeight: 1.5,
                  }}
                >
                  {m.desc}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Compliance badge grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            background: "rgba(40,96,178,0.06)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 16,
            padding: "20px 28px 22px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 2,
                height: 16,
                background: "#7EB3E8",
                borderRadius: 1,
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#CCC7C3",
              }}
            >
              Compliance &amp; Attestations
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 12,
            }}
          >
            {badges.map((b) => (
              <div
                key={b.label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  padding: "14px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <ShieldCheck size={18} color="#7EB3E8" strokeWidth={2} />
                <p
                  className="font-heading"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: "4px 0 0",
                    lineHeight: 1,
                  }}
                >
                  {b.label}
                </p>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {b.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
