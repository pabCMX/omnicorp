import type { MarketRegime, SectorId } from "@/types/types";

export const SECTOR_IDS = [
  "XLK",
  "XLF",
  "XLV",
  "XLY",
  "XLC",
  "XLI",
  "XLP",
  "XLE",
  "XLU",
  "XLB",
  "XLRE",
];

export const marketSectorNames: Record<SectorId, string> = {
  XLK: "Information Technology",
  XLF: "Financials",
  XLV: "Health Care",
  XLY: "Consumer Discretionary",
  XLC: "Communication Services",
  XLI: "Industrials",
  XLP: "Consumer Staples",
  XLE: "Energy",
  XLU: "Utilities",
  XLB: "Materials",
  XLRE: "Real Estate",
};

export const MARKET_REGIME_IDS = [
  "fullExpansion",
  "highTransition",
  "steadyState",
  "lowTransition",
  "fullContraction",
];

export const marketRegimes: MarketRegime = {
  fullExpansion: {
    volatilityMult: 0.65,
    driftBias: 1.1,
    fairValueMult: 1.2,
    sentiment: "Great",
    duration: 2000, //~ 32 biz days.
  },
  highTransition: {
    volatilityMult: 0.8,
    driftBias: 1.05,
    fairValueMult: 1.1,
    sentiment: "Good",
    duration: 1000,
  },
  steadyState: {
    volatilityMult: 1.0,
    driftBias: 1.0,
    fairValueMult: 1.0,
    sentiment: "Okay",
    duration: 5000,
  },
  lowTransition: {
    volatilityMult: 1.2,
    driftBias: 0.95,
    fairValueMult: 0.9,
    sentiment: "Not Good",
    duration: 1000,
  },
  fullContraction: {
    volatilityMult: 1.5,
    driftBias: 0.9,
    fairValueMult: 0.8,
    sentiment: "Bad",
    duration: 2000,
  },
};
