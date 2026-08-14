import makeupSteps from "../assets/guide/makeup-steps.png";
import foundation from "../assets/guide/foundation.png";
import eyeliner from "../assets/guide/eyeliner.png";
import setting from "../assets/guide/setting.png";
import brushes from "../assets/guide/brushes.png";
import colors from "../assets/guide/colors.png";

import lips from "../assets/guide/lips.png";
import lashes from "../assets/guide/lashes.png";

/** Makeup guide topics. */
export const guideTopics = [
  {
    id: 1,
    title: "ترتيب خطوات المكياج",
    description: "دليل شامل لخطوات مكياج مثالية تدوم طوال اليوم",
    image: makeupSteps,
  },
  {
    id: 2,
    title: "اختيار الفاونديشن",
    description: "كيف تختارين درجة الفاونديشن المناسبة لبشرتك",
    image: foundation,
  },
  {
    id: 3,
    title: "رسم الآيلاينر",
    description: "تقنيات سهلة لرسم آيلاينر مثالي للمبتدئين",
    image: eyeliner,
  },
  {
    id: 4,
    title: "تثبيت المكياج",
    description: "أفضل طرق تثبيت المكياج ليبقى ثابتًا لساعات",
    image: setting,
  },
  {
    id: 5,
    title: "تنظيف الفرش",
    description: "خطوات بسيطة للحفاظ على نظافة الفرش وأدواتك",
    image: brushes,
  },
  {
    id: 6,
    title: "اختيار الألوان المناسبة",
    description: "دليلك لاختيار الألوان التي تبرز جمالك وتناسبك",
    image: colors,
  },
];

/** Most-read articles (MakeupGuide). */
export const mostReadArticles = [
  {
    id: 2,
    title: "الحواجب المثالية",
    description: "شكل حاجبك حسب وجه",
    image: lashes,
  },
  {
    id: 1,
    title: "أسرار أحمر الشفاه",
    description: "اختاري اللون المثالي",
    image: lips,
  },
];