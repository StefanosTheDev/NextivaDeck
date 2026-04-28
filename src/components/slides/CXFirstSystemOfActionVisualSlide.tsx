"use client";
import { motion } from "framer-motion";
import {
  Bot,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
  Share2,
  Star,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const channels = [
  { label: "Core Communication", icon: MessageSquare },
  { label: "Social", icon: Share2 },
  { label: "Messaging", icon: MessagesSquare },
  { label: "Reviews and Reputation", icon: Star },
  { label: "Comments", icon: MessageCircle },
  { label: "Chat Bot", icon: Bot },
];

const topFlow = [
  {
    title: "Be where your customers are",
    sub: "All channels.",
  },
  {
    title: "Learn and understand customer intent",
    sub: "Structured + unstructured data.",
  },
  {
    title: "Empathize with CX",
    sub: "Experience tasks from every perspective.",
  },
  {
    title: "Business outcomes",
    sub: "LTV, ROI, NPS, CSAT",
  },
];

const personas = ["Customers", "Agents", "Supervisors", "Back office", "Management"];

const capabilityPoints = [
  "Unified Canvas for CX + Teamwork. Native + Embedded",
  "Approachable Experiences for every engagement (Pre/During/Post)",
  "Data + Insights, In Context",
  "Reports and Analytics",
];

export default function CXFirstSystemOfActionVisualSlide({
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
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "36px 72px 0", flexShrink: 0 }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.12,
          }}
        >
          Delivering an integrated CX First System of Action
        </h1>
      </motion.header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", padding: "18px 72px 0", gap: 14 }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            border: "2px dashed rgba(40,96,178,0.5)",
            borderRadius: 12,
            padding: "10px 14px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr auto 0.9fr",
            gap: 8,
            alignItems: "center",
          }}
        >
          {topFlow.map((item, i) => (
            <div key={item.title} style={{ display: "contents" }}>
              <div>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "#FFFFFF", lineHeight: 1.25 }}>
                  {item.title}
                </p>
                <p style={{ margin: "3px 0 0", fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.25 }}>
                  {item.sub}
                </p>
              </div>
              {i < topFlow.length - 1 && (
                <div style={{ display: "flex", justifyContent: "center", color: "#2860B2", fontWeight: 700, fontSize: 18 }}>
                  →
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "0.9fr 0.9fr 1.2fr",
            gap: 14,
            minHeight: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto -18px", zIndex: 2 }}>
              <span className="font-heading" style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}>1</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "24px 14px 12px", flex: 1 }}>
              {channels.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: idx < channels.length - 1 ? 9 : 0 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid rgba(40,96,178,0.5)", background: "rgba(40,96,178,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} color="#7EB3E8" strokeWidth={1.9} />
                    </div>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", fontWeight: c.label === "Core Communication" ? 700 : 500 }}>
                      {c.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto -18px", zIndex: 2 }}>
              <span className="font-heading" style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}>2</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "24px 14px 12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, flex: 1 }}>
              <p style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#FFFFFF", textAlign: "center" }}>
                Personalized Customer Journeys
              </p>
              <div style={{ width: 124, height: 124, borderRadius: "50%", border: "2px solid rgba(126,179,232,0.3)", background: "radial-gradient(circle, rgba(40,96,178,0.36), rgba(40,96,178,0.08))", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <span className="font-heading" style={{ fontSize: 32, fontWeight: 700, color: "#7EB3E8" }}>AI</span>
                <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: "1px dashed rgba(126,179,232,0.45)" }} />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto -18px", zIndex: 2 }}>
              <span className="font-heading" style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}>3</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "22px 16px 10px", flex: 1, display: "grid", gridTemplateRows: "1fr auto", minHeight: 0 }}>
              <div style={{ display: "grid", gridTemplateColumns: "0.56fr 1fr", gap: 14, minHeight: 0 }}>
                <div style={{ background: "rgba(7,19,42,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 10px" }}>
                  {personas.map((p, i) => (
                    <p key={p} style={{ margin: i < personas.length - 1 ? "0 0 7px" : 0, fontSize: 14, color: "rgba(255,255,255,0.9)", lineHeight: 1.25 }}>
                      {p}
                    </p>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 8 }}>
                  {capabilityPoints.map((point, i) => (
                    <p key={point} style={{ margin: 0, fontSize: i === 0 ? 17 : 15, fontWeight: i === 0 ? 700 : 600, color: i === 0 ? "#7EB3E8" : "#FFFFFF", lineHeight: 1.25 }}>
                      {point}
                    </p>
                  ))}
                </div>
              </div>
              <p style={{ margin: "8px 0 0", paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                Governance · Automation · Workflow
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
