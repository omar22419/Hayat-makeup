import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import LooksHeader from "../../components/looks/LooksHeader.jsx";
import LooksGrid from "../../components/looks/LooksGrid.jsx";
import LooksPromo from "../../components/looks/LooksPromo.jsx";

export default function Looks() {
  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-white
        pb-[80px]

        sm:pb-0
      "
    >
      <Header />

      <main
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-3
          sm:px-5
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        <LooksHeader />

        <LooksGrid />

        <LooksPromo />
      </main>

      <MobileBottomNav />
    </div>
  );
}
