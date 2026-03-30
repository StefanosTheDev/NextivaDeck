"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Clock, ArrowUpRight } from "lucide-react";

const segments = [
  {
    name: "VB",
    range: "Up to 10 Users",
    badges: ["NEXT", "NextOS", "XBert AI", "NextivaONE"],
    customers: "80,200",
    custPct: "86% of total",
    arr: "$143M",
    arrPct: "41% of total",
    logos: [
      { name: "Canyon Coolers", industry: "Food & Beverage", initials: "CC", color: "#2563EB", logo: "/logos/canyon-coolers.png" },
      { name: "New England Brewing Co", industry: "Food & Beverage", initials: "NE", color: "#7C3AED", logo: "/logos/new-england-brewing.jpg" },
      { name: "Edgar's Bakery", industry: "Food & Beverage", initials: "EB", color: "#0891B2", logo: "/logos/edgars-bakery.png" },
      { name: "Wine Library", industry: "Retail", initials: "WL", color: "#F59E0B", logo: "/logos/wine-library.png" },
      { name: "Mister Pizza", industry: "Food & Beverage", initials: "MP", color: "#10B981", logo: "/logos/mister-pizza.png" },
    ],
    tenure: "4.5 years",
  },
  {
    name: "SMB",
    range: "10 to 50 Users",
    badges: ["NEXT", "XBert AI", "Experience Center"],
    customers: "11,000",
    custPct: "12% of total",
    arr: "$106M",
    arrPct: "30% of total",
    logos: [
      { name: "Compartes", industry: "Food & Beverage", initials: "CO", color: "#0284C7", logo: "/logos/compartes.png" },
      { name: "Savannah Bananas", industry: "Sports & Entertainment", initials: "SB", color: "#4F46E5", logo: "/logos/savannah-bananas.png" },
      { name: "Pizzana", industry: "Food & Beverage", initials: "PZ", color: "#059669", logo: "/logos/pizzana.jpg" },
      { name: "J. Lohr Vineyards and Wines", industry: "Food & Beverage", initials: "JL", color: "#E11D48", logo: "/logos/j-lohr-vineyards.jpg" },
      { name: "Jeni's Ice Cream", industry: "Food & Beverage", initials: "JI", color: "#065F46", logo: "/logos/jenis-ice-cream.png" },
    ],
    tenure: "8.3 years",
  },
  {
    name: "Mid-Market",
    range: "50+ Users",
    badges: ["NEXT", "XBert AI", "Experience Center"],
    customers: "1,800",
    custPct: "2% of total",
    arr: "$104M",
    arrPct: "29% of total",
    logos: [
      { name: "Samsonite", industry: "Consumer Goods", initials: "SA", color: "#1D4ED8", logo: "/logos/samsonite.png" },
      { name: "Texas Roadhouse", industry: "Restaurant", initials: "TR", color: "#B91C1C", logo: "/logos/texas-roadhouse.png" },
      { name: "Erewhon", industry: "Retail", initials: "EW", color: "#065F46", logo: "/logos/erewhon.png" },
      { name: "Acuity Eyecare", industry: "Healthcare", initials: "AE", color: "#9333EA", logo: "/logos/acuity-eye.png" },
      { name: "Simmons Bank", industry: "Financial Services", initials: "SB", color: "#1E40AF", logo: "/logos/simmons-bank.png" },
    ],
    tenure: "7.9 years",
  },
];

export default function CustomerBaseBroadSlide({ slideNumber = 46 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "44px 100px 20px", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{
          fontWeight: 700, fontSize: 15, letterSpacing: "0.08em",
          textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px",
        }}>
          CUSTOMERS
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 52, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
        >
          Diversified revenue, tenured &amp; durable.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          padding: "32px 80px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          alignItems: "start",
        }}
      >
        {segments.map((seg, i) => (
          <motion.article
            key={seg.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Segment header */}
            <div style={{
              padding: "20px 24px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}>
              <div>
                <h2 className="font-heading" style={{
                  fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: 0,
                }}>{seg.name}</h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", margin: "4px 0 0" }}>{seg.range}</p>
              </div>
              <div style={{ display: "flex", gap: 5, flexWrap: "nowrap", justifyContent: "flex-end" }}>
                {seg.badges.map((b) => (
                  <span key={b} style={{
                    fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em",
                    background: "rgba(40,96,178,0.25)", border: "1px solid rgba(40,96,178,0.4)",
                    borderRadius: 5, padding: "3px 7px", whiteSpace: "nowrap",
                  }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics row */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 0, borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{
                padding: "16px 24px",
                borderRight: "1px solid rgba(255,255,255,0.06)",
              }}>
                <p className="font-heading" style={{
                  fontSize: 32, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1,
                }}>{seg.customers}</p>
                <p style={{
                  fontSize: 13, fontWeight: 600, letterSpacing: "0.05em",
                  color: "rgba(255,255,255,0.55)", margin: "6px 0 0", textTransform: "uppercase",
                }}>Customers</p>
                <p style={{ fontSize: 14, color: "#5B9CF5", margin: "3px 0 0", fontWeight: 500 }}>{seg.custPct}</p>
              </div>
              <div style={{ padding: "16px 24px" }}>
                <p className="font-heading" style={{
                  fontSize: 32, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1,
                }}>{seg.arr}</p>
                <p style={{
                  fontSize: 13, fontWeight: 600, letterSpacing: "0.05em",
                  color: "rgba(255,255,255,0.55)", margin: "6px 0 0", textTransform: "uppercase",
                }}>ARR</p>
                <p style={{ fontSize: 14, color: "#5B9CF5", margin: "3px 0 0", fontWeight: 500 }}>{seg.arrPct}</p>
              </div>
            </div>

            {/* Customer logos */}
            <div style={{ padding: "40px 24px 56px", display: "flex", flexDirection: "column", gap: 20 }}>
              {seg.logos.map((logo) => (
                <div key={logo.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {logo.logo ? (
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: "#FFFFFF",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      overflow: "hidden",
                      padding: 2,
                    }}>
                      <img
                        src={logo.logo}
                        alt={logo.name}
                        style={{ width: 36, height: 36, objectFit: "contain" }}
                      />
                    </div>
                  ) : (
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                      background: `linear-gradient(135deg, ${logo.color}, ${logo.color}88)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: `0 2px 8px ${logo.color}30`,
                    }}>
                      <span style={{
                        fontSize: 12, fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em",
                      }}>{logo.initials}</span>
                    </div>
                  )}
                  <div style={{ minWidth: 0 }}>
                    <p style={{
                      fontSize: 14, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.2,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>{logo.name}</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: "1px 0 0" }}>{logo.industry}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom stats bar */}
            <div style={{
              padding: "22px 24px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(40,96,178,0.08)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Clock size={20} color="#5B9CF5" strokeWidth={2} />
                <span style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                  Avg tenure {seg.tenure}
                </span>
              </div>
              <ArrowUpRight size={20} color="#5B9CF5" strokeWidth={2} />
            </div>
          </motion.article>
        ))}
      </motion.main>

      <div style={{ padding: "16px 80px 0", textAlign: "center" }}>
        <p style={{
          fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.04em", margin: 0,
        }}>
          Expected Lifetime by Segment (logo churn, FY26)
        </p>
      </div>

      <div style={{ flex: 1 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
