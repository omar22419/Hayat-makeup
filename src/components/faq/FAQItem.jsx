import { ChevronDown } from "lucide-react";

export default function FAQItem({ faq, open, onToggle }) {
  return (
    <article
      className="
        overflow-hidden
        rounded-[14px]
        border
        border-[#EEEEEE]
        bg-white
        transition-colors

        sm:rounded-[16px]

        md:rounded-[18px]
      "
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => onToggle(faq.id)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-3
          px-4
          py-3
          text-right

          sm:gap-4
          sm:px-5
          sm:py-4

          md:px-6
          md:py-5
        "
      >
        <h3
          className="
            text-[13px]
            font-medium
            leading-5
            text-[#111111]

            sm:text-[17px]
            sm:leading-7

            md:text-[20px]
          "
        >
          {faq.question}
        </h3>

        <ChevronDown
          size={18}
          strokeWidth={1.6}
          className={`
            h-[18px]
            w-[18px]
            shrink-0
            transition-transform
            duration-200
            text-[#D4146A]

            sm:h-[22px]
            sm:w-[22px]

            md:h-[26px]
            md:w-[26px]

            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <div
          className="
            border-t
            border-[#F3DCE7]
            px-4
            py-3

            sm:px-5
            sm:py-4

            md:px-6
            md:py-5
          "
        >
          <p
            className="
              text-[11px]
              leading-6
              text-[#666666]

              sm:text-[15px]
              sm:leading-8

              md:text-[17px]
              md:leading-9
            "
          >
            {faq.answer}
          </p>
        </div>
      )}
    </article>
  );
}