import { Check } from "lucide-react";
import { COLORS } from "../brandConstants";
import SlideWhoWeAreForLayoutMirrored from "./SlideWhoWeAreForLayoutMirrored";
import acuityPhoto from "@/assets/customers/customer-acuity-eye-care.jpg";

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

const SlideWhoWeAreForAcuityEyeGroup = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <SlideWhoWeAreForLayoutMirrored
    title="Fast-growing franchises."
    imagePosition="center center"
    body={
      <>
        <p style={{ margin: 0 }}>
          Acuity Eye Group has acquired and integrated over 20 acquisitions in the last five years.
        </p>
        <p style={{ margin: "8px 0 0" }}>
          With Nextiva integration is seamless.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16, fontSize: 25, textAlign: "left", marginRight: 30 }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 21, textTransform: "uppercase", letterSpacing: "0.04em", color: COLORS.brandBlue, textAlign: "left" }}>
            Outcomes Powered by Nextiva AI
          </p>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>10% increase in sales</strong> of leveraging customer information in outbound campaigns</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>HIPAA compliant single view of the customer</strong> across clinical, retail, operations and marketing</span>
          </div>
          <div style={bulletStyle}>
            <Check style={checkStyle} color="#22c55e" strokeWidth={3} />
            <span><strong>Rules-based front end</strong> supports routing and <strong>AI-agent handles routine inquiries</strong>, lowering back-office overhead in integrations.</span>
          </div>
        </div>
      </>
    }
    stats={[
      { value: "2018", label: "Signed Up" },
      { value: "121", label: "Initial Users" },
      { value: "6,500", label: "Current Users" },
      { value: "500+", label: "Practices" },
      { value: "$900K", label: "ARR" },
    ]}
    photo={acuityPhoto}
    slideNumber={slideNumber}
    speakerNotes="Acuity Eye Group — Fast-growing franchise with 20+ acquisitions integrated via Nextiva. 10% sales increase, HIPAA-compliant unified customer view, AI-agent handling routine inquiries."
  />
);

export default SlideWhoWeAreForAcuityEyeGroup;
