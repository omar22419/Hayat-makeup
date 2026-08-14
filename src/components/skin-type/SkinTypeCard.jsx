import { ChevronLeft, Droplets, Feather, Sparkles, Waves } from "lucide-react";
import { useNavigate } from "react-router-dom";

const icons = {
  oily: Droplets,
  dry: Droplets,
  combination: Sparkles,
  sensitive: Feather,
  acne: Waves,
};

export default function SkinTypeCard({ item }) {
  const navigate = useNavigate();
  const Icon = icons[item.id] || Sparkles;

  return (
    <article
      className="
        relative
        grid
        min-h-[72px]
        grid-cols-[28%_46%_26%]
        overflow-hidden
        rounded-[9px]
        border
        border-[#EEEEEE]
        bg-white
        shadow-[0_2px_6px_rgba(0,0,0,0.03)]

        sm:min-h-[100px]
        sm:grid-cols-[32%_44%_24%]
        sm:rounded-[13px]

        md:min-h-[132px]
        md:rounded-[17px]
      "
    >
      {/* Left - Products */}
      <div
        className="
          flex
          items-center
          justify-end
          gap-1
          px-0.5

          sm:gap-0.5
          sm:px-1

          md:gap-1
          md:px-2
        "
      >
        {item.products.map((product) => (
          <img
            key={product}
            src={product}
            alt=""
            className="
              h-[36px]
              w-[23px]
              object-contain

              sm:h-[54px]
              sm:w-[32px]

              md:h-[76px]
              md:w-[44px]
            "
          />
        ))}
      </div>

      {/* Center */}
      <div
        className="
          flex
          min-w-0
          flex-col
          justify-center
          px-1
          text-right

          sm:px-1.5

          md:px-3
        "
      >
        <div
          dir="rtl"
          className="
            flex
            items-center
            justify-start
            gap-0.5

            sm:gap-1

            md:gap-1.5
          "
        >
          <Icon
            size={19}
            strokeWidth={1.5}
            className="
              shrink-0
              text-[#C91F72]

              sm:size-[18px]

              md:size-[23px]
            "
          />

          <h2
            className="
              truncate
              text-[14px]
              font-semibold
              leading-4
              text-[#111]

              sm:text-[15px]
              sm:leading-5

              md:text-[21px]
              md:leading-6
            "
          >
            {item.title}
          </h2>
        </div>

        <p
          className="
            mt-0.5
            line-clamp-2
            text-[8px]
            leading-3
            text-[#666]

            sm:mt-1
            sm:text-[9px]
            sm:leading-4

            md:text-[12px]
            md:leading-5
          "
        >
          {item.description}
        </p>
      </div>

      {/* Right - Face */}
      <div
        className="
          relative
          overflow-hidden
          bg-[#FFF0F5]
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full
            w-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[12px]
            bg-gradient-to-r
            from-[#FFF0F5]
            to-transparent

            sm:w-[18px]

            md:w-[28px]
          "
        />
      </div>

      {/* Arrow */}
      <button
        type="button"
        aria-label={`فتح ${item.title}`}
        onClick={() => navigate("/products?category=skin")}
        className="
          absolute
          left-1
          top-1/2
          z-10
          flex
          -translate-y-1/2
          items-center
          justify-center
          text-[#C91F72]

          sm:left-1.5

          md:left-2
        "
      >
        <ChevronLeft
          size={15}
          strokeWidth={1.6}
          className="
            sm:size-[19px]
            md:size-[24px]
          "
        />
      </button>
    </article>
  );
}
