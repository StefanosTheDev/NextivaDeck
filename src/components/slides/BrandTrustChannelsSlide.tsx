"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
  Cell,
  ReferenceLine,
} from "recharts";
import { TrendingUp, AlertTriangle } from "lucide-react";

const channelData = [
  { channel: "Social", lift: 0.67, trustPct: 90, fill: "#6EE7B7" },
  { channel: "Referral", lift: 0.53, trustPct: 83, fill: "#7BB3E0" },
  { channel: "Website", lift: 0.38, trustPct: 83, fill: "#7BB3E0" },
  { channel: "Search", lift: 0.36, trustPct: 84, fill: "#7BB3E0" },
  { channel: "Ads", lift: 0.34, trustPct: 64, fill: "#E07E7E" },
  { channel: "Email", lift: 0.15, trustPct: 95, fill: "#9BB5CC" },
];

const skepticQuotes = [
  {
    text: "I don\u2019t really want AI to take my calls. I personally don\u2019t like AI.",
    tag: "Rejection",
    tagColor: "#E07E7E",
  },
  {
    text: "Can the AI assistant speak Spanish?",
    tag: "Capability Gap",
    tagColor: "#E8B84D",
  },
  {
    text: "Obviously, it\u2019s still not human, but maybe if we can tweak it just a little bit, it won\u2019t feel too robotic.",
    tag: "UX Concern",
    tagColor: "#E8B84D",
  },
  {
    text: "Because it\u2019s so much information that the AI will have to have in order to communicate with people.",
    tag: "Complexity Doubt",
    tagColor: "#E8B84D",
  },
];

const industryCards = [
  {
    name: "Tech & Software",
    stat: "22%",
    desc: "customer-initiated (2.7x avg)",
    accent: "#6EE7B7",
  },
  {
    name: "Healthcare",
    stat: "77%",
    desc: "trust — lowest, but 13% seek us out",
    accent: "#E8B84D",
  },
];

export default function BrandTrustChannelsSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          Brand Trust — Channels & Friction
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          What builds trust — and what breaks it.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "16px 100px 0",
          display: "flex",
          gap: 24,
          minHeight: 0,
        }}
      >
        {/* Left — Channel Trust Lift */}
        <div
          style={{
            flex: "1 1 55%",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 10,
            }}
          >
            <TrendingUp size={16} color="#7BB3E0" />
            <p
              style={{
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7BB3E0",
                margin: 0,
              }}
            >
              Marketing Channel Trust Lift
            </p>
          </div>

          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              padding: "16px 12px 8px",
              minHeight: 0,
            }}
          >
            <ResponsiveContainer width="100%" height="85%">
              <BarChart
                data={channelData}
                margin={{ top: 24, right: 16, left: 4, bottom: 8 }}
                barSize={40}
              >
                <XAxis
                  dataKey="channel"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 13,
                    fontWeight: 600,
                    fill: "rgba(255,255,255,0.6)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                />
                <YAxis domain={[0, 1]} hide />
                <ReferenceLine y={0} stroke="rgba(255,255,255,0.1)" />
                <Bar dataKey="lift" radius={[6, 6, 0, 0]}>
                  {channelData.map((entry) => (
                    <Cell
                      key={entry.channel}
                      fill={entry.fill}
                      opacity={0.85}
                    />
                  ))}
                  <LabelList
                    dataKey="lift"
                    position="top"
                    formatter={(v: unknown) => `+${Number(v).toFixed(2)}`}
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      fill: "#FFFFFF",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    offset={6}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.35)",
                margin: "0 8px",
                lineHeight: 1.4,
              }}
            >
              Lift = avg trust score above 6.1 baseline. All channels indexed to
              calls where customer assumes AI works.
            </p>
          </div>

          {/* Industry mini-cards */}
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            {industryCards.map((ind) => (
              <div
                key={ind.name}
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `3px solid ${ind.accent}`,
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.7)",
                    margin: "0 0 2px",
                  }}
                >
                  {ind.name}
                </p>
                <p style={{ fontSize: 11, color: ind.accent, margin: 0 }}>
                  <span style={{ fontWeight: 700, fontSize: 16 }}>
                    {ind.stat}
                  </span>{" "}
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Voice of the Skeptic */}
        <div
          style={{
            flex: "1 1 45%",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 10,
            }}
          >
            <AlertTriangle size={16} color="#E07E7E" />
            <p
              style={{
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#E07E7E",
                margin: 0,
              }}
            >
              Voice of the Skeptic
            </p>
          </div>

          <p
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
              margin: "0 0 10px",
              lineHeight: 1.4,
            }}
          >
            3.5% skeptical + 12% partial-trust — the friction signals that reps
            encounter
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              flex: 1,
            }}
          >
            {skepticQuotes.map((q, i) => (
              <motion.div
                key={q.text}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `3px solid ${q.tagColor}`,
                  borderRadius: 12,
                  padding: "14px 16px",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.8)",
                    margin: "0 0 8px",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;{q.text}&rdquo;
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "2px 10px",
                    borderRadius: 12,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: q.tagColor,
                    background: `${q.tagColor}15`,
                    border: `1px solid ${q.tagColor}30`,
                  }}
                >
                  {q.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
