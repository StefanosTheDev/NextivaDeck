import { Check } from "lucide-react";
import { COLORS } from "../brandConstants";
import SlideWhoWeAreForLayout from "./SlideWhoWeAreForLayout";
import suzukiPhoto from "@/assets/customers/customer-suzuki.jpg";

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

const SlideWhoWeAreForSuzuki = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <SlideWhoWeAreForLayout
    title="Global icons who never stop moving."
    body={
      <>
        <p style={{ margin: 0 }}>
          Suzuki moves the world. Now Nextiva Xbert AI moves their customer experience to another level with human-in-the-loop.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16, fontSize: 25 }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 21, textTransform: "uppercase", letterSpacing: "0.04em", color: COLORS.brandBlue }}>
            Outcomes Powered by Nextiva AI
          </p>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>20% reduction in direct employee costs</strong> — AI chatbot deployed across multiple channels</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>Self-serve vehicle discovery</strong> — customers find models, nearby dealers, and service centers instantly</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>Human-in-the-loop escalation</strong> — complex inquiries seamlessly transfer to live agents</span>
          </div>
        </div>
      </>
    }
    stats={[
      { value: "72K", label: "Employees" },
      { value: "35", label: "Production Facilities" },
      { value: "133", label: "Distributors" },
      { value: "192", label: "Countries" },
    ]}
    photo={suzukiPhoto}
    imagePosition="right center"
    slideNumber={slideNumber}
    speakerNotes="Suzuki. 72K employees, 35 production facilities, 133 distributors, 192 countries. Deployed Nextiva AI chatbot across channels — 20% reduction in direct employee costs. Self-serve lets customers find vehicles, dealers, and service centers instantly. Human-in-the-loop escalation for complex inquiries."
  />
);

export default SlideWhoWeAreForSuzuki;
