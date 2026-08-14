import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/guide/guide-hero.png";

export default function MakeupGuideHero() {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        mb-1
        min-h-[120px]
        overflow-hidden
        rounded-[6px]
        bg-[#fff2f5]

        sm:min-h-[210px]
        sm:rounded-[18px]

        md:min-h-[290px]

        lg:min-h-[350px]
      "
    >
      {/* Image */}
      <img
        src={heroImg}
        alt=""
        className="
          absolute
          bottom-0
          left-0
          h-full
          w-[47%]
          object-contain
          object-left

          sm:w-[46%]

          md:w-[45%]
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-y-0
          right-[5%]
          flex
          w-[48%]
          flex-col
          items-start
          justify-center
          text-right

          sm:right-[6%]
          sm:w-[47%]

          md:right-[7%]
          md:w-[46%]
        "
      >
        <p
          className="
            text-[9px]
            font-medium
            text-[#C91F72]

            sm:text-[13px]

            md:text-[17px]

            lg:text-[20px]
          "
        >
          دليلك اليومي للجمال
        </p>

        <h2
          className="
            mt-1
            text-[13px]
            font-semibold
            leading-tight

            sm:text-[25px]

            md:text-[34px]

            lg:text-[42px]
          "
        >
          تعلمي أسرار المكياج
        </h2>

        <p
          className="
            mt-1
            text-[9px]
            text-[#777]

            sm:text-[12px]

            md:text-[16px]

            lg:text-[18px]
          "
        >
          خطوة بخطوة مع خبرائنا
        </p>

        <button
          type="button"
          onClick={() => navigate("/products")}
          className="
            mt-2
            flex
            h-[25px]
            items-center
            justify-center
            gap-1
            rounded-[6px]
            bg-[#C91F72]
            px-5
            
            !text-[9px]
            text-white

            sm:mt-5
            sm:h-[38px]
            sm:px-6
            sm:text-[12px]

            md:h-[46px]
            md:px-8
            md:text-[15px]

            lg:h-[52px]
            lg:px-10
            lg:text-[17px]
          "
        >
          اكتشفي المزيد
        </button>
      </div>
    </section>
  );
}
