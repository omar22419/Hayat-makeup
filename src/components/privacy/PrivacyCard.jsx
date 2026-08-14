import { ChevronDown } from "lucide-react";

export default function PrivacyCard({ title, description, icon: Icon }) {
  return (
    <article
      className="
        relative
        min-h-[92px]
        rounded-[14px]
        border
        border-[#EEEEEE]
        bg-white
        px-[14px]
        py-[12px]
        shadow-[0_2px_8px_rgba(0,0,0,0.04)]

        sm:min-h-[105px]
        sm:rounded-[16px]
        sm:px-[18px]
        sm:py-[14px]

        md:min-h-[130px]
        md:rounded-[18px]
        md:px-[24px]
        md:py-[18px]

        lg:min-h-[150px]
        lg:px-[30px]
        lg:py-[22px]
      "
    >
      {/* Icon */}
      <div
        className="
          absolute
          right-[14px]
          top-1/2
          flex
          h-[38px]
          w-[38px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-[12px]
          bg-[#FFF1F7]

          sm:right-[18px]
          sm:h-[44px]
          sm:w-[44px]
          sm:rounded-[13px]

          md:right-[24px]
          md:h-[54px]
          md:w-[54px]
          md:rounded-[15px]

          lg:h-[62px]
          lg:w-[62px]
        "
      >
        <Icon
          size={18}
          strokeWidth={1.5}
          className="text-[#C91F72] sm:size-[21px] md:size-[26px] lg:size-[30px]"
        />
      </div>

      {/* Content */}
      <div
        className="
          ml-[24px]
          mr-[48px]
          text-right

          sm:ml-[28px]
          sm:mr-[56px]

          md:ml-[36px]
          md:mr-[68px]

          lg:ml-[42px]
          lg:mr-[78px]
        "
      >
        <h2
          className="
            text-[13px]
            font-semibold
            leading-[1.4]
            text-[#111]

            sm:text-[15px]

            md:text-[18px]

            lg:text-[20px]
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-[4px]
            text-[10px]
            leading-[1.6]
            text-[#666]

            sm:text-[12px]
            sm:leading-[1.7]

            md:text-[14px]
            md:leading-[1.8]

            lg:text-[15px]
          "
        >
          {description}
        </p>
      </div>

      {/* Arrow */}
      <ChevronDown
        size={25}
        strokeWidth={1.5}
        className="
    absolute
    left-[14px]
    top-1/2
    -translate-y-1/2
    text-[#C91F72]

    sm:left-[18px]
    sm:size-[18px]

    md:left-[24px]
    md:size-[21px]

    lg:left-[30px]
    lg:size-[24px]
  "
      />
    </article>
  );
}
