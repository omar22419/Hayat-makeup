import returnsHero from "../../assets/returns/returns-hero.png";

export default function ReturnsHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pb-3

        sm:pb-5

        md:pb-7
      "
    >
      <img
        src={returnsHero}
        alt=""
        className="
          absolute
          bottom-0
          left-0
          h-[100px]
          w-[42%]
          object-contain
          object-left-bottom
          opacity-90

          sm:h-[155px]
          sm:w-[40%]

          md:h-[205px]
          md:w-[38%]

          lg:h-[250px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[95px]
          w-full
          max-w-[1100px]
          flex-col
          items-end
          justify-center
          px-4
          text-right

          sm:min-h-[205px]
          sm:px-6

          md:min-h-[255px]
          md:px-10

          lg:min-h-[300px]
        "
      >
        <h1
          className="
            text-[17px]
            font-bold
            leading-tight
            text-[#111]

            sm:text-[32px]

            md:text-[42px]

            lg:text-[50px]
          "
        >
          سياسة الاستبدال والاسترجاع
        </h1>

        <p
          className="
            mt-2
            text-[9px]
            leading-4
            text-[#555]

            sm:mt-3
            sm:text-[14px]

            md:text-[18px]

            lg:text-[21px]
          "
        >
          نحرص على رضاك وتقديم تجربة تسوق آمنة وموثوقة
        </p>
      </div>
    </section>
  );
}