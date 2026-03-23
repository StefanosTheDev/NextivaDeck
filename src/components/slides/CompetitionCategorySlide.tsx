"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Building2, Phone, Puzzle } from "lucide-react";

const ACCENT = "#7EB3E8";

const competitors = [
  {
    icon: Building2,
    segment: "Enterprise CCaaS",
    players: "NICE, Genesys",
    weakness: "Too complex, too expensive",
  },
  {
    icon: Phone,
    segment: "UCaaS players",
    players: "RingCentral, Zoom",
    weakness: "Not AI-native, limited CX depth",
  },
  {
    icon: Puzzle,
    segment: "Point solutions",
    players: "Fragmented vendors",
    weakness: "Fragmented, not unified",
  },
];

export default function CompetitionCategorySlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          COMPETITION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          No one owns this category
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "48px 100px 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          alignContent: "center",
        }}
      >
        {competitors.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.article
              key={c.segment}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Icon size={24} color="rgba(255,255,255,0.4)" strokeWidth={1.75} />
              </div>

              <h2
                className="font-heading"
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "0 0 6px",
                  lineHeight: 1.25,
                }}
              >
                {c.segment}
              </h2>

              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.35)",
                  margin: "0 0 20px",
                  lineHeight: 1.4,
                }}
              >
                {c.players}
              </p>

              <div
                style={{
                  background: "rgba(224,126,126,0.08)",
                  border: "1px solid rgba(224,126,126,0.15)",
                  borderRadius: 10,
                  padding: "14px 18px",
                  marginTop: "auto",
                }}
              >
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#E07E7E",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {c.weakness}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ padding: "0 100px 12px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.08)",
            border: "2px solid rgba(40,96,178,0.3)",
            borderRadius: 14,
            padding: "24px 40px",
            textAlign: "center",
            boxShadow: "0 4px 24px rgba(40,96,178,0.1)",
          }}
        >
          <p
            style={{
              fontSize: 22,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            Nextiva is the only{" "}
            <span style={{ fontWeight: 700, color: ACCENT }}>
              unified platform for the massive middle.
            </span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
