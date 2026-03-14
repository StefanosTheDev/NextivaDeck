import CoverSlide from "./slides/CoverSlide";
import SafeHarborSlide from "./slides/SafeHarborSlide";
import AtAGlanceSlide from "./slides/AtAGlanceSlide";
import FounderSlide from "./slides/FounderSlide";
import WhoWeServeSlide from "./slides/WhoWeServeSlide";
import ScaleSlide from "./slides/ScaleSlide";
import JourneySlide from "./slides/JourneySlide";
import ProblemSlide from "./slides/ProblemSlide";
import SolutionSlide from "./slides/SolutionSlide";
import PlatformSlide from "./slides/PlatformSlide";
import AiTandemSlide from "./slides/AiTandemSlide";
import MarketSlide from "./slides/MarketSlide";
import AgenticOpportunitySlide from "./slides/AgenticOpportunitySlide";
import AiTailwindSlide from "./slides/AiTailwindSlide";
import RightToWinSlide from "./slides/RightToWinSlide";
import FinancialsSlide from "./slides/FinancialsSlide";
import LeadershipSlide from "./slides/LeadershipSlide";
import SummarySlide from "./slides/SummarySlide";
import ClosingSlide from "./slides/ClosingSlide";
import ProductPortfolioSlide from "./slides/ProductPortfolioSlide";
import AIGatewaysRevenueSlide from "./slides/AIGatewaysRevenueSlide";
import CXMarketSizingSlide from "./slides/CXMarketSizingSlide";
import LaborCostSavingsSlide from "./slides/LaborCostSavingsSlide";
import FinancialDividerSlide from "./slides/FinancialDividerSlide";
import ARRGrossMarginSlide from "./slides/ARRGrossMarginSlide";
import EBITDASlide from "./slides/EBITDASlide";
import NRRChurnSlide from "./slides/NRRChurnSlide";
import ExpansionRetentionSlide from "./slides/ExpansionRetentionSlide";
import TargetModelSlide from "./slides/TargetModelSlide";
import OperatingLeverageSlide from "./slides/OperatingLeverageSlide";
import CustomerBaseSlide from "./slides/CustomerBaseSlide";
import RevenueVisibilitySlide from "./slides/RevenueVisibilitySlide";
import CashFlowTrendsSlide from "./slides/CashFlowTrendsSlide";

export type SlideTheme = "light" | "dark";

export interface SlideDef {
  id: string;
  label: string;
  component: React.ComponentType<{ slideNumber: number }>;
  theme: SlideTheme;
  isNew?: boolean;
}

