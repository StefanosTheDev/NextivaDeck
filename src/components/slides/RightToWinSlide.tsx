"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Lightbulb, Users, Heart } from "lucide-react";

const moats = [
  {
    icon: Lightbulb,
    title: "We anticipate and deliver.",
    line: "Cloud → CX → AI. Three eras of seeing the technology shift ahead and executing on it.",
  },
  {
    icon: Users,
    title: "93K loyal businesses.",
    line: "Sticky, diversified, and the installed base to distribute our next generation of products into.",
  },
  {
    icon: Heart,
    title: "Making the complex simple.",
    line: "Amazing Service™ is our competitive weapon — why customers come and why they stay.",
  },
];

export default function RightToWinSlide({ slideNumber = 14 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 20, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          RIGHT TO WIN
        </p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15 }}>
          Our competitive advantages.
        </h1>
      </motion.header>

      <main style={{ flex: 1, padding: "56px 100px 0", display: "flex", gap: 28, alignItems: "center" }}>
        {moats.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.article
              key={m.title}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "3px solid #2860B2",
                borderRadius: 16,
                padding: "44px 36px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "rgba(40,96,178,0.15)", border: "1px solid rgba(40,96,178,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28,
              }}>
                <Icon size={28} color="#7EB3E8" strokeWidth={1.75} />
              </div>

              <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 500, color: "#FFFFFF", margin: "0 0 16px", lineHeight: 1.25, whiteSpace: "nowrap" }}>
                {m.title}
              </h2>

              <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, margin: 0 }}>
                {m.line}
              </p>
            </motion.article>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
