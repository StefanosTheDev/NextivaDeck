"use client";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Star,
  Share2,
  MessageCircle,
  Phone,
  Bot,
  Sparkles,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const channels = [
  { icon: MessageSquare, label: "Messaging" },
  { icon: Star, label: "Reviews & Reputation" },
  { icon: Share2, label: "Social" },
  { icon: MessageCircle, label: "Comments" },
  { icon: Phone, label: "Core Communication" },
  { icon: Bot, label: "Chat Bot" },
  { icon: Sparkles, label: "AI" },
];

const coreLayers = [
  {
    title: "Approachable Experiences",
    sub: "for every engagement — Pre / During / Post",
  },
  {
    title: "Unified Canvas for CX + Teamwork",
    sub: "Native & embedded across every surface",
  },
  {
    title: "Data + Insights, In Context",
    sub: "Customer journal, agentic guidance, next-best-action",
  },
  {
    title: "Reports & Analytics",
    sub: "Operational & conversational intelligence",
  },
];

const stakeholders = ["Customers", "Agents", "Supervisors", "Back Office"];
const outcomes = [
  { metric: "LTV", label: "Lifetime Value" },
  { metric: "ROI", label: "Return on Investment" },
  { metric: "NPS", label: "Net Promoter Score" },
  { metric: "CSAT", label: "Customer Satisfaction" },
];

export default function BriefingCXFirstSystemSlide({
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
          An integrated CX First System of Action.
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            margin: "10px auto 0",
            lineHeight: 1.5,
            maxWidth: 840,
          }}
        >
          Best-of-breed capabilities for personalized customer journeys, across
          every channel, with AI and human agents working in tandem.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "20px 80px 0",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {/* Stakeholders band */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {stakeholders.map((s) => (
            <div
              key={s}
              style={{
                background: "rgba(40,96,178,0.12)",
                border: "1px solid rgba(40,96,178,0.3)",
                borderRadius: 8,
                padding: "8px 0",
                textAlign: "center",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#7EB3E8",
              }}
            >
              {s}
            </div>
          ))}
        </motion.div>

        {/* Main system diagram: 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "260px 1fr 300px",
            gap: 16,
          }}
        >
          {/* Channels column */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "16px 18px",
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
                margin: "0 0 10px",
                textAlign: "center",
              }}
            >
              Channels In
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 7,
                flex: 1,
                justifyContent: "center",
              }}
            >
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "7px 12px",
                      background: "rgba(40,96,178,0.08)",
                      border: "1px solid rgba(40,96,178,0.2)",
                      borderRadius: 8,
                    }}
                  >
                    <Icon size={14} color="#7EB3E8" strokeWidth={2} />
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {c.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core platform stack */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1.5px solid rgba(40,96,178,0.45)",
              borderRadius: 14,
              padding: "16px 20px 20px",
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
                margin: "0 0 12px",
                textAlign: "center",
              }}
            >
              The CX First Engine
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                flex: 1,
                justifyContent: "center",
              }}
            >
              {coreLayers.map((layer, i) => (
                <div
                  key={layer.title}
                  style={{
                    background: `rgba(40,96,178,${0.2 - i * 0.03})`,
                    border: "1px solid rgba(40,96,178,0.3)",
                    borderLeft: "4px solid #7EB3E8",
                    borderRadius: 10,
                    padding: "18px 22px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.25,
                    }}
                  >
                    {layer.title}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.6)",
                      margin: "4px 0 0",
                      lineHeight: 1.35,
                    }}
                  >
                    {layer.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes column */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "16px 18px",
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
                textAlign: "center",
              }}
            >
              Business Outcomes
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                margin: "0 0 12px",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              Personalized customer journeys that move the metrics.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                flex: 1,
                alignContent: "center",
              }}
            >
              {outcomes.map((o) => (
                <div
                  key={o.metric}
                  style={{
                    background: "rgba(40,96,178,0.12)",
                    border: "1px solid rgba(40,96,178,0.3)",
                    borderRadius: 10,
                    padding: "12px 8px",
                    textAlign: "center",
                  }}
                >
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {o.metric}
                  </p>
                  <p
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.45)",
                      margin: "5px 0 0",
                      lineHeight: 1.2,
                    }}
                  >
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Governance overlay band */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            background: "rgba(40,96,178,0.1)",
            border: "1px solid rgba(40,96,178,0.3)",
            borderRadius: 10,
            padding: "10px 24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 32,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#CCC7C3",
            }}
          >
            Overlay
          </span>
          <div
            style={{
              width: 1,
              height: 18,
              background: "rgba(255,255,255,0.15)",
            }}
          />
          {["Governance", "Automation", "Workflow"].map((g, i) => (
            <span
              key={g}
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.04em",
              }}
            >
              {g}
              {i < 2 && (
                <span
                  style={{
                    marginLeft: 32,
                    color: "#7EB3E8",
                    fontSize: 12,
                  }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
