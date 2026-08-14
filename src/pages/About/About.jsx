import AboutHeader from "../../components/about/AboutHeader.jsx";
import AboutHero from "../../components/about/AboutHero.jsx";
import AboutMission from "../../components/about/AboutMission.jsx";
import AboutValues from "../../components/about/AboutValues.jsx";
import AboutStory from "../../components/about/AboutStory.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

export default function About() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        pb-[72px]

        sm:pb-0
      "
    >
      <AboutHeader />

      <main
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-3

          sm:px-5

          md:px-8

          lg:px-10
        "
      >
        <AboutHero />

        <AboutMission />

        <AboutValues />

        <AboutStory />
      </main>

      <MobileBottomNav />
    </div>
  );
}