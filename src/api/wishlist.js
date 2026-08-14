import apiRequest from "./client.js";

export const wishlistApi = {
  getWishlist: () => apiRequest("/wishlist"),

  addToWishlist: (product) =>
    apiRequest("/wishlist", {
      method: "POST",
      body: { product },
    }),

  removeFromWishlist: (productId) =>
    apiRequest(`/wishlist/${productId}`, { method: "DELETE" }),

  clearWishlist: () => apiRequest("/wishlist", { method: "DELETE" }),
};

export default wishlistApi;