import { SearchX } from "lucide-react";

import FAQItem from "./FAQItem.jsx";

export default function FAQList({ items, openId, onToggle }) {
  return (
    <div className="flex w-full flex-col gap-2 sm:gap-3 md:gap-4">
      {items.length > 0 ? (
        items.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            open={openId === faq.id}
            onToggle={onToggle}
          />
        ))
      ) : (
        <section
          className="
            flex
            flex-col
            items-center
            justify-center
            py-10
            text-center

            sm:py-14
          "
        >
          <div
            className="
              flex
              h-[60px]
              w-[60px]
              items-center
              justify-center
              rounded-full
              bg-[#FBE3EF]
              text-[#D4146A]

              sm:h-[76px]
              sm:w-[76px]
            "
          >
            <SearchX
              size={28}
              strokeWidth={1.4}
              className="
                sm:size-[36px]
              "
            />
          </div>

          <p
            className="
              mt-3
              text-[13px]
              font-medium
              text-[#111111]

              sm:mt-4
              sm:text-[18px]
            "
          >
            لا توجد نتائج مطابقة
          </p>

          <p
            className="
              mt-1
              text-[10px]
              text-[#888888]

              sm:mt-2
              sm:text-[13px]
            "
          >
            جربي كلمة بحث أخرى.
          </p>
        </section>
      )}
    </div>
  );
}