import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getHomeBestSellers, homeBestSellersMock } from "../../services/catalog.js";
import { useCartStore } from "../../store/cartStore.js";

export default function BestSellers() {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const products = useAsyncData(getHomeBestSellers, homeBestSellersMock);

  return (
    <section
      dir="rtl"
      className="
        px-[12px]
        pt-[6px]

        sm:px-[16px]
        sm:pt-[20px]

        md:px-[24px]
        md:pt-[28px]

        lg:px-[32px]
        lg:pt-[36px]
      "
    >
      {/* Section Header */}
      <div
        className="
          mb-[4px]
          px-1
          flex
          items-center
          justify-between

          sm:mb-[9px]

          md:mb-[12px]

          lg:mb-[15px]
        "
      >
        {/* Title */}
        <h2
          className="
            text-[11px]
            font-medium
            leading-none
            text-[#222222]

            sm:text-[19px]

            md:text-[23px]

            lg:text-[27px]
          "
        >
          الأكثر مبيعًا
        </h2>

        {/* View All */}
        <button
          type="button"
          onClick={() => navigate("/products")}
          className="
            flex
            items-center
            gap-[2px]
            text-[9px]
            font-normal
            text-[#D4146A]

            sm:text-[11px]

            md:text-[13px]

            lg:text-[15px]
          "
        >
          <span className="text-[9px] font-semibold">عرض الكل</span>

          <ArrowLeft
            className="
    h-[10px]
    w-[10px]

    sm:h-[14px]
    sm:w-[14px]

    md:h-[17px]
    md:w-[17px]

    lg:h-[19px]
    lg:w-[19px]
  "
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Products Grid */}
      <div
        className="
          grid
          grid-cols-2
          gap-[6px]

          sm:gap-[10px]

          md:gap-[14px]

          lg:gap-[18px]
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id ?? product.name}
            {...product}
            onSelect={() => navigate(`/product/${product.id}`)}
            onAddToCart={() => addToCart({ ...product, quantity: 1 })}
          />
        ))}
      </div>
    </section>
  );
}
