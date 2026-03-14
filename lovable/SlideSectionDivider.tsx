import { FONTS, COLORS } from "../brandConstants";
import SlideFooter from "./SlideFooter";

interface SlideSectionDividerProps {
  sectionNumber: string;
  sectionTitle: string;
  slideNumber: string;
  footerVariant?: "light" | "dark" | "sage" | "blue";
  /* legacy props kept for compat but ignored */
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  eyebrowColor?: string;
  accentNumberColor?: string;
}

const SlideSectionDivider = ({
  sectionNumber,
  sectionTitle,
  slideNumber,
  subtitle,
  footerVariant = "sage",
}: SlideSectionDividerProps) => (
  <div
    style={{
      width: 1920,
      height: 1080,
      background: "linear-gradient(180deg, #F5F0E8 0%, #D9E6F0 100%)",
      display: "flex",
      flexDirection: "column",
      fontFamily: FONTS.body,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Watermark number */}
    {sectionNumber && (
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: FONTS.heading,
          fontWeight: 400,
          fontSize: 120,
          color: "rgba(186, 192, 181, 0.3)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {sectionNumber}
      </span>
    )}

    {/* Centered title + subtitle */}
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontFamily: FONTS.heading,
          fontSize: 72,
          fontWeight: 400,
          color: COLORS.navy,
          margin: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {sectionTitle}
      </h1>
      {subtitle && (
        <p
          style={{
            fontFamily: FONTS.heading,
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.midWarmGray,
            margin: "16px 0 0",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>

    <SlideFooter slideNumber={slideNumber} variant={footerVariant} />
  </div>
);

export default SlideSectionDivider;
