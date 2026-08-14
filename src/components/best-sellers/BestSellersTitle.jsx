export default function BestSellersTitle() {
  return (
    <section
      dir="rtl"
      className="
        mb-3
        flex
        flex-col
        items-center
        text-center
        sm:mb-6
        md:mb-8
      "
    >
      <h1
        className="
          text-[20px]
          font-semibold
          leading-tight
          text-[#111]
          sm:text-[34px]
          md:text-[42px]
          lg:text-[48px]
        "
      >
        الأكثر مبيعًا
      </h1>

      <p
        className="
          mt-1
          text-[10px]
          font-normal
          leading-4
          text-[#707070]
          sm:mt-3
          sm:text-[15px]
          md:text-[18px]
          lg:text-[20px]
        "
      >
        منتجات محبوبة من عملائنا... جودة تفتنين بها، نتائج تحبينها.
      </p>
    </section>
  );
}
