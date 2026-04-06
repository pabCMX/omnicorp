// This file is used to define the types for the app.

export type SectorId = "AGRI" | "ENER" | "MFGX" | "MEDI" | "FINC" | "CONS" | "TECH" | "LOGI";

export type StockDef = {
  id: string;
  ticker: string;
  name: string;
  sector: SectorId;
  initialPrice: number;
  sharesOutstanding: number;
  baseDrift: number;
  baseVolatility: number;
  beta: number;
  sectorCorrelation: number;
  fairValueAnchor: number;
  raidDifficulty: number;
};

export type StockState = {
  stockId: string;
  price: number;
  marketCap: number;
  regimeDrift: number;
  currentVolatility: number;
  fairValue: number;
  lastShock: number;
  ownedShares: number;
  controlLevel: "none" | "watch" | "activist" | "blocking" | "majority" | "full";
  priceHistory: number[];
};

export type CareerState = {
  careerTrack: "management" | "tech" | "finance";
  titleId: string;
  queuedCareerTrack: "management" | "tech" | "finance" | null;
  queuedTitleId: string | null;
  collegeLevel: number;
  collegeXp: number;
  collegeActive: boolean;
  xpByTrack: Record<"management" | "tech" | "finance", number>;
  wagePerDay: number;
  financeCommissionRate: number;
};

export type SaveData = {
  version: number;
  createdAt: number;
  updatedAt: number;
  seed: number;
  run: RunState;
  career: CareerState;
  prestige: PrestigeState;
  settings: SettingsState;
  stats: MetaStats;
};

export type RunState = {
  tick: number;
  tickSpeed: number;
  tickSpeedMultiplier: number;
  tickSpeedTarget: number;
  tickSpeedChangeRate: number;
};

export type PrestigeState = {
  prestige: number;
  prestigeLevel: number;
  prestigeLevelProgress: number;
  prestigeLevelProgressTarget: number;
  prestigeUpgrades: Record<string, number>;
};

export type SettingsState = {
  showNews: boolean;
  showMarketMovers: boolean;
  showPortfolio: boolean;
  showDetailView: boolean;
  showDebug: boolean;
  showHelp: boolean;
  showCredits: boolean;
  showTutorial: boolean;
  tickSpeed: number;
  autoSaveInterval: number;
  autoSaveEnabled: boolean;
};

export type MetaStats = {
  totalTicks: number;
  totalDays: number;
  totalPlayHours: number;
  totalPlayMinutes: number;
  totalPlaySeconds: number;
  totalPlayMilliseconds: number;
};

export type NewsItem = {
  newsId: string;
  title: string;
  description: string;
  date: string;
  category: string;
  body: string;
  isRead: boolean;
};
