export default function OrderProductRow({
  image,
  name,
  variant,
  price,
  quantity = 1,
  isLast = false,
}) {
  return (
    <div
      className={`
        flex
        min-h-[80px]
        items-center
        px-[12px]
        py-[7px]

        sm:min-h-[95px]
        sm:px-[20px]

        md:min-h-[110px]
        md:px-[26px]

        ${
          !isLast
            ? "border-b border-dashed border-[#DDDDDD]"
            : ""
        }
      `}
    >
      {/* Product Info */}
      <div className="flex flex-1 items-center gap-[10px]">
        <div
          className="
            flex
            h-[60px]
            w-[60px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-[8px]
            bg-[#F7F7F7]

            sm:h-[80px]
            sm:w-[80px]

            md:h-[92px]
            md:w-[92px]
          "
        >
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0">
          <h3
            className="
              truncate
              text-[13px]
              text-[#222222]

              sm:text-[16px]

              md:text-[19px]
            "
          >
            {name}
          </h3>

          <p
            className="
              mt-[4px]
              text-[11px]
              text-[#777777]

              sm:text-[13px]

              md:text-[15px]
            "
          >
            {variant}
          </p>
        </div>
      </div>

      {/* Quantity */}
      <span
        dir="ltr"
        className="
          mx-[40px]
          text-[13px]
          font-medium
          text-[#D4146A]

          sm:mx-[25px]
          sm:text-[16px]

          md:mx-[35px]
          md:text-[18px]
        "
      >
        × {quantity}
      </span>

      {/* Price */}
      <span
      dir="ltr"
        className="
          whitespace-nowrap
          text-[13px]
          font-medium
          text-[#222222]

          sm:text-[16px]

          md:text-[18px]
        "
      >
        {price} ر.س
      </span>
    </div>
  );
}