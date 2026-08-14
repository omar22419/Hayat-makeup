import { Menu, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import { useUIStore } from "../../store/uiStore.js";
import MobileMenuDrawer from "../navigation/MobileMenuDrawer.jsx";
import logoImg from "../../assets/hero.png";

export default function MagazineHeader() {
  const navigate = useNavigate();
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          h-[82px]
          w-full
          items-center
          justify-between
          px-4

          sm:h-[100px]
          sm:px-6

          md:h-[120px]
          md:px-10

          lg:h-[135px]
          lg:px-14
        "
      >
        {/* Menu */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="القائمة"
          className="shrink-0 text-[#111]"
        >
          <Menu
            size={28}
            strokeWidth={1.5}
            className="sm:size-[32px] md:size-[38px]"
          />
        </button>

        {/* Logo */}
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="الرئيسية"
          className="shrink-0"
        >
          <img
            src={logoImg}
            alt="HAYAT Makeup"
            className="
              h-[62px]
              w-auto
              object-contain

              sm:h-[76px]

              md:h-[90px]

              lg:h-[105px]
            "
          />
        </button>

        {/* Cart */}
        <button
          type="button"
          onClick={() => navigate("/cart")}
          aria-label="السلة"
          className="relative shrink-0 text-[#111]"
        >
          <ShoppingBag
            size={25}
            strokeWidth={1.5}
            className="sm:size-[29px] md:size-[34px]"
          />

          {count > 0 && (
            <span
              className="
                absolute
                -right-2
                -top-2
                flex
                h-[18px]
                w-[18px]
                items-center
                justify-center
                rounded-full
                bg-[#C91F72]
                text-[8px]
                text-white

                sm:h-5
                sm:w-5
                sm:text-[9px]

                md:h-6
                md:w-6
                md:text-[10px]
              "
            >
              {count}
            </span>
          )}
        </button>
      </div>

      <MobileMenuDrawer />
    </header>
  );
}
