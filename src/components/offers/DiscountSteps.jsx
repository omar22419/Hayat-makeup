import { BadgePercent, Gift, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: BadgePercent,
    title: "احصلي على خصم تلقائي",
  },
  {
    icon: ShoppingBag,
    title: "أضيفي قطعتين إلى السلة",
  },
  {
    icon: Gift,
    title: "ينطبق على منتجات مختارة",
  },
];

const separators = ["<", ">"];

export default function DiscountSteps() {
  const navigate = useNavigate();

  return (
    <section className="mt-2 sm:mt-7 md:mt-9">
      <h2
        className="
          mb-1
          text-right
          text-[13px]
          font-semibold

          sm:mb-3
          sm:text-[18px]

          md:text-[23px]
        "
      >
        اشتري قطعتين واحصلي على خصم
      </h2>

      <div
        className="
          flex
          items-stretch
          gap-[6px]
          rounded-[10px]
          bg-[#fff1f6]
          p-[6px]

          sm:gap-3
          sm:rounded-[14px]
          sm:p-[10px]

          md:rounded-[18px]
          md:p-[14px]
        "
      >
        {/* Steps grid - icons/arrows share row 1, captions sit in row 2 */}
        <div
          className="
            grid
            flex-1
            grid-cols-[1fr_auto_1fr_auto_1fr]
            items-center
            gap-x-[2px]
            gap-y-[3px]

            sm:gap-x-1
            sm:gap-y-1.5

            md:gap-x-2
            md:gap-y-2
          "
        >
          {steps.map(({ icon: Icon, title }, index) => (
            <>
              <Icon
                key={`icon-${title}`}
                className="
                  h-[16px]
                  w-[16px]
                  shrink-0
                  justify-self-center
                  text-[#C91F72]

                  sm:h-6
                  sm:w-6

                  md:h-8
                  md:w-8
                "
                strokeWidth={1.4}
                style={{ gridColumn: index * 2 + 1, gridRow: 1 }}
              />

              <span
                key={`caption-${title}`}
                className="
                  whitespace-nowrap
                  text-center
                  text-[7px]
                  leading-[1.3]
                  text-[#444]

                  sm:text-[10px]

                  md:text-[13px]
                "
                style={{ gridColumn: index * 2 + 1, gridRow: 2 }}
              >
                {title}
              </span>

              {index !== steps.length - 1 && (
                <span
                  key={`sep-${index}`}
                  className="
                    justify-self-center
                    text-[10px]
                    text-[#d9a5bd]

                    sm:text-[14px]

                    md:text-[18px]
                  "
                  style={{ gridColumn: index * 2 + 2, gridRow: 1 }}
                >
                  {separators[index]}
                </span>
              )}
            </>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => navigate("/products")}
          className="
            flex
            items-center
            justify-center
            whitespace-nowrap
            rounded-full
            bg-[#C91F72]
            my-1 
            ml-5
            px-[10px]
            !text-[8px]
            font-bold
            text-white

            sm:rounded-[10px]
            sm:px-5
            sm:text-[12px]

            md:px-7
            md:text-[15px]
          "
        >
          تسوقي الآن
        </button>
      </div>
    </section>
  );
}