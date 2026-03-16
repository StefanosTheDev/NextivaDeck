import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";

const CORAL = "#F0A88C";
const ACCENT = CORAL;

interface ColumnData {
  era: string;
  title: string;
  bullets: string[];
  gradient: string;
}

const columns: ColumnData[] = [
  {
    era: "YESTERDAY / TODAY",
    title: "Transaction communication experiences",
    bullets: [
      "Disjointed one-way notifications across multiple channels",
      "Disparate systems and point solutions",
    ],
    gradient: "linear-gradient(180deg, rgba(30,40,60,0.95) 0%, rgba(20,25,40,0.98) 100%)",
  },
  {
    era: "TODAY",
    title: "Seamless conversational experiences",
    bullets: [
      "Personalized two-way conversations on channel of choice",
      "Convergence of front office and back office into a seamless unified platform",
    ],
    gradient: "linear-gradient(180deg, rgba(25,45,70,0.95) 0%, rgba(18,30,50,0.98) 100%)",
  },
  {
    era: "THE FUTURE",
    title: "Agentic & Human in Tandem Experience",
    bullets: [
      "Agentic first experiences across the voice and digital channels",
      "Integrated customer interaction ecosystem leveraging AI to enable engagement at scale",
    ],
    gradient: "linear-gradient(180deg, rgba(40,35,55,0.95) 0%, rgba(22,20,40,0.98) 100%)",
  },
];

const icons = [
  <svg key="chat" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="5" y="8" width="30" height="20" rx="4" stroke={ACCENT} strokeWidth="2" fill="none" />
    <path d="M12 28 L17 33 L17 28" stroke={ACCENT} strokeWidth="2" fill="none" />
    <circle cx="14" cy="18" r="1.8" fill={ACCENT} />
    <circle cx="20" cy="18" r="1.8" fill={ACCENT} />
    <circle cx="26" cy="18" r="1.8" fill={ACCENT} />
  </svg>,
  <svg key="phone" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="12" y="5" width="16" height="30" rx="3" stroke={ACCENT} strokeWidth="2" fill="none" />
    <line x1="12" y1="10" x2="28" y2="10" stroke={ACCENT} strokeWidth="1.2" />
    <line x1="12" y1="30" x2="28" y2="30" stroke={ACCENT} strokeWidth="1.2" />
    <circle cx="20" cy="33" r="1.2" fill={ACCENT} />
  </svg>,
  <svg key="people" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="12" r="5" stroke={ACCENT} strokeWidth="2" fill="none" />
    <path d="M10 32 C10 25 15 22 20 22 C25 22 30 25 30 32" stroke={ACCENT} strokeWidth="2" fill="none" />
    <circle cx="32" cy="14" r="3" stroke={ACCENT} strokeWidth="1.5" fill="none" />
    <circle cx="8" cy="14" r="3" stroke={ACCENT} strokeWidth="1.5" fill="none" />
  </svg>,
];

const ArrowSVG = () => (
  <div style={{ display: "flex", alignItems: "center", padding: "0 12px", flexShrink: 0 }}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M4 16 L24 16 M18 9 L25 16 L18 23" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const SlideWorldMoving = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920, height: 1080,
      background: `linear-gradient(170deg, ${COLORS.midnightNavy} 0%, #0A1E3D 100%)`,
      display: "flex", flexDirection: "column",
      fontFamily: FONTS.body, position: "relative", overflow: "hidden",
    }}
    data-speaker-notes="The world is shifting from fragmented transactional notifications to seamless conversational experiences — and ultimately toward fully immersive, AI-powered 360-degree engagement. Nextiva is built for this future."
  >
    {/* Header */}
    <header style={{ padding: "60px 120px 0", flexShrink: 0 }}>
      <h1 style={{
        fontFamily: FONTS.heading, fontSize: 68, fontWeight: 600,
        color: COLORS.pureWhite, margin: 0, lineHeight: 1.15, maxWidth: 1500,
      }}>
        The world is moving from transactional to unified relationship based economy
      </h1>
    </header>

    {/* Three columns with arrows */}
    <main style={{
      flex: 1, padding: "44px 120px 0",
      display: "flex", alignItems: "stretch",
    }}>
      {columns.map((col, i) => (
        <div key={col.era} style={{ display: "contents" }}>
          {/* Column card */}
          <div style={{
            flex: 1,
            background: col.gradient,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "36px 32px",
            display: "flex", flexDirection: "column",
          }}>
            {/* Icon row */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                border: `2px solid ${ACCENT}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, background: "rgba(240,168,140,0.08)",
              }}>
                {icons[i]}
              </div>
              <div>
                <p style={{
                  fontSize: 13, fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: CORAL, margin: 0,
                }}>
                  {col.era}
                </p>
                <p style={{
                  fontSize: 24, fontWeight: 700, color: COLORS.pureWhite,
                  margin: "4px 0 0", lineHeight: 1.25,
                }}>
                  {col.title}
                </p>
              </div>
            </div>

            {/* Spacer / visual area */}
            <div style={{
              flex: 1, minHeight: 180,
              background: "rgba(255,255,255,0.03)",
              borderRadius: 12, margin: "20px 0",
              border: "1px solid rgba(255,255,255,0.05)",
            }} />

            {/* Bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {col.bullets.map((b, j) => (
                <div key={j} style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 8, padding: "14px 18px",
                }}>
                  <p style={{
                    fontSize: 19, color: "rgba(255,255,255,0.72)",
                    margin: 0, lineHeight: 1.45,
                  }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow between columns */}
          {i < 2 && <ArrowSVG />}
        </div>
      ))}
    </main>

    <SlideFooter slideNumber={slideNumber} variant="dark" />
  </div>
);

export default SlideWorldMoving;
