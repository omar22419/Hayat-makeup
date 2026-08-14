import { Star } from "lucide-react";

import { productInfo as fallback } from "../../data/productDetails.js";

export default function ProductInfo({ product }) {
  const info = {
    breadcrumb: product?.breadcrumb || fallback.breadcrumb,
    title: product?.name || fallback.title,
    variant: product?.description || fallback.variant,
    rating: product?.rating ?? fallback.rating,
    reviews: product ? `(${product.reviews ?? product.reviewsCount})` : fallback.reviews,
    price: product?.price ?? fallback.price,
    oldPrice: product?.oldPrice ?? fallback.oldPrice,
    discount: product && product.discount ? `خصم ${product.discount}%` : fallback.discount,
  };

  return (
    <div dir="rtl" className="text-right">
      {/* Breadcrumb */}
      <div
        className="
          mb-2
          text-[7px]
          text-[#777]

          sm:mb-3
          sm:text-[10px]

          md:text-[13px]
        "
      >
        {info.breadcrumb}
      </div>

      {/* Title */}
      <h1
        className="
          text-[15px]
          font-semibold
          leading-tight
          text-[#111]

          sm:text-[27px]

          md:text-[35px]

          lg:text-[43px]
        "
      >
        {info.title}
      </h1>

      {/* Variant */}
      <p
        className="
          mt-0.5
          text-[10px]
          text-[#555]

          sm:text-[14px]

          md:text-[18px]
        "
      >
        {info.variant}
      </p>

      {/* Rating */}
      <div
        dir="ltr"
        className="
          mt-2
          flex
          items-center
          justify-end
          gap-1
        "
      >
        

        <span
          className="
            text-[10px]
            text-[#111]

            sm:text-[13px]

            md:text-[16px]
          "
        >
          {info.rating}
        </span>

        <span
          className="
            text-[9px]
            text-[#999]

            sm:text-[12px]

            md:text-[15px]
          "
        >
          {info.reviews}
        </span>
        <Star
          size={10}
          fill="#C91F72"
          strokeWidth={0}
          className="sm:size-[16px] md:size-[20px]"
        />
      </div>

      {/* Price */}
      <div
        className="
          mt-1
          flex
          items-center
          justify-start
          gap-4
        "
      >
         <span
          className="
            text-[14px]
            font-medium
            text-[#111]

            sm:text-[27px]

            md:text-[37px]
          "
        >
          {info.price} ر.س
        </span>

        <span
          className="
            text-[9px]
            text-[#5f5f5f]
            line-through

            sm:text-[12px]

            md:text-[16px]
          "
        >
          {info.oldPrice} ر.س
        </span>

         {/* Discount */}
      <span
        className="
          
          inline-flex
          rounded-[3px]
          border
          border-[#C91F72]
          px-1
          py-0.5
          text-[7px]
          text-[#C91F72]

          sm:px-3
          sm:py-1
          sm:text-[10px]

          md:text-[13px]
        "
      >
        {info.discount}
      </span>  
      </div>

     
    </div>
  );
}