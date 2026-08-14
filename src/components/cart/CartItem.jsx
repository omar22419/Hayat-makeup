import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "../../store/cartStore";

export default function CartItem({
  id,
  name,
  description,
  color,
  colorCode,
  price,
  quantity,
  image,
}) {
  const increaseQuantity =
    useCartStore((state) => state.increaseQuantity);

  const decreaseQuantity =
    useCartStore((state) => state.decreaseQuantity);

  const removeItem =
    useCartStore((state) => state.removeItem);

  return (
    <article
      dir="rtl"
      className="
        relative
        flex
        h-[120px]
        w-full
        items-center
        rounded-[10px]
        border
        border-[#EEEEEE]
        bg-white
        px-[6px]
        py-[6px]

        sm:h-[190px]
        sm:rounded-[11px]
        sm:px-[13px]

        md:h-[205px]
        md:rounded-[13px]
        md:px-[16px]

        lg:h-[220px]
        lg:rounded-[15px]
        lg:px-[18px]
      "
    >
      {/* Delete */}
      <button
        type="button"
        onClick={() => removeItem(id)}
        aria-label="حذف المنتج"
        className="
          absolute
          left-[13px]
          top-[18px]
          flex
          items-center
          justify-center
          text-[#D4146A]

          sm:left-[16px]
          sm:top-[20px]

          md:left-[18px]
          md:top-[22px]

          lg:left-[20px]
          lg:top-[24px]
        "
      >
        <Trash2
          className="
            h-[15px]
            w-[15px]

            sm:h-[24px]
            sm:w-[24px]

            md:h-[27px]
            md:w-[27px]

            lg:h-[29px]
            lg:w-[29px]
          "
          strokeWidth={1.5}
        />
      </button>

      {/* Product Image */}
      <div
        className="
          flex
          h-[100px]
          w-[95px]
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-[9px]
          border
          border-[#EEEEEE]
          bg-white

          sm:h-[132px]
          sm:w-[118px]

          md:h-[145px]
          md:w-[130px]

          lg:h-[158px]
          lg:w-[142px]
        "
      >
        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-contain
            
          "
        />
      </div>

      {/* Product Information */}
      <div
        className="
          flex
          h-full
          min-w-0
          flex-1
          flex-col
          items-start
          px-[10px]
          pt-[12px]

          sm:px-[18px]

          md:px-[24px]

          lg:px-[28px]
        "
      >
        {/* Name */}
        <h3
          className="
            w-full
            text-right
            text-[12px]
            font-bold
            leading-[1.3]
            text-[#222222]

            sm:text-[18px]

            md:text-[21px]

            lg:text-[24px]
          "
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className="
            mt-[5px]
            w-full
            text-right
            text-[11px]
            font-normal
            text-[#444444]

            sm:mt-[9px]
            sm:text-[13px]

            md:mt-[11px]
            md:text-[15px]

            lg:text-[17px]
          "
        >
          {description}
        </p>

        {/* Color */}
        <div
          className="
            mt-[6px]
            flex
            w-full
            items-center
            justify-start
            gap-[3px]
            text-[11px]
            text-[#444444]

            sm:mt-[10px]
            sm:gap-[8px]
            sm:text-[13px]

            md:mt-[12px]
            md:gap-[9px]
            md:text-[15px]

            lg:text-[17px]
          "
        >
          <span>اللون:</span>

          <span>{color}</span>
        
          <span
            className="
              h-[8px]
              w-[8px]
              rounded-full

              sm:h-[15px]
              sm:w-[15px]

              md:h-[17px]
              md:w-[17px]

              lg:h-[19px]
              lg:w-[19px]
            "
            style={{
              backgroundColor: colorCode,
            }}
          />

        </div>
      </div>

      {/* Price + Quantity */}
      <div
        className="
          absolute
          bottom-[15px]
          left-[12px]
          flex
          flex-col
          items-center

          sm:bottom-[18px]
          sm:left-[15px]

          md:bottom-[20px]
          md:left-[18px]

          lg:bottom-[22px]
          lg:left-[20px]
        "
      >
        {/* Price */}
        <div
          className="
            mb-[8px]
            whitespace-nowrap
            text-[14px]
            ml-10
            font-medium
            text-[#222222]

            sm:mb-[11px]
            sm:text-[16px]

            md:mb-[12px]
            md:text-[18px]

            lg:text-[20px]
          "
        >
          {price} ر.س
        </div>

        {/* Quantity */}
        <div
          className="
            flex
            h-[30px]
            w-[100px]
            overflow-hidden
            rounded-[6px]
            border
            border-[#D9D9D9]
            bg-white

            sm:h-[42px]
            sm:w-[150px]

            md:h-[46px]
            md:w-[165px]

            lg:h-[50px]
            lg:w-[180px]
          "
        >
          {/* Plus */}
          <button
            type="button"
            onClick={() => increaseQuantity(id)}
            className="
              flex
              flex-1
              items-center
              justify-center
              text-[#D4146A]
            "
          >
            <Plus
              className="
                h-[15px]
                w-[15px]

                sm:h-[18px]
                sm:w-[18px]

                md:h-[20px]
                md:w-[20px]
              "
              strokeWidth={1.7}
            />
          </button>

          {/* Quantity */}
          <div
            className="
              flex
              w-[45px]
              items-center
              justify-center
              border-x
              border-[#EEEEEE]
              text-[16px]
              text-[#222222]

              sm:w-[50px]
              sm:text-[17px]

              md:w-[55px]
              md:text-[18px]
            "
          >
            {quantity}
          </div>

          {/* Minus */}
          <button
            type="button"
            onClick={() => decreaseQuantity(id)}
            disabled={quantity <= 1}
            className="
              flex
              flex-1
              items-center
              justify-center
              disabled:opacity-30
              text-[#D4146A]
            "
          >
            <Minus
              className="
                h-[15px]
                w-[15px]

                sm:h-[18px]
                sm:w-[18px]

                md:h-[20px]
                md:w-[20px]
              "
              strokeWidth={1.7}
            />
          </button>
        </div>
      </div>
    </article>
  );
}