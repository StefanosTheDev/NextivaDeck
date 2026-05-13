"use client";

import { motion } from "framer-motion";
import {
  Eye,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Bot,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const problems = [
  "Staffing inefficiencies — limited self-service options for appointment scheduling, prescription refills, and routine inquiries.",
  "Fragmented customer view and inefficient engagement — omnichannel experience is inefficient; cross-department silos prevent a holistic customer view.",
  "Outbound sales and marketing lack rich customer data to act on.",
];

const solutions = [
  "Improved scalability — EMR-integrated AI drives routine tasks like appointments and refills.",
  "Shifted inbound inquiries from high-cost retail locations to contact center — deflecting 15%.",
  "Improved compliance — HIPAA-compliant single view of the customer across clinical, retail, operations, and marketing.",
  "Improved sales leverage — customer information visibility in outbound sales and marketing campaigns.",
];

const metrics: {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}[] = [
  {
    icon: TrendingUp,
    value: "20%",
    label: "Increased sales",
    color: "#34D399",
  },
  {
    icon: Bot,
    value: "15%",
    label: "AI-enabled deflections",
    color: "#7EB3E8",
  },
  {
    icon: Users,
    value: "40K+/mo",
    label: "Customers supported with AI",
    color: "#A78BFA",
  },
  {
    icon: Workflow,
    value: "40K/mo",
    label: "Automated standard requests",
    color: "#FBBF24",
  },
];

export default function AEGVisionUseCaseSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: BG, overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "30px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          Nextiva customer use case
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 16px",
            opacity: 0.9,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(126,179,232,0.16)",
              border: "1px solid rgba(126,179,232,0.42)",
              color: "#7EB3E8",
            }}
          >
            <Eye size={26} strokeWidth={1.9} />
          </div>
          <div style={{ textAlign: "left" }}>
            <h1
              className="font-heading"
              style={{
                fontSize: 34,
                fontWeight: 600,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              AEG Vision
            </h1>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: 14,
                color: "rgba(255,255,255,0.6)",
                fontWeight: 500,
              }}
            >
              Healthcare &amp; highly-distributed franchise · Retail optometry
              · 500 clinical practice locations · 5,000 employees
            </p>
          </div>
        </div>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "20px 80px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          minHeight: 0,
          maxWidth: 1700,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Problem & solution panels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            style={{
              padding: "16px 18px",
              borderRadius: 14,
              background:
                "linear-gradient(165deg, rgba(248,113,113,0.10) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(248,113,113,0.32)",
              boxShadow:
                "0 14px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(248,113,113,0.18)",
                  border: "1px solid rgba(248,113,113,0.42)",
                  color: "#F87171",
                }}
              >
                <AlertTriangle size={16} strokeWidth={2} />
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#F87171",
                }}
              >
                Problem
              </p>
            </div>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 9,
                flex: 1,
              }}
            >
              {problems.map((p, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 9,
                    alignItems: "flex-start",
                    fontSize: 13.5,
                    lineHeight: 1.45,
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#F87171",
                      marginTop: 7,
                    }}
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{
              padding: "16px 18px",
              borderRadius: 14,
              background:
                "linear-gradient(165deg, rgba(52,211,153,0.10) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(52,211,153,0.32)",
              boxShadow:
                "0 14px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(52,211,153,0.18)",
                  border: "1px solid rgba(52,211,153,0.42)",
                  color: "#34D399",
                }}
              >
                <CheckCircle2 size={16} strokeWidth={2} />
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#34D399",
                }}
              >
                Solution
              </p>
            </div>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 9,
                flex: 1,
              }}
            >
              {solutions.map((s, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 9,
                    alignItems: "flex-start",
                    fontSize: 13.5,
                    lineHeight: 1.45,
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#34D399",
                      marginTop: 7,
                    }}
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Metrics strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                style={{
                  padding: "14px 18px",
                  borderRadius: 12,
                  background:
                    "linear-gradient(165deg, rgba(40,96,178,0.08) 0%, rgba(255,255,255,0.025) 100%)",
                  border: `1px solid ${m.color}44`,
                  boxShadow:
                    "0 10px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 11,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${m.color}22`,
                    border: `1px solid ${m.color}66`,
                    color: m.color,
                  }}
                >
                  <Icon size={19} strokeWidth={2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    className="font-heading"
                    style={{
                      margin: 0,
                      fontSize: 26,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1.05,
                    }}
                  >
                    {m.value}
                  </p>
                  <p
                    style={{
                      margin: "3px 0 0",
                      fontSize: 11.5,
                      letterSpacing: "0.06em",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.3,
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
