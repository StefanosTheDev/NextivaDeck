"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Phone, MessageCircle, Mail, Video, Flag, Users, Database, FileText, Settings, BookOpen, Brain, Zap, Workflow, Target, Activity, CheckCircle } from "lucide-react";

const leftIcons = [Phone, MessageCircle, Mail, Video, Flag];
const rightIcons = [Users, Database, FileText, Settings, BookOpen];
const bottomIcons = [Zap, Workflow, Target, Activity, CheckCircle];

const outcomes = [
  "Better experiences",
  "Faster resolution",
  "Smarter automation",
  "AI that improves with every interaction",
];

const DIAMOND = { w: 880, h: 390 };
const AI = { x: 440, y: 70 };
const LEFT = { x: 130, y: 195 };
const RIGHT = { x: 750, y: 195 };
const BOTTOM = { x: 440, y: 340 };

export default function SolutionSlide({ slideNumber = 9 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{
          fontWeight: 700, fontSize: 18, letterSpacing: "0.05em",
          textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px",
        }}>
          OUR SOLUTION
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: "0 auto", lineHeight: 1.18, maxWidth: 900 }}>
          Delivering business outcomes at moments of interaction.
        </h1>
      </motion.header>

      {/* Diamond graphic */}
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px" }}
      >
        <div style={{ position: "relative", width: DIAMOND.w, height: DIAMOND.h, transform: "scale(1.15)", transformOrigin: "center center" }}>
          {/* SVG connecting lines */}
          <svg
            width={DIAMOND.w} height={DIAMOND.h}
            viewBox={`0 0 ${DIAMOND.w} ${DIAMOND.h}`}
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          >
            <defs>
              <marker id="arrowThin" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#7EB3E8" stroke="none" />
              </marker>
              <marker id="arrowThick" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,0 L10,4 L0,8" fill="#7EB3E8" stroke="none" />
              </marker>
            </defs>

            {/* Customer Conversations → AI (thin dotted, arrow at AI end) */}
            <line
              x1={LEFT.x + 130} y1={LEFT.y - 20}
              x2={AI.x - 70} y2={AI.y + 55}
              stroke="#7EB3E8" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5"
              markerEnd="url(#arrowThin)"
            />

            {/* Context from Siloed Systems → AI (thin dotted, arrow at AI end) */}
            <line
              x1={RIGHT.x - 130} y1={RIGHT.y - 20}
              x2={AI.x + 70} y2={AI.y + 55}
              stroke="#7EB3E8" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5"
              markerEnd="url(#arrowThin)"
            />

            {/* AI → Real-time Actions (thick solid, arrow at bottom end) */}
            <line
              x1={AI.x} y1={AI.y + 100}
              x2={BOTTOM.x} y2={BOTTOM.y - 55}
              stroke="#7EB3E8" strokeWidth="2.5" opacity="0.8"
              markerEnd="url(#arrowThick)"
            />
          </svg>

          {/* AI circle — top center */}
          <div style={{
            position: "absolute",
            top: AI.y - 80, left: AI.x - 90,
            width: 180, height: 180,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: 180, height: 180, borderRadius: "50%",
              background: "rgba(40,96,178,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: 144, height: 144, borderRadius: "50%",
                background: "rgba(40,96,178,0.2)",
                border: "1px solid rgba(126,179,232,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: 108, height: 108, borderRadius: "50%",
                  background: "radial-gradient(circle at 50% 40%, #4D9AE8 0%, #2860B2 100%)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  color: "#FFFFFF",
                }}>
                  <Brain size={26} color="#FFFFFF" strokeWidth={1.5} style={{ marginBottom: 3 }} />
                  <span style={{ fontSize: 32, fontWeight: 700, lineHeight: 1, letterSpacing: "0.02em" }}>
                    AI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Conversations — left */}
          <div style={{
            position: "absolute",
            top: LEFT.y - 50, left: LEFT.x - 130,
            width: 260, textAlign: "center",
            display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              {leftIcons.map((Icon, i) => (
                <Icon key={i} size={18} color="rgba(255,255,255,0.4)" strokeWidth={1.75} />
              ))}
            </div>
            <h3 className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: "0 0 6px", lineHeight: 1.2 }}>
              Customer Conversations
            </h3>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, margin: 0 }}>
              Current and historical conversations, intent and behavior.
            </p>
          </div>

          {/* Context from Siloed Systems — right */}
          <div style={{
            position: "absolute",
            top: RIGHT.y - 50, left: RIGHT.x - 130,
            width: 260, textAlign: "center",
            display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              {rightIcons.map((Icon, i) => (
                <Icon key={i} size={18} color="rgba(255,255,255,0.4)" strokeWidth={1.75} />
              ))}
            </div>
            <h3 className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: "0 0 6px", lineHeight: 1.2 }}>
              Context from Siloed Systems
            </h3>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, margin: 0 }}>
              CRM, transactions, service history, preferences, and workflow data
            </p>
          </div>

          {/* Real-time Actions — bottom center */}
          <div style={{
            position: "absolute",
            top: BOTTOM.y - 40, left: BOTTOM.x - 150,
            width: 300, textAlign: "center",
            display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              {bottomIcons.map((Icon, i) => (
                <Icon key={i} size={18} color="rgba(255,255,255,0.4)" strokeWidth={1.75} />
              ))}
            </div>
            <h3 className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: "0 0 6px", lineHeight: 1.2 }}>
              Real-time Actions
            </h3>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, margin: 0 }}>
              Ability to synthesize and drive workflows based on full context.
            </p>
          </div>
        </div>
      </motion.main>

      {/* Outcomes banner */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
        style={{ padding: "16px 100px 24px", flexShrink: 0 }}
      >
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center", gap: 12,
          padding: "18px 32px", borderRadius: 12,
          background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)",
        }}>
          {outcomes.map((o, i) => (
            <span key={o} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#7EB3E8" }}>{o}</span>
              {i < outcomes.length - 1 && (
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7EB3E8", opacity: 0.3 }} />
              )}
            </span>
          ))}
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
