import pinkLipstick from "../assets/colors/pink-lipstick.png";
import pinkBlush from "../assets/colors/pink-blush.png";
import pinkPalette from "../assets/colors/pink-palette.png";
import pinkGloss from "../assets/colors/pink-gloss.png";

const baseProducts = [
  {
    id: 1,
    name: "أحمر شفاه مطفي",
    price: 79,
    image: pinkLipstick,
  },
  {
    id: 2,
    name: "أحمر خدود مطفي",
    price: 69,
    image: pinkBlush,
  },
  {
    id: 3,
    name: "باليت ظلال عيون",
    price: 129,
    image: pinkPalette,
  },
  {
    id: 4,
    name: "ملمع شفاه لامع",
    price: 59,
    image: pinkGloss,
  },
];

/** Color filter tabs (Shop by color page). */
export const colorFilters = [
  {
    id: "pink",
    label: "وردي",
    color: "#D93678",
  },
  {
    id: "red",
    label: "أحمر",
    color: "#E5232D",
  },
  {
    id: "nude",
    label: "نيود",
    color: "#E4C1B4",
  },
  {
    id: "brown",
    label: "بني",
    color: "#91512F",
  },
  {
    id: "purple",
    label: "بنفسجي",
    color: "#8A3DA7",
  },
  {
    id: "gold",
    label: "ذهبي",
    color: "#D5A22F",
  },
];

const sectionMeta = {
  pink: { title: "منتجات وردية", subtitle: "كل درجات الوردي لأنوثتك", color: "#D93678" },
  red: { title: "منتجات حمراء", subtitle: "أحمر كلاسيكي... جمال لا يزول", color: "#DE242C" },
  nude: { title: "منتجات نيود", subtitle: "ألوان ناعمة لإطلالة طبيعية", color: "#DDBFB2" },
  brown: { title: "منتجات بنية", subtitle: "درجات دافئة لإطلالة جذابة", color: "#91512F" },
  purple: { title: "منتجات بنفسجية", subtitle: "درجات جريئة ومميزة", color: "#8A3DA7" },
  gold: { title: "منتجات ذهبية", subtitle: "لمسات ذهبية لإطلالة مشرقة", color: "#D5A22F" },
};

const productNames = {
  pink: {
    lip: "أحمر شفاه مطفي وردي غامق",
    blush: "أحمر خدود مطفي وردي طبيعي",
    palette: "باليت ظلال عيون وردية",
    gloss: "ملمع شفاه وردي لامع",
  },
  red: {
    lip: "أحمر شفاه مطفي أحمر كلاسيكي",
    blush: "أحمر خدود أحمر طبيعي",
    palette: "باليت ظلال عيون حمراء",
    gloss: "ملمع شفاه أحمر لامع",
  },
  nude: {
    lip: "أحمر شفاه نيود طبيعي",
    blush: "أحمر خدود نيود",
    palette: "باليت ظلال نيود",
    gloss: "ملمع شفاه نيود",
  },
  brown: {
    lip: "أحمر شفاه بني دافئ",
    blush: "أحمر خدود بني",
    palette: "باليت ظلال بنية",
    gloss: "ملمع شفاه بني",
  },
  purple: {
    lip: "أحمر شفاه بنفسجي",
    blush: "أحمر خدود بنفسجي",
    palette: "باليت ظلال بنفسجية",
    gloss: "ملمع شفاه بنفسجي",
  },
  gold: {
    lip: "أحمر شفاه ذهبي",
    blush: "أحمر خدود ذهبي",
    palette: "باليت ظلال ذهبية",
    gloss: "ملمع شفاه ذهبي",
  },
};

const buildSection = (color) => {
  const meta = sectionMeta[color];
  const names = productNames[color];

  return {
    id: color,
    title: meta.title,
    subtitle: meta.subtitle,
    color: meta.color,
    products: [
      {
        ...baseProducts[0],
        id: `${color}-1`,
        name: names.lip,
        price: 79,
      },
      {
        ...baseProducts[1],
        id: `${color}-2`,
        name: names.blush,
        price: 69,
      },
      {
        ...baseProducts[2],
        id: `${color}-3`,
        name: names.palette,
        price: 129,
      },
      {
        ...baseProducts[3],
        id: `${color}-4`,
        name: names.gloss,
        price: 59,
      },
    ],
  };
};

/** Shop by color sections (mock). */
export const colorSections = ["pink", "red", "nude", "brown", "purple", "gold"].map(
  buildSection
);