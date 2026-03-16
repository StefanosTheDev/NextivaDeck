"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const tableData = [
  { seats1: "<250", pctCenters: "~90%", seats2: "12 million", pctSeats: "65%", label: "Nextiva Greenfield Market" },
  { seats1: ">250", pctCenters: "~10%", seats2: "6 million", pctSeats: "35%", label: "Enterprise Incumbents Battle" },
];

export default function ContactCenterMarketOpportunitySlide({ slideNumber = 1 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>
          MARKET OPPORTUNITY
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Contact Center Market Opportunity
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 80px" }}
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 800,
          margin: "0 auto",
          background: "rgba(40,96,178,0.12)",
          border: "1px solid rgba(40,96,178,0.3)",
          borderRadius: 14,
          overflow: "hidden",
        }}>
          <p style={{
            padding: "14px 20px",
            margin: 0,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#7EB3E8",
            background: "rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(40,96,178,0.25)",
          }}>
            Contact Center Market
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr style={{ background: "rgba(0,0,0,0.2)" }}>
                <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700, color: "#7EB3E8", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "2px solid rgba(126,179,232,0.4)" }}>
                  Number of Seats
                </th>
                <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700, color: "#7EB3E8", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "2px solid rgba(126,179,232,0.4)" }}>
                  Percentage of Contact Centers
                </th>
                <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700, color: "#7EB3E8", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "2px solid rgba(126,179,232,0.4)" }}>
                  Number of Seats
                </th>
                <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700, color: "#7EB3E8", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "2px solid rgba(126,179,232,0.4)" }}>
                  Percentage of Seats
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} style={{
                  background: i === 0
                    ? "linear-gradient(90deg, rgba(40,96,178,0.35) 0%, rgba(40,96,178,0.15) 100%)"
                    : "transparent",
                  borderLeft: i === 0 ? "4px solid #7EB3E8" : "none",
                }}>
                  <td style={{
                    padding: "12px 16px",
                    color: i === 0 ? "#FFFFFF" : "#E57373",
                    fontWeight: i === 0 ? 700 : 600,
                    fontSize: i === 0 ? 16 : 15,
                    textAlign: "center",
                    borderBottom: i < tableData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}>
                    {row.seats1}
                  </td>
                  <td style={{
                    padding: "12px 16px",
                    color: i === 0 ? "#7EB3E8" : "#E57373",
                    fontWeight: i === 0 ? 700 : 400,
                    fontSize: i === 0 ? 16 : 15,
                    textAlign: "center",
                    borderBottom: i < tableData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}>
                    {row.pctCenters}
                  </td>
                  <td style={{
                    padding: "12px 16px",
                    color: i === 0 ? "#FFFFFF" : "#E57373",
                    fontWeight: i === 0 ? 700 : 600,
                    fontSize: i === 0 ? 16 : 15,
                    textAlign: "center",
                    borderBottom: i < tableData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}>
                    {row.seats2}
                  </td>
                  <td style={{
                    padding: "12px 16px",
                    color: i === 0 ? "#7EB3E8" : "#E57373",
                    fontWeight: i === 0 ? 700 : 400,
                    fontSize: i === 0 ? 16 : 15,
                    textAlign: "center",
                    borderBottom: i < tableData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}>
                    {row.pctSeats}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
