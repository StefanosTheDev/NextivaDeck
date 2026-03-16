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
import CustomerUseCasesDividerSlide from "./slides/CustomerUseCasesDividerSlide";
import CXPortfolioSlide from "./slides/CXPortfolioSlide";
import CXPortfolioOptionASlide from "./slides/CXPortfolioOptionASlide";
import CXPortfolioOptionBSlide from "./slides/CXPortfolioOptionBSlide";
import CXPortfolioOptionCSlide from "./slides/CXPortfolioOptionCSlide";
import CXPortfolioPuzzleCrossSlide from "./slides/CXPortfolioPuzzleCrossSlide";
import ARRGrossMarginSlide from "./slides/ARRGrossMarginSlide";
import EBITDASlide from "./slides/EBITDASlide";
import NRRChurnSlide from "./slides/NRRChurnSlide";
import ExpansionRetentionSlide from "./slides/ExpansionRetentionSlide";
import TargetModelSlide from "./slides/TargetModelSlide";
import OperatingLeverageSlide from "./slides/OperatingLeverageSlide";
import OperatingLeverageDatedSlide from "./slides/OperatingLeverageDatedSlide";
import CustomerBaseSlide from "./slides/CustomerBaseSlide";
import RevenueVisibilitySlide from "./slides/RevenueVisibilitySlide";
import CashFlowTrendsSlide from "./slides/CashFlowTrendsSlide";
import AgenticOpportunity2Slide from "./slides/AgenticOpportunity2Slide";
import AgenticOpportunityCopySlide from "./slides/AgenticOpportunityCopySlide";
import AgenticOpportunityCopy2Slide from "./slides/AgenticOpportunityCopy2Slide";
import AgenticOpportunityCopy3Slide from "./slides/AgenticOpportunityCopy3Slide";
import AiTailwind2Slide from "./slides/AiTailwind2Slide";
import DurableEdgeSlide from "./slides/DurableEdgeSlide";
import MarketTAMSlide from "./slides/MarketTAMSlide";
import CompetitiveMoatSlide from "./slides/CompetitiveMoatSlide";
import UnifiedDataModelSlide from "./slides/UnifiedDataModelSlide";
import AiTailwindOptionASlide from "./slides/AiTailwindOptionASlide";
import AiTailwindOptionBSlide from "./slides/AiTailwindOptionBSlide";
import AiTailwindOptionCSlide from "./slides/AiTailwindOptionCSlide";
import AiTailwindOptionDSlide from "./slides/AiTailwindOptionDSlide";
import AiTailwindOptionESlide from "./slides/AiTailwindOptionESlide";
import AiTailwindCopySlide from "./slides/AiTailwindCopySlide";
import CustomerBaseLovableSlide from "./slides/CustomerBaseLovableSlide";
import MarketTAMLovableSlide from "./slides/MarketTAMLovableSlide";
import MarketTAMLovableCopySlide from "./slides/MarketTAMLovableCopySlide";
import BetterOutcomesSlide from "./slides/BetterOutcomesSlide";
import WorldMovingSlide from "./slides/WorldMovingSlide";
import WhatWeAreCloseSlide from "./slides/WhatWeAreCloseSlide";
import CXPortfolioThomasSlide from "./slides/CXPortfolioThomasSlide";
import AIAgentsInActionSlide from "./slides/AIAgentsInActionSlide";
import AgenticOpportunityV2Slide from "./slides/AgenticOpportunityV2Slide";
import CXPortfolioThomasConnectedASlide from "./slides/CXPortfolioThomasConnectedASlide";
import CXPortfolioThomasConnectedBSlide from "./slides/CXPortfolioThomasConnectedBSlide";
import CXPortfolioThomasConnectedCSlide from "./slides/CXPortfolioThomasConnectedCSlide";
import CXPortfolioThomasConnectedDSlide from "./slides/CXPortfolioThomasConnectedDSlide";
import AgenticOpportunityLovableSlide from "./slides/AgenticOpportunityLovableSlide";
import ContactCenterMarketOpportunitySlide from "./slides/ContactCenterMarketOpportunitySlide";

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
  "safe-harbor":       { id: "safe-harbor",         label: "Safe Harbor",         component: SafeHarborSlide,          theme: "dark" },
  "better-outcomes":   { id: "better-outcomes",     label: "Our Mission",         component: BetterOutcomesSlide,      theme: "dark" },
  glance:              { id: "glance",               label: "At a Glance",         component: AtAGlanceSlide,           theme: "dark" },
  founder:             { id: "founder",              label: "Founder",             component: FounderSlide,             theme: "dark" },
  who:                 { id: "who",                  label: "Who We Serve",        component: WhoWeServeSlide,          theme: "dark" },
  journey:             { id: "journey",              label: "Journey",             component: JourneySlide,             theme: "dark" },
  problem:             { id: "problem",              label: "Problem",             component: ProblemSlide,             theme: "dark" },
  platform:            { id: "platform",             label: "Platform",            component: PlatformSlide,            theme: "dark" },
  solution:            { id: "solution",             label: "Solution",            component: SolutionSlide,            theme: "dark" },
  market:              { id: "market",               label: "Market",              component: MarketSlide,              theme: "dark" },
  "agentic-opp":       { id: "agentic-opp",         label: "AI Opportunity",      component: AgenticOpportunitySlide,  theme: "dark" },
  "agentic-opp-copy":   { id: "agentic-opp-copy",   label: "AI Opportunity (copy)", component: AgenticOpportunityCopySlide, theme: "dark" },
  "agentic-opp-copy-2": { id: "agentic-opp-copy-2", label: "AI Opportunity (copy 2)", component: AgenticOpportunityCopy2Slide, theme: "dark" },
  "agentic-opp-copy-3": { id: "agentic-opp-copy-3", label: "Tomorrow's Agentic Workforce (copy)", component: AgenticOpportunityCopy3Slide, theme: "dark" },
  "ai-tandem":         { id: "ai-tandem",            label: "AI + Human",          component: AiTandemSlide,            theme: "dark" },
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
  "ai-gateways-revenue":{ id: "ai-gateways-revenue", label: "AI Gateways Revenue", component: AIGatewaysRevenueSlide,   theme: "dark" },
  "financial-divider":  { id: "financial-divider",   label: "Financial Overview",  component: FinancialDividerSlide,    theme: "dark", isNew: true },
  "customer-use-cases-divider": { id: "customer-use-cases-divider", label: "Customer Use Cases", component: CustomerUseCasesDividerSlide, theme: "dark", isNew: true },
  "cx-portfolio": { id: "cx-portfolio", label: "CX Platform Portfolio", component: CXPortfolioSlide, theme: "dark", isNew: true },
  "cx-portfolio-opt-a": { id: "cx-portfolio-opt-a", label: "CX Portfolio (A: Clip-path)", component: CXPortfolioOptionASlide, theme: "dark", isNew: true },
  "cx-portfolio-opt-b": { id: "cx-portfolio-opt-b", label: "CX Portfolio (B: Overlapping)", component: CXPortfolioOptionBSlide, theme: "dark", isNew: true },
  "cx-portfolio-opt-c": { id: "cx-portfolio-opt-c", label: "CX Portfolio (C: Grid + Divider)", component: CXPortfolioOptionCSlide, theme: "dark", isNew: true },
  "cx-portfolio-puzzle-cross": { id: "cx-portfolio-puzzle-cross", label: "CX Portfolio (Puzzle Cross)", component: CXPortfolioPuzzleCrossSlide, theme: "dark", isNew: true },
  "arr-gross-margin":   { id: "arr-gross-margin",    label: "Revenue & Margin",    component: ARRGrossMarginSlide,      theme: "dark", isNew: true },
  "ebitda":             { id: "ebitda",              label: "EBITDA",              component: EBITDASlide,              theme: "dark", isNew: true },
  "nrr-churn":          { id: "nrr-churn",           label: "Retention Trends",    component: NRRChurnSlide,            theme: "dark", isNew: true },
  "expansion-retention":{ id: "expansion-retention", label: "Customer Expansion",  component: ExpansionRetentionSlide,  theme: "dark", isNew: true },
  "target-model":       { id: "target-model",        label: "Target Model",        component: TargetModelSlide,         theme: "dark", isNew: true },
  "operating-leverage": { id: "operating-leverage",  label: "Operating Leverage",  component: OperatingLeverageSlide,   theme: "dark", isNew: true },
  "operating-leverage-dated": { id: "operating-leverage-dated", label: "Operating Leverage (0315)", component: OperatingLeverageDatedSlide, theme: "dark", isNew: true },
  "customer-base":      { id: "customer-base",       label: "Customer Base",       component: CustomerBaseSlide,        theme: "dark", isNew: true },
  "revenue-visibility": { id: "revenue-visibility",  label: "Revenue Visibility",  component: RevenueVisibilitySlide,   theme: "dark", isNew: true },
  "cash-flow-trends":   { id: "cash-flow-trends",    label: "Cash Flow Trends",    component: CashFlowTrendsSlide,      theme: "dark", isNew: true },
  "agentic-opp-2":     { id: "agentic-opp-2",       label: "AI Opportunity (2)",  component: AgenticOpportunity2Slide, theme: "dark" },
  "ai-tailwind-2":     { id: "ai-tailwind-2",       label: "AI Tailwind (2)",     component: AiTailwind2Slide,         theme: "dark" },
  "durable-edge":      { id: "durable-edge",        label: "Durable Edge",        component: DurableEdgeSlide,         theme: "light" },
  "market-tam":        { id: "market-tam",          label: "Market TAM",          component: MarketTAMSlide,           theme: "dark" },
  "competitive-moat":  { id: "competitive-moat",    label: "Competitive Moat",    component: CompetitiveMoatSlide,     theme: "dark" },
  "unified-data-model":{ id: "unified-data-model",  label: "Unified Data Model",  component: UnifiedDataModelSlide,    theme: "dark" },
  "ai-tailwind-opt-a": { id: "ai-tailwind-opt-a",  label: "AI Tailwind Option A", component: AiTailwindOptionASlide,  theme: "dark" },
  "ai-tailwind-opt-b": { id: "ai-tailwind-opt-b",  label: "AI Tailwind Option B", component: AiTailwindOptionBSlide,  theme: "dark" },
  "ai-tailwind-opt-c": { id: "ai-tailwind-opt-c",  label: "AI Tailwind Option C", component: AiTailwindOptionCSlide,  theme: "dark" },
  "ai-tailwind-opt-d": { id: "ai-tailwind-opt-d",  label: "AI Tailwind Option D", component: AiTailwindOptionDSlide,  theme: "dark" },
  "ai-tailwind-opt-e": { id: "ai-tailwind-opt-e",  label: "AI Tailwind Option E", component: AiTailwindOptionESlide,  theme: "dark" },
  "ai-tailwind-copy":  { id: "ai-tailwind-copy",   label: "AI Tailwind (copy)",   component: AiTailwindCopySlide,     theme: "dark" },
  "customer-base-lovable": { id: "customer-base-lovable", label: "Customer Base (Lovable)", component: CustomerBaseLovableSlide, theme: "dark" },
  "market-tam-lovable": { id: "market-tam-lovable", label: "Market TAM (Lovable)", component: MarketTAMLovableSlide, theme: "dark" },
  "market-tam-lovable-copy": { id: "market-tam-lovable-copy", label: "Market TAM (Lovable copy)", component: MarketTAMLovableCopySlide, theme: "dark" },
  "world-moving-thomas": { id: "world-moving-thomas", label: "#4 World Moving to Unified CX (Thomas · SlideWorldMoving)", component: WorldMovingSlide, theme: "dark", isNew: true },
  "what-we-are-close-thomas": { id: "what-we-are-close-thomas", label: "#6 What We Are Close (Thomas · SlideWhatWeAreClose)", component: WhatWeAreCloseSlide, theme: "dark", isNew: true },
  "cx-portfolio-thomas": { id: "cx-portfolio-thomas", label: "#15 CX Platform Portfolio (Thomas · SlideCXPortfolio)", component: CXPortfolioThomasSlide, theme: "dark", isNew: true },
  "ai-agents-in-action": { id: "ai-agents-in-action", label: "AI Agents in Action", component: AIAgentsInActionSlide, theme: "dark", isNew: true },
  "agentic-opp-v2-thomas": { id: "agentic-opp-v2-thomas", label: "AI Opportunity (Thomas · SlideAgenticOpportunity)", component: AgenticOpportunityV2Slide, theme: "dark", isNew: true },
  "cx-portfolio-thomas-a": { id: "cx-portfolio-thomas-a", label: "#15 CX Portfolio (A: Puzzle-Tab Connectors)", component: CXPortfolioThomasConnectedASlide, theme: "dark", isNew: true },
  "cx-portfolio-thomas-b": { id: "cx-portfolio-thomas-b", label: "#15 CX Portfolio (B: Connection Bridges)", component: CXPortfolioThomasConnectedBSlide, theme: "dark", isNew: true },
  "cx-portfolio-thomas-c": { id: "cx-portfolio-thomas-c", label: "#15 CX Portfolio (C: Shared Foundation)", component: CXPortfolioThomasConnectedCSlide, theme: "dark", isNew: true },
  "cx-portfolio-thomas-d": { id: "cx-portfolio-thomas-d", label: "#15 CX Portfolio (D: Puzzle 2x2 Grid)", component: CXPortfolioThomasConnectedDSlide, theme: "dark", isNew: true },
  "agentic-opp-lovable": { id: "agentic-opp-lovable", label: "AI Opportunity (Lovable)", component: AgenticOpportunityLovableSlide, theme: "dark", isNew: true },
  "contact-center-market-opportunity": { id: "contact-center-market-opportunity", label: "Contact Center Market Opportunity", component: ContactCenterMarketOpportunitySlide, theme: "dark", isNew: true },
};

