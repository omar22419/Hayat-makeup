import perfumeImg from "../assets/category-perfume.png";
import lipstickImg from "../assets/products/lipstick.png";
import foundationImg from "../assets/products/foundation.png";

/** Default cart seed items used by the cart store (mock/local data). */
export const defaultCartItems = [
  {
    id: 1,
    name: "عطر حياة الوردي",
    description: "الحجم: 100 مل",
    color: "وردي",
    colorCode: "#F28AB2",
    price: 129,
    quantity: 1,
    image: perfumeImg,
  },
  {
    id: 2,
    name: "أحمر شفاه مطفي",
    description: "الدرجة: 07 - وردي فوشيا",
    color: "فوشيا",
    colorCode: "#D4146A",
    price: 89,
    quantity: 1,
    image: lipstickImg,
  },
  {
    id: 3,
    name: "كريم أساس سائل",
    description: "الدرجة: 03 - بيج طبيعي",
    color: "بيج طبيعي",
    colorCode: "#EBD6C0",
    price: 119,
    quantity: 1,
    image: foundationImg,
  },
];