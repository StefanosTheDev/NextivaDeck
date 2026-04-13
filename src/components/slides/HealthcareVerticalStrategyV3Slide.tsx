"use client";
import { motion } from "framer-motion";
import {
  UserMinus,
  FileText,
  Cable,
  ClipboardList,
  Bot,
  Mic,
  Layers,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const problemSolutionPairs = [
  {
    problem: {
      icon: UserMinus,
      title: "Labor shortage meets rising demand",
      body: "Providers can't hire their way out of patient volume.",
    },
    solution: {
      icon: Bot,
      title: "AI Agent Assist + deflection",
      body: "Routine inquiries handled by AI — no staff expansion required.",
    },
  },
  {
    problem: {
      icon: FileText,
      title: "Documentation drains capacity",
      body: "Agents spend cycles on notes instead of patients.",
    },
    solution: {
      icon: Mic,
      title: "Real-time transcription & summarization",
      body: "Call notes written automatically — saving time and revenue.",
    },
  },
  {
    problem: {
      icon: Cable,
      title: "Fragmented provider ↔ patient comms",
      body: "Voice, SMS, email and EHR live in disconnected systems.",
    },
    solution: {
      icon: Layers,
      title: "One unified platform",
      body: "UC + CX + AI + EHR integrations in a single stack — 50% lower SMS costs at Ontrak.",
    },
  },
  {
    problem: {
      icon: ClipboardList,
      title: "Routine tasks consume clinical time",
      body: "Scheduling, refills and intake crowd out complex care.",
    },
    solution: {
      icon: Megaphone,
      title: "Outbound campaigns & automation",
      body: "Scheduled SMS/email/voice unlocks pre/post-op, Rx, surveys, trials.",
    },
  },
];

export default function HealthcareVerticalStrategyV3Slide({
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
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "36px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          Healthcare Vertical
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.18,
          }}
        >
          Providers have well-defined challenges — we understand them and
          already have solutions.
        </h1>

        {/* Highlighted banner — placed below the title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(40,96,178,0.22) 0%, rgba(123,179,224,0.12) 100%)",
            border: "2px solid rgba(123,179,224,0.55)",
            borderRadius: 14,
            padding: "12px 30px",
            maxWidth: 960,
            margin: "14px auto 0",
            boxShadow: "0 0 32px rgba(123,179,224,0.1)",
          }}
        >
          <p
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Nextiva combines{" "}
            <span style={{ color: "#7BB3E0", fontWeight: 700 }}>
              UC, CX, and AI
            </span>{" "}
            in a single platform for healthcare providers.
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "22px 100px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          overflow: "hidden",
        }}
      >
        {/* Column headers — two-level eyebrow + label */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 44px 1fr",
            alignItems: "end",
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E07E7E",
                margin: "0 0 3px",
              }}
            >
              Call to Action
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Nextiva Platform
            </p>
          </div>
          <span />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7BB3E0",
                margin: "0 0 3px",
              }}
            >
              Response
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Nextiva for Healthcare Solution
            </p>
          </div>
        </div>

        {/* Problem/Solution paired rows — now full slide width */}
        {problemSolutionPairs.map((pair, i) => {
          const ProblemIcon = pair.problem.icon;
          const SolutionIcon = pair.solution.icon;
          return (
            <motion.div
              key={pair.problem.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 + i * 0.08 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 44px 1fr",
                alignItems: "stretch",
                gap: 16,
                flex: 1,
              }}
            >
              {/* Challenge cell */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220,70,70,0.13) 0%, rgba(220,70,70,0.04) 100%)",
                  border: "1px solid rgba(220,70,70,0.3)",
                  borderRadius: 18,
                  padding: "16px 22px",
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(220,70,70,0.18)",
                    border: "1px solid rgba(220,70,70,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ProblemIcon size={20} color="#E07E7E" strokeWidth={2.2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {pair.problem.title}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.58)",
                      margin: "4px 0 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {pair.problem.body}
                  </p>
                </div>
              </div>

              {/* Arrow connector */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(220,70,70,0.2) 0%, rgba(123,179,224,0.2) 100%)",
                    border: "1px solid rgba(123,179,224,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowRight
                    size={18}
                    color="rgba(255,255,255,0.85)"
                    strokeWidth={2.4}
                  />
                </div>
              </div>

              {/* Solution cell */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(40,96,178,0.2) 0%, rgba(40,96,178,0.06) 100%)",
                  border: "1px solid rgba(123,179,224,0.42)",
                  borderRadius: 18,
                  padding: "16px 22px",
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(123,179,224,0.2)",
                    border: "1px solid rgba(123,179,224,0.38)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <SolutionIcon size={20} color="#7BB3E0" strokeWidth={2.2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {pair.solution.title}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.58)",
                      margin: "4px 0 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {pair.solution.body}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
