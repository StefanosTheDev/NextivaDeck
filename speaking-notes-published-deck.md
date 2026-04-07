# Speaking notes — published investor deck

**Source of truth for order:** `slide-order.json` → `order` array, excluding every id listed in `hiddenSlides`. **Slide numbers below** match that visible sequence (currently **60** slides). If you add/remove hidden slides or reorder in the catalog, re-run the deck and adjust numbering in this file.

**Regenerate index (optional):**

```bash
node -e "const j=require('./slide-order.json');const h=new Set(j.hiddenSlides);console.log(j.order.filter(id=>!h.has(id)).map((id,i)=>i+1+': '+id).join('\n'))"
```

---

## Slide 1 — `cover` — Cover

> Thank you for your time today. I'm Tomas Gorny, founder and CEO of Nextiva. We built the company from zero to over $350 million in revenue — largely self-funded — and today I want to show you why we believe Nextiva is the defining platform for the next era of customer experience. What you'll see is not a pivot to AI — it's the natural evolution of an infrastructure we've been building for nearly two decades.

---

## Slide 2 — `safe-harbor` — Safe Harbor

> Before we begin, the standard safe harbor. This presentation contains forward-looking statements. Actual results may differ. Please review the full disclaimer on screen. Let's get into it.

---

## Slide 3 — `opportunity-copy` — Our Market (Copy)

> **What we do:** This is the one-line story — a unified, AI-driven customer experience platform powering every interaction. Use this slide to anchor the meeting before we unpack proof points and numbers.

---

## Slide 4 — `investor-summary` — Investor Summary

> Here's the thesis in five lines. First — we're scaled and capital efficient: about $351 million in revenue, 70%+ gross margins, FY26 exit Adj EBITDA run rate $70M+. Second — we're the only platform that fuses AI, communications, and data natively. Third — the mid-market is massive and underserved, and that's exactly where we win. Fourth — our monetization is evolving from seats to usage and outcomes, which unlocks a 2–3x revenue multiplier on the same customer. And fifth — AI doesn't disrupt us, it expands us. It deepens every deal and widens our moat.

---

## Slide 5 — `glance` — At a Glance

> A quick snapshot of the business. $353 million in FY26 revenue. Gross margins at 70% and expanding. EBITDA of $44 million this year, scaling to $94 million next year. Net revenue retention at 93%. Over 92,000 customers — all U.S., across every industry. And we're projecting $15 million in free cash flow this year, scaling to $75 million in FY27. This is a durable, profitable, scaled business with significant room to run.

---

## Slide 6 — `founder` — Founder

> A bit about me. I've been building companies for over 25 years. Nextiva has been founder-led from day one. We self-funded the business to roughly $250 million in ARR. I've built multiple durable, capital-efficient businesses through every cycle — dot-com, '08, COVID. My superpower has always been the intersection of product vision, market timing, and patience. That combination is exactly what this moment requires.

---

## Slide 7 — `opportunity` — The Opportunity

> Lead with the headline and the single subline on screen: the massive middle is where we win, plus “The largest and most underserved segment in CX representing a $172B TAM.” Then tie it to the gap: enterprise stacks and point solutions leave the middle behind; Nextiva is built for that segment.

---

## Slide 8 — `journey-copy` — Journey (copy)

> Walk the three chapters on screen: cloud communications and scale; unified data and platform; agentic AI native to that stack. Emphasize cumulative innovation — not a pivot.

---

## Slide 9 — `who-copy` — Who We Serve (Built for Operators)

> We serve operators, not technologists — real brands and real businesses. They generate massive interaction volume on our platform. These aren't enterprise IT-only buyers; they need outcomes and simplicity.

---

## Slide 10 — `customer-base-lovable` — Customer Base (Lovable)

> Scale and breadth of the account base — use the on-screen stats as your anchor. Reinforce diversification and U.S. focus if shown.

---

## Slide 11 — `customer-base-broad` — Customer Base (Broad, Tenured, Durable)

> **Customers — diversified revenue, tenured and durable.** Three segments on screen: VSB up to 10 users — about 80,200 customers, 86% of logos, **$143M ARR**, 41% of ARR, ~4.5 year average tenure. SMB 10–50 users — 11,000 customers, **$106M ARR**, 30% of ARR, ~8.3 year tenure. Mid-market 50+ — 1,800 customers, **$104M ARR**, 29% of ARR, ~7.9 year tenure. Message: mix is healthy; larger customers are stickier; we're layering AI value across all three.

---

## Slide 12 — `world-moving-copy` — The Shift (Alt)

> The industry shift — transactional to conversational to agentic. Nextiva is built for where the market is going.

---

## Slide 13 — `problem` — Problem

> In the AI era, the CX problem is worse if data is siloed, tools are fragmented, and every conversation starts cold. You can't bolt AI onto broken infrastructure — you need a unified foundation.

