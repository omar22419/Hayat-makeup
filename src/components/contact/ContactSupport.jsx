import { Headphones } from "lucide-react";

export default function ContactSupport() {
  return (
    <section
      className="
        mt-2
        rounded-[14px]
        bg-[#FFF0F5]
        px-1
        py-1
        border-1
        border-[#c91f7131]

        sm:mt-7
        sm:rounded-[5px]
        sm:px-6
        sm:py-5

        md:mt-9
        md:px-8
        md:py-7
      "
    >
      <div
        className="
          flex
          justify-center
          items-center
          gap-9

          sm:gap-4

          md:gap-5
        "
      >
        {/* Icon */}
        <div
          className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            text-[#C91F72]

            sm:h-[72px]
            sm:w-[72px]

            md:h-[88px]
            md:w-[88px]
          "
        >
          <Headphones
            size={43}
            strokeWidth={1.5}
            className="sm:size-[52px] md:size-[64px]"
          />
        </div>

        {/* Text */}
        <div className="min-w-0 text-center">
          <h2
            className="
              text-[14px]
              font-semibold
              text-[#C91F72]

              sm:text-[18px]

              md:text-[24px]
            "
          >
            فريق الدعم جاهز لخدمتك
          </h2>

          <p
            className="
              mt-1
              text-[9px]
              leading-5
              text-[#222]

              sm:text-[13px]
              sm:leading-6

              md:text-[17px]
              md:leading-7
            "
          >
            تواصلي معنا وسنكون سعداء بمساعدتك في أي وقت
          </p>
        </div>
      </div>
    </section>
  );
}