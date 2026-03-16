import { Check } from "lucide-react";
import { COLORS } from "../brandConstants";
import SlideWhoWeAreForLayoutMirrored from "./SlideWhoWeAreForLayoutMirrored";
import liveopsPhoto from "@/assets/customers/customer-liveops.jpg";

const bulletStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

const checkStyle: React.CSSProperties = {
  width: 24,
  height: 24,
  flexShrink: 0,
  marginTop: 4,
};

const SlideWhoWeAreForHorizon = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <SlideWhoWeAreForLayoutMirrored
    title="Forward thinkers like LiveOps."
    imagePosition="left center"
    body={
      <>
        <p style={{ margin: 0 }}>
          Through human-in-the-loop operations, LiveOps brings together real human connection and AI-powered customer service.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16, fontSize: 25, textAlign: "left", marginRight: 30 }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 21, textTransform: "uppercase", letterSpacing: "0.04em", color: COLORS.brandBlue, textAlign: "left" }}>
            Outcomes Powered by Nextiva AI
          </p>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span>With <strong>flexible outcomes-based billing</strong>, blending AI usage and seat-based model supporting <strong>rapid growth</strong>.</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>Improved compliance</strong> in regulated <strong>healthcare and insurance</strong> industries</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>AI working in harmony with humans</strong> through agent assist to remain compliant and continually <strong>improve efficiencies</strong></span>
          </div>
        </div>
      </>
    }
    stats={[
      { value: "2025", label: "Signup" },
      { value: "20K", label: "Agents on Demand" },
      { value: "$650K", label: "ARR" },
    ]}
    photo={liveopsPhoto}
    slideNumber={slideNumber}
    speakerNotes="LiveOps — Forward-thinking human-in-the-loop operations combining real human connection with AI-powered customer service. Flexible outcomes-based billing, improved compliance in healthcare/insurance, AI-human harmony through agent assist."
  />
);

export default SlideWhoWeAreForHorizon;
