import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";

const CORAL = "#F0A88C";
const CORAL_BG = "rgba(240,168,140,0.12)";
const CORAL_BORDER = "rgba(240,168,140,0.25)";

const cards = [
  {
    number: 1,
    title: "True Omni-Channel\nCommunications Engine",
    gradient: "linear-gradient(135deg, rgba(240,168,140,0.75) 0%, rgba(240,168,140,0.45) 100%)",
  },
  {
    number: 2,
    title: "Unified Data\nArchitecture powering\nAgentic AI",
    gradient: "linear-gradient(135deg, rgba(240,168,140,0.65) 0%, rgba(240,168,140,0.35) 100%)",
  },
  {
    number: 3,
    title: "Unified Front-and\nBack Office across\nCustomer-Facing Functions",
    gradient: "linear-gradient(135deg, rgba(240,168,140,0.55) 0%, rgba(240,168,140,0.25) 100%)",
  },
];

const advantages = [
  { title: "Build Once.\nDeploy Across\nChannels." },
  { title: "Unify Journeys\nacross Functions" },
  { title: "Seamlessly\nSwitch Channels" },
  { title: "Customer 360" },
];

const dataModelItems = [
  "Unstructured Data (All customer interactions)",
  "Structured Data (CRM, ERP, Billing System Records)",
  "3rd Party Data (Public Data such as Social & Review)",
];

const SlideUnifiedDataModel = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920,
      height: 1080,
      background: `linear-gradient(170deg, ${COLORS.midnightNavy} 0%, #0A1E3D 100%)`,
      display: "flex",
      flexDirection: "column",
      fontFamily: FONTS.body,
      position: "relative",
      overflow: "hidden",
    }}
    data-speaker-notes="Unified Data Model Advantages: our platform lets you build once and deploy across channels, unify journeys across functions, seamlessly switch channels, and get a full Customer 360 view — all powered by a single unified data model."
  >
    {/* Subtle glow */}
    <div style={{
      position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)",
      width: 1400, height: 600, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(240,168,140,0.06) 0%, transparent 70%)",
    }} />

    {/* Header */}
    <header style={{ padding: "72px 120px 0", flexShrink: 0, position: "relative", zIndex: 1 }}>
      <p style={{
        fontWeight: 700, fontSize: 18, letterSpacing: "0.2em",
        textTransform: "uppercase", color: CORAL, margin: 0,
      }}>
        PLATFORM ARCHITECTURE
      </p>
      <h1 style={{
        fontFamily: FONTS.heading, fontSize: 64, fontWeight: 600,
        color: COLORS.pureWhite, margin: "16px 0 0", lineHeight: 1.15,
      }}>
        Unified Data & Platform Model Advantages
      </h1>
    </header>

    {/* Four advantage cards */}
    <main style={{
      flex: 1, padding: "40px 120px 0", display: "flex", flexDirection: "column",
      gap: 24, justifyContent: "center", position: "relative", zIndex: 1,
    }}>
      {/* Three numbered cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {cards.map((card) => (
          <div key={card.number} style={{
            borderRadius: 18,
            overflow: "hidden",
            border: `1px solid ${CORAL_BORDER}`,
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              background: card.gradient,
              padding: "20px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{
                fontFamily: FONTS.heading,
                fontSize: 48,
                fontWeight: 700,
                color: COLORS.pureWhite,
                lineHeight: 1,
                textShadow: "0 2px 12px rgba(0,0,0,0.15)",
              }}>
                {card.number}
              </span>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              padding: "24px 24px 28px",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <p style={{
                fontSize: 22,
                fontWeight: 600,
                color: COLORS.pureWhite,
                margin: 0,
                textAlign: "center",
                lineHeight: 1.4,
                whiteSpace: "pre-line",
              }}>
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Four advantage pillars */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {advantages.map((adv) => (
          <div key={adv.title} style={{
            background: "rgba(240,168,140,0.10)",
            border: `1px solid ${CORAL_BORDER}`,
            borderRadius: 14,
            padding: "28px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 120,
          }}>
            <p style={{
              fontFamily: FONTS.heading,
              fontSize: 26,
              fontWeight: 600,
              color: COLORS.pureWhite,
              margin: 0,
              textAlign: "center",
              lineHeight: 1.3,
              whiteSpace: "pre-line",
            }}>
              {adv.title}
            </p>
          </div>
        ))}
      </div>

      {/* Unified Data Model bar */}
      <div style={{
        background: `linear-gradient(135deg, rgba(240,168,140,0.15) 0%, rgba(232,146,110,0.10) 100%)`,
        border: `1px solid ${CORAL_BORDER}`,
        borderRadius: 16,
        padding: "28px 48px 32px",
      }}>
        <p style={{
          fontSize: 22, fontWeight: 700, color: CORAL,
          margin: "0 0 20px", textAlign: "center", letterSpacing: "0.05em",
        }}>
          Unified Data Model
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          {dataModelItems.map((item) => (
            <div key={item} style={{
              flex: 1,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10,
              padding: "16px 24px",
              fontSize: 18,
              fontWeight: 500,
              color: COLORS.pureWhite,
              textAlign: "center",
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>

    </main>

    <SlideFooter slideNumber={slideNumber} variant="dark" />
  </div>
);

export default SlideUnifiedDataModel;
