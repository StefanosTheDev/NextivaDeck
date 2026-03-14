import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { RETENTION } from "./financialData";

const cards = [
  {
    label: "Net revenue retention",
    from: `${RETENTION.nrr.FY25}%`,
    to: `${RETENTION.nrr.FY27}%`,
    direction: "up" as const,
    detail: "Expanding through upsell and cross-sell",
  },
  {
    label: "Logo Churn",
    from: `${RETENTION.logoChurn.FY25}%`,
    to: `${RETENTION.logoChurn.FY27}%`,
    direction: "down" as const,
    detail: "Improving customer retention",
  },
  {
    label: "MRR Churn",
    from: `${RETENTION.mrrChurn.FY25}%`,
    to: `${RETENTION.mrrChurn.FY27}%`,
    direction: "down" as const,
    detail: "Revenue churn declining",
  },
];

const SlideNRRChurn = ({ slideNumber = "24" }: { slideNumber?: string }) => (
  <div
    style={{ width: 1920, height: 1080, background: COLORS.dawnCream, display: "flex", flexDirection: "column", fontFamily: FONTS.body, overflow: "hidden" }}
    data-speaker-notes={`Retention improving across every metric. MRR Retention ${RETENTION.nrr.FY25}% to ${RETENTION.nrr.FY27}%. Logo churn ${RETENTION.logoChurn.FY25}% to ${RETENTION.logoChurn.FY27}%. MRR churn ${RETENTION.mrrChurn.FY25}% to ${RETENTION.mrrChurn.FY27}%.`}
  >
    <header style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>Retention trends</p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 72, fontWeight: 400, color: COLORS.navy, margin: "12px 0 0", lineHeight: 1.15 }}>Retention improving across every metric.</h1>
    </header>

    <main style={{ flex: 1, display: "flex", gap: 48, padding: "56px 100px", alignItems: "center" }}>
      {cards.map((c) => (
        <article key={c.label} style={{ flex: 1, background: COLORS.pureWhite, border: `1px solid ${COLORS.paleWarm}`, borderTop: `4px solid ${COLORS.brandBlue}`, borderRadius: 16, padding: "88px 56px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>{c.label}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, margin: "28px 0" }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: 64, fontWeight: 700, color: COLORS.warmGray }}>{c.from}</span>
            <span style={{ fontSize: 44, color: c.direction === "up" ? "#2E7D32" : COLORS.brandBlue }}>
              {c.direction === "up" ? "↑" : "↓"}
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: 64, fontWeight: 700, color: COLORS.navy }}>{c.to}</span>
          </div>
          <p style={{ fontSize: 18, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.warmGray, margin: 0 }}>FY25 → FY27</p>
          <p style={{ fontSize: 24, color: COLORS.darkWarmGray, margin: "16px 0 0", lineHeight: 1.5, minHeight: 72 }}>{c.detail}</p>
        </article>
      ))}
    </main>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideNRRChurn;
