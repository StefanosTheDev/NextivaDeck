/**
 * Nextiva Products Roadmap — April 2026 (PDF pp. 3–6).
 * Copy rebuilt from PDF text; column splits on p.3 follow MM | SB | Verticals.
 */

export const PR_APR26_EYEBROW = "Products roadmap · April 2026";

/** PDF p.3 — three audience columns (not quarter-split in source). */
export const SLIDE03_TITLE = "the NEXT Agentic CX Platform";
export const SLIDE03_TIMELINE = "2Q 2026 · 2H 2026+";

export const SLIDE03_COLUMNS: { title: string; subtitle?: string; bullets: string[] }[] = [
  {
    title: "AGENTIC CX FOR MM",
    subtitle: "(AGENTS + SUPERVISORS)",
    bullets: [
      "Improved customer onboarding: AI Employee Training, Testing, Deployment and Performance Analytics",
      "Conversational AI employee setup and assistance",
      "Hybrid Multi Entity Search w/ NextIQ Ramp",
      "Performance enhancements, Security features & Guardrails",
      "Support for Additional languages",
      "Entity Extraction",
      "Autopilot Toggle, for Mobile",
      "Agentic Call Adherence",
      "Proactive Agent Assist",
      "NextIQ: Knowledge Fabric improvements, Reactive & Proactive insights, Intent Orchestration & 'Thinking' mode",
      "Nexar — UI & UX Desktop/Mobile Redesign",
      "Preview Dialer",
    ],
  },
  {
    title: "AGENTIC CX FOR SB",
    subtitle: "BESPOKE, AT SCALE",
    bullets: [
      "Enhanced Report Builder",
      "Customizable User Surveys",
      "Campaign Mgmt: Journey Builder, Predictive & Progressive, SMS, Email",
      "AI Employee — Supervisor Nudge and Barge In",
      "AI-Powered Analytics",
      "Improve onboarding FTUE + 10DLC automation",
      "Transfer with Detailed Context / Dispositions",
      "ECommerce Self Serve",
      "AI Employee — Personal assistant (Voice, Email)",
      "ChatGPT App",
      "In-app upgrade path & product-led growth",
      "Full shopping cart / check out",
    ],
  },
  {
    title: "AGENTIC CX FOR VERTICALS",
    bullets: [
      "Adding New Industry Specific Skills & Integrations",
      "Industry Specific AI Employee guided set up",
      "AI Employees (Healthcare): Book Appointments w/ EHR, Prescription Refill, Billing Question, Bill Payments.",
      "EHRs — Epic, ModMed, eCW, PlanetDDS, NextGen",
      "Healthcare: Oracle Health, Dentrix, DentiCon",
      "FinServ: NovelVox, Jack Henry",
      "NEXT Studio: Revamped Landing page",
      "NextIQ — CX Agent Trainer (AI)",
      "BYO Models, BYO Analytics, BYO Flows, BYO Agents",
      "Intent Detection: Voice and Digital channels",
      "NEXT Studio: AI-Powered workflow builder/Tester",
      "NEXT Studio: Version Control",
      "NEXT Studio: Survey Logic and Conditioning",
    ],
  },
];

export type DeliveredSection = { title: string; items: string[] };

export type DeliveredMonth = { label: string; sections: DeliveredSection[] };

/** PDF p.4 — Jan / Feb / Mar delivered. */
export const SLIDE04_MONTHS: DeliveredMonth[] = [
  {
    label: "Jan ’26 (Delivered)",
    sections: [
      {
        title: "Omni-Channel CX",
        items: [
          "Complete omni-channel with Business phone with IVR, Email, Text, Chat, X (FF)",
          "Shared Inbox and Ticketing",
          "OOB Dashboard and Reports",
          "Supervisor Dashboard (Whisper, barge-in, Listen, Silent Monitor) (FF)",
          "Calling Hardening",
          "Desk phone Support",
          "Desk phone management & setup",
          "Group paging (multicast)",
          "Call Logs / Call Recordings",
          "International dialing",
          "E911 — Extension numbers",
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
          "User Surveys (Templated CSAT and NPS)(FF)",
        ],
      },
      {
        title: "NEXT Studio *",
        items: [
          "Customizable workflow",
          "Customizable IVR",
          "Auto Responders",
          "Landing Page 1 (Channel to workflow mapping)",
        ],
      },
      { title: "Other", items: ["Location Based Admin*"] },
      { title: "Integrations*", items: ["Supported via iPaaS", "Salesforce (Setup Via APIs)"] },
    ],
  },
  {
    label: "Feb ’26 (Delivered)",
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
        title: "Campaign Management (Preview)",
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
          "Feb R2 — NCX tickets with related POPS & IPEAS",
        ],
      },
    ],
  },
  {
    label: "Mar ’26 (Delivered)",
    sections: [
      {
        title: "Omni-Channel CX",
        items: [
          "NEXT Admin — Device Keys Mgmt (Speeddial, BLF etc) (FF)",
          "SCA",
          "Extension management (3–6)",
        ],
      },
      {
        title: "NEXT Studio",
        items: ["Service delivery/support workflow improvement", "Landing Page enhancements"],
      },
      {
        title: "Other",
        items: [
          "NoN Surge — Live Chat Widget Improvements/Enhancements",
          "Usage Billing and Entitlements",
        ],
      },
    ],
  },
];

