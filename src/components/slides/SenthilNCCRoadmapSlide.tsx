"use client";
import SlideFooter from "../SlideFooter";

interface RoadmapRow {
  category: string;
  q2: string[];
  h2: string[];
}

const rows: RoadmapRow[] = [
  {
    category: "Agentic NCC",
    q2: [
      "NCC/NEXT IVA (xBert AI)",
      "Integration – IVA Solution (Voice) for NCC/NCX (Amelia)",
      "NextIQ Conversational Agent Assist",
    ],
    h2: [
      "NextIQ Pro-Active Agent Assist",
      "NextIQ to AutoPilot Toggle",
      "NEXT Studio (SMS reminders/Appts & Invoices)",
      "AI Employee Testing, Eval",
      "NEXT Studio: AI-Powered Customer Experience Designer",
      "NEXT Studio: Integrations, Versioning",
      "AI-Powered Analytics",
    ],
  },
  {
    category: "AI Employees",
    q2: [
      "KB: Default Collection",
      "AI Employee – Personal assistant (Voice)",
    ],
    h2: [
      "AI Employee – SB Front Office",
      "AI Employees – Restaurant",
      "AI Employee – Professional Services",
      "OOB Skills: Answer FAQ, Triage/Reroute",
      "AI Employee at LiveChat",
      "AI Employee for SMS",
      "AI Employee Onboarding",
    ],
  },
  {
    category: "Integrations",
    q2: [
      "Automated Microsoft Teams",
      "Salesforce CTI, Chrome Extension",
      "JusPay (Aggregator) SPAA – Stripe",
      "Assembled WFM",
    ],
    h2: [
      "QM/QA (Partner)",
      "Zendesk – Data Sync",
      "Zoho – Data Sync",
      "Creatio",
      "SugarCRM – Data Sync",
      "Keap – Data Sync",
      "Worldpay – SPAA",
    ],
  },
  {
    category: "Other",
    q2: [
      "Clonekit",
    ],
    h2: [
      "Predictive Campaign Performance Improvements",
      "Agent Scorecards",
      "SDK Beta",
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
            fontSize: 14,
            color: "rgba(255,255,255,0.7)",
            marginBottom: i < items.length - 1 ? 4 : 0,
            lineHeight: 1.35,
            paddingLeft: 14,
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

const COL_HEADER: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: "#FFFFFF",
  textAlign: "center",
  padding: "8px 0",
  background: "rgba(40,96,178,0.15)",
  borderRadius: 8,
};

const CAT_LABEL: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#7EB3E8",
  lineHeight: 1.3,
  whiteSpace: "pre-line",
  padding: "8px 10px",
  display: "flex",
  alignItems: "center",
  borderLeft: "3px solid rgba(40,96,178,0.4)",
  borderRadius: 4,
};

const CELL: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 8,
  padding: "8px 14px",
};

export default function SenthilNCCRoadmapSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <header style={{ padding: "32px 80px 0", flexShrink: 0, textAlign: "center" }}>
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
          PRODUCT ROADMAP
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
          Nextiva Contact Center
        </h1>
      </header>

      <main
        style={{
          flex: 1,
          padding: "8px 80px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "150px 1fr 1fr",
            gap: 5,
          }}
        >
          <div />
          <div style={COL_HEADER}>2Q 2026</div>
          <div style={COL_HEADER}>2H 2026+</div>

          {rows.map((row, i) => (
            <div key={i} style={{ display: "contents" }}>
              <div style={CAT_LABEL}>{row.category}</div>
              <div style={CELL}><BulletList items={row.q2} /></div>
              <div style={CELL}><BulletList items={row.h2} /></div>
            </div>
          ))}
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
