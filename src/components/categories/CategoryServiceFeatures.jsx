import { Fragment } from "react";
import { RotateCcw, Truck, BadgeCheck } from "lucide-react";

const features = [
  {
    id: 3,
    title: "منتجات أصلية",
    description: "100% مضمونة",
    icon: BadgeCheck,
  },
  {
    id: 2,
    title: "توصيل سريع",
    description: "لجميع مناطق المملكة",
    icon: Truck,
  },
  {
    id: 1,
    title: "إرجاع سهل",
    description: "خلال 14 يوم",
    icon: RotateCcw,
  },
];

export default function CategoryServiceFeatures() {
  return (
    <section
      dir="rtl"
      className="
        mx-auto
        flex
        h-[40px]
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-[5px]
        border
        border-[#EEEEEE]
        bg-white
        px-[1px]
        shadow-[0_1px_5px_rgba(0,0,0,0.04)]

        sm:h-[62px]
        sm:px-[10px]
        sm:rounded-[7px]

        md:h-[76px]
        md:px-[16px]
        md:rounded-[9px]

        lg:h-[88px]
        lg:max-w-[1100px]
        lg:px-[22px]
        lg:rounded-[11px]
      "
    >
      <div
        className="
          flex
          w-full
          items-center
          justify-between
        "
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Fragment key={feature.id}>
              {/* Feature */}
              <div
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-[4px]

                  sm:gap-[6px]

                  md:gap-[8px]

                  lg:gap-[10px]
                "
              >
                {/* Icon */}
                <Icon
                  className="
                    h-[22px]
                    w-[22px]
                    shrink-0
                    text-[#D4146A]

                    sm:h-[20px]
                    sm:w-[20px]

                    md:h-[24px]
                    md:w-[24px]

                    lg:h-[28px]
                    lg:w-[28px]
                  "
                  strokeWidth={1.5}
                />

                {/* Text */}
                <div className="text-right">
                  <h3
                    className="
                      whitespace-nowrap
                      text-[10px]
                      font-semibold
                      leading-[1.3]
                      text-[#111111]

                      sm:text-[8px]

                      md:text-[10px]

                      lg:text-[12px]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-[1px]
                      whitespace-nowrap
                      text-[8px]
                      font-normal
                      leading-[1.3]
                      text-[#484848]

                      sm:text-[7px]

                      md:text-[8px]

                      lg:text-[10px]
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index !== features.length - 1 && (
                <div
                  className="
                    h-[23px]
                    w-px
                    shrink-0
                    bg-[#E5E5E5]

                    sm:h-[34px]

                    md:h-[42px]

                    lg:h-[50px]
                  "
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
