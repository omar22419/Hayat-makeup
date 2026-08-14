import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ image, name, price, rating, reviews, onSelect, onAddToCart }) {
  return (
    <article
      dir="rtl"
      className="
        flex
        h-[95px]
        w-full
        items-center
        overflow-hidden
        rounded-[9px]
        border
        border-[#E8E8E8]
        bg-white
        px-[5px]
        py-[4px]

        sm:h-[120px]
        sm:rounded-[10px]
        sm:px-[6px]

        md:h-[150px]
        md:rounded-[12px]
        md:px-[9px]

        lg:h-[175px]
        lg:rounded-[14px]
        lg:px-[12px]
      "
    >
      {/* Product Info */}
      <div
        onClick={() => onSelect?.()}
        className="
          flex
          h-full
          min-w-0
          flex-1
          flex-col
          items-start
          justify-between
          py-[2px]
          px-[10px]

          sm:py-[4px]

          md:py-[6px]

          lg:py-[8px]
        "
      >
        {/* Product Name */}
        <h3
          className="
            w-full
            text-right
            text-[9px]
            font-normal
            leading-[1.35]
            text-[#222222]

            sm:text-[10px]

            md:text-[12px]

            lg:text-[14px]
          "
        >
          {name}
        </h3>

        {/* Price */}
        <span
          className="
            w-full
            text-right
            text-[10px]
            font-bold
            text-[#222222]

            sm:text-[13px]

            md:text-[15px]

            lg:text-[17px]
          "
        >
          {price} ر.س
        </span>

        {/* Rating */}
        <div
          dir="ltr"
          className="
            flex
            w-full
            items-center
            justify-end
            gap-[2px]
            text-[8px]
            text-[#555555]

            sm:text-[9px]

            md:text-[11px]

            lg:text-[12px]
          "
        >
          <Star
            className="
              h-[8px]
              w-[8px]
              fill-[#D4146A]
              text-[#D4146A]

              sm:h-[11px]
              sm:w-[11px]

              md:h-[13px]
              md:w-[13px]
            "
            strokeWidth={1.5}
          />

          <span>{rating}</span>

          <span className="text-[#999999]">({reviews})</span>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onAddToCart?.();
          }}
          className="
            flex
            h-[17px]
            w-[100%]
            max-w-[125px]
            items-center
            justify-center
            gap-[4px]
            rounded-[4px]
            border
            border-[#D4146A]
            bg-white
            text-[8px]
            font-normal
            text-[#D4146A]

            sm:h-[25px]
            sm:max-w-[140px]
            sm:text-[9px]

            md:h-[30px]
            md:max-w-[165px]
            md:text-[11px]

            lg:h-[35px]
            lg:max-w-[190px]
            lg:text-[12px]
          "
        >
          <ShoppingCart
            className="
              h-[11px]
              w-[11px]

              sm:h-[12px]
              sm:w-[12px]

              md:h-[15px]
              md:w-[15px]
            "
            strokeWidth={1.7}
          />
          <span className="text-[6px] leading-none sm:text-[7px] md:text-[9px] lg:text-[10px]">
            أضف إلى السلة
          </span>
        </button>
      </div>
      {/* Product Image */}
      <div
        onClick={() => onSelect?.()}
        className="
          flex
          h-full
          w-[39%]
          shrink-0
          items-center
          justify-center
          p-[3px]

          sm:p-[5px]

          md:p-[8px]

          lg:p-[10px]
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
    </article>
  );
}
