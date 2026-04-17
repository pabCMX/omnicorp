// This file defines the running game state store.
import { create } from "zustand";
import type { RunState } from "@/types/types";
import { runDefaults } from "@/lib/baseState";

interface RunStore {
  run: RunState;
  setRun: (run: RunState) => void;
}

export const useRunStore = create<RunStore>((set) => ({
  run: runDefaults,
  setRun: (run: RunState) => set({ run }),
}));
