import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";

interface DataTableColumn {
  label: string;
  highlight?: boolean;
}

interface DataTableRow {
  cells: string[];
  bold?: boolean;
}

interface SlideDataTableLayoutProps {
  eyebrow: string;
  title: string;
  columns: DataTableColumn[];
  rows: DataTableRow[];
  footnote?: string;
  slideNumber: string;
  speakerNotes: string;
}

const SlideDataTableLayout = ({
  eyebrow,
  title,
  columns,
  rows,
  footnote,
  slideNumber,
  speakerNotes,
}: SlideDataTableLayoutProps) => (
  <div
    style={{ width: 1920, height: 1080, background: COLORS.dawnCream, display: "flex", flexDirection: "column", fontFamily: FONTS.body, overflow: "hidden" }}
    data-speaker-notes={speakerNotes}
  >
    <header style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>{eyebrow}</p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 72, fontWeight: 400, color: COLORS.navy, margin: "12px 0 0", lineHeight: 1.15 }}>{title}</h1>
    </header>

    <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 100px", gap: 24 }}>
      <div style={{ background: COLORS.pureWhite, border: `1px solid ${COLORS.paleWarm}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        {/* Header row */}
        <div style={{ display: "flex", padding: "24px 40px", borderBottom: `1px solid ${COLORS.paleWarm}`, background: COLORS.cream }}>
          {columns.map((col, i) => (
            <div
              key={i}
              style={{
                flex: i === 0 ? 2 : 1,
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: col.highlight ? COLORS.brandBlue : COLORS.midWarmGray,
                textAlign: i === 0 ? "left" : "right",
              }}
            >
              {col.label}
            </div>
          ))}
        </div>

        {/* Data rows */}
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              padding: "24px 40px",
              borderBottom: i < rows.length - 1 ? `1px solid ${COLORS.paleWarm}` : "none",
              background: r.bold ? "rgba(40,96,178,0.04)" : "transparent",
            }}
          >
            {r.cells.map((cell, ci) => (
              <div
                key={ci}
                style={{
                  flex: ci === 0 ? 2 : 1,
                  fontSize: 24,
                  fontWeight: ci === 0 && r.bold ? 700 : 400,
                  color: ci === 0 ? COLORS.navy : COLORS.midWarmGray,
                  textAlign: ci === 0 ? "left" : "right",
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>

      {footnote && (
        <p style={{ fontSize: 20, color: COLORS.midWarmGray, margin: 0 }}>{footnote}</p>
      )}
    </main>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideDataTableLayout;
