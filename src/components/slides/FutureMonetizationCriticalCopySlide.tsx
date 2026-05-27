"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { TrendingUp, Zap, Target, ChevronRight, RefreshCw } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#7EB3E8";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const BG = "#FFFFFF";

const expansionItems = [
  { icon: Zap, label: "Per interaction pricing", desc: "Every conversation is a revenue event" },
  { icon: Target, label: "Per resolution pricing", desc: "Every resolution is measurable value" },
  { icon: TrendingUp, label: "Per outcome pricing", desc: "Every outcome is monetizable" },
];

const foundationItems = [
  { icon: RefreshCw, label: "Subscription & Platform Fee", desc: "Recurring, high-margin base" },
];

export default function FutureMonetizationCriticalCopySlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: BG,
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
            "radial-gradient(circle, rgba(40,96,178,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "48px 80px 0",
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
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: MUTED,
            margin: "0 0 12px",
          }}
        >
          MONETIZATION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 46,
            fontWeight: 400,
            color: NAVY_DARK,
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          From SaaS to scalable, usage-driven economics.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: BODY,
            margin: "12px 0 0",
            lineHeight: 1.5,
          }}
        >
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
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
                borderRadius: 14,
                padding: "24px 28px 20px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: BLUE,
                    margin: 0,
                  }}
                >
                  01
                </p>
                <h2
                  className="font-heading"
                  style={{ fontSize: 32, fontWeight: 600, color: NAVY_DARK, margin: 0, lineHeight: 1.2 }}
                >
                  Foundation
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {foundationItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        background: "#FFFFFF",
                        border: `1px solid ${CARD_BORDER}`,
                        borderRadius: 12,
                        padding: "14px 20px",
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: "rgba(40,96,178,0.10)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} color={BLUE} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: 20,
                            fontWeight: 600,
                            color: NAVY_DARK,
                            margin: 0,
                            lineHeight: 1.3,
                          }}
                        >
                          {item.label}
                        </p>
                        {"desc" in item && item.desc && (
                          <p
                            style={{
                              fontSize: 15,
                              color: BODY,
                              margin: "3px 0 0",
                              lineHeight: 1.3,
                            }}
                          >
                            {item.desc}
                          </p>
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
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
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
                    color: BLUE,
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
                    color: NAVY_DARK,
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
                        background: "#FFFFFF",
                        border: `1px solid ${CARD_BORDER}`,
                        borderRadius: 12,
                        padding: "16px 20px",
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: "rgba(40,96,178,0.10)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} color={BLUE} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: 20,
                            fontWeight: 600,
                            color: NAVY_DARK,
                            margin: 0,
                            lineHeight: 1.3,
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            fontSize: 15,
                            color: BODY,
                            margin: "3px 0 0",
                            lineHeight: 1.3,
                          }}
                        >
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
                background: "rgba(40,96,178,0.10)",
                border: `1px solid ${BLUE_SOFT}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(40,96,178,0.10)",
              }}
            >
              <ChevronRight size={28} color={BLUE} strokeWidth={2} />
            </div>
          </div>

          {/* Result hero card */}
          <div
            style={{
              flex: 4,
              background:
                "linear-gradient(135deg, rgba(40,96,178,0.08) 0%, rgba(40,96,178,0.02) 100%)",
              border: `2px solid ${BLUE}55`,
              borderRadius: 16,
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow:
                "0 8px 32px rgba(40,96,178,0.10)",
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
                  "radial-gradient(circle, rgba(126,179,232,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: BLUE,
                margin: "0 0 10px",
                position: "relative",
              }}
            >
              RESULT
            </p>

            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: MUTED,
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
                fontSize: 68,
                fontWeight: 700,
                color: BLUE,
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
                color: NAVY_DARK,
                margin: "0 0 14px",
                lineHeight: 1.2,
                position: "relative",
              }}
            >
              revenue potential
            </p>

            <div
              style={{
                borderTop: `1px solid ${CARD_BORDER}`,
                paddingTop: 14,
                position: "relative",
              }}
            >
              <p style={{ fontSize: 17, color: NAVY, margin: 0, lineHeight: 1.6 }}>
                AI increases throughput → directly increases revenue.
              </p>
              <p style={{ fontSize: 15, color: BODY, margin: "8px 0 0", lineHeight: 1.5 }}>
                Growth is no longer tied to seats — it scales with interactions and outcomes.
              </p>
            </div>
          </div>
        </div>
      </motion.main>

      <div style={{ height: 16, flexShrink: 0 }} />
      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
