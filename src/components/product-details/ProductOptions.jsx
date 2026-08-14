import { useState } from "react";

import { productShades as shades, productInfo } from "../../data/productDetails.js";

export default function ProductOptions({
  product,
  quantity,
  onQuantityChange,
}) {
  const [activeShade, setActiveShade] = useState(0);

  return (
    <div dir="rtl" className="mt-5 text-right">
      {/* Shade */}
      <h3
        className="
          text-[11px]
          font-medium
          text-[#111]

          sm:text-[15px]

          md:text-[19px]
        "
      >
        اللون: {productInfo.shadeLabel}
      </h3>

      <div className="mt-2 flex items-center justify-start gap-2">
        {shades.map((shade, index) => (
          <button
            key={shade}
            type="button"
            onClick={() => setActiveShade(index)}
            className={`
              flex
              h-[22px]
              w-[22px]
              items-center
              justify-center
              rounded-full

              sm:h-[38px]
              sm:w-[38px]

              md:h-[48px]
              md:w-[48px]

              ${
                activeShade === index
                  ? "border-[1px] border-[#C91F72] p-[1px]"
                  : ""
              }
            `}
          >
            <span
              className="h-full w-full rounded-full"
              style={{ backgroundColor: shade }}
            />
          </button>
        ))}
      </div>

      {/* Quantity */}
      <div className="mt-2">
        <h3
          className="
            text-[9px]
            font-medium

            sm:text-[15px]

            md:text-[19px]
          "
        >
          الكمية
        </h3>

        <div
          className="
            mt-1.5
            flex
            h-[30px]
            w-[100px]
            items-center
            justify-between
            rounded-[7px]
            bg-[#f1f1f170]
            border
            border-[#E4E4E4]
            px-3

            sm:h-[48px]
            sm:w-[175px]

            md:h-[58px]
            md:w-[210px]
          "
        >
          <button
            type="button"
            onClick={() => onQuantityChange?.(quantity + 1)}
            className="text-[19px] text-[#222]"
          >
            +
          </button>

          <span
            className="
              text-[12px]
              text-[#111]

              sm:text-[15px]

              md:text-[18px]
            "
          >
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => onQuantityChange?.(Math.max(1, quantity - 1))}
            className="text-[19px] text-[#222]"
          >
            −
          </button>
        </div>
      </div>
    </div>
  );
}