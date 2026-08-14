import { Copy } from "lucide-react";

export default function OrderNumber({ orderNumber }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(orderNumber);
    } catch {
      console.log(orderNumber);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="
        mx-auto
        mt-[10px]
        flex
        h-[40px]
        w-full
        max-w-[300px]
        items-center
        justify-center
        gap-[20px]
        rounded-[10px]
        border
        border-[#F1C3D8]
        text-[#D4146A]

        sm:mt-[22px]
        sm:h-[56px]

        md:mt-[26px]
        md:h-[62px]
      "
    >
      <span
        dir="ltr"
        className="
          text-[17px]
          font-medium

          sm:text-[20px]

          md:text-[23px]
        "
      >
        {orderNumber}
      </span>

      <span className="h-[28px] w-px bg-[#F1C3D8] " />

      <Copy
        className="
          h-[19px]
          w-[19px]
          
          sm:h-[22px]
          sm:w-[22px]

          md:h-[25px]
          md:w-[25px]
        "
        strokeWidth={1.6}
      />
    </button>
  );
}