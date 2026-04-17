import { marketDefaults, runDefaults, settingsDefaults } from "./baseState";
import { careerStartState } from "./careerInfo";
import { prestigeStartState } from "./prestigeInfo";
import { statsStartState } from "./statsState";
import type { SaveData } from "@/types/types";
import { DateTime } from "luxon";

export const SAVE_KEY = "omnicorp-save-v1";
export const SAVE_VERSION = 1;

export const saveStartState: SaveData = 
  {
    version: SAVE_VERSION,
    createdAt: DateTime.now().toMillis(),
    updatedAt: DateTime.now().toMillis(),
    seed: 0,
    run: runDefaults,
    market: marketDefaults,
    career: careerStartState,
    prestige: prestigeStartState,
    settings: settingsDefaults,
    stats: statsStartState,
  };