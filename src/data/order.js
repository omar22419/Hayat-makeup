import maskaraImage from "../assets/products/maskara.png";
import lipstick from "../assets/products/lipstick.png";
import eyeShadow from "../assets/products/eye-shadow.png";

/** Order summary products shown on OrderSuccess. */
export const orderProducts = [
  {
    id: 1,
    name: "ماسكارا حجم و طول",
    variant: "أسود",
    price: "95.00",
    image: maskaraImage,
  },
  {
    id: 2,
    name: "أحمر شفاه مطفي",
    variant: "وردي ناعم",
    price: "85.00",
    image: lipstick,
  },
  {
    id: 3,
    name: "غلوس شفاه لامع",
    variant: "شفاف وردي",
    price: "65.00",
    image: eyeShadow,
  },
];

/** Success screen order number. */
export const successOrderNumber = "#HM-2025-05873";