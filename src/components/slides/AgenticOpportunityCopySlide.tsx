"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const tableData = [
  { seats1: "<250", pctCenters: "~90%", seats2: "12 million", pctSeats: "65%", label: "Nextiva Greenfield Market" },
  { seats1: ">250", pctCenters: "~10%", seats2: "6 million", pctSeats: "35%", label: "Enterprise Incumbents Battle" },
];

const topCards = [
  { stat: "25M", label: "businesses that are customer-facing" },
  { stat: "18M", label: "contact center seats" },
  { stat: "7M", label: "businesses doing CX without calling it a contact center" },
];

export default function AgenticOpportunityCopySlide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Tomorrow&apos;s Agentic Workforce.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Globally, 18 million contact center roles available for transition to Agentic over time.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        style={{ flex: 1, padding: "12px 80px 0", display: "flex", flexDirection: "column", minHeight: 0 }}
      >
        {/* Three stat cards above the chart */}
        <div style={{
          width: "100%",
          flexShrink: 0,
          marginTop: 40,
          paddingBottom: 6,
        }}>
          <div style={{
            display: "flex",
            gap: 16,
            width: "100%",
          }}>
            {topCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.05 }}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: "24px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {i === 0 && (
                  <p className="font-heading" style={{
                    fontSize: 16, fontWeight: 700, color: "#F0A88C", margin: "0 0 12px", lineHeight: 1.2,
                    letterSpacing: "0.04em", textTransform: "uppercase", textShadow: "0 0 20px rgba(240,168,140,0.4)",
                  }}>
                    Large market opportunity
                  </p>
                )}
                <p className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1, minHeight: 48 }}>
                  {card.stat}
                </p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "12px 0 0", lineHeight: 1.35 }}>
                  {card.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: 6,
          minHeight: 0,
        }}>
          <div style={{
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            gap: 0,
          }}>
            {/* Labels column - left of table, aligned with data rows */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              paddingRight: 20,
              minWidth: 220,
            }}>
              {/* Spacer to align with table header row */}
              <div style={{ height: 52, flexShrink: 0 }} />
              {tableData.map((row, i) => (
                <div
                  key={i}
                  className={i === 0 ? "font-heading" : ""}
                  style={{
                    padding: "18px 0",
                    paddingRight: 24,
                    fontStyle: i === 0 ? "normal" : "italic",
                    fontWeight: i === 0 ? 700 : 400,
                    color: i === 0 ? "#FFFFFF" : "#E57373",
                    fontSize: i === 0 ? 17 : 15,
                    lineHeight: 1.4,
                    minHeight: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: i === 1 ? "center" : "flex-start",
                    textAlign: i === 1 ? "center" : "left",
                    borderBottom: i < tableData.length - 1 ? "1px solid transparent" : "none",
                    borderLeft: i === 0 ? "4px solid #7EB3E8" : "4px solid transparent",
                    paddingLeft: i === 0 ? 12 : 4,
                  }}
                >
                  {row.label}
                </div>
              ))}
            </div>

            {/* Table - 4 columns only */}
            <div style={{
              flex: 1,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 16 }}>
                <thead>
                  <tr style={{ background: "rgba(0,0,0,0.25)" }}>
                    <th style={{ padding: "18px 24px", textAlign: "center", fontWeight: 700, color: "#7EB3E8", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "2px solid rgba(126,179,232,0.4)" }}>
                      Number of Seats
                    </th>
                    <th style={{ padding: "18px 24px", textAlign: "center", fontWeight: 700, color: "#7EB3E8", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "2px solid rgba(126,179,232,0.4)" }}>
                      Percentage of Contact Centers
                    </th>
                    <th style={{ padding: "18px 24px", textAlign: "center", fontWeight: 700, color: "#7EB3E8", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "2px solid rgba(126,179,232,0.4)" }}>
                      Number of Seats
                    </th>
                    <th style={{ padding: "18px 24px", textAlign: "center", fontWeight: 700, color: "#7EB3E8", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "2px solid rgba(126,179,232,0.4)" }}>
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
                        padding: "18px 24px",
                        color: i === 0 ? "#FFFFFF" : "#E57373",
                        fontWeight: i === 0 ? 700 : 600,
                        fontSize: i === 0 ? 18 : 16,
                        textAlign: "center",
                        borderBottom: i < tableData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      }}>
                        {row.seats1}
                      </td>
                      <td style={{
                        padding: "18px 24px",
                        color: i === 0 ? "#7EB3E8" : "#E57373",
                        fontWeight: i === 0 ? 700 : 400,
                        fontSize: i === 0 ? 18 : 16,
                        textAlign: "center",
                        borderBottom: i < tableData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      }}>
                        {row.pctCenters}
                      </td>
                      <td style={{
                        padding: "18px 24px",
                        color: i === 0 ? "#FFFFFF" : "#E57373",
                        fontWeight: i === 0 ? 700 : 600,
                        fontSize: i === 0 ? 18 : 16,
                        textAlign: "center",
                        borderBottom: i < tableData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      }}>
                        {row.seats2}
                      </td>
                      <td style={{
                        padding: "18px 24px",
                        color: i === 0 ? "#7EB3E8" : "#E57373",
                        fontWeight: i === 0 ? 700 : 400,
                        fontSize: i === 0 ? 18 : 16,
                        textAlign: "center",
                        borderBottom: i < tableData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      }}>
                        {row.pctSeats}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Reserved space for future third row of cards (same size as top cards) */}
        <div style={{
          flexShrink: 0,
          minHeight: 130,
          marginTop: "auto",
        }} />

        <div style={{
          flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "16px 32px",
          background: "rgba(40,96,178,0.2)", border: "1px solid rgba(40,96,178,0.35)",
        }}>
          <p className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
            Nextiva. Purpose Built for the Underserved Middle.
          </p>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
