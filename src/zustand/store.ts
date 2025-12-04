import { create } from "zustand";

export interface Habit {
  name: string;
  frequency: "Daily" | "Weekly";
  completedDate: string[];
  createdAt: string;
}

interface IHabitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "Daily" | "Weekly") => void;
}

export const useHabit = create<IHabitState>()((set) => {
  return {
    habits: [],
    addHabit: (name, frequency) =>
      set((state) => {
        return {
          habits: [
            ...state.habits,
            {
              id: Date.now().toString(),
              name,
              frequency,
              completedDate: [],
              createdAt: new Date().toISOString(),
            },
          ],
        };
      }),
  };
});
