"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const customerChannels = [
  "NEXT Search",
  "Live Chat",
  "Voice",
  "Video",
  "In Person",
  "NEXT Cards",
  "Workflows",
  "Facebook",
  "LinkedIn",
  "X / Meta",
  "NEXT Embedded",
];

const agentCapabilities = [
  {
    title: "Cognitive &amp; Assist Models",
    detail: "for CX Agents (AI + Human)",
  },
  {
    title: "Nextiva Customer Journal",
    detail: "the shared memory of every relationship",
  },
  {
    title: "Deterministic + Agentic Journeys",
    detail: "Programmable flows + AI agents",
  },
];

const dataLayer = [
  {
    title: "Customer Data Model + Governance",
    sub: "Data Store, Connectors",
    accent: "#7EB3E8",
  },
  {
    title: "Business Data Model + Governance",
    sub: "Data Store, Connectors",
    accent: "#4A8BC8",
  },
];

const nextStudioTools = [
  "Customer Experience Designer",
  "CX Agent Experience Designer",
  "Data + AI Model Manager",
];

const byoOptions = ["BYO Models", "BYO Analytics", "BYO Flows", "BYO Agents"];

export default function BriefingCXPaaSArchSlide({
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
        style={{ padding: "30px 80px 0", flexShrink: 0, textAlign: "center" }}
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
            fontSize: 42,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "6px 0 0",
            lineHeight: 1.15,
          }}
        >
          Nextiva CXPaaS Architecture.
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            margin: "8px auto 0",
            lineHeight: 1.5,
            maxWidth: 820,
          }}
        >
          Four layers, one developer platform &mdash; from customer experience
          surfaces down to the unified data foundation.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "20px 80px 28px",
          display: "grid",
          gridTemplateColumns: "1fr 240px",
          gap: 16,
          alignContent: "center",
        }}
      >
        {/* Left: Stacked architecture layers */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {/* Layer 1: Customer Experiences */}
          <motion.section
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: "4px solid #7EB3E8",
              borderRadius: 12,
              padding: "18px 22px",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: 0,
              }}
            >
              Customer Experiences — Omnichannel
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 8,
              }}
            >
              {customerChannels.map((c) => (
                <span
                  key={c}
                  style={{
                    padding: "4px 10px",
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.3)",
                    borderRadius: 14,
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Layer 2: CX Agent (Human + AI) Experiences */}
          <motion.section
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: "4px solid #4A8BC8",
              borderRadius: 12,
              padding: "18px 22px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#7EB3E8",
                  margin: 0,
                }}
              >
                CX Agent (Human + AI) Experiences
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {["xBERT", "NextIQ"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "3px 10px",
                      background: "rgba(126,179,232,0.15)",
                      border: "1px solid rgba(126,179,232,0.4)",
                      borderRadius: 4,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      color: "#7EB3E8",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 8,
              }}
            >
              {agentCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  style={{
                    background: "rgba(40,96,178,0.1)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    borderRadius: 8,
                    padding: "10px 12px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                    dangerouslySetInnerHTML={{ __html: cap.title }}
                  />
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.55)",
                      margin: "3px 0 0",
                      lineHeight: 1.35,
                    }}
                  >
                    {cap.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Layer 3: Data Model + Governance */}
          <motion.section
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >
            {dataLayer.map((dl) => (
              <div
                key={dl.title}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: `4px solid ${dl.accent}`,
                  borderRadius: 12,
                  padding: "18px 22px",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                  dangerouslySetInnerHTML={{ __html: dl.title }}
                />
                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.55)",
                    margin: "3px 0 0",
                  }}
                >
                  {dl.sub}
                </p>
              </div>
            ))}
          </motion.section>

          {/* Layer 4: Foundation band */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            style={{
              background:
                "linear-gradient(135deg, rgba(40,96,178,0.28) 0%, rgba(126,179,232,0.14) 100%)",
              border: "1.5px solid rgba(126,179,232,0.5)",
              borderRadius: 12,
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#7EB3E8",
                  margin: 0,
                }}
              >
                Foundation
              </p>
              <h2
                className="font-heading"
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "2px 0 0",
                  lineHeight: 1.1,
                }}
              >
                Nextiva Data &amp; Intelligence Platform
              </h2>
            </div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(255,255,255,0.65)",
                whiteSpace: "nowrap",
              }}
            >
              + Analytics &amp; Reporting
            </span>
          </motion.section>
        </div>

        {/* Right: NEXT Studio vertical column */}
        <motion.aside
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1.5px solid rgba(126,179,232,0.35)",
            borderRadius: 14,
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: 0,
              }}
            >
              Developer Platform
            </p>
            <h3
              className="font-heading"
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "4px 0 0",
                lineHeight: 1.1,
              }}
            >
              NEXT Studio
            </h3>
            <p
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.5)",
                margin: "4px 0 0",
                lineHeight: 1.4,
              }}
            >
              Design every surface of the stack.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 12,
            }}
          >
            {nextStudioTools.map((t) => (
              <div
                key={t}
                style={{
                  padding: "7px 10px",
                  background: "rgba(40,96,178,0.12)",
                  border: "1px solid rgba(40,96,178,0.25)",
                  borderRadius: 7,
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textAlign: "center",
                  lineHeight: 1.25,
                }}
              >
                {t}
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 12,
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                margin: "0 0 8px",
                textAlign: "center",
              }}
            >
              Bring Your Own
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 5,
              }}
            >
              {byoOptions.map((o) => (
                <span
                  key={o}
                  style={{
                    padding: "5px 6px",
                    background: "rgba(126,179,232,0.1)",
                    border: "1px solid rgba(126,179,232,0.3)",
                    borderRadius: 5,
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#7EB3E8",
                    textAlign: "center",
                  }}
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        </motion.aside>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
