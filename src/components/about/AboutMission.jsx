import { Heart } from "lucide-react";

export default function AboutMission() {
  return (
    <section
      className="
        mx-auto
        mt-1
        w-full
        max-w-[1000px]
        text-center

        sm:mt-5

        md:mt-8
      "
    >
      {/* Title */}
      <h2
        className="
          text-[15px]
          font-semibold
          text-[#111]

          sm:text-[28px]

          md:text-[36px]

          lg:text-[42px]
        "
      >
        مهمتنا
      </h2>

      {/* Underline */}
      <span
        className="
          mx-auto
          mt-2
          block
          h-[3px]
          w-[45px]
          rounded-full
          bg-[#C91F72]

          sm:w-[60px]

          md:w-[75px]
        "
      />

      {/* Description + Heart */}
      <div
        className="
          mx-auto
          mt-3
          flex
          max-w-[80%]
          items-center
          justify-center
          gap-3
          text-right
          sm:mt-4
          sm:gap-4

          md:gap-5
        "
      >

        <p
          className="
          m-0
          text-[11px]
          leading-5
          text-[#555]
          
          sm:text-[13px]
          sm:leading-6

            md:text-[17px]
            md:leading-7
          "
        >
          نقدم منتجات تجميل أصلية عالية الجودة تلهم كل امرأة
          لتشعر بالجمال والثقة كل يوم.
        </p>
            <Heart
              size={28}
              strokeWidth={1.5}
              className="
                shrink-0
                text-[#C91F72]
    
                sm:size-[34px]
    
                md:size-[42px]
              "
            />
      </div>
    </section>
  );
}