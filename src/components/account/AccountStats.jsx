import { Heart, ShoppingBag, PackageCheck } from "lucide-react";

const icons = {
  favorites: Heart,
  cart: ShoppingBag,
  orders: PackageCheck,
};

export default function AccountStats({ stats }) {
  return (
    <section
      className="
        grid
        grid-cols-3
        gap-2

        sm:gap-4
      "
    >
      {stats.map((stat) => {
        const Icon = icons[stat.id] || PackageCheck;

        return (
          <button
            key={stat.id}
            type="button"
            onClick={stat.onClick}
            className="
              flex
              min-w-0
              flex-col
              items-center
              justify-center
              gap-1
              rounded-[12px]
              border
              border-[#EEEEEE]
              bg-white
              px-1
              py-2.5

              sm:gap-1.5
              sm:rounded-[16px]
              sm:py-4

              md:rounded-[20px]
              md:py-5
            "
          >
            <div
              className="
                flex
                h-[28px]
                w-[28px]
                items-center
                justify-center
                rounded-full
                bg-[#FBE3EF]
                text-[#D4146A]

                sm:h-[38px]
                sm:w-[38px]

                md:h-[48px]
                md:w-[48px]
              "
            >
              <Icon
                size={15}
                strokeWidth={1.6}
                className="
                  sm:size-[20px]

                  md:size-[25px]
                "
              />
            </div>

            <span
              className="
                text-[15px]
                font-bold
                leading-none
                text-[#111111]

                sm:text-[22px]

                md:text-[28px]
              "
            >
              {stat.value}
            </span>

            <span
              className="
                text-[9px]
                leading-none
                text-[#888888]

                sm:text-[12px]

                md:text-[15px]
              "
            >
              {stat.label}
            </span>
          </button>
        );
      })}
    </section>
  );
}
