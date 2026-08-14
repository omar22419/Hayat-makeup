import { ChevronLeft, ShoppingBag, Tag, Star } from "lucide-react";
import { useCartStore } from "../../store/cartStore.js";

export default function FeaturedPackage({ packageItem }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <article
      dir="rtl"
      className="
        relative
        flex
        min-h-[150px]
        overflow-visible
        rounded-md
        border-1
        border-[#C91F72]
        bg-[#FAF1F6]

        sm:min-h-[260px]
        sm:rounded-[22px]
        sm:border-[3px]

        md:min-h-[320px]

        lg:min-h-[360px]
      "
    >
      {/* Badge */}
      <div
        className="
            absolute
            top-2
            left-1  
            mb-1.5
            flex
            w-fit
            items-center
            gap-1
            rounded-[4px]
            bg-[#C91F72]
            px-2.5
            py-1
            text-[9px]
            font-medium
            text-white

            sm:mb-2
            sm:gap-1.5
            sm:px-4
            sm:py-1.5
            sm:text-[13px]

            md:text-[15px]
          "
      >
        <Star size={9} className="fill-white sm:size-[13px] md:size-[15px]" />
        <span>الأكثر طلبًا</span>
      </div>

      {/* Content */}
      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          justify-center
          px-3
          py-2

          sm:px-6
          sm:py-5

          md:px-8
          md:py-6
        "
      >
        <h2
          className="
            text-[20px]
            font-bold
            leading-tight
            text-[#151515]

            sm:text-[30px]

            md:text-[38px]

            lg:text-[42px]
          "
        >
          {packageItem.name}
        </h2>

        <p
          className="
            mt-1
            line-clamp-2
            text-[8px]
            leading-[1.5]
            text-[#8b8b8b]

            sm:text-[14px]

            md:text-[17px]
          "
        >
          {packageItem.description}
        </p>

        <div
          className="
            mt-2
            flex
            items-center
            justify-between
            gap-1

            sm:mt-4

            md:mt-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-1
              text-[9px]
              font-medium
              text-[#151515]

              sm:gap-1.5
              sm:text-[13px]

              md:text-[16px]
            "
          >
            <ShoppingBag
              size={10}
              strokeWidth={1.6}
              className="sm:size-[17px] md:size-[20px]"
            />
            <span>{packageItem.products} منتجات</span>
          </div>

          <div
            className="
              flex
              items-center
              gap-1
              rounded-md
              bg-[#FCE4EE]
              px-2
              py-1
              text-[9px]
              font-semibold
              text-[#C91F72]

              sm:gap-1.5
              sm:px-3
              sm:py-1.5
              sm:text-[12px]

              md:text-[15px]
            "
          >
            <Tag
              size={10}
              strokeWidth={1.8}
              className="sm:size-[14px] md:size-[17px]"
            />
            <span>وفري {packageItem.discount}%</span>
          </div>
        </div>

        <div
          className="
            mt-2
            border-t
            border-[#ECECEC]
            pt-2

            sm:mt-4
            sm:pt-4

            md:mt-5
            md:pt-5
          "
        >
          <div className="flex items-center justify-start gap-1.5 sm:gap-2.5">
            <span
              className="
                text-[15px]
                font-bold
                text-[#C91F72]

                sm:text-[32px]

                md:text-[40px]
              "
            >
              {packageItem.price} ر.س
            </span>

            <span
              className="
                text-[10px]
                text-[#a3a3a3]
                line-through

                sm:text-[15px]

                md:text-[18px]
              "
            >
              {packageItem.oldPrice} ر.س
            </span>
          </div>

          <button
            type="button"
            onClick={() => addToCart({ ...packageItem, id: `pkg-${packageItem.id}`, quantity: 1 })}
            className="
              mt-1
              flex
              h-[25px]
              w-full
              items-center
              justify-center
              gap-1
              rounded-lg
              bg-[#C91F72]
              px-3
              !text-[10px]
              font-medium
              text-white
              transition-colors
              hover:bg-[#B01A63]
              active:scale-[0.98]
 
              sm:mt-3
              sm:h-[46px]
              sm:px-4
              sm:text-[14px]
 
              md:h-[54px]
              md:text-[17px]
            "
          >
            <span className="flex-1 text-center">أضيفي الباقة</span>
            <ChevronLeft
              size={12}
              strokeWidth={1.8}
              className="sm:size-[18px] md:size-[21px]"
            />
          </button>
        </div>
      </div>

      {/* Image — bleeds slightly below the card, matching the reference design */}
      <div
        className="
          relative
          flex
          w-[49%]
          shrink-0
          items-end
          justify-center

          sm:w-[46%]

          md:w-[48%]
        "
      >
        <img
          src={packageItem.image}
          alt={packageItem.name}
          className="
            h-[130px]
            w-full
            translate-y-2
            object-contain
            scale-110
            sm:h-[240px]
            sm:translate-y-4

            md:h-[300px]
            md:translate-y-5

            lg:h-[330px]
          "
        />
      </div>
    </article>
  );
}
