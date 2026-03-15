// Central financial data file — single source of truth for all financial metrics
// All dollar values in $M unless otherwise noted
// Source: 3-Statement Model with KPIs (FY25 Actual, FY26–FY30 Projected)

export const FISCAL_YEARS = ["FY25", "FY26", "FY27", "FY28", "FY29", "FY30"] as const;
export type FiscalYear = (typeof FISCAL_YEARS)[number];

export const PNL = {
  revenue:         { FY25: 349, FY26: 353, FY27: 374, FY28: 402, FY29: 432, FY30: 465 },
  grossMargin:     { FY25: 234, FY26: 248, FY27: 273, FY28: 300, FY29: 329, FY30: 359 },
  grossMarginPct:  { FY25: 67, FY26: 70, FY27: 73, FY28: 75, FY29: 76, FY30: 77 },
  adjEBITDA:       { FY25: 0, FY26: 44, FY27: 99, FY28: 124, FY29: 153, FY30: 187 },
  ebitdaMarginPct: { FY25: 0, FY26: 13, FY27: 28, FY28: 31, FY29: 36, FY30: 40 },
  fcf:             { FY25: -4, FY26: 13, FY27: 74, FY28: 100, FY29: 130, FY30: 162 },
  fcfMarginPct:    { FY25: -1, FY26: 4, FY27: 20, FY28: 25, FY29: 30, FY30: 35 },
  revGrowthPct:    { FY26: 1, FY27: 6, FY28: 7, FY29: 8, FY30: 8 },
  revCAGR_26_30:   6,
} as const;

export const ARR = {
  FY25: 368, FY26: 382, FY27: 412, FY28: 442, FY29: 476, FY30: 513,
} as const;

export const BALANCE_SHEET = {
  cash: 27,
  seniorNotes: 120,
  otherDebt: 0,
  totalDebt: 120,
  netDebt: 93,
  ltmAdjEBITDA: 15,
  grossLeverage: 2.5,
  netLeverage: 1.6,
} as const;

export const RETENTION = {
  mrrChurn:    { FY25: 1.6, FY26: 1.6, FY27: 1.5, FY28: 1.5, FY29: 1.5, FY30: 1.5 },
  logoChurn:   { FY25: 5.6, FY26: 5.2, FY27: 5.1, FY28: 5.1, FY29: 5.1, FY30: 5.1 },
  nrr:         { FY25: 91, FY26: 93, FY27: 94, FY28: 94, FY29: 94, FY30: 94 },
  totalAccounts: { FY25: 91857, FY26: 92327, FY27: 91703, FY28: 91896, FY29: 92768, FY30: 94220 },
  totalUsers:    { FY25: 927810, FY26: 911976, FY27: 913932, FY28: 916585, FY29: 930794, FY30: 956265 },
  pctIn12moContracts: 86,
} as const;

export const OPEX_PCT = {
  sm:    { FY25: 32, FY26: 27, FY27: 23, FY28: 21, FY29: 19, FY30: 16 },
  rd:    { FY25: 13, FY26: 12, FY27: 9, FY28: 9, FY29: 9, FY30: 9 },
  ga:    { FY25: 16, FY26: 14, FY27: 10, FY28: 9, FY29: 8, FY30: 7 },
  total: { FY25: 72, FY26: 63, FY27: 52, FY28: 48, FY29: 45, FY30: 41 },
} as const;

export const HEADCOUNT = {
  total:      { FY25: 1356, FY26: 1001, FY27: 967, FY28: 925, FY29: 875, FY30: 829 },
  revPerHead: { FY25: 255, FY26: 354, FY27: 394, FY28: 442, FY29: 502, FY30: 570 },
} as const;

export const RD_REV_PER_HEAD = {
  FY25: 230, FY26: 317, FY27: 385, FY28: 466, FY29: 566, FY30: 688,
} as const;

