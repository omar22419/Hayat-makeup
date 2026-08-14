import { useNavigate } from "react-router-dom";
import promoImg from "../../assets/promo.png";

export default function WishlistPromo() {
  const navigate = useNavigate();

  return (
    <section className="mt-2 overflow-hidden rounded-[14px] bg-[#FCE7ED]">
      <div className="relative flex min-h-[80px] items-center">
        {/* Content */}
        <div className="flex flex-1 flex-col items-center px-2 text-center">
          <h2 className="text-[15px] font-semibold text-[#D41472]">
            لا تفوتي ما يعجبك
          </h2>

          <p className="mt-1 text-[10px] leading-3 text-[#222]">
            تصفحي أحدث المنتجات والعروض الحصرية
          </p>

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="mt-2 rounded-[14px] bg-[#D41472] px-7 py-1 !text-[11px] text-white"
          >
            تسوقي الآن
          </button>
        </div>
        {/* Image */}
        <div className="h-full w-[45%]">
          <img src={promoImg} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
