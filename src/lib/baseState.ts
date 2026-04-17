import type { MarketState, RunState, SettingsState } from "@/types/types";

export const runDefaults: RunState = {
  tick: 0,
  tickSpeed: 1,
  tickSpeedMultiplier: 1,
  tickSpeedTarget: 1,
  tickSpeedChangeRate: 0,
};

export const marketDefaults: MarketState = {
  stocks: [],
};

export const settingsDefaults: SettingsState = {
  showNews: true,
  showMarketMovers: true,
  showPortfolio: true,
  showDetailView: true,
  showDebug: false,
  showHelp: false,
  showCredits: false,
  showTutorial: false,
  tickSpeed: 1,
  autoSaveInterval: 10,
  autoSaveEnabled: true,
};