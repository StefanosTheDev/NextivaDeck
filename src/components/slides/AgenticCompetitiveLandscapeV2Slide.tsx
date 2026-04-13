"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

type Logo = { src: string; alt: string; tight?: boolean; wide?: boolean };

const BASE = "/logos/competitors/agentic";

const TL_LOGOS: Logo[] = [
  { src: `${BASE}/TL__dialpad.png`, alt: "Dialpad" },
  { src: `${BASE}/TL__nice.png`, alt: "NICE" },
  { src: `${BASE}/TL__zoom.png`, alt: "Zoom" },
  { src: `${BASE}/TL__genesys.png`, alt: "Genesys", wide: true },
  { src: `${BASE}/TL__ringcentral.png`, alt: "RingCentral", wide: true },
];

const BL_LOGOS: Logo[] = [
  { src: `${BASE}/BL__salesforce.png`, alt: "Salesforce" },
  { src: `${BASE}/BL__freshworks.png`, alt: "Freshworks", tight: true },
  { src: `${BASE}/BL__servicenow.png`, alt: "ServiceNow", tight: true },
  { src: `${BASE}/BL__hubspot.png`, alt: "HubSpot", wide: true },
  { src: `${BASE}/BL__zendesk.png`, alt: "Zendesk", wide: true },
];

const TR_LOGOS: Logo[] = [
  { src: `${BASE}/TR__fin.svg`, alt: "Fin" },
  { src: `${BASE}/TR__sierra.png`, alt: "Sierra" },
  { src: `${BASE}/TR__polyai.png`, alt: "PolyAI" },
  { src: `${BASE}/TR__parloa.png`, alt: "Parloa", wide: true },
  { src: `${BASE}/TR__decagon.png`, alt: "Decagon", wide: true },
];

const BR_LOGOS: Logo[] = [
  { src: `${BASE}/BR__braze.png`, alt: "Braze" },
  { src: `${BASE}/BR__zoho.png`, alt: "Zoho" },
  { src: `${BASE}/BR__sprinklr.png`, alt: "Sprinklr" },
  { src: `${BASE}/BR__iterable.svg`, alt: "Iterable", wide: true },
  { src: `${BASE}/BR__intercom.png`, alt: "Intercom", wide: true },
];

type Position = "TL" | "TR" | "BL" | "BR";

interface QuadrantProps {
  title: string;
  position: Position;
  logos: Logo[];
}

const labelCornerStyle: Record<Position, React.CSSProperties> = {
  TL: { top: 14, left: 22, textAlign: "left" },
  TR: { top: 14, right: 22, textAlign: "right" },
  BL: { bottom: 14, left: 22, textAlign: "left" },
  BR: { bottom: 14, right: 22, textAlign: "right" },
};

const cellPaddingStyle: Record<Position, React.CSSProperties> = {
  TL: { padding: "48px 90px 36px 36px" },
  TR: { padding: "48px 36px 36px 90px" },
  BL: { padding: "36px 90px 48px 36px" },
  BR: { padding: "36px 36px 48px 90px" },
};

const MAX_LOGO_HEIGHT = 42;
const MAX_LOGO_WIDTH = 160;

function LogoCard({ logo }: { logo: Logo }) {
  const isTight = logo.tight;
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.92)",
        borderRadius: 10,
        padding: isTight ? "2px 5px" : "8px 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: isTight ? 80 : 100,
        minHeight: MAX_LOGO_HEIGHT + 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.24)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.alt}
        style={{
          maxHeight: isTight ? MAX_LOGO_HEIGHT + 14 : MAX_LOGO_HEIGHT,
          maxWidth: isTight ? MAX_LOGO_HEIGHT + 14 : MAX_LOGO_WIDTH,
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}

function Quadrant({ title, position, logos }: QuadrantProps) {
  const shortLogos = logos.filter((l) => !l.wide);
  const wideLogos = logos.filter((l) => l.wide);

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
          fontSize: 18,
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
          flexDirection: "column",
          gap: 18,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {shortLogos.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {shortLogos.map((logo) => (
              <LogoCard key={logo.alt} logo={logo} />
            ))}
          </div>
        )}
        {wideLogos.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {wideLogos.map((logo) => (
              <LogoCard key={logo.alt} logo={logo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AgenticCompetitiveLandscapeV2Slide({
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
          padding: "16px 80px 10px",
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
          <Quadrant title="AI Agents" position="TR" logos={TR_LOGOS} />
          <Quadrant title="System of Record" position="BL" logos={BL_LOGOS} />
          <Quadrant
            title="System of Engagement"
            position="BR"
            logos={BR_LOGOS}
          />

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
              width: 220,
              height: 64,
              borderRadius: 14,
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
                fontSize: 20,
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
