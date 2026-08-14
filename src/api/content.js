import apiRequest from "./client.js";

/**
 * Content-domain API: skin quiz, looks, magazine, guide.
 * All GET-only content used to drive informational pages.
 */
export const contentApi = {
  getSkinTypes: () => apiRequest("/skin-types"),

  getSkinQuizData: () => apiRequest("/skin-quiz"),

  getLooks: () => apiRequest("/looks"),

  getMagazineTabs: () => apiRequest("/magazine/tabs"),

  getFeaturedArticle: () => apiRequest("/magazine/featured"),

  getLatestArticles: () => apiRequest("/magazine/latest"),

  getGuideTopics: () => apiRequest("/guide/topics"),

  getMostReadArticles: () => apiRequest("/guide/most-read"),

  getShopByColor: () => apiRequest("/shop-by-color"),
};

export default contentApi;