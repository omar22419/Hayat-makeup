import apiRequest from "./client.js";

export const offerApi = {
  getFeaturedOffers: () => apiRequest("/offers/featured"),

  getOfferBundles: () => apiRequest("/offers/bundles"),

  getLimitedOffer: () => apiRequest("/offers/limited"),

  getOffers: () => apiRequest("/offers"),
};

export default offerApi;