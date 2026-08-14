import { cartApi } from "../api/cart.js";
import { wishlistApi } from "../api/wishlist.js";
import { authApi } from "../api/auth.js";

import { defaultCartItems } from "../data/cart.js";
import { wishlistProducts } from "../data/wishlist.js";
import { currentUser } from "../data/account.js";

import { withFallback } from "./mock.js";

export const cartMock = defaultCartItems;
export const wishlistMock = wishlistProducts;
export const userMock = currentUser;

export const getCart = () =>
  withFallback(() => cartApi.getCart(), defaultCartItems);

export const syncCart = (items) =>
  withFallback(() => cartApi.syncCart(items), items);

export const getWishlist = () =>
  withFallback(() => wishlistApi.getWishlist(), wishlistProducts);

export const addToWishlist = (product) =>
  withFallback(() => wishlistApi.addToWishlist(product), product);

export const removeFromWishlist = (productId) =>
  withFallback(() => wishlistApi.removeFromWishlist(productId), productId);

export const getProfile = () =>
  withFallback(() => authApi.getProfile(), currentUser);

export const logout = () =>
  withFallback(() => authApi.logout(), { ok: true });

export const accountService = {
  getCart,
  syncCart,
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  getProfile,
  logout,
};

export default accountService;