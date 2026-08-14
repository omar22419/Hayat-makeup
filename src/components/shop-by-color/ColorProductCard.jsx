import {
  Heart,
  ShoppingBag,
} from "lucide-react";
import { useCartStore } from "../../store/cartStore.js";
import { useFavoritesStore } from "../../store/favoritesStore.js";

export default function ColorProductCard({
  product,
}) {
  const addToCart = useCartStore((state) => state.addItem);

  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (typeof addToCart === "function") {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const handleFavorite = () => {
    toggleFavorite(product);
  };

  return (
    <article
      className="
        relative
        min-w-0
        overflow-hidden
        rounded-[8px]
        border
        border-[#E8E8E8]
        bg-white
        p-1.5

        sm:rounded-[11px]
        sm:p-2

        md:rounded-[14px]
        md:p-3
      "
    >
      {/* Wishlist */}
      <button
        type="button"
        aria-label={isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}
        onClick={handleFavorite}
        className="
          absolute
          left-1.5
          top-1.5
          z-10
          text-[#222]

          sm:left-2
          sm:top-2

          md:left-3
          md:top-3
        "
      >
        <Heart
          size={12}
          strokeWidth={1.5}
          className={`
            sm:size-[18px]
            md:size-[21px]

            ${isFavorite ? "fill-[#C91F72] text-[#C91F72]" : ""}
          `}
        />
      </button>

      {/* Image */}
      <div
        className="
          flex
          h-[80px]
          items-center
          justify-center

          sm:h-[120px]

          md:h-[165px]

          lg:h-[185px]
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
      </div>

      {/* Product Name */}
      <h3
        className="
          mt-1
          line-clamp-2
          min-h-[26px]
          text-center
          text-[8px]
          leading-4
          text-[#111]

          sm:mt-2
          sm:min-h-[36px]
          sm:text-[11px]
          sm:leading-5

          md:min-h-[46px]
          md:text-[14px]
          md:leading-6
        "
      >
        {product.name}
      </h3>

      {/* Bottom */}
      <div
        className="
          mt-1
          flex
          items-center
          justify-between
          gap-1
        "
      >
        {/* Price */}
        <span
          className="
            whitespace-nowrap
            text-[8px]
            font-semibold
            text-[#C91F72]

            sm:text-[13px]

            md:text-[17px]
          "
        >
          {product.price} ر.س
        </span>

        {/* Cart */}
        <button
          type="button"
          aria-label="أضف إلى السلة"
          onClick={handleAddToCart}
          className="
            flex
            h-[18px]
            w-[18px]
            shrink-0
            items-center
            justify-center
            rounded-[6px]
            bg-[#C91F72]
            text-white

            sm:h-[31px]
            sm:w-[31px]

            md:h-[39px]
            md:w-[39px]
          "
        >
          <ShoppingBag
            size={11}
            strokeWidth={1.5}
            className="
              sm:size-[15px]
              md:size-[18px]
            "
          />
        </button>
      </div>
    </article>
  );
}