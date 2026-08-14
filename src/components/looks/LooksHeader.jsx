import { Heart } from "lucide-react";

export default function LooksHeader() {
  return (
    <section
      className="
        mb-4
        mt-4
        flex
        flex-col
        items-center
        text-center

        sm:mb-6
        sm:mt-6

        md:mb-8
        md:mt-8
      "
    >
      {/* Title */}
      <div className="relative">
        <h1
          className="
            whitespace-nowrap
            text-[20px]
            font-bold
            leading-tight
            text-[#111]

            sm:text-[32px]

            md:text-[40px]

            lg:text-[46px]
          "
        >
          اختاري إطلالتك
        </h1>

        {/* Heart - فوق شمال العنوان */}
        <Heart
          size={18}
          strokeWidth={1.6}
          className="
            absolute
            -left-5
            -top-4
            text-[#C91F72]

            sm:-left-7
            sm:-top-6
            sm:size-[28px]

            md:-left-9
            md:-top-7
            md:size-[34px]
          "
        />

        {/* Underline */}
        <span
          className="
            absolute
            -bottom-2
            right-0
            h-[2px]
            w-[38px]
            rounded-full
            bg-[#C91F72]

            sm:-bottom-3
            sm:w-[55px]

            md:h-[3px]
            md:w-[70px]
          "
        />
      </div>

      {/* Subtitle */}
      <p
        className="
          mt-3
          text-[10px]
          leading-5
          text-[#999]

          sm:mt-5
          sm:text-[14px]

          md:mt-6
          md:text-[18px]

          lg:text-[20px]
        "
      >
        إطلالتك تبدأ من هنا
      </p>
    </section>
  );
}