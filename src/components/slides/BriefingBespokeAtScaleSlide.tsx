"use client";
import { motion } from "framer-motion";
import { Settings2, Globe2, Code2, Puzzle } from "lucide-react";
import SlideFooter from "../SlideFooter";

const pillars = [
  {
    icon: Settings2,
    eyebrow: "Configure & Customize",
    title: "Onboarding, built in.",
    items: [
      "Onboarding support &amp; automation",
      "Migration wizards from legacy UC/CC",
      "Sandboxes for every customer",
      "Advisory groups &amp; early-adopter programs",
    ],
    accent: "#7EB3E8",
  },
  {
    icon: Globe2,
    eyebrow: "Scale with Partners",
    title: "Global platform, regional clouds.",
    items: [
      "Regional clouds &amp; data localization",
      "Edge + on-prem containers",
      "Multi-tenant partner management",
      "App &amp; CX Studio marketplaces",
    ],
    accent: "#4A8BC8",
  },
  {
    icon: Puzzle,
    eyebrow: "Vertical Solutions",
    title: "Pre-built for regulated industries.",
    items: [
      "At launch: Healthcare, Financial Services",
      "Follow-on: eCommerce, Retail, Education, Government",
      "Industry-specific AI Employees &amp; skills",
      "Direct EHR, EMR, core-banking integrations",
    ],
    accent: "#2860B2",
  },
  {
    icon: Code2,
    eyebrow: "Developer Platform",
    title: "1st-party = 3rd-party.",
    items: [
      "REST &amp; GraphQL APIs across UC/CC/CX",
      "Programmable + AI workflows, widgets, cards",
      "BYO Models, BYO Analytics, BYO Flows, BYO Carrier",
      "NEXT Studio — white-label the whole stack",
    ],
    accent: "#7EB3E8",
  },
];

export default function BriefingBespokeAtScaleSlide({
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
        style={{ padding: "40px 80px 0", textAlign: "center", flexShrink: 0 }}
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
          Platform Pillar
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
          Built to be bespoke, at scale.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            margin: "14px auto 0",
            maxWidth: 820,
            lineHeight: 1.5,
          }}
        >
          A single multi-tenant core that configures, extends, and white-labels
          &mdash; so partners, verticals, and enterprises each get the platform
          shaped to them.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1,
          padding: "32px 80px 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          alignContent: "center",
          gap: 20,
          overflow: "hidden",
        }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.eyebrow}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderLeft: `4px solid ${p.accent}`,
                borderRadius: 14,
                padding: "22px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 11,
                    background: `${p.accent}1A`,
                    border: `1px solid ${p.accent}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={p.accent} strokeWidth={2} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: p.accent,
                      margin: 0,
                    }}
                  >
                    {p.eyebrow}
                  </p>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: "2px 0 0",
                      lineHeight: 1.15,
                    }}
                  >
                    {p.title}
                  </h2>
                </div>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "2px 0 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {p.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.45,
                      paddingLeft: 14,
                      position: "relative",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: `<span style="position:absolute;left:0;color:${p.accent}">•</span>${item}`,
                    }}
                  />
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
