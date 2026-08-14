import NewArrivalProductCard from "./NewArrivalProductCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getNewArrivals, newArrivalProductsMock } from "../../services/catalog.js";

export default function NewArrivalsGrid({ filter = "الكل" }) {
  const products = useAsyncData(getNewArrivals, newArrivalProductsMock);

  const filteredProducts =
    filter === "الكل"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <section className="mt-4">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
        {filteredProducts.map((product) => (
          <NewArrivalProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}