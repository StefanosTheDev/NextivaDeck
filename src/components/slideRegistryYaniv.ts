// Modified slides – Yaniv's versions
import AIGatewaysRevenueSlide from "./slides-yaniv/AIGatewaysRevenueSlide";
import ARRGrossMarginSlide from "./slides-yaniv/ARRGrossMarginSlide";
import AiTandemSlide from "./slides-yaniv/AiTandemSlide";
import AtAGlanceSlide from "./slides-yaniv/AtAGlanceSlide";
import CashFlowTrendsSlide from "./slides-yaniv/CashFlowTrendsSlide";
import EBITDASlide from "./slides-yaniv/EBITDASlide";
import JourneySlide from "./slides-yaniv/JourneySlide";
import OperatingLeverageSlide from "./slides-yaniv/OperatingLeverageSlide";
import PlatformSlide from "./slides-yaniv/PlatformSlide";
import RevenueVisibilitySlide from "./slides-yaniv/RevenueVisibilitySlide";
import SafeHarborSlide from "./slides-yaniv/SafeHarborSlide";
import SolutionSlide from "./slides-yaniv/SolutionSlide";
import TargetModelSlide from "./slides-yaniv/TargetModelSlide";

// Unchanged slides – shared with main
import CoverSlide from "./slides/CoverSlide";
import FounderSlide from "./slides/FounderSlide";
import WhoWeServeSlide from "./slides/WhoWeServeSlide";
import ScaleSlide from "./slides/ScaleSlide";
import ProblemSlide from "./slides/ProblemSlide";
import MarketSlide from "./slides/MarketSlide";
import AgenticOpportunitySlide from "./slides/AgenticOpportunitySlide";
import AiTailwindSlide from "./slides/AiTailwindSlide";
import RightToWinSlide from "./slides/RightToWinSlide";
import FinancialsSlide from "./slides/FinancialsSlide";
import LeadershipSlide from "./slides/LeadershipSlide";
import SummarySlide from "./slides/SummarySlide";
import ClosingSlide from "./slides/ClosingSlide";
import ProductPortfolioSlide from "./slides/ProductPortfolioSlide";
import CXMarketSizingSlide from "./slides/CXMarketSizingSlide";
import LaborCostSavingsSlide from "./slides/LaborCostSavingsSlide";
import FinancialDividerSlide from "./slides/FinancialDividerSlide";
import NRRChurnSlide from "./slides/NRRChurnSlide";
import ExpansionRetentionSlide from "./slides/ExpansionRetentionSlide";
import CustomerBaseSlide from "./slides/CustomerBaseSlide";
import AgenticOpportunity2Slide from "./slides/AgenticOpportunity2Slide";
import AiTailwind2Slide from "./slides/AiTailwind2Slide";
import DurableEdgeSlide from "./slides/DurableEdgeSlide";
import MarketTAMSlide from "./slides/MarketTAMSlide";
import CompetitiveMoatSlide from "./slides/CompetitiveMoatSlide";
import UnifiedDataModelSlide from "./slides/UnifiedDataModelSlide";

import type { SlideDef } from "./slideRegistry";

export const SLIDE_COMPONENTS_YANIV: Record<string, SlideDef> = {
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
  "financial-divider":  { id: "financial-divider",   label: "Financial Overview",  component: FinancialDividerSlide,    theme: "dark" },
  "arr-gross-margin":   { id: "arr-gross-margin",    label: "Revenue & Margin",    component: ARRGrossMarginSlide,      theme: "dark" },
  "ebitda":             { id: "ebitda",              label: "EBITDA",              component: EBITDASlide,              theme: "dark" },
  "nrr-churn":          { id: "nrr-churn",           label: "Retention Trends",    component: NRRChurnSlide,            theme: "dark" },
  "expansion-retention":{ id: "expansion-retention", label: "Customer Expansion",  component: ExpansionRetentionSlide,  theme: "dark" },
  "target-model":       { id: "target-model",        label: "Target Model",        component: TargetModelSlide,         theme: "dark" },
  "operating-leverage": { id: "operating-leverage",  label: "Operating Leverage",  component: OperatingLeverageSlide,   theme: "dark" },
  "customer-base":      { id: "customer-base",       label: "Customer Base",       component: CustomerBaseSlide,        theme: "dark" },
  "revenue-visibility": { id: "revenue-visibility",  label: "Revenue Visibility",  component: RevenueVisibilitySlide,   theme: "dark" },
  "cash-flow-trends":   { id: "cash-flow-trends",    label: "Cash Flow Trends",    component: CashFlowTrendsSlide,      theme: "dark" },
  "agentic-opp-2":     { id: "agentic-opp-2",       label: "AI Opportunity (2)",  component: AgenticOpportunity2Slide, theme: "dark" },
  "ai-tailwind-2":     { id: "ai-tailwind-2",       label: "AI Tailwind (2)",     component: AiTailwind2Slide,         theme: "dark" },
  "durable-edge":      { id: "durable-edge",        label: "Durable Edge",        component: DurableEdgeSlide,         theme: "light" },
  "market-tam":        { id: "market-tam",          label: "Market TAM",          component: MarketTAMSlide,           theme: "dark" },
  "competitive-moat":  { id: "competitive-moat",    label: "Competitive Moat",    component: CompetitiveMoatSlide,     theme: "dark" },
  "unified-data-model":{ id: "unified-data-model",  label: "Unified Data Model",  component: UnifiedDataModelSlide,    theme: "dark" },
};

export const DEFAULT_SLIDE_ORDER_YANIV: string[] = [
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
  "agentic-opp-2",
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

export function resolveYanivSlides(order: string[]): SlideDef[] {
  return order
    .map((id) => SLIDE_COMPONENTS_YANIV[id])
    .filter((s): s is SlideDef => s != null);
}

export function getAllYanivSlideIds(): string[] {
  return Object.keys(SLIDE_COMPONENTS_YANIV);
}
