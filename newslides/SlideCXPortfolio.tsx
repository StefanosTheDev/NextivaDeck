import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { Phone, Headphones, Bot, Layers } from "lucide-react";

const CORAL = "#F0A88C";

const products = [
  {
    Icon: Phone,
    name: "NextOS",
    badge: "All Customers",
    tagline: "Core Communication Platform.",
    bullets: [
      "AI-enabled communication",
      "Cross-product workflow automation",
      "Leverages XBert and NEXT AI capabilities",
    ],
  },
  {
    Icon: Headphones,
    name: "Experience Center",
    badge: "Enterprise & Verticals",
    tagline: "Programmable AI & CX Solutions.",
    bullets: [
      "Omnichannel engagement",
      "AI-assisted customer interactions",
      "Open API ecosystem & integrations",
    ],
  },
  {
    Icon: Bot,
    name: "XBert",
    badge: "All Nextiva Users",
    tagline: "Agentic AI for All Channels.",
    bullets: [
      "Agentic AI across voice, chat & email",
      "Autonomous handling of customer interactions 24/7",
      "Self-learning, always-improving agents",
    ],
  },
  {
    Icon: Layers,
    name: "NEXT",
    badge: "SMB & Mid-Market",
    tagline: "Unified Front & Back Office.",
    bullets: [
      "Unified data model across all products",
      "AI & human working in tandem",
      "Single source of customer truth",
    ],
  },
];

const SlideCXPortfolio = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <div
    data-speaker-notes="Nextiva's CX platform portfolio spans four major products serving all customer segments. Our innovation leading with AI is built once and delivered across the entire product portfolio."
    style={{
      width: 1920,
      height: 1080,
      position: "relative",
      overflow: "hidden",
      background: `linear-gradient(135deg, ${COLORS.midnightNavy} 0%, #0A1E3D 100%)`,
      fontFamily: FONTS.body,
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Radial glow */}
    <div style={{ position: "absolute", top: -300, left: "50%", transform: "translateX(-50%)", width: 1000, height: 1000, borderRadius: "50%", background: "radial-gradient(circle, rgba(240,168,140,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

    {/* Header */}
    <header style={{ padding: "72px 120px 0", flexShrink: 0, position: "relative", zIndex: 1 }}>
      <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", color: CORAL, margin: 0 }}>
        OUR SOLUTION
      </p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 72, fontWeight: 600, color: COLORS.pureWhite, margin: "16px 0 0", lineHeight: 1.15 }}>
        Nextiva's CX Platform Portfolio.
      </h1>
      <p style={{ fontSize: 26, color: "rgba(255,255,255,0.55)", margin: "16px 0 0", lineHeight: 1.5 }}>
        Built on a heritage of trust, we continuously innovate with– and ahead of the market,<br />delivering continuous value to existing customers while attracting new ones.
      </p>
    </header>

    {/* Product cards */}
    <main style={{ flex: 1, padding: "36px 120px 0", display: "flex", alignItems: "center", position: "relative", zIndex: 1 }}>
      <div style={{
        width: "100%",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 28,
        display: "flex",
        gap: 24,
      }}>
        {products.map((p) => (
          <article key={p.name} style={{
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderTop: `3px solid ${CORAL}`,
            borderRadius: 14,
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 10,
              background: "rgba(240,168,140,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 18,
            }}>
              <p.Icon size={24} color={CORAL} strokeWidth={1.75} />
            </div>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 32, fontWeight: 600, color: COLORS.pureWhite, margin: 0, lineHeight: 1.2 }}>
              {p.name}
            </h2>
            <span style={{
              display: "inline-block", alignSelf: "flex-start", marginTop: 10,
              padding: "4px 14px", borderRadius: 20,
              background: "rgba(240,168,140,0.15)", color: CORAL,
              fontSize: 15, fontWeight: 600,
            }}>
              {p.badge}
            </span>
            <p style={{ fontSize: 18, fontWeight: 700, color: COLORS.pureWhite, margin: "18px 0 8px", lineHeight: 1.4 }}>
              {p.tagline}
            </p>
            <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
              {p.bullets.map((b, i) => (
                <li key={i} style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.55, marginBottom: 4, paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 6, borderRadius: "50%", background: CORAL }} />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>

    {/* Bottom insight bar */}
    <div style={{ padding: "0 120px", marginTop: 24, position: "relative", zIndex: 1 }}>
      <div style={{
        background: "rgba(240,168,140,0.06)",
        border: "1px solid rgba(240,168,140,0.15)",
        borderRadius: 14,
        padding: "20px 48px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", margin: 0 }}>
          <span style={{ fontWeight: 700, color: COLORS.pureWhite }}>Our innovation leading with AI</span>{" "}
          are built once and delivered across the entire product portfolio.
        </p>
      </div>
    </div>

    <SlideFooter slideNumber={slideNumber} variant="dark" />
  </div>
);

export default SlideCXPortfolio;
