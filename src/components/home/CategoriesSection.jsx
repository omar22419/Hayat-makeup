import CategoryCircle from "./CategoryCircle";
import { useNavigate } from "react-router-dom";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getHomeCategories, homeCategoriesMock } from "../../services/catalog.js";

const CATEGORY_PARAM = {
  "المكياج": "eyes",
  "العناية بالبشرة": "skin",
  "العطور": "perfume",
  "الأدوات": "tools",
};

export default function CategoriesSection() {
  const navigate = useNavigate();
  const categories = useAsyncData(getHomeCategories, homeCategoriesMock);

  return (
    <section
      dir="rtl"
      className="
        px-[12px]
        pt-[18px]
        pb-[4px]

        sm:px-[16px]
        sm:pt-[25px]

        md:px-[24px]
        md:pt-[34px]

        lg:px-[32px]
        lg:pt-[42px]
      "
    >
      <div
        className="
          flex
          w-full
          items-start
          justify-between
          gap-[8px]

          sm:gap-[16px]

          md:gap-[26px]

          lg:gap-[38px]
        "
      >
        {categories.map((category) => (
          <CategoryCircle
            key={category.name}
            image={category.image}
            name={category.name}
            onClick={() => navigate(`/products?category=${CATEGORY_PARAM[category.name] || ""}`)}
          />
        ))}
      </div>
    </section>
  );
}