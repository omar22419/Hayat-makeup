import { SlidersHorizontal } from "lucide-react";

const filters = ["الكل", "المكياج", "العناية بالبشرة", "الأدوات"];

export default function NewArrivalsFilters({ active, onChange }) {
  return (
    <section className="mt-2 w-full overflow-x-auto no-scrollbar">
      <div className="flex min-w-max items-center gap-[6px] sm:gap-3 md:gap-4 lg:gap-5 md:justify-start">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`h-[30px] whitespace-nowrap rounded-[10px] border px-[14px] !text-[11px] transition sm:h-[48px] sm:px-7 sm:text-[15px] md:h-[52px] md:px-9 md:!text-[16px] lg:h-[56px] lg:px-10 lg:!text-[17px] ${
              active === filter
                ? "border-[#D41472] bg-[#D41472] text-white"
                : "border-[#D41472] bg-white text-[#C91F72]"
            }`}
          >
            {filter}
          </button>
        ))}

        <button
          type="button"
          className="flex h-[30px] items-center gap-[5px] whitespace-nowrap rounded-[10px] border border-[#F1D5E2] bg-white px-[15px] !text-[11px] text-[#C91F72] sm:h-[48px] sm:gap-2 sm:px-7 sm:text-[15px] md:h-[52px] md:px-9 md:!text-[16px] lg:h-[56px] lg:px-10 lg:!text-[17px]"
        >
          فلتر
          <SlidersHorizontal
            size={13}
            strokeWidth={2}
            className="sm:size-[18px] md:size-[20px] lg:size-[22px]"
          />
        </button>
      </div>
    </section>
  );
}