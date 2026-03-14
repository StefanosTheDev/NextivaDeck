"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Heart, Landmark, ShoppingCart, Home } from "lucide-react";

const cases = [
  {
    icon: Heart,
    industry: "Healthcare",
    description: "Patient intake, reminders, refills — handled by AI agents with HIPAA compliance.",
    stat1: "16%", stat1Label: "OUR CUSTOMER BASE",
    stat2: "$12.1T", stat2Label: "GLOBAL MARKET",
    pills: ["85% auto-resolved", "3× faster intake"],
    photo: "/images/customers/customer-rehab.jpg",
    company: "Rising Hope Therapy",
    live: "XBert AI go live February 2025, Newark, Delaware",
  },
  {
    icon: Landmark,
    industry: "Financial Services",
    description: "Fraud alerts, account inquiries, loan updates — 70% resolved without human touch.",
    stat1: "12%", stat1Label: "OUR CUSTOMER BASE",
    stat2: "$26.5T", stat2Label: "GLOBAL AUM",
    pills: ["70% autonomous", "24/7 coverage"],
    photo: "/images/customers/customer-credit-restructuring-2.png",
    company: "Credit Restructuring Solutions",
    live: "XBert AI go live January 2026, El Paso, TX",
  },
  {
    icon: ShoppingCart,
    industry: "Retail & E-Commerce",
    description: "Order tracking, returns, recommendations — AI agents drive upsell while resolving issues.",
    stat1: "10%", stat1Label: "OUR CUSTOMER BASE",
    stat2: "$6.3T", stat2Label: "US E-COMMERCE BY 2029",
    pills: ["12% upsell lift", "60% faster returns"],
    photo: "/images/customers/customer-six3-tile-2.jpg",
    company: "Six3 Tile",
    live: "XBert AI go live December 2025, Lancaster, SC",
  },
  {
    icon: Home,
    industry: "Home & Commercial Services",
    description: "Job inquiries, scheduling, field coordination — AI agents keep every customer touchpoint on track.",
    stat1: "22%", stat1Label: "OUR CUSTOMER BASE",
    stat2: "6.2%", stat2Label: "CAGR THROUGH 2030",
    pills: ["2.5× faster responses", "Zero missed follow-ups"],
    photo: "/images/customers/customer-keystone-fence-2.jpg",
    company: "Keystone Fence Supply",
    live: "XBert AI go live January 2025, Schaefferstown, PA",
  },
];

export default function AiUseCasesSlide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream" style={{ justifyContent: "space-between" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15,
          letterSpacing: "0.08em", textTransform: "uppercase", color: "#2860B2", margin: "0 0 10px",
        }}>
          INDUSTRY APPLICATIONS
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#1A447C", margin: "0 auto", lineHeight: 1.15 }}>
          XBert brings AI Agents to every Industry.
        </h1>
        <p style={{ fontSize: 18, color: "#6C6967", margin: "10px 0 0", lineHeight: 1.5 }}>
          Purpose-built agentic experiences for the industries that need them most.
        </p>
      </motion.header>

      {/* 2×2 grid */}
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
          padding: "20px 60px 0", alignContent: "center",
        }}
      >
        {cases.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.industry} style={{
              display: "flex", borderRadius: 12, overflow: "hidden",
              background: "#FFFFFF", border: "1px solid #E0DEDA",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              height: 220,
            }}>
              {/* Photo side */}
              <div style={{ width: 200, flexShrink: 0, position: "relative", overflow: "hidden" }}>
                <img src={c.photo} alt={c.company} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
                  padding: "24px 12px 10px",
                }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#FFFFFF", margin: 0, textDecoration: "underline", lineHeight: 1.3 }}>
                    {c.company}
                  </p>
                  <p style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", margin: "2px 0 0", lineHeight: 1.3 }}>
                    {c.live}
                  </p>
                </div>
              </div>

              {/* Content side */}
              <div style={{ flex: 1, padding: "16px 20px 14px", display: "flex", flexDirection: "column", borderTop: "3px solid #2860B2" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Icon size={18} color="#2860B2" strokeWidth={2} />
                  <span className="font-heading" style={{ fontSize: 20, fontWeight: 700, color: "#1A447C" }}>{c.industry}</span>
                </div>
                <p style={{ fontSize: 13, color: "#4A4846", lineHeight: 1.45, margin: "0 0 12px" }}>
                  {c.description}
                </p>

                {/* Stats row */}
                <div style={{ display: "flex", gap: 24, marginBottom: 12 }}>
                  <div>
                    <p className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#1A447C", margin: 0 }}>{c.stat1}</p>
                    <p style={{ fontSize: 9, fontWeight: 700, color: "#6C6967", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>{c.stat1Label}</p>
                  </div>
                  <div>
                    <p className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#1A447C", margin: 0 }}>{c.stat2}</p>
                    <p style={{ fontSize: 9, fontWeight: 700, color: "#6C6967", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>{c.stat2Label}</p>
                  </div>
                </div>

                {/* Pill badges */}
                <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                  {c.pills.map((pill) => (
                    <span key={pill} style={{
                      padding: "4px 12px", borderRadius: 16,
                      border: "1px solid #E0DEDA", background: "#FFFFFF",
                      fontSize: 11, fontWeight: 600, color: "#4A4846",
                    }}>
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
