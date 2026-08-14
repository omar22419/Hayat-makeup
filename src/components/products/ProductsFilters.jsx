import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const filters = ["السعر", "النوع", "الدرجة", "اللمسة", "التقييم", "ترتيب"];

export default function ProductsFilters({ active, onChange }) {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div
      dir="rtl"
      className="
        mt-[4px]
        w-full

        sm:mt-[18px]

        md:mt-[24px]

        lg:mt-[28px]
      "
    >
      <div
        className="
          flex
          w-full
          items-center
          justify-between
          gap-[4px]

          sm:gap-[6px]

          md:gap-[9px]

          lg:gap-[12px]
        "
      >
        {/* Filters */}
        {filters.map((filter) => {
          const isSelected = active === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => {
                onChange(isSelected ? null : filter);
                setFilterActive(false);
              }}
              className={`
                flex
                h-[25px]
                min-w-0
                flex-1
                shrink
                items-center
                justify-center
                gap-[2px]
                rounded-[5px]
                border
                bg-white
                px-[4px]
                transition-colors
                duration-150

                sm:h-[36px]
                sm:gap-[4px]
                sm:px-[7px]
                sm:rounded-[8px]

                md:h-[43px]
                md:gap-[5px]
                md:px-[10px]
                md:rounded-[9px]

                lg:h-[50px]
                lg:gap-[7px]
                lg:px-[14px]
                lg:rounded-[10px]

                ${
                  isSelected
                    ? "border-[#D4146A] text-[#D4146A]"
                    : "border-[#EEEEEE] text-[#222222]"
                }
              `}
            >
              <span
                className="
                  whitespace-nowrap
                  text-[8px]
                  font-normal
                  leading-none

                  sm:text-[9px]

                  md:text-[12px]

                  lg:text-[15px]
                "
              >
                {filter}
              </span>

              <ChevronDown
                className="
                  h-[10px]
                  w-[10px]
                  shrink-0

                  sm:h-[11px]
                  sm:w-[11px]

                  md:h-[14px]
                  md:w-[14px]

                  lg:h-[17px]
                  lg:w-[17px]
                "
                strokeWidth={1.7}
              />
            </button>
          );
        })}

        {/* Filter Button */}
        <button
          type="button"
          onClick={() => {
            setFilterActive((prev) => !prev);
            onChange(null);
          }}
          className={`
            flex
            h-[25px]
            min-w-0
            flex-1
            shrink
            items-center
            justify-center
            gap-[2px]
            rounded-[5px]
            border
            bg-white
            px-[4px]
            transition-colors
            duration-150

            sm:h-[36px]
            sm:gap-[4px]
            sm:px-[7px]
            sm:rounded-[8px]

            md:h-[43px]
            md:gap-[5px]
            md:px-[10px]
            md:rounded-[9px]

            lg:h-[50px]
            lg:gap-[7px]
            lg:px-[14px]
            lg:rounded-[10px]

            ${
              filterActive
                ? "border-[#D4146A] text-[#D4146A]"
                : "border-[#EEEEEE] text-[#222222]"
            }
          `}
        >
          {/* Icon */}
          <SlidersHorizontal
            className="
              h-[10px]
              w-[10px]
              shrink-0

              sm:h-[11px]
              sm:w-[11px]

              md:h-[14px]
              md:w-[14px]

              lg:h-[17px]
              lg:w-[17px]
            "
            strokeWidth={1.6}
          />

          {/* Label */}
          <span
            className="
              whitespace-nowrap
              text-[8px]
              font-normal
              leading-none

              sm:text-[9px]

              md:text-[12px]

              lg:text-[15px]
            "
          >
            تصفية
          </span>
        </button>
      </div>
    </div>
  );
}
