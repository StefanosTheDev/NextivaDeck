"use client";
import React from "react";

/* ── Design system ── */
const C = {
  midnightNavy: "#061A37",
  deepNavy: "#0F2C59",
  brandBlue: "#2860B2",
  accentBlue: "#4A9EF2",
  pureWhite: "#FFFFFF",
  warmGray: "#A29E9B",
} as const;

const F = {
  heading: "Georgia, serif",
  body: "'Space Grotesk', 'Work Sans', Arial, sans-serif",
} as const;

/* ── Table data ── */
const rows: { metric: string; fy26: string; fy27: string; fy30: string; bold?: boolean }[] = [
  { metric: "Revenue",           fy26: "$353M", fy27: "$373M", fy30: "$454–$472M" },
  { metric: "Gross Margin",      fy26: "70%",   fy27: "73%",   fy30: "75–79%" },
  { metric: "S&M",               fy26: "27%",   fy27: "23%",   fy30: "14–18%" },
  { metric: "R&D",               fy26: "12%",   fy27: "9%",    fy30: "8–12%" },
  { metric: "G&A",               fy26: "13%",   fy27: "10%",   fy30: "5–9%" },
  { metric: "Adj EBITDA Margin", fy26: "13%",   fy27: "25%",   fy30: "38–42%",       bold: true },
  { metric: "Adj EBITDA",        fy26: "$44M",  fy27: "$94M",  fy30: "$181–$189M",   bold: true },
];

/* ── Slide component ── */
export default function SlideTargetModelDark({
  slideNumber = "25",
}: {
  slideNumber?: string | number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: C.midnightNavy,
        width: 1920,
        height: 1080,
        display: "flex",
        flexDirection: "column",
        fontFamily: F.body,
        overflow: "hidden",
      }}
      data-speaker-notes="FY27 is where the model really inflects. Investors should underwrite the near-term, FY30 is upside."
    >
      {/* ── Header ── */}
      <header style={{ padding: "60px 100px 0", textAlign: "center", flexShrink: 0 }}>
        <p
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: C.accentBlue,
            margin: "0 0 8px",
            fontFamily: F.body,
          }}
        >
          TARGET MODEL
        </p>
        <h1
          style={{
            fontFamily: F.heading,
            fontSize: 72,
            fontWeight: 400,
            color: C.pureWhite,
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Near-term plan and long-term targets.
        </h1>
      </header>

      {/* ── Table ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "0 100px",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "flex",
              background: "rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "24px 40px",
            }}
          >
            <div
              style={{
                flex: 2,
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Metric
            </div>
            <div
              style={{
                flex: 1,
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "rgba(255,255,255,0.4)",
                textAlign: "right",
              }}
            >
              FY26
            </div>
            <div
              style={{
                flex: 1,
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "rgba(255,255,255,0.4)",
                textAlign: "right",
              }}
            >
              FY27
            </div>
            <div
              style={{
                flex: 1,
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: C.accentBlue,
                textAlign: "right",
              }}
            >
              FY30 Target
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.metric}
              style={{
                display: "flex",
                padding: "24px 40px",
                borderBottom:
                  i < rows.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
                background: row.bold ? "rgba(74,158,242,0.08)" : "transparent",
              }}
            >
              <div
                style={{
                  flex: 2,
                  fontSize: 24,
                  fontWeight: row.bold ? 700 : 400,
                  color: row.bold ? C.accentBlue : C.pureWhite,
                }}
              >
                {row.metric}
              </div>
              <div
                style={{
                  flex: 1,
                  fontSize: 24,
                  fontWeight: row.bold ? 700 : 400,
                  color: row.bold ? C.accentBlue : "rgba(255,255,255,0.6)",
                  textAlign: "right",
                }}
              >
                {row.fy26}
              </div>
              <div
                style={{
                  flex: 1,
                  fontSize: 24,
                  fontWeight: row.bold ? 700 : 400,
                  color: row.bold ? C.accentBlue : "rgba(255,255,255,0.6)",
                  textAlign: "right",
                }}
              >
                {row.fy27}
              </div>
              <div
                style={{
                  flex: 1,
                  fontSize: 24,
                  fontWeight: row.bold ? 700 : 400,
                  color: row.bold ? C.accentBlue : "rgba(255,255,255,0.6)",
                  textAlign: "right",
                }}
              >
                {row.fy30}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footnote ── */}
      <p
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.25)",
          fontFamily: F.body,
          padding: "0 80px 6px",
          margin: 0,
          flexShrink: 0,
        }}
      >
        Nextiva fiscal year ends June 30. Forward looking projections do not include pro forma
        financing costs or assumptions, potential acquisitions, expected tax payments not covered
        by NOLs.
      </p>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "12px 80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 20, color: "rgba(255,255,255,0.3)", fontFamily: F.body }}>
          nextiva.com | a new dawn in customer experience.
        </span>
        <span style={{ fontSize: 20, color: "rgba(255,255,255,0.3)", fontFamily: F.body }}>
          confidential
        </span>
        <span style={{ fontSize: 20, color: "rgba(255,255,255,0.3)", fontFamily: F.body }}>
          {slideNumber}
        </span>
      </footer>
    </div>
  );
}
