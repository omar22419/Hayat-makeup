import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SkinTypeCTA() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/skin-quiz")}
      className="
        relative
        mt-2
        flex
        h-[30px]
        w-full
        items-center
        justify-center
        rounded-[6px]
        bg-[#D20A71]
        !text-[12px]
        font-medium
        text-white

        sm:mt-3
        sm:h-[50px]
        sm:rounded-[12px]
        sm:text-[15px]

        md:mt-4
        md:h-[62px]
        md:rounded-[15px]
        md:text-[19px]
      "
    >
      <ChevronLeft
        size={16}
        strokeWidth={1.8}
        className="
          
          sm:left-6
          sm:size-[22px]

          md:left-8
          md:size-[27px]
        "
      />
      <span>اعرفي نوع بشرتك الآن</span>
    </button>
  );
}
