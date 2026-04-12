"use client";
import { motion } from "framer-motion";
import { Cloud, Server, Phone, Users } from "lucide-react";
import SlideFooter from "../SlideFooter";
import { WORLD_MAP_SVG } from "./briefing-assets/worldMap";

interface NodeDef {
  city: string;
  type: "node cloud" | "edge server";
  x: number;
  y: number;
}

const NODES: NodeDef[] = [
  { city: "Montreal", type: "node cloud", x: 27.5, y: 29 },
  { city: "Ashburn", type: "node cloud", x: 24, y: 37 },
  { city: "São Paulo", type: "edge server", x: 33, y: 66 },
  { city: "London", type: "node cloud", x: 50, y: 22 },
  { city: "Madrid", type: "node cloud", x: 47, y: 32 },
  { city: "Tokyo", type: "edge server", x: 83, y: 33 },
];

const CENTER = { x: 48, y: 48 };

const ANNOTATIONS: {
  label: string;
  icon: "phone" | "users";
  x: number;
  y: number;
}[] = [
  { label: "local carrier", icon: "phone", x: 15, y: 55 },
  { label: "local agents", icon: "users", x: 15, y: 68 },
  { label: "local carrier", icon: "phone", x: 78, y: 50 },
  { label: "local agents", icon: "users", x: 78, y: 60 },
  { label: "redundant carrier connections", icon: "phone", x: 38, y: 80 },
];

const LOCATIONS = [
  "Montreal CA",
  "The Dalles OR",
  "Ashburn VA",
  "Council Bluffs IA",
  "Moncks Corner SC",
  "Tokyo JP",
  "London UK",
  "Madrid ES",
  "São Paulo BR",
];

function NodeBadge({ node }: { node: NodeDef }) {
  const isCloud = node.type === "node cloud";
  const Icon = isCloud ? Cloud : Server;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(30,70,140,0.65)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(126,179,232,0.35)",
        borderRadius: 20,
        padding: "5px 14px 5px 6px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "rgba(126,179,232,0.25)",
          border: "1px solid rgba(126,179,232,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={13} color="#FFFFFF" strokeWidth={2} />
      </div>
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          {node.city}
        </p>
        <p style={{ fontSize: 9, color: "rgba(200,220,255,0.7)", margin: 0, lineHeight: 1.15 }}>
          {node.type}
        </p>
      </div>
    </div>
  );
}

function AnnotationBadge({
  label,
  icon,
}: {
  label: string;
  icon: "phone" | "users";
}) {
  const Icon = icon === "phone" ? Phone : Users;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(30,70,140,0.55)",
        backdropFilter: "blur(6px)",
        border: "1px solid rgba(126,179,232,0.3)",
        borderRadius: 16,
        padding: "4px 10px 4px 5px",
        boxShadow: "0 1px 8px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "rgba(126,179,232,0.25)",
          border: "1px solid rgba(126,179,232,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={10} color="#FFFFFF" strokeWidth={2} />
      </div>
      <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(200,220,255,0.85)", margin: 0 }}>
        {label}
      </p>
    </div>
  );
}

export default function TomasGlobalFootprintSlide({
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
        .tomas-world-map svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .tomas-world-map svg path {
          fill: rgba(126, 179, 232, 0.18);
          stroke: rgba(126, 179, 232, 0.32);
          stroke-width: 0.5px;
        }
      `}</style>

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Nextiva Global Footprint
        </h1>
        <p
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
            margin: "8px 0 0",
          }}
        >
          Cloud In Region – Edge – On Prem
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "16px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 240px",
          gap: 28,
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1.9 / 1",
            overflow: "hidden",
          }}
        >
          <div
            className="tomas-world-map"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            dangerouslySetInnerHTML={{ __html: WORLD_MAP_SVG }}
          />

          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            {NODES.map((node) => (
              <line
                key={node.city}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${CENTER.x}%`}
                y2={`${CENTER.y}%`}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              position: "absolute",
              left: `${CENTER.x}%`,
              top: `${CENTER.y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              background: "rgba(30,70,140,0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(126,179,232,0.45)",
              borderRadius: 14,
              padding: "12px 22px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 800, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
              Nextiva
            </p>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(200,220,255,0.8)", margin: "2px 0 0", lineHeight: 1.2 }}>
              Global Network
            </p>
          </motion.div>

          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }}>
            {NODES.map((node, i) => (
              <motion.div
                key={node.city}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <NodeBadge node={node} />
              </motion.div>
            ))}
          </div>

          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }}>
            {ANNOTATIONS.map((ann, i) => (
              <motion.div
                key={`${ann.label}-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.06 }}
                style={{
                  position: "absolute",
                  left: `${ann.x}%`,
                  top: `${ann.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <AnnotationBadge label={ann.label} icon={ann.icon} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: "0 0 16px",
            }}
          >
            Global Offering
          </p>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            {LOCATIONS.map((loc, i) => (
              <p
                key={loc}
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  margin: i < LOCATIONS.length - 1 ? "0 0 8px" : 0,
                  paddingLeft: 16,
                  position: "relative",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
                {loc}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
