import skin5 from "../assets/Skin/1.png";
import skin4 from "../assets/Skin/2.png";
import skin3 from "../assets/Skin/3.png";
import skin2 from "../assets/Skin/4.png";
import skin1 from "../assets/Skin/5.png";

import cool from "../assets/Skin/cool.png";
import neutral from "../assets/Skin/neutral.png";
import warm from "../assets/Skin/warm.png";

/** Skin tone options (SkinQuiz Q1). */
export const quizTones = [
  {
    id: "5",
    label: "فاتح",
    image: skin5,
  },
  {
    id: "4",
    label: "متوسط فاتح",
    image: skin4,
  },
  {
    id: "3",
    label: "متوسط",
    image: skin3,
  },
  {
    id: "2",
    label: "قمحي",
    image: skin2,
  },
  {
    id: "1",
    label: "داكن",
    image: skin1,
  },
];

/** Undertone options (SkinQuiz Q2). */
export const quizUndertones = [
  {
    id: "neutral",
    label: "محايد",
    description: "مزيج من الذهبي والوردي",
    image: neutral,
  },
  {
    id: "warm",
    label: "دافئ",
    description: "ذهبي أو خوخي",
    image: warm,
  },
  {
    id: "cool",
    label: "بارد",
    description: "وردي أو وردي مزرق",
    image: cool,
  },
];

/** Skin type options (SkinQuiz Q3). */
export const quizSkinTypes = [
  {
    id: "normal",
    label: "عادية",
    description: "متوازنة",
  },
  {
    id: "dry",
    label: "جافة",
    description: "تشرين بالجفاف",
  },
  {
    id: "oily",
    label: "دهنية",
    description: "لامعة في المنطقة T",
  },
  {
    id: "combination",
    label: "مختلطة",
    description: "دهنية في T وجافة",
  },
  {
    id: "sensitive",
    label: "حساسة",
    description: "تتأثر بسهولة",
  },
];