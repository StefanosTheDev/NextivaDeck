"use client";
import SlideFooter from "../SlideFooter";

interface Section {
  title: string;
  items: string[];
}

interface MonthColumn {
  header: string;
  sections: Section[];
}

const months: MonthColumn[] = [
  {
    header: "Jan '26 (Delivered)",
    sections: [
      {
        title: "Omni-Channel CX",
        items: [
          "Complete omni-channel with Business phone with IVR, Email, Text, Chat, X (FF)",
          "Shared Inbox and Ticketing",
          "OOB Dashboard and Reports",
          "Supervisor Dashboard (Whisper, barge-in, Listen, Silent Monitor) (FF)",
          "Calling Hardening",
          "Desk phone Support & management/setup",
          "Group paging (multicast)",
          "Call Logs / Call Recordings",
          "International dialing",
          "E911 – Extension numbers",
          "ATA device support",
        ],
      },
      {
        title: "AI Powered",
        items: [
          "Conversational NextIQ (Agent Assist)",
          "AI Employee for Telephony",
          "AI Employee for Live Chat",
          "AI Employee for SMS",
          "Engagement Summary and Ticket Level Summarization",
          "KB Management",
          "User Surveys (Templated CSAT and NPS) (FF)",
        ],
      },
      {
        title: "NEXT Studio",
        items: [
          "Customizable workflow",
          "Customizable IVR",
          "Auto Responders",
          "Landing Page 1 (Channel to workflow mapping)",
        ],
      },
      {
        title: "Other",
        items: ["Location Based Admin"],
      },
      {
        title: "Integrations",
        items: ["Supported via iPaaS", "Salesforce (Setup Via APIs)"],
      },
    ],
  },
  {
    header: "Feb '26 (Delivered)",
    sections: [
      {
        title: "Omni-Channel CX",
        items: [
          "New certified devices (Conf Phone, ATA)",
          "Edit device in Next Admin",
          "Group SMS (FF)",
          "Auto Disposition (FF)",
          "Any agent can respond to any ticket (FF)",
        ],
      },
      {
        title: "Campaign Management",
        items: ["Dialer Preview DEMO (HFC-Only via/FF)"],
      },
      {
        title: "NEXT Studio",
        items: ["Component connector improvement", "Node/state duplication"],
      },
      {
        title: "Other",
        items: [
          "New Back Office/Productivity User Role (FF)",
          "UI Improvements (30+)",
          "Feb R2 – NCX tickets with related POPS & IPEAS",
        ],
      },
    ],
  },
  {
    header: "Mar '26 (Delivered)",
    sections: [
      {
        title: "Omni-Channel CX",
        items: [
          "NEXT Admin – Device Keys Mgmt (Speeddial, BLF etc) (FF)",
          "SCA",
          "Extension management (3-6)",
        ],
      },
      {
        title: "NEXT Studio",
        items: [
          "Service delivery/support workflow improvement",
          "Landing Page enhancements",
        ],
      },
      {
        title: "Other",
        items: [
          "NoN Surge – Live Chat Widget Improvements/Enhancements",
          "Usage Billing and Entitlements",
        ],
      },
    ],
  },
];

export default function SenthilNextAgenticCXDeliveredSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          DELIVERED
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "6px 0 0",
            lineHeight: 1.15,
          }}
        >
          the NEXT Agentic CX Platform
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.45)",
            margin: "4px 0 0",
          }}
        >
          Delivered in Q3
        </p>
      </header>

      <main
        style={{
          flex: 1,
          padding: "10px 80px 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          alignContent: "start",
          overflow: "hidden",
        }}
      >
        {months.map((month, mi) => (
          <article
            key={mi}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10,
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 8px",
                lineHeight: 1.2,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: 8,
                background: "rgba(40,96,178,0.1)",
                margin: "-12px -14px 8px",
                padding: "10px 14px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              {month.header}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 6, overflow: "hidden" }}>
              {month.sections.map((section, si) => (
                <div key={si}>
                  <p
                    style={{
                      fontSize: 11.5,
                      fontWeight: 700,
                      color: "#7EB3E8",
                      margin: "0 0 2px",
                      lineHeight: 1.3,
                    }}
                  >
                    {section.title}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {section.items.map((item, ii) => (
                      <li
                        key={ii}
                        style={{
                          fontSize: 10.5,
                          color: "rgba(255,255,255,0.7)",
                          marginBottom: ii < section.items.length - 1 ? 1.5 : 0,
                          lineHeight: 1.3,
                          paddingLeft: 10,
                          position: "relative",
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
