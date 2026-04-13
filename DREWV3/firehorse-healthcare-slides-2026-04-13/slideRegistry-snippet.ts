// ============================================================================
// slideRegistry.ts — snippets to add to Stefanos's fork
// ============================================================================
//
// Add these 2 imports at the top of src/components/slideRegistry.ts:

import HealthcareVerticalGlanceSlide from "./slides/HealthcareVerticalGlanceSlide";
import HealthcareVerticalStrategySlide from "./slides/HealthcareVerticalStrategySlide";

// ============================================================================
// Then add these 2 entries to the slideRegistry object. The order below
// matches the desired deck order — they should sit together as a block
// in the Healthcare Vertical section.
// ============================================================================

"healthcare-vertical-glance": {
  id: "healthcare-vertical-glance",
  label: "Healthcare Vertical: At a Glance",
  component: HealthcareVerticalGlanceSlide,
  theme: "dark",
  isNew: true,
},
"healthcare-vertical-strategy": {
  id: "healthcare-vertical-strategy",
  label: "Healthcare Vertical: Strategy & Capabilities",
  component: HealthcareVerticalStrategySlide,
  theme: "dark",
  isNew: true,
},
