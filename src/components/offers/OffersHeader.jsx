export default function OffersHeader() {
  return (
    <section
      className="
        mb-1
        text-right
        sm:mb-5
        sm:mt-5
        md:mb-6
        md:mt-7
      "
    >
      <h1
        className="
          text-[18px]
          font-medium
          leading-tight
          text-[#111]
          sm:text-[30px]
          md:text-[38px]
          lg:text-[44px]
        "
      >
        العروض
      </h1>

      <p
        className="
          mt-1
          text-[11px]
          leading-4
          text-[#505050]
          sm:mt-2
          sm:text-[16px]
          md:text-[19px]
          lg:text-[21px]
        "
      >
        خصومات وباقات مختارة
      </p>
    </section>
  );
}
