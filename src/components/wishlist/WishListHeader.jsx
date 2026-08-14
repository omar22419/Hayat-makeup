import { Menu, Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import { useUIStore } from "../../store/uiStore.js";
import MobileMenuDrawer from "../navigation/MobileMenuDrawer.jsx";
import logoImg from "../../assets/hero.png";

export default function WishlistHeader() {
  const navigate = useNavigate();
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white">
      <MobileMenuDrawer />
      <div dir="ltr" className="flex w-full items-center justify-between px-5">
        {/* Left - Search + Cart */}
        <div className="flex items-center gap-4 pt-7">
          {/* Cart */}
          <button
            type="button"
            onClick={() => navigate("/cart")}
            aria-label="السلة"
            className="relative shrink-0 text-[#111]"
          >
            <ShoppingCart size={25} strokeWidth={1} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C91F72] text-[10px] text-white">
              {count}
            </span>
          </button>

          {/* Search */}
          <button
            type="button"
aria-label="البحث"
          onClick={() => navigate("/search")}
            className="shrink-0 text-[#111]"
          >
            <Search size={25} strokeWidth={1} />
          </button>
        </div>

        {/* Logo - Center */}
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="الرئيسية"
          className="flex shrink-0 items-center justify-center"
        >
          <img
            src={logoImg}
            alt="LOTUS BLUE"
            className="h-[75px] w-auto object-contain"
          />
        </button>

        {/* Right - Menu */}
        <button
          type="button"
          aria-label="القائمة"
          onClick={() => setMenuOpen(true)}
          className="mt-4 shrink-0 text-[#111]"
        >
          <Menu size={25} strokeWidth={1} />
        </button>
      </div>
    </header>
  );
}
