"use client";
import { motion } from "framer-motion";
import {
  ChevronsRight,
  ChevronsLeft,
  Sparkles,
  CreditCard,
  Zap,
  Layers,
  Rocket,
  Users,
  Briefcase,
  Handshake,
  Building2,
  Gauge,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

// Positioning slide: shows Nextiva's rare ability to run BOTH self-serve
// (eCommerce-led) and sales-led motions well. Three pillars across a
// spectrum; middle pillar is lit-up and features Nextiva as the hero.
// Logos are real brand marks — some from simple-icons (CC0), some from the
// repo's existing competitor logo set. Nextiva logo is the existing asset
// with its blue background rect stripped for transparent rendering on dark.

interface LogoItem {
  src: string;
  alt: string;
  maxH?: number;
  maxW?: number;
  // Some PNGs (Dialpad, ServiceNow) have a lot of transparent padding baked
  // into the asset, so the visible logo mark ends up tiny inside its bounding
  // box. A CSS transform scale crops the padding visually without clipping.
  zoom?: number;
}

interface Bullet {
  icon: LucideIcon;
  text: string;
}

interface Pillar {
  label: string;
  tagline: string;
  bullets: readonly Bullet[];
  logos: readonly LogoItem[];
  // Number of columns in the peer-logo grid. Left card holds 6 (3x2),
  // middle holds 3 (3x1), right holds 4 (2x2). Defaults to 2.
  gridCols?: number;
  heroLogo?: LogoItem;
  isHero?: boolean;
}

const PILLARS: readonly Pillar[] = [
  {
    label: "SELF-SERVE",
    tagline: "eCommerce-led motion",
    gridCols: 3,
    bullets: [
      { icon: Sparkles, text: "Brand pulls demand" },
      { icon: Zap, text: "Freemium → paid funnel" },
      { icon: CreditCard, text: "Self-checkout, low ACV" },
    ],
    logos: [
      { src: "/logos/hybrid-gtm/canva.svg", alt: "Canva", maxH: 38, maxW: 38 },
      {
        src: "/logos/hybrid-gtm/calendly.svg",
        alt: "Calendly",
        maxH: 38,
        maxW: 38,
      },
      {
        src: "/logos/hybrid-gtm/monday.svg",
        alt: "monday.com",
        maxH: 28,
        maxW: 110,
      },
      {
        src: "/logos/hybrid-gtm/shopify.svg",
        alt: "Shopify",
        maxH: 38,
        maxW: 38,
      },
      {
        src: "/logos/hybrid-gtm/zoom.svg",
        alt: "Zoom",
        maxH: 38,
        maxW: 38,
      },
      {
        src: "/logos/hybrid-gtm/dropbox.svg",
        alt: "Dropbox",
        maxH: 38,
        maxW: 38,
      },
    ],
  },
  {
    label: "HYBRID",
    tagline: "Nextiva lives here",
    gridCols: 3,
    bullets: [
      { icon: Rocket, text: "Buy online or call sales" },
      { icon: Users, text: "Buyers opt into the motion" },
      { icon: Layers, text: "SMB simplicity, enterprise depth" },
    ],
    isHero: true,
    heroLogo: {
      src: "/logos/hybrid-gtm/nextiva-logo-transparent.svg",
      alt: "Nextiva",
      maxH: 56,
      maxW: 230,
    },
    logos: [
      {
        src: "/logos/hybrid-gtm/hubspot.svg",
        alt: "HubSpot",
        maxH: 38,
        maxW: 38,
      },
      {
        src: "/logos/hybrid-gtm/zendesk.svg",
        alt: "Zendesk",
        maxH: 38,
        maxW: 38,
      },
      {
        src: "/logos/hybrid-gtm/intercom.svg",
        alt: "Intercom",
        maxH: 38,
        maxW: 38,
      },
    ],
  },
  {
    label: "SALES-LED",
    tagline: "Enterprise-led motion",
    gridCols: 2,
    bullets: [
      { icon: Briefcase, text: "Named AEs, long cycles" },
      { icon: Building2, text: "RFPs, POCs, custom builds" },
      { icon: Handshake, text: "High ACV, channel-driven" },
    ],
    logos: [
      {
        src: "/logos/hybrid-gtm/salesforce.svg",
        alt: "Salesforce",
        maxH: 38,
        maxW: 38,
      },
      {
        src: "/logos/hybrid-gtm/servicenow.svg",
        alt: "ServiceNow",
        maxH: 32,
        maxW: 130,
      },
      {
        src: "/logos/competitors/agentic/TL__nice.png",
        alt: "NICE",
        maxH: 30,
        maxW: 100,
      },
      {
        src: "/logos/hybrid-gtm/genesys.svg",
        alt: "Genesys",
        maxH: 28,
        maxW: 115,
      },
    ],
  },
];

export default function HybridGtmExcellenceSlide({
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
        overflow: "hidden",
      }}
    >
      {/* Ambient glow behind the header/middle card */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "32px 100px 0",
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
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          GTM MOTION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "8px 0 0",
            lineHeight: 1.1,
          }}
        >
          Hybrid go-to-market excellence
        </h1>
        <p
          className="font-heading"
          style={{
            fontSize: 22,
            fontWeight: 400,
            margin: "6px 0 0",
            lineHeight: 1.25,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          From{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #0070F3, #00C2FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            eCommerce
          </span>{" "}
          to{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #0070F3, #00C2FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            sales-led
          </span>
          .
        </p>
      </motion.header>

      {/* CENTERPIECE — 3 pillars + bottom unifying band (vertically centered) */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 32,
          padding: "16px 100px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 3-pillar row — content-sized, not flex-grown */}
        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "stretch",
            position: "relative",
          }}
        >
          {PILLARS.map((pillar, i) => {
            const isHero = pillar.isHero;
            const iconColor = isHero ? "#7EB3E8" : "#8A93A4";
            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: isHero ? 0.15 : 0.3 + i * 0.05,
                }}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: "18px 22px",
                  borderRadius: 16,
                  background: isHero
                    ? "linear-gradient(135deg, rgba(40,140,255,0.28), rgba(126,179,232,0.18))"
                    : "rgba(255,255,255,0.04)",
                  border: isHero
                    ? "1px solid rgba(126,179,232,0.55)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isHero
                    ? "0 0 40px rgba(40,140,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)"
                    : "none",
                }}
              >
                {/* Pillar eyebrow label */}
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: iconColor,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {pillar.label}
                </p>
                <p
                  className="font-heading"
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: isHero
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.78)",
                    margin: "3px 0 12px",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {pillar.tagline}
                </p>

                {/* Hero logo (Nextiva only) — featured on top of the hybrid card */}
                {pillar.heroLogo && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 12px 12px",
                      marginBottom: 10,
                      borderBottom: "1px solid rgba(126,179,232,0.25)",
                    }}
                  >
                    <img
                      src={pillar.heroLogo.src}
                      alt={pillar.heroLogo.alt}
                      style={{
                        maxHeight: pillar.heroLogo.maxH ?? 50,
                        maxWidth: pillar.heroLogo.maxW ?? 200,
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                )}

                {/* Peer logo grid — columns vary per pillar (6/3/4 logos) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${pillar.gridCols ?? 2}, 1fr)`,
                    gap: 10,
                  }}
                >
                  {pillar.logos.map((logo) => (
                    <div
                      key={logo.alt}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 60,
                        padding: "4px 6px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        style={{
                          maxHeight: logo.maxH ?? 40,
                          maxWidth: logo.maxW ?? 130,
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                          display: "block",
                          opacity: 0.95,
                          transform: logo.zoom
                            ? `scale(${logo.zoom})`
                            : undefined,
                          transformOrigin: "center",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Bullets — 3 icon+text bullets below the logo grid,
                    horizontally centered as a group beneath the logos */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "14px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 7,
                  }}
                >
                  {pillar.bullets.map(({ icon: Icon, text }) => (
                    <li
                      key={text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 22,
                          height: 22,
                          borderRadius: 6,
                          background: isHero
                            ? "rgba(126,179,232,0.18)"
                            : "rgba(255,255,255,0.06)",
                          border: `1px solid ${isHero ? "rgba(126,179,232,0.4)" : "rgba(255,255,255,0.1)"}`,
                          flexShrink: 0,
                          color: iconColor,
                        }}
                      >
                        <Icon size={12} strokeWidth={2.2} />
                      </span>
                      <span
                        style={{
                          fontSize: 12.5,
                          fontWeight: 500,
                          color: isHero
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(255,255,255,0.72)",
                          lineHeight: 1.25,
                        }}
                      >
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Convergence chevrons — absolute-positioned in the gaps, pointing inward toward the hybrid pillar */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "33.333%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(126,179,232,0.55)",
              pointerEvents: "none",
            }}
          >
            <ChevronsRight size={22} strokeWidth={2.2} />
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "66.666%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(126,179,232,0.55)",
              pointerEvents: "none",
            }}
          >
            <ChevronsLeft size={22} strokeWidth={2.2} />
          </div>
        </div>

        {/* Stand-out commentary band — three Tomas-sourced proof points that
            justify Nextiva's middle-of-the-spectrum position. Replaces the
            old ~25K/~600K stat band (which moved to the Lead Velocity Buckets
            slide where it ties tighter to the velocity story). */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 0,
            padding: "14px 8px",
            borderRadius: 14,
            background:
              "linear-gradient(135deg, rgba(40,140,255,0.14), rgba(126,179,232,0.06))",
            border: "1px solid rgba(126,179,232,0.32)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {[
            {
              icon: Gauge,
              eyebrow: "SPEED MOAT & BEST-IN-CLASS LTV/CAC",
              body: (
                <>
                  <span style={{ color: "#FFFFFF", fontWeight: 700 }}>
                    &lt;90s lead-to-contact
                  </span>{" "}
                  — first to the buyer frames the deal before competitors
                  engage.{" "}
                  <span style={{ color: "#FFFFFF", fontWeight: 600 }}>
                    Highly efficient, high ROI funnel and leading LTV/CAC.
                  </span>
                </>
              ),
            },
            {
              icon: Users,
              eyebrow: "CUSTOMER CHOICE",
              body: (
                <>
                  E-commerce is open — yet buyers actively{" "}
                  <span style={{ color: "#FFFFFF", fontWeight: 700 }}>
                    opt into a sales conversation
                  </span>
                  . Comms is mission-critical.
                </>
              ),
            },
            {
              icon: TrendingUp,
              eyebrow: "RESILIENT MODEL",
              body: (
                <>
                  Customers naturally moving to{" "}
                  <span style={{ color: "#FFFFFF", fontWeight: 700 }}>
                    usage- and outcome-based billing
                  </span>{" "}
                  — no forced model transition.
                </>
              ),
            },
          ].map((point, i, arr) => {
            const Icon = point.icon;
            return (
              <div
                key={point.eyebrow}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "0 18px",
                  borderRight:
                    i < arr.length - 1
                      ? "1px solid rgba(126,179,232,0.22)"
                      : "none",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "rgba(126,179,232,0.18)",
                    border: "1px solid rgba(126,179,232,0.4)",
                    color: "#7EB3E8",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <Icon size={15} strokeWidth={2.2} />
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#7EB3E8",
                      margin: 0,
                    }}
                  >
                    {point.eyebrow}
                  </p>
                  <p
                    style={{
                      fontSize: 12.5,
                      color: "rgba(255,255,255,0.82)",
                      margin: "3px 0 0",
                      lineHeight: 1.35,
                    }}
                  >
                    {point.body}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Spectrum bar — runs beneath the 3 cards to reinforce the
            left→right gradient. Uses a different dimension (touch intensity)
            than the card labels (self-serve / hybrid / sales-led) so it
            adds a new axis of information rather than repeating. */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            padding: "0 6px",
          }}
        >
          <div style={{ position: "relative", height: 8 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 4,
                background:
                  "linear-gradient(90deg, rgba(126,179,232,0.25) 0%, rgba(40,140,255,0.75) 50%, rgba(10,30,70,0.65) 100%)",
                border: "1px solid rgba(126,179,232,0.22)",
              }}
            />
            {/* Nextiva marker — pinned at the middle of the spectrum */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#7EB3E8",
                border: "2px solid #FFFFFF",
                boxShadow: "0 0 12px rgba(40,140,255,0.9)",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Low-touch</span>
            <span style={{ color: "#7EB3E8" }}>
              Nextiva flexes across the spectrum
            </span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>High-touch</span>
          </div>
        </motion.div>
      </main>

      {/* Footnote — attribution for the logos */}
      <p
        style={{
          padding: "4px 100px 0",
          fontSize: 11,
          color: "rgba(255,255,255,0.35)",
          margin: 0,
          textAlign: "left",
          fontStyle: "italic",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        Illustrative peers. Logos are the property of their respective owners
        and are used here for reference only. Lead-to-contact &lt;90s per
        internal ops dashboard, Q1 FY26. Billing-model framing per internal GTM
        review, 2026.
      </p>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
