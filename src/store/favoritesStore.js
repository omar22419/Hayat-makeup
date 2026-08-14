import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: [],

  toggleFavorite: (product) =>
    set((state) => {
      const exists = state.favorites.some((item) => item.id === product.id);

      if (exists) {
        return {
          favorites: state.favorites.filter((item) => item.id !== product.id),
        };
      }

      return {
        favorites: [...state.favorites, product],
      };
    }),

  removeFavorite: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== productId),
    })),

  clearFavorites: () => set({ favorites: [] }),
}));
