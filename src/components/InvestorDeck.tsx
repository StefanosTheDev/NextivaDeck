"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
import AiUseCasesSlide from "./slides/AiUseCasesSlide";
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

type SlideTheme = "light" | "dark";

const slides: { id: string; label: string; component: React.ComponentType<{ slideNumber: number }>; theme: SlideTheme }[] = [
  { id: "cover", label: "Cover", component: CoverSlide, theme: "dark" },
  { id: "safe-harbor", label: "Safe Harbor", component: SafeHarborSlide, theme: "light" },
  { id: "glance", label: "At a Glance", component: AtAGlanceSlide, theme: "light" },
  { id: "founder", label: "Founder", component: FounderSlide, theme: "dark" },
  { id: "who", label: "Who We Serve", component: WhoWeServeSlide, theme: "dark" },
  { id: "journey", label: "Journey", component: JourneySlide, theme: "dark" },
  { id: "problem", label: "Problem", component: ProblemSlide, theme: "dark" },
  { id: "platform", label: "Platform", component: PlatformSlide, theme: "dark" },
  { id: "solution", label: "Solution", component: SolutionSlide, theme: "light" },
  { id: "market", label: "Market", component: MarketSlide, theme: "dark" },
  { id: "agentic-opp", label: "AI Opportunity", component: AgenticOpportunitySlide, theme: "dark" },
  { id: "ai-tandem", label: "AI + Human", component: AiTandemSlide, theme: "light" },
  { id: "cx-market-sizing", label: "CX Market Sizing", component: CXMarketSizingSlide, theme: "dark" },
  { id: "labor-cost-savings", label: "Labor Cost Savings", component: LaborCostSavingsSlide, theme: "dark" },
  { id: "ai-tailwind", label: "AI Tailwind", component: AiTailwindSlide, theme: "dark" },
  { id: "win", label: "Right to Win", component: RightToWinSlide, theme: "dark" },
  { id: "leadership", label: "Leadership", component: LeadershipSlide, theme: "light" },
  { id: "summary", label: "Summary", component: SummarySlide, theme: "dark" },
  { id: "closing", label: "Closing", component: ClosingSlide, theme: "dark" },
  { id: "appendix-customers", label: "Customers", component: ScaleSlide, theme: "dark" },
  { id: "appendix-products", label: "Products", component: ProductPortfolioSlide, theme: "light" },
  { id: "ai-gateways-revenue", label: "AI Gateways Revenue", component: AIGatewaysRevenueSlide, theme: "light" },
];

export default function InvestorDeck() {
  const [cur, setCur] = useState(0);
  const [nav, setNav] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const go = useCallback((i: number) => {
    if (i < 0 || i >= slides.length || i === cur || transitioning) return;
    setTransitioning(true);
    // Short delay for fade out, then switch
    setTimeout(() => {
      setCur(i);
      setTimeout(() => setTransitioning(false), 50);
    }, 300);
  }, [cur, transitioning]);

  const next = useCallback(() => go(cur + 1), [cur, go]);
  const prev = useCallback(() => go(cur - 1), [cur, go]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") { e.preventDefault(); go(0); }
      else if (e.key === "End") { e.preventDefault(); go(slides.length - 1); }
      else if (e.key === "Escape") setNav(p => !p);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev, go]);

  useEffect(() => {
    let sx = 0, sy = 0;
    const ts = (e: TouchEvent) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; };
    const te = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    };
    window.addEventListener("touchstart", ts);
    window.addEventListener("touchend", te);
    return () => { window.removeEventListener("touchstart", ts); window.removeEventListener("touchend", te); };
  }, [next, prev]);

  useEffect(() => {
    let t: NodeJS.Timeout;
    const show = () => { setNav(true); clearTimeout(t); t = setTimeout(() => setNav(false), 3000); };
    window.addEventListener("mousemove", show);
    t = setTimeout(() => setNav(false), 5000);
    return () => { window.removeEventListener("mousemove", show); clearTimeout(t); };
  }, []);

  const Slide = slides[cur].component;
  const navTheme = slides[cur].theme === "dark" ? "nav-dark" : "nav-light";

  return (
    <div ref={containerRef} className="deck-viewport">
      {/* Slide layer with CSS transition */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: transitioning ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Slide slideNumber={cur + 1} />
      </div>

      {/* Navigation overlay */}
      <AnimatePresence>
        {nav && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className={`absolute inset-0 pointer-events-none z-50 ${navTheme}`}>

            {cur > 0 && (
              <button onClick={prev}
                className="nav-arrow absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all pointer-events-auto cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {cur < slides.length - 1 && (
              <button onClick={next}
                className="nav-arrow absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all pointer-events-auto cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <div className="nav-pill absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full pointer-events-auto">
              {slides.map((s, i) => (
                <button key={s.id} onClick={() => go(i)} className={`nav-dot ${i === cur ? "active" : ""}`} title={s.label} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
