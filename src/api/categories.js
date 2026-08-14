import apiRequest from "./client.js";

export const categoryApi = {
  getCategories: () => apiRequest("/categories"),

  getCategoryById: (id) => apiRequest(`/categories/${id}`),

  getCategoryProducts: (id) => apiRequest(`/categories/${id}/products`),
};

export default categoryApi;