const SLIDE_COMPONENTS: Record<string, SlideDef> = {
  cover:               { id: "cover",               label: "Cover",               component: CoverSlide,               theme: "dark" },
  "safe-harbor":       { id: "safe-harbor",         label: "Safe Harbor",         component: SafeHarborSlide,          theme: "light" },
  glance:              { id: "glance",               label: "At a Glance",         component: AtAGlanceSlide,           theme: "light" },
  founder:             { id: "founder",              label: "Founder",             component: FounderSlide,             theme: "dark" },
  who:                 { id: "who",                  label: "Who We Serve",        component: WhoWeServeSlide,          theme: "dark" },
  journey:             { id: "journey",              label: "Journey",             component: JourneySlide,             theme: "dark" },
  problem:             { id: "problem",              label: "Problem",             component: ProblemSlide,             theme: "dark" },
  platform:            { id: "platform",             label: "Platform",            component: PlatformSlide,            theme: "dark" },
  solution:            { id: "solution",             label: "Solution",            component: SolutionSlide,            theme: "light" },
  market:              { id: "market",               label: "Market",              component: MarketSlide,              theme: "dark" },
  "agentic-opp":       { id: "agentic-opp",         label: "AI Opportunity",      component: AgenticOpportunitySlide,  theme: "dark" },
  "ai-tandem":         { id: "ai-tandem",            label: "AI + Human",          component: AiTandemSlide,            theme: "light" },
  "cx-market-sizing":  { id: "cx-market-sizing",     label: "CX Market Sizing",    component: CXMarketSizingSlide,      theme: "dark" },
  "labor-cost-savings":{ id: "labor-cost-savings",   label: "Labor Cost Savings",  component: LaborCostSavingsSlide,    theme: "dark" },
  "ai-tailwind":       { id: "ai-tailwind",          label: "AI Tailwind",         component: AiTailwindSlide,          theme: "dark" },
  win:                 { id: "win",                  label: "Right to Win",        component: RightToWinSlide,          theme: "dark" },
  financials:          { id: "financials",           label: "Financials",          component: FinancialsSlide,          theme: "light" },
  leadership:          { id: "leadership",           label: "Leadership",          component: LeadershipSlide,          theme: "light" },
  summary:             { id: "summary",              label: "Summary",             component: SummarySlide,             theme: "dark" },
  closing:             { id: "closing",              label: "Closing",             component: ClosingSlide,             theme: "dark" },
  "appendix-customers":{ id: "appendix-customers",   label: "Customers",           component: ScaleSlide,               theme: "dark" },
  "appendix-products": { id: "appendix-products",    label: "Products",            component: ProductPortfolioSlide,    theme: "light" },
  "ai-gateways-revenue":{ id: "ai-gateways-revenue", label: "AI Gateways Revenue", component: AIGatewaysRevenueSlide,   theme: "light" },
  "financial-divider":  { id: "financial-divider",   label: "Financial Overview",  component: FinancialDividerSlide,    theme: "light", isNew: true },
  "arr-gross-margin":   { id: "arr-gross-margin",    label: "Revenue & Margin",    component: ARRGrossMarginSlide,      theme: "light", isNew: true },
  "ebitda":             { id: "ebitda",              label: "EBITDA",              component: EBITDASlide,              theme: "light", isNew: true },
  "nrr-churn":          { id: "nrr-churn",           label: "Retention Trends",    component: NRRChurnSlide,            theme: "light", isNew: true },
  "expansion-retention":{ id: "expansion-retention", label: "Customer Expansion",  component: ExpansionRetentionSlide,  theme: "light", isNew: true },
  "target-model":       { id: "target-model",        label: "Target Model",        component: TargetModelSlide,         theme: "light", isNew: true },
  "operating-leverage": { id: "operating-leverage",  label: "Operating Leverage",  component: OperatingLeverageSlide,   theme: "light", isNew: true },
  "customer-base":      { id: "customer-base",       label: "Customer Base",       component: CustomerBaseSlide,        theme: "light", isNew: true },
  "revenue-visibility": { id: "revenue-visibility",  label: "Revenue Visibility",  component: RevenueVisibilitySlide,   theme: "light", isNew: true },
  "cash-flow-trends":   { id: "cash-flow-trends",    label: "Cash Flow Trends",    component: CashFlowTrendsSlide,      theme: "light", isNew: true },
};

export const DEFAULT_SLIDE_ORDER: string[] = [
  "cover",
  "safe-harbor",
  "glance",
  "founder",
  "who",
  "journey",
  "problem",
  "platform",
  "solution",
  "market",
  "agentic-opp",
  "ai-tandem",
  "cx-market-sizing",
  "labor-cost-savings",
  "ai-tailwind",
  "win",
  "leadership",
  "summary",
  "closing",
  "appendix-customers",
  "appendix-products",
  "ai-gateways-revenue",
  "financial-divider",
  "arr-gross-margin",
  "ebitda",
  "nrr-churn",
  "expansion-retention",
  "target-model",
  "operating-leverage",
  "customer-base",
  "revenue-visibility",
  "cash-flow-trends",
];

export function resolveSlides(order: string[]): SlideDef[] {
  return order
    .map((id) => SLIDE_COMPONENTS[id])
    .filter((s): s is SlideDef => s != null);
}

export function getAllSlideIds(): string[] {
  return Object.keys(SLIDE_COMPONENTS);
}

export { SLIDE_COMPONENTS };
