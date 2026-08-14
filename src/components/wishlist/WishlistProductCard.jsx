import { Heart, ShoppingCart } from "lucide-react";

export default function WishlistProductCard({ product, onAddToCart, onRemove }) {
  return (
    <div className="relative flex min-w-0 flex-col overflow-hidden rounded-[8px] border border-[#E8E8E8] bg-white">
      {/* Favorite */}
      <button
        type="button"
        aria-label="إزالة من المفضلة"
        onClick={() => onRemove?.(product.id)}
        className="absolute left-2 top-1 z-10"
      >
        <Heart
          size={20}
          strokeWidth={0}
          fill="#D41472"
          className="text-[#D41472]"
        />
      </button>

      {/* Image */}
      <div className="flex h-[130px] items-center justify-center px-4 pt-1">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col px-3 pb-1 pt-1 text-center">
        <h3 className="text-[11px] leading-5 text-[#222]">{product.name}</h3>

        <p className=" text-[9px] leading-3 text-[#555]">{product.variant}</p>

        <p className="text-[9px] text-[#4BA65A]">متوفر في المخزون</p>

        <div>
          <span className="ml-1 text-[15px] font-medium text-[#111]">
            {product.price}
          </span>
          <span className="text-[14px] text-[#222]">ر.س</span>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-1 flex h-[25px] w-full items-center justify-center gap-2 rounded-[6px] border border-[#D41472] bg-white !text-[12px] text-[#D41472]"
        >
          <ShoppingCart size={13} strokeWidth={1.5} />
          <span>أضف إلى السلة</span>
        </button>
      </div>
    </div>
  );
}