export const SLIDE04_FOOTNOTE = "* Improvements";
export const SLIDE04_PLATFORM_LINE = "the NEXT Agentic CX Platform (delivered in Q3)";

/** PDF p.5 */
export const SLIDE05_HEADER = "AGENTIC NCC";
export const SLIDE05_SUB = "Nextiva Contact Center";
export const SLIDE05_AI_EMPLOYEES: string[] = [
  "NCC/NEXT IVA (xBert AI)",
  "Integration — IVA Solution (Voice) for NCC/NCX (Amelia)",
  "NextIQ Conversational Agent Assist",
  "NextIQ Pro-Active Agent Assist",
  "NextIQ to AutoPilot Toggle",
  "NEXT Studio (SMS reminders/Appts & Invoices)",
  "AI Employee Testing, Eval",
  "NEXT Studio: AI-Powered Customer Experience Designer",
  "NEXT Studio: Integrations, Versioning",
  "AI-Powered Analytics",
  "KB: Default Collection",
  "AI Employee — Personal assistant (Voice)",
  "AI Employee — SB Front Office",
  "AI Employees — Restaurant",
  "AI Employee — Professional Services",
  "OOB Skills: Answer FAQ, Triage/Reroute",
  "AI Employee at LiveChat",
  "AI Employee for SMS*",
  "AI Employee Onboarding",
];

export const SLIDE05_INTEGRATIONS: string[] = [
  "Automated Microsoft Teams",
  "Salesforce CTI, Chrome Extension",
  "JusPay (Aggregator) SPAA — Stripe",
  "Assembled WFM",
  "QM/QA (Partner)",
  "Zendesk — Data Sync",
  "Zoho — Data Sync",
  "Creatio",
  "SugarCRM — Data Sync",
  "Keap — Data Sync",
  "Worldpay — SPAA",
];

export const SLIDE05_OTHER: string[] = [
  "Clonekit",
  "Predictive Campaign Performance Improvements",
  "Agent Scorecards",
  "SDK Beta",
];

/** PDF p.6 */
export const SLIDE06_2H: string[] = [
  "Transcription and Summarization Rating",
  "Transcription and Summarization Admin Reporting",
  "Transcription and Summarization Sentiment Analysis and Topic Detection",
  "Mobile Enhancements — Sentiments and Topics",
  "Mobile Enhancements — Message forwarding",
];

export const SLIDE06_2Q_TRANSCRIPTION: string[] = [
  "Transcription and Summarization — Speaker Diarization",
  "Transcription and Summarization — Actionable Insights",
  "Transcription and Summarization — APIs",
  "Transcription and Summarization — Live",
];

export const SLIDE06_USABILITY: string[] = [
  "10 DLC AI Integration for Business Messaging",
];

export const SLIDE06_MANAGEABILITY: string[] = [
  "Mobile Enhancements: usability improvements",
  "Global search",
  "Microsoft Teams Integration",
  "Conversations w/ Sorting, Filtering, Trash Bin Support",
  "Auto Replies",
  "Team Voicemail Access",
  "Log Enhancement w/ Caller ID",
  "Location Based Administration",
  "Simplified Account Migration: Non-HIPAA → HIPAA",
  "Porting/10DLC Enhancements",
];

export const SLIDE06_NEXTOS_EASE: string[] = [
  "Call Center improvements",
  "Call recorder admin notification and grouping",
  "Device management — remove custom tags",
  "Call Flow Templates",
  "Team management improvements",
  "User Move Location Support",
];
