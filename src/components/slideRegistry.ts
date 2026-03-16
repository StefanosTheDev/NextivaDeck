import CoverSlide from "./slides/CoverSlide";
import SafeHarborSlide from "./slides/SafeHarborSlide";
import AtAGlanceSlide from "./slides/AtAGlanceSlide";
import AtAGlanceProjectionsSlide from "./slides/AtAGlanceProjectionsSlide";
import FounderSlide from "./slides/FounderSlide";
import WhoWeServeSlide from "./slides/WhoWeServeSlide";
import ScaleSlide from "./slides/ScaleSlide";
import JourneySlide from "./slides/JourneySlide";
import ProblemSlide from "./slides/ProblemSlide";
import SolutionSlide from "./slides/SolutionSlide";
import SolutionDarkSlide from "./slides/SolutionDarkSlide";
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
import CustomerBaseV2Slide from "./slides/CustomerBaseV2Slide";
import RevenueVisibilitySlide from "./slides/RevenueVisibilitySlide";
import CashFlowTrendsSlide from "./slides/CashFlowTrendsSlide";
import AgenticOpportunity2Slide from "./slides/AgenticOpportunity2Slide";
import AiTailwind2Slide from "./slides/AiTailwind2Slide";
import DurableEdgeSlide from "./slides/DurableEdgeSlide";
import MarketTAMSlide from "./slides/MarketTAMSlide";
import CompetitiveMoatSlide from "./slides/CompetitiveMoatSlide";
import UnifiedDataModelSlide from "./slides/UnifiedDataModelSlide";
import CXPortfolioPuzzleSlide from "./slides/CXPortfolioPuzzleSlide";
import BlueOceanSlide from "./slides/BlueOceanSlide";
import BlueOcean2Slide from "./slides/BlueOcean2Slide";
import BlueOcean2CopySlide from "./slides/BlueOcean2CopySlide";
import RevenueOpportunitySlide from "./slides/RevenueOpportunitySlide";
import CXPortfolioDataSlide from "./slides/CXPortfolioDataSlide";
import ProductDataPlatformSlide from "./slides/ProductDataPlatformSlide";
import ProductDataPlatformCopySlide from "./slides/ProductDataPlatformCopySlide";
import CXPortfolioArchSlide from "./slides/CXPortfolioArchSlide";
import WhereWeWinSlide from "./slides/WhereWeWinSlide";
import BetterOutcomesSlide from "./slides/BetterOutcomesSlide";

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
  "better-outcomes":   { id: "better-outcomes",     label: "Our Mission",         component: BetterOutcomesSlide,      theme: "dark" },
  glance:              { id: "glance",               label: "At a Glance",         component: AtAGlanceSlide,           theme: "dark" },
  "glance-projections":{ id: "glance-projections",   label: "At a Glance + Projections", component: AtAGlanceProjectionsSlide, theme: "dark" },
  founder:             { id: "founder",              label: "Founder",             component: FounderSlide,             theme: "dark" },
  who:                 { id: "who",                  label: "Who We Serve",        component: WhoWeServeSlide,          theme: "dark" },
  journey:             { id: "journey",              label: "Journey",             component: JourneySlide,             theme: "dark" },
  problem:             { id: "problem",              label: "Problem",             component: ProblemSlide,             theme: "dark" },
  platform:            { id: "platform",             label: "Platform",            component: PlatformSlide,            theme: "dark" },
  solution:            { id: "solution",             label: "Solution",            component: SolutionSlide,            theme: "light" },
  "solution-dark":     { id: "solution-dark",        label: "Solution (Dark)",     component: SolutionDarkSlide,        theme: "dark" },
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
  "financial-divider":  { id: "financial-divider",   label: "Financial Overview",  component: FinancialDividerSlide,    theme: "dark", isNew: true },
  "arr-gross-margin":   { id: "arr-gross-margin",    label: "Revenue & Margin",    component: ARRGrossMarginSlide,      theme: "dark", isNew: true },
  "ebitda":             { id: "ebitda",              label: "EBITDA",              component: EBITDASlide,              theme: "dark", isNew: true },
  "nrr-churn":          { id: "nrr-churn",           label: "Retention Trends",    component: NRRChurnSlide,            theme: "dark", isNew: true },
  "expansion-retention":{ id: "expansion-retention", label: "Customer Expansion",  component: ExpansionRetentionSlide,  theme: "dark", isNew: true },
  "target-model":       { id: "target-model",        label: "Target Model",        component: TargetModelSlide,         theme: "dark", isNew: true },
  "operating-leverage": { id: "operating-leverage",  label: "Operating Leverage",  component: OperatingLeverageSlide,   theme: "dark", isNew: true },
  "customer-base":      { id: "customer-base",       label: "Customer Base",       component: CustomerBaseSlide,        theme: "dark", isNew: true },
  "customer-base-v2":   { id: "customer-base-v2",    label: "Customer Base (V2)",  component: CustomerBaseV2Slide,      theme: "dark", isNew: true },
  "revenue-visibility": { id: "revenue-visibility",  label: "Revenue Visibility",  component: RevenueVisibilitySlide,   theme: "dark", isNew: true },
  "cash-flow-trends":   { id: "cash-flow-trends",    label: "Cash Flow Trends",    component: CashFlowTrendsSlide,      theme: "dark", isNew: true },
  "agentic-opp-2":     { id: "agentic-opp-2",       label: "AI Opportunity (2)",  component: AgenticOpportunity2Slide, theme: "dark" },
  "ai-tailwind-2":     { id: "ai-tailwind-2",       label: "AI Tailwind (2)",     component: AiTailwind2Slide,         theme: "dark" },
  "durable-edge":      { id: "durable-edge",        label: "Durable Edge",        component: DurableEdgeSlide,         theme: "light" },
  "market-tam":        { id: "market-tam",          label: "Market TAM",          component: MarketTAMSlide,           theme: "dark" },
  "competitive-moat":  { id: "competitive-moat",    label: "Competitive Moat",    component: CompetitiveMoatSlide,     theme: "dark" },
  "unified-data-model":{ id: "unified-data-model",  label: "Unified Data Model",  component: UnifiedDataModelSlide,    theme: "dark" },
  "cx-portfolio-puzzle":{ id: "cx-portfolio-puzzle", label: "CX Portfolio",       component: CXPortfolioPuzzleSlide,   theme: "dark" },
  "blue-ocean":         { id: "blue-ocean",          label: "Blue Ocean",         component: BlueOceanSlide,           theme: "dark" },
  "blue-ocean-2":       { id: "blue-ocean-2",        label: "Blue Ocean (2)",     component: BlueOcean2Slide,          theme: "dark" },
  "blue-ocean-2-copy":  { id: "blue-ocean-2-copy",   label: "Blue Ocean (2) Copy", component: BlueOcean2CopySlide,    theme: "dark" },
  "revenue-opportunity":{ id: "revenue-opportunity",  label: "Revenue Opportunity", component: RevenueOpportunitySlide, theme: "dark" },
  "cx-portfolio-data":  { id: "cx-portfolio-data",   label: "CX Portfolio + Data", component: CXPortfolioDataSlide,    theme: "dark" },
  "product-data-platform":{ id: "product-data-platform", label: "Product + Data Platform", component: ProductDataPlatformSlide, theme: "dark" },
  "product-data-platform-copy":{ id: "product-data-platform-copy", label: "Product + Data Platform (Copy)", component: ProductDataPlatformCopySlide, theme: "dark" },
  "cx-portfolio-arch":{ id: "cx-portfolio-arch", label: "CX Portfolio Architecture", component: CXPortfolioArchSlide, theme: "dark" },
  "where-we-win":    { id: "where-we-win",      label: "Where We Win",             component: WhereWeWinSlide,        theme: "dark" },
};

export const DEFAULT_SLIDE_ORDER: string[] = [
  "cover",
  "safe-harbor",
  "glance",
  "glance-projections",
  "founder",
  "who",
  "journey",
  "problem",
  "platform",
  "solution",
  "solution-dark",
  "market",
  "agentic-opp-2",
  "blue-ocean",
  "blue-ocean-2",
  "cx-portfolio-puzzle",
  "cx-portfolio-data",
  "product-data-platform",
  "agentic-opp",
  "ai-tandem",
  "ai-tailwind",
  "cx-market-sizing",
  "labor-cost-savings",
  "ai-tailwind-2",
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
  "durable-edge",
  "market-tam",
  "competitive-moat",
  "unified-data-model",
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
