import { Heart, ShoppingBag, Star } from "lucide-react";
import { useFavoritesStore } from "../../store/favoritesStore.js";
import { useCartStore } from "../../store/cartStore.js";

export default function BestSellerCard({ product, onSelect }) {
  const isLastTwo = product.rank >= 4;
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);
  const addToCart = useCartStore((state) => state.addToCart);

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavorite = (event) => {
    event.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <article className="relative overflow-hidden rounded-[10px] border border-[#E5E5E5] bg-white">
      {/* Rank */}
      <div
        className="
          absolute
          right-0
          top-0
          z-20
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-bl-[8px]
          bg-[#C91F72]
          text-[11px]
          font-medium
          text-white
          sm:h-9
          sm:w-9
          sm:text-[13px]
          md:h-11
          md:w-11
          md:text-[15px]
        "
      >
        {product.rank}
      </div>

      {/* Best Seller Badge */}
      <span
        className="
          absolute
          left-1
          top-1
          z-10
          rounded-[6px]
          bg-[#C91F72]
          px-1
          py-1
          text-[8px]
          font-tight
          text-white
          sm:left-2
          sm:top-3
          sm:px-3
          sm:text-[10px]
          md:text-[12px]
        "
      >
        الأكثر مبيعًا
      </span>

      {/* Product Image */}
      <div
        onClick={() => onSelect?.()}
        className="
          relative
          flex
          h-[125px]
          items-center
          justify-center
          px-1
          pt-5
          sm:h-[180px]
          sm:pt-7
          md:h-[260px]
          md:pt-8
          lg:h-[300px]
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-contain
          "
        />

        {/* Wishlist */}
        <button
          type="button"
          aria-label={isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}
          onClick={handleFavorite}
          className="
            absolute
            bottom-1
            left-1
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-[0_2px_8px_rgba(0,0,0,0.12)]
            sm:bottom-2
            sm:left-2
            sm:h-9
            sm:w-9
            md:h-11
            md:w-11
          "
        >
          <Heart
            size={16}
            strokeWidth={1.5}
            className={`sm:size-[20px] md:size-[23px] ${
              isFavorite ? "fill-[#C91F72] text-[#C91F72]" : ""
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div
        className="
          px-3
          pb-2
          text-center
          sm:px-3
          sm:pb-3
          md:px-4
          md:pb-4
        "
      >
        <h2
          onClick={() => onSelect?.()}
          className="
            line-clamp-2
            text-[10px]
            font-medium
            leading-4
            text-[#111]
            sm:min-h-[40px]
            sm:text-[13px]
            sm:leading-5
            md:min-h-[48px]
            md:text-[17px]
            md:leading-6
          "
        >
          {product.name}
        </h2>

        <p
          className="
            mt-0.5
            text-[10px]
            leading-4
            text-[#999]
            sm:mt-1
            sm:text-[12px]
            md:text-[15px]
          "
        >
          {product.variant}
        </p>

        <div
          className={`
            mt-1.5
            flex
            items-center
            ${
              isLastTwo
                ? "flex-row justify-between gap-1"
                : "flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-0"
            }
            sm:mt-2
            md:mt-3
          `}
        >
          {isLastTwo ? (
            <>
              {/* Price - مكان الـ Rating */}
              <div
                className="
                  whitespace-nowrap
                  text-[12px]
                  font-bold
                  text-[#C91F72]
                  sm:text-[16px]
                  md:text-[20px]
                "
              >
                {product.price} ر.س
              </div>

              {/* Rating - مكان الـ Price */}
              <div
                dir="ltr"
                className="
                  flex
                  items-center
                  gap-1
                  text-[9px]
                  text-[#111]
                  sm:text-[12px]
                  md:text-[15px]
                "
              >
                <Star
                  size={12}
                  fill="#C91F72"
                  strokeWidth={0}
                  className="sm:size-[15px] md:size-[18px]"
                />

                <span>{product.rating}</span>

                <span className="text-[#999]">({product.reviews})</span>
              </div>
            </>
          ) : (
            <>
              {/* Rating */}
              <div
                dir="ltr"
                className="
                  flex
                  items-center
                  gap-1
                  text-[9px]
                  text-[#111]
                  sm:text-[12px]
                  md:text-[15px]
                "
              >
                <Star
                  size={12}
                  fill="#C91F72"
                  strokeWidth={0}
                  className="sm:size-[15px] md:size-[18px]"
                />

                <span>{product.rating}</span>

                <span className="text-[#999]">({product.reviews})</span>
              </div>

              {/* Price */}
              <div
                className="
                  whitespace-nowrap
                  text-[12px]
                  font-bold
                  text-[#C91F72]
                  sm:text-[16px]
                  md:text-[20px]
                "
              >
                {product.price} ر.س
              </div>
            </>
          )}
        </div>
        {/* Add To Cart */}
        <button
          type="button"
          onClick={() => addToCart({ ...product, quantity: 1 })}
          className="
            mt-2
            flex
            h-[25px]
            w-full
            items-center
            justify-center
            gap-1
            rounded-[5px]
            bg-[#C91F72]
            !text-[10px]
            font-medium
            text-white
            sm:mt-3
            sm:h-[40px]
            sm:gap-2
            sm:rounded-[10px]
            sm:text-[13px]
            md:h-[48px]
            md:text-[16px]
          "
        >
          <ShoppingBag
            size={15}
            strokeWidth={1.5}
            className="sm:size-[18px] md:size-[21px]"
          />

          <span>أضف إلى السلة</span>
        </button>
      </div>
    </article>
  );
}
