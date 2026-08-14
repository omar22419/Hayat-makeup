import { useState } from "react";
import {
  ChevronDown,
  Clock3,
  FileText,
  Leaf,
  Sparkles,
} from "lucide-react";

import { productAccordionContent } from "../../data/productDetails.js";

const items = [
  {
    title: "الوصف",
    icon: FileText,
  },
  {
    title: "اللمسة النهائية",
    icon: Sparkles,
  },
  {
    title: "الثبات",
    icon: Clock3,
  },
  {
    title: "المكونات",
    icon: Leaf,
  },
  {
    title: "طريقة الاستخدام",
    icon: Sparkles,
  },
];

export default function ProductAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section dir="rtl" className="mt-3">
      <div className="overflow-hidden rounded-[9px] border border-[#EAEAEA]">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isOpen = openIndex === index;

          const content =
            item.title === "الوصف" && product?.description
              ? `${product.name} - ${product.description}.`
              : productAccordionContent[item.title];

          return (
            <div key={item.title}>
              <button
                type="button"
                onClick={() =>
                  setOpenIndex((value) => (value === index ? -1 : index))
                }
                aria-expanded={isOpen}
                className="
                  flex
                  h-[30px]
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-[#EEEEEE]
                  px-2.5
                  text-right
                  last:border-b-0

                  sm:h-[47px]
                  sm:px-3

                  md:h-[57px]
                  md:px-4
                "
              >
                <div className="flex items-center gap-1.5">
                  <Icon
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#111] sm:size-[18px] md:size-[21px]"
                  />

                  <span
                    className="
                      text-[9px]
                      text-[#333]

                      sm:text-[12px]

                      md:text-[15px]
                    "
                  >
                    {item.title}
                  </span>
                </div>

                <ChevronDown
                  size={14}
                  strokeWidth={1.5}
                  className={`
                    transition-transform
                    sm:size-[17px]
                    md:size-[20px]
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {isOpen && (
                <div
                  className="
                    border-b
                    border-[#EEEEEE]
                    px-2.5
                    pb-3
                    pt-1

                    sm:px-3

                    md:px-4
                  "
                >
                  <p
                    className="
                      text-[9px]
                      leading-4
                      text-[#555]

                      sm:text-[12px]
                      sm:leading-5

                      md:text-[14px]
                    "
                  >
                    {content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}