import { ChevronDown } from "lucide-react";

export default function ReturnPolicyCard({
  title,
  description,
  icon: Icon,
}) {
  return (
    <article
      className="
        flex
        min-h-[70px]
        w-full
        items-center
        gap-2
        rounded-[12px]
        border
        border-[#eeeeee]
        bg-white
        px-2.5
        py-2
        shadow-[0_1px_5px_rgba(0,0,0,0.02)]

        sm:min-h-[108px]
        sm:gap-3
        sm:rounded-[15px]
        sm:px-4
        sm:py-3

        md:min-h-[125px]
        md:gap-4
        md:rounded-[18px]
        md:px-5

        lg:min-h-[140px]
      "
    >
      {/* Arrow */}
      <div className="flex w-8 shrink-0 items-center  justify-center text-[#111] sm:w-10 md:w-12">
        <ChevronDown
          size={20}
          strokeWidth={1.8}
          className="sm:size-[24px] md:size-[28px]"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 text-right ">
        <h2
          className="
            text-[14px]
            font-semibold
            leading-6
            text-[#111]

            sm:text-[18px]
            sm:leading-7

            md:text-[22px]

            lg:text-[25px]
          "
        >
          {title}
        </h2>

        <p
          className="
          text-right
            mt-0.5
            line-clamp-2
            text-[9px]
            leading-5
            text-[#666]
            sm:mt-1
            sm:text-[12px]
            sm:leading-6

            md:text-[16px]

            lg:text-[18px]
          "
        >
          {description}
        </p>
      </div>

      {/* Icon */}
      <div
        className="
          flex
          h-[40px]
          w-[40px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#fff1f6]
          text-[#C91F72]

          sm:h-[58px]
          sm:w-[58px]

          md:h-[70px]
          md:w-[70px]
        "
      >
        <Icon
          size={23}
          strokeWidth={1.5}
          className="sm:size-[28px] md:size-[34px]"
        />
      </div>
    </article>
  );
}