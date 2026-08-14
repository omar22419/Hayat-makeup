import {
  CalendarDays,
  ChevronLeft,
  CreditCard,
  FileText,
  HelpCircle,
  LockKeyhole,
  Menu,
  RotateCcw,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import logoImg from "../../assets/hero.png";
import { useUIStore } from "../../store/uiStore.js";
import MobileMenuDrawer from "../../components/navigation/MobileMenuDrawer.jsx";

const policies = [
  {
    id: 1,
    title: "سياسة الاستبدال والاسترجاع",
    icon: RotateCcw,
    to: "/return-policy",
  },
  {
    id: 2,
    title: "سياسة الخصوصية",
    icon: LockKeyhole,
    to: "/privacy-policy",
  },
  {
    id: 3,
    title: "الشروط والأحكام",
    icon: FileText,
    to: "/terms",
  },
  {
    id: 4,
    title: "سياسة الشحن",
    icon: Truck,
    to: "/shipping-policy",
  },
  {
    id: 5,
    title: "سياسة الدفع",
    icon: CreditCard,
  },
  {
    id: 6,
    title: "الأسئلة المتعلقة بالمنتجات",
    icon: HelpCircle,
  },
];

function PolicyCard({ title, icon: Icon, to }) {
  const navigate = useNavigate();

  return (
    <button
      dir="ltr"
      type="button"
      onClick={() => to && navigate(to)}
      className="
        group
        flex
        h-[60px]
        w-full
        items-center
        justify-between
        rounded-[5px]
        border
        border-[#f2f2f2]
        bg-white
        px-4
        shadow-[0_3px_14px_rgba(0,0,0,0.05)]
        transition
        duration-200

        sm:h-[88px]
        sm:rounded-[17px]
        sm:px-5

        md:h-[105px]
        md:rounded-[20px]
        md:px-7

        lg:h-[120px]
        lg:px-9
      "
    >
      {/* Arrow */}
      <ChevronLeft
        className="
          shrink-0
          text-[#C91F72]
          transition-transform
          duration-200
          group-hover:-translate-x-1

          size-[22px]

          sm:size-[26px]

          md:size-[30px]
        "
        strokeWidth={1.8}
      />

      {/* Title + Icon */}
      <div
        className="
          flex
          min-w-0
          items-center
          gap-3
          text-right

          sm:gap-4

          md:gap-5
        "
      >
        <span
          className="
            truncate
            text-[15px]
            font-semibold
            leading-tight
            text-[#111]

            sm:text-[20px]

            md:text-[25px]

            lg:text-[28px]
          "
        >
          {title}
        </span>

        <span
          className="
            flex
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#fff1f6]

            h-[48px]
            w-[48px]

            sm:h-[58px]
            sm:w-[58px]

            md:h-[70px]
            md:w-[70px]
          "
        >
          <Icon
            className="
              text-[#C91F72]

              size-[25px]

              sm:size-[30px]

              md:size-[36px]
            "
            strokeWidth={1.6}
          />
        </span>
      </div>
    </button>
  );
}

export default function LegalPolicies() {
  const navigate = useNavigate();
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-white
        text-[#111]
      "
    >
      <MobileMenuDrawer />
      {/* Header */}
      <header
        className="
          relative
          mx-auto
          flex
          h-[92px]
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-5

          sm:h-[110px]
          sm:px-7

          md:h-[135px]
          md:px-10

          lg:h-[155px]
          lg:px-14
        "
      >
        {/* Menu */}
        <button
          type="button"
          aria-label="القائمة"
          onClick={() => setMenuOpen(true)}
          className="
            flex
            shrink-0
            items-center
            justify-center
            text-[#C91F72]
          "
        >
          <Menu className="flex flex-col gap-[5px]"/>
        </button>

        {/* Logo */}
        <button
          type="button"
          aria-label="الرئيسية"
          onClick={() => navigate("/")}
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
            src={logoImg}
            alt="HAYAT Makeup"
            className="
              h-[76px]
              w-auto
              object-contain

              sm:h-[92px]

              md:h-[115px]

              lg:h-[135px]
            "
          />
        </button>

        {/* Cart */}
        <button
          type="button"
          aria-label="السلة"
          onClick={() => navigate("/cart")}
          className="
            flex
            shrink-0
            items-center
            justify-center
            text-[#C91F72]
          "
        >
          <ShoppingBag
            size={20}
            strokeWidth={1.7}
            className="
              sm:size-[34px]
              md:size-[40px]
            "
          />
        </button>
      </header>

      {/* Main */}
      <main
        className="
          mx-auto
          w-full
          max-w-[1100px]
          px-5
          pb-8

          sm:px-7
          sm:pb-10

          md:px-10
          md:pb-14

          lg:px-0
          lg:pb-16
        "
      >
        {/* Intro */}
        <section
          className="
            text-center
            pt-[10px]

            sm:pt-[25px]

            md:pt-[35px]
          "
        >
          <h1
            className="
              text-[25px]
              font-bold
              leading-tight
              text-[#111]

              sm:text-[38px]

              md:text-[48px]

              lg:text-[56px]
            "
          >
            السياسات القانونية
          </h1>

          <p
            className="
              mx-auto
              mt-2
              max-w-[850px]
              text-[13px]
              font-normal
              leading-[1.9]
              text-[#555]

              sm:mt-5
              sm:text-[18px]

              md:mt-6
              md:text-[23px]

              lg:text-[26px]
            "
          >
            نحرص على الشفافية وحماية حقوقك. يمكنك الاطلاع على جميع السياسات
            والشروط التي تنظم استخدام متجرنا وخدماتنا.
          </p>

          {/* Divider */}
          <div
            className="
              mx-auto
              mt-2
              flex
              items-center
              justify-center
              gap-3

              sm:mt-7
              sm:gap-4

              md:mt-9
              md:gap-5
            "
          >
            <span
              className="
                h-[1px]
                w-[55px]
                bg-[#C91F72]

                sm:w-[75px]

                md:w-[100px]
              "
            />

            <span
              className="
                h-[6px]
                w-[6px]
                rounded-full
                bg-[#C91F72]

                sm:h-[12px]
                sm:w-[12px]

                md:h-[14px]
                md:w-[14px]
              "
            />

            <span
              className="
                h-[1px]
                w-[55px]
                bg-[#C91F72]

                sm:w-[75px]

                md:w-[100px]
              "
            />
          </div>
        </section>

        {/* Policies */}
        <section
          className="
            mt-2
            flex
            flex-col
            gap-2

            sm:mt-9
            sm:gap-4

            md:mt-11
            md:gap-5

            lg:mt-12
          "
        >
          {policies.map((policy) => (
            <PolicyCard
              key={policy.id}
              title={policy.title}
              icon={policy.icon}
              to={policy.to}
            />
          ))}
        </section>

        {/* Last Updated */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-2
            text-[#555]

            sm:mt-9
            sm:gap-3

            md:mt-11
            md:text-[18px]
          "
        >
          <span
            className="
              h-px
              w-[55px]
              bg-[#d89ab6]

              sm:w-[85px]

              md:w-[120px]
            "
          />

          <div
            className="
              flex
              items-center
              gap-1.5
              whitespace-nowrap
              text-[12px]

              sm:gap-2
              sm:text-[15px]

              md:text-[18px]
            "
          >
            <CalendarDays
              size={17}
              className="
                text-[#C91F72]

                sm:size-[21px]

                md:size-[24px]
              "
              strokeWidth={1.7}
            />
            <span>آخر تحديث: 20 مايو 2024</span>
          </div>

          <span
            className="
              h-px
              w-[55px]
              bg-[#d89ab6]

              sm:w-[85px]

              md:w-[120px]
            "
          />
        </div>
      </main>
    </div>
  );
}
