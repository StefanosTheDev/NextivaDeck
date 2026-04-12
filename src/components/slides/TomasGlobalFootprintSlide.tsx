"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Cloud, Server, Phone, Users } from "lucide-react";
import SlideFooter from "../SlideFooter";

type NodeDef = {
  id: string; city: string; label: string; x: number; y: number;
  kind: "cloud" | "edge" | "annot" | "redundant";
  icon?: "phone" | "users";
  connectTo?: string;
};

const NODES: NodeDef[] = [
  { id: "montreal", city: "Montreal",  label: "node cloud",  x: 19, y: 25, kind: "cloud" },
  { id: "ashburn",  city: "Ashburn",   label: "node cloud",  x: 17, y: 34, kind: "cloud" },
  { id: "saopaulo", city: "São Paulo", label: "edge server", x: 31, y: 59, kind: "edge" },
  { id: "london",   city: "London",    label: "node cloud",  x: 49, y: 20, kind: "cloud" },
  { id: "madrid",   city: "Madrid",    label: "node cloud",  x: 40, y: 30, kind: "cloud" },
  { id: "tokyo",    city: "Tokyo",     label: "edge server", x: 74, y: 28, kind: "edge" },
  { id: "lc-left",  city: "",          label: "local carrier", x: 18, y: 52, kind: "annot", icon: "phone", connectTo: "saopaulo" },
  { id: "la-left",  city: "",          label: "local agents",  x: 18, y: 60, kind: "annot", icon: "users", connectTo: "saopaulo" },
  { id: "lc-right", city: "",          label: "local carrier", x: 80, y: 44, kind: "annot", icon: "phone", connectTo: "tokyo" },
  { id: "la-right", city: "",          label: "local agents",  x: 73, y: 52, kind: "annot", icon: "users", connectTo: "tokyo" },
  { id: "redundant", city: "",         label: "redundant",     x: 46, y: 68, kind: "redundant" },
];

const HUB = { x: 42, y: 43 };

const LOCATIONS = [
  "Montreal CA", "The Dalles OR", "Ashburn VA", "Council Bluffs IA",
  "Moncks Corner SC", "Tokyo JP", "London UK", "Madrid ES", "São Paulo BR",
];

function NodeBadge({ city, label }: { city: string; label: string }) {
  const Icon = label === "node cloud" ? Cloud : Server;
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 9,
      background: "rgba(15,35,75,0.8)", backdropFilter: "blur(8px)",
      border: "1px solid rgba(126,179,232,0.3)", borderRadius: 12,
      padding: "8px 16px 8px 10px", boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
      whiteSpace: "nowrap" as const,
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8,
        background: "rgba(126,179,232,0.2)", border: "1px solid rgba(126,179,232,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <Icon size={16} color="#FFFFFF" strokeWidth={2} />
      </div>
      <div>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>{city}</p>
        <p style={{ fontSize: 11, fontWeight: 500, color: "#FFFFFF", opacity: 0.7, margin: 0, lineHeight: 1.2 }}>{label}</p>
      </div>
    </div>
  );
}

function SmallBadge({ label, icon }: { label: string; icon: "phone" | "users" }) {
  const Icon = icon === "phone" ? Phone : Users;
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      background: "rgba(60,80,130,0.7)", backdropFilter: "blur(6px)",
      border: "1px solid rgba(150,180,230,0.25)", borderRadius: 12,
      padding: "7px 14px 7px 9px",
    }}>
      <div style={{
        width: 26, height: 26, borderRadius: 7,
        background: "rgba(150,180,230,0.2)", border: "1px solid rgba(150,180,230,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <Icon size={13} color="#FFFFFF" strokeWidth={2} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: "#FFFFFF" }}>{label}</span>
    </div>
  );
}

type LineCoords = { x1: number; y1: number; x2: number; y2: number };

