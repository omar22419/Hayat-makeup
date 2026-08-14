import { Bell, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import logoImg from "../../assets/hero.png";

export default function TermsHeader({ onBack, cartCount }) {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const count = cartCount ?? items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header
      dir="rtl"
      className="
        relative
        flex
        h-[72px]
        w-full
        items-center
        justify-center
        border-b
        border-[#EEEEEE]
        bg-white

        sm:h-[86px]

        md:h-[100px]

        lg:h-[110px]
      "
    >
      {/* Right Arrow */}
      <button
        type="button"
        onClick={onBack}
        className="
          absolute
          right-[14px]
          top-1/2
          flex
          -translate-y-1/2
          items-center
          justify-center
          text-[#D4146A]

          sm:right-[20px]

          md:right-[28px]

          lg:right-[35px]
        "
      >
        <ChevronRight
          className="
            h-[24px]
            w-[24px]

            sm:h-[28px]
            sm:w-[28px]

            md:h-[32px]
            md:w-[32px]
          "
          strokeWidth={1.8}
        />
      </button>

      {/* Logo */}
      <img
        src={logoImg}
        alt="Hayat Makeup"
        className="
          h-[52px]
          w-auto
          object-contain

          sm:h-[62px]

          md:h-[72px]

          lg:h-[78px]
        "
      />

      {/* Notification */}
      <button
        type="button"
        onClick={() => navigate("/notifications")}
        className="
          absolute
          left-[14px]
          top-1/2
          flex
          -translate-y-1/2
          items-center
          justify-center

          sm:left-[20px]

          md:left-[28px]

          lg:left-[35px]
        "
      >
        <Bell
          className="
            h-[24px]
            w-[24px]
            text-[#222222]

            sm:h-[28px]
            sm:w-[28px]

            md:h-[32px]
            md:w-[32px]
          "
          strokeWidth={1.6}
        />

        {/* Badge */}
        <span
          className="
            absolute
            -right-[3px]
            -top-[5px]
            flex
            h-[11px]
            w-[11px]
            items-center
            justify-center
            rounded-full
            bg-[#D4146A]
            text-[7px]
            text-white

            sm:-right-[4px]
            sm:-top-[6px]
            sm:h-[14px]
            sm:w-[14px]
            sm:text-[8px]

            md:h-[16px]
            md:w-[16px]
            md:text-[9px]
          "
        >
          {count}
        </span>
      </button>
    </header>
  );
}
