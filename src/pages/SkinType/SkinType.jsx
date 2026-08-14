import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import SkinTypeHeader from "../../components/skin-type/SkinTypeHeader.jsx";
import SkinTypeCard from "../../components/skin-type/SkinTypeCard.jsx";
import SkinTypeAdvice from "../../components/skin-type/SkinTypeAdvice.jsx";
import SkinTypeCTA from "../../components/skin-type/SkinTypeCTA.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getSkinTypes, skinTypesMock } from "../../services/content.js";

export default function SkinType() {
  const skinTypes = useAsyncData(getSkinTypes, skinTypesMock);

  return (
    <div
      className="
        min-h-screen
        bg-white
        pb-[78px]

        sm:pb-0
      "
    >
      <Header />

      <main
        className="
          mx-auto
          w-full
          max-w-[1100px]
          px-3
          pt-4

          sm:px-5
          sm:pt-6

          md:px-8
          md:pt-8

          lg:px-10
        "
      >
        <SkinTypeHeader />

        {/* Skin Types */}
        <section
          className="
            mt-5
            flex
            flex-col
            gap-2

            sm:mt-7
            sm:gap-3

            md:mt-9
            md:gap-4
          "
        >
          {skinTypes.map((item) => (
            <SkinTypeCard
              key={item.id}
              item={item}
            />
          ))}
        </section>

        <SkinTypeAdvice />

        <SkinTypeCTA />
      </main>

      <MobileBottomNav />
    </div>
  );
}