import { useState } from "react";

import {
  FileCheck,
  CreditCard,
  Tag,
  Truck,
  PackageCheck,
  Shield,
  Copyright,
  TriangleAlert,
  Headphones,
} from "lucide-react";

import TermsHeader from "../../components/terms/TermsHeader";
import TermsItem from "../../components/terms/TermsItem";
import MobileBottomNav from "../../components/navigation/MobileBottomNav";

const terms = [
  {
    id: 1,
    title: "القبول بالشروط",
    description:
      "باستخدامك للموقع أو التطبيق، فإنك توافق على الالتزام بهذه الشروط والأحكام.",
    icon: FileCheck,
  },
  {
    id: 2,
    title: "الطلبات والدفع",
    description:
      "جميع الطلبات تخضع للتوفر. يتم الدفع عبر الوسائل المتاحة بالموقع.",
    icon: CreditCard,
  },
  {
    id: 3,
    title: "الأسعار",
    description:
      "جميع الأسعار بالريال السعودي وتشمل ضريبة القيمة المضافة.",
    icon: Tag,
  },
  {
    id: 4,
    title: "الشحن",
    description:
      "نقوم بشحن الطلبات إلى جميع مناطق المملكة وفق شركة الشحن واختيارك.",
    icon: Truck,
  },
  {
    id: 5,
    title: "الاستبدال والاسترجاع",
    description:
      "يمكنك الاستبدال أو الاسترجاع خلال 7 أيام من استلام الطلب وفق سياسة الاسترجاع المعتمدة.",
    icon: PackageCheck,
  },
  {
    id: 6,
    title: "استخدام الموقع أو التطبيق",
    description:
      "يُمنع استخدام الموقع أو التطبيق لأي أغراض غير قانونية أو تضر بتجربة المستخدم أو أمن النظام.",
    icon: Shield,
  },
  {
    id: 7,
    title: "حقوق الملكية",
    description:
      "جميع المحتويات والملكية الفكرية الخاصة بمتجر Hayat Makeup محفوظة ولا يجوز استخدامها دون إذن.",
    icon: Copyright,
  },
  {
    id: 8,
    title: "المسؤولية",
    description:
      "نحن نسعى لتقديم معلومات دقيقة، لكننا لا نضمن خلو الموقع أو المنتجات من الأخطاء بشكل كامل.",
    icon: TriangleAlert,
  },
  {
    id: 9,
    title: "طرق التواصل",
    description:
      "لأي استفسار أو دعم، تواصل معنا عبر قنوات التواصل المتاحة.",
    icon: Headphones,
  },
];

export default function TermsAndConditions() {
  const [openId, setOpenId] = useState(null);

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        w-full
        bg-white
        pb-[72px]

        md:pb-0
      "
    >
      {/* Header */}
      <TermsHeader
        onBack={() => navigate(-1)}
      />

      <main
        className="
          mx-auto
          w-full
          px-[14px]
          pb-[18px]

          sm:px-[20px]
          sm:pb-[30px]

          md:max-w-[900px]
          md:px-[28px]
          md:pb-[45px]

          lg:max-w-[1000px]
          lg:px-[40px]
        "
      >
        {/* Page Title */}
        <section
          className="
            flex
            flex-col
            items-center
            text-center
            pt-[20px]

            sm:pt-[28px]

            md:pt-[38px]
          "
        >
          <h1
            className="
              text-[20px]
              font-medium
              leading-[1.4]
              text-[#111111]

              sm:text-[32px]

              md:text-[40px]

              lg:text-[44px]
            "
          >
            الشروط والأحكام
          </h1>

          {/* Pink line */}
          <div
            className="
              mt-[8px]
              h-[2px]
              w-[30px]
              rounded-full
              bg-[#D4146A]

              sm:mt-[10px]
              sm:h-[4px]
              sm:w-[65px]

              md:mt-[12px]
              md:w-[72px]
            "
          />

          <p
            className="
              mt-[8px]
              max-w-[680px]
              text-[11px]
              leading-[1.9]
              text-[#777777]
              sm:mt-[22px]
              sm:text-[14px]

              md:mt-[26px]
              md:text-[16px]

              lg:text-[18px]
            "
          >
            مرحباً بك في متجر حياة ميك أب. يرجى قراءة الشروط والأحكام التالية
            بعناية قبل استخدامك للموقع أو التطبيق أو إجراء أي عملية شراء.
          </p>
        </section>

        {/* Terms List */}
        <section
          className="
            mt-[15px]
            flex
            flex-col
            gap-[5px]

            sm:mt-[28px]
            sm:gap-[12px]

            md:mt-[35px]
            md:gap-[15px]
          "
        >
          {terms.map((term) => (
            <TermsItem
              key={term.id}
              number={term.id}
              title={term.title}
              description={term.description}
              icon={term.icon}
              isOpen={openId === term.id}
              onClick={() =>
                setOpenId((current) =>
                  current === term.id ? null : term.id,
                )
              }
            />
          ))}
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeItem="home" />
    </div>
  );
}