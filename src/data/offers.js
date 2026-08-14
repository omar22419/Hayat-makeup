import perfumeImg from "../assets/offers/featured-perfume.png";
import makeupImg from "../assets/offers/featured-makeup.png";
import skincareImg from "../assets/offers/featured-skincare.png";

import careBundleImg from "../assets/offers/bundle-care.png";
import beautyBundleImg from "../assets/offers/bundle-beauty.png";
import completeBundleImg from "../assets/offers/bundle-complete.png";

/** Featured offers (mock). */
export const featuredOffers = [
  {
    id: 1,
    title: "عطور مختارة",
    discount: 20,
    image: perfumeImg,
  },
  {
    id: 2,
    title: "خصم على المكياج",
    discount: 30,
    image: makeupImg,
  },
  {
    id: 3,
    title: "خصم على منتجات العناية",
    discount: 25,
    image: skincareImg,
  },
];

/** Offer bundles (mock). */
export const offerBundles = [
  {
    id: 1,
    name: "باقة العناية الفاخرة",
    description: "عناية متكاملة",
    price: 199,
    oldPrice: 329,
    saving: 130,
    image: careBundleImg,
  },
  {
    id: 2,
    name: "باقة الجمال اليومية",
    description: "عطر + مكياج",
    price: 159,
    oldPrice: 279,
    saving: 120,
    image: beautyBundleImg,
  },
  {
    id: 3,
    name: "باقة الإطلالة الكاملة",
    description: "مكياج + عناية + عطر",
    price: 219,
    oldPrice: 399,
    saving: 180,
    image: completeBundleImg,
    featured: true,
  },
];

/** Static countdown boxes on the LimitedOffer banner. */
export const limitedOfferTime = [
  { value: "27", label: "ثواني" },
  { value: "38", label: "دقائق" },
  { value: "14", label: "ساعات" },
  { value: "02", label: "أيام" },
];