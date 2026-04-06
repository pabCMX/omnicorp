// This file defines the running game state store.
import { create } from "zustand";
import type { RunState } from "@/types/types";

interface RunStore {
  run: RunState;
  setRun: (run: RunState) => void;
}

export const useRunStore = create<RunStore>((set) => ({
  run: {
    tick: 0,
    tickSpeed: 1,
    tickSpeedMultiplier: 1,
    tickSpeedTarget: 1,
    tickSpeedChangeRate: 0,
  },
  setRun: (run: RunState) => set({ run }),
}));
