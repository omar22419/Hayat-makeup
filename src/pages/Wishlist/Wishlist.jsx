import { useCartStore } from "../../store/cartStore.js";
import { useFavoritesStore } from "../../store/favoritesStore.js";
import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getWishlist, wishlistMock } from "../../services/account.js";
import WishListHeader from "../../components/wishlist/WishListHeader.jsx";
import WishlistTitle from "../../components/wishlist/WishlistTitle.jsx";
import WishlistProductGrid from "../../components/wishlist/WishlistProductGrid.jsx";
import WishlistPromo from "../../components/wishlist/WishlistPromo.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

export default function Wishlist() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const addToCart = useCartStore((state) => state.addItem);

  const wishlistFallback = useAsyncData(getWishlist, wishlistMock);

  const products =
    favorites.length > 0 ? favorites : wishlistFallback;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemove = (productId) => {
    removeFavorite(productId);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white pb-20"
    >
      {/* Header */}
      <WishListHeader />

      {/* Title */}
      <WishlistTitle count={products.length} />

      {/* Products + Promo */}
      <main className="mt-2 px-4">
        <WishlistProductGrid
          products={products}
          onAddToCart={handleAddToCart}
          onRemove={handleRemove}
        />

        <WishlistPromo />
      </main>
        <MobileBottomNav activeItem="favorites" />
    </div>
  );
}