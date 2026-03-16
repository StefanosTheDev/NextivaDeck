import { Check } from "lucide-react";
import { COLORS } from "../brandConstants";
import SlideWhoWeAreForLayoutMirrored from "./SlideWhoWeAreForLayoutMirrored";
import shastaPhoto from "@/assets/customers/customer-shasta.jpg";

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

const SlideWhoWeAreForShasta = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <SlideWhoWeAreForLayoutMirrored
    title="Healthcare Leaders Like Shasta Community Health"
    imagePosition="left center"
    body={
      <>
        <p style={{ margin: 0 }}>
          Leading provider of integrated healthcare services in Northern California.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16, fontSize: 25, textAlign: "left" }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 21, textTransform: "uppercase", letterSpacing: "0.04em", color: COLORS.brandBlue, textAlign: "left" }}>
            Outcomes Powered by Nextiva AI
          </p>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>Reduced wait times + faster patient routing</strong> to departments and providers.</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>Self-serve Interactive Virtual Assistant</strong> for users to <strong>manage appointments, refill prescriptions</strong>.</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>20% Deflection</strong> of routine calls so staff and providers can <strong>focus on who matters most, the patients</strong>.</span>
          </div>
        </div>
      </>
    }
    stats={[
      { value: "40K", label: "Patients" },
      { value: "100", label: "Healthcare Providers" },
      { value: "500", label: "Staff" },
      { value: "7", label: "Locations" },
      { value: "$144K", label: "ARR" },
    ]}
    photo={shastaPhoto}
    slideNumber={slideNumber}
    speakerNotes="Shasta Community Health Center — placeholder content. To be updated with real data."
  />
);

export default SlideWhoWeAreForShasta;
