import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextiva — Investor Deck 2026",
  description:
    "A New Dawn in Customer Experience. Nextiva is the complete customer experience platform powered by AI.",
  openGraph: {
    title: "Nextiva — Investor Deck 2026",
    description:
      "A New Dawn in Customer Experience. Nextiva is the complete customer experience platform powered by AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
