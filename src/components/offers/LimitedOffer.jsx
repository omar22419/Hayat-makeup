import { Clock3 } from "lucide-react";
import limitedOfferImg from "../../assets/offers/limited-offer.png";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getLimitedOfferTime, limitedOfferTimeMock } from "../../services/catalog.js";

export default function LimitedOffer() {
  const timeBoxes = useAsyncData(getLimitedOfferTime, limitedOfferTimeMock);

  return (
    <section className="w-full mt-3">
      <div
        className="
          relative
          flex
          min-h-[105px]
          w-full
          overflow-hidden
          rounded-[10px]
          bg-[#fff0f5]
          px-2
          py-2

          sm:min-h-[145px]
          sm:rounded-[14px]
          sm:px-4
          sm:py-3

          md:min-h-[190px]
          md:rounded-[18px]
          md:px-6
          md:py-5

          lg:min-h-[230px]
          lg:px-8
          lg:py-6
        "
      >
        {/* Clock / Image - Left */}
        <img
          src={limitedOfferImg}
          alt="عرض لفترة محدودة"
          className="
            absolute
            bottom-0
            left-0
            h-full
            w-[38%]
            object-contain
            object-left-bottom

            sm:w-[37%]

            md:w-[36%]

            lg:w-[35%]
          "
        />

        {/* Content - Right */}
        <div dir="ltr"
          className="
            relative
            z-10
            ml-auto
            flex
            w-[62%]
            flex-col
            items-end
            text-right

            sm:w-[63%]

            md:w-[64%]

            lg:w-[65%]
          "
        >
          {/* Title */}
          <div
            className="
              flex
              items-center
              justify-start
              gap-1
              text-[#C91F72]

              sm:gap-1.5

              md:gap-2
            "
          >
            <h2
              className="
                whitespace-nowrap
                text-[14px]
                font-semibold
                leading-tight

                sm:text-[18px]

                md:text-[25px]

                lg:text-[30px]
              "
            >
              عرض لفترة محدودة
            </h2>

            <Clock3
              size={15}
              strokeWidth={1.5}
              className="
                shrink-0

                sm:size-[20px]

                md:size-[26px]

                lg:size-[30px]
              "
            />
          </div>

          {/* Description */}
          <p
            className="
              mt-0.5
              whitespace-nowrap
              text-[9px]
              leading-tight
              text-[#222]

              sm:mt-1
              sm:text-[11px]

              md:text-[15px]

              lg:text-[17px]
            "
          >
            لا يفوتك! العرض ينتهي خلال
          </p>

          {/* Time Boxes */}
          <div
            dir="rtl"
            className="
              mt-1
              grid
              w-full
              grid-cols-4
              gap-1

              sm:mt-3
              sm:gap-2

              md:mt-4
              md:gap-3

              lg:mt-5
              lg:gap-4
            "
          >
            {timeBoxes.map((box) => (
              <div
                key={box.label}
                className="
                  flex
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  rounded-[4px]
                  border
                  border-[#ead9df]
                  bg-white
                
                  py-2

                  sm:rounded-[8px]
                  sm:py-2.5

                  md:rounded-[10px]
                  md:py-3

                  lg:py-4
                "
              >
                <strong
                  className="
                    text-[15px]
                    font-bold
                    leading-none
                    text-[#C91F72]

                    sm:text-[18px]

                    md:text-[24px]

                    lg:text-[28px]
                  "
                >
                  {box.value}
                </strong>

                <span
                  className="
                    mt-1
                    whitespace-nowrap
                    text-[9px]
                    leading-none
                    font-medium
                    text-[#333]

                    sm:text-[9px]

                    md:text-[12px]

                    lg:text-[14px]
                  "
                >
                  {box.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}