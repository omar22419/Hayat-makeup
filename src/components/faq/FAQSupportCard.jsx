import { Headset } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FAQSupportCard() {
  const navigate = useNavigate();

  return (
    <section
      className="
        flex
        w-full
        flex-col
        items-center
        overflow-hidden
        rounded-[16px]
        border
        border-[#EEEEEE]
        bg-[#FFF1F6]
        px-4
        py-6
        text-center

        sm:rounded-[20px]
        sm:px-8
        sm:py-9

        md:rounded-[24px]
        md:px-12
        md:py-11
      "
    >
      <div
        className="
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-full
          bg-[#FBE3EF]
          text-[#D4146A]

          sm:h-[76px]
          sm:w-[76px]
        "
      >
        <Headset
          size={28}
          strokeWidth={1.5}
          className="
            sm:size-[38px]
          "
        />
      </div>

      <h2
        className="
          mt-3
          text-[16px]
          font-semibold
          leading-tight
          text-[#111111]

          sm:mt-4
          sm:text-[24px]

          md:text-[28px]
        "
      >
        نحن هنا لمساعدتك
      </h2>

      <p
        className="
          mt-1.5
          max-w-[300px]
          text-[11px]
          leading-6
          text-[#555555]

          sm:mt-2
          sm:max-w-[420px]
          sm:text-[16px]
          sm:leading-8

          md:text-[18px]
        "
      >
        فريق خدمة العملاء جاهز للرد على استفساراتك ومساعدتك في أي وقت
      </p>

      <button
        type="button"
        onClick={() => navigate("/contact")}
        className="
          mt-4
          flex
          h-[44px]
          items-center
          justify-center
          rounded-full
          bg-[#D4146A]
          px-8
          text-[13px]
          font-medium
          leading-none
          text-white
          transition-opacity
          hover:opacity-90

          sm:mt-6
          sm:h-[54px]
          sm:px-12
          sm:text-[17px]
        "
      >
        تواصل مع خدمة العملاء
      </button>
    </section>
  );
}