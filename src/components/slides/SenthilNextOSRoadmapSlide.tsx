"use client";
import SlideFooter from "../SlideFooter";

interface RoadmapRow {
  category: string;
  q2: string[];
  h2: string[];
}

const rows: RoadmapRow[] = [
  {
    category: "AI Enabled\nBusiness Comms",
    q2: [
      "10 DLC AI Integration for Business Messaging",
    ],
    h2: [
      "Transcription and Summarization Rating",
      "Transcription and Summarization Admin Reporting",
      "Transcription and Summarization Sentiment Analysis and Topic Detection",
    ],
  },
  {
    category: "Usability\nImprovements",
    q2: [
      "Mobile Enhancements: usability improvements",
      "Global search",
      "Microsoft Teams Integration",
      "Conversations w/ Sorting, Filtering, Trash Bin Support",
      "Auto Replies",
      "Team Voicemail Access",
      "Log Enhancement w/ Caller ID",
    ],
    h2: [
      "Mobile Enhancements: Sentiments and Topics",
      "Message forwarding",
    ],
  },
  {
    category: "Manageability\nImprovements",
    q2: [
      "Location Based Administration",
      "Simplified Account Migration: Non-HIPAA → HIPAA",
      "Porting/10DLC Enhancements",
      "NextOS Ease of Use Enhancements",
      "Call Center improvements",
      "Call recorder admin notification and grouping",
      "Device management – remove custom tags",
      "Call Flow Templates",
      "Team management improvements",
      "User/billing mismatch",
    ],
    h2: [
      "Transcription and Summarization – Speaker Diarization",
      "Transcription and Summarization – Actionable Insights",
      "Transcription and Summarization – APIs",
      "Transcription and Summarization – Live",
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

export default function SenthilNextOSRoadmapSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          NextOS + Nextiva One
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
