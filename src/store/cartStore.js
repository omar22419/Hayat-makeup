import { create } from "zustand";
import { defaultCartItems } from "../data/cart.js";

export const useCartStore = create((set, get) => ({
  items: defaultCartItems,

  addItem: (product) =>
    set((state) => {
      const exists = state.items.some((item) => item.id === product.id);
      const quantityToAdd = Math.max(1, Number(product.quantity) || 1);

      if (exists) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantityToAdd,
                }
              : item
          ),
        };
      }

      const { name, description, color, colorCode, price, image } = product;

      return {
        items: [
          ...state.items,
          {
            id: product.id,
            name: name || product.name || "منتج",
            description: description || "",
            color: color || "",
            colorCode: colorCode || "#D4146A",
            price: Number(price) || 0,
            quantity: quantityToAdd,
            image: image || "",
          },
        ],
      };
    }),

  addToCart: (product) => get().addItem(product),

  increaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  getItemsCount: () => {
    return get().items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  },

  totalItems: () => {
    return get().items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  },

  getSubtotal: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  subtotal: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  clearCart: () => set({ items: [] }),
}));