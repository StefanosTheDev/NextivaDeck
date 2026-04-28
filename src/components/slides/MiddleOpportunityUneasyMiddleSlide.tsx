"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";
const ACCENT = "#0070F3";
const MIDDLE = "#F59E0B";

type Logo = { src: string; alt: string };

const columns: {
  title: string;
  eyebrow: string;
  logos: Logo[];
  /** Centered brand mark; use instead of LogoRow when set. */
  brandLogo?: Logo;
  bullets: string[];
  highlight?: boolean;
  accent: string;
  /** Smaller logo treatment (Self-Serve only); Enterprise uses default sizing. */
  compactLogos?: boolean;
}[] = [
  {
    title: "Self-Serve / E-Commerce",
    eyebrow: "Motion archetype",
    compactLogos: true,
    logos: [
      { src: "/logos/uneasy-middle/shopify.svg", alt: "Shopify" },
      { src: "/logos/uneasy-middle/monday.svg", alt: "Monday.com" },
      { src: "/logos/uneasy-middle/zendesk.svg", alt: "Zendesk" },
    ],
    bullets: [
      "Digital-first acquisition at scale with efficient CAC",
      "Automated onboarding, expansion, and in-product conversion",
      "Best fit when purchase risk is low and cycles are short",
    ],
    accent: ACCENT,
  },
  {
    title: "Uneasy Middle",
    eyebrow: "Underserved majority",
    logos: [],
    brandLogo: { src: "/images/nextiva-logo-white.svg", alt: "Nextiva" },
    bullets: [
      "Mission-critical buyers who still want human reassurance",
      "Too small for classic enterprise coverage economics",
      "Too complex, regulated, or outcome-sensitive for unattended PLG alone",
    ],
    highlight: true,
    accent: MIDDLE,
  },
  {
    title: "Outsource sales",
    eyebrow: "Motion archetype",
    compactLogos: true,
    logos: [
      { src: "/logos/uneasy-middle/salesforce.svg", alt: "Salesforce" },
      { src: "/logos/uneasy-middle/servicenow.svg", alt: "ServiceNow" },
      { src: "/logos/uneasy-middle/workday.svg", alt: "Workday" },
    ],
    bullets: [
      "Named-account alignment, procurement, and bespoke solution design",
      "High-touch proof, security reviews, and executive sponsorship",
      "Economics work when ACV supports dedicated field investment",
    ],
    accent: ACCENT,
  },
];

function LogoRow({ logos, compact }: { logos: Logo[]; compact?: boolean }) {
  if (logos.length === 0) {
    return <div style={{ height: 10, marginBottom: 8 }} />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "stretch",
        gap: 0,
        padding: compact ? "6px 0 16px" : "8px 0 18px",
        marginBottom: 16,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        minHeight: compact ? 40 : 48,
      }}
    >
      {logos.map((l) => (
        <div
          key={l.src}
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: compact ? "0 6px" : "0 10px",
          }}
        >
          {compact ? (
            <div
              style={{
                width: "100%",
                maxWidth: 88,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={l.src}
                alt={l.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "center",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.94,
                }}
              />
            </div>
          ) : (
            <img
              src={l.src}
              alt={l.alt}
              style={{
                height: 34,
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                objectPosition: "center",
                filter: "brightness(0) invert(1)",
                opacity: 0.94,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function BrandLogoRow({ logo }: { logo: Logo }) {
  /* Shell matches LogoRow compact (left column) so border-bottom lines up. */
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 0 16px",
        marginBottom: 16,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        minHeight: 40,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 120,
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            objectPosition: "center",
            filter: "brightness(0) invert(1)",
            opacity: 0.94,
          }}
        />
      </div>
    </div>
  );
}

function BulletBlock({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none", textAlign: "left", width: "100%" }}>
      {items.map((t) => (
        <li
          key={t}
          style={{
            position: "relative",
            paddingLeft: 22,
            marginBottom: 14,
            fontSize: 17,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          <span style={{ position: "absolute", left: 0, top: 2, color: "#7EB3E8", fontWeight: 700, fontSize: 18 }}>&rsaquo;</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function MiddleOpportunityUneasyMiddleSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: BG, overflow: "hidden", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "36%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "36px 80px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          Uneasy middle
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 18px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.14,
            maxWidth: 1040,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          The largest underserved segment in software sits between self-serve and sales motion
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{
            maxWidth: 920,
            margin: "20px auto 0",
            padding: "18px 24px 18px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.68)", margin: 0, lineHeight: 1.55, fontWeight: 400 }}>
            Most software companies optimize for either pure self-serve / e-commerce or high-touch enterprise sales. The largest underserved opportunity is in the middle: businesses that want trusted guidance but are too small for traditional enterprise sales motions.
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          gap: 16,
          padding: "24px 80px 32px",
          minHeight: 0,
          alignItems: "stretch",
          position: "relative",
          zIndex: 1,
        }}
      >
        {columns.map((col, i) => (
          <motion.article
            key={col.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 + i * 0.08 }}
            style={{
              flex: 1,
              borderRadius: 18,
              padding: "22px 22px 24px",
              background: col.highlight
                ? "linear-gradient(165deg, rgba(245, 158, 11, 0.12) 0%, rgba(255,255,255,0.03) 45%, rgba(0,0,0,0.12) 100%)"
                : "linear-gradient(165deg, rgba(40, 96, 178, 0.08) 0%, rgba(255,255,255,0.03) 45%, rgba(0,0,0,0.1) 100%)",
              border: col.highlight ? "2px solid rgba(245, 158, 11, 0.45)" : "1px solid rgba(255,255,255,0.1)",
              borderTop: `3px solid ${col.accent}`,
              boxShadow: "0 20px 50px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <p
              style={{
                margin: "0 0 6px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                textAlign: "center",
              }}
            >
              {col.eyebrow}
            </p>
            <h2 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 14px", lineHeight: 1.15, textAlign: "center" }}>
              {col.title}
            </h2>

            {col.brandLogo ? (
              <BrandLogoRow logo={col.brandLogo} />
            ) : (
              <LogoRow logos={col.logos} compact={col.compactLogos} />
            )}

            <BulletBlock items={col.bullets} />
          </motion.article>
        ))}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
