"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { TrendingUp, Zap, Target } from "lucide-react";

const ACCENT = "#7EB3E8";
const GLASS = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.08)";

const expansionItems = [
  { icon: Zap, label: "Per interaction pricing" },
  { icon: Target, label: "Per resolution pricing" },
  { icon: TrendingUp, label: "Per outcome pricing" },
];

export default function MonetizationCriticalSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1200,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,96,178,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "60px 100px 0",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          MONETIZATION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "12px 0 0",
            lineHeight: 1.15,
          }}
        >
          From SaaS to scalable, usage-driven economics
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          gap: 20,
          padding: "36px 80px 0",
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        {/* Foundation */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              background: GLASS,
              border: `1px solid ${BORDER}`,
              borderRadius: 14,
              padding: "28px 28px 24px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: ACCENT,
                margin: "0 0 4px",
              }}
            >
              01
            </p>
            <h2
              className="font-heading"
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: "#FFFFFF",
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}
            >
              Foundation
            </h2>

            <div
              style={{
                background: "rgba(40,96,178,0.08)",
                border: "1px solid rgba(40,96,178,0.2)",
                borderRadius: 12,
                padding: "24px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Subscription revenue
              </p>
              <p
                style={{
                  fontSize: 20,
                  color: "rgba(255,255,255,0.6)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                High margin, recurring base
              </p>
            </div>
          </div>
        </div>

        {/* Expansion */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              background: GLASS,
              border: `1px solid ${BORDER}`,
              borderRadius: 14,
              padding: "28px 28px 24px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: ACCENT,
                margin: "0 0 4px",
              }}
            >
              02
            </p>
            <h2
              className="font-heading"
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: "#FFFFFF",
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}
            >
              Expansion
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                flex: 1,
              }}
            >
              {expansionItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      padding: "18px 20px",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "rgba(40,96,178,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color={ACCENT} strokeWidth={1.75} />
                    </div>
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: "#FFFFFF",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Result */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              background: "rgba(40,96,178,0.06)",
              border: "2px solid rgba(40,96,178,0.25)",
              borderRadius: 14,
              padding: "28px 28px 24px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 6px 32px rgba(40,96,178,0.08)",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: ACCENT,
                margin: "0 0 4px",
              }}
            >
              RESULT
            </p>
            <h2
              className="font-heading"
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: "#FFFFFF",
                margin: "0 0 24px",
                lineHeight: 1.2,
              }}
            >
              Same customer &mdash;{" "}
              <span style={{ color: ACCENT }}>2&ndash;3x revenue potential</span>
            </h2>

            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: 22,
                  color: "rgba(255,255,255,0.7)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Revenue scales with{" "}
                <span style={{ fontWeight: 700, color: "#FFFFFF" }}>customer success</span>, not
                seats.
              </p>
            </div>
          </div>
        </div>
      </motion.main>

      <div style={{ height: 16, flexShrink: 0 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
