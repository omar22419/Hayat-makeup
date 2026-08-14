import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Heart, Share2, Star, X } from "lucide-react";

import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";
import { useFavoritesStore } from "../../store/favoritesStore.js";

import foundationImg from "../../assets/products/foundation.png";
import lipstickImg from "../../assets/products/lipstick.png";
import eyeshadowImg from "../../assets/products/eye-shadow.png";

const products = [
  {
    id: 1,
    name: "فلت كفر",
    type: "كريم أساس",
    price: "149",
    rating: "4.7",
    image: foundationImg,
    details: {
      appearance: (
        <>
          طبيعي
          <br />
          متوسطة – قابلة للبناء
        </>
      ),
      skin: "عادية – دهنية – مختلطة",
      size: "30 مل",
      features: [
        "يغطي العيوب والخطوط",
        "تركيبة خفيفة ومريحة",
        "يمنح بشرة ناعمة ومشرقة",
        "يدوم حتى 12 ساعة",
      ],
    },
  },
  {
    id: 2,
    name: "إيفا مات",
    type: "أحمر شفاه مطفي",
    price: "79",
    rating: "4.8",
    image: lipstickImg,
    details: {
      appearance: (
        <>
          مات
          <br />
          متوسطة – عالية
        </>
      ),
      skin: "جميع أنواع البشرة",
      size: "4 جم",
      features: [
        "لون غني وثابت",
        "لا يسبب جفاف الشفاه",
        "يمنح مظهرًا مخمليًا",
        "تصميم أنيق وسهل الاستخدام",
      ],
    },
  },
  {
    id: 3,
    name: "بيوتي جلو",
    type: "باليت ظلال عيون",
    price: "129",
    rating: "4.6",
    image: eyeshadowImg,
    details: {
      appearance: (
        <>
          مات ولمّاع
          <br />-
        </>
      ),
      skin: "جميع أنواع البشرة",
      size: "12 لون / 14 جم",
      features: [
        "ألوان عالية الصبغة",
        "قابلة للمزج بسهولة",
        "تدوم طوال اليوم",
        "مناسبة للمكياج النهاري والسهرات",
      ],
    },
  },
];

