"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SlideFooter from "../SlideFooter";

const ACCENT = "#5BA0E0";

interface ColumnData {
  era: string;
  title: string;
  bullets: string[];
  image?: string;
}

const columns: ColumnData[] = [
  {
    era: "YESTERDAY / TODAY",
    title: "Transactional communication experiences",
    bullets: [
      "Disjointed one-way notifications across multiple channels",
      "Disparate systems and point solutions",
    ],
    image: "/images/world-moving-accountant.png",
  },
  {
    era: "TODAY",
    title: "Seamless conversational experiences",
    bullets: [
      "Personalized two-way conversations on channel of choice",
      "Convergence of front office and back office into a seamless unified platform",
    ],
    image: "/images/world-moving-contact-center.png",
  },
  {
    era: "THE FUTURE",
    title: "Agentic & Human in Tandem Experience",
    bullets: [
      "Agentic first experiences across the voice and digital channels",
      "Integrated customer interaction ecosystem leveraging AI to enable engagement at scale",
    ],
    image: "/images/world-moving-ai-employee.png",
  },
];

const icons = [
  <svg key="chat" width="36" height="36" viewBox="0 0 40 40" fill="none">
    <rect x="5" y="8" width="30" height="20" rx="4" stroke={ACCENT} strokeWidth="2" fill="none" />
    <path d="M12 28 L17 33 L17 28" stroke={ACCENT} strokeWidth="2" fill="none" />
    <circle cx="14" cy="18" r="1.8" fill={ACCENT} />
    <circle cx="20" cy="18" r="1.8" fill={ACCENT} />
    <circle cx="26" cy="18" r="1.8" fill={ACCENT} />
  </svg>,
  <svg key="phone" width="36" height="36" viewBox="0 0 40 40" fill="none">
    <rect x="12" y="5" width="16" height="30" rx="3" stroke={ACCENT} strokeWidth="2" fill="none" />
    <line x1="12" y1="10" x2="28" y2="10" stroke={ACCENT} strokeWidth="1.2" />
    <line x1="12" y1="30" x2="28" y2="30" stroke={ACCENT} strokeWidth="1.2" />
    <circle cx="20" cy="33" r="1.2" fill={ACCENT} />
  </svg>,
  <svg key="people" width="36" height="36" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="12" r="5" stroke={ACCENT} strokeWidth="2" fill="none" />
    <path d="M10 32 C10 25 15 22 20 22 C25 22 30 25 30 32" stroke={ACCENT} strokeWidth="2" fill="none" />
    <circle cx="32" cy="14" r="3" stroke={ACCENT} strokeWidth="1.5" fill="none" />
    <circle cx="8" cy="14" r="3" stroke={ACCENT} strokeWidth="1.5" fill="none" />
  </svg>,
];

const ArrowSVG = () => (
  <div style={{ display: "flex", alignItems: "center", padding: "0 8px", flexShrink: 0 }}>
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M4 16 L24 16 M18 9 L25 16 L18 23" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function WorldMovingTomasSlide({ slideNumber = 57 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
      data-speaker-notes="The world is shifting from fragmented transactional notifications to seamless conversational experiences — and ultimately toward fully immersive, AI-powered 360-degree engagement. Nextiva is built for this future."
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0 }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 58,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
            maxWidth: 1400,
          }}
        >
          CX is now real-time, AI-driven, and outcome-based
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "36px 100px 16px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr auto 1fr",
          alignItems: "start",
        }}
      >
        {columns.map((col, i) => (
          <div key={col.era} style={{ display: "contents" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: `24px 22px ${i === 0 ? 48 : 24}px 22px`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, height: 90, flexShrink: 0 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    border: `2px solid ${ACCENT}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background: "rgba(91,160,224,0.08)",
                  }}
                >
                  {icons[i]}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#CCC7C3",
                      margin: 0,
                    }}
                  >
                    {col.era}
                  </p>
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: "4px 0 0",
                      lineHeight: 1.25,
                    }}
                  >
                    {col.title}
                  </p>
                </div>
              </div>

              <div
                style={{
                  height: 420,
                  flexShrink: 0,
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 12,
                  margin: "16px 0 20px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {col.image && (
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1920px) 33vw, 500px"
                  />
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.bullets.map((b, j) => (
                  <div
                    key={j}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 8,
                      padding: "10px 14px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 17,
                        color: "rgba(255,255,255,0.7)",
                        margin: 0,
                        lineHeight: 1.45,
                      }}
                    >
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {i < 2 && <ArrowSVG />}
          </div>
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
