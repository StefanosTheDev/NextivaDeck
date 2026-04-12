"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const metrics = [
  {
    stat: "~$58M",
    label: "Healthcare Run Rate",
    desc: "#1 vertical by revenue",
  },
  {
    stat: "7,971",
    label: "Healthcare Customers",
    desc: "8.5% of total customer base",
  },
  { stat: "$22.5M", label: "ARR Under Contract", desc: "Locked through 2027+" },
  {
    stat: "$5T",
    label: "US Healthcare Spend",
    desc: "Massive addressable market",
  },
];

const customers = [
  {
    name: "Acuity Eyecare Group",
    initials: "AE",
    mrr: "$74K",
    lines: "6,449",
    logo: "/logos/acuity-eye.png",
  },
  {
    name: "VieMed / Sleep Mgmt",
    initials: "VM",
    mrr: "$56K",
    lines: "851",
    logo: null,
  },
  {
    name: "Northeast Health Services",
    initials: "NH",
    mrr: "$50K",
    lines: "2,785",
    logo: null,
  },
  {
    name: "HealthPoint",
    initials: "HP",
    mrr: "$46K",
    lines: "1,781",
    logo: null,
  },
  {
    name: "Senior Living Communities",
    initials: "SL",
    mrr: "$45K",
    lines: "3,276",
    logo: null,
  },
  {
    name: "PSG / HCA",
    initials: "HC",
    mrr: "$45K",
    lines: "2,824",
    logo: "/images/industries/logo-hca-healthcare.png",
  },
];

const insights = [
  "1.5x more likely to be enterprise (11+ users)",
  "39% on 36+ month contracts",
  "Channel customers 2.8x more valuable",
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
          Healthcare Vertical
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
          Healthcare is our #1 vertical.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            margin: "10px auto 0",
            maxWidth: 650,
            lineHeight: 1.5,
          }}
        >
          Hospitals &amp; Physicians Clinics generates the highest MRR of any
          industry in our portfolio
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "20px 100px 0",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          justifyContent: "center",
        }}
      >
        {/* Metric cards row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
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
                padding: "22px 20px",
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
                  fontSize: m.stat.length > 6 ? 36 : 44,
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
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#7EB3E8",
                  margin: "6px 0 0",
                  lineHeight: 1.3,
                }}
              >
                {m.label}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  margin: "2px 0 0",
                  lineHeight: 1.3,
                }}
              >
                {m.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Key customers card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 14,
            padding: "20px 28px",
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
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 14,
            }}
          >
            {customers.map((c) => (
              <div
                key={c.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {/* Logo circle */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    background: c.logo
                      ? "#FFFFFF"
                      : "linear-gradient(135deg, #7BB3E020, #7BB3E008)",
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
                    {c.mrr} MRR · {c.lines} lines
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
              gap: 10,
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
                  fontSize: 12,
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
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
