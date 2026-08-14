import { Heart, ShoppingCart, Star } from "lucide-react";

import { useCartStore } from "../../store/cartStore";
import { useFavoritesStore } from "../../store/favoritesStore";

export default function AllProductsCard({
  id,
  image,
  name,
  description,
  price,
  rating = "4.9",
  reviews = "98",
  onSelect,
}) {
  const addToCart = useCartStore((state) => state.addItem);

  const favorites = useFavoritesStore(
    (state) => state.favorites
  );

  const toggleFavorite = useFavoritesStore(
    (state) => state.toggleFavorite
  );

  const isFavorite = favorites.some(
    (item) => item.id === id
  );

  const product = {
    id,
    image,
    name,
    description,
    price,
    rating,
    reviews,
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(product);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleSelect = () => {
    onSelect?.();
  };

  return (
    <article
      dir="rtl"
      className="
        relative
        flex
        h-[205px]
        w-full
        flex-col
        overflow-hidden
        rounded-[10px]
        border
        border-[#E8E8E8]
        bg-white
        p-[7px]

        sm:h-[250px]
        sm:rounded-[11px]
        sm:p-[9px]

        md:h-[320px]
        md:rounded-[13px]
        md:p-[12px]

        lg:h-[390px]
        lg:rounded-[15px]
        lg:p-[14px]
      "
    >
      {/* Favorite */}
      <button
        type="button"
        onClick={handleFavorite}
        aria-label={
          isFavorite
            ? "إزالة من المفضلة"
            : "إضافة للمفضلة"
        }
        className="
          absolute
          left-[8px]
          top-[8px]
          z-10
          flex
          h-[23px]
          w-[23px]
          items-center
          justify-center

          sm:left-[10px]
          sm:top-[10px]
          sm:h-[27px]
          sm:w-[27px]

          md:left-[12px]
          md:top-[12px]
          md:h-[31px]
          md:w-[31px]

          lg:left-[14px]
          lg:top-[14px]
          lg:h-[35px]
          lg:w-[35px]
        "
      >
        <Heart
          className={`
            h-[18px]
            w-[18px]
            transition-all
            duration-150

            sm:h-[20px]
            sm:w-[20px]

            md:h-[24px]
            md:w-[24px]

            lg:h-[27px]
            lg:w-[27px]

            ${
              isFavorite
                ? "fill-[#D4146A] text-[#D4146A]"
                : "text-[#555555]"
            }
          `}
          strokeWidth={1.5}
        />
      </button>

      {/* Product Image */}
      <div
        onClick={handleSelect}
        className="
          flex
          h-[94px]
          w-full
          shrink-0
          items-center
          justify-center
          px-[25px]

          sm:h-[118px]
          sm:px-[32px]

          md:h-[155px]
          md:px-[45px]

          lg:h-[195px]
          lg:px-[60px]
        "
      >
        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-contain
          "
        />
      </div>

      {/* Product Details */}
      <div
        onClick={handleSelect}
        className="
          flex
          min-h-0
          flex-1
          flex-col
          items-center
          justify-between
          pt-[4px]

          sm:pt-[6px]

          md:pt-[8px]

          lg:pt-[10px]
        "
      >
        {/* Product Name */}
        <h3
          className="
            line-clamp-1
            w-full
            text-center
            text-[12px]
            font-semibold
            text-[#222222]

            sm:text-[12px]

            md:text-[15px]

            lg:text-[18px]
          "
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className="
            line-clamp-1
            w-full
            text-center
            text-[10px]
            font-semibold
            text-[#555555]

            sm:text-[9px]

            md:text-[12px]

            lg:text-[14px]
          "
        >
          {description}
        </p>

        {/* Rating */}
        <div
          dir="ltr"
          className="
            flex
            w-full
            items-center
            justify-start
            gap-[2px]
            text-[8px]
            leading-none
            text-[#555555]

            sm:gap-[3px]
            sm:text-[9px]

            md:gap-[4px]
            md:text-[11px]

            lg:text-[13px]
          "
        >
          <Star
            className="
              h-[9px]
              w-[9px]
              fill-[#D4146A]
              text-[#D4146A]

              sm:h-[10px]
              sm:w-[10px]

              md:h-[13px]
              md:w-[13px]

              lg:h-[15px]
              lg:w-[15px]
            "
            strokeWidth={1.5}
          />

          <span>{rating}</span>

          <span className="text-[#999999]">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div
          className="
            w-full
            text-left
            text-[11px]
            font-semibold
            leading-none
            text-[#222222]

            sm:text-[13px]

            md:text-[16px]

            lg:text-[19px]
          "
        >
          {price} <span>رس</span>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="
            flex
            h-[21px]
            w-full
            items-center
            justify-center
            gap-[4px]
            rounded-[5px]
            border
            border-[#cd43817d]
            bg-white
            text-[#d4146ad9]
            transition-colors
            duration-150

            hover:bg-[#D4146A]
            hover:text-white

            sm:h-[26px]
            sm:gap-[5px]

            md:h-[33px]
            md:gap-[6px]

            lg:h-[39px]
            lg:gap-[7px]
          "
        >
          <ShoppingCart
            className="
              h-[11px]
              w-[11px]

              sm:h-[13px]
              sm:w-[13px]

              md:h-[16px]
              md:w-[16px]

              lg:h-[19px]
              lg:w-[19px]
            "
            strokeWidth={1.6}
          />

          <span
            className="
              text-[10px]
              font-normal
              leading-none

              sm:text-[8px]

              md:text-[10px]

              lg:text-[12px]
            "
          >
            أضف إلى السلة
          </span>
        </button>
      </div>
    </article>
  );
}