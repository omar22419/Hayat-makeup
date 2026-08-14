import MostReadCard from "./MostReadCard.jsx";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getMostReadArticles, mostReadArticlesMock } from "../../services/content.js";

const articleIcons = {
  2: ChevronLeft,
  1: ChevronRight,
};

export default function MostRead() {
  const mostReadArticles = useAsyncData(getMostReadArticles, mostReadArticlesMock);

  const articles = mostReadArticles.map((article) => ({
    ...article,
    icon: articleIcons[article.id] || ChevronLeft,
  }));

  return (
    <section className="pb-1">
      <h2
        className="
          mb-1
          text-right
          text-[15px]
          font-semibold

          sm:mb-4
          sm:text-[25px]

          md:text-[32px]
        "
      >
        الأكثر قراءة
      </h2>

      <div
        className="
          grid
          grid-cols-2
          gap-2

          sm:gap-3

          md:gap-5
        "
      >
        {articles.map((article) => (
          <MostReadCard
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </section>
  );
}