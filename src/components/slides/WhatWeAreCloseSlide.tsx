"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const columns = [
  {
    keyword: "easy",
    subtitle: "to use",
    whatItMeans: "Intuitive and efficient",
    whyItMatters: "Customers are typically users of tech, not technologists, with limited IT and budget",
  },
  {
    keyword: "fast",
    subtitle: "time to value",
    whatItMeans: "Immediate impact",
    whyItMatters: "Fast-moving, often distributed multi-location teams need solutions that deploy quickly.",
  },
  {
    keyword: "powerful",
    subtitle: "technology",
    whatItMeans: "Enterprise-class technology",
    whyItMatters: "Busy operators don't need large IT teams to compete head-to-head against the giants.",
  },
];

export default function WhatWeAreCloseSlide({ slideNumber = 58 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
      }}
      data-speaker-notes="Reprise: Customers rely on Nextiva to run their customer communications. What matters most: easy to use, fast time to value, and unified data."
    >
      <div
        style={{
          position: "absolute",
          bottom: -300,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1200,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,96,178,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          HOW WE SERVE
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "12px 0 0",
            lineHeight: 1.15,
          }}
        >
          Making world-class CX accessible<br />& affordable for every business.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "0 100px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          alignContent: "center",
          gap: 20,
          zIndex: 1,
        }}
      >
        {columns.map((col, i) => (
          <motion.article
            key={col.keyword}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 20 }}>
              <span
                className="font-heading"
                style={{
                  fontSize: 44,
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                }}
              >
                {col.keyword}
              </span>
              <span style={{ fontSize: 20, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
                {col.subtitle}
              </span>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#5BA0E0",
                  margin: "0 0 6px",
                }}
              >
                What it means
              </p>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>
                {col.whatItMeans}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#5BA0E0",
                  margin: "0 0 6px",
                }}
              >
                Why it matters
              </p>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>
                {col.whyItMatters}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "16px 100px 24px", flexShrink: 0, zIndex: 1 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.1)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "16px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 22, color: "#FFFFFF", margin: 0, lineHeight: 1.5 }}>
            Serving small to massive middle — millions of businesses that need enterprise-grade CX without enterprise complexity.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
