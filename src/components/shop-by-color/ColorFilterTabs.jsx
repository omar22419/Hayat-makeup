import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getColorFilters, colorFiltersMock } from "../../services/catalog.js";

export default function ColorFilterTabs({
  activeColor,
  onChange,
}) {
  const colors = useAsyncData(getColorFilters, colorFiltersMock);

  return (
    <div
      className="
        mt-4
        w-full
        overflow-hidden

        sm:mt-6
        md:mt-7
      "
    >
      <div
        className="
          flex
          w-full
          items-center
          justify-between
          gap-1
        "
      >
        {colors.map((item) => {
          const active = activeColor === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`
                flex
                min-w-0
                flex-1
                items-center
                justify-center
                gap-1
                rounded-[9px]
                border
                px-1
                h-[30px]
                !text-[8px]
                font-medium
                whitespace-nowrap

                sm:h-[44px]
                sm:gap-2
                sm:px-2
                sm:text-[12px]

                md:h-[50px]
                md:px-3
                md:text-[15px]

                ${
                  active
                    ? "border-[#C91F72] bg-[#FFF0F5] text-[#C91F72]"
                    : "border-[#E5E5E5] bg-white text-[#111]"
                }
              `}
            >
              <span
                className="
                  h-[9px]
                  w-[9px]
                  shrink-0
                  rounded-full

                  sm:h-[16px]
                  sm:w-[16px]

                  md:h-[20px]
                  md:w-[20px]
                "
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="truncate">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}