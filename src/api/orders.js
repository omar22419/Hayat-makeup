import apiRequest from "./client.js";

export const orderApi = {
  createOrder: (payload) =>
    apiRequest("/orders", {
      method: "POST",
      body: payload,
    }),

  getOrderById: (id) => apiRequest(`/orders/${id}`),

  getOrders: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/orders${query ? `?${query}` : ""}`);
  },

  getTracking: (orderNumber) =>
    apiRequest(`/orders/tracking/${encodeURIComponent(orderNumber)}`),
};

export default orderApi;