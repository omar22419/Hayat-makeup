import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ColorProductCard from "./ColorProductCard.jsx";

export default function ColorProductSection({
  title,
  subtitle,
  color,
  products,
}) {
  const navigate = useNavigate();

  return (
    <section
      className="
        mt-2
        overflow-hidden
        rounded-[13px]
        bg-[#FFF7FA]
        px-2.5
        py-1

        sm:mt-6
        sm:rounded-[17px]
        sm:px-4
        sm:py-4

        md:mt-8
        md:rounded-[21px]
        md:px-5
        md:py-5
      "
    >
      {/* Heading */}
      <div
        className="
          flex
          items-start
          justify-between
          gap-3
        "
      >
        {/* Section title */}
        <div className="min-w-0 text-right">
          <div
            className="
              flex
              items-center
              justify-start
              gap-1
            "
          >
            <span
              className="
                h-[8px]
                w-[8px]
                rounded-full

                sm:h-[14px]
                sm:w-[14px]

                md:h-[17px]
                md:w-[17px]
              "
              style={{
                backgroundColor: color,
              }}
            />

            <h2
              className="
                text-[12px]
                font-semibold
                text-[#C91F72]

                sm:text-[20px]

                md:text-[27px]
              "
            >
              {title}
            </h2>
          </div>

          <p
            className="
              mt-0.5
              text-[10px]
              leading-4
              text-[#888]

              sm:mt-1
              sm:text-[11px]

              md:text-[14px]
            "
          >
            {subtitle}
          </p>
        </div>

        {/* Show All */}
        <button
          type="button"
          onClick={() => navigate("/products")}
          className="
            mt-1
            flex
            shrink-0
            items-center
            gap-0.5
            !text-[10px]
            font-medium
            text-[#C91F72]

            sm:gap-1
            sm:text-[12px]

            md:text-[15px]
          "
        >
          <span>عرض الكل</span>
          <ChevronLeft
            size={15}
            strokeWidth={1.6}
            className="
              sm:size-[18px]
              md:size-[21px]
            "
          />
        </button>
      </div>

      {/* Products */}
      <div
        className="
          mt-2
          grid
          grid-cols-4
          gap-1.5

          sm:mt-4
          sm:gap-3

          md:mt-5
          md:gap-4
        "
      >
        {products.map((product) => (
          <ColorProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
