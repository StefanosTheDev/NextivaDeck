"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Building2, Search, UserCheck } from "lucide-react";

const paths = [
  {
    icon: Building2,
    title: "Existing Customers",
    desc: "Already use Nextiva phone — trust the brand, ready for AI",
    color: "#7BB3E0",
    quotes: [
      {
        text: "I tried other companies and yours sounds really more like upbeat.",
        industry: "Tax Preparation",
        score: 8,
      },
      {
        text: "I already hired the AI assistance.",
        industry: "Business Consulting",
        score: 9,
      },
    ],
  },
  {
    icon: Search,
    title: "Self-Researchers",
    desc: "Did homework before the call — arrived with conviction",
    color: "#6EE7B7",
    quotes: [
      {
        text: "I know what you guys do. You\u2019re awesome. I need your service.",
        industry: "Office Management",
        score: 9,
      },
      {
        text: "We\u2019re just gonna move forward with it.",
        industry: "Technology Services",
        score: 9,
      },
    ],
  },
  {
    icon: UserCheck,
    title: "Trial / Sign-Up",
    desc: "Already onboarding — engaged through product experience",
    color: "#E8B84D",
    quotes: [
      {
        text: "I just need to go in and sign the contract thing. But we\u2019re good.",
        industry: "Laundromat Services",
        score: 9,
      },
      {
        text: "I was very excited about the program, but I just don\u2019t have time to mess with it.",
        industry: "Consulting",
        score: 5,
      },
    ],
  },
];

export default function ThreePathsPreTrustSlide({
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
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          Brand Trust Analysis
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Three sources of incumbent AI trust.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            margin: "10px auto 0",
            maxWidth: 900,
            lineHeight: 1.5,
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          Relatively few customers arrive with high awareness but with high
          awareness comes high trust.
        </p>
      </motion.header>

      {/* Funnel badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "16px 100px 0",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 24,
            background:
              "linear-gradient(135deg, rgba(123,179,224,0.15), rgba(110,231,183,0.15))",
            border: "1px solid rgba(123,179,224,0.3)",
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#FFFFFF",
              fontFamily: "Georgia, serif",
            }}
          >
            &lt;2%
          </span>
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
            of all customer sales interactions
          </span>
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.3)" }}>
            →
          </span>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#6EE7B7" }}>
            70% high-trust
          </span>
        </div>
      </motion.div>

      {/* Three path columns */}
      <main
        style={{
          flex: 1,
          padding: "16px 100px 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {paths.map((path, i) => {
          const Icon = path.icon;
          return (
            <motion.article
              key={path.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "24px 24px 20px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: path.color,
                }}
              />

              {/* Icon + Title */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${path.color}15`,
                    border: `1.5px solid ${path.color}40`,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={path.color} strokeWidth={2} />
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {path.title}
                  </h2>
                </div>
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  margin: "0 0 16px",
                  lineHeight: 1.4,
                }}
              >
                {path.desc}
              </p>

              {/* Quotes */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  flex: 1,
                }}
              >
                {path.quotes.map((q) => (
                  <div
                    key={q.text}
                    style={{
                      borderLeft: `3px solid ${path.color}`,
                      paddingLeft: 14,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontStyle: "italic",
                        color: "rgba(255,255,255,0.8)",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      &ldquo;{q.text}&rdquo;
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.35)",
                        margin: "4px 0 0",
                        lineHeight: 1.3,
                      }}
                    >
                      {q.industry} · Score {q.score}/10
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </main>

      {/* Bottom callout */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        style={{ padding: "14px 100px 20px" }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "16px 36px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: 17,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.5,
              textAlign: "center",
            }}
          >
            <span style={{ fontWeight: 700, color: "#7BB3E0" }}>
              None credit a specific marketing channel.
            </span>{" "}
            High awareness comes from deeper engagement — not top-of-funnel.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
