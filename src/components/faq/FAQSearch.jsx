import { Search, X } from "lucide-react";

export default function FAQSearch({ value, onChange }) {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        strokeWidth={1.6}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-[#999999]

          sm:size-[22px]

          md:right-5
        "
      />

      <input
        dir="rtl"
        type="search"
        inputMode="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="إبحث عن سؤال..."
        aria-label="بحث"
        className="
          h-[46px]
          w-full
          rounded-full
          border
          border-[#EEEEEE]
          bg-white
          py-2
          pl-[44px]
          pr-[46px]
          text-[12px]
          leading-none
          text-[#111111]
          outline-none
          placeholder:text-[#999999]
          focus:border-[#D4146A]

          sm:h-[54px]
          sm:pl-[52px]
          sm:pr-[54px]
          sm:text-[14px]

          md:h-[60px]
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
            left-4
            top-1/2
            flex
            -translate-y-1/2
            items-center
            justify-center
            text-[#999999]

            md:left-5
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