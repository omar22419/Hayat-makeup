import { Home, Grid2X2, Sparkles, Heart, ShoppingBag } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import { useCartStore } from "../../store/cartStore.js";
import { useUIStore } from "../../store/uiStore.js";
import { NAV_ROUTES } from "./navRoutes.js";

const navItems = [
  {
    id: "home",
    label: "الرئيسية",
    icon: Home,
  },
  {
    id: "categories",
    label: "التصنيفات",
    icon: Grid2X2,
  },
  {
    id: "discover",
    label: "اكتشفي",
    icon: Sparkles,
  },
  {
    id: "favorites",
    label: "المفضلة",
    icon: Heart,
  },
  {
    id: "cart",
    label: "السلة",
    icon: ShoppingBag,
  },
];

const PATH_ACTIVE = {
  "/": "home",
  "/categories": "categories",
  "/products": "categories",
  "/wishlist": "favorites",
  "/cart": "cart",
  "/makeup-guide": "discover",
};

export default function MobileBottomNav({
  activeItem,
  onNavigate,
  hidden,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const menuOpen = useUIStore((state) => state.menuOpen);

  const resolvedActive = activeItem || PATH_ACTIVE[location.pathname] || "home";
  const isHidden = hidden === undefined ? menuOpen : hidden;

  const handleNavigate = (id) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }

    const path = NAV_ROUTES[id];
    if (path) navigate(path);
  };

  return (
    <nav
      dir="rtl"
      className={`
        fixed
        bottom-0
        left-0
        right-0
        z-[50]
        flex
        h-[68px]
        w-full
        items-stretch
        justify-between
        border-t
        border-[#EEEEEE]
        bg-white
        px-[8px]
        pb-[5px]
        shadow-[0_-2px_8px_rgba(0,0,0,0.04)]
        transition-all
        duration-200

        sm:h-[72px]
        sm:px-[12px]

        md:hidden

        ${
          isHidden
            ? "pointer-events-none translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = resolvedActive === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleNavigate(item.id)}
            className={`
              relative
              flex
              min-w-0
              flex-1
              flex-col
              items-center
              justify-center
              gap-[3px]
              leading-none
              ${isActive ? "text-[#D4146A]" : "text-[#555555]"}
            `}
          >
            {/* Icon */}
            <div className="relative flex items-center justify-center">
              <Icon
                className="
                  h-[25px]
                  w-[25px]

                  sm:h-[27px]
                  sm:w-[27px]
                "
                strokeWidth={isActive ? 2 : 1.7}
              />

              {/* Cart Badge */}
              {item.id === "cart" && cartCount > 0 && (
                <span
                  className="
                    absolute
                    -right-[7px]
                    -top-[9px]
                    flex
                    h-[19px]
                    min-w-[19px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D4146A]
                    px-[4px]
                    text-[10px]
                    font-medium
                    leading-none
                    text-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </div>

            {/* Label */}
            <span
              className="
                whitespace-nowrap
                text-[11px]
                font-normal
                leading-none

                sm:text-[12px]
              "
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}