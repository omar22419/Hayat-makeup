import MakeupGuideHero from "../../components/guide/MakeupGuideHero.jsx";
import GuideTopics from "../../components/guide/GuideTopics.jsx";
import MostRead from "../../components/guide/MostRead.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";
import Header from "../../components/layout/Header.jsx";

export default function MakeupGuide() {
  return (
    <div dir="rtl" className="min-h-screen bg-white pb-20 text-[#111] sm:pb-0">
      <Header />

      <main
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-5
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* Page Header */}
        <section
          className="
            mb-3
            mt-1
            text-right

            sm:mb-6
            sm:mt-7

            md:mb-8
            md:mt-10
          "
        >
          <h1
            className="
              text-[18px]
              font-semibold
              leading-tight

              sm:text-[32px]

              md:text-[40px]

              lg:text-[48px]
            "
          >
            دليل المكياج
          </h1>

          <p
            className="
              mt-1
              text-[9px]
              leading-5
              text-[#777]

              sm:mt-2
              sm:text-[15px]

              md:text-[18px]

              lg:text-[20px]
            "
          >
            أدلة ونصائح تساعدك على إبراز جمالك بثقة
          </p>
        </section>

        <MakeupGuideHero />

        <GuideTopics />

        <MostRead />
      </main>

      <MobileBottomNav />
    </div>
  );
}
