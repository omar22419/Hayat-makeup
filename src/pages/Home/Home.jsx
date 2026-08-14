import Header from "../../components/layout/Header";
import HeroBanner from "../../components/home/HeroBanner";
import ServiceFeatures from "../../components/home/ServiceFeatures";
import CategoriesSection from "../../components/home/CategoriesSection";
import BestSellers from "../../components/home/BestSellers";
import PromoBanner from "../../components/home/PromoBanner.jsx";
import LooksCarousel from "../../components/home/LookCarousel.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

export default function Home() {
  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        w-full
        bg-white
        pb-[75px]
        md:pb-0
      "
    >
      <Header />

      <HeroBanner />

      <ServiceFeatures />

      <CategoriesSection />

      <BestSellers />

      <PromoBanner />

      <LooksCarousel />

      <MobileBottomNav activeItem="home" />
    </div>
  );
}