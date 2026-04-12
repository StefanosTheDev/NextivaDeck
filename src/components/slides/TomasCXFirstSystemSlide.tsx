"use client";
import { motion } from "framer-motion";
import {
  MessageSquare,
  ThumbsUp,
  MessagesSquare,
  Star,
  MessageCircle,
  Bot,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const CHANNELS = [
  { label: "Core Communication", icon: MessageSquare },
  { label: "Social", icon: ThumbsUp },
  { label: "Messaging", icon: MessagesSquare },
  { label: "Reviews and Reputation", icon: Star },
  { label: "Comments", icon: MessageCircle },
  { label: "Chat Bot", icon: Bot },
];

const PERSONAS = ["Customers", "Agents", "Supervisors", "Management", "Executives"];

const OUTCOMES = [
  { bold: "Unified Conversations", rest: " in a single Interface" },
  { bold: "Dynamic", rest: " intelligent insights" },
  { bold: "Personalized automated", rest: " customer actions at scale" },
  { bold: "Real-time ", rest: "recommendations" },
];

const AI_DOTS = [0, 45, 90, 135, 180, 225, 270, 315];

export default function TomasCXFirstSystemSlide({
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
        style={{ padding: "34px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
          CX-FIRST SYSTEM OF ACTION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Delivering an integrated solution{" "}
          <span style={{ fontWeight: 400, fontSize: 28, color: "rgba(255,255,255,0.6)" }}>
            that fits mid market needs.
          </span>
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "94px 80px 0",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {/* Top flow bar with dashed border */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{
            border: "2px dashed rgba(40,96,178,0.5)",
            borderRadius: 12,
            padding: "12px 20px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1.2fr auto 1.2fr auto 1fr",
            alignItems: "center",
            gap: 8,
            flexShrink: 0,
          }}
        >
          {[
            { label: "BE WHERE YOUR CUSTOMERS ARE", sub: "in all channels" },
            null,
            { label: "LEARN AND UNDERSTAND CUSTOMER INTENT", sub: "from unstructured and structured data" },
            null,
            { label: "UNIFY, REAL TIME AND ACTION CUSTOMER INSIGHTS", sub: "to make customers and teams happier" },
            null,
            { label: "Business outcomes", sub: "LTV, ROI, NPS, CSAT", accent: true },
          ].map((item, i) => {
            if (!item) {
              return (
                <div key={i} style={{ display: "flex", justifyContent: "center" }}>
                  <span style={{ fontSize: 18, color: "#2860B2", fontWeight: 700 }}>→</span>
                </div>
              );
            }
            return (
              <div key={i}>
                <p style={{ fontSize: 15, fontWeight: 700, color: item.accent ? "#FFFFFF" : "rgba(255,255,255,0.9)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.3 }}>
                  {item.label}
                </p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.35, fontWeight: item.accent ? 600 : 400 }}>
                  {item.sub}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* 3 columns — each box has its own height, all centered */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.7fr 0.6fr 1.8fr",
            gap: 14,
            alignItems: "stretch",
          }}
        >
          {/* Box 1: Channels */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: -21, position: "relative", zIndex: 2, flexShrink: 0 }}>
              <span className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>1</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "28px 14px 16px", textAlign: "left", flex: 1, width: "100%" }}>
              {CHANNELS.map((ch, ci) => {
                const Icon = ch.icon;
                return (
                  <div key={ch.label} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: ci < CHANNELS.length - 1 ? 12 : 0 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(40,96,178,0.2)", border: "1px solid rgba(40,96,178,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={22} color="#7EB3E8" strokeWidth={1.75} />
                    </div>
                    <span style={{ fontSize: 17, color: "rgba(255,255,255,0.9)", fontWeight: ch.label === "Core Communication" ? 700 : 500 }}>
                      {ch.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Box 2: Single Data Source + AI */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: -21, position: "relative", zIndex: 2, flexShrink: 0 }}>
              <span className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>2</span>
            </div>
            <div style={{ background: "rgba(40,96,178,0.08)", border: "1px solid rgba(40,96,178,0.2)", borderRadius: 12, padding: "28px 14px 16px", textAlign: "center", flex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Single Data Source
              </p>
              <div style={{ position: "relative", width: 110, height: 110, margin: "0 auto" }}>
                <div style={{ position: "absolute", inset: 8, borderRadius: "50%", background: "radial-gradient(circle, rgba(40,96,178,0.4) 0%, rgba(40,96,178,0.15) 70%)", border: "2px solid rgba(126,179,232,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="font-heading" style={{ fontSize: 36, fontWeight: 700, color: "#7EB3E8" }}>AI</span>
                </div>
                {AI_DOTS.map((angle) => {
                  const r = 54;
                  const rad = (angle * Math.PI) / 180;
                  const cx = 55 + r * Math.cos(rad);
                  const cy = 55 + r * Math.sin(rad);
                  return (
                    <div key={angle} style={{ position: "absolute", left: cx - 4, top: cy - 4, width: 8, height: 8, borderRadius: "50%", background: "#2860B2", border: "2px solid rgba(126,179,232,0.5)" }} />
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Box 3: Insights + Outcomes + Governance */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#2860B2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: -21, position: "relative", zIndex: 2, flexShrink: 0 }}>
              <span className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>3</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "28px 20px 0", textAlign: "left", flex: 1, width: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "grid", gridTemplateColumns: "0.45fr 1fr", gap: "0 36px", alignItems: "start", flex: 1 }}>
                {/* Insights block with bracket connector */}
                <div>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center" }}>
                    Insights
                  </p>
                  <div style={{ background: "rgba(10,20,45,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "16px 18px", textAlign: "center", position: "relative" }}>
                    {PERSONAS.map((p, pi) => (
                      <p key={p} style={{ fontSize: 17, color: "rgba(255,255,255,0.9)", fontWeight: 500, margin: pi < PERSONAS.length - 1 ? "0 0 14px" : 0, lineHeight: 1.3 }}>
                        {p}
                      </p>
                    ))}
                    {/* Bracket + dots on right edge, spanning from first to last persona */}
                    <div style={{
                      position: "absolute",
                      right: -16,
                      top: 24,
                      bottom: 24,
                      width: 14,
                      borderTop: "2px solid #2860B2",
                      borderRight: "2px solid #2860B2",
                      borderBottom: "2px solid #2860B2",
                      borderRadius: "0 6px 6px 0",
                    }}>
                      {PERSONAS.map((_, pi) => (
                        <div
                          key={pi}
                          style={{
                            position: "absolute",
                            right: -6,
                            top: `${pi * 100 / (PERSONAS.length - 1)}%`,
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: "#2860B2",
                            border: "2px solid #7EB3E8",
                            transform: "translateY(-50%)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Customer-First Unified-CXM */}
                <div style={{ paddingLeft: 70 }}>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "0 0 24px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Customer-First Unified-CXM
                  </p>
                  {OUTCOMES.map((o, i) => (
                    <p key={i} style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", margin: i < OUTCOMES.length - 1 ? "0 0 22px" : 0, lineHeight: 1.4 }}>
                      <span style={{ fontWeight: 700, color: "#FFFFFF" }}>{o.bold}</span>
                      {o.rest}
                    </p>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "10px 0", textAlign: "center", marginTop: "auto" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.4)", margin: 0, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  GOVERNANCE &nbsp;·&nbsp; AUTOMATION &nbsp;·&nbsp; WORKFLOW
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
