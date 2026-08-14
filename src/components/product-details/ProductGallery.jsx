import { useState } from "react";

import { productGalleryImages as images } from "../../data/productDetails.js";

export default function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = useState(() =>
    product?.image && !images.includes(product.image)
      ? product.image
      : images[0]
  );

  return (
    <div className="w-full">
      {/* Main Image */}
      <div
        className="
          w-full
          overflow-hidden
          rounded-[10px]

          sm:h-[300px]
          sm:rounded-[14px]

          md:h-[430px]

          lg:h-[520px]
        "
      >
        <img
          src={activeImage}
          alt={product?.name || "أحمر شفاه مطفي"}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div
        className="
          mt-2
          flex
          gap-1.5
          overflow-x-auto
          no-scrollbar

          sm:mt-3
          sm:gap-2

          md:gap-3
        "
      >
        {images.slice(0, 4).map((image) => {
          const active = activeImage === image;

          return (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`
                h-[43px]
                w-[43px]
                shrink-0
                overflow-hidden
                rounded-[6px]
                border
                bg-white

                sm:h-[64px]
                sm:w-[64px]
                sm:rounded-[8px]

                md:h-[82px]
                md:w-[82px]

                ${active ? "border-[2px] border-[#C91F72]" : "border-[#EAEAEA]"}
              `}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-contain"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
