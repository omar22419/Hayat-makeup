import apiRequest from "./client.js";

export const packageApi = {
  getPackages: () => apiRequest("/packages"),

  getPackageById: (id) => apiRequest(`/packages/${id}`),
};

export default packageApi;