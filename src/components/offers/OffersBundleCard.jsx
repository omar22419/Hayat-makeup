import { ShoppingBag } from "lucide-react";
import { useCartStore } from "../../store/cartStore.js";

export default function OfferBundleCard({ bundle }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <article
      className="
        relative
        min-w-0
        overflow-hidden
        rounded-[12px]
        border
        border-[#eadde3]
        bg-[#F9F9F9]
        p-2
        sm:rounded-[16px]
        sm:p-3
        md:p-4
      "
    >
      {bundle.featured && (
        <span
          className="
            absolute
            left-2
            top-0
            z-10
            rounded-b-[10px]
            bg-[#C91F72]
            px-2
            py-1
            text-[7px]
            text-white
            sm:right-3
            sm:top-3
            sm:px-3
            sm:text-[10px]
            md:text-[12px]
          "
        >
          الأكثر توفيرًا
        </span>
      )}

      <div
        className="
          flex
          h-[65px]
          items-center
          justify-center
          sm:h-[145px]
          md:h-[190px]
        "
      >
        <img
          src={bundle.image}
          alt={bundle.name}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="text-center sm:mt-2">
        <h3
          className="
            line-clamp-2
            text-[8px]
            font-medium
            leading-4
            sm:min-h-[42px]
            sm:text-[13px]
            sm:leading-5
            md:min-h-[50px]
            md:text-[17px]
          "
        >
          {bundle.name}
        </h3>

        <p
          className="
            text-[8px]
            text-[#888]
            sm:text-[11px]
            md:text-[14px]
          "
        >
          {bundle.description}
        </p>

        <div className=" flex items-center justify-center gap-2 sm:mt-2">
          <span
            className="
              my-1
              text-[10px]
              font-bold
              text-[#C91F72]
              sm:text-[16px]
              md:text-[20px]
            "
          >
            {bundle.price} ر.س
          </span>

          <span
            className="
              text-[8px]
              text-[#999]
              line-through
              sm:text-[11px]
              md:text-[14px]
            "
          >
            {bundle.oldPrice} ر.س
          </span>
        </div>

        <button
          type="button"
          onClick={() => addToCart({ ...bundle, id: `bundle-${bundle.id}`, quantity: 1 })}
          className="
            mt-1
            
            flex
            h-[15px]
            w-full
            items-center
            justify-center
            py-2
            gap-1
            rounded-[5px]
            border
            border-[#C91F72]
            !text-[8px]
            text-[#C91F72]
            sm:mt-3
            sm:h-[36px]
            sm:text-[11px]
            md:h-[44px]
            md:text-[14px]
          "
        >
          <ShoppingBag
            size={13}
            strokeWidth={1.5}
            className="sm:size-[16px] md:size-[19px]"
          />

          <span>وفر {bundle.saving} ر.س</span>
        </button>
      </div>
    </article>
  );
}
