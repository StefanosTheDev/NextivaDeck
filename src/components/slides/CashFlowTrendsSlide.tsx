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
const BAR_TEAL = "#2A9D8F";
const BAR_GOLD = "#C4973B";
const LINE_NAVY = "#1A447C";

const labelStyle = { fontSize: 14, fontWeight: 600, fill: "#1A447C", fontFamily: "'Space Grotesk', sans-serif" };
const axisTick = { fontSize: 13, fill: "#6C6967", fontFamily: "'Space Grotesk', sans-serif" };
const MARGIN = { top: 28, right: 56, bottom: 0, left: 8 };

function CardBox({ title, value, children }: { title: string; value: string; children: React.ReactNode }) {
  return (
    <div className="card" style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
      <p className="font-body" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#2860B2", margin: 0 }}>{title}</p>
      <p className="font-heading" style={{ fontSize: 34, fontWeight: 700, color: "#1A447C", margin: 0, lineHeight: 1.1 }}>{value}</p>
      <p style={{ fontSize: 18, color: "#4A4846", margin: 0, lineHeight: 1.4 }}>{children}</p>
    </div>
  );
}

export default function CashFlowTrendsSlide({ slideNumber = 32 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "44px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow">Cash Flow Trends</p>
        <h1 className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#1A447C", marginTop: 10, lineHeight: 1.15 }}>
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
            <p className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#4A4846", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Adjusted EBITDA and Adjusted EBITDA Margin</p>
            <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
              <ComposedChart data={ebitdaData} margin={MARGIN}>
                <CartesianGrid vertical={false} stroke="#E0DEDA" />
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
            <CardBox title="Adj. EBITDA" value="$189M by FY30">
              Margins expand from ~0% to 41% via cost discipline and AI-driven leverage.
            </CardBox>
          </div>
        </div>

        {/* Row 2: Unlevered FCF chart + card */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <div style={{ flex: "1 1 55%" }}>
            <p className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#4A4846", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Unlevered FCF ($M) &amp; Adj. EBITDA→uFCF Conversion</p>
            <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
              <ComposedChart data={fcfData} margin={MARGIN}>
                <CartesianGrid vertical={false} stroke="#E0DEDA" />
                <XAxis dataKey="year" tick={axisTick} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" domain={[-50, 250]} ticks={[-50, 0, 50, 100, 150, 200, 250]} tick={axisTick} tickFormatter={(v: number) => `$${v}`} axisLine={false} tickLine={false} width={48} />
                <YAxis yAxisId="right" orientation="right" domain={[-20, 100]} ticks={[-20, 0, 20, 40, 60, 80, 100]} tick={axisTick} tickFormatter={(v: number) => `${v}%`} axisLine={false} tickLine={false} width={44} />
                <Bar yAxisId="left" dataKey="fcf" fill={BAR_TEAL} radius={[6, 6, 0, 0]} barSize={48}>
                  <LabelList dataKey="fcf" position="top" formatter={(v: any) => v < 0 ? `($${Math.abs(v).toFixed(0)})` : `$${v.toFixed(0)}`} style={{ ...labelStyle, fill: BAR_TEAL }} />
                </Bar>
                <Line yAxisId="right" type="monotone" dataKey="conversion" stroke={LINE_NAVY} strokeWidth={3} strokeDasharray="8 4" dot={{ r: 4, fill: LINE_NAVY }} connectNulls>
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
            <p className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#4A4846", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Cash &amp; Equivalents ($M)</p>
            <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
              <BarChart data={cashData} margin={MARGIN}>
                <CartesianGrid vertical={false} stroke="#E0DEDA" />
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

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
