import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getHomeLooks, homeLooksMock } from "../../services/catalog.js";

export default function LooksCarousel() {
  const navigate = useNavigate();
  const looks = useAsyncData(getHomeLooks, homeLooksMock);

  return (
    <section
      dir="rtl"
      className="
    w-full
    px-[12px]
    pt-[10px]

    sm:px-[16px]
    sm:pt-[14px]

    md:px-[24px]
    md:pt-[20px]

    lg:px-[32px]
    lg:pt-[26px]
  "
    >
      {/* Header */}
      <div
        className="
          mb-[5px]
          flex
          items-center
          justify-between

          sm:mb-[9px]

          md:mb-[12px]

          lg:mb-[15px]
        "
      >
        <h2
          className="
            text-[13px]
            font-medium
            leading-none
            text-[#111]

            sm:text-[20px]

            md:text-[25px]

            lg:text-[30px]
          "
        >
          اختاري إطلالتك
        </h2>

        <button
          type="button"
          onClick={() => navigate("/looks")}
          className="
    flex
    items-center
    gap-[2px]
    leading-none
    text-[#D4146A]

    sm:gap-[3px]

    md:gap-[4px]
  "
        >
          <span
            className="
      !text-[10px]
      !leading-none
        font-medium
      sm:!text-[7px]

      md:!text-[10px]

      lg:!text-[12px]
    "
          >
            عرض الكل
          </span>

          <ArrowLeft
            className="
      h-[10px]
      w-[10px]

      sm:h-[10px]
      sm:w-[10px]

      md:h-[13px]
      md:w-[13px]

      lg:h-[15px]
      lg:w-[15px]
    "
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Carousel */}
      <div
        className="
          flex
          w-full
          gap-[8px]
          overflow-x-auto
          scrollbar-none
          snap-x
          snap-mandatory
          pb-[2px]

          sm:gap-[10px]

          md:gap-[14px]

          lg:gap-[18px]
        "
      >
        {/* Third card preview */}
        <div
          className="
            min-w-[30px]
            shrink-0
            rounded-[10px]
            bg-[#E8BCBA]

            sm:h-[108px]
            sm:min-w-[58px]
            sm:rounded-[12px]

            md:h-[135px]
            md:min-w-[72px]
            md:rounded-[14px]

            lg:h-[160px]
            lg:min-w-[85px]
            lg:rounded-[16px]
          "
        />
        {looks.map((look) => (
          <article
            key={look.id}
            className={`
    relative
    h-[65px]
    min-w-[44%]
    shrink-0
    overflow-hidden
    rounded-[10px]
    snap-start

    sm:h-[108px]
    sm:min-w-[43%]
    sm:rounded-[12px]

    md:h-[135px]
    md:min-w-[45%]
    md:rounded-[14px]

    lg:h-[160px]
    lg:min-w-[44%]
    lg:rounded-[16px]

    ${look.type === "night" ? "bg-[#292727]" : "bg-[#cabdb0]"}
  `}
          >
            {/* Image */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-full
                w-[58%]
              "
            >
              <img
                src={look.image}
                alt={look.title}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* Text */}
            <div
              dir="ltr"
              className="
    absolute
    right-0
    top-0
    z-10
    flex
    h-full
    w-[48%]
    flex-col
    items-center
    justify-center
    px-[4px]
    text-center

    sm:px-[6px]

    md:px-[9px]

    lg:px-[12px]
  "
            >
              {/* Title + Icon */}
              <div className="flex items-center justify-center gap-[3px]">
                <h3
                  className="
        whitespace-nowrap
        text-[10px]
        font-normal
        leading-tight
        text-white

        sm:text-[12px]

        md:text-[16px]

        lg:text-[19px]
      "
                >
                  {look.title}
                </h3>

                {look.type === "night" ? (
                  <Moon
                    className="
          h-[20px]
          w-[20px]
          shrink-0
          text-white

          sm:h-[14px]
          sm:w-[14px]

          md:h-[18px]
          md:w-[18px]

          lg:h-[22px]
          lg:w-[22px]
        "
                    strokeWidth={1.3}
                  />
                ) : (
                  <Sun
                    className="
          h-[20px]
          w-[22px]
          shrink-0
          text-white

          sm:h-[14px]
          sm:w-[14px]

          md:h-[18px]
          md:w-[18px]

          lg:h-[22px]
          lg:w-[22px]
        "
                    strokeWidth={1.3}
                  />
                )}
              </div>

              {/* Description */}
              <p
                className="
      mt-[3px]
      whitespace-nowrap
      text-[6px]
      leading-tight
      text-white

      sm:mt-[4px]
      sm:text-[7px]

      md:mt-[6px]
      md:text-[10px]

      lg:mt-[8px]
      lg:text-[13px]
    "
              >
                {look.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
