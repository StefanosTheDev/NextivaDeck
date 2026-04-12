"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Clock, Activity, Globe } from "lucide-react";
import SlideFooter from "../SlideFooter";

const METRICS = [
  {
    icon: ShieldCheck,
    stat: "Secure",
    detail: "Third-party audited and certified HITRUST, PCI",
  },
  {
    icon: Scale,
    stat: "Compliant",
    detail: "GDPR, TCPA, DNC, HIPAA, HITRUST, PCI",
  },
  {
    icon: Clock,
    stat: "ZERO",
    detail: "Number of maintenance windows",
  },
  {
    icon: Activity,
    stat: "99.9999%",
    detail: "Platform uptime performance",
  },
  {
    icon: Globe,
    stat: "<2 minutes",
    detail: "Geographical disaster recovery time",
  },
];

export default function TomasTrustworthySlide({
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
        justifyContent: "space-between",
      }}
    >
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          flex: 1,
          padding: "56px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            className="font-heading"
            style={{
              fontSize: 72,
              fontWeight: 500,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Trustworthy
          </h1>
          <div
            style={{
              width: 80,
              height: 3,
              background: "#7EB3E8",
              borderRadius: 2,
              marginTop: 24,
            }}
          />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.stat}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderLeft: "4px solid #7EB3E8",
                borderRadius: 12,
                padding: "18px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(40,96,178,0.14)",
                  border: "1px solid rgba(40,96,178,0.32)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <metric.icon size={22} color="#7EB3E8" strokeWidth={1.75} />
              </div>
              <div>
                <p
                  className="font-heading"
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: "0 0 2px",
                    lineHeight: 1.2,
                  }}
                >
                  {metric.stat}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {metric.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