---

## Slide 14 — `platform` — Platform

> Nextiva's Agentic CX Platform: communications at the base, unified customer data, AI orchestration on top — one architecture that turns conversations into outcomes.

---

## Slide 15 — `structural-advantages` — Three Structural Advantages

> Three pillars that compound: owned communications infrastructure AI runs on; proprietary real-time data and flywheel; agentic AI monetized with human–AI tandem. This fusion is the moat.

---

## Slide 16 — `cx-portfolio-thomas` — #15 CX Platform Portfolio (Thomas)

> **Our solution** — Nextiva's CX platform portfolio on one **Intelligent Data Platform** (unified structured & unstructured data, agentic AI, unified front & back office). Four products: **NextOS** (core communications, all customers), **Experience Center** (programmable CX, enterprise & verticals), **XBert** (agentic AI for all channels), **NEXT** (unified front & back office, SMB & mid-market). Close with the banner: innovation led by AI is built once and delivered across the portfolio.

---

## Slide 17 — `solution` — Solution

> AI at the center — conversations on one side, CRM and operational context on the other — synthesized in real time for better resolution and automation.

---

## Slide 18 — `ai-tandem` — AI + Human

> We offer the full range from assist to autopilot to autonomous. Customers move at their own pace — critical in the mid-market where trust is earned.

---

## Slide 19 — `ai-agents-in-action` — AI Agents in Action

> **Agentic AI** — headline on screen: AI agents handling **end-to-end workflows.** Subhead: unlimited agents working independently or together from first contact to resolution — automated and intelligent. Walk the four rows: Support, Sales, Scheduling, Billing — each an end-to-end agentic workflow.

---

## Slide 20 — `market-tam-lovable` — Market TAM (Lovable)

> Frame the TAM using the chart or figures on screen — large, growing CX / conversational market; we're positioned for secular shift.

---

## Slide 21 — `market` — Market Validation

> Validation data points on screen — conversational AI market size, agentic growth in contact centers, autonomy trends. This is structural, not hype.

---

## Slide 22 — `agentic-opp-yaniv-vh` — Agentic Opportunity (Yaniv-VH)

> **Seat landscape:** enterprise ~6M where competitors focus; **12M** in the massive middle under 250 agents; **7M+** beyond traditional contact centers. Legacy stacks need heavy IT, six-figure implementations, long deploys — not built for self-service. The middle is underserved. **Why we win:** unified interactions and data, agentic + human in tandem, GTM moat, product-led velocity.

---

## Slide 23 — `ai-expands-nextiva` — AI Expands Nextiva

> AI expands durability and opportunity — embedded, compounding, monetizable, raises switching costs. Growth scales with interactions and outcomes, not seats alone.

---

## Slide 24 — `monetization-critical` — Monetization (Critical)

> Evolution from subscription / platform fee as the recurring base to **per interaction, per resolution, and per outcome** pricing. Same customer, multiples of revenue potential; AI increases throughput and measurable events.

---

## Slide 25 — `ai-disruption-risk` — AI Disruption Risk

> **Defensibility** — not all software faces the same AI disruption risk. Use the spectrum **More at Risk** → **More Insulated**; contrast fast/forgiving/low-stakes environments with high-stakes, regulated, embedded systems. **Nextiva IS HERE** on the insulated side — tie to deep workflows, data, and cost of failure.

---

## Slide 26 — `ai-disruption-nextiva` — AI Disruption - Nextiva Position

> **Where Nextiva sits on the AI disruption spectrum** — three structural layers: infrastructure & platform (mission-critical, regulated, switching costs); proprietary real-time data (ground truth, flywheel); agentic AI on owned stack (embedded monetization, compounds per interaction). We're firmly on the right side of the chart.

---

## Slide 27 — `leadership` — Leadership

> **Proven tech leaders drawn to compelling vision.** Board, management, and advisors on screen — name-check depth: operators who've scaled public and private companies; finance, product, sales, engineering; advisors with buyout and platform experience.

---

## Slide 28 — `financial-divider` — Financial Overview

> Transition to the financial section — disciplined growth, margin expansion, and cash generation. What follows is the quantitative proof.

---

## Slide 29 — `ebitda-quarterly-dark` — (28) EBITDA (Quarterly Dark)

> **Adj. EBITDA trajectory by quarter** — walk the bars from Q1'25 through the forecast: inflection through FY26 and into FY27. Call out breakeven-to-scale story and quarterly progression on screen.

---

## Slide 30 — `arr-gross-margin-quarterly-dark` — (29) ARR & Gross Margin (Quarterly Dark)

> Revenue and gross margin trend — reinforce scale, margin quality, and trajectory versus plan.

---

## Slide 31 — `ai-gateways-revenue` — (30) AI Gateways Revenue

