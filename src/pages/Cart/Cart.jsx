import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/layout/Header";
import MobileBottomNav from "../../components/navigation/MobileBottomNav";

import CartItem from "../../components/cart/CartItem";
import CouponBox from "../../components/cart/CouponBox";
import CartSummary from "../../components/cart/CartSummary";

import { useCartStore } from "../../store/cartStore";
import {
  SHIPPING_FEE,
  FREE_SHIPPING_THRESHOLD,
  CART_DISCOUNT,
} from "../../data/constants.js";

export default function Cart() {
  const navigate = useNavigate();

  const [couponApplied, setCouponApplied] = useState(false);

  const items = useCartStore((state) => state.items);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;

  const discount = couponApplied ? CART_DISCOUNT : 0;

  const total = subtotal + shipping - discount;

  const itemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        w-full
        bg-white
        pb-[78px]

        md:pb-0
      "
    >
      {/* Header */}
      <Header />

      <main
        className="
          mx-auto
          w-full
          px-[14px]

          sm:px-[20px]
          sm:pb-[35px]

          md:max-w-[1100px]
          md:px-[28px]
          md:pb-[45px]

          lg:max-w-[1280px]
          lg:px-[40px]
          lg:pb-[55px]
        "
      >
        {/* Page Header */}
        <section
          className="
            relative
            pt-[5px]
            text-right

            sm:pt-[8px]

            md:pt-[12px]

            lg:pt-[16px]
          "
        >
          {/* Continue Shopping */}
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="
              absolute
              left-0
              top-[8px]
              flex
              items-center
              gap-[3px]
              text-[#D4146A]

              sm:top-[12px]
              sm:gap-[4px]

              md:top-[16px]
              md:gap-[5px]

              lg:top-[20px]
            "
          >
            <span
              className="
                text-[12px]
                font-normal

                sm:text-[14px]

                md:text-[17px]

                lg:text-[19px]
              "
            >
              متابعة التسوق
            </span>
            <ChevronLeft
              className="
                h-[18px]
                w-[18px]

                sm:h-[20px]
                sm:w-[20px]

                md:h-[23px]
                md:w-[23px]

                lg:h-[25px]
                lg:w-[25px]
              "
              strokeWidth={1.8}
            />
          </button>

          <h1
            className="
              text-[22px]
              font-medium
              leading-none
              text-[#111111]

              sm:text-[32px]

              md:text-[40px]

              lg:text-[46px]
            "
          >
            السلة
          </h1>

          <p
            className="
              mt-[5px]
              text-[11px]
              text-[#444444]

              sm:mt-[10px]
              sm:text-[15px]

              md:mt-[12px]
              md:text-[18px]

              lg:text-[20px]
            "
          >
            {itemsCount} منتجات
          </p>
        </section>

        {/* Cart Items */}
        <section
          className="
            mt-[13px]
            flex
            flex-col
            gap-[6px]

            sm:mt-[25px]
            sm:gap-[15px]

            md:mt-[32px]
            md:gap-[18px]

            lg:mt-[38px]
            lg:gap-[20px]
          "
        >
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </section>

        {/* Empty Cart */}
        {items.length === 0 && (
          <div
            className="
              flex
              min-h-[250px]
              items-center
              justify-center
              text-[18px]
              text-[#777777]
            "
          >
            السلة فارغة
          </div>
        )}

        {/* Coupon */}
        {items.length > 0 && (
          <section
            dir="rtl"
            className="
              mt-[10px]

              sm:mt-[20px]

              md:mt-[24px]

              lg:mt-[28px]
            "
          >
            <CouponBox
              applied={couponApplied}
              onApply={() => setCouponApplied(true)}
            />
          </section>
        )}

        {/* Summary */}
        {items.length > 0 && (
          <section
            className="
              mt-[6px]

              sm:mt-[15px]

              md:mt-[18px]

              lg:mt-[20px]
            "
          >
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              discount={discount}
              total={total}
            />
          </section>
        )}

        {/* Checkout */}
        {items.length > 0 && (
          <button
            type="button"
            onClick={() => navigate("/checkout")}
            className="
              mt-[10px]
              flex
              h-[40px]
              w-full
              items-center
              justify-center
              rounded-[13px]
              bg-[#D4146A]
              !text-[16px]
              font-normal
              text-white
              transition-opacity
              hover:opacity-90

              sm:mt-[17px]
              sm:h-[58px]
              sm:rounded-[14px]
              sm:text-[22px]

              md:mt-[20px]
              md:h-[64px]
              md:rounded-[15px]
              md:text-[25px]

              lg:mt-[22px]
              lg:h-[70px]
              lg:rounded-[17px]
              lg:text-[28px]
            "
          >
            إتمام الطلب
          </button>
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeItem="cart" />
    </div>
  );
}
