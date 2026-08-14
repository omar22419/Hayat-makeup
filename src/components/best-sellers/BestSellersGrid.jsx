import { useNavigate } from "react-router-dom";
import BestSellerCard from "./BestSellerCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import {
  getBestSellerDisplayOrder,
  bestSellerDisplayOrderMock,
} from "../../services/catalog.js";

export default function BestSellerGrid() {
  const navigate = useNavigate();

  const displayProducts = useAsyncData(
    getBestSellerDisplayOrder,
    bestSellerDisplayOrderMock,
  );

  return (
    <section
      className="
        grid
        grid-cols-6
        gap-1
        sm:gap-4
        md:gap-5
        lg:gap-6
      "
    >
      {displayProducts.map((product, index) => {
        const isLastTwo = index >= displayProducts.length - 2;

        return (
          <div
            key={product.id}
            className={`
              min-w-0
              ${isLastTwo ? "col-span-3" : "col-span-2"}
            `}
          >
            <BestSellerCard
              product={product}
              onSelect={() => navigate(`/product/${product.id}`)}
            />
          </div>
        );
      })}
    </section>
  );
}