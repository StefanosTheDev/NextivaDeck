"use client";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

export interface CompetitorComparisonData {
  competitorName: string;
  competitorLogo: string;
  quadrant: string;
  rows: {
    dimension: string;
    icon: LucideIcon;
    competitor: string[];
    nextiva: string[];
  }[];
  winLine: string;
}

export default function CompetitorComparisonSlide({
  slideNumber = 0,
  competitorName,
  competitorLogo,
  quadrant,
  rows,
  winLine,
}: CompetitorComparisonData & { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 100px 0", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#7EB3E8",
            margin: "0 0 10px",
          }}
        >
          COMPETITIVE LANDSCAPE — {quadrant.toUpperCase()}
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {competitorName} versus Nextiva
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "28px 100px 0",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr 1fr",
            gap: 16,
            alignItems: "center",
            paddingBottom: 8,
            borderBottom: "1px solid rgba(126,179,232,0.2)",
          }}
        >
          <div />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.92)",
              borderRadius: 10,
              padding: "10px 20px",
              minHeight: 52,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={competitorLogo}
              alt={competitorName}
              style={{ maxHeight: 30, maxWidth: 180, objectFit: "contain" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at 30% 30%, #3d7cc9 0%, #1f4a8c 60%, #0f2c59 100%)",
              border: "1px solid rgba(126,179,232,0.4)",
              borderRadius: 10,
              padding: "10px 20px",
              minHeight: 52,
              boxShadow: "0 0 0 3px rgba(15,44,89,0.4)",
            }}
          >
            <span
              className="font-heading"
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.01em",
              }}
            >
              Nextiva
            </span>
          </div>
        </div>

        {rows.map((row, i) => (
          <motion.div
            key={row.dimension}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 + i * 0.07 }}
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr 1fr",
              gap: 16,
              alignItems: "stretch",
            }}
          >
            <div
              className="font-heading"
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#7EB3E8",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "rgba(40,96,178,0.14)",
                  border: "1px solid rgba(40,96,178,0.32)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <row.icon size={20} color="#7EB3E8" strokeWidth={1.75} />
              </div>
              <span>{row.dimension}</span>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "14px 20px",
              }}
            >
              <ul
                style={{
                  margin: 0,
                  padding: "0 0 0 18px",
                  listStyle: "disc",
                }}
              >
                {row.competitor.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.45,
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: 4,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: "rgba(40,96,178,0.12)",
                border: "1px solid rgba(40,96,178,0.35)",
                borderLeft: "3px solid #7EB3E8",
                borderRadius: 10,
                padding: "14px 20px",
              }}
            >
              <ul
                style={{
                  margin: 0,
                  padding: "0 0 0 18px",
                  listStyle: "disc",
                }}
              >
                {row.nextiva.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.45,
                      color: "#FFFFFF",
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ padding: "18px 100px 10px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.14)",
            border: "1px solid rgba(40,96,178,0.3)",
            borderRadius: 14,
            padding: "16px 32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 17,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>
              Nextiva wins when:
            </span>{" "}
            {winLine}
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
