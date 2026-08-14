import { Lightbulb, PackageOpen } from "lucide-react";

export default function SkinTypeAdvice() {
  return (
    <section
      className="
        mt-2
        w-full
        overflow-hidden
        rounded-[11px]
        bg-[#FFF4F7]

        sm:mt-5
        sm:rounded-[15px]

        md:mt-7
        md:rounded-[19px]
      "
    >
      <div
        className="
          relative
          flex
          min-h-[58px]
          items-center
          px-2
          py-2

          sm:min-h-[80px]
          sm:px-4
          sm:py-3

          md:min-h-[105px]
          md:px-6
          md:py-4
        "
      >
        {/* Left - Products Illustration */}
        <div
          className="
            flex
            w-[27%]
            shrink-0
            items-center
            justify-center
            text-[#C91F72]

            sm:w-[25%]

            md:w-[23%]
          "
        >
          <PackageOpen
            size={34}
            strokeWidth={1.3}
            className="
              sm:size-[48px]
              md:size-[62px]
            "
          />
        </div>

        {/* Text */}
        <div
          className="
            min-w-0
            flex-1
            pr-[30px]
            text-right

            sm:pr-[40px]

            md:pr-[52px]
          "
        >
          <h2
            className="
              text-[11px]
              font-semibold
              leading-4
              text-[#C91F72]

              sm:text-[16px]
              sm:leading-5

              md:text-[22px]
              md:leading-6
            "
          >
            نصيحة جمال
          </h2>

          <p
            className="
              mt-0.5
              text-[8px]
              leading-3
              text-[#555]

              sm:mt-1
              sm:text-[10px]
              sm:leading-4

              md:text-[14px]
              md:leading-5
            "
          >
            تذكري أن بشرتك تتغير مع الفصول والروتين.
            راجعي نوع بشرتك باستمرار للحصول على أفضل النتائج.
          </p>
        </div>

        {/* One Lightbulb - vertically centered */}
        <div
          className="
            absolute
            right-2
            top-1/2
            z-10
            -translate-y-1/2
            flex
            items-center
            justify-center
            text-[#C91F72]

            sm:right-4

            md:right-6
          "
        >
          <Lightbulb
            size={30}
            strokeWidth={1.4}
            className="
              sm:size-[40px]
              md:size-[52px]
            "
          />
        </div>
      </div>
    </section>
  );
}