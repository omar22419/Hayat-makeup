import { ChevronLeft, ShoppingBag, Tag } from "lucide-react";
import { useCartStore } from "../../store/cartStore.js";

export default function PackageCard({ packageItem }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <article
      className="
        min-w-0
        overflow-hidden
        rounded-[9px]
        border
        border-[#E5E5E5]
        bg-white

        sm:rounded-[14px]

        md:rounded-[18px]
      "
    >
      {/* Top Content */}
      <div className="flex min-w-0 flex-row">
        {/* Content */}
        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            justify-center
            px-1.5
            py-2
            text-right

            sm:px-3
            sm:py-3

            md:px-4
            md:py-4
          "
        >
          {/* Title */}
          <h2
            className="
              text-[12px]
              font-semibold
              leading-tight
              text-[#111]

              sm:text-[16px]

              md:text-[21px]
            "
          >
            {packageItem.name}
          </h2>

          {/* Description */}
          <p
            className="
              mt-0.5
              line-clamp-2
              text-[7px]
              leading-4
              text-[#888]

              sm:mt-1
              sm:text-[10px]

              md:text-[13px]
            "
          >
            {packageItem.description}
          </p>

          {/* Products + Discount */}
          <div
            className="
              mt-1.5
              flex
              items-center
              justify-between
              gap-1

              sm:mt-2

              md:mt-3
            "
          >
            {/* Products */}
            <div
              className="
                flex
                items-center
                gap-0.5
                whitespace-nowrap
                text-[6px]
                text-[#111]

                sm:gap-1
                sm:text-[9px]

                md:text-[12px]
              "
            >
              <ShoppingBag
                size={10}
                strokeWidth={1.5}
                className="sm:size-[13px] md:size-[16px]"
              />

              <span>منتجات</span>
            </div>

            {/* Discount */}
            <div
              className="
                flex
                items-center
                gap-0.5
                whitespace-nowrap
                rounded-[3px]
                bg-[#FFF0F5]
                px-1
                py-0.5
                text-[6px]
                font-medium
                text-[#C91F72]

                sm:gap-1
                sm:rounded-[4px]
                sm:px-2
                sm:py-1
                sm:text-[9px]

                md:px-2.5
                md:text-[12px]
              "
            >
              <Tag
                size={9}
                strokeWidth={1.5}
                className="sm:size-[12px] md:size-[15px]"
              />

              <span>وفري %{packageItem.discount}</span>
            </div>
          </div>

          {/* Price */}
          <div
            className="
              mt-1.5
              flex
              items-center
              justify-start
              gap-2

              sm:mt-2
              sm:gap-2

              md:mt-3
            "
          >
            <span
              className="
                whitespace-nowrap
                text-[11px]
                font-bold
                text-[#C91F72]

                sm:text-[17px]

                md:text-[23px]
              "
            >
              {packageItem.price} ر.س
            </span>

            <span
              className="
                whitespace-nowrap
                text-[7px]
                text-[#888]
                line-through

                sm:text-[10px]

                md:text-[13px]
              "
            >
              {packageItem.oldPrice} ر.س
            </span>
          </div>
        </div>
        {/* Image */}
        <div
          className="
            flex
            w-[50%]
            shrink-0
            items-center
            justify-center
            overflow-hidden

            sm:w-[42%]

            md:w-[44%]
          "
        >
          <img
            src={packageItem.image}
            alt={packageItem.name}
            className="
              h-[105px]
              w-full
              object-contain

              sm:h-[145px]

              md:h-[190px]
            "
          />
        </div>
      </div>

      {/* Button - Full Card Width */}
      <div
        className="
          px-2
          pb-2

          sm:px-3
          sm:pb-3

          md:px-4
          md:pb-4
        "
      >
        <button
          type="button"
          onClick={() => addToCart({ ...packageItem, id: `pkg-${packageItem.id}`, quantity: 1 })}
          className="
            flex
            h-[25px]
            w-full
            items-center
            justify-center
            gap-0.5
            rounded-[5px]
            border
            border-[#C91F72]
            bg-white
            !text-[9px]
            font-medium
            text-[#C91F72]

            sm:h-[32px]
            sm:gap-1
            sm:rounded-[7px]
            sm:text-[10px]

            md:h-[40px]
            md:text-[13px]
          "
        >
          <span className="flex-1 text-center">أضيفي الباقة</span>

          <ChevronLeft
            size={11}
            strokeWidth={1.7}
            className="sm:size-[14px] md:size-[17px]"
          />
        </button>
      </div>
    </article>
  );
}
