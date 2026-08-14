import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import OffersHeader from "../../components/offers/OffersHeader.jsx";
import OffersHero from "../../components/offers/OffersHero.jsx";
import FeaturedOffers from "../../components/offers/FeaturedOffers.jsx";
import OfferBundles from "../../components/offers/OffersBundles.jsx";
import DiscountSteps from "../../components/offers/DiscountSteps.jsx";
import LimitedOffer from "../../components/offers/LimitedOffer.jsx";

export default function Offers() {
  return (
    <div dir="rtl" className="min-h-screen bg-white text-[#111]">
      <Header />

      <main
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-3
          pb-18
          sm:px-5
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        <OffersHeader />

        <OffersHero />

        <FeaturedOffers />

        <OfferBundles />

        <DiscountSteps />

        <LimitedOffer />
      </main>

      <MobileBottomNav />
    </div>
  );
}
