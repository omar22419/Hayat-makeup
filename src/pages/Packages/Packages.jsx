import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";
import FeaturedPackage from "../../components/packages/FeaturedPackage.jsx";
import PackageCard from "../../components/packages/PackageCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getPackages, packagesMock } from "../../services/catalog.js";

export default function Packages() {
  const packages = useAsyncData(getPackages, packagesMock);

  const featuredPackage = packages[0];
  const regularPackages = packages.slice(1);

  return (
    <div dir="rtl" className="min-h-screen bg-white pb-20 sm:pb-0">
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
        <section
          className="
            mb-1
            text-right

            sm:mb-7

            md:mb-9
          "
        >
          <h1
            className="
              text-[20px]
              font-semibold
              leading-tight
              text-[#111]

              sm:text-[31px]

              md:text-[40px]

              lg:text-[46px]
            "
          >
            الباقات
          </h1>

          <p
            className="
              text-[9px]
              leading-6
              text-[#777]

              sm:mt-2
              sm:text-[14px]

              md:text-[17px]

              lg:text-[19px]
            "
          >
            كل ما تحتاجينه في باقة واحدة
            <span className="mr-1">💗</span>
          </p>
        </section>

        {/* Featured Package */}
        <FeaturedPackage packageItem={featuredPackage} />

        {/* Regular Packages */}
        <section
          className="
            mt-3
            grid
            grid-cols-2
            gap-3

            sm:mt-5
            sm:gap-4

            md:mt-6
            md:gap-6

            lg:gap-7
          "
        >
          {regularPackages.map((packageItem) => (
            <PackageCard key={packageItem.id} packageItem={packageItem} />
          ))}
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}
