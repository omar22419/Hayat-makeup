import { Heart } from "lucide-react";

export default function SkinTypeHeader() {
  return (
    <section
      className="
        mx-auto
        mt-1
        w-full
        max-w-[1000px]
        text-center

        sm:mt-6

        md:mt-8
      "
    >
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
        "
      >
        <h1
          className="
            text-[18px]
            font-semibold
            leading-tight
            text-[#111]

            sm:text-[29px]

            md:text-[39px]

            lg:text-[47px]
          "
        >
          التسوق حسب نوع البشرة
        </h1>

        <Heart
          size={17}
          strokeWidth={1.5}
          className="
            shrink-0
            text-[#C91F72]

            sm:size-[29px]

            md:size-[37px]
          "
        />
      </div>

      <p
        className="
          mt-1
          text-[9px]
          leading-5
          text-[#777]

          sm:mt-3
          sm:text-[13px]

          md:text-[17px]
        "
      >
        اختاري منتجات تناسب بشرتك لتتمتعي بجمال صحي وإطلالة مثالية
      </p>
    </section>
  );
}
