export default function ContactMethodCard({
  icon: Icon,
  title,
  value,
  href,
}) {
  const content = (
    <>
      <Icon
        size={23}
        strokeWidth={1}
        className="
          text-[#C91F72]

          sm:size-[37px]

          md:size-[45px]
        "
      />

      <h3
        className="
          mt-1
          text-[11px]
          font-medium
          text-[#111]

          sm:mt-3
          sm:text-[16px]

          md:mt-4
          md:text-[20px]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-1
          break-words
          text-[8px]
          leading-4
          text-[#C91F72]

          sm:text-[11px]
          sm:leading-5

          md:text-[14px]
        "
      >
        {value}
      </p>
    </>
  );

  const className = `
    flex
    min-h-[95px]
    w-full
    flex-col
    items-center
    justify-center
    rounded-[9px]
    border
    border-[#EAEAEA]
    bg-white
    px-2
    py-1
    text-center

    sm:min-h-[138px]
    sm:rounded-[16px]
    sm:px-3
    sm:py-4

    md:min-h-[165px]
    md:rounded-[20px]
    md:px-5
    md:py-5
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}