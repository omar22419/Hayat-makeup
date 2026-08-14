import { ArrowLeft } from "lucide-react";

export default function FeaturedArticle({ article }) {
  return (
    <article
      className="
        relative
        mt-5
        min-h-[175px]
        overflow-hidden
        rounded-[14px]
        bg-[#FDEBF1]

        sm:mt-7
        sm:min-h-[245px]
        sm:rounded-[18px]

        md:min-h-[330px]
        md:rounded-[22px]

        lg:min-h-[400px]
      "
    >
      {/* Image */}
      <img
        src={article.image}
        alt={article.title}
        className="
          absolute
          bottom-0
          right-0
          h-full
          w-[55%]
          object-cover
          object-center

          sm:w-[56%]

          md:w-[57%]

          lg:w-[58%]
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          flex
          w-[47%]
          flex-col
          justify-center
          px-4
          text-left

          sm:w-[45%]
          sm:px-6

          md:w-[44%]
          md:px-9

          lg:px-11
        "
      >
        {/* Badge */}
        <span
          className="
            mr-auto
            w-fit
            rounded-[7px]
            bg-[#fce2ea]
            px-2.5
            py-1
            text-[8px]
            font-medium
            text-[#cf2778]

            sm:px-3
            sm:py-1.5
            sm:text-[11px]

            md:px-4
            md:py-2
            md:text-[13px]
          "
        >
          مقال مميز
        </span>

        {/* Title */}
        <h2
          className="
            mt-2
            max-w-[95%]
            text-left
            text-[18px]
            font-semibold
            leading-[1.22]
            text-[#111]

            sm:mt-3
            sm:max-w-[92%]
            sm:text-[28px]
            sm:leading-[1.2]

            md:text-[38px]
            md:leading-[1.2]

            lg:text-[46px]
          "
        >
          {article.title}
        </h2>

        {/* Description */}
        <p
          className="
            mt-1
            max-w-[95%]
            text-left
            text-[9px]
            leading-5
            text-[#777]

            sm:mt-3
            sm:max-w-[90%]
            sm:text-[12px]
            sm:leading-6

            md:text-[16px]
            md:leading-7

            lg:text-[18px]
          "
        >
          {article.description}
        </p>

        {/* Button */}
        <button
          type="button"
          className="
            mt-3
            mr-auto
            flex
            w-fit
            items-center
            gap-1
            !text-[12px]
            font-medium
            text-[#C91F72]

            sm:mt-4
            sm:gap-2
            sm:text-[13px]

            md:mt-5
            md:text-[17px]
          "
        >
          اقرأ المقال
          <ArrowLeft
            size={14}
            strokeWidth={1.5}
            className="sm:size-[18px] md:size-[21px]"
          />
        </button>
      </div>
    </article>
  );
}
