"use client";
import { motion } from "framer-motion";
import { Database, Lock, Layers, Sparkles } from "lucide-react";
import SlideFooter from "../SlideFooter";

const customerSources = {
  title: "Customer Data",
  subtitle: "1st &amp; 3rd Party",
  groups: [
    {
      label: "CRM / LOB Tools",
      items: ["CRM", "ITSM", "ERP", "AP", "CDP", "GA", "Nextiva Pixel"],
    },
    {
      label: "3rd Party Enrichments",
      items: ["Experian", "LinkedIn", "ZoomInfo", "Clay", "6sense"],
    },
  ],
};

const businessSources = {
  title: "Business Data",
  subtitle: "Operational + Regulatory",
  groups: [
    {
      label: "Product &amp; Knowledge",
      items: ["Product Catalog", "KMS / FAQ", "Web Portal", "Specifications"],
    },
    {
      label: "Regulatory &amp; Network",
      items: [
        "FBP / IP",
        "Geolocation",
        "DNC",
        "E911",
        "Somos / NANPA",
        "Outbound ANI",
      ],
    },
  ],
};

const dataLakes = [
  "M365",
  "Google Workspace",
  "Snowflake",
  "GCP",
  "Azure Fabric",
];

const capabilities = [
  {
    icon: Lock,
    title: "Data Partitioning",
    desc: "Role-based access, business-confidential segmentation.",
  },
  {
    icon: Layers,
    title: "Structured + Unstructured",
    desc: "Every interaction, every record, unified and queryable.",
  },
  {
    icon: Database,
    title: "Open Data Platform",
    desc: "Customer-keyed, 1st &amp; 3rd-party DIY analytics + intelligence.",
  },
  {
    icon: Sparkles,
    title: "Recommendation Engines",
    desc: "NBA, NBR, relevant articles, tickets-for-you ranking.",
  },
];

export default function BriefingDataIntelligenceSlide({
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
        style={{ padding: "36px 80px 0", flexShrink: 0, textAlign: "center" }}
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
          Platform Architecture
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "8px 0 0",
            lineHeight: 1.15,
          }}
        >
          Reasoning across customer &amp; business data.
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            margin: "10px auto 0",
            lineHeight: 1.5,
            maxWidth: 820,
          }}
        >
          A coherent view of the customer — critical for every interaction,
          every AI decision, every agent action.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "18px 80px 0",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* Top row: data source columns + data lakes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 200px",
            gap: 14,
          }}
        >
          {[customerSources, businessSources].map((src, si) => (
            <motion.div
              key={src.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + si * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "14px 18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  {src.title}
                </p>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#7EB3E8",
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: src.subtitle }}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {src.groups.map((g) => (
                  <div key={g.label}>
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        color: "rgba(255,255,255,0.5)",
                        margin: "0 0 6px",
                      }}
                      dangerouslySetInnerHTML={{ __html: g.label }}
                    />
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {g.items.map((it) => (
                        <span
                          key={it}
                          style={{
                            display: "inline-block",
                            padding: "4px 10px",
                            background: "rgba(40,96,178,0.15)",
                            border: "1px solid rgba(40,96,178,0.3)",
                            borderRadius: 16,
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#FFFFFF",
                          }}
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Data lakes column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            style={{
              background: "rgba(40,96,178,0.08)",
              border: "1px solid rgba(40,96,178,0.25)",
              borderRadius: 12,
              padding: "14px 16px",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: "0 0 4px",
                textAlign: "center",
              }}
            >
              Data Lakes
            </p>
            <p
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 10px",
                textAlign: "center",
              }}
            >
              Nextiva + 3rd Party
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {dataLakes.map((l) => (
                <div
                  key={l}
                  style={{
                    padding: "7px 10px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero platform band */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(40,96,178,0.3) 0%, rgba(126,179,232,0.15) 100%)",
            border: "1.5px solid rgba(126,179,232,0.5)",
            borderRadius: 14,
            padding: "16px 32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              margin: 0,
            }}
          >
            The Core
          </p>
          <h2
            className="font-heading"
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: "4px 0 0",
              letterSpacing: "-0.01em",
            }}
          >
            Nextiva Data &amp; Intelligence Platform
          </h2>
        </motion.div>

        {/* Capabilities row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            alignContent: "start",
          }}
        >
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.article
                key={cap.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.06 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: "3px solid #7EB3E8",
                  borderRadius: 12,
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(40,96,178,0.15)",
                      border: "1px solid rgba(40,96,178,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color="#7EB3E8" strokeWidth={2} />
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {cap.title}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                  dangerouslySetInnerHTML={{ __html: cap.desc }}
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom takeaway */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{
            background: "rgba(40,96,178,0.1)",
            border: "1px solid rgba(40,96,178,0.3)",
            borderRadius: 12,
            padding: "16px 28px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.85)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>
              Data is the moat.
            </span>{" "}
            Models generate content &mdash; but the customer relationship,
            memory, and system of action live here, on our platform.
          </p>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