export default function TomasGlobalFootprintSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [lines, setLines] = useState<LineCoords[]>([]);

  const recalcLines = useCallback(() => {
    const map = mapRef.current;
    const hub = hubRef.current;
    if (!map || !hub) return;

    const mapRect = map.getBoundingClientRect();
    const hubRect = hub.getBoundingClientRect();
    const hubCx = hubRect.left + hubRect.width / 2 - mapRect.left;
    const hubCy = hubRect.top + hubRect.height / 2 - mapRect.top;

    const center = (el: HTMLDivElement) => ({
      cx: el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2 - mapRect.left,
      cy: el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2 - mapRect.top,
    });

    const next: LineCoords[] = [];
    for (const n of NODES) {
      const el = nodeRefs.current[n.id];
      if (!el) continue;
      const { cx, cy } = center(el);

      if (n.connectTo) {
        const parent = nodeRefs.current[n.connectTo];
        if (!parent) continue;
        const p = center(parent);
        next.push({ x1: p.cx, y1: p.cy, x2: cx, y2: cy });
      } else {
        next.push({ x1: hubCx, y1: hubCy, x2: cx, y2: cy });
      }
    }
    setLines(next);
  }, []);

  useEffect(() => {
    const timer = setTimeout(recalcLines, 100);
    window.addEventListener("resize", recalcLines);
    return () => { clearTimeout(timer); window.removeEventListener("resize", recalcLines); };
  }, [recalcLines]);

  const setNodeRef = (id: string) => (el: HTMLDivElement | null) => { nodeRefs.current[id] = el; };

  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0 }}
      >
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Nextiva Global Footprint
        </h1>
        <p style={{ fontSize: 20, fontWeight: 600, color: "rgba(255,255,255,0.55)", margin: "6px 0 0" }}>
          Cloud In Region – Edge – On Prem
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onAnimationComplete={recalcLines}
        style={{ flex: 1, padding: "16px 60px 8px", display: "grid", gridTemplateColumns: "1fr 220px", gap: 24, alignItems: "center", minHeight: 0 }}
      >
        {/* MAP */}
        <div ref={mapRef} style={{
          position: "relative", width: "100%", aspectRatio: "950 / 620", maxHeight: "calc(100vh - 250px)",
          backgroundImage: "url(/images/world-map-blue.svg)",
          backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
          overflow: "visible",
        }}>

          {/* Connection lines — measured from actual DOM positions */}
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
            {lines.map((l, i) => (
              <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            ))}
          </svg>

          {/* Hub badge — larger, grey/slate background */}
          <motion.div
            ref={hubRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onAnimationComplete={recalcLines}
            style={{
              position: "absolute", left: `${HUB.x}%`, top: `${HUB.y}%`,
              transform: "translate(-50%, -50%)", zIndex: 3,
              background: "rgba(50,60,85,0.85)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(180,190,210,0.35)", borderRadius: 14,
              padding: "16px 28px", boxShadow: "0 6px 28px rgba(0,0,0,0.4)",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>Nextiva</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF", opacity: 0.85, margin: "3px 0 0", lineHeight: 1.2 }}>Global Network</p>
          </motion.div>

          {/* All connected nodes — city badges, annotations, redundant */}
          {NODES.map((n, i) => {
            const delay = n.kind === "annot" ? 0.8 + i * 0.04
              : n.kind === "redundant" ? 0.9
              : 0.4 + i * 0.07;

            return (
              <motion.div
                key={n.id}
                ref={setNodeRef(n.id)}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay }}
                onAnimationComplete={recalcLines}
                style={{
                  position: "absolute", left: `${n.x}%`, top: `${n.y}%`,
                  transform: "translate(-50%, -50%)", zIndex: 2,
                }}
              >
                {n.kind === "redundant" ? (
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "rgba(60,80,130,0.7)", backdropFilter: "blur(6px)",
                    border: "1px solid rgba(150,180,230,0.25)", borderRadius: 12,
                    padding: "7px 14px 7px 9px", boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                    whiteSpace: "nowrap" as const,
                  }}>
                    <div style={{ display: "flex", gap: 4 }}>
                      {[0, 1, 2].map((j) => (
                        <div key={j} style={{
                          width: 26, height: 26, borderRadius: 7,
                          background: "rgba(150,180,230,0.2)", border: "1px solid rgba(150,180,230,0.3)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Phone size={12} color="#FFFFFF" strokeWidth={2} />
                        </div>
                      ))}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>
                      redundant<br />carrier connections
                    </span>
                  </div>
                ) : n.kind === "annot" ? (
                  <SmallBadge label={n.label} icon={n.icon!} />
                ) : (
                  <NodeBadge city={n.city} label={n.label} />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT PANEL */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <p style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF", margin: "0 0 14px" }}>Global Offering</p>
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12, padding: "16px 18px",
          }}>
            {LOCATIONS.map((loc, i) => (
              <p key={loc} style={{
                fontSize: 15, color: "rgba(255,255,255,0.7)",
                margin: i < LOCATIONS.length - 1 ? "0 0 8px" : 0,
                paddingLeft: 16, position: "relative", lineHeight: 1.4,
              }}>
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
