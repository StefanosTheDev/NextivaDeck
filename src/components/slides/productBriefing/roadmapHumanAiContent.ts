/**
 * Product Briefing Jan 2026 — PDF p.17 / roadmap-human-ai-timeline.
 * Nested bullets mirror PDF “o” sub-bullets under Campaign Management.
 */

export type RoadmapBullet = string | { text: string; nested: string[] };

export const ROADMAP_QUARTER_LABELS = ["1Q 2026", "2Q 2026", "2H+ 2026"] as const;

export type RoadmapRowSpec = {
  /** Left-rail label (uppercase in UI) */
  labelLines: string[];
  q1: RoadmapBullet[];
  q2: RoadmapBullet[];
  q3: RoadmapBullet[];
};

export const ROADMAP_HUMAN_AI_ROWS: RoadmapRowSpec[] = [
  {
    labelLines: ["HUMAN + AI"],
    q1: [
      "NextIQ Conversational Agent Assist",
      "NextIQ Omnichannel Support",
      "Agent Assist w/ Ticket Journal Context",
      "AI Employee at Live Chat",
      "KB: Default Collection",
    ],
    q2: [
      "NextIQ for Mobile",
      "NextIQ Proactive Agent Assist",
      "NextIQ to Autopilot Toggle",
      "Agentic Call Adherence",
      "Hybrid Multi Entity Search w/ NextIQ Ramp",
    ],
    q3: ["Agentic Dynamic Scripting", "NextIQ Entity Extraction"],
  },
  {
    labelLines: ["AGENTIC CX FOR MM", "(AGENTS + SUPERVISORS)"],
    q1: [
      "Omni-Channel Conversations + Ticketing",
      "Manual Deflection",
      "Employee Engagement Monitoring – Human + AI",
    ],
    q2: [
      "AI Employee – Supervisor Nudge and Barge In",
      {
        text: "Campaign Management",
        nested: ["Journey Builder, Predictive and Progressive, SMS Campaigns"],
      },
    ],
    q3: [
      "Customizable User Surveys",
      {
        text: "Campaign Management",
        nested: ["Email Campaigns", "WhatsApp Campaigns"],
      },
    ],
  },
  {
    labelLines: ["AGENTIC CX FOR SB"],
    q1: [
      "AI Employee - SB Front Office for Voice, Live Chat",
      "OOB Skills: Answer FAQ, Triage/Reroute, Appt Scheduling, Lead Capture",
      "AI Employee Integrations - CRM, Calendar",
    ],
    q2: ["AI Employee for SMS*", "NEXT Studio (SMS reminders/Appts & Invoices)"],
    q3: ["AI Employee - Personal assistant (Voice, Email)"],
  },
  {
    labelLines: ["AGENTIC CX FOR VERTICALS"],
    q1: [
      // PDF truncates “(Previ…”; completed as Preview for readability.
      "Direct Integrations with leading EHR/EMR like Epic, ModMed, eCW, Cloud9 (Preview)",
      "Partner Integrations with most other EHR/EMR systems",
    ],
    q2: [
      "AI Employees (Healthcare): Book Appointments w/ EHR, Prescription Refill, Billing Question, Bill Payments.",
    ],
    q3: [],
  },
  {
    labelLines: ["BESPOKE, AT SCALE"],
    q1: [
      "AI Employee First Onboarding + Admin",
      "NEXT Studio: Simplified Flow Designer",
      "NEXT Studio: Auto Responses",
      "Auto Responders / Digital Deflection",
      "Customer Survey (CSAT and NPS Fixed)",
    ],
    q2: [
      "NEXT Studio: Agent Experience Designer",
      "NEXT Studio: Customer Experience Designer",
      "NEXT Studio: Flow Designer for Live Chat, Meta",
      "NEXT Studio: Integrations",
      "NEXT Studio: Widget Designer for Integrations",
      "Intent Detection for Email, Social",
      "In Flow Intent Detection for Calls, SMS",
    ],
    q3: [
      "NextIQ - CX Agent Trainer (AI)",
      "BYO Models, BYO Analytics, BYO Flows, BYO Agents",
      "AI Employee Testing, Eval",
    ],
  },
];
