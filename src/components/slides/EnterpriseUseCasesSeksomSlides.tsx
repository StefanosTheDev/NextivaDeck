"use client";

import { motion } from "framer-motion";
import { Building2, Eye, Heart, Tv } from "lucide-react";
import SlideFooter from "../SlideFooter";
import type { CustomerCaseCardData } from "./CustomerUseCaseCaseCard";

/**
 * Seksom Slides.pptx — one customer per slide (PowerPoint-style).
 * Layout: left 50% hero image + identity; right 50% = Problem card (top) + Solution card (bottom); metrics strip below.
 */
const BG =
  "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)";

const EYEBROW = "Enterprise Use Cases";

const CARD_BG = "rgba(255,255,255,0.04)";
const CARD_BORDER = "rgba(255,255,255,0.1)";
const MUTED = "rgba(255,255,255,0.55)";
const DIM = "rgba(255,255,255,0.4)";

const TATA_PLAY_PPT: CustomerCaseCardData = {
  icon: Tv,
  photo: "/images/pptx-slides/slide6-img0.jpg",
  name: "Tata Play",
  industry: "Digital Entertainment",
  size: "Servicing 400K+ cities · 1,600 employees",
  problems: [
    "High call volume for standard customer service queries and issues.",
    "Reliance on email and phone support, leading to slow resolution times.",
    "Limited automation and self-service options for package upgrades and troubleshooting.",
    "Inefficient customer engagement across multiple channels.",
  ],
  solutions: [
    "Integrated WhatsApp AI Bot through Nextiva for automated customer support.",
    "Shifted 20% of customer inquiries from other channels to WhatsApp, reducing call center load.",
    "Automated 5 million+ standard queries and troubleshooting requests monthly.",
    "Improved first response time and customer engagement efficiency.",
  ],
  metrics: [
    { stat: "$40%", label: "Cost of resolution savings" },
    { stat: "1M+/Mo", label: "Customers supported with AI" },
    { stat: "20%", label: "Deflections to WhatsApp" },
    { stat: "5M+/Mo", label: "Automated standard requests" },
  ],
  accent: "#7BB3E0",
};

const SUZUKI_PPT: CustomerCaseCardData = {
  icon: Building2,
  photo: "/images/pptx-slides/slide4-img0.png",
  name: "Suzuki",
  industry: "Industrial Manufacturing",
  size: "72K Employees · 192 Countries",
  problems: [
    "High call volume for standard information inquiries on models, locations, and customer service.",
    "Reliance on email and phone support, leading to slow response and resolution times.",
    "Limited visibility to user information throughout the CX lifecycle.",
    "Inefficient customer engagement across multiple channels.",
  ],
  solutions: [
    "AI-powered chatbot across channels — standard inquiries instantaneous, no human intervention.",
    "Seamless agent transfer — direct connection to human agents for complex inquiries.",
    "Automated insights & analytics: sessions, users, and engagement rates across channels.",
    "Customer feedback & sentiment capture survey insights for continuous improvement.",
  ],
  metrics: [
    { stat: "60%+", label: "Faster follow-up on standard requests" },
    { stat: "1M+/Mo", label: "Customers supported with AI" },
    { stat: "12%", label: "Reduction in employee costs" },
  ],
  accent: "#2860B2",
};

const SHASTA_PPT: CustomerCaseCardData = {
  icon: Heart,
  photo: "/images/pptx-slides/slide9-img0.png",
  name: "Shasta Community Health",
  industry: "Community Healthcare",
  size: "7 Clinical Locations · 100 Providers across 10+ practices",
  problems: [
    "Chaotic inbound communications — many queues, long hold times, significant misrouting.",
    "Appointment scheduling and prescription refills are manual and consume human capacity.",
    "Fragmented communications with patients across departments; no visibility to customer information.",
  ],
  solutions: [
    "Rules-based front end routes to 10+ care practices; AI agent handles routine inquiries.",
    "EMR integration lets the AI agent complete routine tasks.",
    "Seamless patient transitions across practices; AI handles the easy path and escalates complex cases.",
  ],
  metrics: [
    { stat: "2 min", label: "Reduced wait times (avg.)" },
    { stat: "20%", label: "AI-enabled deflections" },
    { stat: "20%", label: "Routine call deflection" },
  ],
  accent: "#7BB3E0",
};

const AEG_PPT: CustomerCaseCardData = {
  icon: Eye,
  photo: "/images/pptx-slides/slide11-img0.png",
  name: "AEG Vision",
  industry: "Retail Optometry",
  size: "500 Clinical Practice Locations · 5,000 employees",
  problems: [
    "Limited self-service for appointment scheduling, prescription refills, and routine inquiries.",
    "Inefficient customer engagement across multiple channels.",
    "Fragmented view of the customer — no visibility across departments.",
    "No outbound sales and marketing using rich customer data.",
  ],
  solutions: [
    "EMR-integrated agentic IVA for appointments and prescription refills.",
    "Shifted inbound inquiries from high-cost retail to the contact center, deflecting 15%.",
    "HIPAA-compliant single view of the customer across clinical, retail, operations, and marketing.",
    "Increased sales by leveraging customer information in outbound campaigns.",
  ],
  metrics: [
    { stat: "20%", label: "Increased sales" },
    { stat: "40K+/Mo", label: "Customers supported with AI" },
    { stat: "15%", label: "AI-enabled deflections" },
    { stat: "40K/Mo", label: "Automated standard requests" },
  ],
  accent: "#1A447C",
};

