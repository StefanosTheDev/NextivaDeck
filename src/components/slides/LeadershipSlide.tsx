"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const board = [
  { name: "Tomas Gorny", role: "Chairman, CEO & Co-Founder", photo: "/images/headshot-tomas.png" },
  { name: "Tracy Conrad", role: "Chief Amazing Officer, Co-Founder", photo: "/images/headshot-tracy.png" },
  { name: "Alan Black", role: "CFO, Zendesk; CFO, Openwave", photo: "/images/headshot-alan.png" },
  { name: "Stephen Kerns", role: "MD, Goldman Sachs Growth Equity", photo: "/images/headshot-stephen.png" },
  { name: "Karen Walker", role: "CMO, Cisco, Intel", photo: "/images/headshot-karen.png" },
  { name: "Bob Beauchamp", role: "CEO, BMC Software", photo: "/images/headshot-bob.png" },
  { name: "Hari Ravichandran", role: "Founder & CEO, Endurance / Aura.com", photo: "/images/headshot-hari.png" },
];

const management = [
  { name: "Anne Brennan", role: "Chief Financial Officer", photo: "/images/headshot-anne.png" },
  { name: "Senthil Velayutham", role: "Chief Product Officer", photo: "/images/headshot-senthil.png" },
  { name: "Yaniv Masjedi", role: "Chief Marketing Officer", photo: "/images/headshot-yaniv.png" },
  { name: "Josh Lesavoy", role: "Chief Information Officer", photo: "/images/headshot-josh.png" },
  { name: "Chris Reaburn", role: "Chief Sales Officer", photo: "/images/headshot-chris.png" },
  { name: "Ken McMahon", role: "Chief Customer Officer", photo: "/images/headshot-ken.png" },
  { name: "Seksom Suriyapa", role: "Chief Transformation Officer", photo: "/images/headshot-seksom.png" },
  { name: "Ran Ezerzer", role: "Chief Technology Officer", photo: "/images/headshot-ran.png" },
];

const advisors = [
  { name: "John Connolly", role: "Founder/MD, Eaglehead Capital; Advisor, Bain Capital & Sixth Street", photo: "/images/headshot-john.png" },
  { name: "Alex Pinchev", role: "President & CRO, RedHat, Rackspace", photo: "/images/headshot-alex.png" },
];

function PersonCard({ name, role, photo, objectPosition = "center center", needsFrame = false, framePadding, imgInset }: {
  name: string; role: string; photo: string; objectPosition?: string; needsFrame?: boolean; framePadding?: string; imgInset?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{
        width: 68, height: 68, borderRadius: 10, overflow: "hidden", flexShrink: 0,
        background: "#0a1628",
        padding: needsFrame ? (framePadding || "8px 13px") : 0,
        boxSizing: "border-box" as const,
      }}>
        <div style={{
          width: "100%", height: "100%",
          borderRadius: needsFrame ? 3 : 0,
          overflow: "hidden",
          border: needsFrame ? "1px solid rgba(255,255,255,0.85)" : "none",
          boxSizing: "border-box" as const,
          position: "relative" as const,
        }}>
          <img
            src={photo} alt={name}
            style={{
              ...(imgInset
                ? { position: "absolute" as const, inset: imgInset, width: "auto", height: "auto" }
                : { width: "100%", height: "100%" }),
              objectFit: "cover", objectPosition,
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(10,22,40,0.35) 0%, rgba(10,22,40,0.25) 100%)",
            pointerEvents: "none",
          }} />
        </div>
      </div>
      <div>
        <p style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.25 }}>{name}</p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "3px 0 0", lineHeight: 1.3 }}>{role}</p>
      </div>
    </div>
  );
}

export default function LeadershipSlide({ slideNumber = 16 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 80px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 16, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
          LEADERSHIP
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Proven tech leaders drawn to compelling vision.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
        style={{ flex: 1, display: "flex", gap: 32, padding: "28px 80px 0" }}
      >
        {/* Board of Directors */}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 20px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 10 }}>
            BOARD OF DIRECTORS
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px" }}>
            {board.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 20px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 10 }}>
            MANAGEMENT TEAM
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px" }}>
            {management.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div style={{ width: 180, flexShrink: 0 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 20px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 10 }}>
            ADVISORS
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {advisors.map((p) => (
              <div key={p.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 10, overflow: "hidden", marginBottom: 8,
                  background: "#0a1628",
                  padding: p.needsFrame ? "7px 12px" : 0,
                  boxSizing: "border-box" as const,
                }}>
                  <div style={{
                    width: "100%", height: "100%",
                    borderRadius: p.needsFrame ? 3 : 0,
                    overflow: "hidden",
                    border: p.needsFrame ? "1px solid rgba(255,255,255,0.85)" : "none",
                    boxSizing: "border-box" as const,
                    position: "relative" as const,
                  }}>
                    <img
                      src={p.photo} alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(135deg, rgba(10,22,40,0.35) 0%, rgba(10,22,40,0.25) 100%)",
                      pointerEvents: "none",
                    }} />
                  </div>
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.25 }}>{p.name}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "3px 0 0", lineHeight: 1.3 }}>{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
