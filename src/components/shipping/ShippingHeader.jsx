import { Bell, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/hero.png";

export default function ShippingHeader() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white">
      {/* Top Header */}
      <div className="flex h-[115px] items-start justify-between px-5 pt-5">
        {/* Back */}
        <button
          type="button"
          aria-label="رجوع"
          onClick={() => navigate(-1)}
          className="mt-[30px] text-[#111]"
        >
          <ChevronRight size={30} strokeWidth={1.5} />
        </button>

        {/* Logo */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center justify-center"
        >
          <img
            src={logoImg}
            alt="LOTUS BLUE"
            className="h-[75px] w-auto object-contain"
          />
        </button>

        {/* Notification */}
        <button
          type="button"
          aria-label="الإشعارات"
          onClick={() => navigate("/notifications")}
          className="relative mt-[30px] text-[#111]"
        >
          <Bell size={28} strokeWidth={1.5} />

          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-[#C91F72]" />
        </button>
      </div>
    </header>
  );
}
