import { useNavigate } from "react-router-dom";

export default function OfferCard({ offer }) {
  const navigate = useNavigate();

  return (
    <article
      className="
        relative
        flex
        min-w-0
        overflow-hidden
        rounded-[8px]
        border
        border-[#f0dce5]
        bg-[#fff9fb]

        sm:rounded-[12px]
      "
    >
        {/* Text - remaining 50%, on the right */}
      <div
        className="
          flex
          w-1/2
          flex-col
          items-start

          justify-center
          px-[6px]
          text-right

          sm:px-3
          md:px-5
        "
      >
        <h3
          className="
            text-[8px]
            font-medium
            leading-[1.3]
            text-[#111]

            sm:text-[14px]
            sm:leading-5

            md:text-[18px]
          "
        >
          {offer.title}
        </h3>

        <p
          className="
            mt-[1px]
            
            text-[9px]
            sm:mt-0.5
            sm:text-[14px]

            md:text-[17px]
          "
        >
          خصم <span className="text-[#C91F72]">%{offer.discount}</span>
        </p>

        <button
          type="button"
          onClick={() => navigate("/products")}
          className="
            mt-[3px]
            whitespace-nowrap
            rounded-full
            bg-[#C91F72]
            px-[6px]
            py-[3px]
            !text-[6px]
            text-white

            sm:mt-2
            sm:px-5
            sm:py-1.5
            sm:text-[11px]

            md:px-6
            md:text-[13px]
          "
        >
          تسوقي الآن
        </button>
      </div>

      {/* Image - always 50% width, always on the left */}
      <div className="h-[78px] w-1/2 shrink-0 sm:h-[135px] md:h-[175px]">
        <img
          src={offer.image}
          alt={offer.title}
          className="h-full w-full object-contain"
        />
      </div>

    
    </article>
  );
}