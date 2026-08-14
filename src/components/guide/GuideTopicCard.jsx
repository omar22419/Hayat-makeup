import { ChevronLeft } from "lucide-react";

export default function GuideTopicCard({ topic }) {
  const Icon = topic.icon;

  return (
    <article
      className="
        flex
        h-[60px]
        w-full
        items-center
        gap-3
        rounded-[6px]
        border
        border-[#eeeeee]
        bg-white
        px-2
        shadow-[0_1px_4px_rgba(0,0,0,0.02)]

        sm:h-[112px]
        sm:gap-3
        sm:rounded-[14px]
        sm:px-3

        md:h-[135px]
        md:gap-5
        md:rounded-[18px]
        md:px-4

        lg:h-[150px]
      "
    >
      {/* Arrow */}
      <div className="shrink-0 text-[#999] order-5">
        <ChevronLeft
          size={18}
          strokeWidth={1.5}
          className="sm:size-[21px] md:size-[24px]"
        />
      </div>

      {/* Image */}
      <div
        className="
          order-4
          h-[50px]
          w-[85px]
          shrink-0
          overflow-hidden
          rounded-[9px]

          sm:h-[82px]
          sm:w-[135px]

          md:h-[105px]
          md:w-[175px]

          lg:h-[115px]
          lg:w-[190px]
        "
      >
        <img
          src={topic.image}
          alt={topic.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className="
          order-3
          min-w-0
          flex-1
          text-right
        "
      >
        <h3
          className="
            line-clamp-1
            text-[10px]
            font-semibold
            leading-5

            sm:text-[15px]

            md:text-[19px]

            lg:text-[22px]
          "
        >
          {topic.title}
        </h3>

        <p
          className="
            mt-0.5
            line-clamp-2
            text-[8px]
            leading-3
            text-[#888]

            sm:mt-1
            sm:text-[11px]
            sm:leading-5

            md:text-[14px]
            md:leading-6

            lg:text-[16px]
          "
        >
          {topic.description}
        </p>
      </div>

      {/* Icon */}
      <div
        className="
          order-1
          flex
          h-[30px]
          w-[30px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#fff1f5]
          text-[#C91F72]

          sm:h-[46px]
          sm:w-[46px]

          md:h-[56px]
          md:w-[56px]
        "
      >
        <Icon
          size={19}
          strokeWidth={1.5}
          className="sm:size-[23px] md:size-[28px]"
        />
      </div>
    </article>
  );
}
