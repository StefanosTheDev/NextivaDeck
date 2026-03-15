"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { FISCAL_YEARS, PNL, UNLEVERED_FCF, EBITDA_UFCF_CONVERSION, CASH_EQUIVALENTS } from "../financialData";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  LabelList, Line, ComposedChart,
} from "recharts";

const YEARS = [...FISCAL_YEARS];

const ebitdaData = YEARS.map(fy => ({ year: fy, value: PNL.adjEBITDA[fy], margin: PNL.ebitdaMarginPct[fy] }));

const fcfData = YEARS.map(fy => ({
  year: fy,
  fcf: UNLEVERED_FCF[fy],
  conversion: EBITDA_UFCF_CONVERSION[fy],
}));

const cashData = YEARS.map(fy => ({ year: fy, value: CASH_EQUIVALENTS[fy] }));

const CHART_HEIGHT = 210;
const BAR_BLUE = "#2860B2";
const BAR_TEAL = "#3FC7B7";
const BAR_GOLD = "#E8B84D";
const LINE_NAVY = "#7EB3E8";

const labelStyle = { fontSize: 14, fontWeight: 600, fill: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" };
const axisTick = { fontSize: 13, fill: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif" };
const MARGIN = { top: 28, right: 56, bottom: 0, left: 8 };

function CardBox({ title, value, children }: { title: string; value: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 }}>
      <p style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#7EB3E8", margin: 0 }}>{title}</p>
      <p className="font-heading" style={{ fontSize: 34, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>{value}</p>
      <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.4 }}>{children}</p>
    </div>
  );
}

export default function CashFlowTrendsSlide({ slideNumber = 32 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)", justifyContent: "space-between" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCC7C3", margin: "0 0 10px" }}>Cash Flow Trends</p>
        <h1 className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Adjusted EBITDA, Free Cash Flow, and Cash Projections
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "16px 100px 0", display: "flex", flexDirection: "column", gap: 10, justifyContent: "center" }}
      >
        {/* Row 1: Adj EBITDA chart + card */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <div style={{ flex: "1 1 55%" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.5)", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Adjusted EBITDA and Adjusted EBITDA Margin</p>
            <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
              <ComposedChart data={ebitdaData} margin={MARGIN}>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="year" tick={axisTick} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" domain={[0, 250]} ticks={[0, 50, 100, 150, 200, 250]} tick={axisTick} tickFormatter={(v: number) => `$${v}`} axisLine={false} tickLine={false} width={48} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tick={axisTick} tickFormatter={(v: number) => `${v}%`} axisLine={false} tickLine={false} width={44} />
                <Bar yAxisId="left" dataKey="value" fill={BAR_BLUE} radius={[6, 6, 0, 0]} barSize={48}>
                  <LabelList dataKey="value" position="top" formatter={(v: any) => `$${Math.round(v)}`} style={labelStyle} />
                </Bar>
                <Line yAxisId="right" type="monotone" dataKey="margin" stroke="#CCC7C3" strokeWidth={3} strokeDasharray="8 4" dot={{ r: 4, fill: "#CCC7C3" }} connectNulls>
                  <LabelList dataKey="margin" position="bottom" formatter={(v: any) => `${v}%`} style={{ fontSize: 12, fontWeight: 600, fill: "#CCC7C3", fontFamily: "'Space Grotesk', sans-serif", opacity: 0.7 }} offset={8} />
                </Line>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div style={{ flex: "1 1 40%" }}>
            <CardBox title="Adj. EBITDA" value={`$${PNL.adjEBITDA.FY30}M by FY30`}>
              Margins expand from ~0% to {PNL.ebitdaMarginPct.FY30}% via cost discipline and AI-driven leverage.
            </CardBox>
          </div>
        </div>

        {/* Row 2: Unlevered FCF chart + card */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <div style={{ flex: "1 1 55%" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.5)", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Unlevered FCF ($M) &amp; Adj. EBITDA→uFCF Conversion</p>
            <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
              <ComposedChart data={fcfData} margin={MARGIN}>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="year" tick={axisTick} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" domain={[-50, 250]} ticks={[-50, 0, 50, 100, 150, 200, 250]} tick={axisTick} tickFormatter={(v: number) => `$${v}`} axisLine={false} tickLine={false} width={48} />
                <YAxis yAxisId="right" orientation="right" domain={[-20, 100]} ticks={[-20, 0, 20, 40, 60, 80, 100]} tick={axisTick} tickFormatter={(v: number) => `${v}%`} axisLine={false} tickLine={false} width={44} />
                <Bar yAxisId="left" dataKey="fcf" fill={BAR_TEAL} radius={[6, 6, 0, 0]} barSize={48}>
                  <LabelList dataKey="fcf" position="top" formatter={(v: any) => v < 0 ? `($${Math.abs(v).toFixed(0)})` : `$${v.toFixed(0)}`} style={{ ...labelStyle, fill: BAR_TEAL }} />
                </Bar>
                <Line yAxisId="right" type="monotone" dataKey="conversion" stroke="#7EB3E8" strokeWidth={3} strokeDasharray="8 4" dot={{ r: 4, fill: "#7EB3E8" }} connectNulls>
                  <LabelList dataKey="conversion" position="top" formatter={(v: any) => v != null ? `${v.toFixed(0)}%` : ""} style={{ fontSize: 12, fontWeight: 600, fill: "#CCC7C3", fontFamily: "'Space Grotesk', sans-serif" }} offset={8} />
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
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <div style={{ flex: "1 1 55%" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.5)", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Cash &amp; Equivalents ($M)</p>
            <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
              <BarChart data={cashData} margin={MARGIN}>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="year" tick={axisTick} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 600]} ticks={[0, 150, 300, 450, 600]} tick={axisTick} tickFormatter={(v: number) => `$${v}`} axisLine={false} tickLine={false} width={48} />
                <YAxis yAxisId="spacer" orientation="right" tick={false} axisLine={false} tickLine={false} width={44} />
                <Bar dataKey="value" fill={BAR_GOLD} radius={[6, 6, 0, 0]} barSize={48}>
                  <LabelList dataKey="value" position="top" formatter={(v: any) => `$${v.toFixed(0)}`} style={{ ...labelStyle, fill: BAR_GOLD }} />
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
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