export const RD_HEADCOUNT = {
  rd:  { FY25: 376, FY26: 280, FY27: 248, FY28: 219, FY29: 194, FY30: 172 },
  dev: { FY25: 282, FY26: 210, FY27: 186, FY28: 164, FY29: 146, FY30: 129 },
} as const;

export const DEV_REV_PER_HEAD = {
  FY25: 307, FY26: 422, FY27: 513, FY28: 621, FY29: 755, FY30: 918,
} as const;

export const LTV_CAC = {
  FY26: 2.2, FY27: 3.0, FY28: 3.2, FY29: 3.3, FY30: 3.5,
} as const;

export const ARPA_MONTHLY = {
  FY25: 317, FY26: 318, FY27: 339, FY28: 362, FY29: 386, FY30: 409,
} as const;

export const ARPU_MONTHLY = {
  FY25: 31, FY26: 32, FY27: 34, FY28: 36, FY29: 38, FY30: 40,
} as const;

export const NEW_ARPA = {
  FY25: 207, FY26: 162, FY27: 173, FY28: 181, FY29: 187, FY30: 192,
} as const;

export const NEW_ARPU = {
  FY25: 34, FY26: 29, FY27: 30, FY28: 29, FY29: 29, FY30: 28,
} as const;

export const SALES_PRODUCTIVITY = {
  // Quarterly productivity per rep ($K)
  FY25_Q4: 13.0, FY26_Q4: 12.4, FY27_Q4: 12.9, FY28_Q4: 13.5, FY29_Q4: 14.3, FY30_Q4: 15.1,
} as const;

export const RULE_OF_40 = {
  FY25: 0, FY26: 5, FY27: 26, FY28: 32, FY29: 37, FY30: 42,
} as const;

export const ARR_BRIDGE = {
  startingARR: 368,
  newBookings: 2.8,
  expansion: 1.5,
  churnImpact: -4.7,
  endingARR: 382,
} as const;

export const BOOKINGS = {
  total: { FY25: 4.8, FY26: 4.4, FY27: 4.8, FY28: 5.2, FY29: 5.6, FY30: 6.0 },
} as const;

// Narrative constants — milestones and figures not directly from the model
export const MILESTONES = {
  ch1Revenue: "$0 → $250M",
  ch2Revenue: "$250M → $350M",
  ch3Revenue: "$350M+",
  goldmanInvestment: "$200M",
  topCustomerPctARR: "0.6%",
  pctSeatBased: 96,
  bootstrappedTo: "$250M",
} as const;

// TAM data — market research, not from financial model, co-located for consistency
export const AI_BOOKINGS = {
  // Total AI Bookings in $K (New AI + Expansion AI)
  total: { FY26: 962, FY27: 1441, FY28: 1634, FY29: 1781, FY30: 1899 },
  pctOfTotal: { FY26: 22, FY27: 30, FY28: 31, FY29: 32, FY30: 32 },
} as const;

// TAM data — market research, not from financial model, co-located for consistency
export const TAM = {
  current: 176,
  projected: 262,
  projectedYear: "CY29",
  cagr: 14,
} as const;

export const EBITDA_FLOW_THROUGH_T6M = {
  FY25: -0.54, FY26: 7.56, FY27: 0.99, FY28: 1.01, FY29: 1.05, FY30: 1.03,
} as const;

export const UNLEVERED_FCF = {
  FY25: -4, FY26: 15, FY27: 83, FY28: 108, FY29: 138, FY30: 170,
} as const;

export const EBITDA_UFCF_CONVERSION = {
  FY25: null, FY26: 34, FY27: 84, FY28: 87, FY29: 90, FY30: 91,
} as const;

export const CASH_EQUIVALENTS = {
  FY25: 29, FY26: 42, FY27: 121, FY28: 223, FY29: 353, FY30: 517,
} as const;

export const REVENUE_VISIBILITY = {
  contracted: 246,
  monthlyRenewals: 34,
  expansionBookings: 23,
  contractNetRenewals: 8,
  newBookings: 43,
  buildUp: 354,
  subscriptionTarget: 367,
  gap: 13,
  gapPct: 3,
} as const;
