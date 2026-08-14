import {
  BookOpen,
  Grid2X2,
  Heart,
  Home,
  MoreHorizontal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useUIStore } from "../../store/uiStore.js";

const items = [
  {
    id: "more",
    label: "المزيد",
    icon: MoreHorizontal,
  },
  {
    id: "favorites",
    label: "المفضلة",
    icon: Heart,
  },
  {
    id: "home",
    label: "الرئيسية",
    icon: Home,
  },
  {
    id: "categories",
    label: "الأقسام",
    icon: Grid2X2,
  },
  {
    id: "magazine",
    label: "المجلة",
    icon: BookOpen,
    active: true,
  },
];

export default function MagazineBottomNav() {
  const navigate = useNavigate();
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  const handleClick = (id) => {
    if (id === "more") {
      setMenuOpen(true);
      return;
    }

    if (id === "home") {
      navigate("/");
      return;
    }

    if (id === "categories") {
      navigate("/categories");
      return;
    }

    if (id === "favorites") {
      navigate("/wishlist");
      return;
    }
  };

  return (
    <nav
      dir="ltr"
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-[#EEEEEE]
        bg-white

        sm:hidden
      "
    >
      <div
        className="
          flex
          h-[55px]
          items-center
          justify-between
          px-3
        "
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className={`
                flex
                min-w-[48px]
                flex-col
                items-center
                justify-center
                gap-1
                !text-[9px]

                ${
                  item.active
                    ? "text-[#C91F72]"
                    : "text-[#444]"
                }
              `}
            >
              <Icon
                size={21}
                strokeWidth={1.5}
              />

              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}