import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useCartStore } from "../../store/cartStore.js";

export default function ProductActions({ product, quantity = 1 }) {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/checkout");
  };

  return (
    <div
      className="
        mt-3
        grid
        grid-cols-2
        gap-2

        sm:mt-5
        sm:gap-3

        md:mt-7
      "
    >
      
      <button
        type="button"
        onClick={handleAddToCart}
        className="
          flex
          h-[39px]
          items-center
          justify-center
          gap-1
          rounded-[7px]
          bg-[#C91F72]
          !text-[10px]
          font-medium
          text-white

          sm:h-[48px]
          sm:text-[13px]

          md:h-[58px]
          md:text-[16px]
        "
      >
        أضف إلى السلة
        <ShoppingBag
          size={15}
          strokeWidth={1.5}
          className="sm:size-[18px] md:size-[21px]"
        />
      </button>

      <button
        type="button"
        onClick={handleBuyNow}
        className="
          flex
          h-[39px]
          items-center
          justify-center
          rounded-[7px]
          border
          border-[#C91F72]
          bg-white
          !text-[10px]
          font-medium
          text-[#C91F72]

          sm:h-[48px]
          sm:text-[13px]

          md:h-[58px]
          md:text-[16px]
        "
      >
        اشتري الآن
      </button>

    </div>
  );
}