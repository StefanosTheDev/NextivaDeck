import { ArrowRight } from "lucide-react";
import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";

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

const SlideBigNumbersLayout = ({
  eyebrow,
  title,
  subtitle,
  metrics,
  connector,
  footnote,
  slideNumber,
  speakerNotes,
}: SlideBigNumbersLayoutProps) => (
  <div
    style={{
      width: 1920,
      height: 1080,
      background: COLORS.dawnCream,
      display: "flex",
      flexDirection: "column",
      fontFamily: FONTS.body,
      overflow: "hidden",
    }}
    data-speaker-notes={speakerNotes}
  >
    <header style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p
        style={{
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: COLORS.brandBlue,
          margin: 0,
        }}
      >
        {eyebrow}
      </p>
      <h1
        style={{
          fontFamily: FONTS.heading,
          fontSize: 72,
          fontWeight: 400,
          color: COLORS.navy,
          margin: "12px 0 0",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            fontSize: 26,
            color: COLORS.darkWarmGray,
            margin: "12px 0 0",
            lineHeight: 1.4,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {subtitle}
        </p>
      )}
    </header>

    <main
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 80px",
        gap: connector ? 48 : 32,
      }}
    >
      {metrics.map((m, i) => (
        <>
          {i > 0 && connector && (
            <div
              key={`conn-${i}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <ArrowRight size={72} color={COLORS.brandBlue} strokeWidth={2.5} />
              <p
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 44,
                  fontWeight: 700,
                  color: COLORS.brandBlue,
                  margin: 0,
                }}
              >
                {connector.label}
              </p>
            </div>
          )}
          <div
            key={m.label}
            style={{
              flex: connector ? undefined : 1,
              background: COLORS.pureWhite,
              border: `1px solid ${COLORS.paleWarm}`,
              borderTop: `3px solid ${COLORS.brandBlue}`,
              borderRadius: 16,
              padding: "72px 80px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              textAlign: "center" as const,
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              justifyContent: "center",
              minHeight: 340,
            }}
          >
            <p
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: m.highlight ? COLORS.brandBlue : COLORS.warmGray,
                margin: 0,
              }}
            >
              {m.label}
            </p>
            <p
              style={{
                fontFamily: FONTS.heading,
                fontSize: 96,
                fontWeight: 700,
                color: m.pending ? COLORS.midWarmGray : COLORS.navy,
                margin: "12px 0 0",
                lineHeight: 1,
              }}
            >
              {m.value}
            </p>
            {m.detail && (
              <p
                style={{
                  fontSize: 26,
                  color: COLORS.midWarmGray,
                  margin: "8px 0 0",
                  minHeight: 64,
                }}
              >
                {m.detail}
              </p>
            )}
          </div>
        </>
      ))}
    </main>

    {footnote && (
      <div style={{ padding: "0 100px 8px", textAlign: "center" as const }}>
        <p style={{ fontSize: 20, color: COLORS.midWarmGray, margin: 0 }}>{footnote}</p>
      </div>
    )}

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideBigNumbersLayout;
