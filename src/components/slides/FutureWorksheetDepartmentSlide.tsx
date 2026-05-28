"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  WorksheetInput,
  WorksheetTextarea,
  WorksheetPageBadge,
} from "./worksheet/WorksheetField";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BODY = "#4A4846";

export default function FutureWorksheetDepartmentSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "#FFFFFF",
        color: NAVY_DARK,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{
          padding: "32px 72px 0",
          flexShrink: 0,
        }}
      >
        <WorksheetPageBadge page={2} />
        <h1
          className="font-heading"
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: NAVY_DARK,
            margin: "8px 0 4px",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Department setup.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            color: BODY,
            margin: 0,
            lineHeight: 1.45,
          }}
        >
          Anchor the team, the mission, and the goal before you start.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "20px 72px 12px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto 1fr 1fr",
          gap: 18,
          minHeight: 0,
        }}
      >
        <WorksheetInput
          storageKey="dept.department"
          label="Department"
          placeholder="e.g. Product, Marketing, Sales, Engineering…"
        />
        <WorksheetInput
          storageKey="dept.owner"
          label="Strategic Owner"
          placeholder="Name + title"
        />

        <WorksheetTextarea
          storageKey="dept.participants"
          label="Participants"
          placeholder="List the team members joining this exercise."
          style={{ gridColumn: "1 / -1" }}
        />

        <WorksheetTextarea
          storageKey="dept.mission"
          label="Department Mission"
          placeholder="Why does this department exist? Who do we serve and how?"
        />
        <WorksheetTextarea
          storageKey="dept.goal"
          label="Department Goal"
          placeholder="What outcome will we deliver this year?"
        />
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
