export default function CartSummary({
  subtotal,
  shipping,
  discount,
  total,
}) {
  return (
    <section
      dir="rtl"
      className="
        w-full
        rounded-[10px]
        border
        border-[#EEEEEE]
        bg-white
        px-[12px]
        py-[9px]
        shadow-[0_1px_5px_rgba(0,0,0,0.025)]

        sm:rounded-[11px]
        sm:px-[15px]
        sm:py-[13px]

        md:rounded-[13px]
        md:px-[18px]
        md:py-[16px]

        lg:rounded-[15px]
        lg:px-[20px]
        lg:py-[18px]
      "
    >
      {/* Subtotal */}
      <div
        className="
          flex
          items-center
          justify-between
          text-[12px]

          sm:text-[14px]

          md:text-[16px]

          lg:text-[18px]
        "
      >
        <span className="text-[#707070]">المجموع الفرعي</span>
        <span>{subtotal} ر.س</span>
      </div>

      {/* Shipping */}
      <div
        className="
          mt-[8px]
          flex
          items-center
          justify-between
          text-[12px]
          

          sm:mt-[10px]
          sm:text-[14px]

          md:mt-[12px]
          md:text-[16px]

          lg:text-[18px]
        "
      >
        <span className="text-[#707070]">رسوم التوصيل</span>
        <span>{shipping} ر.س</span>
      </div>

      {/* Discount */}
      {discount > 0 && (
      <div
        className="
          mt-[8px]
          flex
          items-center
          justify-between
          text-[12px]
          text-[#D4146A]

          sm:mt-[10px]
          sm:text-[14px]

          md:mt-[12px]
          md:text-[16px]

          lg:text-[18px]
        "
      >
        <span className="text-[#707070]">خصم</span>
        <span>{discount}- ر.س</span>
      </div>
      )}

      {/* Divider */}
      <div className="my-[8px] h-px w-full bg-[#EEEEEE]" />

      {/* Total */}
      <div
        className="
          flex
          items-end
          justify-between
        "
      >
        <div className="flex justify-center items-center gap-3 text-right">
          <h2
            className="
              text-[16px]
              font-normal
              text-[#222222]

              sm:text-[18px]

              md:text-[21px]

              lg:text-[24px]
            "
          >
            الإجمالي
          </h2>

          <p
            className="
              mt-[3px]
              text-[8px]
              text-[#999999]

              sm:text-[8px]

              md:text-[10px]

              lg:text-[11px]
            "
          >
            شامل ضريبة القيمة المضافة
          </p>
        </div>

        <div>
          <span
            className="
              text-[18px]
              font-medium
              text-[#D4146A]

              sm:text-[21px]

              md:text-[25px]

              lg:text-[29px]
            "
          >
            {total}
          </span>

          <span
            className="
              mr-[4px]
              text-[13px]
              text-[#D4146A]
              font-medium

              sm:text-[15px]

              md:text-[17px]

              lg:text-[19px]
            "
          >
            ر.س
          </span>
        </div>

        
      </div>
    </section>
  );
}