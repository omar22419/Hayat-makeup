import skin1 from "../assets/Skin/1.png";
import skin2 from "../assets/Skin/2.png";
import skin3 from "../assets/Skin/3.png";
import skin4 from "../assets/Skin/4.png";
import skin5 from "../assets/Skin/5.png";

import foundationImg from "../assets/products/foundation.png";
import mascaraImg from "../assets/products/maskara.png";
import eyeShadowImg from "../assets/products/eye-shadow.png";
import lipstickImg from "../assets/products/lipstick.png";

/** Skin type cards (SkinType page). */
export const skinTypes = [
  {
    id: "oily",
    title: "دهنية",
    description:
      "تركيبات خفيفة تتحكم بالمعان وتحافظ على توازن بشرتك.",
    image: skin1,
    products: [
      foundationImg,
      eyeShadowImg,
      mascaraImg,
    ],
  },
  {
    id: "dry",
    title: "جافة",
    description:
      "تركيبات مرطبة تغذي البشرة وتمنحها نعومة وإشراقة.",
    image: skin2,
    products: [
      lipstickImg,
      foundationImg,
      eyeShadowImg,
    ],
  },
  {
    id: "combination",
    title: "مختلطة",
    description:
      "توازن مثالي للعناية والمظهر المثالي في كل منطقة.",
    image: skin3,
    products: [
      foundationImg,
      mascaraImg,
      eyeShadowImg,
    ],
  },
  {
    id: "sensitive",
    title: "حساسة",
    description:
      "تركيبات لطيفة تهدئ البشرة وتقلل من التهيج والاحمرار.",
    image: skin4,
    products: [
      foundationImg,
      lipstickImg,
      mascaraImg,
    ],
  },
  {
    id: "acne",
    title: "معرضة للحبوب",
    description:
      "تركيبات تساعد على تنقية البشرة والحد من ظهور الحبوب.",
    image: skin5,
    products: [
      foundationImg,
      mascaraImg,
      lipstickImg,
    ],
  },
];