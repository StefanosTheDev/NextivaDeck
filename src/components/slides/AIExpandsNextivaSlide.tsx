"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Layers, TrendingUp, DollarSign, Shield } from "lucide-react";

const ACCENT = "#7EB3E8";

const items = [
  { icon: Layers, word: "Embedded", description: "across the entire platform" },
  { icon: TrendingUp, word: "Compounding", description: "more interactions drive more usage" },
  { icon: DollarSign, word: "Monetizable", description: "enables new pricing models" },
  { icon: Shield, word: "Durable", description: "switching costs deepen over time" },
];

export default function AIExpandsNextivaSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "0 100px",
          gap: 80,
        }}
      >
        {/* Left column */}
        <div
          style={{
            flex: "0 0 42%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#CCC7C3",
              margin: 0,
            }}
          >
            AI & NEXTIVA
          </motion.p>

          <motion.h1
            className="font-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: 52,
              fontWeight: 500,
              color: "#FFFFFF",
              margin: "28px 0 0",
              lineHeight: 1.18,
            }}
          >
            AI expands Nextiva &mdash;
            <br />
            <span style={{ color: ACCENT }}>it does not disrupt it.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              width: 48,
              height: 3,
              background: "#2860B2",
              margin: "40px 0",
              borderRadius: 2,
              transformOrigin: "left",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.45)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Growth scales with interactions, not seats.
          </motion.p>
        </div>

        {/* Right column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "3px solid #2860B2",
                  borderRadius: "0 14px 14px 0",
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color={ACCENT} strokeWidth={1.75} />
                </div>

                <div>
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 28,
                      fontWeight: 600,
                      color: ACCENT,
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.word}
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      color: "rgba(255,255,255,0.55)",
                      margin: "6px 0 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
