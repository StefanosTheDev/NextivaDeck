"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Landmark, ShoppingCart, Home } from "lucide-react";
import SlideFooter from "../SlideFooter";

const industries = [
  {
    icon: Heart,
    photo: "/images/customers/customer-acuity.jpg",
    customerName: "Rising Hope Therapy",
    customerLocation: "Newark, Delaware",
    goLive: "XBert AI go live February 2025.",
    title: "Healthcare",
    desc: "Patient intake, reminders, refills — handled by AI agents with HIPAA compliance.",
    metrics: ["85% auto-resolved", "3× faster intake"],
    callouts: [
      { stat: "16%", label: "Our Customer Base" },
      { stat: "$12.1T", label: "Global Market" },
    ],
    accent: "#7BB3E0",
  },
  {
    icon: Landmark,
    photo: "/images/customers/customer-credit-restructuring-2.png",
    customerName: "Credit Restructuring Solutions",
    customerLocation: "El Paso, TX",
    goLive: "XBert AI go live January 2026.",
    title: "Financial Services",
    desc: "Fraud alerts, account inquiries, loan updates — 70% resolved without human touch.",
    metrics: ["70% autonomous", "24/7 coverage"],
    callouts: [
      { stat: "12%", label: "Our Customer Base" },
      { stat: "$26.5T", label: "Global AUM" },
    ],
    accent: "#1A447C",
  },
  {
    icon: ShoppingCart,
    photo: "/images/customers/customer-six3-tile-2.jpg",
    customerName: "Six3 Tile",
    customerLocation: "Lancaster, SC",
    goLive: "XBert AI go live December 2025.",
    title: "Retail & E-Commerce",
    desc: "Order tracking, returns, recommendations — AI agents drive upsell while resolving issues.",
    metrics: ["12% upsell lift", "60% faster returns"],
    callouts: [
      { stat: "10%", label: "Our Customer Base" },
      { stat: "$6.3T", label: "US E-Commerce by 2029" },
    ],
    accent: "#2860B2",
  },
  {
    icon: Home,
    photo: "/images/customers/customer-keystone-fence-2.jpg",
    customerName: "Keystone Fence Supply",
    customerLocation: "Schaefferstown, PA",
    goLive: "XBert AI go live January 2025.",
    title: "Home & Commercial Services",
    desc: "Job inquiries, scheduling, field coordination — AI agents keep every customer touchpoint on track.",
    metrics: ["2.5× faster responses", "Zero missed follow-ups"],
    callouts: [
      { stat: "22%", label: "Our Customer Base" },
      { stat: "6.2%", label: "CAGR Through 2030" },
    ],
    accent: "#7BB3E0",
  },
];

export default function AIAgentsByIndustrySlide({
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
        style={{ padding: "40px 80px 0", textAlign: "center", flexShrink: 0 }}
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
          Industry Applications
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          XBert AI agent actively serves XX customers across multiple industry verticals.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            margin: "10px auto 0",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Purpose-built agentic experiences for the industries that need them
          most.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "24px 80px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 20,
          overflow: "hidden",
        }}
      >
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <article
              key={ind.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
                position: "relative",
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
                  background: ind.accent,
                  zIndex: 1,
                }}
              />

              {/* Left column — photo or icon */}
              <div
                style={{
                  width: "30%",
                  minWidth: "30%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  background: ind.photo
                    ? undefined
                    : `linear-gradient(135deg, ${ind.accent}20, ${ind.accent}08)`,
                }}
              >
                {ind.photo ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ind.photo}
                      alt={ind.customerName}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition:
                          ind.title === "Healthcare"
                            ? "center center"
                            : ind.title === "Financial Services"
                              ? "left bottom"
                              : ind.title === "Retail & E-Commerce"
                                ? "right bottom"
                                : "right center",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "60%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 14,
                        right: 8,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#7BB3E0",
                          margin: 0,
                          lineHeight: 1.25,
                        }}
                      >
                        {ind.customerName}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.6)",
                          margin: "2px 0 0",
                          lineHeight: 1.3,
                        }}
                      >
                        {ind.goLive} {ind.customerLocation}
                      </p>
                    </div>
                  </>
                ) : (
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: `${ind.accent}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `2px solid ${ind.accent}40`,
                    }}
                  >
                    <Icon size={36} color={ind.accent} strokeWidth={1.5} />
                  </div>
                )}
              </div>

              {/* Right column — content */}
              <div
                style={{
                  flex: 1,
                  padding: "20px 24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: `${ind.accent}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={ind.accent} strokeWidth={2} />
                  </div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    {ind.title}
                  </h2>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    margin: "10px 0 0",
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {ind.desc}
                </p>

                {/* Callouts */}
                <div style={{ display: "flex", gap: 32, marginTop: 8 }}>
                  {ind.callouts.map((c) => (
                    <div key={c.label}>
                      <p
                        className="font-heading"
                        style={{
                          fontSize: 22,
                          fontWeight: 700,
                          color: "#FFFFFF",
                          margin: 0,
                          lineHeight: 1.2,
                        }}
                      >
                        {c.stat}
                      </p>
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "rgba(255,255,255,0.4)",
                          margin: "3px 0 0",
                        }}
                      >
                        {c.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Metric pills */}
                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    marginTop: 10,
                    paddingTop: 10,
                    display: "flex",
                    gap: 8,
                  }}
                >
                  {ind.metrics.map((m) => (
                    <span
                      key={m}
                      style={{
                        display: "inline-block",
                        padding: "4px 12px",
                        borderRadius: 20,
                        border: `1.5px solid ${ind.accent}`,
                        fontSize: 13,
                        fontWeight: 600,
                        color: ind.accent,
                        background: `${ind.accent}10`,
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
