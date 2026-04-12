"use client";
import { motion } from "framer-motion";
import { Cloud, Server, HardDrive } from "lucide-react";
import SlideFooter from "../SlideFooter";
import { WORLD_MAP_SVG } from "./briefing-assets/worldMap";

type Region = {
  city: string;
  locale: string;
  type: "Node Cloud" | "Edge Server";
  // Position as percentage of map container (0-100)
  // Calibrated to the Wikimedia equirectangular projection
  x: number;
  y: number;
  // Label anchor: which side the label flows from the pin
  labelSide: "right" | "left" | "top" | "bottom";
};

const regions: Region[] = [
  {
    city: "Montreal",
    locale: "Canada",
    type: "Node Cloud",
    x: 27.5,
    y: 29.2,
    labelSide: "right",
  },
  {
    city: "Ashburn",
    locale: "Virginia, USA",
    type: "Node Cloud",
    x: 26.3,
    y: 32.6,
    labelSide: "left",
  },
  {
    city: "Sao Paulo",
    locale: "Brazil",
    type: "Edge Server",
    x: 35.6,
    y: 65.9,
    labelSide: "right",
  },
  {
    city: "London",
    locale: "United Kingdom",
    type: "Node Cloud",
    x: 49.6,
    y: 26.0,
    labelSide: "right",
  },
  {
    city: "Madrid",
    locale: "Spain",
    type: "Node Cloud",
    x: 48.5,
    y: 31.9,
    labelSide: "left",
  },
  {
    city: "Tokyo",
    locale: "Japan",
    type: "Edge Server",
    x: 91.5,
    y: 34.4,
    labelSide: "left",
  },
];

const deploymentModes = [
  {
    icon: Cloud,
    title: "Cloud, In Region",
    desc: "Primary node clouds with redundant carrier connections and local data residency.",
  },
  {
    icon: Server,
    title: "Edge Compute",
    desc: "Low-latency edge presence for regulatory and real-time use cases.",
  },
  {
    icon: HardDrive,
    title: "On-Premises",
    desc: "Containerized deployment inside customer data centers for strict sovereignty.",
  },
];

export default function BriefingGlobalFootprintSlide({
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
      <style>{`
        .briefing-world-map svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .briefing-world-map svg path {
          fill: rgba(126, 179, 232, 0.14);
          stroke: rgba(126, 179, 232, 0.28);
          stroke-width: 0.5px;
        }
      `}</style>

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "32px 80px 0", flexShrink: 0, textAlign: "center" }}
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
          Global Offering
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "8px 0 0",
            lineHeight: 1.15,
          }}
        >
          A global network, deployed where you operate.
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            margin: "6px auto 0",
            lineHeight: 1.5,
            maxWidth: 780,
          }}
        >
          Node clouds, edge compute, and on-premises containers &mdash; same
          platform, deployed to match local regulation and latency.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "12px 60px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          minHeight: 0,
        }}
      >
        {/* Map container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            flex: 1,
            position: "relative",
            background:
              "radial-gradient(ellipse 70% 90% at 50% 50%, rgba(40,96,178,0.08) 0%, rgba(6,26,55,0.3) 60%, transparent 100%)",
            border: "1px solid rgba(126,179,232,0.12)",
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          {/* The translucent world map */}
          <div
            className="briefing-world-map"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            dangerouslySetInnerHTML={{ __html: WORLD_MAP_SVG }}
          />

          {/* Region pins overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            {regions.map((r, i) => {
              const isNode = r.type === "Node Cloud";
              const pinColor = isNode ? "#7EB3E8" : "#2860B2";
              const labelOffsetX =
                r.labelSide === "right" ? 18 : r.labelSide === "left" ? -18 : 0;
              const labelOffsetY =
                r.labelSide === "top" ? -18 : r.labelSide === "bottom" ? 18 : 0;
              const labelTransform =
                r.labelSide === "right"
                  ? "translateY(-50%)"
                  : r.labelSide === "left"
                    ? "translate(-100%, -50%)"
                    : r.labelSide === "top"
                      ? "translate(-50%, -100%)"
                      : "translate(-50%, 0)";
              return (
                <motion.div
                  key={r.city}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.08 }}
                  style={{
                    position: "absolute",
                    left: `${r.x}%`,
                    top: `${r.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Outer pulse ring */}
                  <div
                    style={{
                      position: "absolute",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${pinColor}55 0%, ${pinColor}00 65%)`,
                      top: -18,
                      left: -18,
                    }}
                  />
                  {/* Inner pin */}
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: pinColor,
                      border: "2px solid #FFFFFF",
                      boxShadow: `0 0 14px ${pinColor}, 0 0 0 2px rgba(6,26,55,0.8)`,
                      position: "relative",
                      zIndex: 2,
                    }}
                  />

                  {/* Label */}
                  <div
                    style={{
                      position: "absolute",
                      left: labelOffsetX,
                      top: labelOffsetY,
                      transform: labelTransform,
                      background: "rgba(6,26,55,0.88)",
                      border: `1px solid ${pinColor}66`,
                      borderRadius: 6,
                      padding: "5px 10px",
                      whiteSpace: "nowrap",
                      zIndex: 3,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      {r.city}
                    </p>
                    <p
                      style={{
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: pinColor,
                        margin: "2px 0 0",
                        lineHeight: 1.1,
                      }}
                    >
                      {r.locale} &middot; {isNode ? "Node Cloud" : "Edge"}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div
            style={{
              position: "absolute",
              bottom: 14,
              right: 18,
              display: "flex",
              gap: 16,
              background: "rgba(6,26,55,0.85)",
              border: "1px solid rgba(126,179,232,0.25)",
              borderRadius: 8,
              padding: "7px 14px",
              zIndex: 4,
              backdropFilter: "blur(4px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#7EB3E8",
                  border: "1.5px solid #FFFFFF",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Node Cloud
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#2860B2",
                  border: "1.5px solid #FFFFFF",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Edge Server
              </span>
            </div>
          </div>

          {/* Stats overlay (top-left) */}
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 18,
              display: "flex",
              gap: 14,
              background: "rgba(6,26,55,0.85)",
              border: "1px solid rgba(126,179,232,0.25)",
              borderRadius: 8,
              padding: "8px 14px",
              zIndex: 4,
              backdropFilter: "blur(4px)",
            }}
          >
            {[
              { value: "6", label: "Regions" },
              { value: "4", label: "Node Clouds" },
              { value: "2", label: "Edge" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 5,
                }}
              >
                <span
                  className="font-heading"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#7EB3E8",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deployment modes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            flexShrink: 0,
          }}
        >
          {deploymentModes.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: "3px solid #7EB3E8",
                  borderRadius: 10,
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={17} color="#7EB3E8" strokeWidth={2} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {m.title}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.55)",
                      margin: "2px 0 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
