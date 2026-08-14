const toneColors = {
  "5": "#EFD8C8",
  "4": "#E7BC94",
  "3": "#D59A68",
  "2": "#BB794D",
  "1": "#8B5735",
};

export default function SkinToneOption({
  tone,
  selected,
  onClick,
}) {
  const toneColor =
    toneColors[tone.id] || "#DDB08D";

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
      {/* Image Area Only */}
      <div
        className={`
          relative
          overflow-visible
          rounded-[9px]
          bg-white

          sm:rounded-[11px]

          md:rounded-[14px]

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
        <div
          className="
            h-[68px]
            w-full
            overflow-hidden
            rounded-[7px]

            sm:h-[95px]
            sm:rounded-[9px]

            md:h-[130px]
            md:rounded-[11px]
          "
        >
          <img
            src={tone.image}
            alt={tone.label}
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>

        {/* Skin Tone Circle */}
        <span
          className="
            absolute
            bottom-[-10px]
            left-1/2
            z-20
            h-[24px]
            w-[24px]
            -translate-x-1/2
            rounded-full
            border-[2px]
            border-white

            sm:bottom-[-11px]
            sm:h-[30px]
            sm:w-[30px]

            md:bottom-[-13px]
            md:h-[36px]
            md:w-[36px]
          "
          style={{
            backgroundColor: toneColor,
          }}
        />
      </div>

      {/* Label - Outside Border */}
      <div
        className="
          pt-4
          text-[9px]
          leading-4
          text-[#111]

          sm:pt-5
          sm:text-[12px]

          md:pt-6
          md:text-[15px]
        "
      >
        {tone.label}
      </div>
    </button>
  );
}