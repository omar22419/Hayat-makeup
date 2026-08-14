import { Bell, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/hero.png";

export default function ReturnsHeader() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          h-[80px]
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-4

          sm:h-[105px]
          sm:px-6

          md:h-[125px]
          md:px-10

          lg:h-[145px]
          lg:px-14
        "
      >
        {/* Notification */}
        <button
          type="button"
          aria-label="الإشعارات"
          onClick={() => navigate("/notifications")}
          className="
            relative
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#111]
            shadow-[0_2px_10px_rgba(0,0,0,0.05)]

            sm:h-11
            sm:w-11

            md:h-14
            md:w-14
          "
        >
          <Bell
            size={20}
            strokeWidth={1.6}
            className="sm:size-[24px] md:size-[28px]"
          />

          <span
            className="
              absolute
              right-1
              top-1
              h-2
              w-2
              rounded-full
              bg-[#C91F72]

              sm:right-1.5
              sm:top-1.5
              sm:h-2.5
              sm:w-2.5
            "
          />
        </button>

        {/* Logo */}
        <button
          type="button"
          aria-label="الرئيسية"
          onClick={() => navigate("/")}
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

        {/* Support */}
        <button
          type="button"
          aria-label="الدعم"
          onClick={() => navigate("/contact")}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#C91F72]
            shadow-[0_2px_10px_rgba(0,0,0,0.05)]

            sm:h-11
            sm:w-11

            md:h-14
            md:w-14
          "
        >
          <Headphones
            size={20}
            strokeWidth={1.6}
            className="sm:size-[24px] md:size-[29px]"
          />
        </button>
      </div>
    </header>
  );
}