import { MapPin, ShoppingBag } from "lucide-react";

export default function OrderActions({
  onTrackOrder,
  onContinueShopping,
}) {
  return (
    <div
      dir="rtl"
      className="
        mt-[12px]
        flex
        w-full
        flex-row
        gap-[8px]

        sm:mt-[20px]
        sm:gap-[12px]

        md:mt-[24px]
      "
    >
      {/* Track Order - Right */}
      <button
        type="button"
        onClick={onTrackOrder}
        className="
          flex
          h-[45px]
          min-w-0
          flex-1
          items-center
          justify-center
          gap-[7px]
          rounded-[13px]
          bg-[#D4146A]
          text-[17px]
          font-normal
          text-white
          transition-opacity
          hover:opacity-90

          sm:h-[58px]
          sm:gap-[8px]
          sm:text-[20px]

          md:h-[64px]
          md:gap-[10px]
          md:text-[23px]
        "
      >
        <MapPin
          className="
            h-[22px]
            w-[22px]
            shrink-0

            sm:h-[25px]
            sm:w-[25px]

            md:h-[29px]
            md:w-[29px]
          "
          strokeWidth={1.8}
        />

        <span className="whitespace-nowrap">
          تتبع الطلب
        </span>
      </button>

      {/* Continue Shopping - Left */}
      <button
        type="button"
        onClick={onContinueShopping}
        className="
          flex
          h-[45px]
          min-w-0
          flex-1
          items-center
          justify-center
          gap-[7px]
          rounded-[13px]
          border
          border-[#D4146A]
          bg-white
          text-[17px]
          font-normal
          text-[#D4146A]
          transition-colors
          hover:bg-[#FFF5F9]

          sm:h-[58px]
          sm:gap-[8px]
          sm:text-[20px]

          md:h-[64px]
          md:gap-[10px]
          md:text-[23px]
        "
      >
        <ShoppingBag
          className="
            h-[22px]
            w-[22px]
            shrink-0

            sm:h-[25px]
            sm:w-[25px]

            md:h-[29px]
            md:w-[29px]
          "
          strokeWidth={1.8}
        />

        <span className="whitespace-nowrap">
          متابعة التسوق
        </span>
      </button>
    </div>
  );
}