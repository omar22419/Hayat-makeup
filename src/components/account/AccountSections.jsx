import {
  Heart,
  ShoppingBag,
  PackageCheck,
  Truck,
  Bell,
  MapPin,
  ShieldCheck,
  MessageCircle,
  Info,
  Settings,
  LogOut,
} from "lucide-react";

import AccountMenuItem from "./AccountMenuItem.jsx";

export default function AccountSections({
  cartCount,
  favoritesCount,
  onNavigate,
  onLogout,
}) {
  const groups = [
    {
      title: "طلباتي",
      items: [
        {
          id: "favorites",
          label: "المفضلة",
          icon: Heart,
          badge: favoritesCount,
          to: "/wishlist",
        },
        {
          id: "cart",
          label: "السلة",
          icon: ShoppingBag,
          badge: cartCount,
          to: "/cart",
        },
        {
          id: "orders",
          label: "الطلبات",
          icon: PackageCheck,
          to: "/order-success",
        },
        {
          id: "trackOrder",
          label: "تتبع الطلب",
          icon: Truck,
          to: "/track-order",
        },
        {
          id: "notifications",
          label: "الإشعارات",
          icon: Bell,
          to: "/notifications",
        },
        {
          id: "addresses",
          label: "عناويني",
          icon: MapPin,
          to: "/checkout",
        },
      ],
    },
    {
      title: "الدعم",
      items: [
        {
          id: "contact",
          label: "تواصل معنا",
          icon: MessageCircle,
          to: "/contact",
        },
        {
          id: "policies",
          label: "السياسات",
          icon: ShieldCheck,
          to: "/legal-policies",
        },
        {
          id: "about",
          label: "من نحن",
          icon: Info,
          to: "/about",
        },
      ],
    },
    {
      title: "الإعدادات",
      items: [
        {
          id: "settings",
          label: "إعدادات الحساب",
          icon: Settings,
          to: "/privacy-policy",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {groups.map((group) => (
        <section
          key={group.title}
          className="overflow-hidden rounded-[14px] border border-[#EEEEEE] bg-white sm:rounded-[18px] md:rounded-[22px]"
        >
          <h2
            className="
              border-b
              border-[#EEEEEE]
              px-3
              py-2.5
              text-right
              text-[11px]
              font-medium
              text-[#888888]

              sm:px-4
              sm:text-[13px]
            "
          >
            {group.title}
          </h2>

          {group.items.map((item) => (
            <AccountMenuItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              onClick={() => onNavigate(item.to)}
            />
          ))}
        </section>
      ))}

      {/* Logout */}
      <button
        type="button"
        onClick={onLogout}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-[12px]
          border
          border-[#E8B5CF82]
          py-3
          text-[#D4146A]

          sm:rounded-[16px]
          sm:py-4
        "
      >
        <LogOut
          size={16}
          strokeWidth={1.6}
          className="
            sm:size-[20px]
          "
        />

        <span
          className="
            text-[13px]
            font-medium
            leading-none

            sm:text-[16px]
          "
        >
          تسجيل الخروج
        </span>
      </button>
    </div>
  );
}