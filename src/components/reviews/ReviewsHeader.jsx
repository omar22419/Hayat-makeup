import { Pencil } from "lucide-react";

export default function ReviewsHeader() {
  return (
    <section
      className="
        mt-4
        flex
        items-start
        justify-between
        gap-3

        sm:mt-6

        md:mt-8
      "
    >
      {/* Write Review */}
      <button
        type="button"
        className="
          flex
          shrink-0
          items-center
          gap-1
          rounded-full
          border
          border-[#C91F72]
          px-3
          py-2
          !text-[9px]
          font-medium
          text-[#C91F72]

          sm:gap-2
          sm:px-4
          sm:py-2.5
          sm:text-[12px]

          md:px-5
          md:py-3
          md:text-[15px]
        "
      >

        <span>اكتبي تقييم</span>
        <Pencil
          size={15}
          strokeWidth={1.6}
          className="sm:size-[18px] md:size-[21px]"
        />
      </button>

      {/* Title */}
      <div className="min-w-0 text-right">
        <h1
          className="
            text-[18px]
            font-semibold
            leading-tight
            text-[#111]

            sm:text-[29px]

            md:text-[39px]

            lg:text-[46px]
          "
        >
          تقييمات العميلات
        </h1>

        <p
          className="
            mt-1
            text-[9px]
            leading-4
            text-[#777]

            sm:text-[13px]

            md:text-[17px]
          "
        >
          آراء حقيقية من جمال حقيقي
        </p>
      </div>
    </section>
  );
}
