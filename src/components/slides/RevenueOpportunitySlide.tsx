"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const SAM_H = 235;
const TAM_H = 365;

const samSegments = [
  "UCaaS ($18B)",
  "Contact Center ($13B)",
  "Customer Engagement ($9B)",
  "Conversational AI ($8B)",
];

const notAddressedItems = [
  { label: "CRM", value: "$41B" },
  { label: "Customer Service Software", value: "$33B" },
  { label: "Marketing Software", value: "$27B" },
  { label: "Productivity & CDP", value: "$19B" },
];

export default function RevenueOpportunitySlide({
  slideNumber = 13,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "40px 72px 0",
          flexShrink: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#CCC7C3",
              margin: "0 0 8px",
            }}
          >
            MARKET OPPORTUNITY
          </p>
          <h1
            className="font-heading"
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Our Substantial Revenue Opportunity
            <br />
            in our Current SAM and TAM
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
              margin: "10px 0 0",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "#5BA0E0", fontWeight: 600 }}>
              Our Revenue Opportunity:
            </span>{" "}
            Total CX Software Market Opportunity{" "}
            <span style={{ color: "rgba(255,255,255,0.25)" }}>&times;</span>{" "}
            Share of CX Wallet Captured by Nextiva Platform
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            borderRadius: 6,
            border: "1px solid rgba(91,160,224,0.3)",
            background: "rgba(40,96,178,0.15)",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Massive, Durable Market
          </span>
          <span
            style={{
              background: "#2860B2",
              color: "#FFF",
              fontSize: 12,
              fontWeight: 700,
              width: 22,
              height: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
            }}
          >
            1
          </span>
        </div>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 72px",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 20,
            minHeight: 430,
          }}
        >
          {/* Bar 1 — Current ARR */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 155,
              transformOrigin: "bottom",
            }}
          >
            <p
              className="font-heading"
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 6px",
                whiteSpace: "nowrap",
              }}
            >
              $368M
            </p>
            <div
              style={{
                width: "100%",
                height: 55,
                background:
                  "linear-gradient(180deg, rgba(30,75,150,0.65) 0%, rgba(15,50,110,0.85) 100%)",
                border: "1px solid rgba(40,96,178,0.35)",
                borderRadius: "8px 8px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.45)",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                ARR From Current
                <br />
                Customers
              </span>
            </div>
          </motion.div>

          {/* Bar 2 — Full Platform Potential */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 170,
              transformOrigin: "bottom",
            }}
          >
            <p
              className="font-heading"
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 6px",
                whiteSpace: "nowrap",
              }}
            >
              ~$1.5B
            </p>
            <div
              style={{
                width: "100%",
                height: 105,
                background:
                  "linear-gradient(180deg, rgba(35,85,165,0.65) 0%, rgba(20,60,130,0.85) 100%)",
                border: "1px solid rgba(40,96,178,0.45)",
                borderRadius: "8px 8px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.4)",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                Potential Revenue
                <br />
                With Full Platform
                <br />
                Deployment
              </span>
            </div>
          </motion.div>

          {/* Bar 3 — SAM */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 195,
              transformOrigin: "bottom",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 6 }}>
              <p
                className="font-heading"
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#5BA0E0",
                  margin: 0,
                  letterSpacing: "0.04em",
                }}
              >
                SAM
              </p>
              <p
                className="font-heading"
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                ~$48B
              </p>
            </div>
            <div
              style={{
                width: "100%",
                height: SAM_H,
                background:
                  "linear-gradient(180deg, rgba(45,100,190,0.55) 0%, rgba(30,80,160,0.8) 100%)",
                border: "1px solid rgba(91,160,224,0.35)",
                borderRadius: "8px 8px 0 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                padding: "16px 12px",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 6,
                }}
              >
                Markets We Serve
              </span>
              {samSegments.map((seg) => (
                <span
                  key={seg}
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.3)",
                    lineHeight: 1.4,
                  }}
                >
                  {seg}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Not Addressed Today — callout column between SAM and TAM */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            style={{
              width: 180,
              paddingBottom: SAM_H,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 5,
                padding: "4px 10px",
                alignSelf: "flex-start",
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Not Addressed Today
              </span>
            </div>
            {notAddressedItems.map((item) => (
              <div
                key={item.label}
                style={{
                  borderLeft: "2px dashed rgba(255,255,255,0.15)",
                  paddingLeft: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.35)",
                    marginLeft: 8,
                    flexShrink: 0,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Bar 4 — TAM */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 215,
              transformOrigin: "bottom",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 6 }}>
              <p
                className="font-heading"
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#5BA0E0",
                  margin: 0,
                  letterSpacing: "0.04em",
                }}
              >
                TAM
              </p>
              <p
                className="font-heading"
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                $176B
              </p>
            </div>
            <div
              style={{
                width: "100%",
                height: TAM_H,
                background:
                  "linear-gradient(180deg, rgba(91,160,224,0.4) 0%, rgba(40,96,178,0.65) 100%)",
                border: "1px solid rgba(91,160,224,0.4)",
                borderRadius: "8px 8px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                All Addressable
                <br />
                CX Markets
              </span>
            </div>
          </motion.div>
        </div>

        {/* Labels row beneath the bars */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <div style={{ width: 155, textAlign: "center" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Current ARR
            </p>
          </div>
          <div style={{ width: 170, textAlign: "center" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Full Platform Potential
            </p>
          </div>
          <div style={{ width: 195, textAlign: "center" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#5BA0E0",
                margin: 0,
              }}
            >
              Markets We Serve Today
            </p>
          </div>
          <div style={{ width: 180 }} />
          <div style={{ width: 215, textAlign: "center" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#5BA0E0",
                margin: 0,
              }}
            >
              All CX Markets
            </p>
          </div>
        </div>
      </motion.main>

      {/* Bottom metric row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{
          padding: "12px 72px 6px",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: 20,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            minWidth: 110,
          }}
        >
          Market Penetration
        </span>
        <div style={{ width: 155, textAlign: "center" }}>
          <span
            style={{ fontSize: 18, fontWeight: 700, color: "#5BA0E0" }}
          >
            {"<1%"}
          </span>
          <br />
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
            (Current)
          </span>
        </div>
        <div style={{ width: 170, textAlign: "center" }}>
          <span
            style={{ fontSize: 18, fontWeight: 700, color: "#5BA0E0" }}
          >
            ~3%
          </span>
          <br />
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
            (Full Platform Deployment)
          </span>
        </div>
        <div style={{ width: 195, textAlign: "center" }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            ~1% of SAM
          </span>
        </div>
        <div style={{ width: 180 }} />
        <div style={{ width: 215, textAlign: "center" }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            {"<0.5% of TAM"}
          </span>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
