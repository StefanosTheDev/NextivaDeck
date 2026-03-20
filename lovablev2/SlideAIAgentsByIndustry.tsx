import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { Heart, Landmark, ShoppingCart, Home } from "lucide-react";
import keystoneFenceImg from "@/assets/customers/customer-keystone-fence-2.jpg";
import risingHopeImg from "@/assets/customers/customer-rising-hope-3.avif";
import six3TileImg from "@/assets/customers/customer-six3-tile-2.jpg";
import creditRestructuringImg from "@/assets/customers/customer-credit-restructuring-2.png";

const industries = [
  {
    icon: Heart,
    photo: risingHopeImg,
    customerName: "Rising Hope Therapy",
    customerLocation: "Newark, Delaware",
    goLive: "XBert AI go live February 2025.",
    title: "Healthcare",
    desc: "Patient intake, reminders, refills — handled by AI agents with HIPAA compliance.",
    metrics: ["85% auto-resolved", "3× faster intake"],
    callouts: [{ stat: "16%", label: "Our Customer Base" }, { stat: "$12.1T", label: "Global Market" }],
    accent: COLORS.steelBlue,
  },
  {
    icon: Landmark,
    photo: creditRestructuringImg,
    customerName: "Credit Restructuring Solutions",
    customerLocation: "El Paso, TX",
    goLive: "XBert AI go live January 2026.",
    title: "Financial Services",
    desc: "Fraud alerts, account inquiries, loan updates — 70% resolved without human touch.",
    metrics: ["70% autonomous", "24/7 coverage"],
    callouts: [{ stat: "12%", label: "Our Customer Base" }, { stat: "$26.5T", label: "Global AUM" }],
    accent: COLORS.duskBlue,
  },
  {
    icon: ShoppingCart,
    photo: six3TileImg,
    customerName: "Six3 Tile",
    customerLocation: "Lancaster, SC",
    goLive: "XBert AI go live December 2025.",
    title: "Retail & E-Commerce",
    desc: "Order tracking, returns, recommendations — AI agents drive upsell while resolving issues.",
    metrics: ["12% upsell lift", "60% faster returns"],
    callouts: [{ stat: "10%", label: "Our Customer Base" }, { stat: "$6.3T", label: "US E-Commerce by 2029" }],
    accent: COLORS.brandBlue,
  },
  {
    icon: Home,
    photo: keystoneFenceImg,
    customerName: "Keystone Fence Supply",
    customerLocation: "Schaefferstown, PA",
    goLive: "XBert AI go live January 2025.",
    title: "Home & Commercial Services",
    desc: "Job inquiries, scheduling, field coordination — AI agents keep every customer touchpoint on track.",
    metrics: ["2.5× faster responses", "Zero missed follow-ups"],
    callouts: [{ stat: "22%", label: "Our Customer Base" }, { stat: "6.2%", label: "CAGR Through 2030" }],
    accent: COLORS.steelBlue,
  },
];

const SlideAIAgentsByIndustry = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920,
      height: 1080,
      background: COLORS.dawnCream,
      display: "flex",
      flexDirection: "column",
      fontFamily: FONTS.body,
      overflow: "hidden",
    }}
  >
    <header style={{ padding: "72px 100px 0", textAlign: "center" }}>
      <p
        style={{
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: COLORS.brandBlue,
          margin: 0,
        }}
      >
        Industry applications
      </p>
      <h1
        style={{
          fontFamily: FONTS.heading,
          fontSize: 72,
          fontWeight: 400,
          color: COLORS.navy,
          margin: "12px 0 0",
          lineHeight: 1.15,
        }}
      >
        XBert brings AI Agents to every Industry.
      </h1>
      <p
        style={{
          fontSize: 24,
          color: COLORS.midWarmGray,
          margin: "12px auto 0",
          maxWidth: 900,
          lineHeight: 1.5,
        }}
      >
        Purpose-built agentic experiences for the industries that need them most.
      </p>
    </header>

    {/* 2×2 grid */}
    <main
      style={{
        flex: 1,
        padding: "40px 100px 40px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 24,
        overflow: "hidden",
      }}
    >
      {industries.map((ind) => {
        const Icon = ind.icon;
        return (
          <article
            key={ind.title}
            style={{
              background: COLORS.pureWhite,
              borderRadius: 16,
              display: "flex",
              flexDirection: "row",
              border: `1px solid ${COLORS.paleWarm}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Blue accent bar behind image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: ind.accent,
                zIndex: 0,
              }}
            />
            {/* Left column — photo or graphic icon */}
            <div
              style={{
                width: "30%",
                minWidth: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: ind.photo ? undefined : `linear-gradient(135deg, ${ind.accent}15, ${ind.accent}08)`,
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              {ind.photo ? (
                <>
                  <img
                    src={ind.photo}
                    alt={ind.customerName}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover", 
                      objectPosition: ind.title === "Healthcare" ? "center center" : ind.title === "Financial Services" ? "left bottom" : ind.title === "Retail & E-Commerce" ? "right bottom" : "right center" 
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                    }}
                  />
                  <div style={{ position: "absolute", bottom: 14, left: 16, right: 8 }}>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#7BB3E0", margin: 0, lineHeight: 1.25 }}>
                      {ind.customerName}
                    </p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", margin: "3px 0 0", lineHeight: 1.3 }}>
                      {ind.goLive} {ind.customerLocation}
                    </p>
                  </div>
                </>
              ) : (
                <div style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: `${ind.accent}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `2px solid ${ind.accent}30`,
                }}>
                  <Icon size={48} color={ind.accent} strokeWidth={1.5} />
                </div>
              )}
            </div>

            {/* Right column — content */}
            <div
              style={{
                flex: 1,
                padding: "32px 36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${ind.accent}12`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} color={ind.accent} strokeWidth={2} />
                </div>
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: COLORS.navy,
                    margin: 0,
                  }}
                >
                  {ind.title}
                </h2>
              </div>

              <p
                style={{
                  fontSize: 18,
                  color: COLORS.midWarmGray,
                  margin: "14px 0 0",
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {ind.desc}
              </p>

              {/* Data callouts */}
              <div
                style={{
                  display: "flex",
                  gap: 40,
                  marginTop: 12,
                }}
              >
                {ind.callouts.map((c) => (
                  <div key={c.label}>
                    <p
                      style={{
                        fontFamily: FONTS.heading,
                        fontSize: 26,
                        fontWeight: 700,
                        color: COLORS.navy,
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {c.stat}
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: COLORS.midWarmGray,
                        margin: "4px 0 0",
                      }}
                    >
                      {c.label}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  borderTop: `1px solid ${COLORS.paleWarm}`,
                  marginTop: 16,
                  paddingTop: 14,
                  display: "flex",
                  gap: 10,
                }}
              >
                {ind.metrics.map((m) => (
                  <span
                    key={m}
                    style={{
                      display: "inline-block",
                      padding: "5px 14px",
                      borderRadius: 20,
                      border: `1.5px solid ${ind.accent}`,
                      fontSize: 15,
                      fontWeight: 600,
                      color: ind.accent,
                      background: `${ind.accent}08`,
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </main>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideAIAgentsByIndustry;
