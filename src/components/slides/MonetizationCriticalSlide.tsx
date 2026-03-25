"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { TrendingUp, Zap, Target, ChevronRight, RefreshCw } from "lucide-react";

const ACCENT = "#7EB3E8";
const GLASS = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.08)";

const expansionItems = [
  { icon: Zap, label: "Per interaction pricing", desc: "Every conversation is a revenue event" },
  { icon: Target, label: "Per resolution pricing", desc: "Every resolution is measurable value" },
  { icon: TrendingUp, label: "Per outcome pricing", desc: "Every outcome is monetizable" },
];

const foundationItems = [
  { icon: RefreshCw, label: "Subscription & Platform Fee", desc: "Recurring, high-margin base" },
];

export default function MonetizationCriticalSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
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
          background:
            "radial-gradient(circle, rgba(40,96,178,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "48px 100px 0",
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
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "12px 0 0", lineHeight: 1.5 }}>
          We capture value as it happens — growth scales with interactions &amp; outcomes.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 80px 0",
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 24,
            width: "100%",
          }}
        >
          {/* Left group: Foundation + Expansion stacked vertically */}
          <div
            style={{
              flex: 6,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Foundation */}
            <div
              style={{
                background: GLASS,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "24px 28px 20px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT, margin: 0 }}>01</p>
                <h2 className="font-heading" style={{ fontSize: 32, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>Foundation</h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {foundationItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: 16,
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12, padding: "14px 20px",
                    }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 12,
                        background: "rgba(40,96,178,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <Icon size={22} color={ACCENT} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>{item.label}</p>
                        {"desc" in item && item.desc && (
                          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: "3px 0 0", lineHeight: 1.3 }}>{item.desc}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Expansion */}
            <div
              style={{
                background: GLASS,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "24px 28px 20px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: ACCENT,
                    margin: 0,
                  }}
                >
                  02
                </p>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 32,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Expansion
                </h2>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  flex: 1,
                  justifyContent: "center",
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
                        gap: 16,
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 12,
                        padding: "16px 20px",
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: "rgba(40,96,178,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon
                          size={22}
                          color={ACCENT}
                          strokeWidth={1.75}
                        />
                      </div>
                      <div>
                        <p style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>
                          {item.label}
                        </p>
                        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: "3px 0 0", lineHeight: 1.3 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Arrow connector */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "rgba(40,96,178,0.15)",
                border: "1px solid rgba(40,96,178,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 24px rgba(40,96,178,0.12)",
              }}
            >
              <ChevronRight size={28} color={ACCENT} strokeWidth={2} />
            </div>
          </div>

          {/* Result hero card */}
          <div
            style={{
              flex: 4,
              background:
                "linear-gradient(135deg, rgba(40,96,178,0.1) 0%, rgba(40,96,178,0.04) 100%)",
              border: "2px solid rgba(40,96,178,0.35)",
              borderRadius: 16,
              padding: "36px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow:
                "0 8px 48px rgba(40,96,178,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 300,
                height: 200,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(126,179,232,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: ACCENT,
                margin: "0 0 16px",
                position: "relative",
              }}
            >
              RESULT
            </p>

            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 4px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                position: "relative",
              }}
            >
              Same customer
            </p>

            <p
              className="font-heading"
              style={{
                fontSize: 80,
                fontWeight: 700,
                color: ACCENT,
                margin: "0 0 4px",
                lineHeight: 1.0,
                position: "relative",
              }}
            >
              2&ndash;3x
            </p>

            <p
              className="font-heading"
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#FFFFFF",
                margin: "0 0 20px",
                lineHeight: 1.2,
                position: "relative",
              }}
            >
              revenue potential
            </p>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: 20,
                position: "relative",
              }}
            >
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.6 }}>
                AI increases throughput → directly increases revenue.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", margin: "8px 0 0", lineHeight: 1.5 }}>
                Growth is no longer tied to seats — it scales with interactions and outcomes.
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
