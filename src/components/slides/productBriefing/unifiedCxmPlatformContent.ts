/**
 * Copy source: Product Briefing Jan 2026 — PDF p.16 / PPTX slide 19
 * (the Nextiva Platform - Product Briefing Jan 2026.pdf)
 */

export type UnifiedCxmTriadColumn = { title: string; bullets: string[] };

export const UNIFIED_CXM_TRIAD: UnifiedCxmTriadColumn[] = [
  {
    title: "CX First",
    bullets: [
      "Unified Agent Experience",
      "Unified History",
      "Inbound/Outbound Voice",
      "Live Chat",
      "Business SMS",
      "Native Contact Management",
      "Digital Channels",
      "Messaging Apps",
      "Social Media Channels",
      "Customer Reviews & Reputation",
      "Video Meetings",
      "Direct Routing for Teams",
      "Agent-Facing Shopping Carts",
      "Nextiva Mobile App",
      "CX Team Collaboration",
    ],
  },
  {
    title: "Conversational Commerce",
    bullets: [
      "Website Monitoring & Breadcrumbing",
      "Secure Payment Agent Assist",
      "Intelligent & Skills-Based Routing",
      "Dynamic Agent Scripting",
      "Outbound Campaign Management",
      "Workflow & Decisioning Engines",
    ],
  },
  {
    title: "Human + AI",
    bullets: [
      "Business AI Agents (Voice + Messaging)",
      "Text-to-Speech",
      "Language Detection & Translation",
      "Gen AI Suggestion w/ KB",
      "Live Transcription",
      "Automatic Summarization",
      "Sentiment Analysis",
      "AI Engagement Classification",
      "Voice & Text Redaction",
      "Compliance Scorecard",
      "Reporting & Dashboards",
      "Conversational Analytics",
    ],
  },
];

export type UnifiedCxmStandaloneCard = { titleLines: string[]; bullets: string[] };

export const UNIFIED_CXM_STANDALONE: UnifiedCxmStandaloneCard[] = [
  {
    titleLines: ["Trustworthy"],
    bullets: [
      "Workforce Engagement Management",
      "Compliance Scorecards",
      "TCPA",
      "PCI",
      "HITRUST",
      "Do Not Call Registry Compliant",
      "GDPR",
      "Zero Maintenance Windows",
      "99.9999% Uptime",
      "<2 min Regional Disaster Recovery",
      "Data Residency",
    ],
  },
  {
    titleLines: ["Built to be", "Bespoke, At Scale"],
    bullets: [
      "Regional Clouds",
      "Edge Compute for Regulatory & Latency",
      "Customer Premises Support",
      "Overlay for Legacy Systems",
      "Customer Data Integrations",
      "Business Data Integrations",
      "REST APIs for UC/CC",
      "SDKs for mobile + desktop",
      "Private & Cloud AI Models",
      "Bring your own carrier",
    ],
  },
];
