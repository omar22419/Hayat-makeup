import { productApi } from "../api/products.js";
import { categoryApi } from "../api/categories.js";
import { offerApi } from "../api/offers.js";
import { packageApi } from "../api/packages.js";
import { contentApi } from "../api/content.js";

import { allProducts, homeBestSellers, relatedProducts } from "../data/products.js";
import { bestSellerProducts, bestSellerDisplayOrder } from "../data/bestSellers.js";
import { newArrivalProducts } from "../data/newArrivals.js";
import { homeCategories, shopCategories } from "../data/categories.js";
import { featuredOffers, offerBundles, limitedOfferTime } from "../data/offers.js";
import { packages } from "../data/packages.js";
import { colorSections, colorFilters } from "../data/shopByColor.js";
import { homeLooks, looksGrid } from "../data/looks.js";

import { withFallback } from "./mock.js";

/**
 * Sync mock references, exported so pages can pass them to `useAsyncData`
 * as the instant fallback value (keeps the first paint identical to the old
 * direct-import behavior).
 */
export const productsMock = allProducts;
export const homeBestSellersMock = homeBestSellers;
export const relatedProductsMock = relatedProducts;
export const bestSellerProductsMock = bestSellerProducts;
export const bestSellerDisplayOrderMock = bestSellerDisplayOrder;
export const newArrivalProductsMock = newArrivalProducts;
export const homeCategoriesMock = homeCategories;
export const categoriesMock = shopCategories;
export const featuredOffersMock = featuredOffers;
export const offerBundlesMock = offerBundles;
export const limitedOfferTimeMock = limitedOfferTime;
export const packagesMock = packages;
export const colorSectionsMock = colorSections;
export const colorFiltersMock = colorFilters;
export const looksGridMock = looksGrid;
export const homeLooksMock = homeLooks;

function findProductById(id) {
  const numericId = Number(id);
  return (
    allProducts.find((product) => product.id === numericId) || allProducts[0]
  );
}

function searchMockProducts({ q } = {}) {
  const query = String(q ?? "").trim().toLowerCase();

  if (!query) return allProducts;

  return allProducts.filter((product) => {
    const haystack = [
      product.name,
      product.description,
      product.category,
      product.variants?.map((variant) =>
        typeof variant === "string" ? variant : variant?.name
      ),
    ]
      .flat()
      .filter(Boolean)
      .join(" ");

    return haystack.toLowerCase().includes(query);
  });
}

function filterMockProducts({ category, minPrice, maxPrice } = {}) {
  return allProducts.filter((product) => {
    const price = Number(product.price);

    if (category && product.category !== category) return false;
    if (minPrice != null && price < Number(minPrice)) return false;
    if (maxPrice != null && price > Number(maxPrice)) return false;

    return true;
  });
}

export const getProducts = (params = {}) =>
  withFallback(() => productApi.getProducts(params), allProducts);

export const getProductById = (id) =>
  withFallback(() => productApi.getProductById(id), findProductById(id));

export const getRelatedProducts = (id) =>
  withFallback(() => productApi.getRelatedProducts(id), relatedProducts);

export const searchProducts = (params = {}) =>
  withFallback(
    () => productApi.searchProducts(params),
    searchMockProducts(params)
  );

export const filterProducts = (params = {}) =>
  withFallback(() => productApi.getProducts(params), filterMockProducts(params));

export const getHomeBestSellers = () =>
  withFallback(() => productApi.getBestSellers(), homeBestSellers);

export const getBestSellers = () =>
  withFallback(() => productApi.getBestSellers(), bestSellerProducts);

export const getBestSellerDisplayOrder = () =>
  withFallback(() => productApi.getBestSellers(), bestSellerDisplayOrder);

export const getNewArrivals = () =>
  withFallback(() => productApi.getNewArrivals(), newArrivalProducts);

export const getHomeCategories = () =>
  withFallback(() => categoryApi.getCategories(), homeCategories);

export const getCategories = () =>
  withFallback(() => categoryApi.getCategories(), shopCategories);

export const getFeaturedOffers = () =>
  withFallback(() => offerApi.getFeaturedOffers(), featuredOffers);

export const getOfferBundles = () =>
  withFallback(() => offerApi.getOfferBundles(), offerBundles);

export const getLimitedOfferTime = () =>
  withFallback(() => offerApi.getLimitedOffer(), limitedOfferTime);

export const getPackages = () =>
  withFallback(() => packageApi.getPackages(), packages);

export const getColorSections = () =>
  withFallback(() => contentApi.getShopByColor(), colorSections);

export const getColorFilters = () =>
  withFallback(() => contentApi.getShopByColor(), colorFilters);

export const getLooks = () => withFallback(() => contentApi.getLooks(), looksGrid);

export const getHomeLooks = () =>
  withFallback(() => contentApi.getLooks(), homeLooks);