// This file is used to define the UI store.

import { create } from "zustand";
import type { SettingsState } from "@/types/types";
import { useRunStore } from "@/store/runStore";

interface UiStore {
  settings: SettingsState;
  setSettings: (settings: SettingsState) => void;
}

export const useUiStore = create<UiStore>((set) => ({
  settings: {
    showNews: true,
    showMarketMovers: true,
    showPortfolio: true,
    showDetailView: true,
    showDebug: false,
    showHelp: false,
    showCredits: false,
    showTutorial: false,
    tickSpeed: useRunStore.getState().run.tickSpeed,
    autoSaveInterval: 10,
    autoSaveEnabled: true,
  },
  setSettings: (settings: SettingsState) => set({ settings }),
}));
