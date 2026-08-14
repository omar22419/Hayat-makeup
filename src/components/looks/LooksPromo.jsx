import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import promoImg from "../../assets/looks/looks-promo.png";

export default function LooksPromo() {
  const navigate = useNavigate();

  return (
    <section className="mt-4 sm:mt-6 md:mt-8">
      <div
        dir="rtl"
        className="
          relative
          min-h-[130px]
          overflow-hidden
          rounded-[13px]
          bg-[#FFF0F5]

          sm:min-h-[195px]
          sm:rounded-[18px]

          md:min-h-[270px]

          lg:min-h-[320px]
        "
      >
        <img
          src={promoImg}
          alt=""
          className="
            absolute
            bottom-0
            right-0
            h-full
            w-[52%]
            object-contain
            object-left-bottom

            sm:w-[50%]

            md:w-[49%]
          "
        />

        <div
          className="
            absolute
            inset-y-0
            left-[7%]
            flex
            w-[45%]
            flex-col
            justify-center
            items-end
            text-left

            sm:left-[6%]
            sm:w-[44%]

            md:left-[7%]
            md:w-[43%]
          "
        >
          <span
            className="
              text-[8px]
              font-medium
              text-[#C91F72]

              sm:text-[11px]

              md:text-[15px]
            "
          >
            ✨ عرض مميز
          </span>

          <h2
            className="
              mt-1
              text-[18px]
              font-semibold
              leading-tight
              text-[#111]

              sm:text-[25px]

              md:text-[34px]

              lg:text-[42px]
            "
          >
            طلة متكاملة
          </h2>

          <p
            className="
              mt-1
              text-[7px]
              leading-4
              text-[#444]

              sm:text-[11px]
              sm:leading-5

              md:text-[15px]
              md:leading-6
            "
          >
            كل ما تحتاجينه لإطلالة متكاملة
            <br />
            مكياج - عناية - أدوات
          </p>

          <button
            type="button"
            onClick={() => navigate("/offers")}
            className="
              mt-2
              flex
              h-[25px]
              w-fit
              items-center
              justify-
              gap-4
              rounded-[6px]
              bg-[#C91F72]
              px-3
              !text-[8px]
              text-white

              sm:mt-4
              sm:h-[38px]
              sm:px-5
              sm:text-[12px]

              md:h-[46px]
              md:px-7
              md:text-[15px]
            "
          >
            تسوقي الآن

            <ArrowLeft
              size={11}
              strokeWidth={1.5}
              className="sm:size-[16px] md:size-[19px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}