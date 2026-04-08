"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ARR, TAM } from "../financialData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const SAM = TAM.underservedMiddle;
const TAM_TOTAL = TAM.projected;
const TAM_OUTSIDE_SAM = TAM_TOTAL - SAM;
const samPct = Math.round((SAM / TAM_TOTAL) * 1000) / 10;

const pieRows = [
  { name: "SAM — Nextiva focus", value: SAM, fill: "#4A9EF2", key: "sam" },
  { name: "CX TAM outside our SAM", value: TAM_OUTSIDE_SAM, fill: "rgba(255,255,255,0.1)", stroke: "rgba(255,255,255,0.18)", key: "rest" },
];

const notAddressed = [
  "Enterprise-only CCaaS (>250 agents)",
  "12–18 month rip-and-replace programs",
  "Point AI tools without a unified CX platform",
];

/** Narrative to the right of the “outside SAM” box — competitor dynamics */
const competitorContextBullets = [
  "Most platforms are aimed at enterprise and upper mid-market, not the broad middle.",
  "Heavy deployments and slow time-to-value block moving down.",
  "Economics tuned to big deals don't fund long-tail SMB at scale.",
  "Few credible players — fewer still with one unified CX stack.",
];

export default function CXTamNestedFocusSlide({ slideNumber = 50 }: { slideNumber?: number }) {
  const arrLabel = `~$${ARR.FY26}M`;
  const samLabel = `~$${SAM}B`;
  const tamLabel = `~$${TAM_TOTAL}B`;

  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 78% at 45% 30%, rgba(15,44,89,0.5) 0%, rgba(6,26,55,0.78) 52%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          padding: "40px 72px 0",
          flexShrink: 0,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#9BB5CC",
              margin: "0 0 8px",
            }}
          >
            MARKET OPPORTUNITY
          </p>
          <h1
            className="font-heading"
            style={{
              fontSize: 42,
              fontWeight: 600,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.22,
              maxWidth: 900,
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>
              SAM vs TAM: {samLabel} serviceable opportunity
            </span>
            <br />
            <span style={{ whiteSpace: "nowrap" }}>
              inside {tamLabel} CX TAM ({TAM.projectedYear}).
            </span>
          </h1>
          <p
            style={{
              margin: "12px 0 32px",
              fontSize: 19,
              color: "rgba(255,255,255,0.48)",
              lineHeight: 1.45,
              maxWidth: "none",
              whiteSpace: "nowrap",
            }}
          >
            The donut shows our <strong style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>SAM</strong> (where we compete) as a share
            of total <strong style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>TAM</strong> — illustrative of focus, not geographic
            scale.
          </p>
        </motion.div>
      </header>

      <main style={{ flex: 1, display: "flex", padding: "8px 72px 0", minHeight: 0, alignItems: "flex-start", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            width: "100%",
            maxWidth: 1320,
            minWidth: 0,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) min(360px, 32vw) minmax(260px, 1fr)",
            gridTemplateRows: "auto auto auto",
            columnGap: 60,
            alignItems: "start",
            position: "relative",
          }}
        >
          <div
            style={{
              gridColumn: 1,
              gridRow: 1,
              width: "100%",
              maxWidth: 580,
              height: 440,
              position: "relative",
              justifySelf: "center",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                <Pie
                  data={pieRows}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="74%"
                  outerRadius="96%"
                  paddingAngle={2}
                  stroke="none"
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieRows.map((row) => (
                    <Cell key={row.key} fill={row.fill} stroke={row.stroke ?? "rgba(5,10,20,0.6)"} strokeWidth={row.key === "rest" ? 1 : 0} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`$${value}B`, ""]}
                  contentStyle={{
                    background: "rgba(10,14,24,0.94)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14,
                  }}
                  labelStyle={{ color: "#fff", fontWeight: 600 }}
                  itemStyle={{ color: "rgba(255,255,255,0.9)" }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                pointerEvents: "none",
                width: "min(260px, 42%)",
                maxWidth: 280,
              }}
            >
              <p style={{ margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "#9BB5CC", textTransform: "uppercase" }}>
                CX TAM
              </p>
              <p className="font-heading" style={{ margin: "4px 0 0", fontSize: 34, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.05 }}>
                {tamLabel}
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.35 }}>
                {TAM.projectedYear} · {TAM.cagr}% CAGR vs CY26
              </p>
              <div
                style={{
                  marginTop: 12,
                  paddingTop: 10,
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#7EB3E8", textTransform: "uppercase" }}>
                  SAM (focus)
                </p>
                <p className="font-heading" style={{ margin: "2px 0 0", fontSize: 26, fontWeight: 700, color: "#7EB3E8" }}>
                  {samLabel}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.55)" }}>
                  {samPct}% of TAM
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            style={{
              gridColumn: "1 / -1",
              gridRow: 2,
              marginTop: 24,
              display: "flex",
              alignItems: "center",
              gap: 28,
              flexWrap: "nowrap",
              justifyContent: "center",
              justifySelf: "stretch",
              width: "100%",
              minWidth: 0,
              whiteSpace: "nowrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, whiteSpace: "nowrap" }}>
              <span style={{ width: 16, height: 16, borderRadius: 4, flexShrink: 0, background: "#4A9EF2" }} />
              <span style={{ fontSize: 18, color: "rgba(255,255,255,0.72)", lineHeight: 1.35 }}>
                SAM <strong style={{ color: "#fff" }}>{samLabel}</strong> — underserved middle &amp; adjacencies
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, whiteSpace: "nowrap" }}>
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  flexShrink: 0,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
              <span style={{ fontSize: 18, color: "rgba(255,255,255,0.58)", lineHeight: 1.35 }}>
                Rest of TAM <strong style={{ color: "rgba(255,255,255,0.82)" }}>~${TAM_OUTSIDE_SAM}B</strong>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            style={{
              gridColumn: "1 / -1",
              gridRow: 3,
              marginTop: 12,
              padding: "10px 20px",
              borderRadius: 10,
              background: "rgba(40,96,178,0.12)",
              border: "1px solid rgba(40,96,178,0.25)",
              justifySelf: "stretch",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "baseline",
              justifyContent: "center",
              width: "100%",
              minWidth: 0,
              whiteSpace: "nowrap",
              boxSizing: "border-box",
            }}
          >
            <span style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", flexShrink: 0 }}>Today’s footprint: </span>
            <span className="font-heading" style={{ fontSize: 21, fontWeight: 700, color: "#CCC7C3", flexShrink: 0 }}>
              {arrLabel} ARR (FY26)
            </span>
            <span style={{ fontSize: 16, color: "rgba(255,255,255,0.42)", marginLeft: 8, flexShrink: 0 }}>
              {" — early penetration of SAM"}
            </span>
          </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            gridColumn: 2,
            gridRow: 1,
            minWidth: 300,
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <div
            style={{
              background: "#2860B2",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              padding: "18px 22px",
              borderRadius: "12px 12px 0 0",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.35,
            }}
          >
            Mostly outside our SAM
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderTop: "none",
              borderRadius: "0 0 12px 12px",
              overflow: "hidden",
            }}
          >
            {notAddressed.map((text, i) => {
              const last = i === notAddressed.length - 1;
              return (
                <div
                  key={text}
                  style={{
                    padding: last ? "22px 24px 16px" : "22px 24px",
                    borderBottom: !last ? "1px dashed rgba(255,255,255,0.14)" : undefined,
                    fontSize: 17,
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.45,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {text}
                </div>
              );
            })}
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          style={{
            gridColumn: 3,
            gridRow: 1,
            alignSelf: "center",
            padding: "8px 0 8px 16px",
            borderLeft: "3px solid rgba(74,158,242,0.45)",
            minWidth: 0,
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.055em",
              textTransform: "uppercase",
              color: "#9BB5CC",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Why competitors stay upmarket
          </p>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {competitorContextBullets.map((line, idx) => (
              <li
                key={line}
                style={{
                  position: "relative",
                  paddingLeft: 16,
                  marginBottom: idx < competitorContextBullets.length - 1 ? 12 : 0,
                  fontSize: 16,
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.55em",
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#4A9EF2",
                  }}
                  aria-hidden
                />
                {line}
              </li>
            ))}
          </ul>
        </motion.div>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
