import apiRequest from "./client.js";

export const notificationApi = {
  getNotifications: () => apiRequest("/notifications"),

  markAsRead: (id) =>
    apiRequest(`/notifications/${id}/read`, { method: "PATCH" }),

  markAllAsRead: () =>
    apiRequest("/notifications/read-all", { method: "PATCH" }),
};

export default notificationApi;