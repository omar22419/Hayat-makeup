import OfferCard from "./OffersCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getFeaturedOffers, featuredOffersMock } from "../../services/catalog.js";

export default function FeaturedOffers() {
  const offers = useAsyncData(getFeaturedOffers, featuredOffersMock);

  return (
    <section
      className="
        mt-1
        sm:mt-6
        md:mt-8
      "
    >
      <h2
        className="
          mb-2
          text-right
          text-[13px]
          font-medium
          sm:mb-3
          sm:text-[21px]
          md:mb-4
          md:text-[27px]
        "
      >
        عروض مميزة
      </h2>

      <div
        className="
          grid
          grid-cols-3
          gap-2
          sm:gap-3
          md:gap-5
        "
      >
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}
