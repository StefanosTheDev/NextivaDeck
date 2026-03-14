import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { MILESTONES, RETENTION } from "./financialData";

const rightMetrics = [
  { stat: MILESTONES.topCustomerPctARR, label: "Top customer share of ARR — no concentration" },
  { stat: `${Math.round(RETENTION.totalAccounts.FY26 / 1000)}K+`, label: "Accounts, all US" },
  { stat: `${RETENTION.pctIn12moContracts}%`, label: "In 12mo+ contracts" },
  { stat: `${MILESTONES.pctSeatBased}%`, label: "Subscription Recurring Revenue" },
];

const industries = [
  { name: "Business, Professional & Legal Services", pct: 22 },
  { name: "Healthcare & Life Sciences", pct: 16 },
  { name: "Construction & Real Estate", pct: 14 },
  { name: "Financial Services & Insurance", pct: 12 },
  { name: "Retail & Consumer Goods", pct: 10 },
  { name: "Manufacturing & Industrial", pct: 9 },
  { name: "Other industries", pct: 17 },
];

const SlideCustomerBase = ({ slideNumber = "09" }: { slideNumber?: string }) => (
  <div
    style={{ width: 1920, height: 1080, background: COLORS.dawnCream, display: "flex", flexDirection: "column", fontFamily: FONTS.body, position: "relative", overflow: "hidden" }}
    data-speaker-notes={`No customer concentration — top customer is ${MILESTONES.topCustomerPctARR} of ARR. Market-agnostic. Horizontal by design. Customer diversity reinforces credit durability.`}
  >
    <header style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" as const }}>
      <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>Customers</p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 76, fontWeight: 700, color: COLORS.navy, margin: "12px 0 0", lineHeight: 1.15 }}>A diversified, sticky customer base.</h1>
    </header>

    <main style={{ padding: "36px 100px 0", display: "flex", gap: 60 }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 20, fontWeight: 600, color: COLORS.charcoal, margin: "0 0 20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Industry distribution</p>
        {industries.map((ind) => (
          <div key={ind.name} style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 22, color: COLORS.darkWarmGray }}>{ind.name}</span>
              <span style={{ fontSize: 22, fontWeight: 600, color: COLORS.navy }}>{ind.pct}%</span>
            </div>
            <div style={{ width: "100%", height: 14, background: COLORS.paleWarm, borderRadius: 7 }}>
              <div style={{ width: `${ind.pct * 3}%`, height: "100%", background: COLORS.brandBlue, borderRadius: 7 }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        {rightMetrics.map((m) => (
          <article key={m.label} style={{ background: COLORS.pureWhite, border: `1px solid ${COLORS.paleWarm}`, borderRadius: 12, padding: "24px 32px", display: "flex", alignItems: "baseline", gap: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: 56, fontWeight: 700, color: COLORS.navy, minWidth: 120 }}>{m.stat}</span>
            <span style={{ fontSize: 24, color: COLORS.darkWarmGray, lineHeight: 1.4 }}>{m.label}</span>
          </article>
        ))}
      </div>
    </main>

    <div style={{ flex: 1, padding: "0 100px", display: "flex", alignItems: "center" }}>
      <div style={{ background: COLORS.paleWarm, borderRadius: 12, padding: "24px 36px", width: "100%" }}>
         <p style={{ fontSize: 29, color: COLORS.darkWarmGray, margin: 0, lineHeight: 1.5, textAlign: "center" as const }}>
           Market-agnostic. Customer diversity by size, industry, and tenure reinforces credit durability.
         </p>
      </div>
    </div>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideCustomerBase;
