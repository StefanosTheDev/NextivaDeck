"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

/* ─── DATA ─── */

const BUSINESS_SOURCES = ["Product Catalog", "KMS (KB/FAQ)", "Web Portal", "Product Specifications", "Best Practices"];

const CUSTOMER_SECTIONS = [
  {
    title: "Portal + Product Interactions",
    items: ["Nextiva Pixel", "Nextiva Connect", "RUM", "CDP", "GA", "FBP"],
  },
  {
    title: "Customer Records/CRM/LOB Tools",
    items: ["CRM", "ITSM", "ERP", "AP"],
  },
  {
    title: "Data Lakes",
    items: ["GCP", "Azure Fabric", "Snowflake", "GW", "M365"],
  },
  {
    title: "3rd Party Enrichments",
    items: [
      "Experian", "LinkedIn", "ZoomInfo", "Clay", "6sense",
      "IP Geolocation", "DNC Emergency", "Outbound ANI", "Public Records", "Somos NANPA",
    ],
  },
];

const BULLETS = [
  { bold: "Coherent View", text: " of Customer & Business Data critical for every customer interaction" },
  { bold: "Data Partitioning Support", text: " – Role Based Access; Business Confidential" },
  { bold: "Structured & Unstructured Data", text: "" },
  { bold: "Open Data Platform", text: " w/ customer key for richer 1st party and 3rd party/DIY analytics and intelligence" },
  { bold: "Enabling Recommendation & Ranking Engines", text: " - NBA, NBR, Relevant Articles, Tickets for You" },
];

/* ─── PILL ─── */

function Pill({ label }: { label: string }) {
  return (
    <span style={{
      fontSize: 12,
      color: "#FFFFFF",
      background: "#2860B2",
      borderRadius: 6,
      padding: "4px 10px",
      whiteSpace: "nowrap" as const,
      fontWeight: 500,
    }}>
      {label}
    </span>
  );
}

/* ─── SUB-SECTION INSIDE CUSTOMER DATA ─── */

function SubSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 8,
      padding: "8px 10px",
    }}>
      <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", margin: "0 0 6px" }}>
        {title}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {items.map((item) => <Pill key={item} label={item} />)}
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
        style={{ padding: "40px 100px 0", flexShrink: 0 }}
      >
        <h1
          className="font-heading"
          style={{ fontSize: 48, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
        >
          <span style={{ color: "#7EB3E8" }}>Reasoning</span> across customer &amp; business data
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "20px 80px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 32,
          alignContent: "center",
        }}
      >
        {/* LEFT: Nested Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {/* Business Data Sources — top block */}
          <div style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.3)",
            borderRadius: 10,
            padding: "10px 14px",
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7EB3E8", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Business Data Sources
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {BUSINESS_SOURCES.map((item) => <Pill key={item} label={item} />)}
            </div>
          </div>

          {/* Customer Data Sources — large container with sub-sections */}
          <div style={{
            background: "rgba(40,96,178,0.08)",
            border: "1px solid rgba(40,96,178,0.25)",
            borderRadius: 10,
            padding: "12px 12px",
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7EB3E8", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Customer Data Sources (1st &amp; 3rd Party)
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {CUSTOMER_SECTIONS.map((section) => (
                <SubSection key={section.title} title={section.title} items={section.items} />
              ))}
            </div>
          </div>

          {/* Bottom banner: NEXTIVA DATA & INTELLIGENCE PLATFORM */}
          <div style={{
            background: "rgba(40,96,178,0.18)",
            border: "1px solid rgba(40,96,178,0.4)",
            borderRadius: 10,
            padding: "10px 14px",
            textAlign: "center",
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Nextiva Data &amp; Intelligence Platform
            </p>
          </div>

          {/* Bottom badges: Nextiva + 3rd Party */}
          <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#FFFFFF", background: "#2860B2", borderRadius: 6, padding: "3px 12px" }}>Nextiva</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6, padding: "3px 12px" }}>3rd Party</span>
          </div>
        </motion.div>

        {/* RIGHT: Bullet Points */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
          {BULLETS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.5,
                paddingLeft: 20,
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
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
