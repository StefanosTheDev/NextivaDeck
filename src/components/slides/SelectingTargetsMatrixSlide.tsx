"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const border = "1px solid rgba(255,255,255,0.16)";
const headerMuted = "#CCC7C3";
const cellText = "rgba(255,255,255,0.92)";

const thBase: React.CSSProperties = {
  border,
  padding: "24px 15px",
  textAlign: "center",
  verticalAlign: "middle",
  fontWeight: 600,
  fontSize: 18,
  lineHeight: 1.45,
  color: "#FFFFFF",
};

const tdBase: React.CSSProperties = {
  border,
  padding: "34px 22px",
  textAlign: "center",
  verticalAlign: "middle",
  fontSize: 21,
  lineHeight: 1.55,
  color: cellText,
  fontWeight: 400,
};

const cornerLabel: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  fontWeight: 700,
  color: "#FFFFFF",
};

export default function SelectingTargetsMatrixSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "64px 72px 12px",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.12,
          }}
        >
          Selecting your target(s)
        </h1>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 0,
          padding: "12px 72px 28px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          style={{
            width: "100%",
            maxWidth: 1540,
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(8px)",
            padding: "21px 18px",
            boxSizing: "border-box",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              tableLayout: "fixed",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <thead>
              <tr>
                <th style={{ ...thBase, width: "22%", fontWeight: 600 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 11,
                      padding: "6px 0",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <span style={cornerLabel}>Target market</span>
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 500,
                          color: "#7EB3E8",
                          textDecoration: "underline",
                          textTransform: "none",
                          letterSpacing: "0.02em",
                        }}
                      >
                        (revenue breakdown)
                      </span>
                    </div>
                    <span style={{ ...cornerLabel, marginTop: 6 }}>Sales strategy</span>
                  </div>
                </th>
                <th style={{ ...thBase, width: "26%" }}>
                  <span style={{ fontWeight: 600 }}>VSB</span>
                  <br />
                  <span style={{ fontWeight: 400, color: headerMuted, fontSize: 17 }}>
                    (41% of revenue)
                  </span>
                </th>
                <th style={{ ...thBase, width: "26%" }}>
                  <span style={{ fontWeight: 600 }}>SMB</span>
                  <br />
                  <span style={{ fontWeight: 400, color: headerMuted, fontSize: 17 }}>
                    (30% of revenue)
                  </span>
                </th>
                <th style={{ ...thBase, width: "26%" }}>
                  <span style={{ fontWeight: 600 }}>Mid-Market</span>
                  <br />
                  <span style={{ fontWeight: 400, color: headerMuted, fontSize: 17 }}>
                    (29% of revenue)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  style={{
                    ...thBase,
                    textAlign: "left",
                    paddingLeft: 22,
                    paddingRight: 15,
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#FFFFFF",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Low touch</span>
                </th>
                <td
                  colSpan={2}
                  style={{
                    ...tdBase,
                    background: "rgba(0, 112, 243, 0.14)",
                    boxShadow: "inset 0 0 0 1px rgba(126, 179, 232, 0.35)",
                  }}
                >
                  Large number of low-price deals ⇒{" "}
                  <strong style={{ fontWeight: 700, textDecoration: "underline" }}>automated sale</strong>
                </td>
                <td
                  rowSpan={2}
                  style={{
                    ...tdBase,
                    background: "rgba(255, 255, 255, 0.04)",
                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.12)",
                    color: "rgba(255,255,255,0.55)",
                    fontWeight: 600,
                  }}
                >
                  Partners and lead gen
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    ...thBase,
                    textAlign: "left",
                    paddingLeft: 22,
                    paddingRight: 15,
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#FFFFFF",
                  }}
                >
                  Medium touch
                </th>
                <td
                  colSpan={2}
                  style={{
                    ...tdBase,
                    background:
                      "linear-gradient(165deg, rgba(245, 158, 11, 0.55) 0%, rgba(245, 158, 11, 0.32) 50%, rgba(120, 73, 5, 0.55) 100%)",
                    boxShadow:
                      "inset 0 0 0 3px rgba(245, 158, 11, 0.85), 0 10px 28px rgba(245, 158, 11, 0.22)",
                    color: "#FFFFFF",
                    fontWeight: 800,
                  }}
                >
                  Uneasy middle — Nextiva&apos;s secret sauce
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    ...thBase,
                    textAlign: "left",
                    paddingLeft: 22,
                    paddingRight: 15,
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#FFFFFF",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>High touch</span>
                </th>
                <td
                  colSpan={2}
                  style={{
                    ...tdBase,
                    background: "rgba(255, 255, 255, 0.04)",
                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.12)",
                    color: "rgba(255,255,255,0.55)",
                    fontWeight: 600,
                  }}
                >
                  Target small teams in large orgs
                  <br />— leads to land and expand
                </td>
                <td
                  style={{
                    ...tdBase,
                    background: "rgba(0, 112, 243, 0.14)",
                    boxShadow: "inset 0 0 0 1px rgba(126, 179, 232, 0.35)",
                  }}
                >
                  Small number of high-price deals ⇒{" "}
                  <strong style={{ fontWeight: 700, textDecoration: "underline" }}>solution sale</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
