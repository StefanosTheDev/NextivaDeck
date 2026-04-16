"use client";
import { motion } from "framer-motion";
import { Database, Lock, Layers, Sparkles } from "lucide-react";
import SlideFooter from "../SlideFooter";

const customerSources = {
  title: "Customer graph",
  subtitle: "1st &amp; 3rd party",
  groups: [
    {
      label: "Systems of record",
      items: ["CRM", "ITSM", "ERP", "AP", "CDP", "GA", "Nextiva Pixel"],
    },
    {
      label: "Enrichment &amp; intent",
      items: ["Experian", "LinkedIn", "ZoomInfo", "Clay", "6sense"],
    },
  ],
};

const businessSources = {
  title: "Business context",
  subtitle: "Ops + compliance",
  groups: [
    {
      label: "Product &amp; knowledge",
      items: ["Product Catalog", "KMS / FAQ", "Web Portal", "Specifications"],
    },
    {
      label: "Regulatory &amp; network",
      items: ["FBP / IP", "Geolocation", "DNC", "E911", "Somos / NANPA", "Outbound ANI"],
    },
  ],
};

const dataLakes = ["M365", "Google Workspace", "Snowflake", "GCP", "Azure Fabric"];

/** Placeholder metrics for layout — swap for sourced KPIs. */
const sampleSupportingData = [
  { label: "Unified interaction volume", value: "2.4M+ / mo", note: "Sample: omnichannel events modeled to customer key" },
  { label: "Median first response (digital)", value: "< 2 min", note: "Sample: p50 across chat + SMS in pilot" },
  { label: "Cost per resolution (automated lane)", value: "−38%", note: "Sample: vs. voice-only baseline, same cohort" },
  { label: "Enterprise integrations live", value: "120+", note: "Sample: CRM, ITSM, CDP, warehouse exports" },
  { label: "Platform availability (design target)", value: "99.99%", note: "Sample: mission-critical comms tier" },
];

const capabilities = [
  {
    icon: Lock,
    title: "Governed partitions",
    desc: "Enterprise-grade controls reduce churn risk and unblock regulated verticals — a prerequisite for upmarket ARPU.",
  },
  {
    icon: Layers,
    title: "Unified signal",
    desc: "Structured + unstructured data in one customer key improves model quality and cross-sell yield vs. siloed stacks.",
  },
  {
    icon: Database,
    title: "Open analytics plane",
    desc: "BYO warehouse and BI keeps finance and RevOps in familiar tools while Nextiva owns the operational truth layer.",
  },
  {
    icon: Sparkles,
    title: "Personalization engines",
    desc: "Next-best-action and ranking lift conversion on the same data competitors struggle to pipe together.",
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
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "34%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
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
          Moat and differentiation
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Proprietary data improves AI outcomes and retention economics.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            margin: "14px auto 0",
            lineHeight: 1.5,
            maxWidth: 880,
          }}
        >
          A durable customer graph is what makes models accurate, workflows automatable, and switching costly. That is
          the asset investors underwrite in vertical CX platforms — not a thin UI on top of commodity LLMs.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{
            maxWidth: 1180,
            margin: "22px auto 0",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(300px, 0.95fr)",
            gap: 20,
            alignItems: "stretch",
            textAlign: "left",
          }}
        >
          <div
            style={{
              padding: "18px 24px 18px 22px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderLeft: "4px solid #0070F3",
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: "0 0 10px",
              }}
            >
              Underwriting checklist
            </p>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.55, fontWeight: 400 }}>
              Breadth of integrations, depth of first-party telemetry, governance for regulated buyers, and a path for
              customers to extract their own intelligence — without exporting the relationship.
            </p>
          </div>

          <div
            style={{
              borderRadius: 12,
              background: "rgba(0,0,0,0.22)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: "3px solid rgba(126,179,232,0.6)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
              padding: "16px 18px 14px",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: "0 0 12px",
              }}
            >
              Supporting data (sample)
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {sampleSupportingData.map((row, idx) => (
                <li
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "8px 14px",
                    alignItems: "baseline",
                    paddingBottom: idx < sampleSupportingData.length - 1 ? 10 : 0,
                    borderBottom:
                      idx < sampleSupportingData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.88)", lineHeight: 1.35 }}>
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#E8F2FC",
                      letterSpacing: "-0.02em",
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.value}
                  </span>
                  <span
                    style={{
                      gridColumn: "1 / -1",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.4,
                      marginTop: -4,
                    }}
                  >
                    {row.note}
                  </span>
                </li>
              ))}
            </ul>
            <p style={{ margin: "10px 0 0", fontSize: 10, color: "rgba(255,255,255,0.38)", lineHeight: 1.35 }}>
              Figures are placeholders for layout; replace with audited or approved stats.
            </p>
          </div>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "22px 80px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          minHeight: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
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
                background:
                  "linear-gradient(165deg, rgba(40, 96, 178, 0.1) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "16px 18px",
                boxShadow: "0 16px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
                minWidth: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  gap: 8,
                }}
              >
                <p
                  style={{
                    fontSize: 15,
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
                    flexShrink: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: src.subtitle }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                            background: "rgba(40,96,178,0.18)",
                            border: "1px solid rgba(40,96,178,0.35)",
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            style={{
              background: "linear-gradient(195deg, rgba(0, 112, 243, 0.14) 0%, rgba(40,96,178,0.08) 100%)",
              border: "1px solid rgba(126,179,232,0.35)",
              borderRadius: 14,
              padding: "16px 14px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
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
              Customer data lakes
            </p>
            <p
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 10px",
                textAlign: "center",
              }}
            >
              Nextiva + 3rd party
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {dataLakes.map((l) => (
                <div
                  key={l}
                  style={{
                    padding: "7px 10px",
                    background: "rgba(255,255,255,0.06)",
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

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(40,96,178,0.28) 0%, rgba(126,179,232,0.12) 100%)",
            border: "1.5px solid rgba(126,179,232,0.45)",
            borderRadius: 14,
            padding: "16px 32px",
            textAlign: "center",
            boxShadow: "0 12px 36px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)",
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
            Platform core
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
                  background:
                    "linear-gradient(165deg, rgba(40, 96, 178, 0.08) 0%, rgba(255,255,255,0.03) 45%, rgba(0,0,0,0.08) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: "3px solid #7EB3E8",
                  borderRadius: 14,
                  padding: "16px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  boxShadow: "0 14px 36px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.04)",
                  minWidth: 0,
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
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: "rgba(40,96,178,0.18)",
                      border: "1px solid rgba(40,96,178,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={17} color="#7EB3E8" strokeWidth={2} />
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
                    color: "rgba(255,255,255,0.68)",
                    margin: 0,
                    lineHeight: 1.45,
                  }}
                  dangerouslySetInnerHTML={{ __html: cap.desc }}
                />
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderLeft: "4px solid #0070F3",
            borderRadius: 12,
            padding: "16px 28px",
            textAlign: "center",
            boxShadow: "0 10px 32px rgba(0,0,0,0.2)",
          }}
        >
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.88)",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>Investor takeaway:</span> models commoditize;
            relationships, workflow memory, and governed data do not. The platform is where switching costs and pricing
            power accrue.
          </p>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
