"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const cards = [
  {
    label: "Get in Touch",
    stat: "nextiva.com",
    detail: "(800) 799-0600",
  },
  {
    label: "Headquarters",
    stat: "Scottsdale, AZ",
    detail: "Founded 2006 · Founder-led",
  },
  {
    label: "Next Steps",
    stat: "Let's talk",
    detail: "We'd love to continue the conversation",
  },
];

export default function ClosingCopySlide({ slideNumber = 37 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>NEXTIVA</p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          Thank you.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", gap: 32, padding: "48px 100px", alignItems: "center" }}
      >
        {cards.map((c, i) => (
          <motion.article
            key={c.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            style={{
              flex: 1, padding: "72px 48px", textAlign: "center",
              display: "flex", flexDirection: "column", justifyContent: "center",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "3px solid #2860B2", borderRadius: 16,
            }}
          >
            <p style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#7EB3E8", margin: 0 }}>
              {c.label}
            </p>
            <p className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: "24px 0" }}>
              {c.stat}
            </p>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>
              {c.detail}
            </p>
          </motion.article>
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
