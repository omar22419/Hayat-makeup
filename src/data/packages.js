import dailyImg from "../assets/packages/daily-package.png";
import aroosImg from "../assets/packages/arus-package.png";
import sahraImg from "../assets/packages/sahra-package.png";
import lipsImg from "../assets/packages/lips-package.png";
import fullFaceImg from "../assets/packages/full-face-package.png";

/** Packages page catalog (mock). First item is the featured one. */
export const packages = [
  {
    id: 1,
    name: "باقة يومية",
    description: "مثالية لإطلالة ناعمة ومنعشة كل يوم",
    price: 359,
    oldPrice: 479,
    discount: 25,
    products: 5,
    image: dailyImg,
    featured: true,
  },
  {
    id: 2,
    name: "باقة عروس",
    description: "كل ما تحتاجينه لتكوني أجمل في يومك",
    price: 489,
    oldPrice: 699,
    discount: 30,
    products: 6,
    image: aroosImg,
  },
  {
    id: 3,
    name: "باقة سهرة",
    description: "إطلالة جريئة تخطف الأنظار في كل مناسبة",
    price: 439,
    oldPrice: 549,
    discount: 20,
    products: 6,
    image: sahraImg,
  },
  {
    id: 4,
    name: "باقة الشفاه",
    description: "تشكيلة متكاملة لعشاق الشفاه المثالية",
    price: 254,
    oldPrice: 299,
    discount: 15,
    products: 5,
    image: lipsImg,
  },
  {
    id: 5,
    name: "باقة وجه كامل",
    description: "مجموعة متكاملة لإطلالة مثالية من أول خطوة",
    price: 559,
    oldPrice: 799,
    discount: 30,
    products: 7,
    image: fullFaceImg,
  },
];