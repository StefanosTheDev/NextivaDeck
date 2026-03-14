import { COLORS, FONTS } from "../brandConstants";
import { FISCAL_YEARS, PNL, UNLEVERED_FCF, EBITDA_UFCF_CONVERSION, CASH_EQUIVALENTS } from "./financialData";
import SlideFooter from "./SlideFooter";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  LabelList, LineChart, Line, ComposedChart, Tooltip,
} from "recharts";

const YEARS = [...FISCAL_YEARS];

const ebitdaData = YEARS.map(fy => ({ year: fy, value: PNL.adjEBITDA[fy], margin: PNL.ebitdaMarginPct[fy] }));

const fcfData = YEARS.map(fy => ({
  year: fy,
  fcf: UNLEVERED_FCF[fy],
  conversion: EBITDA_UFCF_CONVERSION[fy],
}));

const cashData = YEARS.map(fy => ({ year: fy, value: CASH_EQUIVALENTS[fy] }));

const CHART_HEIGHT = 220;
const BAR_BLUE = COLORS.brandBlue;
const BAR_TEAL = "#2A9D8F";
const BAR_GOLD = "#C4973B";
const LINE_NAVY = COLORS.navy;

const labelStyle = { fontSize: 16, fontWeight: 600, fill: COLORS.navy, fontFamily: FONTS.body };
const axisTick = { fontSize: 14, fill: COLORS.midWarmGray, fontFamily: FONTS.body };
const MARGIN = { top: 28, right: 60, bottom: 0, left: 8 };

const CardBox = ({ title, value, children }: { title: string; value: string; children: React.ReactNode }) => (
  <div style={{
    background: COLORS.pureWhite,
    borderRadius: 16,
    padding: "20px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  }}>
    <p style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: COLORS.brandBlue, margin: 0, fontFamily: FONTS.body }}>{title}</p>
    <p style={{ fontSize: 38, fontWeight: 700, color: COLORS.navy, margin: 0, fontFamily: FONTS.heading, lineHeight: 1.1 }}>{value}</p>
    <p style={{ fontSize: 22, color: COLORS.darkWarmGray, margin: 0, lineHeight: 1.4, fontFamily: FONTS.body }}>{children}</p>
  </div>
);

const SPEAKER_NOTES = `Adj. EBITDA grows from ~$0 in FY25 to $187M by FY30 (40% margin). Unlevered FCF reaches $170M with 91% Adj. EBITDA-to-uFCF conversion, demonstrating highly capital-efficient operations. Cash & equivalents accumulate to $517M by FY30, providing ample liquidity for debt service and strategic flexibility.`;

