import {
  Diamond,
  Heart,
  Sparkles,
} from "lucide-react";

import AboutValueCard from "./AboutValueCard.jsx";

const values = [
  {
    id: 1,
    title: "جمال يومي أنيق",
    description:
      "منتجات تجمع بين الجودة والأناقة لترافقك في كل لحظة.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "مختارة بعناية",
    description:
      "نختار كل منتج بعناية ليناسب احتياجاتك ويلبي توقعاتك.",
    icon: Diamond,
  },
  {
    id: 3,
    title: "منتجات أصلية",
    description:
      "نضمن لك منتجات أصلية 100% من أفضل الماركات العالمية.",
    icon: Heart,
  },
];

export default function AboutValues() {
  return (
    <section
      className="
        mx-auto
        mt-4
        w-full
        max-w-[1050px]

        sm:mt-7

        md:mt-10
      "
    >
      <div
        className="
          grid
          grid-cols-3
          items-stretch
          gap-2

          sm:gap-4

          md:gap-6
        "
      >
        {values.map((value) => (
          <AboutValueCard
            key={value.id}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
}