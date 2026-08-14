import { useMemo, useState } from "react";

import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import ColorFilterTabs from "../../components/shop-by-color/ColorFilterTabs.jsx";
import ColorProductSection from "../../components/shop-by-color/ColorProductSection.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getColorSections, colorSectionsMock } from "../../services/catalog.js";

export default function ShopByColor() {
  const [activeColor, setActiveColor] = useState("pink");

  const sections = useAsyncData(getColorSections, colorSectionsMock);

  const visibleSections = useMemo(() => {
    if (activeColor === "pink") {
      return sections;
    }

    return sections.filter((section) => section.id === activeColor);
  }, [activeColor]);

  return (
    <div
      dir="rtl"
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
          max-w-[1440px]
          px-3
          pt-4

          sm:px-5
          sm:pt-6

          md:px-8
          md:pt-8

          lg:px-10
          xl:px-12
        "
      >
        {/* Page Header */}
        <section className="text-right">
          {/* Title + Star */}
          <div
            className="
      flex
      items-center
      justify-start
      gap-2
    "
          >
            <span
              className="
          shrink-0
          text-[21px]
          -mb-7
          leading-none
          text-[#C91F72]
      
          sm:text-[28px]
      
          md:text-[36px]
        "
            >
              ✦
            </span>
            <h1
              className="
        text-[17px]
        font-semibold
        leading-tight
        text-[#111]

        sm:text-[30px]

        md:text-[40px]

        lg:text-[48px]
      "
            >
              التسوق حسب اللون
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="
      mt-1
      text-[9px]
      leading-5
      mr-6
      text-[#888]

      sm:mt-2
      sm:text-[13px]

      md:mt-3
      md:text-[17px]
    "
          >
            تسوقي منتجاتك المفضلة حسب لونك المفضل
          </p>
        </section>

        {/* Filters */}
        <ColorFilterTabs activeColor={activeColor} onChange={setActiveColor} />

        {/* Sections */}
        <div className="mt-1">
          {visibleSections.map((section) => (
            <ColorProductSection
              key={section.id}
              title={section.title}
              subtitle={section.subtitle}
              color={section.color}
              products={section.products}
            />
          ))}
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
}