function BulletBlock({
  items,
  tone,
  mark,
}: {
  items: string[];
  tone: string;
  mark: string;
}) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
      {items.map((p, i) => (
        <li
          key={`${i}-${p.slice(0, 20)}`}
          style={{
            fontSize: 13,
            color: MUTED,
            lineHeight: 1.38,
            marginBottom: 6,
            paddingLeft: 16,
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              color: tone,
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            {mark}
          </span>
          {p}
        </li>
      ))}
    </ul>
  );
}

function EnterpriseSingleCustomerBody({ c }: { c: CustomerCaseCardData }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        style={{
          flex: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 22,
          padding: "12px 56px 0",
          boxSizing: "border-box",
        }}
      >
        {/* Left: hero image (~half slide) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            gap: 14,
          }}
        >
          <div
            style={{
              flex: 1,
              minHeight: 200,
              borderRadius: 14,
              overflow: "hidden",
              border: `2px solid ${c.accent}55`,
              position: "relative",
              boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
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
                objectPosition: "center center",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "16px 18px",
                background: "linear-gradient(transparent, rgba(0,2,8,0.88))",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: 20,
                  background: c.accent,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  marginBottom: 8,
                }}
              >
                {c.industry}
              </span>
              <h2
                className="font-heading"
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.1,
                  textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                }}
              >
                {c.name}
              </h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.82)", margin: "6px 0 0", lineHeight: 1.3 }}>{c.size}</p>
            </div>
          </div>
        </div>

        {/* Right: Problem (top) + Solution (bottom) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            minHeight: 0,
          }}
        >
          <div
            style={{
              flex: 1,
              minHeight: 0,
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: 12,
              padding: "14px 16px",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#E07E7E",
                margin: "0 0 8px",
              }}
            >
              Problem
            </p>
            <BulletBlock items={c.problems} tone="#E07E7E" mark="✗" />
          </div>
          <div
            style={{
              flex: 1,
              minHeight: 0,
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: 12,
              padding: "14px 16px",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: "0 0 8px",
              }}
            >
              Solution
            </p>
            <BulletBlock items={c.solutions} tone="#7EB3E8" mark="✓" />
          </div>
        </div>
      </motion.div>

      {/* Metrics — full width under the split */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          marginTop: 12,
          marginBottom: 4,
          padding: "12px 56px 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px 28px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {c.metrics.map((m) => (
          <div key={m.label} style={{ textAlign: "center", minWidth: 100 }}>
            <p className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.05 }}>
              {m.stat}
            </p>
            <p
              style={{
                fontSize: 9,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: DIM,
                margin: "4px 0 0",
                maxWidth: 160,
                lineHeight: 1.25,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );
}

function EnterpriseSingleCustomerShell({ slideNumber, c }: { slideNumber: number; c: CustomerCaseCardData }) {
  return (
    <div className="slide" style={{ background: BG, justifyContent: "flex-start" }}>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "28px 56px 0", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 4px",
          }}
        >
          {EYEBROW}
        </p>
        <h1 className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
          Nextiva AI delivers business results to enterprise customers
        </h1>
      </motion.header>

      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <EnterpriseSingleCustomerBody c={c} />
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}

/** One customer: Tata Play (source: Seksom ppt p.4 left story / p.7) */
export function EnterpriseUseCasesSeksomSlide04({ slideNumber }: { slideNumber: number }) {
  return <EnterpriseSingleCustomerShell slideNumber={slideNumber} c={TATA_PLAY_PPT} />;
}

/** One customer: Suzuki (source: Seksom ppt p.4 right story) */
export function EnterpriseUseCasesSeksomSlide07({ slideNumber }: { slideNumber: number }) {
  return <EnterpriseSingleCustomerShell slideNumber={slideNumber} c={SUZUKI_PPT} />;
}

/** One customer: Shasta Community Health (source: Seksom ppt p.9) */
export function EnterpriseUseCasesSeksomSlide09({ slideNumber }: { slideNumber: number }) {
  return <EnterpriseSingleCustomerShell slideNumber={slideNumber} c={SHASTA_PPT} />;
}

/** One customer: AEG Vision (source: Seksom ppt p.11) */
export function EnterpriseUseCasesSeksomSlide11({ slideNumber }: { slideNumber: number }) {
  return <EnterpriseSingleCustomerShell slideNumber={slideNumber} c={AEG_PPT} />;
}