const SlideCashFlowTrends = () => (
  <div
    style={{ width: 1920, height: 1080, background: COLORS.dawnCream, display: "flex", flexDirection: "column", fontFamily: FONTS.body, overflow: "hidden" }}
    data-speaker-notes={SPEAKER_NOTES}
  >
    {/* Header */}
    <header style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>Cash Flow Trends</p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 52, fontWeight: 400, color: COLORS.navy, margin: "10px 0 0", lineHeight: 1.15 }}>
        Adjusted EBITDA, Free Cash Flow, and Cash Projections
      </h1>
    </header>

    <main style={{ flex: 1, padding: "24px 100px 0", display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
      {/* Row 1: Adj EBITDA chart + card */}
      <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
        <div style={{ flex: "1 1 55%" }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: COLORS.darkWarmGray, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Adjusted EBITDA and Adjusted EBITDA Margin</p>
          <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
            <ComposedChart data={ebitdaData} margin={MARGIN}>
              <CartesianGrid vertical={false} stroke={COLORS.paleWarm} />
              <XAxis dataKey="year" tick={axisTick} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" domain={[0, 250]} ticks={[0, 50, 100, 150, 200, 250]} tick={axisTick} tickFormatter={(v: number) => `$${v}`} axisLine={false} tickLine={false} width={52} />
              <YAxis yAxisId="right" orientation="right" domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tick={axisTick} tickFormatter={(v: number) => `${v}%`} axisLine={false} tickLine={false} width={48} />
              <Bar yAxisId="left" dataKey="value" fill={BAR_BLUE} radius={[6, 6, 0, 0]} barSize={52}>
                <LabelList dataKey="value" position="top" formatter={(v: number) => `$${Math.round(v)}`} style={labelStyle} />
              </Bar>
              <Line yAxisId="right" type="monotone" dataKey="margin" stroke={COLORS.lightWarmGray} strokeWidth={3} strokeDasharray="8 4" dot={{ r: 5, fill: COLORS.lightWarmGray }} connectNulls>
                <LabelList dataKey="margin" position="bottom" formatter={(v: number) => `${v}%`} style={{ fontSize: 14, fontWeight: 600, fill: COLORS.lightWarmGray, fontFamily: FONTS.body, opacity: 0.6 }} offset={10} />
              </Line>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: "1 1 40%" }}>
          <CardBox title="Adj. EBITDA" value="$187M by FY30">
            Margins expand from ~0% to 40% via cost discipline and AI-driven leverage.
          </CardBox>
        </div>
      </div>

      {/* Row 2: Unlevered FCF chart + card */}
      <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
        <div style={{ flex: "1 1 55%" }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: COLORS.darkWarmGray, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Unlevered FCF ($M) &amp; Adj. EBITDA→uFCF Conversion</p>
          <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
            <ComposedChart data={fcfData} margin={MARGIN}>
              <CartesianGrid vertical={false} stroke={COLORS.paleWarm} />
              <XAxis dataKey="year" tick={axisTick} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" domain={[-50, 250]} ticks={[-50, 0, 50, 100, 150, 200, 250]} tick={axisTick} tickFormatter={(v: number) => `$${v}`} axisLine={false} tickLine={false} width={52} />
              <YAxis yAxisId="right" orientation="right" domain={[-20, 100]} ticks={[-20, 0, 20, 40, 60, 80, 100]} tick={axisTick} tickFormatter={(v: number) => `${v}%`} axisLine={false} tickLine={false} width={48} />
              <Bar yAxisId="left" dataKey="fcf" fill={BAR_TEAL} radius={[6, 6, 0, 0]} barSize={52}>
                <LabelList dataKey="fcf" position="top" formatter={(v: number) => v < 0 ? `($${Math.abs(v).toFixed(0)})` : `$${v.toFixed(0)}`} style={{ ...labelStyle, fill: BAR_TEAL }} />
              </Bar>
              <Line yAxisId="right" type="monotone" dataKey="conversion" stroke={LINE_NAVY} strokeWidth={3} strokeDasharray="8 4" dot={{ r: 5, fill: LINE_NAVY }} connectNulls>
                <LabelList dataKey="conversion" position="top" formatter={(v: number | null) => v != null ? `${v.toFixed(0)}%` : ''} style={{ fontSize: 14, fontWeight: 600, fill: COLORS.lightWarmGray, fontFamily: FONTS.body }} offset={10} />
              </Line>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: "1 1 40%" }}>
          <CardBox title="FCF Conversion" value="91% by FY30">
            Low capex and working-capital needs convert nearly all Adj. EBITDA to cash.
          </CardBox>
        </div>
      </div>

      {/* Row 3: Cash & Equivalents chart + card */}
      <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
        <div style={{ flex: "1 1 55%" }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: COLORS.darkWarmGray, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Cash &amp; Equivalents ($M)</p>
          <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
            <BarChart data={cashData} margin={MARGIN}>
              <CartesianGrid vertical={false} stroke={COLORS.paleWarm} />
              <XAxis dataKey="year" tick={axisTick} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 600]} ticks={[0, 150, 300, 450, 600]} tick={axisTick} tickFormatter={(v: number) => `$${v}`} axisLine={false} tickLine={false} width={52} />
              <YAxis yAxisId="spacer" orientation="right" tick={false} axisLine={false} tickLine={false} width={48} />
              <Bar dataKey="value" fill={BAR_GOLD} radius={[6, 6, 0, 0]} barSize={52}>
                <LabelList dataKey="value" position="top" formatter={(v: number) => `$${v.toFixed(0)}`} style={{ ...labelStyle, fill: BAR_GOLD }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: "1 1 40%" }}>
          <CardBox title="Cash Accumulation" value="$517M by FY30">
            Cumulative cash provides ample liquidity for debt service and investment.
          </CardBox>
        </div>
      </div>
    </main>

    <SlideFooter slideNumber="" variant="light" />
  </div>
);

export default SlideCashFlowTrends;
