import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";

const CORAL = "#F0A88C";

const columns = [
  {
    title: "Retrofitted CX",
    description:
      "Create an illusion of a unified front but underlying data lives in silos, limiting AI effectiveness.",
    competitors: "Five9, RingCentral, Talkdesk",
    weakness: "No unified data layer",
  },
  {
    title: "Dated Suites",
    description:
      "Legacy suites and platforms requiring costly integration, long deployments, and dedicated IT teams.",
    competitors: "Genesys, NICE, Cisco, Avaya",
    weakness: "12–18 month deployments",
  },
  {
    title: "AI-Only Startups",
    description:
      "New AI-native tools that lack the full platform and proven Agentic and Human in tandem handoff.",
    competitors: "Sierra, Decagon",
    weakness: "No full platform",
  },
  {
    title: "Point Solutions",
    description:
      "Lightweight tools that solve one channel but fragment the customer experience across silos.",
    competitors: "Countless Tools",
    weakness: "Fragments the CX",
  },
];

const nextivaPillars = [
  { label: "Unified Platform Experience", detail: "Single pane of glass across 40+ channels and all customer context" },
  { label: "Unified Data Layer", detail: "Real-time context across every interaction" },
  { label: "Agentic and Autonomous", detail: "AI + human handoff, zero-touch resolution" },
];

const SlideCompetitivePosition = ({
  slideNumber = "",
}: {
  slideNumber?: string;
}) => (
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
    data-speaker-notes="The CX market is fragmented across four categories — retrofitted CX, dated suites, AI-only startups, and point solutions. Each has fundamental limitations. Nextiva is the only unified platform with a unified data layer and agentic autonomous capabilities."
  >
    {/* Subtle glow */}
    <div
      style={{
        position: "absolute",
        top: -200,
        right: -100,
        width: 1000,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(240,168,140,0.08) 0%, transparent 70%)",
      }}
    />

    <header
      style={{
        padding: "64px 120px 0",
        flexShrink: 0,
        position: "relative",
        zIndex: 1,
      }}
    >
      <p
        style={{
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: CORAL,
          margin: 0,
        }}
      >
        COMPETITIVE LANDSCAPE
      </p>
      <h1
        style={{
          fontFamily: FONTS.heading,
          fontSize: 68,
          fontWeight: 600,
          color: COLORS.pureWhite,
          margin: "16px 0 0",
          lineHeight: 1.15,
        }}
      >
        Well-Positioned vs. the Competition
      </h1>
    </header>

    {/* Accent bar */}
    <div
      style={{
        margin: "36px 120px 0",
        height: 4,
        borderRadius: 2,
        background: `linear-gradient(90deg, ${CORAL} 0%, rgba(240,168,140,0.15) 100%)`,
        position: "relative",
        zIndex: 1,
      }}
    />

    <main
      style={{
        flex: 1,
        padding: "32px 120px 0",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1.15fr",
        gap: 20,
        alignContent: "start",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Competitor columns */}
      {columns.map((col) => (
        <article
          key={col.title}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontFamily: FONTS.heading,
              fontSize: 28,
              fontWeight: 600,
              color: COLORS.pureWhite,
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {col.title}
          </h2>
          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.55)",
              margin: "14px 0 0",
              lineHeight: 1.55,
              flex: 1,
            }}
          >
            {col.description}
          </p>

          {/* Weakness callout */}
          <div
            style={{
              marginTop: 16,
              padding: "10px 14px",
              background: "rgba(255,80,80,0.08)",
              border: "1px solid rgba(255,80,80,0.15)",
              borderRadius: 10,
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: "#FF6B6B",
                margin: 0,
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              ✗ {col.weakness}
            </p>
          </div>

          {/* Competitors */}
          <div
            style={{
              marginTop: 20,
              paddingTop: 16,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.6)",
                margin: 0,
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              {col.competitors}
            </p>
          </div>
        </article>
      ))}

      {/* Nextiva column — highlighted */}
      <article
        style={{
          background: `linear-gradient(170deg, rgba(240,168,140,0.18) 0%, rgba(240,168,140,0.06) 100%)`,
          border: `2px solid ${CORAL}`,
          borderRadius: 16,
          padding: "32px 28px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow inside card */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(240,168,140,0.2) 0%, transparent 70%)",
          }}
        />

        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: CORAL,
            margin: "0 0 8px",
          }}
        >
          OUR POSITION
        </p>
        <h2
          style={{
            fontFamily: FONTS.heading,
            fontSize: 32,
            fontWeight: 600,
            color: COLORS.pureWhite,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Nextiva
        </h2>

        <div style={{ marginTop: 28, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 22 }}>
          {nextivaPillars.map((pillar, i) => (
            <div
              key={pillar.label}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(240,168,140,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 700,
                  color: CORAL,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {i + 1}
              </span>
              <div>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: COLORS.pureWhite,
                    lineHeight: 1.3,
                    display: "block",
                  }}
                >
                  {pillar.label}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.4,
                    display: "block",
                    marginTop: 4,
                  }}
                >
                  {pillar.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Migration insight */}
        <div
          style={{
            marginTop: 20,
            padding: "12px 16px",
            background: "rgba(240,168,140,0.12)",
            border: `1px solid rgba(240,168,140,0.25)`,
            borderRadius: 10,
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: CORAL,
              margin: 0,
              fontWeight: 600,
              lineHeight: 1.45,
            }}
          >
            Customers switching from legacy and other solutions see 30–50% cost reduction and 10%–30% growth.
          </p>
        </div>
      </article>
    </main>

    <SlideFooter slideNumber={slideNumber} variant="dark" />
  </div>
);

export default SlideCompetitivePosition;
