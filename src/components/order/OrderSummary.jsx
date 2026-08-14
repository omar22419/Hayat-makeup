import { ShoppingBag } from "lucide-react";

import OrderProductRow from "./OrderProductRow";
import { orderProducts } from "../../data/order.js";

export default function OrderSummary({ products = orderProducts }) {
  const total = products.reduce(
    (sum, product) => sum + Number(product.price) * Number(product.quantity || 1),
    0,
  );

  return (
    <section
      className="
        mt-[10px]
        overflow-hidden
        rounded-[14px]
        border
        border-[#EEEEEE]
        bg-white
        shadow-[0_2px_10px_rgba(0,0,0,0.06)]

        sm:mt-[28px]
        sm:rounded-[16px]

        md:mt-[35px]
        md:rounded-[18px]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          px-[16px]
          py-[6px]

          sm:px-[22px]
          sm:py-[17px]

          md:px-[28px]
          md:py-[20px]
        "
      >
        <div className="flex items-center gap-[8px]">
          <ShoppingBag
            className="
              h-[20px]
              w-[20px]
              text-[#D4146A]

              sm:h-[26px]
              sm:w-[26px]

              md:h-[30px]
              md:w-[30px]
            "
          />

          <h2
            className="
              text-[15px]
              font-medium

              sm:text-[21px]

              md:text-[25px]
            "
          >
            ملخص الطلب
          </h2>
        </div>

        <span
          className="
            text-[12px]
            text-[#D4146A]

            sm:text-[16px]

            md:text-[18px]
          "
        >
          {products.length} منتجات
        </span>
      </div>

      {/* Products */}
      <div>
        {products.map((product, index) => (
          <OrderProductRow
            key={product.id}
            image={product.image}
            name={product.name}
            variant={product.variant}
            price={product.price}
            quantity={product.quantity}
            isLast={index === products.length - 1}
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
          px-[16px]
          py-[5px]

          sm:px-[22px]
          sm:py-[17px]

          md:px-[28px]
          md:py-[20px]
        "
      >
        <span
          className="
            text-[18px]
            font-medium

            sm:text-[21px]

            md:text-[25px]
          "
        >
          الإجمالي
        </span>

        <span
          dir="ltr"
          className="
            text-[15px]
            font-medium
            text-[#D4146A]

            sm:text-[25px]

            md:text-[30px]
          "
        >
          {total.toFixed(2)} ر.س
        </span>
      </div>
    </section>
  );
}
