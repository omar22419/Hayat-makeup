import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getMagazineTabs, magazineTabsMock } from "../../services/content.js";

export default function MagazineTabs({ activeTab, onChange }) {
  const tabs = useAsyncData(getMagazineTabs, magazineTabsMock);

  return (
    <div
      className="
        mt-3
        w-full
        border-b
        border-[#EEEEEE]
        sm:mt-7
        md:mt-9
      "
    >
      <div
        className="
          grid
          w-full
          grid-cols-5
          items-end
        "
      >
        {tabs.map((tab) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onChange(tab)}
              className={`
                relative
                flex
                h-[39px]
                min-w-0
                items-center
                justify-center
                whitespace-nowrap
                px-1
                text-center
                !text-[11px]
                font-medium
                text-[#111]

                sm:h-[48px]
                sm:px-2
                sm:text-[13px]

                md:h-[54px]
                md:px-3
                md:text-[16px]

                ${active ? "text-[#C91F72]" : ""}
              `}
            >
              {active && (
                <>
                  {/* Active Border */}
                  <span
                    className="
                      absolute
                      -inset-x-1
                      top-0
                      h-[35px]
                      rounded-full
                      border
                      border-[#C91F72]

                      sm:inset-x-2
                      sm:h-[44px]

                      md:h-[50px]
                    "
                  />

                  {/* Active Underline */}
                  <span
                    className="
                      absolute
                      bottom-[-2px]
                      left-0
                      right-0
                      h-[2px]
                      bg-[#C91F72]

                      sm:h-[4px]
                    "
                  />
                </>
              )}

              <span className="relative z-10">{tab}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
