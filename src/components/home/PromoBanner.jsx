import { Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import promoBanner from "../../assets/promo-banner.jpeg";

export default function PromoBanner() {
  const navigate = useNavigate();

  return (
    <section
      dir="rtl"
      className="
        px-[12px]
        pt-[10px]

        sm:px-[16px]
        sm:pt-[20px]

        md:px-[24px]
        md:pt-[28px]

        lg:px-[32px]
        lg:pt-[36px]
      "
    >
      <div
        className="
          relative
          flex
          h-[55px]
          w-full
          overflow-hidden
          rounded-[9px]
          bg-[#FFF0F4]

          sm:h-[95px]
          sm:rounded-[11px]

          md:h-[120px]
          md:rounded-[14px]

          lg:h-[145px]
          lg:rounded-[17px]
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-[45%]
            overflow-hidden

            sm:w-[27%]

            md:w-[28%]

            lg:w-[30%]
          "
        >
          <img
            src={promoBanner}
            alt="العروض"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            absolute
            right-0
            top-0
            flex
            h-full
            w-[65%]
            flex-col
            items-center
            justify-center
            px-[5px]

            sm:w-[73%]
            sm:px-[8px]

            md:w-[72%]
            md:px-[12px]

            lg:w-[70%]
            lg:px-[18px]
          "
        >
          {/* Title */}
          <span
            className="
              mb-[3px]
              text-[13px]
              font-medium
              leading-none
              text-[#C91868]

              sm:mb-[4px]
              sm:text-[18px]

              md:mb-[6px]
              md:text-[24px]

              lg:mb-[7px]
              lg:text-[30px]
            "
          >
            العروض
          </span>

          {/* Bottom Content */}
          <div
            className="
    flex
    w-full
    flex-row
    items-center
    justify-center
    gap-[4px]

    sm:gap-[7px]

    md:gap-[11px]

    lg:gap-[15px]
  "
          >
            {/* Tag Icon */}
            <Tag
              className="
          h-[35px]
          w-[35px]
          shrink-0
            rotate-[90deg]
      text-[#D4146A]

      sm:h-[21px]
      sm:w-[21px]

      md:h-[28px]
      md:w-[28px]

      lg:h-[36px]
      lg:w-[36px]

    "
              strokeWidth={1.5}
            />

            {/* Discount */}
            <div
              dir="rtl"
              className="
      flex
      items-baseline
      gap-[1px]
      whitespace-nowrap
    "
            >
              <span
                className="
        text-[9px]
        font-medium
        text-[#222]

        sm:text-[7px]

        md:text-[9px]

        lg:text-[12px]
      "
              >
                خصومات تصل إلى
              </span>

              <span
                dir="ltr"
                className="
                ml-2
        text-[20px]
        font-medium
        leading-none
        text-[#C91868]

        sm:text-[25px]

        md:text-[32px]

        lg:text-[40px]
      "
              >
                30%
              </span>
            </div>

            {/* Shop Button */}
            <button
              type="button"
              onClick={() => navigate("/offers")}
              className="
    flex
    h-[19px]
    w-[58px]
    shrink-0
    items-center
    justify-center
    rounded-full
    bg-[#D4146A]
    !text-[8px]
    !leading-none
    text-white

    sm:h-[19px]
    sm:w-[72px]
    sm:!text-[7px]

    md:h-[24px]
    md:w-[90px]
    md:!text-[9px]

    lg:h-[29px]
    lg:w-[110px]
    lg:!text-[11px]
  "
            >
              تسوقي الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
