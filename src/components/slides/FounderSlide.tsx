"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const bullets = [
  "Founder Mode since day one.",
  "Self-funded to ~$250M ARR.",
  "IPOWER → $1B+ exit",
];

export default function FounderSlide({ slideNumber = 4 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
          style={{ width: "60%", padding: "72px 60px 40px 100px", display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
            TOMAS GORNY
          </p>
          <h1 className="font-heading" style={{ fontSize: 76, fontWeight: 500, color: "#FFFFFF", margin: "16px 0 0", lineHeight: 1.2 }}>
            Repeat founder.<br />
            Proven scaling ability.<br />
            Capital efficiency.
          </h1>

          <ul style={{ margin: "40px 0 0", padding: 0, listStyle: "none" }}>
            {bullets.map((b) => (
              <li key={b} style={{ fontSize: 28, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 12, paddingLeft: 20, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.3)" }}>&rsaquo;</span>
                {b}
              </li>
            ))}
          </ul>

          <div style={{ margin: "40px 0 0", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "20px 32px" }}>
            <p style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.5 }}>
              <span style={{ color: "#CCC7C3" }}>Superpower</span> = product vision + market timing + patience
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ width: "40%", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <img
            src="/images/headshot-tg-office.jpeg"
            alt="Tomas Gorny"
            style={{
              width: 460,
              height: 560,
              borderRadius: 16,
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.1)",
              filter: "grayscale(100%)",
            }}
          />
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
