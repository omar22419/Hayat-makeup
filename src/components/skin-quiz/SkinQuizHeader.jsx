import {
  Heart,
  Menu,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useCartStore } from "../../store/cartStore.js";
import { useUIStore } from "../../store/uiStore.js";
import MobileMenuDrawer from "../navigation/MobileMenuDrawer.jsx";
import logoImg from "../../assets/hero.png";

export default function SkinQuizHeader() {
  const navigate = useNavigate();
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className="
        w-full
        bg-white
      "
    >
      <div
        dir="ltr"
        className="
          mx-auto
          flex
          h-[84px]
          w-full
          items-center
          justify-between
          px-4

          sm:h-[100px]
          sm:px-6

          md:h-[120px]
          md:px-10

          lg:h-[135px]
        "
      >
        {/* Left actions */}
        <div
          className="
            flex
            items-center
            gap-4

            sm:gap-5

            md:gap-7
          "
        >
          {/* Cart */}
          <button
            type="button"
            onClick={() => navigate("/cart")}
            aria-label="السلة"
            className="relative text-[#111]"
          >
            <ShoppingCart
              size={24}
              strokeWidth={1.5}
              className="
                sm:size-[28px]
                md:size-[32px]
              "
            />

            <span
              className="
                absolute
                -right-2
                -top-2
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-[#C91F72]
                text-[9px]
                text-white

                sm:h-[22px]
                sm:w-[22px]
                sm:text-[10px]

                md:h-6
                md:w-6
              "
>
                {count}
              </span>
          </button>

          {/* Heart */}
          <button
            type="button"
            aria-label="المفضلة"
            onClick={() => navigate("/wishlist")}
            className="text-[#111]"
          >
            <Heart
              size={24}
              strokeWidth={1.5}
              className="
                sm:size-[28px]
                md:size-[32px]
              "
            />
          </button>
        </div>

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
              h-[58px]
              w-auto
              object-contain

              sm:h-[72px]

              md:h-[88px]
            "
          />
        </button>

        {/* Menu + Helper */}
        <div className="flex items-center gap-3">
          <div
            className="
              hidden
              items-center
              gap-1
              text-[#C91F72]

              sm:flex
            "
          >
            <Sparkles
              size={18}
              strokeWidth={1.5}
            />

            <div className="text-right leading-tight">
              <div className="text-[9px] font-medium">
                مساعد الجمال
              </div>

              <div className="text-[11px] font-semibold">
                HAYAT
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="القائمة"
            className="text-[#111]"
          >
            <Menu
              size={29}
              strokeWidth={1.5}
              className="
                sm:size-[33px]
                md:size-[38px]
              "
            />
          </button>
        </div>
      </div>

      <MobileMenuDrawer />
    </header>
  );
}