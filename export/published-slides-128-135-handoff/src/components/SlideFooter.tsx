"use client";

type FooterVariant = "light" | "dark";

interface SlideFooterProps {
  slideNumber: number;
  variant?: FooterVariant;
}

const styles: Record<FooterVariant, { color: string; borderColor: string }> = {
  light: { color: "#CCC7C3", borderColor: "#E0DEDA" },
  dark: { color: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.1)" },
};

export default function SlideFooter({ slideNumber, variant = "light" }: SlideFooterProps) {
  const v = styles[variant];
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
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 400,
        color: v.color,
      }}
    >
      <span>nextiva.com &nbsp;|&nbsp; a new dawn in customer experience.</span>
      <span>confidential</span>
      <span>{slideNumber}</span>
    </footer>
  );
}
