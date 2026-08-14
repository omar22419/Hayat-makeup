import { useState } from "react";
import NewArrivalsHero from "../../components/new-arrivals/NewArrivalsHero.jsx";
import NewArrivalsFilters from "../../components/new-arrivals/NewArrivalsFilters.jsx";
import NewArrivalsGrid from "../../components/new-arrivals/NewArrivalsGrid.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";
import Header from "../../components/layout/Header.jsx";
import NewArrivalsTitle from "../../components/new-arrivals/NewArrivalsTitle.jsx";
export default function NewArrivals() {
  const [filter, setFilter] = useState("الكل");

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white pb-20"
    >
      <Header />

      <main className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 md:px-8 lg:px-10 xl:px-12">
        <NewArrivalsTitle/>
        <NewArrivalsHero />

        <NewArrivalsFilters active={filter} onChange={setFilter} />

        <NewArrivalsGrid filter={filter} />
      </main>

      <MobileBottomNav />
    </div>
  );
}