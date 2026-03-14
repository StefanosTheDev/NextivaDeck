"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Database, Unplug, EyeOff } from "lucide-react";

const problems = [
  { icon: Database, headline: "Siloed data.", punch: "Truth lives in a dozen places." },
  { icon: Unplug, headline: "Dislocated tools.", punch: "Every tool is an island." },
  { icon: EyeOff, headline: "Lack of context.", punch: "Every conversation starts cold." },
];

export default function ProblemSlide({ slideNumber = 8 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ display: "flex", flexDirection: "row", padding: 0 }}>
      {/* Left cream panel */}
      <div style={{
        width: "42%",
        background: "#FEFAF5",
        padding: "80px 56px 40px 100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#2860B2",
            marginBottom: 20,
          }}
        >
          THE PROBLEM
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading"
          style={{ fontSize: 62, fontWeight: 500, color: "#1A447C", lineHeight: 1.12, margin: 0 }}
        >
          The CX problem is amplified in the AI&nbsp;era.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ width: 56, height: 3, background: "#2860B2", margin: "36px 0 0", borderRadius: 2, transformOrigin: "left" }}
        />
      </div>

      {/* Right dark panel */}
      <div style={{
        width: "58%",
        background: "radial-gradient(ellipse 90% 80% at 60% 50%, rgba(15,44,89,0.5) 0%, rgba(6,26,55,0.75) 45%, #000208 100%)",
        padding: "80px 80px 40px 72px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 44,
        position: "relative",
        overflow: "hidden",
      }}>
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.headline}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              style={{ position: "relative", zIndex: 1, display: "flex", gap: 24, alignItems: "flex-start" }}
            >
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "rgba(40,96,178,0.15)",
                border: "1px solid rgba(40,96,178,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon size={26} color="#7EB3E8" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="font-heading" style={{ fontSize: 36, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
                  {p.headline}
                </h2>
                <p style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", margin: "8px 0 0", lineHeight: 1.5, fontStyle: "italic" }}>
                  {p.punch}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <SlideFooter slideNumber={slideNumber} variant="dark" />
      </div>
    </div>
  );
}
