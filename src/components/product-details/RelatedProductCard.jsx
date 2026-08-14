import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useFavoritesStore } from "../../store/favoritesStore.js";
import { useCartStore } from "../../store/cartStore.js";

export default function RelatedProductCard({
  product,
  onSelect,
}) {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);
  const addToCart = useCartStore((state) => state.addToCart);

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavorite = (event) => {
    event.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <article
      className="
        relative
        min-w-0
        min-h-[170px]
        overflow-hidden
        rounded-[8px]
        border
        border-[#EEEEEE]
        bg-white
        p-1.5

        sm:rounded-[11px]
        sm:p-2

        md:rounded-[14px]
        md:p-3
      "
    >
      <button
        type="button"
        onClick={handleFavorite}
        aria-label={isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}
        className="
          absolute
          left-1.5
          top-1.5
          z-10
          text-[#111]

          sm:left-2
          sm:top-2
        "
      >
        <Heart
          size={14}
          strokeWidth={1.5}
          className={`sm:size-[18px] md:size-[21px] ${
            isFavorite ? "fill-[#C91F72] text-[#C91F72]" : ""
          }`}
        />
      </button>

      <div
        onClick={() => onSelect?.()}
        className="
          flex
          h-[90px]
          items-center
          justify-center

          sm:h-[120px]

          md:h-[160px]
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>

      <h3
        onClick={() => onSelect?.()}
        className="
          mt-1
          line-clamp-2
          text-[9px]
          text-center
          leading-3
          text-[#111]

          sm:mt-2
          sm:text-[11px]
          sm:leading-4

          md:text-[15px]
          md:leading-5
        "
      >
        {product.name}
      </h3>

      <div
        dir="ltr"
        className="mt-1 flex justify-center items-center gap-1"
      >
        <Star
          size={9}
          fill="#C91F72"
          strokeWidth={0}
          className="sm:size-[12px] md:size-[15px]"
        />

        <span
          className="
            text-[9px]
            text-[#111]
            sm:text-[10px]

            md:text-[13px]
          "
        >
          {product.rating}
        </span>
      </div>

      <div
        className="
          mt-1
          flex
          items-center
          justify-between
          gap-1
        "
      >
        <span
        dir="rtl"
          className="
            whitespace-nowrap
            text-[10px]
            font-semibold
            text-[#111]

            sm:text-[12px]

            md:text-[16px]
          "
        >
          {product.price} ر.س
        </span>

        <button
          type="button"
          onClick={() => addToCart({ ...product, quantity: 1 })}
          className="
            flex
            h-[20px]
            w-[20px]
            items-center
            justify-center
            rounded-[6px]
            bg-[#C91F72]
            text-white

            sm:h-[32px]
            sm:w-[32px]

            md:h-[40px]
            md:w-[40px]
          "
        >
          <ShoppingCart
            size={12}
            strokeWidth={1.5}
            className="sm:size-[15px] md:size-[18px]"
          />
        </button>
      </div>
    </article>
  );
}