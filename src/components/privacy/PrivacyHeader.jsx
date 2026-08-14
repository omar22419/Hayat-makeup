import { ArrowLeft, Bell, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import logoImg from "../../assets/hero.png";

export default function PrivacyHeader() {
  const navigate = useNavigate();

  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="relative flex h-[80px] items-center justify-center bg-white px-4">
      {/* Actions row - full width, opposite ends */}
      <div className="absolute inset-x-5 top-[38px] flex items-center justify-between text-[#111]">
        {/* Notifications - Right */}
        <button type="button" aria-label="الإشعارات" onClick={() => navigate("/notifications")} className="relative">
          <Bell size={28} strokeWidth={1.5} />

          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-[#C91F72]" />
        </button>

        {/* Cart - Left */}
        <button
          type="button"
          aria-label="السلة"
          onClick={() => navigate("/cart")}
          className="relative"
        >
          <ShoppingBag size={28} strokeWidth={1.5} />

          <span className="absolute -right-2 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#C91F72] text-[10px] text-white">
            {count}
          </span>
        </button>
      </div>

      {/* Logo - centered */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="absolute top-5 left-1/2 flex -translate-x-1/2 items-center justify-center"
      >
        <img
          src={logoImg}
          alt="LOTUS BLUE"
          className="h-[75px] w-auto object-contain"
        />
      </button>

      {/* Back */}
      <button
        type="button"
        aria-label="رجوع"
        onClick={() => navigate(-1)}
        className="absolute bottom-[-60px] left-5 flex h-[35px] w-[35px] items-center justify-center rounded-[13px] border border-[#EEEEEE] bg-white text-[#C91F72]"
      >
        <ArrowLeft size={20} strokeWidth={1.4} />
      </button>
    </header>
  );
}
