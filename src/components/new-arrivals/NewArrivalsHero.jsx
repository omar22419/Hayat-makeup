import {  ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/new-arrivals-banner.png";

export default function NewArrivalsHero() {
  const navigate = useNavigate();

  return (
    <section className="mt-1 w-full">
      <div
        dir="rtl"
        className="
          relative
          flex
          h-[180px]
          w-full
          items-center
          overflow-hidden
          rounded-[20px]
          bg-[#FDECEF]

          sm:h-[220px]

          md:h-[280px]

          lg:h-[340px]

          xl:h-[380px]
        "
      >
        {/* Content - right */}
        <div
          className="
            flex
            flex-1
            flex-col
            justify-center
            px-4
            text-right

            sm:px-7

            md:px-10

            lg:px-14
          "
        >
          <span
            className="
              mb-1
              text-[13px]
              font-medium
              text-[#C91F72]

              sm:text-[16px]

              md:text-[20px]
            "
          >
            وصل حديثاً!
          </span>

          <h1
            className="
              text-[25px]
              font-semibold
              leading-[1.3]
              text-[#111]

              sm:text-[29px]

              md:text-[38px]

              lg:text-[48px]
            "
          >
            جمال جديد
            <br />
            يبدأ من هنا
          </h1>

          <p
            className="
              mt-3
              text-[9px]
              leading-3
              text-[#333]

              sm:block

              md:text-[16px]

              lg:text-[18px]
            "
          >
            تسوقي أحدث المنتجات
            <br />
            لإطلالة مميزة كل يوم
          </p>

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="
              mt-2
              flex
              w-fit
              items-center
              gap-1
              rounded-full
              bg-[#D41472]
              px-3
              py-1
              !text-[10px]
              text-white
              transition
              hover:bg-[#bd1063]

              sm:mt-5
              sm:px-6
              sm:py-2.5
              sm:text-[14px]

              md:text-[16px]
            "
          >
            تسوقي الآن
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Image - left */}
        <div
          className="
            relative
            h-full
            w-[50%]
            shrink-0

            sm:w-[45%]

            md:w-[48%]
          "
        >
          <img
            src={heroImg}
            alt="وصل حديثاً"
            className="h-full w-full object-contain object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}