import type { PrestigeState, PrestigeUpgradeDef } from "@/types/types";

export const prestigeStartState: PrestigeState = {
  prestige: 0,
  prestigeLevel: 0,
  prestigeLevelProgress: 0,
  prestigeLevelProgressTarget: 0,
  prestigeUpgrades: {},
};

export const prestigeUpgrades: Record<string, PrestigeUpgradeDef> = {
  informationUpgrade1 : {
    level: 0,
    cost: 5,
    description: "Information Upgrade 1",
    effect: "Information Upgrade 1 Effect",
  },
  informationUpgrade2: {
    level: 0,
    cost: 10,
    description: "Information Upgrade 2",
    effect: "Information Upgrade 2 Effect",
  },
  informationUpgrade3: {
    level: 0,
    cost: 20,
    description: "Information Upgrade 3",
    effect: "Information Upgrade 3 Effect",
  },
  informationUpgrade4: {
    level: 0,
    cost: 40,
    description: "Information Upgrade 4",
    effect: "Information Upgrade 4 Effect",
  },
  informationUpgrade5: {
    level: 0,
    cost: 80,
    description: "Information Upgrade 5",
    effect: "Information Upgrade 5 Effect",
  },
  executionUpgrade1: {
    level: 0,
    cost: 5,
    description: "Execution Upgrade 1",
    effect: "Execution Upgrade 1 Effect",
  },
  executionUpgrade2: {
    level: 0,
    cost: 5,
    description: "Execution Upgrade 2",
    effect: "Execution Upgrade 2 Effect",
  },
  executionUpgrade3: {
    level: 0,
    cost: 20,
    description: "Execution Upgrade 3",
    effect: "Execution Upgrade 3 Effect",
  },
  executionUpgrade4: {
    level: 0,
    cost: 20,
    description: "Execution Upgrade 4",
    effect: "Execution Upgrade 4 Effect",
  },
  executionUpgrade5: {
    level: 0,
    cost: 40,
    description: "Execution Upgrade 5",
    effect: "Execution Upgrade 5 Effect",
  },
  controlUpgrade1: {
    level: 0,
    cost: 5,
    description: "Control Upgrade 1",
    effect: "Control Upgrade 1 Effect",
  },
  controlUpgrade2: {
    level: 0,
    cost: 5,
    description: "Control Upgrade 2",
    effect: "Control Upgrade 2 Effect",
  },
  controlUpgrade3: {
    level: 0,
    cost: 20,
    description: "Control Upgrade 3",
    effect: "Control Upgrade 3 Effect",
  },
  controlUpgrade4: {
    level: 0,
    cost: 20,
    description: "Control Upgrade 4",
    effect: "Control Upgrade 4 Effect",
  },
  controlUpgrade5: {
    level: 0,
    cost: 40,
    description: "Control Upgrade 5",
    effect: "Control Upgrade 5 Effect",
  },
  marketStructureUpgrade1: {
    level: 0,
    cost: 5,
    description: "Market Structure Upgrade 1",
    effect: "Market Structure Upgrade 1 Effect",
  },
  marketStructureUpgrade2: {
    level: 0,
    cost: 5,
    description: "Market Structure Upgrade 2",
    effect: "Market Structure Upgrade 2 Effect",
  },
  marketStructureUpgrade3: {
    level: 0,
    cost: 20,
    description: "Market Structure Upgrade 3",
    effect: "Market Structure Upgrade 3 Effect",
  },
  marketStructureUpgrade4: {
    level: 0,
    cost: 40,
    description: "Market Structure Upgrade 4",
    effect: "Market Structure Upgrade 4 Effect",
  },
  marketStructureUpgrade5: {
    level: 0,
    cost: 80,
    description: "Market Structure Upgrade 5",
    effect: "Market Structure Upgrade 5 Effect",
  },
};