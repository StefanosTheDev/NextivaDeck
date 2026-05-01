"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

// Pure self-serve / PLG: structurally cannot serve this buyer.
const plgLockedOut = [
  "Architecturally no-touch — no human in the loop when buyers need reassurance",
  "No sales motion for regulated, complex, or outcome-sensitive use cases",
  "Lack the human infrastructure to convert or retain elevated-risk buyers",
];

// Enterprise sales-led: unit economics simply don't reach this segment.
const enterpriseLockedOut = [
  "Coverage economics break — deal sizes don't support a dedicated field sales force",
  "Procurement, RFPs, and bespoke solutioning add cost, not value, in this ACV band",
  "Margins assume six-figure ACVs that this segment will not pay",
];

// Nextiva's answer — the "so what" the original slide is missing.
const nextivaWins = [
  {
    icon: Users,
    label: "Hybrid digital + sales-assisted motion",
    detail:
      "Self-serve speed for buyers who want it; human reassurance the moment they don't.",
  },
  {
    icon: Gauge,
    label: "Brand identity aligned with the buyer",
    detail:
      "Trust delivered at the point of decision through human and digital touch points.",
  },
  {
    icon: ShieldCheck,
    label: "Mid-market unit economics that work",
    detail:
      "Cost structure tuned for this ACV band — profitable human engagement at scale.",
  },
];

function FrameworkRows({
  items,
  accent,
  grayNumbers,
}: {
  items: string[];
  accent: string;
  grayNumbers?: boolean;
}) {
  const badge = grayNumbers
    ? {
        color: "rgba(204, 199, 195, 0.85)",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
      }
    : {
        color: accent,
        background: `${accent}14`,
        border: `1px solid ${accent}44`,
      };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map((t, i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.22 + i * 0.05 }}
          style={{
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
            padding: "12px 0",
            borderBottom:
              i < items.length - 1
                ? "1px solid rgba(255,255,255,0.07)"
                : "none",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 30,
              height: 30,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.02em",
              fontFamily: "'Space Grotesk', sans-serif",
              ...badge,
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.82)",
              fontWeight: 400,
            }}
          >
            {t}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function MiddleMarketBothEndsSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: BG, overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "32px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          Middle market · Whitespace
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 18px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 38,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.16,
            maxWidth: 1140,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          The middle market is structurally underserved from{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00C2FF 0%, #0070F3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 700,
            }}
          >
            both ends
          </span>{" "}
          — and Nextiva is purpose-built to win it.
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            maxWidth: 1040,
            margin: "18px auto 0",
            padding: "16px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.72)",
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            Pure self-serve / PLG companies <em>cannot</em> serve this segment
            — they lack the human infrastructure. Enterprise sales-led players{" "}
            <em>cannot</em> serve it either — their unit economics break above
            this ACV band. Both are structurally locked out.{" "}
            <strong style={{ fontWeight: 700, color: "#FFFFFF" }}>
              Nextiva runs both motions in one cost structure — that is the
              moat.
            </strong>
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "20px 80px 28px",
          minHeight: 0,
          position: "relative",
          zIndex: 1,
          maxWidth: 1640,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Two locked-out columns */}
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          {/* LEFT — Self-serve / PLG locked out */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              flex: 1,
              borderRadius: 18,
              padding: "22px 24px 24px",
              background:
                "linear-gradient(165deg, rgba(245, 158, 11, 0.07) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.12) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow:
                "0 18px 44px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "rgba(245, 158, 11, 0.12)",
                  border: "1px solid rgba(245, 158, 11, 0.35)",
                }}
              >
                <Bot size={20} color="#FBBF24" strokeWidth={1.75} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  From below
                </p>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: "3px 0 0",
                    lineHeight: 1.2,
                  }}
                >
                  Self-serve / PLG can&apos;t reach up
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    margin: "8px 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  Architecturally no-touch — no way to intervene
                </p>
              </div>
            </div>
            <div style={{ paddingLeft: 6 }}>
              <FrameworkRows items={plgLockedOut} accent="#FBBF24" grayNumbers />
            </div>
          </motion.section>

          {/* RIGHT — Enterprise sales-led locked out */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            style={{
              flex: 1,
              borderRadius: 18,
              padding: "22px 24px 24px",
              background:
                "linear-gradient(165deg, rgba(245, 158, 11, 0.07) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.12) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow:
                "0 18px 44px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "rgba(245, 158, 11, 0.12)",
                  border: "1px solid rgba(245, 158, 11, 0.35)",
                }}
              >
                <AlertTriangle size={20} color="#FBBF24" strokeWidth={1.75} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  From above
                </p>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: "3px 0 0",
                    lineHeight: 1.2,
                  }}
                >
                  Enterprise sales can&apos;t reach down
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    margin: "8px 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  Coverage economics break in this ACV band
                </p>
              </div>
            </div>
            <div style={{ paddingLeft: 6 }}>
              <FrameworkRows
                items={enterpriseLockedOut}
                accent="#FBBF24"
                grayNumbers
              />
            </div>
          </motion.section>
        </div>

        {/* Bottom hero band — the "so what" for Nextiva */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          style={{
            borderRadius: 18,
            padding: "22px 26px",
            background:
              "linear-gradient(135deg, rgba(40,140,255,0.18) 0%, rgba(0,112,243,0.10) 50%, rgba(0,80,180,0.18) 100%)",
            border: "1.5px solid rgba(126,179,232,0.55)",
            boxShadow:
              "0 24px 60px rgba(0,0,0,0.35), 0 0 60px rgba(40,140,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                background: "rgba(126,179,232,0.18)",
                border: "1px solid rgba(126,179,232,0.5)",
              }}
            >
              <Sparkles size={20} color="#7EB3E8" strokeWidth={1.9} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#7EB3E8",
                }}
              >
                How Nextiva wins where others can&apos;t
              </p>
              <h2
                className="font-heading"
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "3px 0 0",
                  lineHeight: 1.2,
                }}
              >
                One cost structure that runs both motions — profitably.
              </h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
          >
            {nextivaWins.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "12px 14px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(126,179,232,0.22)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 9,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background: "rgba(126,179,232,0.18)",
                    border: "1px solid rgba(126,179,232,0.4)",
                    color: "#7EB3E8",
                  }}
                >
                  <Icon size={16} strokeWidth={2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1.25,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      margin: "5px 0 0",
                      fontSize: 12.5,
                      color: "rgba(255,255,255,0.72)",
                      lineHeight: 1.4,
                    }}
                  >
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 10,
              background: "rgba(0,0,0,0.25)",
              border: "1px solid rgba(126,179,232,0.28)",
            }}
          >
            <CheckCircle2 size={16} color="#7EB3E8" strokeWidth={2.2} />
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              The white space is real because{" "}
              <span style={{ color: "#FFFFFF", fontWeight: 700 }}>
                most competitors literally cannot serve it
              </span>{" "}
              — not because they choose not to. Nextiva is the rare operator
              with the architecture and unit economics to win here.
            </p>
          </div>
        </motion.section>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