> AI gateway / attach revenue narrative — penetration by quarter, embedded vs inactive if shown, and how AI bookings layer onto the core.

---

## Slide 32 — `revenue-visibility` — (31) Revenue Visibility

> Revenue composition and visibility — recurring mix, drivers, and how we see forward quarters.

---

## Slide 33 — `operating-leverage-dated` — (32) Operating Leverage (0315)

> Operating leverage — efficiency gains as we scale; tie opex lines to revenue growth using the chart or callouts on the slide.

---

## Slide 34 — `cash-flow-trends-quarterly-dark` — (33) Cash Flow Trends (Quarterly Dark)

> Cash generation trend — FCF or cash from ops by period; conversion and path to stronger FCF at scale.

---

## Slide 35 — `expansion-retention` — (34) Customer Expansion

> NRR / expansion themes — land-and-expand, upsell motion, customer health.

---

## Slide 36 — `nrr-churn-copy` — Retention Trends (Copy)

> Churn and retention metrics — logo vs MRR if displayed; stabilization and improvement thesis.

---

## Slide 37 — `target-model-dark` — (36) Target Model (Dark)

> Long-range target model — margin, EBITDA, and efficiency targets; how the business compounds through the plan period.

---

## Slide 38 — `closing` — Closing

> **Thank you.** nextiva.com and contact on screen — simple close before optional appendix.

---

## Slide 39 — `closing-copy` — Closing (3-card)

> Three cards: get in touch, headquarters / founder-led story, next steps. Use for a softer Q&A handoff.

---

## Slide 40 — `conversational-commerce` — Conversational Commerce

> Commerce embedded in conversation — reduce friction from intent to transaction; align to platform story.

---

## Slide 41 — `cx-portfolio-arch` — CX Portfolio Architecture

> Architecture view — how layers and data model connect; good for technical or PE diligence audiences.

---

## Slide 42 — `appendix-divider` — Appendix

> **Appendix** — deeper dives follow; optional depending on time.

---

## Slide 43 — `unified-data-model` — Unified Data Model

> Single data model across products — why it matters for AI quality and workflow automation.

---

## Slide 44 — `three-moats` — Three Moats

> Summarize the three moats on screen — tie back to structural advantages and disruption slide.

---

## Slide 45 — `unified-platform-moats` — Unified Platform Moats

> Platform-level moat framing — integration depth, switching costs, data network effects.

---

## Slide 46 — `gtm-engine` — GTM Engine

> Go-to-market engine — channels, velocity, and scale of acquisition and expansion.

---

## Slide 47 — `gtm-engine-copy` — GTM Engine (Investor)

> Investor-oriented GTM view — metrics or motions emphasized for financial buyers.

---

## Slide 48 — `better-outcomes-yaniv-vh` — Better Outcomes (Yaniv-VH)

> Outcomes narrative — customer results and “better outcomes” thesis per slide content.

---

## Slide 49 — `the-shift` — The Shift

> Market / technology shift — use on-screen framing to reinforce urgency and positioning.

---

## Slide 50 — `platform-yaniv-vh` — Platform (Yaniv-VH)

> Alternate platform framing — align bullets with the visual on this variant.

---

## Slide 51 — `agentic-cx-platform` — Agentic CX Platform

> Agentic CX as the product story — orchestration, agents, and platform scope.

---

## Slide 52 — `market-tam-lovable-yaniv-vh` — Market TAM (Yaniv-VH)

> TAM variant for Yaniv-VH track — read numbers and segments from the slide.

---

## Slide 53 — `ai-in-action-v2` — AI In Action V2

> Second “AI in action” treatment — walk examples or diagrams as shown.

---

## Slide 54 — `ai-tailwind` — AI Tailwind

> Tailwind from AI adoption — attach, bookings, and why it strengthens rather than disrupts Nextiva.

---

## Slide 55 — `ai-tailwind-tomas-branch` — AI Tailwind (Tomas)

> Tomas-branch tailwind narrative — match headline and bullets on screen.

---

## Slide 56 — `defensibility-structural` — Defensibility (Structural)

> Structural defensibility — reinforce regulated, embedded, data + AI on owned stack.

---

## Slide 57 — `leadership-copy` — Leadership (Copy)

> Same leadership roster as slide 27 variant if content differs slightly — board, management, advisors.

---

## Slide 58 — `gtm-motion` — GTM Motion

> GTM motion detail — plays, segments, or funnel as displayed.

---

## Slide 59 — `nrr-churn` — (35) Retention Trends

> Retention / churn deep dive — use exact metrics on the non-copy version.

---

## Slide 60 — `ai-disruption-nextiva-copy` — AI Disruption - Nextiva Position (Copy)

> Alternate version of the three-pillar disruption positioning — same story as slide 26; use if you need a repeat or backup in appendix.

---

*End of published-deck speaking notes. Update this file when `slide-order.json` or slide copy changes materially.*
