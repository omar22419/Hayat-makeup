import { SearchX } from "lucide-react";

export default function SearchEmptyState({ query, onClear, onBrowse }) {
  return (
    <section
      className="
        flex
        flex-col
        items-center
        justify-center
        py-10
        text-center

        sm:py-14

        md:py-16
      "
    >
      <div
        className="
          flex
          h-[64px]
          w-[64px]
          items-center
          justify-center
          rounded-full
          bg-[#FBE3EF]
          text-[#D4146A]

          sm:h-[84px]
          sm:w-[84px]

          md:h-[100px]
          md:w-[100px]
        "
      >
        <SearchX
          size={30}
          strokeWidth={1.4}
          className="
            sm:size-[40px]

            md:size-[48px]
          "
        />
      </div>

      <h2
        className="
          mt-4
          text-[16px]
          font-medium
          leading-tight
          text-[#111111]

          sm:mt-5
          sm:text-[22px]

          md:mt-6
          md:text-[26px]
        "
      >
        {query ? "لا توجد نتائج مطابقة" : "ابحثي عن منتجك"}
      </h2>

      <p
        className="
          mt-1.5
          max-w-[300px]
          text-[11px]
          leading-5
          text-[#888888]

          sm:mt-2
          sm:max-w-[400px]
          sm:text-[14px]
        "
      >
        {query
          ? "لم نعثر على نتائج لبحثك، جربي كلمة مختلفة."
          : "اكتبي اسم المنتج أو نوعه للعثور على ما تبحثين عنه."}
      </p>

      <div className="mt-4 flex gap-2 sm:mt-5 sm:gap-3">
        <button
          type="button"
          onClick={onBrowse}
          className="
            flex
            items-center
            justify-center
            rounded-full
            bg-[#D4146A]
            px-5
            py-2.5
            text-[12px]
            font-medium
            leading-none
            text-white

            sm:px-7
            sm:py-3
            sm:text-[14px]
          "
        >
          تصفحي جميع المنتجات
        </button>

        {query && (
          <button
            type="button"
            onClick={onClear}
            className="
              flex
              items-center
              justify-center
              rounded-full
              border
              border-[#D4146A]
              px-5
              py-2.5
              text-[12px]
              font-medium
              leading-none
              text-[#D4146A]

              sm:px-7
              sm:py-3
              sm:text-[14px]
            "
          >
            مسح البحث
          </button>
        )}
      </div>
    </section>
  );
}