export const DEFAULT_SLIDE_ORDER: string[] = [
  "cover",
  "safe-harbor",
  "better-outcomes",
  "glance",
  "founder",
  "who",
  "customer-base-lovable",
  "journey",
  "problem",
  "platform",
  "solution",
  "market",
  "agentic-opp-2",
  "agentic-opp",
  "agentic-opp-copy",
  "ai-tandem",
  "ai-tailwind-copy",
  "ai-tailwind",
  "cx-market-sizing",
  "labor-cost-savings",
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
  "customer-base",
  "revenue-visibility",
  "cash-flow-trends",
  "durable-edge",
  "market-tam",
  "competitive-moat",
  "unified-data-model",
  "ai-tailwind-opt-a",
  "ai-tailwind-opt-b",
  "ai-tailwind-opt-c",
  "ai-tailwind-opt-d",
  "ai-tailwind-opt-e",
  "ai-tailwind-2",
  "market-tam-lovable",
  "operating-leverage",
  "world-moving-thomas",
  "what-we-are-close-thomas",
  "cx-portfolio-thomas",
  "ai-agents-in-action",
  "agentic-opp-v2-thomas",
  "cx-portfolio-thomas-a",
  "cx-portfolio-thomas-b",
  "cx-portfolio-thomas-c",
  "cx-portfolio-thomas-d",
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
