import { Sparkles } from "lucide-react";

export default function SkinQuizProgress({ currentStep = 1 }) {
  const steps = [
    { number: 1, label: "البشرة" },
    { number: 2, label: "تحتون البشرة" },
    { number: 3, label: "نوع البشرة" },
    { number: 4, label: "النتيجة" },
  ];

  return (
    <section
      dir="ltr"
      className="
        mx-auto
        flex
        w-full
        max-w-[850px]
        items-center
        justify-center
        px-3
        pt-2

        sm:px-5
        sm:pt-4

        md:px-0
        md:pt-5
      "
    >
      {/* Center Group */}
      <div
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3

          sm:gap-5

          md:gap-7
        "
      >
        {/* Progress */}
        <div
          className="
            relative
            w-[68%]

            sm:w-[70%]

            md:w-[72%]
          "
        >
          {/* Connecting line */}
          <div
            className="
              absolute
              left-[9%]
              right-[9%]
              top-[10px]
              h-[1px]
              bg-[#E7E7E7]

              sm:top-[19px]

              md:top-[22px]
            "
          />

          {/* Steps */}
          <div
            className="
              relative
              z-10
              flex
              items-start
              justify-between
            "
          >
            {steps.map((step) => {
              const active = step.number === currentStep;
              const completed = step.number < currentStep;

              return (
                <div
                  key={step.number}
                  className="
                    flex
                    min-w-0
                    flex-col
                    items-center
                    text-center
                  "
                >
                  <div
                    className={`
                      flex
                      h-[20px]
                      w-[20px]
                      items-center
                      justify-center
                      rounded-full
                      text-[10px]

                      sm:h-[38px]
                      sm:w-[38px]
                      sm:text-[14px]

                      md:h-[44px]
                      md:w-[44px]
                      md:text-[16px]

                      ${
                        active || completed
                          ? "bg-[#C91F72] text-white"
                          : "bg-[#EDEDED] text-[#333]"
                      }
                    `}
                  >
                    {step.number}
                  </div>

                  <span
                    className={`
                      mt-1.5
                      whitespace-nowrap
                      text-[8px]
                      leading-4

                      sm:mt-2
                      sm:text-[10px]

                      md:text-[13px]

                      ${
                        active
                          ? "font-semibold text-[#111]"
                          : "font-normal text-[#777]"
                      }
                    `}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Beauty Assistant */}
        <div
          dir="rtl"
          className="
            flex
            w-[28%]
            shrink-0
            items-center
            justify-start
            gap-2

            sm:w-[25%]
            sm:gap-2.5

            md:w-[23%]
            md:gap-3
          "
        >
          {/* Pink Circle */}
          <div
            className="
              flex
              h-[30px]
              w-[30px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#C91F72]

              sm:h-[56px]
              sm:w-[56px]

              md:h-[68px]
              md:w-[68px]
            "
          >
            <Sparkles
              size={17}
              strokeWidth={1.5}
              className="
                text-white

                sm:size-[29px]

                md:size-[36px]
              "
            />
          </div>

          {/* Text */}
          <div
            className="
              text-right
              leading-tight
            "
          >
            <p
              className="
                whitespace-nowrap
                text-[8px]
                text-[#111]

                sm:text-[10px]

                md:text-[13px]
              "
            >
              مساعد الجمال
            </p>

            <p
              className="
                mt-0.5
                text-[9px]
                font-semibold
                text-[#C91F72]

                sm:text-[12px]

                md:text-[15px]
              "
            >
              HAYAT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}