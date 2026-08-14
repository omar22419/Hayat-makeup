import { useNavigate } from "react-router-dom";
import promoBanner from "../../assets/offers/offers-hero.png";

export default function OffersHero() {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[10px]
        bg-[#fff1f5]
        h-[130px]
        sm:h-[250px]
        md:h-[340px]
        lg:h-[400px]
      "
    >
      {/* Image - Left */}
      <img
        src={promoBanner}
        alt="خصومات تصل إلى 30%"
        className="
          absolute
          left-0
          top-0
          h-full
          w-[52%]
          object-contain
          object-left
          sm:w-[52%]
          md:w-[53%]
          lg:w-[54%]
        "
      />

      {/* Text - Right */}
      <div
        className="
          absolute
          inset-y-0
          right-[15%]
          flex
          w-[48%]
          flex-col
          items-start
          justify-center
          text-right
          sm:right-[6%]
          md:right-[7%]
        "
      >
        <p
          className="
            text-[13px]
            font-medium
            text-[#111]
            sm:text-[15px]
            md:text-[20px]
          "
        >
          خصومات تصل إلى
        </p>

        <span
          className="
            mt-0.5
            text-[49px]
            font-bold
            leading-none
            text-[#b91d68]
            sm:text-[60px]
            md:text-[82px]
            lg:text-[100px]
          "
        >
          30%
        </span>

        <button
          type="button"
          onClick={() => navigate("/products")}
          className="
            mt-2
            rounded-full
            bg-[#b91d68]
            px-5
            py-1
            !text-[11px]
            font-medium
            text-white
            sm:mt-4
            sm:px-7
            sm:py-2.5
            sm:text-[14px]
            md:px-10
            md:py-3
            md:text-[17px]
          "
        >
          تسوقي الآن
        </button>
      </div>
    </section>
  );
}