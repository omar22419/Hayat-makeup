import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getReviewFilters, reviewFiltersMock } from "../../services/engagement.js";

export default function ReviewFilters({ activeFilter, onChange }) {
  const filters = useAsyncData(getReviewFilters, reviewFiltersMock);

  return (
    <section className="mt-2 sm:mt-7 md:mt-9">
      <h2
        className="
          text-right
          text-[15px]
          font-semibold
          text-[#111]

          sm:text-[20px]

          md:text-[26px]
        "
      >
        تصفية التقييمات
      </h2>

      <div
        dir="rtl"
        className="
          mt-2
          flex
          w-full
          gap-2
          overflow-x-auto
          no-scrollbar
          pb-1

          sm:mt-3
          sm:gap-3
        "
      >
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => onChange(filter)}
              className={`
                flex
                h-[25px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                px-[11px]
                !text-[9px]
                font-medium

                sm:h-[42px]
                sm:px-4
                sm:text-[12px]

                md:h-[48px]
                md:px-5
                md:text-[15px]

                ${
                  active
                    ? "border-[#C91F72] bg-[#fff0f59f] text-[#C91F72]"
                    : "border-[#E3E3E3] bg-white text-[#333]"
                }
              `}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </section>
  );
}
