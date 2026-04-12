"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const CUSTOMER_CRM = ["CRM", "ITSM", "ERP", "AP", "RUM"];
const CUSTOMER_TRACKING = ["CDP", "GA", "Nextiva Pixel", "Nextiva Connect"];
const ENRICHMENTS = ["Experian", "LinkedIn", "ZoomInfo", "Clay", "6sense"];
const BUSINESS_SOURCES = [
  "Product Catalog", "KMS (KB/FAQ)", "Web Portal", "Product Specifications",
  "FBP", "IPGeolocation", "DNCEmergency", "Outbound ANI", "PublicRecords", "SomosNANPA",
];
const DATA_LAKES = ["M365", "GW", "Snowflake", "GCP", "Azure Fabric", "Nextiva", "3rd Party"];

const BULLETS = [
  { bold: "Coherent View", text: " of Customer & Business Data critical for every customer interaction" },
  { bold: "Data Partitioning Support", text: " – Role Based Access; Business Confidential" },
  { bold: "Structured & Unstructured Data", text: "" },
  { bold: "Open Data Platform", text: " w/ customer key for richer 1st party and 3rd party/DIY analytics and intelligence" },
  { bold: "Enabling Recommendation & Ranking Engines", text: " - NBA, NBR, Relevant Articles, Tickets for You" },
];

function Pill({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: 11,
        color: "rgba(255,255,255,0.7)",
        background: "rgba(40,96,178,0.12)",
        border: "1px solid rgba(40,96,178,0.3)",
        borderRadius: 6,
        padding: "3px 8px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function SectionCard({
  title,
  items,
  delay,
}: {
  title: string;
  items: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 10,
        padding: "10px 14px",
      }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "#7EB3E8",
          margin: "0 0 6px",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {title}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {items.map((item) => (
          <Pill key={item} label={item} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SenthilDataIntelligencePlatformSlide({
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
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
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
          padding: "20px 100px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 36,
          alignContent: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <SectionCard
            title="Customer Data Sources (1st & 3rd Party)"
            items={[
              "Portal + Product Interactions",
              ...CUSTOMER_CRM,
              ...CUSTOMER_TRACKING,
            ]}
            delay={0.25}
          />
          <SectionCard
            title="3rd Party Enrichments"
            items={ENRICHMENTS}
            delay={0.35}
          />
          <SectionCard
            title="Business Data Sources"
            items={BUSINESS_SOURCES}
            delay={0.45}
          />
          <SectionCard
            title="Data Lakes"
            items={DATA_LAKES}
            delay={0.55}
          />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 }}
            style={{
              background: "rgba(40,96,178,0.15)",
              border: "1px solid rgba(40,96,178,0.35)",
              borderRadius: 10,
              padding: "10px 14px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Nextiva Data &amp; Intelligence Platform
            </p>
          </motion.div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
          }}
        >
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
