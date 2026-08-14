import { create } from "zustand";

export const useUIStore = create((set) => ({
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open }),
}));