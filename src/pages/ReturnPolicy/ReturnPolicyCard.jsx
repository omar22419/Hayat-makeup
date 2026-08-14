import {
  CalendarDays,
  CircleX,
  Clock3,
  Headphones,
  PackageCheck,
  RotateCcw,
  WalletCards,
} from "lucide-react";

import ReturnsHeader from "../../components/returns/ReturnsHeader.jsx";
import ReturnsHero from "../../components/returns/ReturnsHero.jsx";
import ReturnPolicyCard from "../../components/returns/ReturnPolicyCard.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import { RETURN_FEE } from "../../data/constants.js";

const policies = [
  {
    id: 1,
    title: "شروط الاستبدال",
    description:
      "يحق لك استبدال المنتج في حال وجود عيب تصنيعي أو عند استلام منتج غير مطابق للطلب.",
    icon: RotateCcw,
  },
  {
    id: 2,
    title: "شروط الاسترجاع",
    description:
      "يحق لك استرجاع المنتج في حال عدم رضاك عنه، شرط ألا يكون قد تم فتحه أو استخدامه.",
    icon: PackageCheck,
  },
  {
    id: 3,
    title: "المدة المسموح بها",
    description:
      "يمكنك تقديم طلب الاستبدال أو الاسترجاع خلال 7 أيام من تاريخ استلام الطلب.",
    icon: CalendarDays,
  },
  {
    id: 4,
    title: "حالة المنتج",
    description:
      "يجب أن يكون المنتج غير مستخدم، وفي حالته الأصلية مع جميع الملحقات والتغليف.",
    icon: PackageCheck,
  },
  {
    id: 5,
    title: "المنتجات غير القابلة للاسترجاع",
    description:
      "لا يمكن استرجاع المنتجات التالية: المنتجات المفتوحة، منتجات العناية الشخصية، العروض والتخفيضات.",
    icon: CircleX,
  },
  {
    id: 6,
    title: "خطوات تقديم الطلب",
    description:
      "تواصلي معنا عبر خدمة العملاء أو من خلال التطبيق، مع إرفاق رقم الطلب وصورة المنتج.",
    icon: Headphones,
  },
  {
    id: 7,
    title: "رسوم الاسترجاع إن وجدت",
    description:
      `في حال كان الاسترجاع بسبب تغيير الرأي، يتم خصم رسوم شحن قدرها ${RETURN_FEE} ريال من المبلغ المسترد.`,
    icon: WalletCards,
  },
  {
    id: 8,
    title: "مدة معالجة الطلب",
    description:
      "يتم معالجة طلب الاسترجاع خلال 5-8 أيام عمل من استلام المنتج، وسيتم إشعارك عبر التطبيق أو البريد الإلكتروني.",
    icon: Clock3,
  },
];

export default function ReturnPolicy() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        pb-[78px]

        sm:pb-0
      "
    >
      <ReturnsHeader />

      <main className="w-full">
        <ReturnsHero />

        <section
          className="
            mx-auto
            w-full
            max-w-[1050px]
            px-3
            pb-4

            sm:px-5
            sm:pb-6

            md:px-8
            md:pb-8

            lg:px-0
            lg:pb-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-1

              sm:gap-3

              md:gap-4
            "
          >
            {policies.map((policy) => (
              <ReturnPolicyCard
                key={policy.id}
                title={policy.title}
                description={policy.description}
                icon={policy.icon}
              />
            ))}
          </div>
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}
