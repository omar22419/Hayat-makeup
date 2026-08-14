import apiRequest from "./client.js";

export const productApi = {
  getProducts: (params = {}) => {
    const query = new URLSearchParams(
      Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
    ).toString();

    return apiRequest(`/products${query ? `?${query}` : ""}`);
  },

  getProductById: (id) => apiRequest(`/products/${id}`),

  getRelatedProducts: (id) => apiRequest(`/products/${id}/related`),

  searchProducts: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/products/search${query ? `?${query}` : ""}`);
  },

  getBestSellers: () => apiRequest("/products/best-sellers"),

  getNewArrivals: () => apiRequest("/products/new-arrivals"),
};

export default productApi;