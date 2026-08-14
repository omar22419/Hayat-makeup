import { useMemo, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";
import SearchInput from "../../components/search/SearchInput.jsx";
import SearchResults from "../../components/search/SearchResults.jsx";
import SearchEmptyState from "../../components/search/SearchEmptyState.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { searchProducts, productsMock } from "../../services/catalog.js";

export default function Search() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(urlQuery || "");

  // Keep the input in sync when the URL query changes (e.g. back/forward).
  useEffect(() => {
    setQuery(searchParams.get("q") || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trimmed = query.trim();

  // Synchronous fallback so typing never flashes the full catalog.
  const fallbackResults = useMemo(() => {
    if (!trimmed) return [];
    const q = trimmed.toLowerCase();
    return productsMock.filter((product) =>
      [product.name, product.description, product.category]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [trimmed]);

  const results = useAsyncData(
    () => searchProducts({ q: trimmed }),
    fallbackResults,
    [trimmed]
  );

  const visibleResults = useMemo(() => {
    if (!trimmed) return [];
    return results;
  }, [trimmed, results]);

  const handleChange = (value) => {
    setQuery(value);
    const next = value.trim();
    if (next) {
      setSearchParams({ q: next }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const handleSelect = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handleClear = () => handleChange("");

  const handleBrowse = () => navigate("/products");

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-white
        pb-[78px]

        md:pb-0
      "
    >
      <Header />

      <main
        className="
          mx-auto
          w-full
          px-3
          pt-3

          sm:px-5
          sm:pt-5

          md:max-w-[1100px]
          md:px-8
          md:pt-7

          lg:max-w-[1280px]
          lg:px-10
        "
      >
        {/* Title */}
        <section className="text-right">
          <h1
            className="
              text-[18px]
              font-semibold
              leading-tight
              text-[#111111]

              sm:text-[30px]

              md:text-[38px]
            "
          >
            البحث
          </h1>
        </section>

        {/* Search Input */}
        <section className="mt-3 sm:mt-5 md:mt-7">
          <SearchInput value={query} onChange={handleChange} />
        </section>

        {/* Results Count */}
        {trimmed && visibleResults.length > 0 && (
          <p
            className="
              mt-3
              text-right
              text-[10px]
              text-[#888888]

              sm:mt-5
              sm:text-[13px]
            "
          >
            {visibleResults.length} نتيجة
          </p>
        )}

        {/* Results / Empty */}
        <section className="mt-2 sm:mt-4 md:mt-6">
          {trimmed && visibleResults.length > 0 ? (
            <SearchResults products={visibleResults} onSelect={handleSelect} />
          ) : (
            <SearchEmptyState
              query={trimmed}
              onClear={handleClear}
              onBrowse={handleBrowse}
            />
          )}
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}