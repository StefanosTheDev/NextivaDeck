# Rebuild TOMAS Keynote Slides

Build new slide components from Tomas's Keynote deck into the NextivaDeck design system.
Use when rebuilding slides from Tomas's Keynote into the investor deck,
or when creating any new slide component from Keynote source material.

## Trigger

- User mentions "Tomas slides", "Tomas Keynote", "Keynote slides", "pitch deck slides"
- User asks to build a slide from Keynote content
- User references slides 11-15 from the Nextiva Pitch Deck

## Important: Category Tag

All slides built from Tomas's Keynote **MUST** use the category `"TOMAS / SENTHIL PPT SLIDES 041126"` in `slide-order.json`.

---

## 1. Source File & Extraction Method

### 1.1 Source Files

| Item | Path |
|------|------|
| Keynote file | `Tomas-Slide-PDF/Nextiva Pitch Deck.key` |
| PDF export | `Tomas-Slide-PDF/Nextiva Pitch Deck.key/Nextiva Pitch Deck (1).pdf` |
| Asset images | `Tomas-Slide-PDF/Nextiva Pitch Deck.key/Data/` (488 files: 273 PNG, 199 JPEG, 9 PDF) |

### 1.2 Extraction Method

Keynote `.key` files use protobuf `.iwa` format inside a ZIP — **not directly parseable as text**.

**Use `pdftotext` on the PDF export:**
```bash
pdftotext -layout "Tomas-Slide-PDF/Nextiva Pitch Deck.key/Nextiva Pitch Deck (1).pdf" -
```

This outputs text with form-feed (`\f`) page breaks. Split on `\f` to get per-slide content.
The PDF has 36 content pages = 36 slides.

### 1.3 Keynote Data Folder

The `Data/` folder contains all embedded images (stock photos, logos, screenshots) used in the Keynote. These are named with numeric IDs (e.g., `AdobeStock_219258786-16087.jpeg`). Images used in slides are **rebuilt with CSS/SVG** in our design system — we do not embed raster images from the Keynote.

---

## 2. Design System Reference

Identical to the Senthil SKILL.md design system (Sections 1-9). Key values:

### 2.1 Project Paths

| Item | Path |
|------|------|
| Slide components | `src/components/slides/*.tsx` |
| Slide registry | `src/components/slideRegistry.ts` |
| Shared footer | `src/components/SlideFooter.tsx` |
| Global styles | `src/app/globals.css` |
| Slide order + categories | `slide-order.json` (project root) |

### 2.2 Slide Background (Dark)

```
background: radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)
```

### 2.3 Color Tokens

| Token | Value |
|-------|-------|
| White text | `#FFFFFF` |
| Subdued text | `rgba(255,255,255,0.7)` |
| Muted text | `rgba(255,255,255,0.5)` |
| Accent blue | `#2860B2` |
| Accent light blue | `#7EB3E8` |
| Eyebrow gray | `#CCC7C3` |
| Card bg | `rgba(255,255,255,0.04)` |
| Card border | `rgba(255,255,255,0.1)` |

### 2.4 Typography

| Class | Font | Usage |
|-------|------|-------|
| `.font-heading` | Georgia, serif | Slide titles, big numbers |
| (default) | Space Grotesk, sans-serif | Body text, bullets |

---

## 3. Registration

### 3.1 ID Convention

Format: `tomas-{descriptive-slug}-041126`

### 3.2 File Convention

`Tomas{DescriptiveName}Slide.tsx`

### 3.3 Steps

1. Add import to `slideRegistry.ts`
2. Add entry to `SLIDE_COMPONENTS` with `isNew: true`
3. Add ID to `"order"` array in `slide-order.json`
4. Add category mapping: `"tomas-...-041126": "TOMAS / SENTHIL PPT SLIDES 041126"`
5. Ensure `"TOMAS / SENTHIL PPT SLIDES 041126"` is in `"categoryNames"` array

---

## 4. Checklist — Before Marking a Slide Complete

