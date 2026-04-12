"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const METRICS = [
  { stat: "Secure", line1: "Third-party audited and", line2: "certified HITRUST, PCI" },
  { stat: "Compliant", line1: "GDPR, TCPA, DNC,", line2: "HIPAA, HITRUST, PCI" },
  { stat: "ZERO", line1: "Number of", line2: "maintenance windows" },
  { stat: "99.9999%", line1: "Platform uptime", line2: "performance" },
  { stat: "<2 minutes", line1: "Geographical disaster", line2: "recovery time" },
];

export default function TomasTrustworthySlide({
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
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Trustworthy
        </h1>
      </motion.header>

      {/* Main — Metrics left, Badges right */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "40px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {/* LEFT — Metric Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.stat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: 42,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.2,
                  width: 260,
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                {metric.stat}
              </p>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(126,179,232,0.15) 0%, rgba(40,96,178,0.12) 100%)",
                  border: "1px solid rgba(126,179,232,0.18)",
                  borderRadius: 12,
                  padding: "16px 28px",
                  width: 360,
                  display: "flex",
                  alignItems: "center",
                  minHeight: 56,
                }}
              >
                <p
                  style={{
                    fontSize: 20,
                    color: "rgba(255,255,255,0.75)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {metric.line1}<br />{metric.line2}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT — Badge Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/badges/trustworthy-badges-grid.png"
            alt="Compliance certifications: HIPAA, HITRUST, GDPR, PCI DSS, Do Not Call Registry, TCPA"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "65%",
              height: "auto",
            }}
          />
        </motion.div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
