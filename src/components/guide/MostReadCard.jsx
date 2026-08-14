
export default function MostReadCard({ article }) {
  const Icon = article.icon;

  return (
    <article
      className="
        flex
        min-w-0
        items-center
        gap-3
        rounded-[6px]
        border
        border-[#eeeeee]
        bg-white
        px-2
        py-1

        sm:gap-3
        sm:rounded-[14px]
        sm:p-3

        md:gap-4
        md:p-4
      "
    >
      <div className="min-w-0 flex-1 text-right">
        <h3
          className="
            line-clamp-2
            text-[9px]
            font-semibold
            leading-3

            sm:text-[13px]
            sm:leading-5

            md:text-[17px]
            md:leading-6
          "
        >
          {article.title}
        </h3>

        <p
          className="
            line-clamp-2
            text-[7px]
            text-[#777]
            font-semibold
            leading-4

            sm:text-[13px]
            sm:leading-5

            md:text-[17px]
            md:leading-6
          "
        >
          {article.description}
        </p>

        <div className="mt-1 flex justify-end">
          <span
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#fff1f5]
              text-[#C91F72]

              sm:h-8
              sm:w-8

              md:h-10
              md:w-10
            "
          >
            <Icon
              size={12}
              strokeWidth={1.8}
              className="sm:size-[17px] md:size-[21px]"
            />
          </span>
        </div>
      </div>

      <img
        src={article.image}
        alt={article.title}
        className="
          h-[45px]
          w-[60px]
          shrink-0
          rounded-[7px]
          object-cover

          sm:h-[75px]
          sm:w-[105px]

          md:h-[95px]
          md:w-[135px]
        "
      />
    </article>
  );
}