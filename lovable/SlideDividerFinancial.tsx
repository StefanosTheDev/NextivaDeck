import SlideSectionDivider from "./SlideSectionDivider";

const SlideDividerFinancial = ({ slideNumber = "19" }: { slideNumber?: string }) => (
  <SlideSectionDivider
    sectionNumber=""
    sectionTitle="Financial Overview."
    slideNumber={slideNumber}
  />
);

export default SlideDividerFinancial;
