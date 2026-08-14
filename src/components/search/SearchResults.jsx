import AllProductsCard from "../products/AllProductsCard.jsx";

export default function SearchResults({ products, onSelect }) {
  return (
    <section
      className="
        grid
        grid-cols-2
        gap-x-[8px]
        gap-y-[10px]

        sm:gap-x-[12px]
        sm:gap-y-[14px]

        md:grid-cols-3
        md:gap-x-[18px]
        md:gap-y-[20px]

        lg:grid-cols-4
        lg:gap-x-[22px]
        lg:gap-y-[25px]
      "
    >
      {products.map((product) => (
        <AllProductsCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          rating={product.rating}
          reviews={product.reviews}
          onSelect={() => onSelect(product)}
        />
      ))}
    </section>
  );
}