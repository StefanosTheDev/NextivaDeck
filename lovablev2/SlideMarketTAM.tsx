import SlideBigNumbersLayoutV2 from "./SlideBigNumbersLayoutV2";

const SlideMarketTAM = ({ slideNumber = "17" }: { slideNumber?: string }) => (
  <SlideBigNumbersLayoutV2
    eyebrow="Market opportunity"
    title="CX is a large market, growing fast."
    metrics={[
      { value: "$176B", label: "Total CX market (CY26)" },
      { value: "$262B", label: "CY29 target", highlight: true },
    ]}
    connector={{ label: "14% CAGR" }}
    footnote="Segment detail available in appendix."
    slideNumber={slideNumber}
    speakerNotes="$176B market growing to $262B at 14% CAGR. One of the largest addressable markets in enterprise software. Converging around exactly what we build."
  />
);

export default SlideMarketTAM;
