import {
  Home,
  ShoppingBag,
  Grid2X2,
  Tag,
  Package,
  BookOpen,
  FileText,
  Truck,
  MessageCircle,
  Info,
  CircleHelp,
  UserRound,
  Heart,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/hero.png";

import { useUIStore } from "../../store/uiStore.js";
import { NAV_ROUTES } from "./navRoutes.js";

const menuItems = [
  {
    id: "home",
    label: "الرئيسية",
    icon: Home,
    active: true,
  },
  {
    id: "products",
    label: "المنتجات",
    icon: ShoppingBag,
  },
  {
    id: "categories",
    label: "التصنيفات",
    icon: Grid2X2,
  },
  {
    id: "offers",
    label: "العروض",
    icon: Tag,
  },
  {
    id: "packages",
    label: "الباقات",
    icon: Package,
  },
  {
    id: "magazine",
    label: "المجلة",
    icon: BookOpen,
  },
  {
    id: "trackOrder",
    label: "تتبع الطلب",
    icon: Truck,
  },
  {
    id: "legalPolicies",
    label: "السياسات القانونية",
    icon: FileText,
  },
  {
    id: "contact",
    label: "تواصل معنا",
    icon: MessageCircle,
  },
  {
    id: "about",
    label: "من نحن",
    icon: Info,
  },
  {
    id: "faq",
    label: "الأسئلة الشائعة",
    icon: CircleHelp,
  },
  {
    id: "account",
    label: "حسابي",
    icon: UserRound,
  },
  {
    id: "favorites",
    label: "المفضلة",
    icon: Heart,
  },
];

export default function MobileMenuDrawer() {
  const navigate = useNavigate();

  const isOpen = useUIStore((state) => state.menuOpen);
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  if (!isOpen) return null;

  const close = () => setMenuOpen(false);

  const handleNavigate = (id) => {
    const path = NAV_ROUTES[id];
    if (path) {
      navigate(path);
    }
    close();
  };

  return (
    <div
      dir="rtl"
      className="
        fixed
        inset-x-0
        bottom-0
        top-[88px]
        z-[100]

        sm:top-[110px]

        md:top-[140px]

        lg:top-[170px]

        xl:top-[190px]
      "
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="إغلاق القائمة"
        onClick={close}
        className="
          absolute
          inset-0
          h-full
          w-full
          bg-black/45
        "
      />

      {/* Drawer */}
      <aside
        className="
          absolute
          right-0
          top-0
          flex
          h-full
          w-[62%]
          max-w-[330px]
          flex-col
          overflow-y-auto
          bg-white
          px-[18px]
          pb-[24px]
          pt-[20px]

          sm:px-[22px]

          md:max-w-[380px]
          md:px-[26px]

          lg:max-w-[430px]
          lg:px-[30px]

          xl:max-w-[460px]
        "
      >
        {/* Logo */}
        <div
          className="
            flex
            justify-center
            pb-[22px]
          "
        >
          <img
            src={logo}
            alt="Hayat Makeup"
            className="
              h-auto
              w-[110px]
              object-contain

              sm:w-[90px]
            "
          />
        </div>

        {/* Menu Items */}
        <div className="w-full">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`
                  flex
                  h-[40px]
                  w-full
                  items-center
                  border-b
                  gap-4
                  border-[#EEEEEE]
                  px-[14px]
                  text-right

                  md:h-[48px]
                  md:gap-5
                  md:px-[16px]

                  lg:h-[52px]

                  ${
                    item.active
                      ? "mb-[6px] rounded-[10px] border-none bg-[#FBE3EF] text-[#D4146A]"
                      : "text-[#111111] "
                  }
                `}
              >
                <Icon
                  className="
                    h-[20px]
                    w-[20px]
                    shrink-0

                    sm:h-[27px]
                    sm:w-[27px]

                    md:h-[28px]
                    md:w-[28px]

                    lg:h-[30px]
                    lg:w-[30px]
                  "
                  strokeWidth={1.6}
                />
                <span
                  className={`
                    text-[15px]
                    font-normal
                    leading-none

                    sm:text-[17px]

                    md:text-[18px]

                    lg:text-[19px]

                    ${item.active ? "font-medium text-[#D4146A]" : ""}
                  `}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Logout */}
          <button
            type="button"
            onClick={() => handleNavigate("logout")}
            className="
              flex
              h-[60px]
              w-full
              items-center
              gap-4
              border-t
              border-[#e8b5cf82]
              px-[10px]
              text-[#D4146A]
            "
          >
            <LogOut
              className="
                h-[24px]
                w-[24px]
                shrink-0

                md:h-[28px]
                md:w-[28px]

                lg:h-[30px]
                lg:w-[30px]
              "
              strokeWidth={1.6}
            />
            <span
              className="
                text-[15px]
                font-normal
                leading-none

                sm:text-[17px]

                md:text-[18px]

                lg:text-[19px]
              "
            >
              تسجيل الخروج
            </span>
          </button>
        </div>
      </aside>
    </div>
  );
}