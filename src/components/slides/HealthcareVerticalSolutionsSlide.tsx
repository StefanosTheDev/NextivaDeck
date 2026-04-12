"use client";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SlideFooter from "../SlideFooter";

const problems = [
  "Labor shortage is healthcare's #1 challenge — demand grows while clinical supply is sublinear",
  "Chaotic inbound communications: long hold times, misrouting, fragmented patient journeys",
  "Routine tasks (scheduling, refills, intake) consume capacity that should serve complex care",
  "96.6% of our healthcare customers on UCaaS only — no CX or AI capabilities deployed",
];

const solutions = [
  "Dual-track platform: Enterprise (NCC + Amelia) for health systems, Downmarket (NEXT + XBert) for SMB practices",
  "HIPAA-compliant AI agents handle patient intake, scheduling, prescription refills, and routine inquiries",
  "Deep EHR integrations: EPIC Direct (Public API), ModMed native, eClinicalWorks direct",
  "Centralized AI layer: XBert IVA with healthcare skills, transcriptions, translations, and guardrails",
];

const outcomes = [
  {
    stat: "UC + CX + AI",
    label: "Only Vendor",
    desc: "Single platform for healthcare",
  },
  {
    stat: "85%",
    label: "AI Deflection Target",
    desc: "Routine inquiries handled by AI",
  },
  {
    stat: "5,364",
    label: "Physicians Clinics",
    desc: "Largest healthcare sub-vertical",
  },
  {
    stat: "56.7%",
    label: "On New Platform",
    desc: "43% migration opportunity",
  },
];

export default function HealthcareVerticalSolutionsSlide({
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
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          Healthcare Vertical
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Transforming the patient journey.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            margin: "10px auto 0",
            maxWidth: 680,
            lineHeight: 1.5,
          }}
        >
          Solving healthcare&apos;s #1 challenge: labor shortage meets growing
          patient demand
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "20px 100px 0",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          justifyContent: "center",
        }}
      >
        {/* Problem / Solutions two-column */}
        <div style={{ display: "flex", gap: 16, flex: 1, minHeight: 0 }}>
          {/* Problem card */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              flex: 1,
              background: "rgba(220,70,70,0.07)",
              border: "1px solid rgba(220,70,70,0.18)",
              borderRadius: 14,
              padding: "22px 24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#E07E7E",
                margin: "0 0 14px",
              }}
            >
              The Problem
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                flex: 1,
              }}
            >
              {problems.map((text) => (
                <div
                  key={text}
                  style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                >
                  <X
                    size={16}
                    color="#E07E7E"
                    strokeWidth={2.5}
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.6)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions card */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              flex: 1,
              background: "rgba(40,96,178,0.08)",
              border: "1px solid rgba(40,96,178,0.2)",
              borderRadius: 14,
              padding: "22px 24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: "0 0 14px",
              }}
            >
              Our Solutions
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                flex: 1,
              }}
            >
              {solutions.map((text) => (
                <div
                  key={text}
                  style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                >
                  <Check
                    size={16}
                    color="#7EB3E8"
                    strokeWidth={2.5}
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.6)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Outcome metrics strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
          }}
        >
          {outcomes.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "14px 18px",
                textAlign: "center",
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: m.stat.length > 5 ? 18 : 28,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {m.stat}
              </p>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#7EB3E8",
                  margin: "4px 0 0",
                  lineHeight: 1.3,
                }}
              >
                {m.label}
              </p>
              <p
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.4)",
                  margin: "2px 0 0",
                  lineHeight: 1.3,
                }}
              >
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
