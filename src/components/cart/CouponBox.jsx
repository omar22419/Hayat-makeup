import { useState } from "react";

import { COUPON_CODE } from "../../data/constants.js";

export default function CouponBox({ applied, onApply }) {
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");

  const handleApply = () => {
    if (applied) return;

    if (!coupon.trim()) return;

    if (coupon.trim().toUpperCase() === COUPON_CODE) {
      setError("");
      onApply();
    } else {
      setError("كود الخصم غير صحيح");
    }
  };

  const handleChange = (e) => {
    setCoupon(e.target.value);
    if (error) setError("");
  };

  return (
    <section
      dir="rtl"
      className="
        w-full
        rounded-[7px]
        border
        border-[#EEEEEE]
        bg-white
        p-[6px]
        shadow-[0_1px_5px_rgba(0,0,0,0.025)]

        sm:rounded-[11px]
        sm:p-[15px]

        md:rounded-[13px]
        md:p-[18px]

        lg:rounded-[15px]
        lg:p-[20px]
      "
    >
      <h2
        className="
          text-[12px]
          font-medium
          text-[#222222]

          sm:text-[16px]

          md:text-[18px]

          lg:text-[20px]
        "
      >
        كود الخصم
      </h2>

      <div
      dir="ltr"
        className="
          mt-[6px]
          flex
          h-[35px]
          w-full
          overflow-hidden
          rounded-[8px]
          border
          border-[#D9D9D9]

          sm:mt-[11px]
          sm:h-[46px]

          md:mt-[13px]
          md:h-[50px]

          lg:h-[54px]
        "
      >
        <button
          type="button"
          onClick={handleApply}
          disabled={applied}
          className="
            flex
            w-[85px]
            shrink-0
            items-center
            justify-center
            border-r
            border-[#D9D9D9]
            !text-[12px]
            text-[#D4146A]
            !font-medium
            disabled:opacity-40
            sm:w-[105px]
            sm:text-[14px]

            md:w-[125px]
            md:text-[16px]

            lg:w-[140px]
            lg:text-[17px]
          "
        >
          {applied ? "تم التطبيق" : "تطبيق"}
        </button>

        <input
          type="text"
          value={applied ? COUPON_CODE : coupon}
          onChange={handleChange}
          disabled={applied}
          placeholder="أدخل كود الخصم"
          className="
            min-w-0
            flex-1
            bg-transparent
            px-[12px]
            text-right
            !text-[12px]
            outline-none
            placeholder:text-[#AAAAAA]

            sm:px-[15px]
            sm:text-[12px]

            md:px-[18px]
            md:text-[14px]

            lg:text-[15px]
          "
        />
      </div>

      {error && (
        <p
          className="
            mt-[4px]
            text-[9px]
            text-[#D4146A]

            sm:mt-[8px]
            sm:text-[11px]
          "
        >
          {error}
        </p>
      )}
    </section>
  );
}