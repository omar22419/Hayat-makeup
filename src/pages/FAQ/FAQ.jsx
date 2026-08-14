import { useMemo, useState } from "react";

import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";
import FAQSearch from "../../components/faq/FAQSearch.jsx";
import FAQList from "../../components/faq/FAQList.jsx";
import FAQSupportCard from "../../components/faq/FAQSupportCard.jsx";

import { faqItems } from "../../data/faq.js";

function normalizeArabic(value) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .toLowerCase();
}

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const filteredItems = useMemo(() => {
    const normalizedQuery = normalizeArabic(query);

    if (!normalizedQuery) return faqItems;

    return faqItems.filter((item) => {
      const haystack = normalizeArabic(`${item.question} ${item.answer}`);
      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

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
          max-w-[720px]
          px-4
          pt-3

          sm:px-6
          sm:pt-7

          md:px-8
          md:pt-9

          lg:max-w-[820px]
        "
      >
        {/* Page Title */}
        <section className="text-center">
          <h1
            className="
              text-[20px]
              font-semibold
              leading-tight
              text-[#111]

              sm:text-[32px]

              md:text-[40px]
            "
          >
            الأسئلة الشائعة
          </h1>

          <p
            className="
              mt-1.5
              text-[11px]
              leading-5
              text-[#555]

              sm:mt-2
              sm:text-[15px]
              sm:leading-7

              md:text-[18px]
            "
          >
            كل ما تحتاجين معرفته عن منتجاتنا وخدماتنا
          </p>
        </section>

        {/* Search */}
        <section
          className="
            mt-4
            w-full

            sm:mt-8

            md:mt-10
          "
        >
          <FAQSearch value={query} onChange={setQuery} />
        </section>

        {/* FAQ List */}
        <section
          className="
            mt-3
            w-full

            sm:mt-7

            md:mt-9
          "
        >
          <FAQList
            items={filteredItems}
            openId={openId}
            onToggle={handleToggle}
          />
        </section>

        {/* Support Card */}
        <section
          className="
            mt-4
            w-full

            sm:mt-8

            md:mt-10
          "
        >
          <FAQSupportCard />
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}