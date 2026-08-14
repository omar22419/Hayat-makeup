import { Clock3 } from "lucide-react";
import calendarImage from "../../assets/calendarImage.png";

export default function ExpectedDelivery() {
  return (
    <section
      className="
        relative
        mt-[9px]
        min-h-[100px]
        w-full
        overflow-hidden
        rounded-[14px]
        border
        border-[#F0D9E3]
        bg-[#FFF8FB]
        px-[14px]
        py-[12px]

        sm:mt-[18px]
        sm:min-h-[135px]
        sm:rounded-[16px]
        sm:px-[22px]
        sm:py-[16px]

        md:mt-[22px]
        md:min-h-[155px]
        md:rounded-[18px]
        md:px-[30px]
        md:py-[20px]
      "
    >
      {/* Header - Top Right */}
      <div
        className="
          flex
          items-center
          justify-start
          gap-[6px]

          sm:gap-[8px]

          md:gap-[10px]
        "
      >
        <Clock3
          className="
                h-[19px]
                w-[19px]
                shrink-0
                text-[#D4146A]
    
                sm:h-[25px]
                sm:w-[25px]
    
                md:h-[29px]
                md:w-[29px]
              "
          strokeWidth={1.8}
        />
        <h2
          className="
            text-[16px]
            font-medium
            leading-none
            text-[#222222]

            sm:text-[20px]
            
            md:text-[24px]
            "
        >
          وقت الوصول المتوقع
        </h2>
      </div>

      {/* Center Content */}
      <div
        className="
          mt-[12px]
          flex
          flex-col
          items-center
          text-center

          sm:mt-[14px]

          md:mt-[17px]
        "
      >
        {/* Date */}
        <p
          className="
            text-[15px]
            font-normal
            leading-none
            text-[#D4146A]

            sm:text-[19px]

            md:text-[22px]
          "
        >
          الخميس، 29 مايو 2025
        </p>

        {/* Time */}
        <p
          className="
            mt-[8px]
            text-[13px]
            font-normal
            leading-none
            text-[#222222]

            sm:mt-[10px]
            sm:text-[16px]

            md:mt-[12px]
            md:text-[19px]
          "
        >
          بين 4:00 م - 8:00 م
        </p>
      </div>

      {/* Calendar Image - Left */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[8px]
          left-[18px]
          flex
          items-center
          justify-center

          sm:bottom-[10px]
          sm:left-[28px]

          md:bottom-[12px]
          md:left-[35px]
        "
      >
        <img
          src={calendarImage}
          alt=""
          className="
    h-[90px]
    w-[90px]
    object-contain
    scale-125
    sm:h-[82px]
    sm:w-[82px]

    md:h-[95px]
    md:w-[95px]
  "
        />
      </div>
    </section>
  );
}
