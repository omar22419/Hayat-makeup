import { Search, X } from "lucide-react";

export default function SearchInput({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={18}
        strokeWidth={1.6}
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          text-[#999999]

          sm:size-[22px]

          md:right-4
        "
      />

      <input
        dir="rtl"
        type="search"
        inputMode="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="ابحثي عن منتجك..."
        aria-label="بحث"
        className="
          h-[44px]
          w-full
          rounded-full
          border
          border-[#EEEEEE]
          bg-white
          py-2
          pl-[46px]
          pr-[42px]
          text-[12px]
          leading-none
          text-[#111111]
          outline-none
          placeholder:text-[#999999]
          focus:border-[#D4146A]

          sm:h-[52px]
          sm:pl-[54px]
          sm:pr-[52px]
          sm:text-[14px]

          md:h-[58px]
          md:text-[16px]
        "
      />

      {value && (
        <button
          type="button"
          aria-label="مسح البحث"
          onClick={() => onChange("")}
          className="
            absolute
            left-3
            top-1/2
            flex
            -translate-y-1/2
            items-center
            justify-center
            text-[#999999]

            sm:left-4
          "
        >
          <X
            size={18}
            strokeWidth={1.6}
            className="
              sm:size-[22px]
            "
          />
        </button>
      )}
    </div>
  );
}