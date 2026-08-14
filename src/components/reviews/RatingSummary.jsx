import { Star } from "lucide-react";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getRatingSummary, ratingSummaryMock } from "../../services/engagement.js";

export default function RatingSummary() {
  const summary = useAsyncData(getRatingSummary, ratingSummaryMock);

  const ratings = summary.distribution;

  return (
    <section
      className="
        mt-3
        grid
        grid-cols-[38%_62%]
        items-center
        gap-3

        sm:mt-7
        sm:gap-6

        md:mt-9
        md:grid-cols-[35%_65%]
        md:gap-10
      "
    >
      {/* Overall */}
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <div
          className="
            text-[45px]
            font-medium
            leading-none
            text-[#111]

            sm:text-[78px]

            md:text-[100px]
          "
        >
          {summary.overall}
        </div>

        <div
          dir="ltr"
          className="
            mt-1
            flex
            items-center
            gap-1

            sm:gap-1.5

            md:gap-2
          "
        >
          {[0, 1, 2, 3].map((item) => (
            <Star
              key={item}
              size={18}
              fill="#C91F72"
              strokeWidth={0}
              className="sm:size-[25px] md:size-[31px]"
            />
          ))}

          <div className="relative">
            <Star
              size={18}
              fill="none"
              stroke="#C91F72"
              strokeWidth={1.2}
              className="sm:size-[25px] md:size-[31px]"
            />

            <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
              <Star
                size={18}
                fill="#C91F72"
                strokeWidth={0}
                className="max-w-none sm:size-[25px] md:size-[31px]"
              />
            </div>
          </div>
        </div>

        <span
          className="
            mt-1
            text-[10px]
            text-[#555]

            sm:text-[13px]

            md:text-[16px]
          "
        >
          5 من
        </span>

        <span
            dir="rtl"
          className="
            mt-1
            text-[9px]
            text-[#999]

            sm:text-[12px]

            md:text-[15px]
          "
        >
          {summary.total}
        </span>
      </div>

      {/* Distribution */}
      <div
        className="
          flex
          flex-col
          gap-2

          sm:gap-3

          md:gap-4
        "
      >
        {ratings.map((item) => (
          <div
            key={item.rating}
            dir="ltr"
            className="
              flex
              items-center
              gap-2

              sm:gap-3

              md:gap-4
            "
          >
            <span
              className="
                w-[8px]
                text-[9px]
                text-[#555]

                sm:text-[12px]

                md:text-[15px]
              "
            >
              {item.rating}
            </span>

            <Star
              size={9}
              fill="#C91F72"
              strokeWidth={0}
              className="
                shrink-0
                sm:size-[16px]
                md:size-[19px]
              "
            />

            <div
              className="
                h-[6px]
                min-w-0
                flex-1
                overflow-hidden
                rounded-full
                bg-[#F0F0F0]

                sm:h-[8px]

                md:h-[10px]
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-[#C91F72]
                "
                style={{
                  width: `${item.percent}%`,
                }}
              />
            </div>

            <span
              className="
                w-[30px]
                text-left
                text-[9px]
                text-[#555]

                sm:w-[36px]
                sm:text-[12px]

                md:w-[44px]
                md:text-[15px]
              "
            >
              {item.percent}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
