"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const cards = [
  {
    number: 1,
    title: "True Omni-Channel\nCommunications Engine",
    gradient: "linear-gradient(135deg, rgba(40,96,178,0.75) 0%, rgba(40,96,178,0.45) 100%)",
  },
  {
    number: 2,
    title: "Unified Data\nArchitecture powering\nAgentic AI",
    gradient: "linear-gradient(135deg, rgba(40,96,178,0.6) 0%, rgba(40,96,178,0.35) 100%)",
  },
  {
    number: 3,
    title: "Unified Front-and\nBack Office across\nCustomer-Facing Functions",
    gradient: "linear-gradient(135deg, rgba(40,96,178,0.5) 0%, rgba(40,96,178,0.25) 100%)",
  },
];

const advantages = [
  { title: "Build Once.\nDeploy Across\nChannels." },
  { title: "Unify Journeys\nacross Functions" },
  { title: "Seamlessly\nSwitch Channels" },
  { title: "Customer 360" },
];

const dataModelItems = [
  "Unstructured Data (All customer interactions)",
  "Structured Data (CRM, ERP, Billing System Records)",
  "3rd Party Data (Public Data such as Social & Review)",
];

export default function UnifiedDataModelSlide({ slideNumber = 20 }: { slideNumber?: number }) {
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
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          PLATFORM ARCHITECTURE
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          Unified Data & Platform Model Advantages
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "24px 100px 0", display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}
      >
        {/* Three numbered cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(40,96,178,0.3)",
                display: "flex", flexDirection: "column",
              }}
            >
              <div style={{
                background: card.gradient,
                padding: "16px 0",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span className="font-heading" style={{ fontSize: 40, fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}>
                  {card.number}
                </span>
              </div>
              <div style={{
                background: "rgba(255,255,255,0.04)",
                padding: "20px 20px 24px",
                flex: 1,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <p style={{
                  fontSize: 18, fontWeight: 600, color: "#FFFFFF",
                  margin: 0, textAlign: "center", lineHeight: 1.4, whiteSpace: "pre-line",
                }}>
                  {card.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Four advantage pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              style={{
                background: "rgba(40,96,178,0.1)",
                border: "1px solid rgba(40,96,178,0.25)",
                borderRadius: 12,
                padding: "22px 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                minHeight: 100,
              }}
            >
              <p className="font-heading" style={{
                fontSize: 20, fontWeight: 600, color: "#FFFFFF",
                margin: 0, textAlign: "center", lineHeight: 1.3, whiteSpace: "pre-line",
              }}>
                {adv.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Unified Data Model bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            background: "linear-gradient(135deg, rgba(40,96,178,0.15) 0%, rgba(40,96,178,0.08) 100%)",
            border: "1px solid rgba(40,96,178,0.25)",
            borderRadius: 14,
            padding: "22px 40px 26px",
          }}
        >
          <p className="font-heading" style={{
            fontSize: 18, fontWeight: 700, color: "#7EB3E8",
            margin: "0 0 14px", textAlign: "center", letterSpacing: "0.05em",
          }}>
            Unified Data Model
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            {dataModelItems.map((item) => (
              <div key={item} style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "14px 20px",
                fontSize: 14, fontWeight: 500, color: "#FFFFFF",
                textAlign: "center",
              }}>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
