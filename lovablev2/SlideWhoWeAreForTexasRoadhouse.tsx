import { Check } from "lucide-react";
import { COLORS } from "../brandConstants";
import SlideWhoWeAreForLayout from "./SlideWhoWeAreForLayout";
import txPhoto from "@/assets/customers/customer-texas-roadhouse.png";

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

const SlideWhoWeAreForTexasRoadhouse = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <SlideWhoWeAreForLayout
    title="Those who boldly pursue their dreams."
    body={
      <>
        <p style={{ margin: 0 }}>
          One location in 1993. Today, 666 restaurants across 10 countries — proof that bold dreams, executed with discipline, scale.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16, fontSize: 25 }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 21, textTransform: "uppercase", letterSpacing: "0.04em", color: COLORS.brandBlue }}>
            Outcomes Powered by Nextiva AI
          </p>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>40%+ call deflection</strong> — AI handles call-ahead seating and menu questions across 666 locations</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>Automated hiring routing</strong> connects inquiries to the nearest manager instantly</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>Real-time voice analytics</strong> flag service issues before they hit social media</span>
          </div>
        </div>
      </>
    }
    stats={[
      { value: "1993", label: "Founded" },
      { value: "666", label: "Locations" },
      { value: "64,000", label: "Employees" },
      { value: "$2.8B", label: "Revenue" },
    ]}
    photo={txPhoto}
    slideNumber={slideNumber}
    speakerNotes="Texas Roadhouse. Founded 1993, 666 locations, 10 countries, $2.8B revenue. Bold dreamers who scaled with discipline. Nextiva AI deflects 40%+ of inbound calls across all locations, routes hiring inquiries intelligently, and flags service recovery opportunities in real time via voice analytics."
  />
);

export default SlideWhoWeAreForTexasRoadhouse;
