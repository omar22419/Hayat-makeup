export default function AboutValueCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <article
      className="
        flex
        min-w-0
        flex-col
        items-center
        rounded-[10px]
        border
        border-[#E8E8E8]
        bg-white
        px-2
        py-2
        text-center

        sm:rounded-[14px]
        sm:px-3
        sm:py-5

        md:rounded-[18px]
        md:px-5
        md:py-7
      "
    >
      <div
        className="
          flex
          h-[40px]
          w-[40px]
          items-center
          justify-center
          rounded-full
          bg-[#FFF0F5]
          text-[#C91F72]

          sm:h-[62px]
          sm:w-[62px]

          md:h-[78px]
          md:w-[78px]
        "
      >
        <Icon
          size={22}
          strokeWidth={1.4}
          className="
            sm:size-[31px]
            md:size-[39px]
          "
        />
      </div>

      <h3
        className="
          mt-1
          text-[12px]
          font-semibold
          text-[#111]

          sm:mt-4
          sm:text-[16px]

          md:text-[20px]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-1
          line-clamp-4
          text-[9px]
          leading-5
          text-[#666]

          sm:text-[11px]
          sm:leading-6

          md:text-[15px]
          md:leading-7
        "
      >
        {description}
      </p>

      <span
        className="
          mt-3
          h-[2px]
          w-[38px]
          rounded-full
          bg-[#C91F72]

          sm:mt-4
          sm:w-[50px]

          md:w-[64px]
        "
      />
    </article>
  );
}