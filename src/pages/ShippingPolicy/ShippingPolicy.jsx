import {
  Truck,
  Package,
  Clock3,
  Tag,
  MapPin,
  Search,
  TriangleAlert,
  ClipboardList,
} from "lucide-react";

import ShippingHeader from "../../components/shipping/ShippingHeader.jsx";
import ShippingCard from "../../components/shipping/ShippingCard.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import { SHIPPING_FEE, FREE_SHIPPING_THRESHOLD } from "../../data/constants.js";

const shippingSections = [
  {
    title: "مدة تجهيز الطلب",
    icon: Package,
    content: (
      <>
        <p>يتم تجهيز الطلبات خلال 1-2 يوم عمل من تأكيد الطلب.</p>
        <p>
          لا يتم التجهيز أو الشحن في عطلات نهاية الأسبوع والمناسبات الرسمية.
        </p>
      </>
    ),
  },
  {
    title: "مدة التوصيل",
    icon: Clock3,
    content: (
      <>
        <p>داخل المدن الرئيسية: من 1 إلى 3 أيام عمل.</p>
        <p>المدن والمناطق الأخرى: من 3 إلى 7 أيام عمل.</p>
      </>
    ),
  },
  {
    title: "رسوم الشحن",
    icon: Tag,
    content: (
      <>
        <p>شحن مجاني للطلبات التي تزيد عن {FREE_SHIPPING_THRESHOLD} ريال.</p>
        <p>رسوم شحن ثابتة {SHIPPING_FEE} ريال للطلبات الأقل من {FREE_SHIPPING_THRESHOLD} ريال.</p>
      </>
    ),
  },
  {
    title: "المدن والمناطق المتاحة",
    icon: MapPin,
    content: (
      <p>نوفر خدمات التوصيل إلى جميع مدن ومناطق المملكة العربية السعودية.</p>
    ),
  },
  {
    title: "التتبع",
    icon: Search,
    content: (
      <>
        <p>عند شحن طلبك، ستصلك رسالة تحتوي على رقم التتبع</p>
        <p>لمتابعة حالة الشحنة خطوة بخطوة.</p>
      </>
    ),
  },
  {
    title: "التأخير المحتمل",
    icon: TriangleAlert,
    content: (
      <>
        <p>قد يحدث تأخير في التوصيل بسبب ظروف خارجة عن إرادتنا</p>
        <p>مثل الأحوال الجوية أو العطلات الرسمية.</p>
        <p>سيتم إشعارك في حال وجود أي تأخير متوقع.</p>
      </>
    ),
  },
  {
    title: "ملاحظات الاستلام",
    icon: ClipboardList,
    content: (
      <>
        <p>يرجى التأكد من صحة بيانات العنوان ورقم الجوال عند إتمام الطلب.</p>
        <p>يجب استلام الطلب من قبل الشخص المستلم أو من ينوب عنه.</p>
        <p>
          في حال وجود مشكلة في الطلب، يرجى التواصل مع خدمة العملاء خلال 24 ساعة.
        </p>
      </>
    ),
  },
];

export default function ShippingPolicy() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <ShippingHeader />

      <main className="w-full px-4 pb-24 sm:px-6 md:px-10 lg:px-14">
        {/* Page Title */}
        <section
          dir="rtl"
          className="mx-auto max-w-[680px] text-right sm:max-w-[760px] md:max-w-[860px] lg:max-w-[960px]"
        >
          <div className="flex items-center justify-start gap-3 sm:gap-4 md:gap-5">
            <div
              className="
                flex
                h-[45px]
                w-[45px]
                shrink-0
                items-center
                justify-center
                rounded-[16px]
                bg-[#FFF5F9]
                text-[#C91F72]

                sm:h-[52px]
                sm:w-[52px]
                sm:rounded-[17px]

                md:h-[60px]
                md:w-[60px]
                md:rounded-[18px]

                lg:h-[68px]
                lg:w-[68px]
              "
            >
              <Truck
                size={25}
                strokeWidth={1.5}
                className="sm:size-[28px] md:size-[32px] lg:size-[36px]"
              />
            </div>
            <h1
              className="
                text-[19px]
                font-semibold
                leading-tight
                text-[#111]

                sm:text-[22px]

                md:text-[26px]

                lg:text-[30px]
              "
            >
              سياسة الشحن والتوصيل
            </h1>
          </div>

          <p
            className="
              mr-[55px]
              text-right
              text-[9px]
              leading-3
              text-[#595959]

              sm:mr-[64px]
              sm:text-[10px]
              sm:leading-6

              md:mr-[76px]
              md:text-[12px]
              md:leading-7

              lg:mr-[86px]
              lg:text-[13px]
            "
          >
            نحرص على توصيل طلبك بأسرع وقت وبأفضل جودة،
            <br />
            لتصلك منتجاتك الجميلة أينما كنت.
          </p>
        </section>

        {/* Shipping Cards */}
        <section
          className="
            mx-auto
            mt-4
            flex
            max-w-[680px]
            flex-col
            gap-2

            sm:mt-5
            sm:max-w-[760px]
            sm:gap-3

            md:mt-6
            md:max-w-[860px]
            md:gap-4

            lg:max-w-[960px]
            lg:gap-5
          "
        >
          {shippingSections.map((section) => (
            <ShippingCard
              key={section.title}
              title={section.title}
              icon={section.icon}
            >
              {section.content}
            </ShippingCard>
          ))}
        </section>
      </main>
      <MobileBottomNav />
    </div>
  );
}
