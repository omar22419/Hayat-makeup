import { ChevronDown } from "lucide-react";

export default function ShippingCard({ icon: Icon, title, children }) {
  return (
    <div
      className="
        flex
        min-h-[74px]
        w-full
        items-center
        gap-[10px]
        rounded-[14px]
        border
        border-[#EAEAEA]
        bg-white
        px-[12px]
        py-[10px]
        shadow-[0_2px_8px_rgba(0,0,0,0.03)]

        sm:min-h-[88px]
        sm:gap-[12px]
        sm:rounded-[16px]
        sm:px-[16px]
        sm:py-[12px]

        md:min-h-[110px]
        md:gap-[14px]
        md:rounded-[18px]
        md:px-[20px]
        md:py-[16px]

        lg:min-h-[130px]
        lg:px-[26px]
        lg:py-[20px]
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-[40px]
          w-[40px]
          shrink-0
          items-center
          justify-center
          rounded-[12px]
          bg-[#FFF5F9]
          text-[#C91F72]

          sm:h-[48px]
          sm:w-[48px]
          sm:rounded-[13px]

          md:h-[58px]
          md:w-[58px]
          md:rounded-[15px]

          lg:h-[66px]
          lg:w-[66px]
        "
      >
        <Icon
          size={25}
          strokeWidth={1.5}
          className="sm:size-[22px] md:size-[27px] lg:size-[32px]"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 text-right">
        <h3
          className="
            text-[12px]
            font-semibold
            leading-[1.4]
            text-[#111]

            sm:text-[14px]

            md:text-[16px]

            lg:text-[18px]
          "
        >
          {title}
        </h3>

        <div
          className="
            mt-[3px]
            text-[8px]
            leading-[1.6]
            text-[#666]

            sm:text-[11px]

            md:text-[13px]

            lg:text-[14px]
          "
        >
          {children}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex w-[18px] shrink-0 items-center justify-start text-[#C91F72] sm:w-[22px] md:w-[26px]">
        <ChevronDown
          size={16}
          strokeWidth={1.7}
          className="sm:size-[19px] md:size-[22px] lg:size-[25px]"
        />
      </div>
    </div>
  );
}
