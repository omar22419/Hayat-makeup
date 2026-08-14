import { ArrowLeft } from "lucide-react";

export default function CategoryCard({
  image,
  title,
  description,
  onClick,
  bgColor = "#FBF3F1",
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className={`
        group
        gap-1
        relative
        flex
        w-full
        overflow-hidden
        rounded-[5px]
        border
        border-[#F0E5E9]
        text-right
        transition-transform
        duration-200
        active:scale-[0.98]
        h-[130px]

        sm:h-[190px]
        sm:rounded-[18px]

        md:h-[250px]
        md:rounded-[20px]

        lg:h-[310px]
        lg:rounded-[22px]

        ${className}
      `}
    >
      {/* Image - شمال */}
      <div
        className="
          relative
          h-full
          flex-1
        "
      >
        <img
          src={image}
          alt={title}
          className="
            absolute
            bottom-0
            left-0
            h-full
            w-full
            object-cover
          "
          loading="lazy"
        />
      </div>
      {/* Text - يمين */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-[45%]
          flex-col
          items-end
          justify-between
          p-[14px]

          sm:p-[18px]

          md:p-[24px]

          lg:p-[30px]
        "
      >
        <h2
          className="
            whitespace-pre-line
            text-[18px]
            font-bold
            leading-[1.2]
            text-[#111111]

            sm:text-[21px]

            md:text-[27px]

            lg:text-[33px]
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-[8px]
            whitespace-pre-line
            text-[10px]
            font-medium
            leading-[1.5]
            text-[#555555]

            sm:mt-[8px]
            sm:text-[11px]

            md:mt-[10px]
            md:text-[13px]

            lg:mt-[14px]
            lg:text-[16px]
          "
        >
          {description}
        </p>

        <div
          className="
            mt-auto
            text-[#D4146A]
          "
        >
          <ArrowLeft
            className="
                mt-5
              h-[15px]
              w-[15px]

              sm:h-[22px]
              sm:w-[22px]

              md:h-[26px]
              md:w-[26px]

              lg:h-[30px]
              lg:w-[30px]
            "
            strokeWidth={1}
          />
        </div>
      </div>
    </button>
  );
}
