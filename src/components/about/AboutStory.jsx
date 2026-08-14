import { UsersRound } from "lucide-react";

export default function AboutStory() {
  return (
    <section
      className="
        mx-auto
        mt-6
        w-full
        max-w-[1000px]
        pb-5

        sm:mt-9

        md:mt-12
      "
    >
      {/* Title */}
      <h2
        className="
          text-center
          text-[17px]
          font-semibold
          leading-tight
          text-[#111]

          sm:text-[28px]

          md:text-[38px]

          lg:text-[44px]
        "
      >
        من وراء هيات ميكاب
      </h2>

      {/* Content */}
      <div
        className="
    mx-auto
    mt-3
    flex
    w-full
    max-w-[850px]
    items-center
    gap-5
    px-13

    sm:mt-5
    sm:gap-7
    sm:px-8

    md:mt-6
    md:gap-9
    md:px-10
  "
      >
        {/* Icon */}
        <div
          className="
      flex
      h-[40px]
      w-[40px]
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-[#FFF0F5]
      text-[#C91F72]

      sm:h-[70px]
      sm:w-[70px]

      md:h-[86px]
      md:w-[86px]
    "
        >
          <UsersRound
            size={20}
            strokeWidth={1.4}
            className="
        sm:size-[38px]
        md:size-[48px]
      "
          />
        </div>

        {/* Text */}
        <p
          className="
      min-w-0
      flex-1
      text-right
      text-[9px]
      leading-5
      text-[#555]

      sm:text-[13px]
      sm:leading-7

      md:text-[17px]
      md:leading-8

      lg:text-[20px]
    "
        >
          هيات ميكاب هو شغف يتحول إلى تجربة جمال متكاملة. نؤمن أن الجمال يبدأ من
          الثقة، ونسعى لنكون جزءًا من رحلتك اليومية نحو التألق.
        </p>
      </div>
    </section>
  );
}
