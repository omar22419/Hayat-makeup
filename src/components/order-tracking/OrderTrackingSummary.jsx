import { PackageOpen } from "lucide-react";

import OrderProductRow from "../order/OrderProductRow.jsx";

export default function OrderTrackingSummary({ tracking }) {
  const items = tracking.items || [];
  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
    0
  );

  return (
    <section
      dir="rtl"
      className="
        w-full
        overflow-hidden
        rounded-[14px]
        border
        border-[#EEEEEE]
        bg-white

        sm:rounded-[16px]

        md:rounded-[18px]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-[#EEEEEE]
          px-4
          py-3

          sm:px-5
          sm:py-4

          md:px-6
          md:py-5
        "
      >
        <div className="flex items-center gap-2">
          <PackageOpen
            size={18}
            strokeWidth={1.6}
            className="
              text-[#D4146A]

              sm:size-[24px]
            "
          />

          <h3
            className="
              text-[14px]
              font-medium
              text-[#111111]

              sm:text-[19px]

              md:text-[22px]
            "
          >
            تفاصيل الطلب
          </h3>
        </div>

        <div className="text-left">
          <p
            className="
              text-[9px]
              text-[#888888]

              sm:text-[12px]
            "
          >
            رقم الطلب
          </p>

          <p
            dir="ltr"
            className="
              text-[13px]
              font-semibold
              text-[#111111]

              sm:text-[17px]
            "
          >
            {tracking.orderNumber}
          </p>
        </div>
      </div>

      {/* Customer + Delivery Info */}
      <div
        className="
          grid
          grid-cols-2
          gap-2
          border-b
          border-[#EEEEEE]
          px-4
          py-3

          sm:gap-4
          sm:px-5
          sm:py-4

          md:px-6
          md:py-5
        "
      >
        <div className="text-right">
          <p
            className="
              text-[9px]
              text-[#888888]

              sm:text-[12px]
            "
          >
            اسم العميل
          </p>

          <p
            className="
              mt-0.5
              text-[12px]
              font-medium
              text-[#111111]

              sm:text-[16px]
            "
          >
            {tracking.customerName}
          </p>
        </div>

        <div className="text-right">
          <p
            className="
              text-[9px]
              text-[#888888]

              sm:text-[12px]
            "
          >
            التوصيل المتوقع
          </p>

          <p
            className="
              mt-0.5
              text-[12px]
              font-medium
              text-[#111111]

              sm:text-[16px]
            "
          >
            {tracking.estimatedDelivery}
          </p>
        </div>
      </div>

      {/* Items */}
      <div>
        {items.map((item, index) => (
          <OrderProductRow
            key={`${item.id}-${index}`}
            image={item.image}
            name={item.name}
            variant={item.variant}
            price={item.price}
            quantity={item.quantity}
            isLast={index === items.length - 1}
          />
        ))}
      </div>

      {/* Total */}
      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-[#EEEEEE]
          px-4
          py-3

          sm:px-5
          sm:py-4

          md:px-6
          md:py-5
        "
      >
        <span
          className="
            text-[14px]
            font-medium
            text-[#111111]

            sm:text-[19px]
          "
        >
          الإجمالي
        </span>

        <span
          dir="ltr"
          className="
            text-[15px]
            font-semibold
            text-[#D4146A]

            sm:text-[20px]
          "
        >
          {total.toFixed(2)} ر.س
        </span>
      </div>
    </section>
  );
}