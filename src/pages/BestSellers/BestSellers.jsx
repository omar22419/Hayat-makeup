import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import BestSellersTitle from "../../components/best-sellers/BestSellersTitle.jsx";
import BestSellersGrid from "../../components/best-sellers/BestSellersGrid.jsx";

export default function BestSellers() {
  return (
    <div dir="rtl" className="min-h-screen bg-white pb-20">
      <Header />

      <main
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-2
          sm:px-4
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        <BestSellersTitle />

        <BestSellersGrid />
      </main>

      <MobileBottomNav />
    </div>
  );
}
