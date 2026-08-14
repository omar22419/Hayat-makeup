import heroBanner from "../../assets/hero-Banner.jpeg";

export default function HeroBanner() {
  return (
    <section className="px-[12px]">
      <div className="mx-auto w-full max-w-[941px]  overflow-hidden rounded-[8px]">
        <img
          src={heroBanner}
          alt="Hayat Makeup"
          className="block h-[120px]  md:h-[390px] w-full object-cover md:object-contain rounded-[8px]"
        />
      </div>
    </section>
  );
}