import {
  Droplets,
  Feather,
  Sparkles,
  Split,
  Waves,
} from "lucide-react";

const icons = {
  normal: Sparkles,
  dry: Droplets,
  oily: Waves,
  combination: Split,
  sensitive: Feather,
};

export default function SkinTypeOption({
  type,
  selected,
  onClick,
}) {
  const Icon = icons[type.id] || Sparkles;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        min-w-0
        bg-transparent
        text-center
      "
    >
      {/* Item */}
      <div
        className={`
          relative
          overflow-visible
          flex
          min-w-0
          flex-col
          items-center
          justify-center
          rounded-[9px]
          bg-white
          py-2

          sm:rounded-[12px]
          sm:px-2
          sm:py-3

          md:rounded-[15px]
          md:px-3
          md:py-4

          ${
            selected
              ? "border-[2px] border-[#C91F72]"
              : "border border-[#DDDDDD]"
          }
        `}
      >
        {/* Selected Check */}
        {selected && (
          <span
            className="
              absolute
              right-[-7px]
              top-[-7px]
              z-30
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#C91F72]
              text-[10px]
              font-bold
              leading-none
              text-white

              sm:right-[-8px]
              sm:top-[-8px]
              sm:h-7
              sm:w-7
              sm:text-[12px]

              md:right-[-9px]
              md:top-[-9px]
              md:h-8
              md:w-8
              md:text-[13px]
            "
          >
            ✓
          </span>
        )}

        {/* Icon */}
        <Icon
          size={23}
          strokeWidth={1.4}
          className="
            text-[#111]

            sm:size-[29px]

            md:size-[38px]
          "
        />

        {/* Title */}
        <h3
          className="
            mt-1
            text-[9px]
            font-medium
            leading-4
            text-[#111]

            sm:mt-1.5
            sm:text-[12px]

            md:mt-2
            md:text-[16px]
          "
        >
          {type.label}
        </h3>

        {/* Description */}
        <p
          className="
            mt-0.5
            line-clamp-1
            text-[6px]
            leading-3
            text-[#747474]

            sm:mt-1
            sm:text-[9px]
            sm:leading-4

            md:text-[12px]
            md:leading-5
          "
        >
          {type.description}
        </p>
      </div>
    </button>
  );
}