const rows = [
  {
    label: "السعر",
    render: (product) => (
      <span className="font-bold text-[#C91F72]">{product.price} ر.س</span>
    ),
  },
  {
    label: "التقييم",
    render: (product) => (
      <div
        dir="ltr"
        className="flex items-center justify-center gap-[2px] sm:gap-1"
      >
        <span className="mr-1 text-[#111]">{product.rating}</span>

        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-[9px] w-[9px] sm:h-[14px] sm:w-[14px]"
            fill={
              index < Math.floor(Number(product.rating)) ? "#C91F72" : "none"
            }
            stroke="#C91F72"
            strokeWidth={1.5}
          />
        ))}
      </div>
    ),
  },
  {
    label: "المظهر /\nالتغطية",
    render: (product) => product.details.appearance,
  },
  {
    label: "نوع البشرة\nالمناسب",
    render: (product) => product.details.skin,
  },
  {
    label: "الحجم",
    render: (product) => product.details.size,
  },
  {
    label: "أبرز المميزات",
    render: (product) => (
      <ul className="space-y-1 text-right">
        {product.details.features.map((feature) => (
          <li
            key={feature}
            className="
              flex
              items-start
              justify-center
              gap-1
              text-center
              leading-3
              text-[7px]
              sm:justify-end
              sm:text-right
              sm:leading-6
            "
          >
            <span className="shrink-0 text-[#C91F72]">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

export default function ProductComparison() {
  const navigate = useNavigate();
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const [comparisonProducts, setComparisonProducts] = useState(products);

  const handleRemove = (id) =>
    setComparisonProducts((prev) => prev.filter((product) => product.id !== id));

  const handleAddAllToWishlist = () =>
    comparisonProducts.forEach((product) => toggleFavorite(product));

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-white
        pb-[78px]
        text-[#111]
        sm:pb-0
      "
    >
      <Header />

      <main
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-2
          pt-4

          sm:px-5
          sm:pt-7

          md:px-8
          md:pt-10

          lg:px-10
          xl:px-12
        "
      >
        {/* Page Header */}
        <section
          className="
            relative
            mb-2
            flex
            items-center
            justify-between

            sm:mb-7

            md:mb-9
          "
        >
          {/* Back */}
          <button
            type="button"
            aria-label="رجوع"
            onClick={() => navigate(-1)}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              text-[#C91F72]

              sm:h-10
              sm:w-10

              md:h-12
              md:w-12
            "
          >
            <ArrowRight
              className="
                h-6
                w-6

                sm:h-7
                sm:w-7

                md:h-8
                md:w-8
              "
              strokeWidth={1.7}
            />
          </button>

          <h1
            className="
              absolute
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              text-[18px]
              font-bold

              sm:text-[28px]

              md:text-[36px]

              lg:text-[42px]
            "
          >
            مقارنة المنتجات
          </h1>

          {/* Share */}
          <button
            type="button"
            aria-label="مشاركة"
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              text-[#C91F72]

              sm:h-10
              sm:w-10

              md:h-12
              md:w-12
            "
          >
            <Share2
              className="
                h-[19px]
                w-[19px]

                sm:h-6
                sm:w-6

                md:h-7
                md:w-7
              "
              strokeWidth={1.7}
            />
          </button>
        </section>

        {/* Comparison Table */}
        <section
          className="
            w-full
            overflow-hidden
            rounded-[14px]
            border
            border-[#e9e9e9]
            bg-white

            sm:rounded-[18px]

            md:rounded-[22px]
          "
        >
          {/* Header Row */}
          <div
            className="
              grid
              grid-cols-[24%_25.33%_25.33%_25.33%]
              border-b
              border-[#e9e9e9]
            "
          >
            {/* Product Label */}
            <div
              className="
                flex
                min-h-[150px]
                items-center
                justify-center
                border-l
                border-[#e9e9e9]
                p-1
                text-[11px]
                font-semibold
                bg-[#aaa9a91c]

                sm:min-h-[230px]
                sm:p-3
                sm:text-[18px]

                md:min-h-[300px]
                md:text-[23px]
              "
            >
              المنتج
            </div>

            {comparisonProducts.map((product) => (
              <div
                key={product.id}
                className="
                  relative
                  flex
                  min-w-0
                  flex-col
                  items-center
                  justify-end
                  border-l
                  border-[#e9e9e9]
                  px-1
                  pb-3

                  sm:px-3
                  sm:pb-5

                  md:px-5
                  md:pb-7
                "
              >
                {/* Remove */}
                <button
                  type="button"
                  aria-label={`حذف ${product.name}`}
                  onClick={() => handleRemove(product.id)}
                  className="
                    absolute
                    left-1
                    top-1
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fff1f5]
                    text-[#C91F72]

                    sm:left-2
                    sm:top-2
                    sm:h-8
                    sm:w-8

                    md:h-9
                    md:w-9
                  "
                >
                  <X
                    className="
                      h-3
                      w-3

                      sm:h-4
                      sm:w-4

                      md:h-5
                      md:w-5
                    "
                    strokeWidth={1.7}
                  />
                </button>

                {/* Product Image */}
                <div
                  className="
                    flex
                    h-[105px]
                    w-full
                    items-center
                    justify-center
                    pt-5

                    sm:h-[175px]

                    md:h-[225px]

                    lg:h-[250px]
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-full
                      w-full
                      object-contain
                    "
                  />
                </div>

                {/* Product Name */}
                <h2
                  className="
                    mt-2
                    text-center
                    text-[11px]
                    font-medium
                    leading-5

                    sm:mt-3
                    sm:text-[18px]
                    sm:leading-7

                    md:text-[23px]
                  "
                >
                  {product.name}
                </h2>

                <p
                  className="
                    mt-0.5
                    text-center
                    text-[9px]
                    leading-4
                    text-[#333]

                    sm:text-[14px]
                    sm:leading-6

                    md:text-[18px]
                  "
                >
                  {product.type}
                </p>
              </div>
            ))}
          </div>

          {/* Table Rows */}
          {rows.map((row) => (
            <div
              key={row.label}
              className="
                grid
                grid-cols-[24%_25.33%_25.33%_25.33%]
                border-b
                border-[#e9e9e9]
                last:border-b-0
              "
            >
              {/* Label */}
              <div
                className="
                  flex
                  min-h-[30px]
                  items-center
                  justify-center
                  whitespace-pre-line
                  border-l
                  border-[#e9e9e9]
                bg-[#aaa9a91c]
                  px-1
                  py-1
                  text-center
                  text-[10px]
                  font-semibold
                  leading-5

                  sm:min-h-[75px]
                  sm:px-3
                  sm:text-[16px]
                  sm:leading-6

                  md:min-h-[95px]
                  md:text-[21px]
                  md:leading-8
                "
              >
                {row.label}
              </div>

              {/* Products */}
              {comparisonProducts.map((product) => (
                <div
                  key={`${product.id}-${row.label}`}
                  className="
                    flex
                    min-w-0
                    items-center
                    justify-center
                    border-l
                    border-[#e9e9e9]
                    px-1
                    py-1
                    text-center
                    text-[9px]
                    leading-4

                    sm:px-3
                    sm:py-3
                    sm:text-[14px]
                    sm:leading-6

                    md:px-5
                    md:py-4
                    md:text-[18px]
                    md:leading-7
                  "
                >
                  {row.render(product)}
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* Add All To Wishlist */}
        <button
          type="button"
          onClick={handleAddAllToWishlist}
          className="
            mt-2
            flex
            h-[35px]
            w-full
            items-center
            justify-center
            gap-2
            rounded-[8px]
            border
            border-[#e5e5e5]
            bg-white
            !text-[12px]
            text-[#333]

            sm:mt-5
            sm:h-[58px]
            sm:text-[18px]

            md:h-[68px]
            md:text-[22px]
          "
        >
          <span>إضافة الكل إلى المفضلة</span>
          <Heart
            className="
              h-5
              w-5
              text-[#C91F72]

              sm:h-6
              sm:w-6

              md:h-7
              md:w-7
            "
            strokeWidth={1.5}
          />
        </button>
      </main>

      <MobileBottomNav />
    </div>
  );
}
