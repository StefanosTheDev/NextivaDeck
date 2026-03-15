"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Phone, Headset, Bot, Layers } from "lucide-react";

const products = [
  {
    icon: Phone,
    name: "NextOS",
    tag: "All Customers",
    tagBg: "rgba(40,96,178,0.25)",
    tagColor: "#7EB3E8",
    subtitle: "Core Communication Platform.",
    bullets: [
      "AI-enabled communication",
      "Cross-product workflow automation",
      "Leverages XBert and NEXT AI capabilities",
    ],
  },
  {
    icon: Headset,
    name: "Experience Center",
    tag: "Enterprise & Verticals",
    tagBg: "rgba(40,96,178,0.25)",
    tagColor: "#7EB3E8",
    subtitle: "Programmable AI & CX Solutions.",
    bullets: [
      "Omnichannel engagement",
      "AI-assisted customer interactions",
      "Open API ecosystem & integrations",
    ],
  },
  {
    icon: Bot,
    name: "XBert",
    tag: "All Nextiva Users",
    tagBg: "rgba(40,96,178,0.25)",
    tagColor: "#7EB3E8",
    subtitle: "Agentic AI for All Channels.",
    bullets: [
      "Agentic AI across voice, chat & email",
      "Autonomous handling of customer interactions 24/7",
      "Self-learning, always-improving agents",
    ],
  },
  {
    icon: Layers,
    name: "NEXT",
    tag: "SMB & Mid-Market",
    tagBg: "rgba(212,149,107,0.25)",
    tagColor: "#D4956B",
    subtitle: "Unified Front & Back Office.",
    bullets: [
      "Unified data model across all products",
      "AI & human working in tandem",
      "Single source of customer truth",
    ],
  },
];

/*
 * 2x2 interlocking puzzle — each piece has tabs/notches on inner edges.
 * ViewBox 1000×500, 6px gap at midlines (x=497–503, y=247–253).
 * Tab semi-circle radius: 18.  Outer corner radius: 14.
 *
 *   TL (tab right, tab bottom)  |  TR (notch left, tab bottom)
 *   ———————————————————————————  |  ———————————————————————————
 *   BL (tab right, notch top)   |  BR (notch left, notch top)
 */
const puzzlePaths = [
  // TL
  "M 0 14 A 14 14 0 0 1 14 0 H 497 V 106 A 18 18 0 0 1 497 142 V 247 H 267 A 18 18 0 0 1 231 247 H 0 Z",
  // TR
  "M 503 0 H 986 A 14 14 0 0 1 1000 14 V 247 H 770 A 18 18 0 0 1 734 247 H 503 V 142 A 18 18 0 0 0 503 106 V 0 Z",
  // BL
  "M 0 253 H 231 A 18 18 0 0 0 267 253 H 497 V 359 A 18 18 0 0 1 497 395 V 500 H 14 A 14 14 0 0 1 0 486 Z",
  // BR
  "M 503 253 H 734 A 18 18 0 0 0 770 253 H 1000 V 486 A 14 14 0 0 1 986 500 H 503 V 395 A 18 18 0 0 0 503 359 V 253 Z",
];

const contentPositions = [
  { left: "0%", top: "0%", width: "49.7%", height: "49.4%" },
  { left: "50.3%", top: "0%", width: "49.7%", height: "49.4%" },
  { left: "0%", top: "50.6%", width: "49.7%", height: "49.4%" },
  { left: "50.3%", top: "50.6%", width: "49.7%", height: "49.4%" },
];

export default function CXPortfolioPuzzleSlide({
  slideNumber = 12,
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
            margin: "0 0 10px",
          }}
        >
          OUR SOLUTION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Nextiva&apos;s CX Platform Portfolio.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.45)",
            margin: "14px auto 0",
            lineHeight: 1.5,
            maxWidth: 720,
          }}
        >
          Built on a heritage of trust, we continuously innovate with– and ahead
          of the market, delivering continuous value to existing customers while
          attracting new ones.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 100px 0",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 900,
            aspectRatio: "1000 / 500",
          }}
        >
          {/* SVG puzzle-piece shapes */}
          <svg
            viewBox="0 0 1000 500"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {puzzlePaths.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
            ))}
          </svg>

          {/* Product content overlay, aligned to each quadrant */}
          {products.map((p, i) => {
            const pos = contentPositions[i];
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                style={{
                  position: "absolute",
                  left: pos.left,
                  top: pos.top,
                  width: pos.width,
                  height: pos.height,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <Icon size={18} color="#7EB3E8" strokeWidth={1.75} />
                </div>

                <h2
                  className="font-heading"
                  style={{
                    fontSize: 21,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {p.name}
                </h2>

                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    padding: "2px 10px",
                    borderRadius: 6,
                    background: p.tagBg,
                    color: p.tagColor,
                    fontSize: 10,
                    fontWeight: 600,
                    marginTop: 5,
                  }}
                >
                  {p.tag}
                </span>

                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.85)",
                    margin: "8px 0 0",
                    lineHeight: 1.3,
                  }}
                >
                  {p.subtitle}
                </p>

                <ul
                  style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}
                >
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.45,
                        paddingLeft: 14,
                        position: "relative",
                        marginBottom: 2,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 6,
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.3)",
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.main>

      {/* Bottom takeaway bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "0 100px 8px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "18px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 17,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>
              Our innovation leading with AI
            </span>{" "}
            are built once and delivered across the entire product portfolio.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
