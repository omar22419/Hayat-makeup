import makeup from "../assets/categories/makeup.jpeg";
import skinCare from "../assets/categories/skin-care.jpeg";
import perfumes from "../assets/categories/perfumes.jpeg";
import tools from "../assets/categories/tools.jpeg";

import eyesImage from "../assets/category-eyes.png";
import faceImage from "../assets/category-face.png";
import lipsImage from "../assets/category-lips.png";
import skinImage from "../assets/category-skin.png";
import toolsImage from "../assets/category-tools.png";
import perfumeImage from "../assets/category-perfume.png";

/** Home page category circles. */
export const homeCategories = [
  {
    name: "المكياج",
    image: makeup,
  },
  {
    name: "العناية بالبشرة",
    image: skinCare,
  },
  {
    name: "العطور",
    image: perfumes,
  },
  {
    name: "الأدوات",
    image: tools,
  },
];

/** Full shop categories (Categories page). */
export const shopCategories = [
  {
    id: "eyes",
    title: "العيون",
    description: "إطلالة ساحرة\nبكل التفاصيل",
    image: eyesImage,
  },
  {
    id: "face",
    title: "الوجه",
    description: "كل ما تحتاجين\nلبشرة مثالية",
    image: faceImage,
  },
  {
    id: "skin",
    title: "العناية\nبالبشرة",
    description: "عناية يومية\nلبشرة نضرة ومتألقة",
    image: skinImage,
  },
  {
    id: "lips",
    title: "الشفاه",
    description: "ألوان تدوم\nوثقة تدوم أكثر",
    image: lipsImage,
  },
  {
    id: "tools",
    title: "الأدوات",
    description: "أدوات احترافية\nلإطلالة مثالية",
    image: toolsImage,
  },
  {
    id: "perfume",
    title: "العطور",
    description: "روائح تعبّر\nعن شخصيتك",
    image: perfumeImage,
  },
];