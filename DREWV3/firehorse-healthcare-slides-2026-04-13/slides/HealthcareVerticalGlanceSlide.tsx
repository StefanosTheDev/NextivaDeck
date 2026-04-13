"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Activity } from "lucide-react";
import SlideFooter from "../SlideFooter";

const metrics = [
  {
    stat: "~8,000",
    label: "Healthcare Customers",
    desc: "8.5% of total customer base",
  },
  {
    stat: "~$58M",
    label: "Healthcare Run-Rate ARR",
    desc: "As of FY26",
  },
  {
    stat: "~$8T",
    label: "US Healthcare Spend",
    desc: "Massive addressable market",
  },
];

const customers = [
  {
    name: "Acuity Eyecare Group",
    initials: "AE",
    mrr: "$74K",
    logo: "/logos/acuity-eye.png",
  },
  {
    name: "VieMed / Sleep Mgmt",
    initials: "VM",
    mrr: "$56K",
    logo: null,
  },
  {
    name: "Northeast Health Services",
    initials: "NH",
    mrr: "$50K",
    logo: null,
  },
  {
    name: "HealthPoint",
    initials: "HP",
    mrr: "$46K",
    logo: null,
  },
  {
    name: "Senior Living Communities",
    initials: "SL",
    mrr: "$45K",
    logo: null,
  },
  {
    name: "PSG / HCA",
    initials: "HC",
    mrr: "$45K",
    logo: "/images/industries/logo-hca-healthcare.png",
  },
];

const insights = ["<1% MRR churn", "39% on 36+ month contracts"];

const requirements = [
  {
    icon: Activity,
    title: "Reliable",
    body: "Healthcare will not tolerate downtime. As we go up-market, tolerance rapidly decreases.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Compliance, Security & Privacy",
    body: "Full Health Insurance Portability and Accountability Act posture — per-patient databases, conversational memory, end-to-end safeguards for protected health information.",
  },
  {
    icon: Zap,
    title: "Zero Touch Install",
    body: "Self-serve across every product. If a customer can't do it, we want to know and fix it.",
  },
];

export default function HealthcareVerticalGlanceSlide({
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
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "44px 100px 0", flexShrink: 0, textAlign: "center" }}
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
          Healthcare Vertical
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 46,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Healthcare is 17% of ARR and an area of investment.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            margin: "10px 0 0",
            lineHeight: 1.5,
            whiteSpace: "nowrap",
          }}
        >
          Deep vertical focus with dedicated product and GTM investment.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "18px 100px 0",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          justifyContent: "center",
        }}
      >
        {/* Metric cards row — now 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {metrics.map((m, i) => (
            <motion.article
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "22px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "#7BB3E0",
                }}
              />
              <h2
                className="font-heading"
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {m.stat}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#7EB3E8",
                  margin: "8px 0 0",
                  lineHeight: 1.3,
                }}
              >
                {m.label}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  margin: "3px 0 0",
                  lineHeight: 1.3,
                }}
              >
                {m.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom split: customers (left) + healthcare requirements (right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 1fr",
            gap: 14,
          }}
        >
          {/* Key customers card — left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "18px 24px",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7BB3E0",
                margin: "0 0 14px",
              }}
            >
              Key Customers
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px 14px",
              }}
            >
              {customers.map((c) => (
                <div
                  key={c.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    minWidth: 0,
                  }}
                >
                  {/* Logo circle */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      background: c.logo
                        ? "#FFFFFF"
                        : "linear-gradient(135deg, #7BB3E022, #7BB3E008)",
                      border: c.logo
                        ? "1px solid rgba(255,255,255,0.15)"
                        : "1.5px solid #7BB3E040",
                    }}
                  >
                    {c.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={c.logo}
                        alt={c.name}
                        style={{
                          width: "80%",
                          height: "80%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#7BB3E0",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {c.initials}
                      </span>
                    )}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#FFFFFF",
                        margin: 0,
                        lineHeight: 1.25,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {c.name}
                    </p>
                    <p
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,0.4)",
                        margin: "2px 0 0",
                        lineHeight: 1.3,
                      }}
                    >
                      {c.mrr} MRR
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Insight pills */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                marginTop: 14,
                paddingTop: 12,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {insights.map((text) => (
                <span
                  key={text}
                  style={{
                    display: "inline-block",
                    padding: "5px 14px",
                    borderRadius: 20,
                    border: "1.5px solid #7BB3E0",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#7BB3E0",
                    background: "#7BB3E010",
                  }}
                >
                  {text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Healthcare requirements card — right (Image 1 callouts) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              background: "rgba(40,96,178,0.08)",
              border: "1px solid rgba(40,96,178,0.2)",
              borderRadius: 14,
              padding: "18px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7BB3E0",
                margin: 0,
              }}
            >
              What Healthcare Demands
            </p>

            {requirements.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: "rgba(123,179,224,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Icon size={16} color="#7BB3E0" strokeWidth={2.2} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {r.title}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.55)",
                        margin: "3px 0 0",
                        lineHeight: 1.45,
                      }}
                    >
                      {r.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
