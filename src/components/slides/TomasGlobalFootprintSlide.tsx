"use client";
import { motion } from "framer-motion";
import { Cloud, Server, Phone, Users } from "lucide-react";
import SlideFooter from "../SlideFooter";
import { WORLD_MAP_SVG } from "./briefing-assets/worldMap";

/* ─────────────────────────────────────────────
   DATA — adjust x/y % to reposition on the map
   ───────────────────────────────────────────── */

const HUB = { x: 46, y: 48 };

const NODES = [
  { id: "montreal", city: "Montreal",  type: "node cloud"  as const, x: 27.5, y: 29 },
  { id: "ashburn",  city: "Ashburn",   type: "node cloud"  as const, x: 26,   y: 33 },
  { id: "saopaulo", city: "São Paulo", type: "edge server" as const, x: 35.5, y: 66 },
  { id: "london",   city: "London",    type: "node cloud"  as const, x: 49.5, y: 26 },
  { id: "madrid",   city: "Madrid",    type: "node cloud"  as const, x: 48.5, y: 32 },
  { id: "tokyo",    city: "Tokyo",     type: "edge server" as const, x: 80,   y: 34 },
];

const ANNOTS = [
  { id: "lc-left",  label: "local carrier", icon: "phone" as const, x: 14, y: 48 },
  { id: "la-left",  label: "local agents",  icon: "users" as const, x: 14, y: 57 },
  { id: "lc-right", label: "local carrier", icon: "phone" as const, x: 78, y: 43 },
  { id: "la-right", label: "local agents",  icon: "users" as const, x: 78, y: 52 },
];

const REDUNDANT = { x: 38, y: 78 };

const LOCATIONS = [
  "Montreal CA", "The Dalles OR", "Ashburn VA", "Council Bluffs IA",
  "Moncks Corner SC", "Tokyo JP", "London UK", "Madrid ES", "São Paulo BR",
];

/* ─── SMALL REUSABLE BITS ─── */

function NodeBadge({ city, type }: { city: string; type: "node cloud" | "edge server" }) {
  const Icon = type === "node cloud" ? Cloud : Server;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(30,70,140,0.65)", backdropFilter: "blur(8px)", border: "1px solid rgba(126,179,232,0.35)", borderRadius: 18, padding: "4px 12px 4px 5px", boxShadow: "0 2px 12px rgba(0,0,0,0.3)", whiteSpace: "nowrap" as const }}>
      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(126,179,232,0.25)", border: "1px solid rgba(126,179,232,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={12} color="#FFFFFF" strokeWidth={2} />
      </div>
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>{city}</p>
        <p style={{ fontSize: 8, color: "rgba(200,220,255,0.7)", margin: 0, lineHeight: 1.15 }}>{type}</p>
      </div>
    </div>
  );
}

function SmallBadge({ label, icon }: { label: string; icon: "phone" | "users" }) {
  const Icon = icon === "phone" ? Phone : Users;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(30,70,140,0.55)", backdropFilter: "blur(6px)", border: "1px solid rgba(126,179,232,0.3)", borderRadius: 14, padding: "3px 9px 3px 4px" }}>
      <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(126,179,232,0.25)", border: "1px solid rgba(126,179,232,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={9} color="#FFFFFF" strokeWidth={2} />
      </div>
      <span style={{ fontSize: 9, fontWeight: 600, color: "rgba(200,220,255,0.85)" }}>{label}</span>
    </div>
  );
}

function at(x: number, y: number): React.CSSProperties {
  return { position: "absolute", left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" };
}


/* ─── SLIDE ─── */

export default function TomasGlobalFootprintSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <style>{`
        .tomas-map svg { width:100% !important; height:100% !important; display:block; }
        .tomas-map svg path { fill:rgba(126,179,232,0.18); stroke:rgba(126,179,232,0.32); stroke-width:0.5px; }
      `}</style>

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
        style={{ flex: 1, padding: "8px 40px 0", display: "grid", gridTemplateColumns: "1fr 200px", gap: 20, alignItems: "center" }}
      >
        {/* MAP CONTAINER — all children absolutely positioned */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "950 / 620", overflow: "hidden" }}>

          {/* Background map */}
          <div className="tomas-map" style={{ position: "absolute", inset: 0 }} dangerouslySetInnerHTML={{ __html: WORLD_MAP_SVG }} />

          {/* Hub */}
          <div style={{ ...at(HUB.x, HUB.y), zIndex: 3, background: "rgba(30,70,140,0.75)", backdropFilter: "blur(10px)", border: "1px solid rgba(126,179,232,0.45)", borderRadius: 14, padding: "10px 18px", boxShadow: "0 4px 24px rgba(0,0,0,0.35)", textAlign: "center" }}>
            <p style={{ fontSize: 13, fontWeight: 800, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>Nextiva</p>
            <p style={{ fontSize: 10, fontWeight: 600, color: "rgba(200,220,255,0.8)", margin: "1px 0 0", lineHeight: 1.2 }}>Global Network</p>
          </div>

          {/* Connection lines */}
          <svg width="100%" height="100%" style={{ position: "absolute", left: 0, top: 0, zIndex: 1, pointerEvents: "none" }}>
            {NODES.map((n) => (
              <line key={`line-${n.id}`} x1={`${HUB.x}%`} y1={`${HUB.y}%`} x2={`${n.x}%`} y2={`${n.y}%`} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            ))}
          </svg>

          {/* Node badges */}
          {NODES.map((n, i) => (
            <motion.div key={n.id} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }} style={{ ...at(n.x, n.y), zIndex: 2 }}>
              <NodeBadge city={n.city} type={n.type} />
            </motion.div>
          ))}

          {/* Annotation badges */}
          {ANNOTS.map((a, i) => (
            <motion.div key={a.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.8 + i * 0.06 }} style={{ ...at(a.x, a.y), zIndex: 2 }}>
              <SmallBadge label={a.label} icon={a.icon} />
            </motion.div>
          ))}

          {/* Redundant carrier connections */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1 }} style={{ ...at(REDUNDANT.x, REDUNDANT.y), zIndex: 2, display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {[0, 1, 2].map((j) => (
                <div key={j} style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(126,179,232,0.25)", border: "1px solid rgba(126,179,232,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Phone size={8} color="#FFFFFF" strokeWidth={2} />
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(30,70,140,0.55)", backdropFilter: "blur(6px)", border: "1px solid rgba(126,179,232,0.3)", borderRadius: 12, padding: "3px 9px" }}>
              <p style={{ fontSize: 8, fontWeight: 600, color: "rgba(200,220,255,0.85)", margin: 0, lineHeight: 1.3, textAlign: "center" }}>
                redundant<br />carrier connections
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT PANEL */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "0 0 12px" }}>Global Offering</p>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 16px" }}>
            {LOCATIONS.map((loc, i) => (
              <p key={loc} style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: i < LOCATIONS.length - 1 ? "0 0 6px" : 0, paddingLeft: 14, position: "relative", lineHeight: 1.35 }}>
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
