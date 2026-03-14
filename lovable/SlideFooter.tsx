import { COLORS, FONTS } from "../brandConstants";

type FooterVariant = "light" | "dark" | "sage" | "blue";

interface SlideFooterProps {
  slideNumber: string;
  variant?: FooterVariant;
}

const variantStyles: Record<FooterVariant, { color: string; borderColor: string }> = {
  light: { color: COLORS.lightWarmGray, borderColor: COLORS.paleWarm },
  dark: { color: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.1)" },
  sage: { color: COLORS.nearBlack, borderColor: "rgba(0,2,8,0.12)" },
  blue: { color: "rgba(255,255,255,0.4)", borderColor: "rgba(255,255,255,0.1)" },
};

const SlideFooter = ({ slideNumber, variant = "light" }: SlideFooterProps) => {
  const v = variantStyles[variant];
  return (
    <footer
      style={{
        borderTop: `1px solid ${v.borderColor}`,
        padding: "12px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: 0,
        fontSize: 20,
        fontFamily: FONTS.body,
        fontWeight: 400,
        color: v.color,
      }}
    >
      <span>nextiva.com &nbsp;|&nbsp; a new dawn in customer experience.</span>
      <span>confidential</span>
      <span>{slideNumber}</span>
    </footer>
  );
};

export default SlideFooter;
