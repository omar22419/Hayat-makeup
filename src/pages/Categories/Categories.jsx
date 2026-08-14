import { useNavigate } from "react-router-dom";

import Header from "../../components/layout/Header";
import MobileBottomNav from "../../components/navigation/MobileBottomNav";
import CategoryCard from "../../components/categories/CategoryCard";

import ServiceFeatures from "../../components/home/ServiceFeatures";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getCategories, categoriesMock } from "../../services/catalog.js";
import CategoryServiceFeatures from "../../components/categories/CategoryServiceFeatures.jsx";

export default function Categories() {
  const navigate = useNavigate();

  const categories = useAsyncData(getCategories, categoriesMock);

  const handleCategoryClick = (categoryId) => {
    // هنربطها بصفحة المنتجات الخاصة بالتصنيف بعدين
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        w-full
        bg-white
        pb-[10px]

        md:pb-0
      "
    >
      {/* Header */}
      <Header />

      {/* Main */}
      <main
        className="
          mx-auto
          w-full
          px-[14px]

          sm:px-[20px]
          sm:pb-[35px]

          md:max-w-[1100px]
          md:px-[28px]
          md:pb-[45px]

          lg:max-w-[1280px]
          lg:px-[40px]
          lg:pb-[55px]
        "
      >
        {/* Page Heading */}
        <section
          className="
            pt-[1px]
            pb-[4px]
            text-right

            sm:pt-[14px]

            md:pt-[20px]

            lg:pt-[25px]
          "
        >
          <h1
            className="
              text-[23px]
              font-semibold
              leading-none
              text-[#111111]

              sm:text-[32px]

              md:text-[40px]

              lg:text-[48px]
            "
          >
            التصنيفات
          </h1>

          <p
            className="
              mt-[4px]
              text-[12px]
              font-normal
              text-[#333333]

              sm:mt-[11px]
              sm:text-[15px]

              md:mt-[14px]
              md:text-[18px]

              lg:mt-[17px]
              lg:text-[21px]
            "
          >
            تسوقي حسب القسم
          </p>
        </section>

        {/* Categories Grid */}
        <section
          className="
            mt-[5px]
            grid
            grid-cols-2
            gap-[5px]

            sm:mt-[34px]
            sm:gap-[13px]

            md:mt-[42px]
            md:gap-[18px]

            lg:mt-[52px]
            lg:gap-[22px]
          "
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              image={category.image}
              title={category.title}
              description={`كل ما تحتاجينه\nلبشرة مثالية`}
              bgColor="#FBF1EF"
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </section>

        {/* Services */}
        <div
          className="
    mt-[8px]

    sm:mt-[30px]

    md:mt-[38px]

    lg:mt-[48px]
  "
        >
          <CategoryServiceFeatures />
        </div>
      </main>
      {/* Bottom Navigation */}
      <MobileBottomNav activeItem="categories" />
    </div>
  );
}
