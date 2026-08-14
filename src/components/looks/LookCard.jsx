import { ArrowLeft } from "lucide-react";

export default function LookCard({ look }) {
  return (
    <article
      className="
        min-w-0
        overflow-hidden
        rounded-[7px]
        border
        border-[#E8E8E8]
        bg-white

        sm:rounded-[13px]

        md:rounded-[16px]
      "
    >
      {/* Image */}
      <div
        className="
          h-[120px]
          w-full
          overflow-hidden

          sm:h-[170px]

          md:h-[230px]

          lg:h-[270px]
        "
      >
        <img
          src={look.image}
          alt={look.title}
          className="
            h-full
            w-full
            object-cover
          "
        />
      </div>

      {/* Bottom */}
      <div
        className="
          flex
          h-[34px]
          items-center
          justify-between
          px-2

          sm:h-[45px]
          sm:px-3

          md:h-[54px]
          md:px-4
        "
      >
        <span
          className="
            min-w-0
            truncate
            text-[11px]
            font-medium
            text-[#111]
            sm:text-[14px]

            md:text-[18px]

            lg:text-[21px]
          "
        >
          {look.title}
        </span>

        <span
          className="
            flex
            shrink-0
            items-center
            justify-center
            text-[#C91F72]
          "
        >
          <ArrowLeft
            size={13}
            strokeWidth={1.7}
            className="sm:size-[20px] md:size-[24px]"
          />
        </span>
      </div>
    </article>
  );
}