import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Header from "../../components/layout/Header";
import MobileBottomNav from "../../components/navigation/MobileBottomNav";
import AllProductsCard from "../../components/products/AllProductsCard";
import ProductsFilters from "../../components/products/ProductsFilters";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getProducts, productsMock } from "../../services/catalog.js";

const CATEGORY_MAP = {
  eyes: "مكياج",
  face: "مكياج",
  lips: "مكياج",
  tools: "أدوات",
  perfume: "عطور",
  skin: "العناية بالبشرة",
};

const SORT_MAP = {
  "السعر": "price",
  "النوع": "category",
  "التقييم": "rating",
  "ترتيب": "name",
};

export default function AllProducts() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState(null);

  const products = useAsyncData(getProducts, productsMock);

  const categoryParam = searchParams.get("category");
  const categoryKey = CATEGORY_MAP[categoryParam] || categoryParam || null;
  const sortKey = SORT_MAP[selectedFilter];

  const visibleProducts = useMemo(() => {
    let list = [...products];

    if (categoryKey) {
      list = list.filter((product) => product.category === categoryKey);
    }

    if (sortKey === "price") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortKey === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortKey === "category") {
      list.sort((a, b) =>
        String(a.category).localeCompare(String(b.category), "ar")
      );
    } else if (sortKey === "name") {
      list.sort((a, b) =>
        String(a.name).localeCompare(String(b.name), "ar")
      );
    }

    return list;
  }, [products, categoryKey, sortKey]);

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        w-full
        bg-white
        pb-[78px]

        md:pb-0
      "
    >
      {/* Header */}
      <Header />

      <main
        className="
          mx-auto
          w-full
          px-[14px]
          pb-[30px]

          sm:px-[20px]
          sm:pb-[40px]

          md:max-w-[1100px]
          md:px-[28px]
          md:pb-[55px]

          lg:max-w-[1280px]
          lg:px-[40px]
        "
      >
        {/* Page Header */}
        <section
          className="
            pt-[8px]

            sm:pt-[12px]

            md:pt-[18px]

            lg:pt-[22px]
          "
        >
          <h1
            className="
              text-[20px]
              font-medium
              leading-none
              text-[#222222]

              sm:text-[24px]

              md:text-[30px]

              lg:text-[36px]
            "
          >
            جميع المنتجات
          </h1>

          <p
            className="
              mt-[5px]
              text-[9px]
              font-normal
              text-[#4a4a4a]

              sm:mt-[9px]
              sm:text-[11px]

              md:mt-[12px]
              md:text-[14px]

              lg:text-[16px]
            "
          >
            {visibleProducts.length} منتج
          </p>
        </section>

        {/* Filters */}
        <ProductsFilters active={selectedFilter} onChange={setSelectedFilter} />

        {/* Products Grid */}
        <section
          className="
            mt-[10px]
            grid
            grid-cols-2
            gap-x-[8px]
            gap-y-[10px]

            sm:mt-[20px]
            sm:gap-x-[12px]
            sm:gap-y-[14px]

            md:mt-[28px]
            md:grid-cols-3
            md:gap-x-[18px]
            md:gap-y-[20px]

            lg:mt-[34px]
            lg:grid-cols-4
            lg:gap-x-[22px]
            lg:gap-y-[25px]
          "
        >
          {visibleProducts.map((product) => (
            <AllProductsCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              onSelect={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeItem="categories" />
    </div>
  );
}
