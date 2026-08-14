import { MapPin, Phone, Truck } from "lucide-react";

export default function DeliveryDetails({ customer }) {
  const name = customer?.name || "أسماء محمد";

  const address = customer
    ? [
        customer.address,
        customer.area,
        customer.city,
      ]
        .filter(Boolean)
        .join("، ")
    : "الرياض، حي النخيل، شارع الأمير تركي بن عبدالعزيز";

  const phone = customer?.phone || "05XXXXXXXX";

  return (
    <section
      dir="rtl"
      className="
        mt-[10px]
        overflow-hidden
        rounded-[10px]
        border
        border-[#EEEEEE]
        bg-white

        sm:mt-[18px]
        sm:rounded-[13px]

        md:mt-[22px]
        md:rounded-[16px]

        lg:rounded-[18px]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          gap-[6px]
          border-b
          border-[#EEEEEE]
          px-[12px]
          py-[9px]

          sm:gap-[8px]
          sm:px-[18px]
          sm:py-[13px]

          md:px-[24px]
          md:py-[16px]

          lg:px-[28px]
          lg:py-[18px]
        "
      >
        <Truck
          className="
            h-[18px]
            w-[18px]
            shrink-0
            text-[#D4146A]

            sm:h-[23px]
            sm:w-[23px]

            md:h-[27px]
            md:w-[27px]

            lg:h-[30px]
            lg:w-[30px]
          "
          strokeWidth={1.7}
        />

        <h2
          className="
            text-[13px]
            font-medium
            text-[#222222]

            sm:text-[17px]

            md:text-[21px]

            lg:text-[25px]
          "
        >
          تفاصيل التوصيل
        </h2>
      </div>

      {/* Name */}
      <div
        className="
          flex
          border-b
          border-[#EEEEEE]
        "
      >
        <span
          className="
            w-[25%]
            shrink-0
            px-[12px]
            py-[10px]
            text-[11px]
            text-[#777777]

            sm:w-[20%]
            sm:px-[18px]
            sm:py-[13px]
            sm:text-[13px]

            md:px-[24px]
            md:py-[15px]
            md:text-[15px]
          "
        >
          الاسم
        </span>

        <span
          className="
            flex-1
            px-[12px]
            py-[10px]
            text-[11px]
            text-[#222222]

            sm:px-[18px]
            sm:py-[13px]
            sm:text-[13px]

            md:px-[24px]
            md:py-[15px]
            md:text-[15px]
          "
        >
          {name}
        </span>
      </div>

      {/* Address */}
      <div
        className="
          flex
          border-b
          border-[#EEEEEE]
        "
      >
        <span
          className="
            w-[25%]
            shrink-0
            px-[12px]
            py-[10px]
            text-[11px]
            text-[#777777]

            sm:w-[20%]
            sm:px-[18px]
            sm:py-[13px]
            sm:text-[13px]

            md:px-[24px]
            md:py-[15px]
            md:text-[15px]
          "
        >
          العنوان
        </span>

        <span
          className="
            flex
            flex-1
            items-start
            gap-[5px]
            px-[12px]
            py-[10px]
            text-[11px]
            leading-[1.7]
            text-[#222222]

            sm:gap-[7px]
            sm:px-[18px]
            sm:py-[13px]
            sm:text-[13px]

            md:px-[24px]
            md:py-[15px]
            md:text-[15px]
          "
        >
          <MapPin
            className="
              mt-[2px]
              h-[15px]
              w-[15px]
              shrink-0
              text-[#D4146A]

              sm:h-[18px]
              sm:w-[18px]

              md:h-[20px]
              md:w-[20px]
            "
            strokeWidth={1.7}
            
          />

          <span>
            {address}
          </span>
        </span>
      </div>

      {/* Phone */}
      <div className="flex">
        <span
          className="
            w-[25%]
            shrink-0
            px-[12px]
            py-[10px]
            text-[11px]
            text-[#777777]

            sm:w-[20%]
            sm:px-[18px]
            sm:py-[13px]
            sm:text-[13px]

            md:px-[24px]
            md:py-[15px]
            md:text-[15px]
          "
        >
          رقم الجوال
        </span>

        <span
          className="
            flex
            flex-1
            items-center
            gap-[5px]
            px-[12px]
            py-[10px]
            text-[11px]
            text-[#222222]

            sm:gap-[7px]
            sm:px-[18px]
            sm:py-[13px]
            sm:text-[13px]

            md:px-[24px]
            md:py-[15px]
            md:text-[15px]
          "
        >
          <Phone
            className="
              h-[15px]
              w-[15px]
              shrink-0
              text-[#D4146A]
              
              sm:h-[18px]
              sm:w-[18px]

              md:h-[20px]
              md:w-[20px]
            "
            strokeWidth={1.7}
            fill="#D4146A"
          />
          <span>{phone}</span>

        </span>
      </div>
    </section>
  );
}