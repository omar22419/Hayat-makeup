import nightLook from "../assets/looks/night-look.png";
import dayLook from "../assets/looks/day-look.png";

import softImg from "../assets/looks/soft.png";
import glossyImg from "../assets/looks/glossy.png";
import smokyImg from "../assets/looks/smoky.jpeg";
import eveningImg from "../assets/looks/evening.png";
import bridalImg from "../assets/looks/bridal.png";
import universityImg from "../assets/looks/university.png";
import workImg from "../assets/looks/work.png";
import dailyImg from "../assets/looks/daily.png";

/** Home carousel looks. */
export const homeLooks = [
  {
    id: 2,
    image: dayLook,
    title: "إطلالة يومية",
    description: "مكياج ناعم وطبيعي",
    type: "day",
  },
  {
    id: 1,
    image: nightLook,
    title: "إطلالة سهرة",
    description: "مكياج جذاب ولامع",
    type: "night",
  },
];

/** Looks page grid (8 looks). */
export const looksGrid = [
  {
    id: 1,
    title: "ناعم",
    image: softImg,
  },
  {
    id: 6,
    title: "جامعة",
    image: universityImg,
  },
  {
    id: 7,
    title: "عمل",
    image: workImg,
  },
  {
    id: 8,
    title: "يومي",
    image: dailyImg,
  },
  {
    id: 2,
    title: "لامع",
    image: glossyImg,
  },
  {
    id: 3,
    title: "سموكي",
    image: smokyImg,
  },
  {
    id: 5,
    title: "عروس",
    image: bridalImg,
  },
  {
    id: 4,
    title: "سهرة",
    image: eveningImg,
  },
];