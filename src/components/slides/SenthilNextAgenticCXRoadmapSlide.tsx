"use client";
import SlideFooter from "../SlideFooter";

interface RoadmapRow {
  category: string;
  q2: string[];
  h2: string[];
}

const rows: RoadmapRow[] = [
  {
    category: "Human + AI",
    q2: [
      "NextIQ Entity Extraction",
      "Autopilot Toggle, for Mobile",
      "Agentic Call Adherence",
      "Proactive Agent Assist",
    ],
    h2: [
      "NextIQ: Knowledge Fabric improvements, Reactive & Proactive insights, Intent Orchestration & 'Thinking' mode",
      "Nexar – UI & UX Desktop/Mobile Redesign",
      "Preview Dialer",
      "Enhanced Report Builder",
    ],
  },
  {
    category: "Agentic CX for MM\n(Agents + Supervisors)",
    q2: [
      "Improved customer onboarding: AI Employee Training, Testing, Deployment and Performance Analytics",
      "Conversational AI employee setup and assistance",
      "Hybrid Multi Entity Search w/ NextIQ Ramp",
      "Performance enhancements, Security features & Guardrails",
      "Support for Additional languages",
    ],
    h2: [
      "Customizable User Surveys",
      "Campaign Mgmt: Journey Builder, Predictive & Progressive, SMS, Email",
      "AI Employee – Supervisor Nudge and Barge In",
      "AI-Powered Analytics",
    ],
  },
  {
    category: "Agentic CX for SB",
    q2: [
      "Improve onboarding FTUE + 10DLC automation",
      "Transfer with Detailed Context / Dispositions",
      "ECommerce Self Serve",
    ],
    h2: [
      "AI Employee – Personal assistant (Voice, Email)",
      "ChatGPT App",
      "In-app upgrade path & product-led growth",
      "Full shopping cart / check out",
    ],
  },
  {
    category: "Agentic CX\nfor Verticals",
    q2: [
      "Adding New Industry Specific Skills & Integrations",
      "Industry Specific AI Employee guided set up",
      "AI Employees (Healthcare): Book Appointments w/ EHR, Prescription Refill, Billing Question, Bill Payments",
      "EHRs – Epic, ModMed, eCW, PlanetDDS, NextGen",
    ],
    h2: [
      "Healthcare: Oracle Health, Dentrix, DentiCon",
      "FinServ: NovelVox, Jack Henry",
    ],
  },
  {
    category: "Bespoke, At Scale",
    q2: [
      "NEXT Studio: Revamped Landing page",
    ],
    h2: [
      "NextIQ – CX Agent Trainer (AI)",
      "BYO Models, BYO Analytics, BYO Flows, BYO Agents",
      "Intent Detection: Voice and Digital channels",
      "NEXT Studio: AI-Powered workflow builder/Tester",
      "NEXT Studio: Version Control",
      "NEXT Studio: Survey Logic and Conditioning",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            fontSize: 12.5,
            color: "rgba(255,255,255,0.7)",
            marginBottom: i < items.length - 1 ? 3 : 0,
            lineHeight: 1.35,
            paddingLeft: 12,
            position: "relative",
          }}
        >
          <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function SenthilNextAgenticCXRoadmapSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <header style={{ padding: "28px 80px 0", flexShrink: 0, textAlign: "center" }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          PRODUCT ROADMAP
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "6px 0 0",
            lineHeight: 1.15,
          }}
        >
          the NEXT Agentic CX Platform
        </h1>
      </header>

      <main
        style={{
          flex: 1,
          padding: "12px 80px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Integrated grid: header row + data rows, all content-sized */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "140px 1fr 1fr",
            gap: 5,
          }}
        >
          {/* Column header row */}
          <div />
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              padding: "6px 0",
              background: "rgba(40,96,178,0.15)",
              borderRadius: 8,
            }}
          >
            2Q 2026
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              padding: "6px 0",
              background: "rgba(40,96,178,0.15)",
              borderRadius: 8,
            }}
          >
            2H 2026+
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div key={i} style={{ display: "contents" }}>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#7EB3E8",
                  lineHeight: 1.3,
                  whiteSpace: "pre-line",
                  padding: "8px 10px",
                  display: "flex",
                  alignItems: "center",
                  borderLeft: "3px solid rgba(40,96,178,0.4)",
                  borderRadius: 4,
                }}
              >
                {row.category}
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  padding: "8px 12px",
                }}
              >
                <BulletList items={row.q2} />
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  padding: "8px 12px",
                }}
              >
                <BulletList items={row.h2} />
              </div>
            </div>
          ))}
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
