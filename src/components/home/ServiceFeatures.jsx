import { BadgeCheck, Truck, Gift, Undo2 } from "lucide-react";

const features = [
  {
    label: "منتجات أصلية",
    icon: BadgeCheck,
  },
  {
    label: "توصيل سريع",
    icon: Truck,
  },
  {
    label: "تغليف فاخر",
    icon: Gift,
  },
  {
    label: "إرجاع سهل",
    icon: Undo2,
  },
];

export default function ServiceFeatures() {
  return (
    <section
      dir="rtl"
      className="
        px-[12px] pt-[9px]

        sm:px-[16px] sm:pt-[12px]

        md:px-[24px] md:pt-[16px]

        lg:px-[32px] lg:pt-[20px]
      "
    >
      <div
        className="
          mx-auto flex w-full
          overflow-hidden
          rounded-[8px]
          border border-[#E8E8E8]
          bg-gray-50

          sm:rounded-[10px]

          md:rounded-[12px]

          lg:rounded-[14px]
        "
      >
        {features.map(({ label, icon: Icon }, index) => (
          <div
            key={label}
            className={`
              flex min-w-0 flex-1
              items-center justify-center
              gap-[3px]
              px-[2px]
              py-[6px]

              sm:gap-[5px]
              sm:px-[4px]
              sm:py-[8px]

              md:gap-[7px]
              md:px-[6px]
              md:py-[10px]

              lg:gap-[9px]
              lg:px-[9px]
              lg:py-[12px]

              ${
                index !== features.length - 1 ? "border-l border-[#E5E5E5]" : ""
              }
            `}
          >
            <Icon
              className="
                h-[12px] w-[12px]
                shrink-0
                text-[#D4146A]

                sm:h-[16px] sm:w-[16px]

                md:h-[20px] md:w-[20px]

                lg:h-[24px] lg:w-[24px]
              "
              strokeWidth={1.7}
            />
            <span
              className="
                whitespace-nowrap
                text-[8px]
                font-normal
                text-[#222222]

                sm:text-[10px]

                md:text-[13px]

                lg:text-[16px]
              "
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
