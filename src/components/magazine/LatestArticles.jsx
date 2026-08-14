import LatestArticleCard from "./LatestArticleCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getLatestArticles, latestArticlesMock } from "../../services/content.js";
import { ChevronLeft } from "lucide-react";

export default function LatestArticles({ activeTab = "كل المقالات", onShowAll }) {
  const articles = useAsyncData(getLatestArticles, latestArticlesMock);

  const visibleArticles =
    activeTab === "كل المقالات"
      ? articles
      : articles.filter((article) => article.category === activeTab);

  return (
    <section
      className="
        mt-6
        pb-5

        sm:mt-8

        md:mt-10
      "
    >
      {/* Heading */}
      <div
        className="
          mb-3
          flex
          items-end
          justify-between

          sm:mb-4

          md:mb-5
        "
      >
                <div className="text-right">
          <h2
            className="
              text-[12px]
              font-semibold
              text-[#111]

              sm:text-[24px]

              md:text-[31px]
            "
          >
            أحدث المقالات
          </h2>

          <span
            className="
              block
              h-[2px]
              w-[46px]
              rounded-full
              bg-[#C91F72]

              sm:w-[65px]

              md:w-[85px]
            "
          />
        </div>

        <button
          type="button"
          onClick={onShowAll}
          className="
            flex
            !text-[10px]
            font-medium
            text-[#C91F72]

            sm:text-[13px]

            md:text-[17px]
          "
        >
        <span className="text-[13px]">
          عرض الكل
        </span>
        <ChevronLeft size={20} />
        </button>


      </div>

      {/* Articles */}
      <div
        className="
          flex
          flex-col
          gap-2

          sm:gap-3

          md:gap-4
        "
      >
        {visibleArticles.map((article) => (
          <LatestArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
