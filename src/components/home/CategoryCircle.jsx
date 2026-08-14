export default function CategoryCircle({ image, name, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-w-0 flex-1 cursor-pointer flex-col items-center bg-transparent"
    >
      <div
        className="
          aspect-square
          w-full
          max-w-[55px]
          rounded-full
          border
          border-[#E5E5E5]
          p-[3px]

          sm:max-w-[68px]
          sm:p-[4px]

          md:max-w-[88px]
          md:p-[5px]

          lg:max-w-[112px]
          lg:p-[6px]

          xl:max-w-[125px]
        "
      >
        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            rounded-full
            object-cover
          "
        />
      </div>

      <span
        className="
          mt-[2px]
          whitespace-nowrap
          text-[9px]
          font-semibold
          text-[#222222]

          sm:mt-[7px]
          sm:text-[11px]

          md:mt-[9px]
          md:text-[14px]

          lg:mt-[11px]
          lg:text-[16px]
        "
      >
        {name}
      </span>
    </button>
  );
}