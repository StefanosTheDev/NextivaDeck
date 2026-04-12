"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

interface ColumnSection {
  heading: string;
  items: string[];
}

interface ColumnDef {
  top: ColumnSection;
  bottom: ColumnSection;
}

const COLUMNS: ColumnDef[] = [
  {
    top: {
      heading: "Nextiva CXPaaS",
      items: ["Configure & Customize", "Extend", "DIY (White label)"],
    },
    bottom: {
      heading: "Developer Platform",
      items: [
        "1st Party = 3rd Party",
        "Widgets, Cards",
        "Programmable + AI Workflows",
        "Models, Data (BYOL)",
        "Network (BYOC)",
        "APIs (REST, GraphQL)",
        "Tools – CX Studio",
      ],
    },
  },
  {
    top: {
      heading: "Marketplaces",
      items: ["App marketplace", "CX Studio marketplace"],
    },
    bottom: {
      heading: "Scale with Partners",
      items: [
        "Multi-Tenant Mgmt.",
        "Onboarding Support & Automation",
        "Migration Wizards",
        "Sandboxes",
        "Advisory Groups & Early Adopter",
      ],
    },
  },
  {
    top: {
      heading: "Global platform",
      items: [
        "Regional Clouds",
        "Data localization",
        "Edge and On Prem Containers",
      ],
    },
    bottom: {
      heading: "Vertical Solutions",
      items: [
        "At Launch: Healthcare, FinServ*",
        "Follow on: eCommerce, Retail, Education, Government",
      ],
    },
  },
];

export default function SenthilBespokeAtScaleSlide({
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
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
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
          PLATFORM EXTENSIBILITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
          }}
        >
          Built to be <span style={{ color: "#7EB3E8" }}>bespoke</span>, at scale
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "24px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          alignContent: "stretch",
        }}
      >
        {COLUMNS.map((col, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: 16 }}>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#7EB3E8",
                  margin: "0 0 10px",
                }}
              >
                {col.top.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.top.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: j < col.top.items.length - 1 ? 6 : 0,
                      lineHeight: 1.45,
                      paddingLeft: 16,
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,0.08)",
                margin: "4px 0 16px",
              }}
            />

            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#7EB3E8",
                  margin: "0 0 10px",
                }}
              >
                {col.bottom.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.bottom.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: j < col.bottom.items.length - 1 ? 6 : 0,
                      lineHeight: 1.45,
                      paddingLeft: 16,
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
