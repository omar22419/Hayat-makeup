import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  LockKeyhole,
  UserRound,
  Mail,
  MapPin,
  House,
  MessageSquare,
  ChevronDown,
  CreditCard,
  HandCoins,
  Building2,
  WalletCards,
  ShoppingBag,
  ShieldCheck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

import { useCartStore } from "../../store/cartStore";

import logo from "../../assets/hero.png";

import { SHIPPING_FEE, CHECKOUT_DISCOUNT, COUPON_CODE } from "../../data/constants.js";
import { orderService } from "../../services/orders.js";

export default function Checkout() {
  const navigate = useNavigate();

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    area: "",
    address: "",
    notes: "",
  });

  const subtotal = items.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  const shipping = items.length > 0 ? SHIPPING_FEE : 0;

  const discount = CHECKOUT_DISCOUNT;

  const total = subtotal + shipping - discount;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const order = await orderService.createOrder({
        customer: form,
        paymentMethod,
        items,
        subtotal,
        shipping,
        discount,
        total,
      });

      console.log("Order created:", order);

      clearCart();

      // نمرر بيانات الطلب لصفحة التأكيد
      navigate("/order-success", { state: { order } });
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        w-full
        bg-white
        pb-[20px]

        sm:pb-[30px]

        md:pb-[40px]
      "
    >
      {/* ================= HEADER ================= */}
      <header
        className="
          relative
          flex
          h-[78px]
          w-full
          items-center
          justify-between
          border-b
          border-[#EEEEEE]
          px-[14px]

          sm:h-[95px]
          sm:px-[24px]

          md:h-[110px]
          md:px-[40px]

          lg:h-[125px]
          lg:px-[55px]
        "
      >
        {/* Back */}
        <button
          type="button"
          onClick={() => navigate("/cart")}
          aria-label="العودة للسلة"
          className="
            flex
            items-center
            justify-center
            text-[#222222]
          "
        >
          <ArrowRight
            className="
              h-[22px]
              w-[22px]

              sm:h-[26px]
              sm:w-[26px]

              md:h-[30px]
              md:w-[30px]

              lg:h-[34px]
              lg:w-[34px]
            "
            strokeWidth={1.6}
          />
        </button>

        {/* Logo */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
          "
        >
          <img
            src={logo}
            alt="Hayat Makeup"
            className="
              h-[58px]
              w-auto
              object-contain

              sm:h-[70px]

              md:h-[82px]

              lg:h-[92px]
            "
          />
        </div>

        {/* Cart */}
        <button
          type="button"
          onClick={() => navigate("/cart")}
          aria-label="السلة"
          className="
            relative
            flex
            items-center
            justify-center
          "
        >
          <ShoppingBag
            className="
              h-[25px]
              w-[25px]

              sm:h-[29px]
              sm:w-[29px]

              md:h-[33px]
              md:w-[33px]

              lg:h-[37px]
              lg:w-[37px]
            "
            strokeWidth={1.5}
          />

          {items.length > 0 && (
            <span
              className="
                absolute
                -right-[5px]
                -top-[7px]
                flex
                h-[16px]
                min-w-[16px]
                items-center
                justify-center
                rounded-full
                bg-[#D4146A]
                px-[3px]
                text-[9px]
                text-white

                sm:-right-[6px]
                sm:-top-[8px]
                sm:h-[18px]
                sm:min-w-[18px]
                sm:text-[10px]

                md:h-[20px]
                md:min-w-[20px]
                md:text-[11px]
              "
            >
              {items.length}
            </span>
          )}
        </button>
      </header>

      {/* ================= PAGE INTRO ================= */}
      <section
        className="
          border-b
          border-[#EEEEEE]
          px-[14px]
          py-[15px]

          sm:px-[24px]
          sm:py-[20px]

          md:px-[40px]
          md:py-[25px]

          lg:px-[55px]
          lg:py-[30px]
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1280px]
            items-center
            justify-between
          "
        >
          <div>
            <h1
              className="
                text-[14px]
                font-medium
                leading-none
                text-[#111111]

                sm:text-[28px]

                md:text-[34px]

                lg:text-[40px]
              "
            >
              الدفع وإتمام الطلب
            </h1>

            <p
              className="
                mt-[7px]
                text-[8px]
                text-[#555555]

                sm:mt-[9px]
                sm:text-[13px]

                md:mt-[11px]
                md:text-[15px]

                lg:text-[17px]
              "
            >
              يرجى تعبئة بياناتك لإتمام طلبك
            </p>
          </div>

          {/* Secure */}
          <div
            className="
            flex
            items-center
              gap-[7px]

              sm:flex
              sm:gap-[8px]

              md:gap-[10px]
            "
          >
            <span
              className="
                whitespace-nowrap
                text-[8px]
                text-[#222222]

                md:text-[14px]
              "
            >
              تسوق آمن ومضمون
            </span>
            <LockKeyhole
              className="
                h-[16px]
                w-[16px]
                text-[#D4146A]

                md:h-[28px]
                md:w-[28px]
              "
              strokeWidth={1.5}
            />
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-[14px]
          pt-[16px]

          sm:px-[24px]
          sm:pt-[22px]

          md:px-[40px]
          md:pt-[28px]

          lg:px-[55px]
          lg:pt-[34px]
        "
      >
        <form onSubmit={handleSubmit}>
          {/* ================= CUSTOMER INFO ================= */}
          <section>
            <div
              className="
                mb-[12px]
                flex
                items-center
                gap-[8px]

                sm:mb-[16px]
                sm:gap-[9px]

                md:mb-[20px]
                md:gap-[10px]
              "
            >
              <UserRound
                className="
                  h-[23px]
                  w-[23px]
                  text-[#D4146A]

                  sm:h-[27px]
                  sm:w-[27px]

                  md:h-[31px]
                  md:w-[31px]
                "
                strokeWidth={1.5}
              />

              <h2
                className="
                  text-[16px]
                  font-medium
                  text-[#222222]

                  sm:text-[24px]

                  md:text-[29px]

                  lg:text-[32px]
                "
              >
                معلومات العميل
              </h2>
            </div>

            <div
              className="
    grid
    grid-cols-2
    gap-[8px]

    sm:gap-[12px]

    md:grid-cols-2
    md:gap-[14px]
  "
            >
              {/* Name */}
              <InputField
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="الاسم الكامل"
                icon={UserRound}
                required
              />

              {/* Email */}
              <InputField
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني (اختياري)"
                icon={Mail}
                type="email"
              />

              {/* Phone - Full Width */}
              <div
                className="
      relative
      col-span-2
      flex
      h-[40px]
      w-full
      items-center
      rounded-[7px]
      border
      border-[#DDDDDD]
      bg-white

      sm:h-[62px]
      sm:rounded-[8px]

      md:h-[68px]
      md:rounded-[9px]
    "
              >
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="رقم الجوال"
                  required
                  className="
        h-full
        w-full
        bg-transparent
        px-[45px]
        text-right
        !text-[12px]
        text-[#222222]
        outline-none
        placeholder:text-[#999999]

        sm:px-[52px]
        sm:text-[14px]

        md:px-[58px]
        md:text-[16px]
      "
                />

                <span
                  className="
        absolute
        right-[12px]
        top-1/2
        -translate-y-1/2
        text-[11px]
        text-[#222222]

        sm:right-[15px]
        sm:text-[13px]

        md:right-[18px]
        md:text-[15px]
      "
                >
                  +966
                </span>

                <ChevronDown
                  className="
        absolute
        left-[12px]
        h-[17px]
        w-[17px]
        text-[#555555]

        sm:left-[15px]
        sm:h-[19px]
        sm:w-[19px]

        md:left-[18px]
        md:h-[21px]
        md:w-[21px]
      "
                  strokeWidth={1.5}
                />
              </div>

              {/* City */}
              <SelectField
                value={form.city}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    city: e.target.value,
                  }))
                }
                placeholder="المدينة"
                icon={MapPin}
                options={["الرياض", "جدة", "الدمام", "مكة", "المدينة المنورة"]}
                required
              />

              {/* Area */}
              <SelectField
                value={form.area}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    area: e.target.value,
                  }))
                }
                placeholder="المنطقة / الحي"
                icon={MapPin}
                options={[
                  "الوسطى",
                  "الشمالية",
                  "الجنوبية",
                  "الشرقية",
                  "الغربية",
                ]}
              />

              {/* Address - Full Width */}
              <div className="col-span-2">
                <InputField
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="العنوان بالتفصيل"
                  icon={House}
                  full
                  required
                />
              </div>

              {/* Notes - Full Width */}
              <div className="col-span-2">
                <InputField
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="ملاحظات إضافية (اختياري)"
                  icon={MessageSquare}
                  full
                />
              </div>
            </div>
          </section>

          {/* ================= PAYMENT ================= */}
          <section
            className="
              mt-[15px]

              sm:mt-[38px]

              md:mt-[45px]

              lg:mt-[52px]
            "
          >
            <div
              className="
                mb-[10px]
                flex
                items-center
                gap-[8px]

                sm:mb-[16px]

                md:mb-[20px]
              "
            >
              <CreditCard
                className="
                  h-[23px]
                  w-[23px]
                  text-[#D4146A]

                  sm:h-[27px]
                  sm:w-[27px]

                  md:h-[31px]
                  md:w-[31px]
                "
                strokeWidth={1.5}
              />

              <h2
                className="
                  text-[13px]
                  font-medium
                  text-[#222222]

                  sm:text-[24px]

                  md:text-[29px]

                  lg:text-[32px]
                "
              >
                طريقة الدفع
              </h2>
            </div>

            <div
              className="
                grid
                grid-cols-3
                gap-[9px]

                sm:grid-cols-3
                sm:gap-[12px]

                md:gap-[16px]
              "
            >
              <PaymentCard
                selected={paymentMethod === "cash"}
                onClick={() => setPaymentMethod("cash")}
                icon={HandCoins}
                title="الدفع عند الاستلام"
              />

              <PaymentCard
                selected={paymentMethod === "bank"}
                onClick={() => setPaymentMethod("bank")}
                icon={Building2}
                title="تحويل بنكي"
              />

              <PaymentCard
                selected={paymentMethod === "wallet"}
                onClick={() => setPaymentMethod("wallet")}
                icon={WalletCards}
                title="محفظة إلكترونية"
              />
            </div>
          </section>

          {/* ================= ORDER SUMMARY ================= */}
          <section
            className="
              mt-[18px]

              sm:mt-[38px]

              md:mt-[45px]

              lg:mt-[52px]
            "
          >
            <div
              className="
                mb-[6px]
                flex
                items-center
                gap-[8px]

                sm:mb-[16px]

                md:mb-[20px]
              "
            >
              <ShoppingBag
                className="
                  h-[18px]
                  w-[18px]
                  text-[#D4146A]

                  sm:h-[27px]
                  sm:w-[27px]

                  md:h-[31px]
                  md:w-[31px]
                "
                strokeWidth={1.5}
              />

              <h2
                className="
                  text-[14px]
                  font-medium
                  text-[#222222]

                  sm:text-[24px]

                  md:text-[29px]

                  lg:text-[32px]
                "
              >
                ملخص الطلب
              </h2>
            </div>

            <div
              className="
                overflow-hidden
                border-t
                border-[#EEEEEE]
                bg-white

                sm:rounded-[10px]
              "
            >
              {/* Products */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex
                    min-h-[50px]
                    items-center
                    justify-between
                    border-b
                    border-[#EEEEEE]
                    px-[10px]
                    py-[7px]

                    sm:min-h-[88px]
                    sm:px-[15px]

                    md:min-h-[100px]
                    md:px-[20px]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-[9px]

                      sm:gap-[13px]

                      md:gap-[16px]
                    "
                  >
                    <div
                      className="
                        flex
                        h-[55px]
                        w-[55px]
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[6px]
                        bg-[#F7F7F7]

                        sm:h-[68px]
                        sm:w-[68px]

                        md:h-[78px]
                        md:w-[78px]
                      "
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          h-full
                          w-full
                          object-contain
                        "
                      />
                    </div>

                    <div>
                      <h3
                        className="
                          text-[11px]
                          font-medium
                          text-[#222222]

                          sm:text-[14px]

                          md:text-[16px]
                        "
                      >
                        {item.name}
                      </h3>

                      <p
                        className="
                          mt-[3px]
                          text-[9px]
                          text-[#555555]

                          sm:text-[11px]

                          md:text-[13px]
                        "
                      >
                        {item.quantity} × {item.price} ريال
                      </p>
                    </div>
                  </div>

                  <span
                    className="
                      text-[11px]
                      text-[#222222]
                      font-medium
                      sm:text-[14px]

                      md:text-[16px]
                    "
                  >
                    {Number(item.price) * item.quantity} ريال
                  </span>
                </div>
              ))}

              {/* Shipping */}
              <SummaryRow label="رسوم التوصيل" value={`${shipping} ريال`} />

              {/* Discount */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-[10px]
                  py-[9px]

                  sm:px-[15px]
                  sm:py-[12px]

                  md:px-[20px]
                  md:py-[14px]
                "
              >
                <div className="flex items-center gap-[30px]">
                  <span
                    className="
                      text-[10px]
                      text-[#222222]

                      sm:text-[13px]

                      md:text-[15px]
                    "
                  >
                    خصم
                  </span>
                  <span
                    className="
                        rounded-[4px]
                        bg-[#FFF0F6]
                        px-[7px]
                        py-[3px]
                        text-[8px]
                        text-[#D4146A]

                        sm:text-[10px]

                        md:text-[11px]
                      "
                  >
                    {COUPON_CODE}
                  </span>
                </div>
                <span
                  className="
                      text-[10px]
                      text-[#D4146A]

                      sm:text-[13px]

                      md:text-[15px]
                    "
                >
                  {discount}- ريال
                </span>
              </div>

              {/* Total */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[#EEEEEE]
                  px-[10px]
                  py-[1px]

                  sm:px-[15px]
                  sm:py-[15px]

                  md:px-[20px]
                  md:py-[18px]
                "
              >
                <span
                  className="
                    text-[12px]
                    font-medium
                    text-[#222222]

                    sm:text-[23px]

                    md:text-[27px]
                  "
                >
                  المجموع الكلي
                </span>

                <span
                  className="
                    text-[14px]
                    font-medium
                    text-[#D4146A]

                    sm:text-[26px]

                    md:text-[31px]
                  "
                >
                  {total} ريال
                </span>
              </div>
            </div>
          </section>

          {/* ================= CONFIRM ================= */}
          <button
            type="submit"
            className="
              mt-[12px]
              flex
              h-[35px]
              w-full
              items-center
              justify-center
              rounded-[5px]
              bg-[#D4146A]
              !text-[13px]
              font-normal
              text-white
              transition-opacity
              hover:opacity-90

              sm:mt-[20px]
              sm:h-[60px]
              sm:rounded-[9px]
              sm:text-[22px]

              md:mt-[25px]
              md:h-[66px]
              md:rounded-[10px]
              md:text-[25px]

              lg:h-[72px]
              lg:text-[28px]
            "
          >
            تأكيد الطلب
          </button>
        </form>

        {/* ================= FOOTER FEATURES ================= */}
        <section
          className="
    mt-[14px]
    flex
    w-full
    items-stretch
    justify-between
    pt-[1px]

    sm:mt-[35px]
    sm:pt-[22px]

    md:mt-[45px]
    md:pt-[28px]

    lg:mt-[55px]
    lg:pt-[32px]
  "
        >
          <div
            className="
      flex
      flex-1
      items-center
      justify-center
      border-l
      border-[#E5E5E5]
    "
          >
            <FooterFeature
              icon={Headphones}
              title="دعم العملاء"
              description="نحن هنا لمساعدتك"
            />
          </div>

          <div
            className="
      flex
      flex-1
      items-center
      justify-center
      border-l
      border-[#E5E5E5]
    "
          >
            <FooterFeature
              icon={BadgeCheck}
              title="منتجات أصلية"
              description="100% أصلية ومضمونة"
            />
          </div>

          <div
            className="
      flex
      flex-1
      items-center
      justify-center
    "
          >
            <FooterFeature
              icon={ShieldCheck}
              title="تسوق آمن"
              description="حماية بياناتك مضمونة"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

/* ========================================================= */
/* INPUT */
/* ========================================================= */

function InputField({
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  type = "text",
  full = false,
  required = false,
}) {
  return (
    <div
      className={`
        relative
        flex
        h-[40px]
        w-full
        items-center
        rounded-[7px]
        border
        border-[#DDDDDD]
        bg-white

        sm:h-[62px]
        sm:rounded-[8px]

        md:h-[68px]
        md:rounded-[9px]

        ${full ? "md:col-span-2" : ""}
      `}
    >
      <Icon
        className="
          absolute
          right-[12px]
          h-[18px]
          w-[18px]
          text-[#888888]
          sm:right-[15px]
          sm:h-[21px]
          sm:w-[21px]

          md:right-[18px]
          md:h-[23px]
          md:w-[23px]
        "
        strokeWidth={1.5}
      />

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="
          h-full
          w-full
          bg-transparent
          px-[43px]
          text-right
          !text-[9px]
          text-[#222222]
          outline-none
          placeholder:text-[#999999]

          sm:px-[50px]
          sm:text-[14px]

          md:px-[57px]
          md:text-[16px]
        "
      />
    </div>
  );
}

/* ========================================================= */
/* SELECT */
/* ========================================================= */

function SelectField({ value, onChange, placeholder, icon: Icon, options, required = false }) {
  return (
    <div
      className="
        relative
        flex
        h-[35px]
        w-full
        items-center
        rounded-[7px]
        border
        border-[#DDDDDD]
        bg-white

        sm:h-[62px]
        sm:rounded-[8px]

        md:h-[68px]
        md:rounded-[9px]
      "
    >
      <Icon
        className="
          absolute
          right-[12px]
          h-[18px]
          w-[18px]
          text-[#888888]

          sm:right-[15px]
          sm:h-[21px]
          sm:w-[21px]

          md:right-[18px]
          md:h-[23px]
          md:w-[23px]
        "
        strokeWidth={1.5}
      />

      <select
        value={value}
        onChange={onChange}
        required={required}
        className="
          h-full
          w-full
          appearance-none
          bg-transparent
          px-[43px]
          text-right
          !text-[9px]
          text-[#777777]
          outline-none

          sm:px-[50px]
          sm:text-[14px]

          md:px-[57px]
          md:text-[16px]
        "
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        className="
          pointer-events-none
          absolute
          left-[12px]
          h-[17px]
          w-[17px]
          text-[#555555]

          sm:left-[15px]
          sm:h-[19px]
          sm:w-[19px]

          md:left-[18px]
          md:h-[21px]
          md:w-[21px]
        "
        strokeWidth={1.5}
      />
    </div>
  );
}

/* ========================================================= */
/* PAYMENT CARD */
/* ========================================================= */

function PaymentCard({ selected, onClick, icon: Icon, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        h-[50px]
        w-full
        min-w-0
        items-center
        justify-between
        rounded-[7px]
        border
        px-[8px]
        transition-colors

        sm:h-[82px]
        sm:rounded-[9px]
        sm:px-[12px]

        md:h-[92px]
        md:px-[20px]

        ${selected ? "border-[#D4146A]" : "border-[#DDDDDD]"}
      `}
    >
      <div className="flex min-w-0 items-center gap-[8px]">
        <Icon
          className="
            h-[15px]
            w-[15px]
            shrink-0
            text-[#222222]

            sm:h-[25px]
            sm:w-[25px]

            md:h-[31px]
            md:w-[31px]
          "
          strokeWidth={1.5}
        />

        <span
          className="
            truncate
            text-[7px]
            text-[#222222]

            sm:text-[12px]

            md:text-[16px]
          "
        >
          {title}
        </span>
      </div>

      <span
        className={`
          flex
          h-[17px]
          w-[17px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border

          sm:h-[22px]
          sm:w-[22px]

          md:h-[26px]
          md:w-[26px]

          ${selected ? "border-[#D4146A]" : "border-[#BBBBBB]"}
        `}
      >
        {selected && (
          <span
            className="
              h-[9px]
              w-[9px]
              rounded-full
              bg-[#D4146A]

              sm:h-[11px]
              sm:w-[11px]

              md:h-[14px]
              md:w-[14px]
            "
          />
        )}
      </span>
    </button>
  );
}

/* ========================================================= */
/* SUMMARY ROW */
/* ========================================================= */

function SummaryRow({ label, value }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        px-[10px]

        sm:px-[15px]
        sm:py-[12px]

        md:px-[20px]
        md:py-[14px]
      "
    >
      <span
        className="
          text-[10px]
          text-[#222222]

          sm:text-[13px]

          md:text-[15px]
        "
      >
        {label}
      </span>

      <span
        className="
          text-[10px]
          text-[#222222]

          sm:text-[13px]

          md:text-[15px]
        "
      >
        {value}
      </span>
    </div>
  );
}

/* ========================================================= */
/* FOOTER FEATURE */
/* ========================================================= */

function FooterFeature({ icon: Icon, title, description }) {
  return (
    <div
      className="
        flex
        flex-1
        items-center
        justify-center
        gap-[5px]
        text-center

        sm:gap-[8px]

        md:gap-[11px]
      "
    >
      <Icon
        className="
          h-[23px]
          w-[23px]
          shrink-0
          text-[#111111]

          sm:h-[29px]
          sm:w-[29px]

          md:h-[35px]
          md:w-[35px]
        "
        strokeWidth={1.5}
      />

      <div>
        <h3
          className="
            whitespace-nowrap
            text-[9px]
            font-medium
            text-[#222222]

            sm:text-[12px]

            md:text-[15px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-[2px]
            whitespace-nowrap
            text-[7px]
            text-[#999999]

            sm:text-[9px]

            md:text-[11px]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
