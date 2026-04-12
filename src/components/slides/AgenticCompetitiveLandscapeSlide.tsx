"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

type Logo = { src: string; alt: string; tight?: boolean };

const BASE = "/logos/competitors/agentic";

const TL_LOGOS: Logo[] = [
  { src: `${BASE}/TL__ringcentral.png`, alt: "RingCentral" },
  { src: `${BASE}/TL__nice.png`, alt: "NICE" },
  { src: `${BASE}/TL__genesys.png`, alt: "Genesys" },
  { src: `${BASE}/TL__talkdesk.png`, alt: "Talkdesk" },
  { src: `${BASE}/TL__dialpad.png`, alt: "Dialpad" },
];

const BL_LOGOS: Logo[] = [
  { src: `${BASE}/BL__salesforce.png`, alt: "Salesforce" },
  { src: `${BASE}/BL__servicenow.png`, alt: "ServiceNow", tight: true },
  { src: `${BASE}/BL__hubspot.png`, alt: "HubSpot" },
  { src: `${BASE}/BL__zendesk.png`, alt: "Zendesk" },
  { src: `${BASE}/BL__zoho.png`, alt: "Zoho" },
];

const TR_LOGOS: Logo[] = [
  { src: `${BASE}/TR__sierra.png`, alt: "Sierra" },
  { src: `${BASE}/TR__decagon.png`, alt: "Decagon" },
  { src: `${BASE}/TR__parloa.png`, alt: "Parloa" },
  { src: `${BASE}/TR__cognigy.png`, alt: "Cognigy" },
  { src: `${BASE}/TR__ada.png`, alt: "Ada", tight: true },
  { src: `${BASE}/TR__forethought.png`, alt: "Forethought", tight: true },
  { src: `${BASE}/TR__replicant.png`, alt: "Replicant" },
  { src: `${BASE}/TR__kore-ai.png`, alt: "Kore.ai" },
  { src: `${BASE}/TR__polyai.png`, alt: "PolyAI" },
];

const BR_LOGOS: Logo[] = [
  { src: `${BASE}/BR__podium.png`, alt: "Podium" },
  { src: `${BASE}/BR__sprinklr.png`, alt: "Sprinklr" },
  { src: `${BASE}/BR__sprout-social.png`, alt: "Sprout Social" },
  { src: `${BASE}/BR__intercom.png`, alt: "Intercom" },
  { src: `${BASE}/BR__drift.png`, alt: "Drift" },
  { src: `${BASE}/BR__livechat.png`, alt: "LiveChat" },
];

type Position = "TL" | "TR" | "BL" | "BR";

interface QuadrantProps {
  title: string;
  position: Position;
  logos: Logo[];
  dense?: boolean;
}

const labelCornerStyle: Record<Position, React.CSSProperties> = {
  TL: { top: 20, left: 28, textAlign: "left" },
  TR: { top: 20, right: 28, textAlign: "right" },
  BL: { bottom: 20, left: 28, textAlign: "left" },
  BR: { bottom: 20, right: 28, textAlign: "right" },
};

const cellPaddingStyle: Record<Position, React.CSSProperties> = {
  TL: { padding: "64px 120px 48px 48px" },
  TR: { padding: "64px 48px 48px 120px" },
  BL: { padding: "48px 120px 64px 48px" },
  BR: { padding: "48px 48px 64px 120px" },
};

function Quadrant({ title, position, logos, dense = false }: QuadrantProps) {
  const maxLogoHeight = dense ? 34 : 42;
  const maxLogoWidth = dense ? 120 : 140;
  return (
    <div
      style={{
        position: "relative",
        ...cellPaddingStyle[position],
      }}
    >
      <div
        style={{
          position: "absolute",
          ...labelCornerStyle[position],
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#7EB3E8",
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {logos.map((logo) => {
          const isTight = logo.tight;
          return (
            <div
              key={logo.alt}
              style={{
                background: "rgba(255,255,255,0.92)",
                borderRadius: 10,
                padding: isTight ? "4px 6px" : "10px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 96,
                minHeight: maxLogoHeight + 20,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxHeight: isTight ? maxLogoHeight + 12 : maxLogoHeight,
                  maxWidth: isTight ? maxLogoWidth + 20 : maxLogoWidth,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AgenticCompetitiveLandscapeSlide({
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
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          APPENDIX — COMPETITIVE LANDSCAPE
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Nextiva offers an integrated platform for agentic AI for CX
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1,
          position: "relative",
          padding: "20px 80px 0",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 0,
            border: "1px solid rgba(126,179,232,0.18)",
            borderRadius: 16,
            background: "rgba(255,255,255,0.015)",
            overflow: "hidden",
          }}
        >
          {/* Quadrant dividers */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              height: 1,
              background: "rgba(126,179,232,0.18)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              width: 1,
              background: "rgba(126,179,232,0.18)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <Quadrant title="UCaaS + CCaaS" position="TL" logos={TL_LOGOS} />
          <Quadrant title="AI Agents" position="TR" logos={TR_LOGOS} dense />
          <Quadrant title="System of Record" position="BL" logos={BL_LOGOS} />
          <Quadrant
            title="System of Engagement"
            position="BR"
            logos={BR_LOGOS}
          />

          {/* Center Agentic AI badge — rounded rectangle spanning the quadrant intersection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              margin: "auto",
              width: 260,
              height: 80,
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #2860B2 0%, #1a4a8c 50%, #0f2c59 100%)",
              border: "1px solid rgba(126,179,232,0.5)",
              boxShadow:
                "0 0 0 5px rgba(10,30,60,0.7), 0 12px 36px rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
            }}
          >
            <span
              className="font-heading"
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#FFFFFF",
                textAlign: "center",
                lineHeight: 1.15,
                letterSpacing: "0.02em",
              }}
            >
              Agentic AI
            </span>
          </motion.div>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
