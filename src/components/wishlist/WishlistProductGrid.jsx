import WishlistProductCard from "./WishlistProductCard.jsx";

export default function WishlistProductGrid({
  products,
  onAddToCart,
  onRemove,
}) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {products.map((product) => (
        <WishlistProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}