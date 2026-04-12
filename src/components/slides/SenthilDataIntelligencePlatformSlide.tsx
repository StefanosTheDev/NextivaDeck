"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

/* ─── DATA ─── */

const BUSINESS_SOURCES = [
  { label: "Product Catalog", nextiva: false },
  { label: "KMS (KB/FAQ)", nextiva: false },
  { label: "Web Portal", nextiva: false },
  { label: "Product Specifications", nextiva: false },
  { label: "Best Practices", nextiva: false },
];

const CUSTOMER_SECTIONS = [
  {
    title: "Portal + Product Interactions",
    items: [
      { label: "Nextiva Pixel", nextiva: true },
      { label: "Nextiva Connect", nextiva: true },
      { label: "RUM", nextiva: false },
      { label: "CDP", nextiva: false },
      { label: "GA", nextiva: false },
      { label: "FBP", nextiva: false },
    ],
  },
  {
    title: "Customer Records/CRM/LOB Tools",
    items: [
      { label: "CRM", nextiva: false },
      { label: "ITSM", nextiva: false },
      { label: "ERP", nextiva: false },
      { label: "AP", nextiva: false },
    ],
  },
  {
    title: "Data Lakes",
    items: [
      { label: "GCP", nextiva: true },
      { label: "Azure Fabric", nextiva: false },
      { label: "Snowflake", nextiva: false },
      { label: "GW", nextiva: false },
      { label: "M365", nextiva: false },
    ],
  },
  {
    title: "3rd Party Enrichments",
    items: [
      { label: "Experian", nextiva: false },
      { label: "LinkedIn", nextiva: false },
      { label: "ZoomInfo", nextiva: false },
      { label: "Clay", nextiva: false },
      { label: "6sense", nextiva: false },
      { label: "IP Geolocation", nextiva: false },
      { label: "DNC Emergency", nextiva: false },
      { label: "Outbound ANI", nextiva: false },
      { label: "Public Records", nextiva: false },
      { label: "Somos NANPA", nextiva: false },
    ],
  },
];

const BULLETS = [
  { bold: "Coherent View", text: " of Customer & Business Data critical for every customer interaction" },
  { bold: "Data Partitioning Support", text: " – Role Based Access; Business Confidential" },
  { bold: "Structured & Unstructured Data", text: "" },
  { bold: "Open Data Platform", text: " with customer key for richer 1st party and 3rd party/DIY analytics and intelligence" },
  { bold: "Enabling Recommendation & Ranking Engines", text: " – NBA, NBR, Relevant Articles, Tickets for You" },
];

/* ─── PILL ─── */

function Pill({ label, nextiva }: { label: string; nextiva: boolean }) {
  return (
    <span style={{
      fontSize: 12,
      color: "rgba(255,255,255,0.7)",
      background: nextiva ? "rgba(255,255,255,0.06)" : "rgba(40,96,178,0.2)",
      border: nextiva ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(40,96,178,0.35)",
      borderRadius: 6,
      padding: "5px 8px",
      fontWeight: 500,
      textAlign: "center" as const,
    }}>
      {label}
    </span>
  );
}

/* ─── SUB-SECTION ─── */

function SubSection({ title, items }: { title: string; items: { label: string; nextiva: boolean }[] }) {
  return (
    <div style={{
      background: "none",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 8,
      padding: "10px 14px",
      textAlign: "left",
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", margin: "0 0 8px" }}>
        {title}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 5 }}>
        {items.map((item) => <Pill key={item.label} label={item.label} nextiva={item.nextiva} />)}
      </div>
    </div>
  );
}

/* ─── SLIDE ─── */

export default function SenthilDataIntelligencePlatformSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "36px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
          DATA &amp; INTELLIGENCE FOUNDATION
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 48, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
        >
          <span style={{ color: "#2860B2" }}>Reasoning</span> across customer &amp; business data
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "16px 80px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 32,
          alignContent: "center",
        }}
      >
        {/* LEFT: Diagram with vertical right-side label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: "flex", flexDirection: "column", gap: 6 }}
        >
          {/* Data blocks row + vertical label */}
          <div style={{ display: "flex", gap: 8 }}>
            {/* Left: stacked data blocks */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Business Data Sources */}
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "14px 18px",
                textAlign: "center",
              }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#7EB3E8", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Business Data Sources
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center" }}>
                  {BUSINESS_SOURCES.map((item) => <Pill key={item.label} label={item.label} nextiva={item.nextiva} />)}
                </div>
              </div>

              {/* Customer Data Sources */}
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "14px 14px",
                textAlign: "center",
              }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#7EB3E8", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Customer Data Sources (1st &amp; 3rd Party)
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {CUSTOMER_SECTIONS.map((section) => (
                    <SubSection key={section.title} title={section.title} items={section.items} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: vertical label — spans from top of Business Data to bottom of Customer Data */}
            <div style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              background: "rgba(200,200,215,0.12)",
              border: "1px solid rgba(200,200,215,0.25)",
              borderRadius: 10,
              padding: "16px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <p style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}>
                Nextiva Data &amp; Intelligence Platform
              </p>
            </div>
          </div>

          {/* Legend badges — below, outside the vertical label */}
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 6, padding: "5px 8px" }}>Nextiva</span>
            <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.7)", background: "rgba(40,96,178,0.2)", border: "1px solid rgba(40,96,178,0.35)", borderRadius: 6, padding: "5px 8px" }}>3rd Party</span>
          </div>
        </motion.div>

        {/* RIGHT: Text points (no bullets) */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
          {BULLETS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              style={{
                fontSize: 20,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.5,
              }}
            >
              <span style={{ fontWeight: 700, color: "#FFFFFF" }}>{item.bold}</span>
              {item.text}
            </motion.div>
          ))}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
