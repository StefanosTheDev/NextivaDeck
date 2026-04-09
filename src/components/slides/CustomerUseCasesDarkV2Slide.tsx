"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { PaintBucket, Cog, ShieldCheck, Layers } from "lucide-react";

const customers = [
  {
    icon: PaintBucket,
    photo: "/images/customer-foxy.png",
    name: "Foxy Coatings",
    industry: "Home Services",
    size: "Reading, PA · 38 Users · $116K TCV",
    accent: "#2DD4BF",
    problems: [
      "Lost sales: high volume of live callers dropped by static IVR",
      "Diminished sales productivity: Reps perform manual call logging",
    ],
    solutions: [
      "No lost sales leads: all inbound calls fielded",
      "Booking rate increased 1.7x: 35% → 60%",
      "Sales capacity increase secured",
      "Material sales velocity increase via intelligent agent matching",
    ],
    metrics: [
      { stat: "35%→60%", label: "Booking Rate" },
      { stat: "$3K", label: "MRR" },
      { stat: "5 min", label: "Speed-to-Lead" },
    ],
  },
  {
    icon: Cog,
    photo: "/images/customer-vision.png",
    name: "Vision Wheel",
    industry: "Manufacturing",
    size: "Decatur, AL · 7 Locations · 73 Users",
    accent: "#6B8FAD",
    problems: [
      "Poor customer sat: fragmented systems prevent contact with preferred location",
      "Lost CX performance visibility: No reporting",
    ],
    solutions: [
      "Every customer reaches the right office on the first attempt",
      "1K monthly interactions handled by AI — no staff required",
      "Single platform consolidates 7 locations, eliminating vendor sprawl",
      "Customers engage via voice, SMS, or web chat — their choice",
    ],
    metrics: [
      { stat: "7", label: "Locations" },
      { stat: "73", label: "Users" },
      { stat: "1K", label: "AI Sessions/Mo" },
    ],
  },
  {
    icon: ShieldCheck,
    photo: "/images/customer-renascent.png",
    name: "Renascent Protection",
    industry: "Auto Warranties",
    size: "Dublin, OH · 60 CC Users · US & Canada",
    accent: "#D4A843",
    problems: [
      "Call quality compliance doesn't scale: legacy platform drives manual QA reviews",
      "Lost market opportunity: multi-lingual call routing/agent matching absent",
    ],
    solutions: [
      "100K+ monthly minutes served in English, Spanish, and French",
      "Automated QA replaces manual call reviews — instant compliance",
      "Real-time executive dashboards drive data-led decisions",
      "Next phase: predictive routing and sentiment-driven escalation",
    ],
    metrics: [
      { stat: "100K+", label: "Min/Mo" },
      { stat: "$5.4K", label: "MRR" },
      { stat: "50", label: "AI Keywords" },
    ],
  },
  {
    icon: Layers,
    photo: "/images/customer-sage.png",
    name: "Sage Surfaces",
    industry: "B2B · Countertops",
    size: "Spring, TX · 115 Users · 42-Month Term",
    accent: "#8FAD6B",
    problems: [
      "Lost revenues: excel-based customer tracking",
      "No agent KPI tracking: over a decade without reporting",
    ],
    solutions: [
      "Revenue enhanced: AI deflection drives revenue generation capacity",
      "Improved agent management: visible performance KPIs and mandated coaching for underperformers",
      "Customer data improved: spreadsheet errors and data loss eliminated through CRM automation",
    ],
    metrics: [
      { stat: "$5.2K", label: "MRR" },
      { stat: "$205K", label: "TCV" },
      { stat: "12 yr", label: "Displacement" },
    ],
  },
];

export default function CustomerUseCasesDarkV2Slide({ slideNumber = 0 }: { slideNumber?: number }) {
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
        style={{ padding: "32px 80px 0", textAlign: "center", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 6px",
          }}
        >
          Customer Use Cases
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Nextiva AI delivers measurable outcomes across industries
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "20px 100px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 18,
          alignContent: "center",
          overflow: "hidden",
        }}
      >
        {customers.map((c) => {
          const Icon = c.icon;
          return (
            <article
              key={c.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
                padding: "16px 20px 14px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: c.accent,
                  zIndex: 1,
                }}
              />

              <div style={{ marginBottom: 16 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 16px",
                    borderRadius: 20,
                    background: c.accent,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                  }}
                >
                  {c.industry}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 14,
                    overflow: "hidden",
                    flexShrink: 0,
                    border: `2px solid ${c.accent}40`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.photo}
                    alt={c.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.15,
                    }}
                  >
                    {c.name}
                  </h2>
                  <p
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.4)",
                      margin: "4px 0 0",
                      lineHeight: 1.25,
                    }}
                  >
                    {c.size}
                  </p>
                </div>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: `${c.accent}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} color={c.accent} strokeWidth={2} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#E07E7E",
                      margin: "0 0 6px",
                    }}
                  >
                    Problem
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {c.problems.map((p) => (
                      <li
                        key={p}
                        style={{
                          fontSize: 14,
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.4,
                          marginBottom: 5,
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "#E07E7E",
                            fontWeight: 700,
                            fontSize: 13,
                          }}
                        >
                          ✗
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    width: 1,
                    background: "rgba(255,255,255,0.08)",
                    flexShrink: 0,
                  }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#7EB3E8",
                      margin: "0 0 6px",
                    }}
                  >
                    Solution
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {c.solutions.map((s) => (
                      <li
                        key={s}
                        style={{
                          fontSize: 14,
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.4,
                          marginBottom: 5,
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "#7EB3E8",
                            fontSize: 13,
                          }}
                        >
                          ✓
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  marginTop: "auto",
                  paddingTop: 8,
                  display: "flex",
                  gap: 20,
                }}
              >
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <p
                      className="font-heading"
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      {m.stat}
                    </p>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "rgba(255,255,255,0.4)",
                        margin: "2px 0 0",
                      }}
                    >
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
