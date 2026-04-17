// This file is used to define the types for the app.
export type SectorId =
  | "XLK"
  | "XLF"
  | "XLV"
  | "XLY"
  | "XLC"
  | "XLI"
  | "XLP"
  | "XLE"
  | "XLU"
  | "XLB"
  | "XLRE";

export type StrategyProfile = "growth" | "balanced" | "blue-chip";

export type Stock = {
  stockId: string;
  ticker: string;
  name: string;
  sector: SectorId;
  initialPrice: number;
  currentPrice: number;
  initialSharesOutstanding: number;
  currentSharesOutstanding: number;
  baseRegimeDrift: number;
  currentRegimeDrift: number;
  baseVolatility: number;
  currentVolatility: number;
  baseBeta: number;
  currentBeta: number;
  lastShock: number;
  initialStrategyProfile: StrategyProfile;
  currentStrategyProfile: StrategyProfile;
  sectorCorrelation: number;
  fairValueAnchor: number;
  raidDifficulty: number;
  boardMeetingDay: number;
  ownedShares: number;
  controlLevel: "none" | "watch" | "activist" | "blocking" | "majority" | "full";
  extractionRate: number;
  priceHistory: number[];
};

// The stock states are the main source of truth for all stock statuses.
// This means that controlLevel is the ultimate control setting, which is upgraded automatically.
// Portfolio status is based on ownedShares being greater than 0.


export type MarketRegimeDef = {
  volatilityMult: number;
  driftBias: number;
  fairValueMult: number;
  sentiment: string;
  duration: number;
};

export type MarketRegimeId =
  | "fullExpansion"
  | "highTransition"
  | "steadyState"
  | "lowTransition"
  | "fullContraction";
export type MarketRegime = Record<MarketRegimeId, MarketRegimeDef>;

export type CareerState = {
  careerTrack: CareerTrackId;
  titleId: string;
  queuedCareerTrack: CareerTrackId | null;
  queuedTitleId: string | null;
  collegeLevel: number;
  collegeXp: number;
  collegeActive: boolean;
  xpByTrack: Record<CareerTrackId, number>;
  wagePerDay: number;
  financeCommissionRate: number;
};

export type CareerTrackId = "service" | "tech" | "finance";

export type ServiceJobId = "burgerFlipper" | "supervisor" | "storeManager" | "districtManager" | "regionalExecutive" | "vp" | "ceo";
export type TechJobId = "unpaidIntern" | "juniorITDev" | "engineer" | "seniorEngineer" | "staffPrincipal" | "vpEngineering" | "ceo";
export type FinanceJobId = "unpaidIntern" | "analyst" | "associate" | "manager" | "director" | "vp" | "cfo" | "ceo";

export type JobDef = {
  careerTrack: CareerTrackId;
  jobId: ServiceJobId | TechJobId | FinanceJobId;
  title: string;
  collegeLevelRequirement: number;
  xpLevelRequirement: number;
  xpLevelProgress: number;
  wageLevelMult: number;
  wageLevelBase: number;
  financeCommissionRate: number;
}

export type SaveData = {
  version: number;
  createdAt: number;
  updatedAt: number;
  seed: number;
  run: RunState;
  market: MarketState;
  career: CareerState;
  prestige: PrestigeState;
  settings: SettingsState;
  stats: MetaStats;
};

export type MarketState = {
  stocks: Stock[]; // We just store every stock's state in the save file.
};

export type RunState = {
  tick: number;
  tickSpeed: number;
  tickSpeedMultiplier: number;
  tickSpeedTarget: number;
  tickSpeedChangeRate: number;
};

export type PrestigeState = {
  prestige: number; // The prestige points currently owned.
  prestigeLevel: number; // The number of prestige points/levels earned so far.
  prestigeLevelProgress: number; // The progress towards the next prestige level.
  prestigeLevelProgressTarget: number; // The target progress towards the next prestige level.
  prestigeUpgrades: Record<string, PrestigeUpgradeDef>; // The state of each prestige upgrade, even if not purchased.
};

export type PrestigeUpgradeDef = {
  level: number;
  cost: number;
  description: string;
  effect: string;
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
