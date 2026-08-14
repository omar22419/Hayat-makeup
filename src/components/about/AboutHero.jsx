import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/hero.png";
import aboutHeroImg from "../../assets/about/about-hero.png";

export default function AboutHero() {
  const navigate = useNavigate();

  return (
    <section
      className="
        mx-auto
        mt-5
        w-full
        max-w-[1100px]

        sm:mt-7

        md:mt-10
      "
    >
      <div
        className="
          grid
          grid-cols-2
          items-center
          gap-2

          sm:gap-5

          md:gap-8

          lg:gap-12
        "
      >
        {/* Text */}
        <div
          className="
            order-1
            min-w-0
            text-right
          "
        >
          <img
            src={logoImg}
            alt="HAYAT Makeup"
            className="
              h-[48px]
              w-auto
              object-contain
              object-right

              sm:h-[62px]

              md:h-[75px]

              lg:h-[88px]
            "
          />

          <h1
            className="
              mt-3
              text-[24px]
              font-semibold
              leading-[1.2]
              text-[#111]

              sm:mt-4
              sm:text-[28px]

              md:text-[38px]

              lg:text-[48px]
            "
          >
            جمالك، بطريقتك
          </h1>

          <span
            className="
              mt-3
              ml-4
              block
              h-[1px]
              w-[30px]
              rounded-full
              bg-[#C91F72]

              sm:w-[58px]

              md:w-[72px]
            "
          />

          <p
            className="
              mt-3
              max-w-[95%]
              text-[11px]
              leading-5
              text-[#555]

              sm:mt-4
              sm:text-[12px]
              sm:leading-6

              md:text-[16px]
              md:leading-7

              lg:text-[18px]
            "
          >
            هيات ميكاب هي أكثر من مجرد متجر إلكتروني، نحن وجهتك لكل ما يعكس
            جمالك ويبرز ثقتك.
          </p>
        </div>

        {/* Image */}
        <div
          className="
            order-2
            flex
            min-w-0
            items-end
            justify-center
          "
        >
          <img
            src={aboutHeroImg}
            alt="منتجات HAYAT Makeup"
            className="
              h-[205px]
              w-full
              object-contain

              sm:h-[280px]

              md:h-[370px]

              lg:h-[450px]
            "
          />
        </div>
      </div>
    </section>
  );
}
