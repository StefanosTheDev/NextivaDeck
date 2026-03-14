import SlideDataTableLayout from "./SlideDataTableLayout";
import { PNL, OPEX_PCT } from "./financialData";

const SlideTargetModel = ({ slideNumber = "25" }: { slideNumber?: string }) => (
  <SlideDataTableLayout
    eyebrow="Target model"
    title="Near-term trajectory, long-term target."
    columns={[
      { label: "Metric" },
      { label: "FY26" },
      { label: "FY27" },
      { label: "FY30 Target", highlight: true },
    ]}
    rows={[
      { cells: ["Revenue", `$${PNL.revenue.FY26}M`, `$${PNL.revenue.FY27}M`, `$${PNL.revenue.FY30 - 9}–${PNL.revenue.FY30 + 9}M`] },
      { cells: ["Gross Margin", `${PNL.grossMarginPct.FY26}%`, `${PNL.grossMarginPct.FY27}%`, `${PNL.grossMarginPct.FY30 - 2}–${PNL.grossMarginPct.FY30 + 2}%`] },
      { cells: ["S&M", `${OPEX_PCT.sm.FY26}%`, `${OPEX_PCT.sm.FY27}%`, `${OPEX_PCT.sm.FY30 - 2}–${OPEX_PCT.sm.FY30 + 2}%`] },
      { cells: ["R&D", `${OPEX_PCT.rd.FY26}%`, `${OPEX_PCT.rd.FY27}%`, `${OPEX_PCT.rd.FY30 - 2}–${OPEX_PCT.rd.FY30 + 2}%`] },
      { cells: ["G&A", `${OPEX_PCT.ga.FY26}%`, `${OPEX_PCT.ga.FY27}%`, `${OPEX_PCT.ga.FY30 - 2}–${OPEX_PCT.ga.FY30 + 2}%`] },
      { cells: ["Adj EBITDA Margin", `${PNL.ebitdaMarginPct.FY26}%`, `${PNL.ebitdaMarginPct.FY27}%`, `${PNL.ebitdaMarginPct.FY30 - 2}–${PNL.ebitdaMarginPct.FY30 + 2}%`], bold: true },
    ]}
    slideNumber={slideNumber}
    speakerNotes="FY27 is where the model really inflects. Investors should underwrite the near-term, FY30 is upside."
  />
);

export default SlideTargetModel;
