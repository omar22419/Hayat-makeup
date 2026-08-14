import { ChevronLeft } from "lucide-react";

export default function LatestArticleCard({ article }) {
  return (
    <article
      dir="ltr"
      className="
        relative
        flex
        h-[80px]
        w-full
        items-center
        gap-2
        overflow-hidden
        rounded-[12px]
        border
        border-[#EAEAEA]
        bg-white
        px-2
        py-2

        sm:h-[125px]
        sm:gap-3
        sm:rounded-[15px]
        sm:px-3

        md:h-[155px]
        md:gap-4
        md:rounded-[18px]
        md:px-4
      "
    >
      {/* Left Side - Arrow + Date */}
      <div
        className="
        flex
        h-full
        w-[30px]
        shrink-0
        flex-col
        items-center
        justify-between
        text-[#C91F72]

        sm:w-[42px]
        sm:py-4

        md:w-[52px]
        md:py-5


          sm:w-[42px]
          sm:py-2

          md:w-[52px]
          md:py-3
        "
      >
        {/* Arrow */}
        <button
          type="button"
          aria-label="فتح المقال"
          className="
    mt-6
    flex
    items-center
    justify-center

    sm:mt-3

    md:mt-4
  "
        >
          <ChevronLeft
            size={18}
            strokeWidth={1.5}
            className="
      sm:size-[22px]
      md:size-[27px]
    "
          />
        </button>
        {/* Date */}
        <time
          dir="rtl"
          className="
            whitespace-nowrap
            text-[7px]
            leading-none
            text-[#999]

            sm:text-[10px]

            md:text-[13px]
          "
        >
          {article.date}
        </time>
      </div>

      {/* Content */}
      <div
        dir="rtl"
        className="
          flex
          h-full
          min-w-0
          flex-1
          flex-col
          justify-between
          py-0.5
          text-right

          sm:py-1

          md:py-2
        "
      >
        {/* Category */}
        <span
          className="
            truncate
            text-[8px]
            font-medium
            leading-tight
            text-[#C91F72]

            sm:text-[11px]

            md:text-[14px]
          "
        >
          {article.category}
        </span>

        {/* Title */}
        <h3
          className="
            line-clamp-1
            text-[10px]
            font-medium
            leading-4
            text-[#111]

            sm:text-[16px]
            sm:leading-6

            md:text-[21px]
            md:leading-7
          "
        >
          {article.title}
        </h3>

        {/* Description */}
        <p
          className="
            line-clamp-2
            text-[9px]
            leading-4
            text-[#888]

            sm:text-[11px]
            sm:leading-5

            md:text-[15px]
            md:leading-6
          "
        >
          {article.description}
        </p>
      </div>

      {/* Image */}
      <img
        src={article.image}
        alt={article.title}
        className="
          h-[74px]
          w-[92px]
          shrink-0
          rounded-[7px]
          object-cover

          sm:h-[100px]
          sm:w-[135px]
          sm:rounded-[9px]

          md:h-[125px]
          md:w-[170px]
          md:rounded-[11px]

          lg:h-[135px]
          lg:w-[185px]
        "
      />
    </article>
  );
}
