import { Check } from "lucide-react";
import { COLORS } from "../brandConstants";
import SlideWhoWeAreForLayout from "./SlideWhoWeAreForLayout";
import tataPhoto from "@/assets/customers/customer-tataplay-office.jpg";

const bulletStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "flex-start",
};

const checkStyle: React.CSSProperties = {
  width: 24,
  height: 24,
  flexShrink: 0,
  marginTop: 4,
};

const SlideWhoWeAreForTataPlay = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <SlideWhoWeAreForLayout
    title="Those who serve millions, personally."
    body={
      <>
        <p style={{ margin: 0 }}>
          India's leading content platform — 21M+ subscribers across 400K+ cities — proving AI can make massive scale feel personal.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16, fontSize: 25 }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 21, textTransform: "uppercase", letterSpacing: "0.04em", color: COLORS.brandBlue }}>
            Outcomes Powered by Nextiva AI
          </p>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>20% reduction in agent call traffic</strong> — LLM-powered bot resolves customer &amp; dealer queries autonomously</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>40% lower cost of resolution</strong> — intelligent routing and real-time agent escalation</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>5M+ autonomous requests/month</strong> — with 200% ROI on WhatsApp lead-gen campaigns</span>
          </div>
        </div>
      </>
    }
    stats={[
      { value: "1,600", label: "Employees" },
      { value: "400K+", label: "Cities Served" },
      { value: "21.3M", label: "Subscribers" },
      { value: "$315K", label: "Current ARR" },
    ]}
    photo={tataPhoto}
    slideNumber={slideNumber}
    speakerNotes="Tata Play. India's leading content platform — 21M subscribers, 400K+ cities, 1,600 employees. Deployed Nextiva AI bot handling 5M+ requests monthly. 20% reduction in agent call traffic, 40% lower resolution costs, 200% ROI on WhatsApp campaigns. ARR grew from $41K at signup to $315K."
  />
);

export default SlideWhoWeAreForTataPlay;
