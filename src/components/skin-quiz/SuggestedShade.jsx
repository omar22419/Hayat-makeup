import { Sparkles } from "lucide-react";
import foundationImg from "../../assets/skin/foundation.png";

export default function SuggestedShade() {
  const shades = [
    "#D6A97D",
    "#E1B682",
    "#C98D66",
    "#E2B486",
    "#E8C09D",
    "#EDD5BF",
  ];

  return (
    <section
        dir="ltr"
      className="
        mt-2
        w-full
        overflow-hidden
        rounded-[14px]
        border
        border-[#F1D8E2]
        bg-[#FFF0F5]

        sm:mt-5
        sm:rounded-[18px]

        md:mt-6
        md:rounded-[22px]
      "
    >
      <div
        className="
          flex
          min-h-[120px]
          items-center
          gap-2
          px-2
          py-2

          sm:min-h-[155px]
          sm:gap-4
          sm:px-5
          sm:py-3

          md:min-h-[195px]
          md:px-7
          md:py-4
        "
      >
        {/* Product Image - Left */}
        <div
          className="
            flex
            w-[40%]
            shrink-0
            items-center
            justify-center
          "
        >
          <img
            src={foundationImg}
            alt="Natural Beige"
            className="
              h-[105px]
              w-full
              object-contain

              sm:h-[135px]

              md:h-[175px]
            "
          />
        </div>

        {/* Details - Right */}
        <div
          dir="rtl"
          className="
            min-w-0
            flex-1
            text-right
          "
        >
          {/* Suggested */}
          <div
            className="
              flex
              items-center
              justify-start
              gap-1
              text-[#C91F72]
            "
          >
            <Sparkles
              size={13}
              strokeWidth={1.4}
              className="sm:size-[17px] md:size-[20px]"
            />

            <span
              className="
                text-[8px]
                font-medium

                sm:text-[11px]

                md:text-[14px]
              "
            >
              درجتك المقترحة
            </span>
          </div>

          {/* Shade Number */}
          <h2
            className="
              mt-1
              text-[22px]
              font-semibold
              leading-none
              text-[#111]
            text-center
              sm:text-[31px]

              md:text-[42px]
            "
          >
            N220
          </h2>

          {/* Name */}
          <p
            className="
              mt-1
              text-[9px]
              font-medium
              text-[#111]
                text-center
              sm:text-[13px]

              md:text-[17px]
            "
          >
            Natural Beige
          </p>

          {/* Description */}
          <p
            className="
              mt-1
              text-[7px]
              leading-4
              text-[#777]
                text-center
              sm:text-[10px]
              sm:leading-5

              md:text-[13px]
            "
          >
            تناسب بشرتك (عادية، محايد، فاتح)
          </p>

          {/* Shade Colors */}
          <div
            className="
              mt-2
              flex
              justify-center
              gap-1.5

              sm:gap-2

              md:gap-2.5
            "
          >
            {shades.map((color, index) => (
              <span
                key={color}
                className={`
                  flex
                  h-[16px]
                  w-[16px]
                  items-center
                  justify-center
                  rounded-full

                  sm:h-5
                  sm:w-5

                  md:h-6
                  md:w-6

                  ${index === 2 ? "border-[1px] border-[#C91F72] p-[1px]" : ""}
                `}
              >
                <span
                  className="h-full w-full rounded-full"
                  style={{
                    backgroundColor: color,
                  }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
