import apiRequest from "./client.js";

export const reviewApi = {
  getReviews: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/reviews${query ? `?${query}` : ""}`);
  },

  addReview: (payload) =>
    apiRequest("/reviews", {
      method: "POST",
      body: payload,
    }),
};

export default reviewApi;