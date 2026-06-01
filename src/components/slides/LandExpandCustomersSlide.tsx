"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Hammer,
  Car,
  Eye,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const customers: {
  icon: LucideIcon;
  name: string;
  meta: string;
  metrics: { value: string; label: string }[];
  nextUseCases: string[];
}[] = [
  {
    icon: Heart,
    name: "Shasta Health",
    meta: "7 locations · 100 providers",
    metrics: [
      { value: "2 min", label: "avg wait time" },
      { value: "10+", label: "workflows improved" },
    ],
    nextUseCases: [
      "Rx-refill automation via EMR",
      "Outbound appointment reminders",
      "Insurance eligibility at booking",
    ],
  },
  {
    icon: Hammer,
    name: "Foxy Coatings",
    meta: "Reading, PA · $116K TCV",
    metrics: [
      { value: "1.7×", label: "booking-rate lift" },
      { value: "5 min", label: "speed-to-lead" },
    ],
    nextUseCases: [
      "After-hours lead capture (24/7)",
      "Estimate confirmation workflow",
      "Post-install review and upsell",
    ],
  },
  {
    icon: Car,
    name: "Suzuki",
    meta: "72K employees · 192 countries",
    metrics: [
      { value: "1M+", label: "AI interactions / mo" },
      { value: "12%", label: "cost reduction" },
    ],
    nextUseCases: [
      "Product spec and comparison layer",
      "Service appointment scheduling",
      "Safety-recall response automation",
    ],
  },
  {
    icon: Eye,
    name: "AEG Vision",
    meta: "500 locations · 5,000 employees",
    metrics: [
      { value: "40K+", label: "AI interactions / mo" },
      { value: "20%", label: "sales increase" },
    ],
    nextUseCases: [
      "Appointment scheduling at 500 sites",
      "Insurance eligibility verification",
      "Vision-care upsell post-visit",
    ],
  },
];

export default function LandExpandCustomersSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: BG, overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "40px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 14px",
          }}
        >
          Customer use cases
        </p>
        <div
          style={{
            width: 64,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 18px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.14,
            maxWidth: 1400,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Land-and-expand model approach for early customers.
        </h1>
        <p
          style={{
            margin: "16px auto 0",
            fontSize: 22,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 1240,
            lineHeight: 1.45,
            fontWeight: 400,
          }}
        >
          Each deployment begins with a narrow AI use case — with strong
          potential expansion across the platform.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "28px 70px 28px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 20,
          minHeight: 0,
          maxWidth: 1820,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {customers.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 + i * 0.05 }}
              style={{
                padding: "24px 26px",
                borderRadius: 16,
                background:
                  "linear-gradient(165deg, rgba(40,96,178,0.07) 0%, rgba(255,255,255,0.025) 100%)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow:
                  "0 12px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
                display: "grid",
                gridTemplateColumns: "1fr 1.25fr",
                gap: 22,
                minHeight: 0,
              }}
            >
              {/* Left — customer identity & entry metrics */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  paddingRight: 20,
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(126,179,232,0.16)",
                      border: "1px solid rgba(126,179,232,0.4)",
                      color: "#7EB3E8",
                    }}
                  >
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h2
                      className="font-heading"
                      style={{
                        margin: 0,
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1.15,
                      }}
                    >
                      {c.name}
                    </h2>
                    <p
                      style={{
                        margin: "4px 0 0",
                        fontSize: 16,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {c.meta}
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Entry metrics
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      style={{
                        padding: "14px 16px",
                        borderRadius: 12,
                        background: "rgba(0,0,0,0.25)",
                        border: "1px solid rgba(126,179,232,0.22)",
                      }}
                    >
                      <p
                        className="font-heading"
                        style={{
                          margin: 0,
                          fontSize: 34,
                          fontWeight: 700,
                          color: "#FBBF24",
                          lineHeight: 1.05,
                        }}
                      >
                        {m.value}
                      </p>
                      <p
                        style={{
                          margin: "6px 0 0",
                          fontSize: 15,
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.3,
                        }}
                      >
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — next potential use cases */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <ArrowRight size={20} color="#7EB3E8" strokeWidth={2.2} />
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#7EB3E8",
                    }}
                  >
                    Next potential use cases
                  </p>
                </div>
                <ol
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    counterReset: "step",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {c.nextUseCases.map((u, ui) => (
                    <li
                      key={ui}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                        fontSize: 18,
                        lineHeight: 1.45,
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          minWidth: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: "rgba(126,179,232,0.18)",
                          border: "1px solid rgba(126,179,232,0.4)",
                          color: "#7EB3E8",
                          fontSize: 15,
                          fontWeight: 700,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 1,
                        }}
                      >
                        {ui + 1}
                      </span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
