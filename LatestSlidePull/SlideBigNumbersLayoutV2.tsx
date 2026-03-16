import { ArrowRight } from "lucide-react";
import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";

const CORAL = "#F0A88C";

export interface BigNumberMetric {
  value: string;
  label: string;
  detail?: string;
  highlight?: boolean;
  pending?: boolean;
}

interface SlideBigNumbersLayoutProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  metrics: BigNumberMetric[];
  connector?: { label: string };
  footnote?: string;
  slideNumber: string;
  speakerNotes: string;
}

const SlideBigNumbersLayoutV2 = ({
  eyebrow, title, subtitle, metrics, connector, footnote, slideNumber, speakerNotes,
}: SlideBigNumbersLayoutProps) => (
  <div
    style={{
      width: 1920, height: 1080,
      background: `linear-gradient(170deg, ${COLORS.midnightNavy} 0%, #0A1E3D 100%)`,
      display: "flex", flexDirection: "column", fontFamily: FONTS.body,
      overflow: "hidden", position: "relative",
    }}
    data-speaker-notes={speakerNotes}
  >
    {/* Subtle glow */}
    <div style={{
      position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)",
      width: 1200, height: 600, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(240,168,140,0.08) 0%, transparent 70%)",
    }} />

    {/* Subtle ascending bar chart texture */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0, height: "80%",
      display: "flex", alignItems: "flex-end", gap: 40, padding: "0 80px",
      pointerEvents: "none", zIndex: 0,
    }}>
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} style={{
          flex: 1, height: `${15 + (i / 6) * 85}%`,
          background: "rgba(255,255,255,0.015)", borderRadius: 6,
        }} />
      ))}
    </div>

    <header style={{ padding: "72px 120px 0", flexShrink: 0, position: "relative", zIndex: 1 }}>
      <p style={{
        fontWeight: 700, fontSize: 18, letterSpacing: "0.2em",
        textTransform: "uppercase", color: CORAL, margin: 0,
      }}>{eyebrow}</p>
      <h1 style={{
        fontFamily: FONTS.heading, fontSize: 68, fontWeight: 600,
        color: COLORS.pureWhite, margin: "16px 0 0", lineHeight: 1.15,
      }}>{title}</h1>
      {subtitle && (
        <p style={{
          fontSize: 26, color: "rgba(255,255,255,0.55)", margin: "16px 0 0",
          lineHeight: 1.4, maxWidth: 900,
        }}>{subtitle}</p>
      )}
    </header>

    <main style={{
      flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
      padding: "0 100px", gap: connector ? 56 : 32,
      position: "relative", zIndex: 1,
    }}>
      {metrics.map((m, i) => (
        <>
          {i > 0 && connector && (
            <div key={`conn-${i}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <ArrowRight size={94} color={CORAL} strokeWidth={2.5} />
              <p style={{
                fontFamily: FONTS.heading, fontSize: 53, fontWeight: 700,
                color: CORAL, margin: 0,
              }}>{connector.label}</p>
            </div>
          )}
          <div key={m.label} style={{
            flex: connector ? undefined : 1,
            background: m.highlight ? "rgba(240,168,140,0.08)" : "rgba(255,255,255,0.04)",
            border: m.highlight ? `2px solid ${CORAL}` : "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16, padding: "92px 100px",
            boxShadow: m.highlight ? "0 6px 32px rgba(240,168,140,0.12)" : "0 6px 32px rgba(0,0,0,0.2)",
            textAlign: "center" as const,
          }}>
            <p style={{
              fontSize: 24, fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", color: m.highlight ? CORAL : "rgba(255,255,255,0.4)",
              margin: 0,
            }}>{m.label}</p>
            <p style={{
              fontFamily: FONTS.heading, fontSize: 118, fontWeight: 700,
              color: m.pending ? "rgba(255,255,255,0.3)" : COLORS.pureWhite,
              margin: "12px 0 0", lineHeight: 1,
            }}>{m.value}</p>
            {m.detail && (
              <p style={{ fontSize: 22, color: "rgba(255,255,255,0.4)", margin: "8px 0 0" }}>{m.detail}</p>
            )}
          </div>
        </>
      ))}
    </main>

    {footnote && (
      <div style={{ padding: "0 120px 8px", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.35)", margin: 0 }}>{footnote}</p>
      </div>
    )}

    <SlideFooter slideNumber={slideNumber} variant="dark" />
  </div>
);

export default SlideBigNumbersLayoutV2;
