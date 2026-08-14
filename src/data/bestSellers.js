import product1 from "../assets/best-seller/lipstick.png";
import product2 from "../assets/best-seller/foundation.png";
import product3 from "../assets/best-seller/bullet-shadow.png";
import product4 from "../assets/best-seller/mascara.png";
import product5 from "../assets/best-seller/blushs.png";

/** Best sellers page ranking (5 products). */
export const bestSellerProducts = [
  {
    id: 1,
    rank: 1,
    name: "أحمر شفاه مات رويال",
    variant: "روز غامق",
    price: 75,
    rating: 4.8,
    reviews: "1,250",
    image: product1,
  },
  {
    id: 2,
    rank: 2,
    name: "كريم أساس بيرفكت كفر",
    variant: "بيج طبيعي",
    price: 105,
    rating: 4.7,
    reviews: "980",
    image: product2,
  },
  {
    id: 3,
    rank: 3,
    name: "باليت ظلال 12 لون",
    variant: "روز كلاسيك",
    price: 129,
    rating: 4.9,
    reviews: "860",
    image: product3,
  },
  {
    id: 4,
    rank: 4,
    name: "ماسكارا فوليوم أند ليفت",
    variant: "أسود كثيف",
    price: 65,
    rating: 4.6,
    reviews: "750",
    image: product4,
  },
  {
    id: 5,
    rank: 5,
    name: "مجموعة فرش مكياج 5 قطع",
    variant: "احترافية",
    price: 115,
    rating: 4.9,
    reviews: "620",
    image: product5,
  },
];

/** Display order used by the BestSellers grid (keeps 3 + last two swapped). */
export const bestSellerDisplayOrder = [
  ...bestSellerProducts.slice(0, 3),
  bestSellerProducts[4],
  bestSellerProducts[3],
];