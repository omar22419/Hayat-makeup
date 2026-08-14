import { ChevronLeft } from "lucide-react";

export default function AccountMenuItem({ icon: Icon, label, onClick, badge }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex
        w-full
        items-center
        gap-3
        border-b
        border-[#EEEEEE]
        px-3
        py-3
        text-right

        sm:gap-4
        sm:px-4
        sm:py-4
      "
    >
      <div
        className="
          flex
          h-[30px]
          w-[30px]
          shrink-0
          items-center
          justify-center
          text-[#D4146A]

          sm:h-[38px]
          sm:w-[38px]
        "
      >
        {Icon && (
          <Icon
            size={16}
            strokeWidth={1.6}
            className="
              sm:size-[21px]
            "
          />
        )}
      </div>

      <span
        className="
          flex-1
          text-[13px]
          font-normal
          leading-none
          text-[#111111]

          sm:text-[16px]

          md:text-[18px]
        "
      >
        {label}
      </span>

      {badge != null && badge > 0 && (
        <span
          className="
            flex
            h-[18px]
            min-w-[18px]
            items-center
            justify-center
            rounded-full
            bg-[#D4146A]
            px-1
            text-[9px]
            font-medium
            leading-none
            text-white

            sm:h-[22px]
            sm:min-w-[22px]
            sm:text-[11px]
          "
        >
          {badge}
        </span>
      )}

      <ChevronLeft
        size={16}
        strokeWidth={1.5}
        className="
          shrink-0
          text-[#999999]

          sm:size-[20px]
        "
      />
    </button>
  );
}