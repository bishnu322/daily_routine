import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "Daily" | "Weekly";
  completedDate: string[];
  createdAt: string;
}

interface IHabitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "Daily" | "Weekly") => void;
  removeHabit: (id: string) => void;
  toggleHabit?: (id: string, date: string) => void;
}

export const useHabit = create<IHabitState>()((set) => {
  return {
    //! initial state of habit task
    habits: [],

    //! to add habit task
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

    //! to remove habit task
    removeHabit: (id) =>
      set((state) => {
        return {
          habits: state.habits.filter((habit) => habit.id !== id),
        };
      }),

    //! check for habit task completion
    toggleHabit: (id, date) =>
      set((state) => {
        return {
          habits: state.habits.map((habit) =>
            habit.id === id
              ? {
                  ...habit,
                  completedDate: habit.completedDate.includes(date)
                    ? habit.completedDate.filter((d) => d !== date)
                    : [...habit.completedDate, date],
                }
              : habit
          ),
        };
      }),
  };
});
