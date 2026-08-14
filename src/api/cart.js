import apiRequest from "./client.js";

export const cartApi = {
  getCart: () => apiRequest("/cart"),

  syncCart: (items) =>
    apiRequest("/cart", {
      method: "POST",
      body: { items },
    }),

  clearCart: () => apiRequest("/cart", { method: "DELETE" }),
};

export default cartApi;