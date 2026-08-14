import { Heart } from "lucide-react";

export default function WishlistTitle({ count = 8 }) {
  return (
    <section className="px-5 mt-6">
      <div className="flex items-center justify-between">
        {/* Title */}
        <div className="flex items-center gap-2">
          <Heart size={35} strokeWidth={1} className="text-[#D41472] mb-4" />

          <div>
            <h1 className="text-[20px] font-semibold leading-5 text-[#111]">
              المفضلة
            </h1>

            <p className="text-[9px] leading-6 text-[#494848]">
              منتجاتك المفضلة في مكان واحد
            </p>
          </div>
        </div>

        {/* Count */}
        <div className="rounded-full border border-[#E5E5E5] px-3 py-[2px]">
          <span className="text-[12px] text-[#333]">
            <span className="text-[#D41472]">{count}</span> منتجات
          </span>
        </div>
      </div>
    </section>
  );
}
