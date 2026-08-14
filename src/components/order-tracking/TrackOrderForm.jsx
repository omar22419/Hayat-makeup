import { Loader2, Search } from "lucide-react";

export default function TrackOrderForm({ value, onChange, onSubmit, loading }) {
  return (
    <form
      dir="rtl"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className="
        flex
        w-full
        flex-col
        gap-2

        sm:gap-3
      "
    >
      <label
        htmlFor="track-order-input"
        className="
          text-right
          text-[12px]
          font-medium
          text-[#111111]

          sm:text-[16px]
        "
      >
        رقم الطلب
      </label>

      <div className="relative">
        <input
          id="track-order-input"
          dir="ltr"
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="10245"
          aria-label="رقم الطلب"
          className="
            h-[46px]
            w-full
            rounded-[12px]
            border
            border-[#EEEEEE]
            bg-white
            py-2
            pl-4
            pr-11
            text-right
            text-[13px]
            leading-none
            text-[#111111]
            outline-none
            placeholder:text-[#999999]
            focus:border-[#D4146A]

            sm:h-[56px]
            sm:text-[16px]

            md:h-[62px]
          "
        />

        <Search
          size={18}
          strokeWidth={1.6}
          className="
            absolute
            right-3.5
            top-1/2
            -translate-y-1/2
            text-[#999999]

            sm:size-[22px]
          "
        />
      </div>

      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="
          mt-1
          flex
          h-[46px]
          w-full
          items-center
          justify-center
          gap-2
          rounded-[12px]
          bg-[#D4146A]
          text-[15px]
          font-medium
          leading-none
          text-white
          transition-opacity
          hover:opacity-90
          disabled:cursor-not-allowed
          disabled:opacity-50

          sm:h-[56px]
          sm:text-[18px]

          md:h-[62px]
        "
      >
        {loading && <Loader2 size={18} className="animate-spin" />}

        <span>تتبع الطلب</span>
      </button>
    </form>
  );
}