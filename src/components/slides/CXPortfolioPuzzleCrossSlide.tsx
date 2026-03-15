"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
const CORAL = "#F0A88C";
// Right column (XBert, Experience Center): shift tagline + bullets right to clear flap
const RIGHT_COL_PADDING_LEFT = 22;
// Card fills: lighter than dark slide, each piece a distinct shade so neighbors contrast at seams
const PIECE_FILLS = [
  "rgba(255,255,255,0.11)",     // NEXT - lightest
  "rgba(248,252,255,0.09)",     // XBert - slight cool tint
  "rgba(255,248,242,0.10)",     // NextOS - slight warm tint
  "rgba(250,252,255,0.095)",   // Experience Center - neutral
];

// Puzzle positions: TL=NEXT, TR=XBert, BL=NextOS, BR=Experience Center
// Content from SlideCXPortfolio
const PIECES = [
  {
    name: "NEXT",
    badge: "SMB & Mid-Market",
    tagline: "Unified Front & Back Office.",
    bullets: [
      "Unified data model across all products",
      "AI & human working in tandem",
      "Single source of customer truth",
    ],
    path: "M 0 0 L 160 0 L 160 60 A 20 20 0 0 0 160 100 L 160 160 L 100 160 A 20 20 0 0 0 60 160 L 0 160 Z",
    x: 0, y: 0, w: 160, h: 160,
  },
  {
    name: "XBert",
    badge: "All Nextiva Users",
    tagline: "Agentic AI for All Channels.",
    bullets: [
      "Agentic AI across voice, chat & email",
      "Autonomous handling of customer interactions 24/7",
      "Self-learning, always-improving agents",
    ],
    path: "M 160 0 L 320 0 L 320 160 L 260 160 A 20 20 0 0 0 220 160 L 160 160 L 160 100 A 20 20 0 0 1 160 60 L 160 0 Z",
    x: 160, y: 0, w: 160, h: 160,
  },
  {
    name: "NextOS",
    badge: "All Customers",
    tagline: "Core Communication Platform.",
    bullets: [
      "AI-enabled communication",
      "Cross-product workflow automation",
      "Leverages XBert and NEXT AI capabilities",
    ],
    path: "M 0 160 L 60 160 A 20 20 0 0 1 100 160 L 160 160 L 160 220 A 20 20 0 0 1 160 260 L 160 380 L 0 380 L 0 160 Z",
    x: 0, y: 160, w: 160, h: 220,
  },
  {
    name: "Experience Center",
    badge: "Enterprise & Verticals",
    tagline: "Programmable AI & CX Solutions.",
    bullets: [
      "Omnichannel engagement",
      "AI-assisted customer interactions",
      "Open API ecosystem & integrations",
    ],
    path: "M 160 160 L 220 160 A 20 20 0 0 1 260 160 L 320 160 L 320 380 L 160 380 L 160 260 A 20 20 0 0 0 160 220 L 160 160 Z",
    x: 160, y: 160, w: 160, h: 220,
  },
];

export default function CXPortfolioPuzzleCrossSlide({ slideNumber = 40 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      data-speaker-notes="Four products. One integrated platform."
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: CORAL, margin: "0 0 10px" }}>Our solution</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Nextiva&apos;s CX Platform Portfolio.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>Four products. One integrated platform.</p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 80px", position: "relative", zIndex: 1 }}
      >
        <svg
          viewBox="0 0 320 380"
          style={{ width: "100%", maxWidth: 580, height: "auto", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.4))" }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="puzzle-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="rgba(0,0,0,0.35)" />
            </filter>
            {PIECES.map((p, i) => (
              <clipPath key={p.name} id={`clip-${i}`}>
                <path d={p.path} />
              </clipPath>
            ))}
          </defs>
          {PIECES.map((piece, i) => (
              <g key={piece.name} clipPath={`url(#clip-${i})`}>
                <motion.path
                  d={piece.path}
                  fill={PIECE_FILLS[i]}
                  stroke="rgba(240,168,140,0.25)"
                  strokeWidth={2.5}
                  strokeLinejoin="round"
                  filter="url(#puzzle-shadow)"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                />
                <foreignObject
                  x={piece.x + 12}
                  y={piece.y + 12}
                  width={Math.max(0, piece.w - 24)}
                  height={Math.max(0, piece.h - 24)}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "2px 5px",
                      display: "flex",
                      flexDirection: "column",
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: "transparent",
                      boxSizing: "border-box",
                    }}
                  >
                    <div style={{ marginBottom: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <h2 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 12, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15,
                      }}>
                        {piece.name}
                      </h2>
                      <span style={{
                        display: "inline-block", marginTop: 1,
                        padding: "1px 5px", borderRadius: 6,
                        background: "rgba(240,168,140,0.15)", color: CORAL,
                        fontSize: 7, fontWeight: 600,
                      }}>
                        {piece.badge}
                      </span>
                    </div>
                    <p style={{
                      fontSize: 8, fontWeight: 700, color: "#FFFFFF", margin: "18px 0 3px 0", lineHeight: 1.15,
                      paddingLeft: (piece.name === "XBert" || piece.name === "Experience Center") ? RIGHT_COL_PADDING_LEFT : 0,
                    }}>
                      {piece.tagline}
                    </p>
                    <ul style={{
                      margin: 0, paddingLeft: (piece.name === "XBert" || piece.name === "Experience Center") ? RIGHT_COL_PADDING_LEFT : 0, listStyle: "none", flex: 1,
                      overflow: "hidden", fontSize: 7, color: "rgba(255,255,255,0.55)", lineHeight: 1.25,
                      minHeight: 0, marginTop: 2,
                    }}>
                      {piece.bullets.map((b, j) => (
                        <li key={j} style={{ marginBottom: 1, paddingLeft: 7, position: "relative" }}>
                          <span style={{
                            position: "absolute", left: 0, top: 2, width: 2, height: 2,
                            borderRadius: "50%", background: CORAL,
                          }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </foreignObject>
              </g>
            ))}
        </svg>
      </motion.main>

      <p style={{ padding: "0 100px 16px", fontSize: 13, color: "rgba(255,255,255,0.35)", textAlign: "center" }}>Four puzzle pieces. One integrated platform.</p>
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