- [ ] File is `"use client";` at top
- [ ] Uses `framer-motion` for all entry animations
- [ ] Outer div has `className="slide"` with inline background gradient
- [ ] Uses `SlideFooter` with correct variant
- [ ] Component exported as default
- [ ] Props interface is `{ slideNumber?: number }` with default
- [ ] Horizontal padding is `100px`
- [ ] Headings use `className="font-heading"` (Georgia serif)
- [ ] Body text uses Space Grotesk (default, no class needed)
- [ ] Colors use exact inline values (not CSS variables)
- [ ] Cards use `rgba(255,255,255,0.04)` bg + `rgba(255,255,255,0.1)` border
- [ ] Added import to `slideRegistry.ts`
- [ ] Added entry to `SLIDE_COMPONENTS` with `isNew: true`
- [ ] ID follows `tomas-{slug}-041126` convention
- [ ] File follows `Tomas{Name}Slide.tsx` convention
- [ ] Category set to `"TOMAS / SENTHIL PPT SLIDES 041126"` in `slide-order.json`

---

## 5. Source Content Reference — Tomas Keynote (Slides 11-15)

### Slide 11 — Democratized Platform for All
- **Title:** "Nextiva provides a democratized platform for all"
- **Layout:** 2x3 grid of 6 capability pillars
- **Pillars:** (1) Native CX-first approach for all, (2) An open, future-ready CXPaaS platform, (3) Open data architectures to build from, (4) Human + AI in tandem, (5) End-to-end customer journey orchestration, (6) Trustworthy, secure, and compliant
- **File:** `TomasDemocratizedPlatformSlide.tsx`
- **ID:** `tomas-democratized-platform-041126`

### Slide 12 — CX-First System of Action
- **Title:** "Delivering an integrated solution that fits the mid market needs."
- **Layout:** 4-column flow: Channels > Data/AI > Insights > Outcomes
- **Top headers:** (1) "BE WHERE YOUR CUSTOMERS ARE in all channels", (2) "LEARN AND UNDERSTAND CUSTOMER INTENT from unstructured and structured data", (3) "UNIFY, REAL TIME AND ACTION CUSTOMER INSIGHTS to make customers and teams happier", (4) "Business outcomes LTV, ROI, NPS, CSAT"
- **Col 1 channels:** Social, Messaging, Reviews and Reputation, Comments, Chat Bot
- **Col 2:** SINGLE DATA SOURCE + AI hub
- **Col 3 personas:** Customers, Agents, Supervisors, Management, Executives
- **Col 4 outcomes:** Unified Conversations in a single Interface, Dynamic intelligent insights, Personalized automated customer actions at scale, Real-time recommendations
- **Bottom bar:** GOVERNANCE · AUTOMATION · WORKFLOW
- **File:** `TomasCXFirstSystemSlide.tsx`
- **ID:** `tomas-cx-first-system-041126`

### Slide 13 — Human + AI in harmony
- **Title:** "Human + AI in harmony"
- **Layout:** 3 equal cards + bottom balance bar
- **Card 1:** "Autonomous" — AI Agents trained on business + customer data
- **Card 2:** "Autopilot" — AI Agents with Human Oversight to escalate
- **Card 3:** "Agent Assist" — Humans with AI Assistance & Oversight
- **Bottom bar:** "Balance of (Maturity, Business Risk/Reward, Preferences)"
- **File:** `TomasHumanAIHarmonySlide.tsx`
- **ID:** `tomas-human-ai-harmony-041126`

### Slide 14 — Trustworthy
- **Title:** "Trustworthy"
- **Layout:** Left title + right stacked metric cards
- **Metrics:** Secure (HITRUST, PCI), Compliant (GDPR, TCPA, DNC, HIPAA, HITRUST, PCI), ZERO maintenance windows, 99.9999% uptime, <2 minutes disaster recovery
- **File:** `TomasTrustworthySlide.tsx`
- **ID:** `tomas-trustworthy-041126`

### Slide 15 — Nextiva Global Footprint
- **Title:** "Nextiva Global Footprint"
- **Subtitle:** "Cloud In Region – Edge – On Prem"
- **Layout:** World map with positioned labels + right location list
- **Nodes:** Montreal (node cloud), Ashburn (node cloud), São Paulo (edge server), London (node cloud), Madrid (node cloud), Tokyo (edge server)
- **Locations:** Montreal CA, The Dalles OR, Ashburn VA, Council Bluffs IA, Moncks Corner SC, Tokyo JP, London UK, Madrid ES, São Paulo BR
- **File:** `TomasGlobalFootprintSlide.tsx`
- **ID:** `tomas-global-footprint-041126`
