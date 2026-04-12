"use client";
import { motion } from "framer-motion";
import { Activity, TrendingUp, Zap } from "lucide-react";
import SlideFooter from "../SlideFooter";

const phases = [
  {
    num: "01",
    label: "Crawl",
    icon: Activity,
    accent: "#7BB3E0",
    items: [
      "HIPAA-compliant UC + CX foundation",
      "Basic EHR connectivity (SpinSci, ModMed)",
      "Healthcare-specific IVA skills",
    ],
  },
  {
    num: "02",
    label: "Walk",
    icon: TrendingUp,
    accent: "#5B9CF5",
    items: [
      "Full patient workflow automation",
      "EPIC Direct public API integration",
      "Outbound campaigns (SMS, email, voice)",
    ],
  },
  {
    num: "03",
    label: "Run",
    icon: Zap,
    accent: "#2860B2",
    items: [
      "Pre/post-op education & transition of care",
      "Full Rx refill automation",
      "Clinical trials & patient registry surveys",
    ],
  },
];

const integrations = [
  { name: "EPIC (Direct Public API)", pct: 80, status: null },
  { name: "ModMed (Native)", pct: 95, status: null },
  { name: "Cloud 9 / Planet DDS", pct: 95, status: null },
  { name: "eClinicalWorks (Direct)", pct: 100, status: "Live" },
  { name: "NextGen", pct: 80, status: "Roadmap Q3/Q4" },
];

const advancedUseCases = [
  "Pre/Post-Op Education",
  "Transition of Care",
  "Full Rx Refill",
  "Clinical Trials",
  "MCP/A2A Integrations",
  "Outbound Campaigns",
];

export default function HealthcareVerticalStrategySlide({
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
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
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
            fontSize: 44,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Built to scale: strategy, GTM &amp; integrations.
        </h1>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "16px 100px 0",
          display: "flex",
          gap: 20,
          overflow: "hidden",
        }}
      >
        {/* Left column — Strategy phases + GTM callout */}
        <div
          style={{
            flex: "0 0 55%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: "14px 20px",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: 3,
                    background: phase.accent,
                  }}
                />
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `${phase.accent}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color={phase.accent} strokeWidth={2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: phase.accent,
                        letterSpacing: "0.05em",
                      }}
                    >
                      PHASE {phase.num}
                    </span>
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#FFFFFF",
                      }}
                    >
                      {phase.label}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    {phase.items.map((item) => (
                      <p
                        key={item}
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.55)",
                          margin: 0,
                          lineHeight: 1.45,
                          paddingLeft: 8,
                          borderLeft: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* GTM GM Callout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              background: "rgba(40,96,178,0.15)",
              border: "2px solid rgba(123,179,224,0.4)",
              borderRadius: 14,
              padding: "14px 20px",
            }}
          >
            <p
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#7BB3E0",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Dedicated Healthcare GTM General Manager
            </p>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.55)",
                margin: "6px 0 0",
                lineHeight: 1.5,
              }}
            >
              Healthcare specialists (pre &amp; post-sales) · 3rd party ISV
              partnerships · SI partners · Hybrid contracts
            </p>
          </motion.div>
        </div>

        {/* Right column — EHR Integrations + Advanced Use Cases */}
        <div
          style={{
            flex: "0 0 calc(45% - 20px)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Integrations card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "18px 22px",
              flex: 1,
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7BB3E0",
                margin: "0 0 14px",
              }}
            >
              EHR Integrations &amp; Roadmap
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {integrations.map((intg, i) => (
                <motion.div
                  key={intg.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 5,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      {intg.name}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      {intg.status && (
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 600,
                            color:
                              intg.status === "Live" ? "#6EE7B7" : "#E8B84D",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {intg.status}
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#7BB3E0",
                        }}
                      >
                        {intg.pct}%
                      </span>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div
                    style={{
                      width: "100%",
                      height: 4,
                      borderRadius: 2,
                      background: "rgba(255,255,255,0.06)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${intg.pct}%`,
                        height: "100%",
                        borderRadius: 2,
                        background:
                          intg.pct === 100
                            ? "linear-gradient(90deg, #7BB3E0, #6EE7B7)"
                            : "#7BB3E0",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advanced Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "16px 22px",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#CCC7C3",
                margin: "0 0 10px",
              }}
            >
              Advanced Capabilities
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {advancedUseCases.map((uc) => (
                <span
                  key={uc}
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: 20,
                    border: "1px solid rgba(123,179,224,0.35)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#7BB3E0",
                    background: "rgba(123,179,224,0.08)",
                  }}
                >
                  {uc}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Differentiation callout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{
              background: "rgba(40,96,178,0.1)",
              border: "1px solid rgba(40,96,178,0.25)",
              borderRadius: 12,
              padding: "12px 18px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#7EB3E8",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Nextiva Differentiation: Only vendor combining UC + CX + AI in a
              single platform for healthcare
            </p>
          </motion.div>
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
