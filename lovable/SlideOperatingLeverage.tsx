import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { HEADCOUNT, FISCAL_YEARS, RD_REV_PER_HEAD } from "./financialData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const revPerHeadData = FISCAL_YEARS.map((fy) => ({
  name: fy,
  value: HEADCOUNT.revPerHead[fy],
  rdValue: RD_REV_PER_HEAD[fy],
}));

const formatK = (v: number) => v >= 1000 ? `$${(v / 1000).toFixed(1)}M` : `$${v}K`;

const topCards = [
  {
    label: "Revenue per Head",
    from: `$${HEADCOUNT.revPerHead.FY25}K`,
    to: `$${HEADCOUNT.revPerHead.FY30}K`,
    direction: "up" as const,
    detail: "2.2× improvement driven by AI-powered productivity.",
  },
  {
    label: "Revenue per R&D Head",
    from: formatK(RD_REV_PER_HEAD.FY25),
    to: formatK(RD_REV_PER_HEAD.FY30),
    direction: "up" as const,
    detail: "2.8× improvement — AI-driven productivity.",
  },
];


const Card = ({ c, range }: { c: { label: string; from: string; to: string; direction: "up" | "down"; detail: string }; range?: string }) => (
  <article style={{ background: COLORS.pureWhite, border: `1px solid ${COLORS.paleWarm}`, borderRadius: 16, padding: "16px 20px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", textAlign: "center" }}>
    <p style={{ fontSize: 17, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>{c.label}</p>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, margin: "8px 0" }}>
      <span style={{ fontFamily: FONTS.heading, fontSize: 34, fontWeight: 700, color: COLORS.warmGray }}>{c.from}</span>
      <span style={{ fontSize: 24, color: c.direction === "up" ? "#2E7D32" : COLORS.brandBlue }}>
        {c.direction === "up" ? "↑" : "↓"}
      </span>
      <span style={{ fontFamily: FONTS.heading, fontSize: 34, fontWeight: 700, color: COLORS.navy }}>{c.to}</span>
    </div>
    <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.warmGray, margin: 0 }}>
      {range || "FY25 → FY30"}
    </p>
    <p style={{ fontSize: 17, color: COLORS.darkWarmGray, margin: "8px 0 0", lineHeight: 1.4 }}>{c.detail}</p>
  </article>
);

const SlideOperatingLeverage = ({ slideNumber = "18" }: { slideNumber?: string }) => (
  <div
    style={{ width: 1920, height: 1080, background: COLORS.dawnCream, display: "flex", flexDirection: "column", fontFamily: FONTS.body, overflow: "hidden" }}
    data-speaker-notes="Revenue per head at $255K today, growing to $553K by FY30 — a 2.2× improvement driven by AI-powered productivity. Revenue per R&D head shows even stronger 2.8× leverage, from $921K to $2.5M."
  >
    <header style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>Operating leverage</p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 68, fontWeight: 400, color: COLORS.navy, margin: "10px 0 0", lineHeight: 1.15 }}>Realizing permanent operational efficiencies.</h1>
    </header>

    <main style={{ flex: 1, display: "flex", flexDirection: "column", padding: "16px 100px 0", gap: 8, minHeight: 0 }}>
      {/* Top row: Rev/Head chart + 2 cards */}
      <div style={{ flex: 1, display: "flex", gap: 32, minHeight: 0 }}>
        <div style={{ flex: "0 0 62%", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <p style={{ fontWeight: 700, fontSize: 22, color: COLORS.brandBlue, margin: "0 0 2px", letterSpacing: "0.02em" }}>Headcount Efficiency</p>
          <p style={{ fontSize: 14, color: COLORS.midWarmGray, margin: "0 0 4px", lineHeight: 1.4 }}>Revenue per full-time equivalent</p>
          <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
            {/* Inline legend */}
            <div style={{ position: "absolute", bottom: 56, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 20, zIndex: 1, fontSize: 18, color: COLORS.darkWarmGray }}>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 20, height: 3, background: COLORS.brandBlue, display: "inline-block", borderRadius: 2 }} />
                Rev / Head
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <svg width="20" height="3" style={{ display: "inline-block" }}>
                  <line x1="0" y1="1.5" x2="20" y2="1.5" stroke={COLORS.navy} strokeWidth="3" strokeDasharray="4 3" />
                </svg>
                Rev / R&D Head
              </span>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revPerHeadData} margin={{ top: 12, right: 24, left: 36, bottom: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={COLORS.paleWarm} vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 22, fill: COLORS.darkWarmGray, fontFamily: FONTS.body }} axisLine={{ stroke: COLORS.paleWarm }} tickLine={false} />
                <YAxis
                  domain={[0, 2800]}
                  ticks={[500, 1000, 1500, 2000, 2500]}
                  tick={{ fontSize: 20, fill: COLORS.darkWarmGray, fontFamily: FONTS.body }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: number) => v >= 1000 ? `$${(v / 1000).toFixed(1)}M` : `$${v}K`}
                />
                <Line type="monotone" dataKey="value" stroke={COLORS.brandBlue} strokeWidth={4} dot={{ r: 7, fill: COLORS.brandBlue }} name="Rev / Head" />
                <Line type="monotone" dataKey="rdValue" stroke={COLORS.navy} strokeWidth={4} dot={{ r: 7, fill: COLORS.navy }} strokeDasharray="6 4" name="Rev / R&D Head" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div style={{ flex: "0 0 38%", display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
          {topCards.map((c) => <Card key={c.label} c={c} />)}
        </div>
      </div>

    </main>

    <div style={{ padding: "0 100px 4px", textAlign: "center" as const }}>
      <p style={{ fontSize: 16, color: COLORS.midWarmGray, margin: 0 }}>All figures presented on a non-GAAP basis unless otherwise noted.</p>
    </div>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideOperatingLeverage;
