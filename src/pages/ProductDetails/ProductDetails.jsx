import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import ProductGallery from "../../components/product-details/ProductGallery.jsx";
import ProductInfo from "../../components/product-details/ProductInfo.jsx";
import ProductOptions from "../../components/product-details/ProductOptions.jsx";
import ProductActions from "../../components/product-details/ProductActions.jsx";
import ProductAccordion from "../../components/product-details/ProductAccordion.jsx";
import RelatedProductCard from "../../components/product-details/RelatedProductCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import {
  getProductById,
  getRelatedProducts,
  productsMock,
  relatedProductsMock,
} from "../../services/catalog.js";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = useAsyncData(
    () => getProductById(id),
    productsMock[0],
    [id],
  );

  const relatedProducts = useAsyncData(getRelatedProducts, relatedProductsMock);

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-white
        pb-[70px]
      "
    >
      <Header />

      <main
      dir="ltr"
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          pt-2

          sm:px-5
          sm:pt-4

          md:px-8
          md:pt-6

          lg:px-10
          xl:px-12
        "
      >
        {/* Product Top Section */}
        <section
          className="
    grid
    grid-cols-[52%_48%]
    items-start
    gap-2

    sm:grid-cols-[52%_48%]
    sm:gap-4

    md:grid-cols-2
    md:gap-7

    lg:gap-10
  "
        >
          {/* LEFT - Gallery */}
          <div className="order-1 min-w-0">
            <ProductGallery product={product} />
          </div>

          {/* RIGHT - Product Info */}
          <div className="order-2 min-w-0">
            <ProductInfo product={product} />
            <ProductOptions
              product={product}
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
          </div>
        </section>

        {/* Actions - Full Width */}
        <ProductActions product={product} quantity={quantity} />

        {/* Product Details */}
        <ProductAccordion product={product} />

        {/* Related Products */}
        <section className="mt-4 pb-3">
          <h2
            className="
              text-right
              text-[14px]
              font-semibold

              sm:text-[23px]

              md:text-[30px]
            "
          >
            قد يعجبك أيضًا
          </h2>

          <div
            className="
              mt-1
              grid
              grid-cols-4
              gap-1.5

              sm:mt-3
              sm:gap-3

              md:gap-4
            "
          >
            {relatedProducts.map((product) => (
              <RelatedProductCard
                key={product.id}
                product={product}
                onSelect={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}
