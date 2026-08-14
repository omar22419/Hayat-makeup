import OfferBundleCard from "./OffersBundleCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getOfferBundles, offerBundlesMock } from "../../services/catalog.js";

export default function OfferBundles() {
  const bundles = useAsyncData(getOfferBundles, offerBundlesMock);

  return (
    <section className="mt-2 sm:mt-7 md:mt-9">
      <h2
        className="
          mb-1
          text-right
          text-[13px]
          font-medium
          sm:mb-3
          sm:text-[21px]
          md:mb-4
          md:text-[27px]
        "
      >
        عروض الباقات
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
        {bundles.map((bundle) => (
          <OfferBundleCard
            key={bundle.id}
            bundle={bundle}
          />
        ))}
      </div>
    </section>
  );
}