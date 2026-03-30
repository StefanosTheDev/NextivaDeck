"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Users, MessageSquare, Landmark, DollarSign } from "lucide-react";

const heroes = [
  { archetype: "PIONEERS SUCH AS", name: "Jeni's Ice Cream", photo: "/images/customers/customer-jenis.png" },
  { archetype: "INDEPENDENT LIKE", name: "Savannah Bananas", photo: "/images/customers/customer-savannah-bananas.png" },
  { archetype: "INNOVATIVE LIKE", name: "Erewhon", photo: "/images/customers/customer-erewhon.png" },
  { archetype: "UNDERDOGS LIKE", name: "Shelby", photo: "/images/customers/customer-shelby.png" },
  { archetype: "GRINDERS SUCH AS", name: "Texas Roadhouse", photo: "/images/customers/customer-texas-roadhouse.png" },
];

const stats = [
  { icon: Users, stat: "93K+", label: "Businesses served", desc: "and growing" },
  { icon: MessageSquare, stat: "1B+", label: "Interactions per year", desc: "across every channel" },
  { icon: Landmark, stat: "~1M", label: "Employees empowered", desc: "on the platform every day" },
  { icon: DollarSign, stat: "~$300B", label: "Combined customer revenue", desc: "in combined economic output" },
];

export default function WhoWeServeCopySlide({ slideNumber = 5 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 25%, rgba(15,44,89,0.50) 0%, rgba(6,26,55,0.75) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          WHO WE SERVE
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          Great technology isn&apos;t just for the Fortune 500.
        </h1>
        <p style={{ fontSize: 24, color: "rgba(255,255,255,0.55)", margin: "14px 0 0", fontWeight: 400 }}>
          Enterprise-grade CX without enterprise complexity.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ display: "flex", gap: 16, padding: "40px 100px 0", justifyContent: "center" }}
      >
        {heroes.map((h) => (
          <div key={h.archetype} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", height: 200, borderRadius: 12, overflow: "hidden" }}>
              <img src={h.photo} alt={h.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#CCC7C3", margin: "14px 0 2px", textAlign: "center" }}>
              {h.archetype}
            </p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", margin: 0, textAlign: "center" }}>
              {h.name}
            </p>
          </div>
        ))}
      </motion.div>

      <main style={{ flex: 1, padding: "24px 100px 0", display: "flex", gap: 20, alignItems: "center" }}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.label}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "32px 28px" }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon size={20} color="#CCC7C3" strokeWidth={1.75} />
              </div>
              <h2 className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#CCC7C3", margin: 0, lineHeight: 1.1 }}>{s.stat}</h2>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "8px 0 0" }}>{s.label}</p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>{s.desc}</p>
            </motion.article>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
