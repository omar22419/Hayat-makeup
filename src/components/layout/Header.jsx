import {
  Menu,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/hero.png";

import { useCartStore } from "../../store/cartStore.js";
import { useUIStore } from "../../store/uiStore.js";
import MobileMenuDrawer from "../navigation/MobileMenuDrawer.jsx";

export default function Header() {
  const navigate = useNavigate();

  const menuOpen = useUIStore((state) => state.menuOpen);
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div
      className="
        relative
        mx-auto
        flex
        h-[88px]
        w-full
        items-center
        px-[12px]

        sm:h-[110px]
        sm:px-[20px]

        md:h-[140px]
        md:px-[28px]

        lg:h-[170px]
        lg:px-[36px]

        xl:h-[190px]
        xl:px-[44px]
      "
    >
      {/* Menu - Left */}
      <div className="absolute left-[12px] flex items-center sm:left-[20px] md:left-[28px] lg:left-[36px] xl:left-[44px]">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
          className={`
            flex
            items-center
            justify-center
            transition-colors

            ${
              menuOpen
                ? "text-[#D4146A]"
                : "text-[#111111]"
            }
          `}
        >
          <Menu
            className="
              h-[27px]
              w-[27px]

              sm:h-[31px]
              sm:w-[31px]

              md:h-[35px]
              md:w-[35px]

              lg:h-[39px]
              lg:w-[39px]
            "
            strokeWidth={1.8}
          />
        </button>
      </div>

      {/* Logo */}
      <div
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
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="هيات ميك أب"
          className="
            flex
            items-center
            justify-center
          "
        >
          <img
            src={logo}
            alt="Hayat Makeup"
            className="
              h-auto
              w-[72px]
              object-contain

              sm:w-[88px]

              md:w-[105px]

              lg:w-[120px]

              xl:w-[135px]
            "
          />
        </button>
      </div>

      {/* User + Cart + Search - Right */}
      <div
        className="
          absolute
          right-[12px]
          flex
          items-center
          gap-[8px]

          sm:right-[20px]
          sm:gap-[14px]

          md:right-[28px]
          md:gap-[20px]

          lg:right-[36px]
          lg:gap-[25px]

          xl:right-[44px]
        "
      >
        {/* User */}
        <button
          type="button"
          aria-label="حسابي"
          onClick={() => navigate("/account")}
          className="
            flex
            h-[28px]
            w-[28px]
            items-center
            justify-center

            sm:h-[36px]
            sm:w-[36px]

            md:h-[42px]
            md:w-[42px]

            lg:h-[48px]
            lg:w-[48px]
          "
        >
          <UserRound
            className="
              h-[22px]
              w-[22px]

              sm:h-[27px]
              sm:w-[27px]

              md:h-[32px]
              md:w-[32px]

              lg:h-[37px]
              lg:w-[37px]
            "
            strokeWidth={1.5}
          />
        </button>

        {/* Cart */}
        <button
          type="button"
          onClick={() => navigate("/cart")}
          aria-label="السلة"
          className="
            relative
            flex
            h-[28px]
            w-[28px]
            items-center
            justify-center

            sm:h-[36px]
            sm:w-[36px]

            md:h-[42px]
            md:w-[42px]

            lg:h-[48px]
            lg:w-[48px]
          "
        >
          <ShoppingCart
            className="
              h-[22px]
              w-[22px]

              sm:h-[27px]
              sm:w-[27px]

              md:h-[32px]
              md:w-[32px]

              lg:h-[37px]
              lg:w-[37px]
            "
            strokeWidth={1.5}
          />

          <span
            className="
              absolute
              right-[-2px]
              top-[-3px]
              flex
              h-[17px]
              w-[17px]
              items-center
              justify-center
              rounded-full
              bg-[#D4146A]
              text-[9px]
              font-medium
              text-white

              sm:h-[21px]
              sm:w-[21px]
              sm:text-[10px]

              md:h-[24px]
              md:w-[24px]
              md:text-[11px]

              lg:h-[27px]
              lg:w-[27px]
              lg:text-[12px]
            "
          >
            {cartCount}
          </span>
        </button>

        {/* Search */}
        <button
          type="button"
          aria-label="البحث"
          onClick={() => navigate("/search")}
          className="
            flex
            h-[28px]
            w-[28px]
            items-center
            justify-center

            sm:h-[36px]
            sm:w-[36px]

            md:h-[42px]
            md:w-[42px]

            lg:h-[48px]
            lg:w-[48px]
          "
        >
          <Search
            className="
              h-[22px]
              w-[22px]

              sm:h-[28px]
              sm:w-[28px]

              md:h-[33px]
              md:w-[33px]

              lg:h-[38px]
              lg:w-[38px]
            "
            strokeWidth={1.5}
          />
        </button>
      </div>

      <MobileMenuDrawer />
    </div>
  );
}