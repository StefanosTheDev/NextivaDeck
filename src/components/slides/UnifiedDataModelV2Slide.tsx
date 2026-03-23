"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const pillars = [
  { number: 1, title: "True Omni-Channel\nCommunications Engine" },
  { number: 2, title: "Unified Data Architecture\npowering Agentic AI" },
  { number: 3, title: "Unified Front- and Back\nOffice across Customer-\nFacing Functions" },
];

const advantages = [
  "Build Once. Deploy Across Channels.",
  "Unify Journeys across Functions",
  "Seamlessly Switch Channels",
  "Customer 360",
];

const dataModel = [
  { label: "Unstructured", desc: "All customer interactions" },
  { label: "Structured", desc: "CRM, ERP, Billing System Records" },
  { label: "3rd Party", desc: "Public Data including Social & Review" },
];

export default function UnifiedDataModelV2Slide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          PLATFORM ARCHITECTURE
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Unified Data & Platform Model Advantages
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          padding: "56px 100px 0",
          display: "flex",
          gap: 32,
          flexShrink: 0,
        }}
      >
        {/* Left wrapper card */}
        <div
          style={{
            flex: 7,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Three pillar cards */}
          <div style={{ display: "flex", gap: 16 }}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                style={{
                  flex: 1,
                  background: "#2860B2",
                  borderRadius: 14,
                  padding: "22px 20px",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 130,
                }}
              >
                <span
                  className="font-heading"
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {p.number}
                </span>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.35,
                    whiteSpace: "pre-line",
                  }}
                >
                  {p.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Advantage bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {advantages.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: "14px 24px",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right wrapper card */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            flex: 3,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div
            style={{
              alignSelf: "center",
              padding: "8px 24px",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              Unified Data Model
            </p>
          </div>

          {dataModel.map((d) => (
            <div
              key={d.label}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#7EB3E8",
                  margin: "0 0 6px",
                }}
              >
                {d.label}
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.6)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {d.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.main>

      <div style={{ flex: 1 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
