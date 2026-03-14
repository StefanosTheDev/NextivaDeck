"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Phone, MessageCircle, Mail, Video, Flag, Users, Database, FileText, Settings, BookOpen, Brain } from "lucide-react";

const leftIcons = [Phone, MessageCircle, Mail, Video, Flag];
const rightIcons = [Users, Database, FileText, Settings, BookOpen];

const outcomes = [
  "Better experiences",
  "Faster resolution",
  "Smarter automation",
  "AI that improves with every interaction",
];

export default function SolutionSlide({ slideNumber = 9 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream" style={{ justifyContent: "space-between" }}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: 16, letterSpacing: "0.08em",
          textTransform: "uppercase", color: "#2860B2", margin: "0 0 14px",
        }}>
          OUR SOLUTION
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#1A447C", margin: "0 auto", lineHeight: 1.18, maxWidth: 900 }}>
          Agentic CX that always delivers immediate outcomes.
        </h1>
      </motion.header>

      {/* Pyramid graphic */}
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
        style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 80px" }}
      >
        {/* AI circle — top of pyramid */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 8 }}>
          <div style={{
            width: 200, height: 200, borderRadius: "50%",
            background: "rgba(204,199,195,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: 160, height: 160, borderRadius: "50%",
              background: "#FFFFFF",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: 120, height: 120, borderRadius: "50%",
                background: "radial-gradient(circle at 50% 40%, #2860B2 0%, #1A447C 100%)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                color: "#FFFFFF",
              }}>
                <Brain size={30} color="#FFFFFF" strokeWidth={1.5} style={{ marginBottom: 4 }} />
                <span style={{ fontSize: 36, fontWeight: 700, lineHeight: 1, letterSpacing: "0.02em" }}>
                  AI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting lines — V shape from AI down to two bases */}
        <svg width="500" height="40" viewBox="0 0 500 40" style={{ flexShrink: 0 }}>
          <line x1="250" y1="0" x2="100" y2="38" stroke="#2860B2" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
          <line x1="250" y1="0" x2="400" y2="38" stroke="#2860B2" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
        </svg>

        {/* Two base pillars */}
        <div style={{ display: "flex", gap: 120, justifyContent: "center", alignItems: "flex-start" }}>
          {/* Customer Conversations */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 300 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              {leftIcons.map((Icon, i) => (
                <Icon key={i} size={20} color="#A29E9B" strokeWidth={1.75} />
              ))}
            </div>
            <h3 className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#1A447C", margin: "0 0 8px", lineHeight: 1.2 }}>
              Customer Conversations
            </h3>
            <p style={{ fontSize: 16, color: "#6C6967", lineHeight: 1.5 }}>
              The most recent conversation, intent, and behavior
            </p>
          </div>

          {/* Context from Siloed Systems */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 300 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              {rightIcons.map((Icon, i) => (
                <Icon key={i} size={20} color="#A29E9B" strokeWidth={1.75} />
              ))}
            </div>
            <h3 className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#1A447C", margin: "0 0 8px", lineHeight: 1.2 }}>
              Context from Siloed Systems
            </h3>
            <p style={{ fontSize: 16, color: "#6C6967", lineHeight: 1.5 }}>
              CRM, transactions, service history, preferences, and workflow data
            </p>
          </div>
        </div>
      </motion.main>

      {/* Outcomes banner */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
        style={{ padding: "0 100px 8px", flexShrink: 0 }}
      >
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center", gap: 12,
          padding: "18px 32px", borderRadius: 12,
          background: "rgba(40,96,178,0.06)",
        }}>
          {outcomes.map((o, i) => (
            <span key={o} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#2860B2" }}>{o}</span>
              {i < outcomes.length - 1 && (
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#2860B2", opacity: 0.3 }} />
              )}
            </span>
          ))}
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
