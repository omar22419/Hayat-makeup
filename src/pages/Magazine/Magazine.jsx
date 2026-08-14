import { useState } from "react";

import MagazineHeader from "../../components/magazine/MagazineHeader.jsx";
import MagazineTabs from "../../components/magazine/MagazineTabs.jsx";
import FeaturedArticle from "../../components/magazine/FeaturedArticle.jsx";
import LatestArticles from "../../components/magazine/LatestArticles.jsx";
import MagazineBottomNav from "../../components/magazine/MagazineBottomNav.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getFeaturedArticle, featuredArticleMock } from "../../services/content.js";

export default function Magazine() {
  const [activeTab, setActiveTab] = useState("كل المقالات");

  const featuredArticle = useAsyncData(getFeaturedArticle, featuredArticleMock);

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-white
        pb-[50px]
        text-[#111]

        sm:pb-0
      "
    >
      <MagazineHeader />

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
        {/* Page Heading */}
        <section
          className="
            mt-2
            text-center

            sm:mt-7

            md:mt-9
          "
        >
          <h1
            className="
              text-[20px]
              font-semibold
              leading-tight

              sm:text-[36px]

              md:text-[46px]

              lg:text-[54px]
            "
          >
            مجلة الجمال
          </h1>

          <p
            className="
              mt-1
              text-[9px]
              leading-5
              text-[#777]

              sm:text-[14px]

              md:text-[18px]

              lg:text-[20px]
            "
          >
            نصائح، إطلالات، وأحدث صيحات الجمال من حياة ميك أب
          </p>
        </section>

        <MagazineTabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <FeaturedArticle article={featuredArticle} />

        <LatestArticles
          activeTab={activeTab}
          onShowAll={() => setActiveTab("كل المقالات")}
        />
      </main>

      <MagazineBottomNav />
    </div>
  );
}