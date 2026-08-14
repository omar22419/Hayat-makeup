import { Check } from "lucide-react";

export default function OrderSuccessHeader() {
  return (
    <section
      className="
        flex
        flex-col
        items-center
        text-center
        pt-[15px]

        sm:pt-[30px]

        md:pt-[40px]
      "
    >
      {/* Check Circle */}
      <div
        className="
          flex
          h-[120px]
          w-[120px]
          items-center
          justify-center
          rounded-full
          border-[2px]
          border-[#D4146A]

          sm:h-[145px]
          sm:w-[145px]

          md:h-[165px]
          md:w-[165px]
        "
      >
        <div
          className="
            flex
            h-[104px]
            w-[104px]
            items-center
            justify-center
            rounded-full
            bg-[#D4146A]

            sm:h-[127px]
            sm:w-[127px]

            md:h-[145px]
            md:w-[145px]
          "
        >
          <Check
            className="
              h-[70px]
              w-[70px]
              text-white

              sm:h-[70px]
              sm:w-[70px]

              md:h-[82px]
              md:w-[82px]
            "
            strokeWidth={3}
          />
        </div>
      </div>

      <h1
        className="
          mt-[5px]
          text-[23px]
          font-medium
          text-[#111111]

          sm:mt-[20px]
          sm:text-[32px]

          md:mt-[24px]
          md:text-[38px]
        "
      >
        تم تأكيد طلبك بنجاح!
      </h1>

      <p
        className="
          mt-[2px]
          text-[15px]
          text-[#333333]

          sm:text-[16px]

          md:text-[18px]
        "
      >
        شكرًا لك على ثقتك في{" "}
        <span className="text-[#D4146A]">
          HAYAT Makeup
        </span>
      </p>
    </section>
  );
}