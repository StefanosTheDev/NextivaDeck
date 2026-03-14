import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { PNL, FISCAL_YEARS } from "./financialData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from "recharts";

const fmt = (v: number) => `${Math.round(v)}`;

const data = FISCAL_YEARS.map((fy) => ({ name: fy, ebitda: PNL.adjEBITDA[fy] }));

const metrics = [
{ value: `$${fmt(PNL.adjEBITDA.FY26)}M`, label: "Adj EBITDA (FY26)", detail: "Up from breakeven in FY25" },
{ value: "$75–$80M", label: "FY26 Exit EBITDA Run Rate", detail: "Range reflects items still to be actioned", highlight: true },
{ value: `${PNL.ebitdaMarginPct.FY30}%`, label: "Target Margin (FY30)", detail: `$${fmt(PNL.adjEBITDA.FY30)}M Adj EBITDA` }];


const SlideEBITDA = ({ slideNumber = "22" }: {slideNumber?: string;}) =>
<div
  style={{ width: 1920, height: 1080, background: COLORS.dawnCream, display: "flex", flexDirection: "column", fontFamily: FONTS.body, overflow: "hidden" }}
  data-speaker-notes={`The EBITDA inflection is real. $${fmt(PNL.adjEBITDA.FY26)}M in FY26 at ${PNL.ebitdaMarginPct.FY26}% margin, targeting ${PNL.ebitdaMarginPct.FY30}% by FY30. Exit EBITDA run rate of $75–$80M. Range reflects items still to be actioned.`}>
  
    <header style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>Profitability</p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 68, fontWeight: 400, color: COLORS.navy, margin: "12px 0 0", lineHeight: 1.15 }}>Margin improves from breakeven to 22% by Q4</h1>
      <p style={{ fontSize: 24, color: COLORS.darkWarmGray, margin: "12px auto 0", lineHeight: 1.5, whiteSpace: "nowrap" }}>
        $75–$80M FY26 exit run rate provides near-term underwriting comfort.
      </p>
    </header>

    <main style={{ flex: 1, padding: "32px 100px 0", display: "flex", gap: 48 }}>
      {/* Left: Bar Chart */}
      <div style={{ flex: 55, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} margin={{ top: 24, right: 20, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.paleWarm} vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 22, fill: COLORS.darkWarmGray, fontFamily: FONTS.body }} axisLine={{ stroke: COLORS.paleWarm }} tickLine={false} />
            <YAxis domain={[0, 200]} tick={{ fontSize: 20, fill: COLORS.warmGray, fontFamily: FONTS.body }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${fmt(v)}M`} />
            <Bar dataKey="ebitda" fill={COLORS.brandBlue} radius={[8, 8, 0, 0]} maxBarSize={100}>
              <LabelList dataKey="ebitda" position="top" formatter={(v: number) => `$${fmt(v)}M`} style={{ fontSize: 20, fontWeight: 700, fill: COLORS.navy, fontFamily: FONTS.body }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Right: Metric Cards */}
      <div style={{ flex: 45, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
        {metrics.map((m) =>
      <div
        key={m.label}
        style={{
          background: COLORS.pureWhite,
          border: m.highlight ? `2px solid ${COLORS.brandBlue}` : `1px solid ${COLORS.paleWarm}`,
          borderRadius: 16,
          padding: "36px 40px",
          boxShadow: m.highlight ? "0 4px 16px rgba(40,96,178,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
          textAlign: "center" as const
        }}>
        
            <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: m.highlight ? COLORS.brandBlue : COLORS.warmGray, margin: 0 }}>{m.label}</p>
            <p style={{ fontFamily: FONTS.heading, fontSize: 64, fontWeight: 700, color: COLORS.navy, margin: "8px 0 0", lineHeight: 1 }}>{m.value}</p>
            {m.detail && <p style={{ fontSize: 22, color: COLORS.midWarmGray, margin: "6px 0 0" }}>{m.detail}</p>}
          </div>
      )}
      </div>
    </main>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>;


export default SlideEBITDA;