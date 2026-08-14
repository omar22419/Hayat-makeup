export default function UndertoneOption({
  tone,
  selected,
  onClick,
}) {
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
      {/* Option */}
      <div
        className={`
          relative
          overflow-visible
          rounded-[10px]
          bg-white
          px-2
          py-2

          sm:rounded-[13px]
          sm:px-3
          sm:py-4

          md:rounded-[16px]
          md:px-4
          md:py-5

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

        {/* Image */}
        <img
          src={tone.image}
          alt={tone.label}
          className="
            h-[50px]
            w-full
            object-contain

            sm:h-[72px]

            md:h-[100px]
          "
        />

        {/* Title */}
        <h3
          className="
            text-[10px]
            font-medium
            text-[#111]

            sm:mt-2
            sm:text-[14px]

            md:text-[18px]
          "
        >
          {tone.label}
        </h3>

        {/* Description */}
        <p
          className="
            line-clamp-2
            text-[7px]
            leading-3
            text-[#777]

            sm:text-[10px]
            sm:leading-5

            md:text-[13px]
          "
        >
          {tone.description}
        </p>
      </div>
    </button>
  );
}