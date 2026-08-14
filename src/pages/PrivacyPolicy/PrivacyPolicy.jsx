import {
  ClipboardCheck,
  Cookie,
  Mail,
  Shield,
  UserRound,
  UserRoundPlus,
  Users,
} from "lucide-react";

import PrivacyHeader from "../../components/privacy/PrivacyHeader.jsx";
import PrivacyCard from "../../components/privacy/PrivacyCard.jsx";
import PrivacyNotice from "../../components/privacy/PrivacyNotice.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

const privacyItems = [
  {
    title: "البيانات التي نجمعها",
    description:
      "نجمع معلوماتك مثل الاسم، رقم الهاتف، البريد الإلكتروني، وعنوان الشحن، ومعلومات الطلب والدفع.",
    icon: UserRound,
  },
  {
    title: "استخدام المعلومات",
    description:
      "نستخدم معلوماتك لتقديم خدماتنا، معالجة الطلبات، تحسين تجربة التسوق، والتواصل معك بشأن طلباتك والعروض.",
    icon: ClipboardCheck,
  },
  {
    title: "حماية البيانات",
    description:
      "نطبق إجراءات أمنية حديثة لحماية بياناتك من الوصول غير المصرح به أو الاستخدام أو الإفصاح أو التعديل.",
    icon: Shield,
  },
  {
    title: "مشاركة البيانات",
    description:
      "لا نشارك بياناتك الشخصية مع أي طرف ثالث إلا في الحالات الضرورية لتقديم الخدمة أو الامتثال للأنظمة.",
    icon: Users,
  },
  {
    title: "ملفات تعريف الارتباط",
    description:
      "نستخدم ملفات تعريف الارتباط لتحسين تجربتك في التطبيق وتحليل الأداء وتخصيص المحتوى والعروض.",
    icon: Cookie,
  },
  {
    title: "حقوق المستخدم",
    description:
      "لديك الحق في الوصول إلى بياناتك، تصحيحها، أو طلب حذفها في أي وقت من خلال التواصل معنا.",
    icon: UserRoundPlus,
  },
  {
    title: "التواصل معنا",
    description:
      "للاستفسارات أو طلبات الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني أو من خلال صفحة اتصل بنا في التطبيق.",
    icon: Mail,
  },
];

export default function PrivacyPolicy() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Custom Header */}
      <PrivacyHeader />

      {/* Content */}
      <main className="mx-auto w-full max-w-[768px] px-5 pb-[105px]">
        {/* Title */}
        <section className="pt-[25px] text-center">
          <h1 className="text-[25px] font-bold leading-tight text-[#111]">
            سياسة الخصوصية
          </h1>

          <p className="mx-auto mt-4 max-w-[620px] text-[11px] leading-[2] text-[#666]">
            خصوصيتك تهمنا. توضح هذه السياسة كيف نجمع معلوماتك الشخصية ونستخدمها
            ونحميها عند استخدامك تطبيق
            <span className="text-[#C91F72]"> HAYAT Makeup</span>
          </p>
        </section>

        {/* Privacy Cards */}
        <section className="mt-4 space-y-1">
          {privacyItems.map((item) => (
            <PrivacyCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </section>

        {/* Notice */}
        <PrivacyNotice />
      </main>

      {/* Existing Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
