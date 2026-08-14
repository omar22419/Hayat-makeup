import { Heart, ShoppingBag, Star } from "lucide-react";
import { useCartStore } from "../../store/cartStore.js";
import { useFavoritesStore } from "../../store/favoritesStore.js";

export default function NewArrivalProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addItem);

  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (typeof addToCart === "function") {
      addToCart(product);
    }
  };

  const handleFavorite = (event) => {
    event.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <article
      dir="rtl"
      className="relative flex min-w-0 flex-col overflow-hidden rounded-[10px] border border-[#EEEEEE] bg-white p-[6px] sm:rounded-[16px] sm:p-3 md:p-4"
    >
      {/* Favorite */}
      <button
        type="button"
        aria-label="المفضلة"
        onClick={handleFavorite}
        className="absolute left-[6px] top-[6px] z-10 text-[#111] sm:left-4 sm:top-4"
      >
        <Heart
          size={14}
          strokeWidth={1.4}
          className={`sm:size-[26px] ${
            isFavorite ? "fill-[#D41472] text-[#D41472]" : ""
          }`}
        />
      </button>

      {/* New Badge */}
      <span className="absolute right-[6px] top-[6px] z-10 rounded-full bg-[#D41472] px-[7px] py-[2px] text-[8px] text-white sm:right-3 sm:top-3 sm:px-4 sm:py-1 sm:text-[12px]">
        جديد
      </span>

      {/* Image */}
      <div className="flex h-[70px] w-full items-center justify-center sm:h-[190px] md:h-[220px] lg:h-[245px]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain scale-y-110"
        />
      </div>

      {/* Info */}
      <div className="mt-[1px] text-center sm:mt-3">
        <h2 className="line-clamp-2  text-[8px] leading-[1.3] text-[#111] sm:min-h-[44px] sm:text-[15px] md:text-[17px]">
          {product.name}
        </h2>

        <p className="mt-[2px] text-[9px] text-[#777] sm:mt-1 sm:text-[13px]">
          {product.brand}
        </p>

        {/* Price + Rating */}
        <div className="mt-[4px] flex items-center justify-between gap-1 sm:mt-3 sm:gap-2">
          <span className="flex items-center gap-[2px] text-[7px] text-[#777] sm:gap-1 sm:text-[12px]">
            <span>({product.reviews})</span>
            {product.rating}
            <Star
              size={9}
              fill="currentColor"
              className="text-[#C91F72] sm:size-[13px]"
            />
          </span>
          
          <span className="text-[10px] font-medium text-[#C91F72] sm:text-[17px] md:text-[19px]">
            {product.price} ر.س
          </span>
          
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-[4px] flex h-[20px] w-full items-center justify-center gap-[5px] rounded-full border border-[#d41471a8] !text-[10px] text-[#C91F72] transition hover:bg-[#D41472] hover:text-white sm:mt-3 sm:h-[42px] sm:gap-2 sm:text-[14px] md:h-[46px] md:text-[15px]"
        >
          <ShoppingBag size={12} strokeWidth={2} className="sm:size-[17px]" />
          أضف للسلة
        </button>
      </div>
    </article>
  );
}
