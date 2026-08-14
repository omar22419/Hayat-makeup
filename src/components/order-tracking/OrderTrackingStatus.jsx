import { CheckCircle2, PackageCheck, XCircle } from "lucide-react";

const STATUS_LABELS = {
  pending: "قيد المعالجة",
  confirmed: "تم تأكيد الطلب",
  preparing: "جاري تجهيز الطلب",
  shipped: "تم شحن الطلب",
  out_for_delivery: "جاري التوصيل",
  delivered: "تم التوصيل",
  cancelled: "تم إلغاء الطلب",
};

export default function OrderTrackingStatus({ status }) {
  const label = STATUS_LABELS[status] || status;
  const cancelled = status === "cancelled";

  return (
    <div
      dir="rtl"
      className="
        flex
        items-center
        gap-3
        rounded-[14px]
        border
        border-[#EEEEEE]
        bg-white
        px-4
        py-4

        sm:gap-4
        sm:px-5
        sm:py-5

        md:px-6
        md:py-6
      "
    >
      <div
        className={`
          flex
          h-[44px]
          w-[44px]
          shrink-0
          items-center
          justify-center
          rounded-full

          sm:h-[56px]
          sm:w-[56px]

          md:h-[64px]
          md:w-[64px]

          ${
            cancelled
              ? "bg-[#FDECEC] text-[#D4146A]"
              : "bg-[#FBE3EF] text-[#D4146A]"
          }
        `}
      >
        {cancelled ? (
          <XCircle
            size={24}
            strokeWidth={1.5}
            className="
              sm:size-[30px]

              md:size-[34px]
            "
          />
        ) : status === "delivered" ? (
          <CheckCircle2
            size={24}
            strokeWidth={1.5}
            className="
              sm:size-[30px]

              md:size-[34px]
            "
          />
        ) : (
          <PackageCheck
            size={24}
            strokeWidth={1.5}
            className="
              sm:size-[30px]

              md:size-[34px]
            "
          />
        )}
      </div>

      <div className="min-w-0 text-right">
        <p
          className="
            text-[11px]
            text-[#888888]

            sm:text-[14px]

            md:text-[16px]
          "
        >
          حالة الطلب
        </p>

        <h2
          className={`
            text-[15px]
            font-semibold
            leading-tight

            sm:text-[22px]

            md:text-[26px]

            ${cancelled ? "text-[#D4146A]" : "text-[#D4146A]"}
          `}
        >
          {label}
        </h2>

        {cancelled && (
          <p
            className="
              mt-0.5
              text-[10px]
              text-[#888888]

              sm:text-[12px]
            "
          >
            لم يتم شحن هذا الطلب، تواصلي معنا للمزيد من التفاصيل.
          </p>
        )}
      </div>
    </div>
  );
}