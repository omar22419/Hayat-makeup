import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.js";
import logoImg from "../../assets/hero.png";

export default function AboutHeader() {
  const navigate = useNavigate();

  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          h-[76px]
          w-full
          items-center
          justify-between
          px-4

          sm:h-[92px]
          sm:px-6

          md:h-[112px]
          md:px-10

          lg:h-[125px]
        "
      >
        {/* Back */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="رجوع"
          className="
            flex
            items-center
            justify-center
            text-[#111]
          "
        >
          <ArrowLeft
            size={25}
            strokeWidth={1.5}
            className="
              sm:size-[29px]
              md:size-[34px]
            "
          />
        </button>

       <h1 className="text-[20px] font-extrabold">من نحن</h1>
        {/* Cart */}
        <button
          type="button"
          onClick={() => navigate("/cart")}
          aria-label="السلة"
          className="relative text-[#111]"
        >
          <ShoppingBag
            size={25}
            strokeWidth={1.5}
            className="
              sm:size-[29px]
              md:size-[34px]
            "
          />

          {count > 0 && (
            <span
              className="
                absolute
                -right-2
                -top-2
                flex
                h-[19px]
                w-[19px]
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
          )}
        </button>
      </div>

      <div className="h-px bg-[#EEEEEE]" />
    </header>
  );
}
