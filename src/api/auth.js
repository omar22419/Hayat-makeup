import apiRequest from "./client.js";

export const authApi = {
  login: (credentials) =>
    apiRequest("/auth/login", {
      method: "POST",
      body: credentials,
    }),

  register: (payload) =>
    apiRequest("/auth/register", {
      method: "POST",
      body: payload,
    }),

  getProfile: () => apiRequest("/auth/me"),

  logout: () => apiRequest("/auth/logout", { method: "POST" }),
};

export default authApi;