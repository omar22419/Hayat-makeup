import featuredImage from "../assets/magazine/featured-skin.png";
import summerSkin from "../assets/magazine/skincare-summer.jpeg";
import eveningMakeup from "../assets/magazine/makeup-evening.jpeg";
import lipstickTrends from "../assets/magazine/lipstick-trends.jpeg";
import hairCare from "../assets/magazine/featured-skin.png";

/** Magazine category tabs. */
export const magazineTabs = [
  "كل المقالات",
  "عناية بالبشرة",
  "المكياج",
  "الشعر",
  "أخبار وصيحات",
];

/** Featured article (Magazine hero). */
export const featuredArticle = {
  title: "روتين العناية بالبشرة المتوهجة",
  description:
    "خطوات بسيطة لبشرة صحية ومشرقة كل يوم.",
  image: featuredImage,
};

/** Latest articles (Magazine). */
export const latestArticles = [
  {
    id: 1,
    category: "عناية بالبشرة",
    title: "5 نصائح لبشرة نضرة في فصل الصيف",
    description:
      "تعرفي على أهم النصائح لحماية بشرتك من أشعة الشمس والحفاظ على نضارتها.",
    date: "25 مايو 2024",
    image: summerSkin,
  },
  {
    id: 2,
    category: "المكياج",
    title: "إطلالات مكياج ناعمة للسهرات",
    description: "أفكار لإطلالات أنيقة تناسب كل المناسبات وتبرز جمالك الطبيعي.",
    date: "23 مايو 2024",
    image: eveningMakeup,
  },
  {
    id: 3,
    category: "أخبار وصيحات",
    title: "أحدث ألوان أحمر الشفاه لصيف 2024",
    description: "اكتشفي الألوان الرائجة هذا الموسم واختاري درجتك المفضلة.",
    date: "19 مايو 2024",
    image: lipstickTrends,
  },
  {
    id: 4,
    category: "الشعر",
    title: "روتين الشعر اللامع في المنزل",
    description: "خطوات بسيطة تعيد الحيوية للشعر وتحميه من التلف اليومي.",
    date: "15 مايو 2024",
    image: hairCare,
  },
];