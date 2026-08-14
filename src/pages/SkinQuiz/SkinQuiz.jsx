import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SkinQuizHeader from "../../components/skin-quiz/SkinQuizHeader.jsx";
import SkinQuizProgress from "../../components/skin-quiz/SkinQuizProgress.jsx";
import SkinToneOption from "../../components/skin-quiz/SkinToneOption.jsx";
import UndertoneOption from "../../components/skin-quiz/UndertoneOption.jsx";
import SkinTypeOption from "../../components/skin-quiz/SkinTypeOption.jsx";
import SuggestedShade from "../../components/skin-quiz/SuggestedShade.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getSkinQuizData, skinQuizMock } from "../../services/content.js";
import { ArrowLeft, Search } from "lucide-react";

export default function SkinQuiz() {
  const navigate = useNavigate();
  const quizData = useAsyncData(getSkinQuizData, skinQuizMock);

  const tones = quizData.tones;
  const undertones = quizData.undertones;
  const skinTypes = quizData.skinTypes;

  const [selectedTone, setSelectedTone] = useState("5");
  const [selectedUndertone, setSelectedUndertone] = useState("neutral");
  const [selectedType, setSelectedType] = useState("normal");

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-white
        px-3
        pb-5

        sm:px-5
        sm:pb-7

        md:px-8
        md:pb-10

        lg:px-10
      "
    >
      <SkinQuizHeader />

      <SkinQuizProgress currentStep={1} />

      {/* Intro */}
      <section
        className="

          mx-auto
          mt-2
          w-full
          max-w-[1000px]
          text-center

          sm:mt-7

          md:mt-9
          "
      >

        <div className="flex items-center justify-center gap-2">
          <Search size={20} strokeWidth={1} className="text-[#C91F72] rotate-90" />
            <h1
            className="
                text-[15px]
                font-semibold
                leading-[1.35]
                text-[#111]

                sm:text-[28px]

                md:text-[38px]

                lg:text-[45px]
            "
            >
            ابحثي عن درجة كريم الأساس المثالية لك
            </h1>
        </div>

        <p
          className="
            mt-1
            text-[9px]
            leading-5
            text-[#888]

            sm:text-[13px]

            md:text-[17px]
          "
        >
          إجابة 3 أسئلة بسيطة لنوصي لك بدرجتك المثالية
        </p>
      </section>

      {/* Question 1 */}
      <section
        className="
          mx-auto
          mt-2
          w-full
          max-w-[1000px]
          rounded-[14px]
          border
          border-[#EEEEEE]
          bg-white
          p-2.5
          shadow-[0_2px_9px_rgba(0,0,0,0.03)]

          sm:mt-6
          sm:rounded-[18px]
          sm:p-4

          md:mt-8
          md:p-6
        "
      >
        <div
          className="
            mb-3
            flex
            items-center
            justify-between

            sm:mb-4

            md:mb-5
          "
        >
          <h2
            className="
              text-[12px]
              font-semibold
              text-[#111]

              sm:text-[19px]

              md:text-[25px]
            "
          >
            1. لون بشرتك
          </h2>

          <span
            className="
              flex
              items-center
              gap-1
              text-[8px]
              text-[#777]

              sm:gap-2
              sm:text-[12px]

              md:text-[15px]
            "
          >
            كيف أحدد لون بشرتي؟
            <span
              className="
                flex
                h-3
                w-3
                items-center
                justify-center
                rounded-full
                border
                border-[#C91F72]
                text-[#C91F72]

                sm:h-6
                sm:w-6
              "
            >
              ?
            </span>
          </span>
        </div>

        <div
          className="
            grid
            grid-cols-5
            gap-1.5

            sm:gap-2.5

            md:gap-4
          "
        >
          {tones.map((tone) => (
            <SkinToneOption
              key={tone.id}
              tone={tone}
              selected={selectedTone === tone.id}
              onClick={() => setSelectedTone(tone.id)}
            />
          ))}
        </div>
      </section>

      {/* Question 2 */}
      <section
        className="
          mx-auto
          mt-2
          w-full
          max-w-[1000px]
          rounded-[14px]
          border
          border-[#EEEEEE]
          bg-white
          p-2.5
          shadow-[0_2px_9px_rgba(0,0,0,0.03)]

          sm:mt-4
          sm:rounded-[18px]
          sm:p-4

          md:p-6
        "
      >
        <div
          className="
            mb-3
            flex
            items-center
            justify-between
          "
        >
          <h2
            className="
              text-[14px]
              font-semibold

              sm:text-[19px]

              md:text-[25px]
            "
          >
            2. تحتون بشرتك
          </h2>

          <span
            className="
              flex
              items-center
              gap-1
              text-[8px]
              text-[#777]

              sm:text-[12px]

              md:text-[15px]
            "
          >
            ما هو تحتون البشرة؟
            <span
              className="
                flex
                h-3
                w-3
                items-center
                justify-center
                rounded-full
                border
                border-[#C91F72]
                text-[#C91F72]

                sm:h-6
                sm:w-6
              "
            >
              ?
            </span>
          </span>
        </div>

        <div
          className="
            grid
            grid-cols-3
            gap-1.5

            sm:gap-3

            md:gap-4
          "
        >
          {undertones.map((tone) => (
            <UndertoneOption
              key={tone.id}
              tone={tone}
              selected={selectedUndertone === tone.id}
              onClick={() => setSelectedUndertone(tone.id)}
            />
          ))}
        </div>
      </section>

      {/* Question 3 */}
      <section
        className="
          mx-auto
          mt-2
          w-full
          max-w-[1000px]
          rounded-[14px]
          border
          border-[#EEEEEE]
          bg-white
          p-2.5
          shadow-[0_2px_9px_rgba(0,0,0,0.03)]

          sm:mt-4
          sm:rounded-[18px]
          sm:p-4

          md:p-6
        "
      >
        <div
          className="
            mb-3
            flex
            items-center
            justify-between
          "
        >
          <h2
            className="
              text-[14px]
              font-semibold

              sm:text-[19px]

              md:text-[25px]
            "
          >
            3. نوع بشرتك
          </h2>

          <span
            className="
              flex
              items-center
              gap-1
              text-[8px]
              text-[#777]

              sm:text-[12px]

              md:text-[15px]
            "
          >
              كيف أحدد نوع بشرتي؟
            <span
              className="
                flex
                h-3
                w-3
                items-center
                justify-center
                rounded-full
                border
                border-[#C91F72]
                text-[#C91F72]

                sm:h-6
                sm:w-6
              "
            >
              ?
            </span>
          </span>
        </div>

        <div
          className="
            grid
            grid-cols-5
            gap-1.5

            sm:gap-2.5

            md:gap-4
          "
        >
          {skinTypes.map((type) => (
            <SkinTypeOption
              key={type.id}
              type={type}
              selected={selectedType === type.id}
              onClick={() => setSelectedType(type.id)}
            />
          ))}
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1000px]">
        <SuggestedShade />

        {/* Next */}
        <button
          type="button"
          onClick={() => navigate("/skin-type")}
          className="
            relative
            mt-1
            flex
            h-[30px]
            w-full
            items-center
            justify-center
            rounded-[8px]
            bg-[#D20A71]
            !text-[11px]
            font-medium
            text-white

            sm:mt-4
            sm:h-[48px]
            sm:rounded-[11px]
            sm:text-[15px]

            md:mt-5
            md:h-[60px]
            md:rounded-[15px]
            md:text-[19px]
          "
        >
          <span>التالي</span>
          <ArrowLeft size={12} strokeWidth={1.5}  />
        </button>
      </div>
    </div>
  );
}
