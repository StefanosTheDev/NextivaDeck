import Link from "next/link";

const routes = [
  {
    href: "/sesksom",
    title: "Sesksom",
    description: "Main slide deck version",
    color: "#2860B2",
  },
  {
    href: "/yaniv",
    title: "Yaniv",
    description: "Yaniv's slide deck version",
    color: "#059669",
  },
  {
    href: "/final-published",
    title: "Final Published",
    description: "The published showcase deck",
    color: "#d97706",
  },
  {
    href: "/catalog",
    title: "Catalog",
    description: "Manage, reorder & preview slides",
    color: "#a855f7",
  },
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0e1a 0%, #141b2d 50%, #0d1321 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "40px 24px",
      }}
    >
      <h1
        style={{
          fontSize: 40,
          fontWeight: 700,
          color: "#fff",
          marginBottom: 8,
          letterSpacing: "-0.02em",
        }}
      >
        Nextiva Investor Deck
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 48,
          fontWeight: 400,
        }}
      >
        Select a deck version to view
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          maxWidth: 960,
          width: "100%",
        }}
      >
        {routes.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "28px 24px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: r.color,
                marginBottom: 4,
              }}
            />
            <span
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#fff",
              }}
            >
              {r.title}
            </span>
            <span
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.45)",
                fontWeight: 400,
              }}
            >
              {r.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
