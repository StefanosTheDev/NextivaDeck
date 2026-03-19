"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, Tv, Heart, Eye } from "lucide-react";
import SlideFooter from "../SlideFooter";

const customers = [
  {
    icon: Heart,
    photo: "/images/pptx-slides/slide9-img0.png",
    name: "Shasta Community Health",
    industry: "Community Healthcare",
    size: "7 Locations · 100 Providers",
    problems: [
      "Chaotic inbound comms — long holds, misrouting",
      "Scheduling & refills manual, consuming staff capacity",
      "Fragmented patient comms, no customer visibility",
    ],
    solutions: [
      "Rules-based routing to 10+ practices; AI handles routine",
      "EMR integration automates routine tasks via AI agent",
      "Seamless patient transitions; AI + human handoff",
    ],
    metrics: [
      { stat: "2 min", label: "Avg wait time" },
      { stat: "20%", label: "AI deflections" },
    ],
    accent: "#7BB3E0",
  },
  {
    icon: Eye,
    photo: "/images/pptx-slides/slide11-img0.png",
    name: "AEG Vision",
    industry: "Retail Optometry",
    size: "500 Locations · 5,000 employees",
    problems: [
      "No self-service for scheduling or refills",
      "Fragmented customer view across departments",
      "Inefficient multi-channel engagement",
      "No outbound sales using customer data",
    ],
    solutions: [
      "EMR-integrated IVA for appointments & prescriptions",
      "HIPAA-compliant single view: clinical, retail, ops",
      "Shifted inbound to contact center, deflecting 15%",
      "Customer data powers outbound sales campaigns",
    ],
    metrics: [
      { stat: "20%", label: "Increased sales" },
      { stat: "15%", label: "AI deflections" },
      { stat: "40K/Mo", label: "Automated requests" },
    ],
    accent: "#1A447C",
  },
  {
    icon: Building2,
    photo: "/images/pptx-slides/slide4-img0.png",
    name: "Suzuki",
    industry: "Industrial Manufacturing",
    size: "72K Employees · 192 Countries",
    problems: [
      "High volume standard inquiries on models & locations",
      "Email/phone reliance, slow response times",
      "Limited user info visibility across CX lifecycle",
      "Inefficient multi-channel engagement",
    ],
    solutions: [
      "AI chatbot across channels — instant, zero human touch",
      "Seamless agent transfer for complex inquiries",
      "Automated insights & analytics across channels",
      "Sentiment capture drives continuous improvement",
    ],
    metrics: [
      { stat: "1M+/Mo", label: "Customers with AI" },
      { stat: "12%", label: "Cost reduction" },
      { stat: "60%+", label: "Faster follow-up" },
    ],
    accent: "#2860B2",
  },
  {
    icon: Tv,
    photo: "/images/pptx-slides/slide6-img0.jpg",
    name: "Tata Play",
    industry: "Digital Entertainment",
    size: "400K+ cities · 1,600 employees",
    problems: [
      "High call volume for standard service queries",
      "Email/phone reliance, slow resolution",
      "No automation for upgrades & troubleshooting",
      "Inefficient multi-channel engagement",
    ],
    solutions: [
      "WhatsApp AI Bot for automated support",
      "20% of inquiries shifted to WhatsApp",
      "5M+ standard queries automated monthly",
      "Faster first response and engagement",
    ],
    metrics: [
      { stat: "$40%", label: "Cost savings" },
      { stat: "20%", label: "WhatsApp deflections" },
      { stat: "5M+/Mo", label: "Automated requests" },
    ],
    accent: "#7BB3E0",
  },
];

export default function CustomerUseCasesSlide({
  slideNumber = 12,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
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
            fontSize: 13,
            letterSpacing: "0.08em",
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
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Nextiva AI delivers business results to enterprise customers
        </h1>
        <p
          style={{
            fontSize: 15,
            margin: "6px auto 0",
            maxWidth: 600,
            lineHeight: 1.4,
            visibility: "hidden",
          }}
        >
          .
        </p>
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
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
                padding: "16px 20px 14px",
              }}
            >
              {/* Accent bar */}
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

              {/* Industry pill */}
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

              {/* Thumbnail + company name + size */}
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

              {/* Problem / Solution columns */}
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                {/* Problem column */}
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

                {/* Divider */}
                <div
                  style={{
                    width: 1,
                    background: "rgba(255,255,255,0.08)",
                    flexShrink: 0,
                  }}
                />

                {/* Solution column */}
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

              {/* Metrics bar */}
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
