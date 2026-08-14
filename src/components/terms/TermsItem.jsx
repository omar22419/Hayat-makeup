import { ChevronDown } from "lucide-react";

export default function TermsItem({
  number,
  title,
  description,
  icon: Icon,
  isOpen,
  onClick,
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[6px]
        border
        border-[#EEEEEE]
        bg-white
        shadow-[0_1px_5px_rgba(0,0,0,0.025)]

        sm:rounded-[15px]

        md:rounded-[17px]
      "
    >
      <button
        dir="ltr"
        type="button"
        onClick={onClick}
        className="
          flex
          min-h-[50px]
          w-full
          items-center
          justify-between
          px-[4px]
          py-[5px]
          text-right

          sm:min-h-[96px]
          sm:px-[18px]
          sm:py-[12px]

          md:min-h-[108px]
          md:px-[22px]
        "
      >
        {/* Arrow */}
        <ChevronDown
          className={`
            h-[20px]
            w-[20px]
            shrink-0
            text-[#D4146A]
            transition-transform
            duration-200

            sm:h-[23px]
            sm:w-[23px]

            md:h-[26px]
            md:w-[26px]

            ${isOpen ? "rotate-180" : ""}
          `}
          strokeWidth={2}
        />

        {/* Content */}
        <div
          className="
            flex
            min-w-0
            flex-1
            items-center
            justify-end
            gap-[10px]
            pr-[8px]

            sm:gap-[13px]
            sm:pr-[12px]

            md:gap-[16px]
            md:pr-[15px]
          "
        >
          <div className="min-w-0 flex-1">
            <h3 
              dir="rtl"
              className="
                truncate
                text-[12px]
                font-medium
                leading-[1.5]
                text-[#222222]

                sm:text-[17px]

                md:text-[20px]
              "
            >
              {number}. {title}
            </h3>

            <p
              className="
                mt-[3px]
                line-clamp-2
                text-[8px]
                font-normal
                leading-[1.7]
                text-[#777777]

                sm:mt-[5px]
                sm:text-[11px]

                md:text-[14px]
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
              bg-[#FFF1F7]

              sm:h-[57px]
              sm:w-[57px]

              md:h-[65px]
              md:w-[65px]
            "
          >
            <Icon
              className="
                h-[25px]
                w-[25px]
                text-[#D4146A]

                sm:h-[29px]
                sm:w-[29px]

                md:h-[34px]
                md:w-[34px]
              "
              strokeWidth={1}
            />
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div
          className="
            border-t
            border-[#F1F1F1]
            px-[62px]
            pb-[14px]
            pt-[10px]
            text-right
            text-[10px]
            leading-[1.8]
            text-[#777777]

            sm:px-[88px]
            sm:pb-[18px]
            sm:pt-[13px]
            sm:text-[12px]

            md:px-[105px]
            md:text-[14px]
          "
        >
          {description}
        </div>
      )}
    </div>
  );
}
