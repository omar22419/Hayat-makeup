import {
  Menu,
  Search,
  UserRound,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import { useUIStore } from "../../store/uiStore.js";
import MobileMenuDrawer from "../navigation/MobileMenuDrawer.jsx";
import logoImg from "../../assets/hero.png";

export default function NewArrivalsHeader() {
  const navigate = useNavigate();
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white">
      <MobileMenuDrawer />
      <div className="mx-auto flex h-[90px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:h-[105px] md:px-8 lg:px-10">
        {/* Menu */}
        <button
          type="button"
          aria-label="القائمة"
          onClick={() => setMenuOpen(true)}
          className="shrink-0 text-[#111]"
        >
          <Menu
            size={30}
            strokeWidth={1.5}
            className="sm:size-[32px]"
          />
        </button>

        {/* Logo */}
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="الرئيسية"
          className="flex shrink-0 items-center justify-center"
        >
          <img
            src={logoImg}
            alt="LOTUS BLUE"
            className="h-[68px] w-auto object-contain sm:h-[76px] md:h-[82px]"
          />
        </button>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search */}
          <button
            type="button"
          aria-label="البحث"
          onClick={() => navigate("/search")}
          className="shrink-0 text-[#111]"
          >
            <Search
              size={25}
              strokeWidth={1.5}
              className="sm:size-[28px]"
            />
          </button>

          {/* Account */}
          <button
            type="button"
            aria-label="الحساب"
            onClick={() => navigate("/account")}
            className="hidden shrink-0 text-[#111] sm:block"
          >
            <UserRound
              size={26}
              strokeWidth={1.5}
            />
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="السلة"
            onClick={() => navigate("/cart")}
            className="relative shrink-0 text-[#111]"
          >
            <ShoppingBag
              size={26}
              strokeWidth={1.5}
              className="sm:size-[28px]"
            />

            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C91F72] text-[9px] text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}