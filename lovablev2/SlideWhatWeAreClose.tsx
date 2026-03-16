import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";

const CORAL = "#F0A88C";

const columns = [
  {
    keyword: "easy",
    subtitle: "to use",
    whatItMeans: "Intuitive and efficient",
    whyItMatters: "Customers are typically users of tech, not technologists, with limited IT and budget",
  },
  {
    keyword: "fast",
    subtitle: "time to value",
    whatItMeans: "Immediate impact",
    whyItMatters: "Fast-moving, often distributed multi-location teams need solutions that deploy quickly.",
  },
  {
    keyword: "unified",
    subtitle: "data",
    whatItMeans: "All your data in one place",
    whyItMatters: "Outcome-focused operators need full visibility and real-time insight",
  },
];

const SlideWhatWeAreClose = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920,
      height: 1080,
      background: `linear-gradient(170deg, ${COLORS.midnightNavy} 0%, #0A1E3D 100%)`,
      display: "flex",
      flexDirection: "column",
      fontFamily: FONTS.body,
      position: "relative",
      overflow: "hidden",
    }}
    data-speaker-notes="Reprise: Customers rely on Nextiva to run their customer communications. What matters most: easy to use, fast time to value, and unified data."
  >
    {/* Subtle glow */}
    <div style={{
      position: "absolute", bottom: -300, left: "50%", transform: "translateX(-50%)",
      width: 1200, height: 600, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(240,168,140,0.08) 0%, transparent 70%)",
    }} />

    <header style={{ padding: "64px 120px 0", flexShrink: 0, position: "relative", zIndex: 1 }}>
      <p style={{
        fontWeight: 700, fontSize: 18, letterSpacing: "0.2em",
        textTransform: "uppercase", color: CORAL, margin: 0,
      }}>
        HOW WE SERVE
      </p>
      <h1 style={{
        fontFamily: FONTS.heading, fontSize: 78, fontWeight: 600,
        color: COLORS.pureWhite, margin: "16px 0 0", lineHeight: 1.15,
      }}>
        Making world-class CX accessible<br />& affordable for every business.
      </h1>
    </header>

    <main style={{
      flex: 1, padding: "80px 120px 0", display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
      alignContent: "start", position: "relative", zIndex: 1,
    }}>
      {columns.map((col) => (
        <article key={col.keyword} style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14, padding: "32px 36px",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
            <span style={{
              fontFamily: FONTS.heading, fontSize: 48, fontWeight: 400,
              color: COLORS.pureWhite, lineHeight: 1.1,
            }}>
              {col.keyword}
            </span>
            <span style={{ fontSize: 22, color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>
              {col.subtitle}
            </span>
          </div>
          <div style={{ marginBottom: 20 }}>
            <p style={{
              fontSize: 16, fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", color: CORAL, margin: "0 0 6px",
            }}>
              What it means
            </p>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>
              {col.whatItMeans}
            </p>
          </div>
          <div>
            <p style={{
              fontSize: 16, fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", color: CORAL, margin: "0 0 6px",
            }}>
              Why it matters
            </p>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>
              {col.whyItMatters}
            </p>
          </div>
        </article>
      ))}
    </main>

    {/* Bottom insight bar */}
    <div style={{ padding: "0 120px", position: "relative", zIndex: 1 }}>
      <div style={{
        background: "rgba(240,168,140,0.1)", border: "1px solid rgba(240,168,140,0.2)",
        borderRadius: 14, padding: "20px 48px", textAlign: "center",
      }}>
        <p style={{ fontSize: 24, color: COLORS.pureWhite, margin: 0, lineHeight: 1.5 }}>
          Serving small to massive middle — millions of businesses that need enterprise-grade CX without enterprise complexity.
        </p>
      </div>
    </div>

    <SlideFooter slideNumber={slideNumber} variant="dark" />
  </div>
);

export default SlideWhatWeAreClose;
