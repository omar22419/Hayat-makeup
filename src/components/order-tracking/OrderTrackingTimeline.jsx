import { Check, X } from "lucide-react";

/** Timeline step ids in their fixed visual order. */
const STEP_ORDER = [
  "placed",
  "confirmed",
  "preparing",
  "shipped",
  "out_for_delivery",
  "delivered",
];

const STATUS_LABELS = {
  placed: "تم الطلب",
  confirmed: "تم تأكيد الطلب",
  preparing: "جاري تجهيز الطلب",
  shipped: "تم شحن الطلب",
  out_for_delivery: "جاري التوصيل",
  delivered: "تم التوصيل",
  cancelled: "تم إلغاء الطلب",
};

/**
 * Builds a flat list of timeline rows from the returned steps, marking each
 * step completed based on the order status.
 */
function buildTimeline(status) {
  if (status === "cancelled") {
    return STEP_ORDER.map((id) => ({
      id,
      label: STATUS_LABELS[id],
      completed: false,
      current: false,
    }));
  }

  const currentIndex = STEP_ORDER.indexOf(status);
  const resolvedIndex = currentIndex === -1 ? 0 : currentIndex;

  return STEP_ORDER.map((id, index) => ({
    id,
    label: STATUS_LABELS[id],
    completed: index < resolvedIndex,
    current: index === resolvedIndex,
  }));
}

export default function OrderTrackingTimeline({ tracking }) {
  const cancelled = tracking.status === "cancelled";
  const rows = buildTimeline(tracking.status);

  return (
    <section
      dir="rtl"
      className="
        w-full
        rounded-[14px]
        border
        border-[#EEEEEE]
        bg-white
        px-4
        py-4

        sm:rounded-[16px]
        sm:px-6
        sm:py-6

        md:rounded-[18px]
        md:px-8
        md:py-8
      "
    >
      <h3
        className="
          text-[14px]
          font-medium
          text-[#111111]

          sm:text-[19px]

          md:text-[22px]
        "
      >
        حالة التتبع
      </h3>

      {cancelled && (
        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            rounded-[10px]
            bg-[#FDECEC]
            px-3
            py-2.5
            text-[#D4146A]

            sm:mt-4
            sm:gap-3
            sm:rounded-[12px]
            sm:px-4
            sm:py-3
          "
        >
          <X size={16} strokeWidth={1.8} className="shrink-0 sm:size-[20px]" />

          <p
            className="
              text-[11px]
              leading-5

              sm:text-[14px]
            "
          >
            تم إلغاء هذا الطلب.
          </p>
        </div>
      )}

      <ol
        className={`
          mt-4
          flex
          flex-col

          sm:mt-6
        `}
      >
        {rows.map((row, index) => (
          <li key={row.id} className="relative flex gap-3 sm:gap-4">
            {/* Connector */}
            {index < rows.length - 1 && (
              <span
                className={`
                  absolute
                  right-[15px]
                  top-[30px]
                  h-[calc(100%-14px)]
                  w-[2px]

                  sm:right-[19px]
                  sm:top-[38px]

                  md:right-[23px]

                  ${
                    row.completed
                      ? "bg-[#D4146A]"
                      : cancelled
                      ? "bg-[#F3DCE7]"
                      : "bg-[#F3DCE7]"
                  }
                `}
              />
            )}

            {/* Node */}
            <span
              className={`
                z-10
                mt-1
                flex
                h-[30px]
                w-[30px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-2

                sm:mt-1.5
                sm:h-[38px]
                sm:w-[38px]

                md:h-[46px]
                md:w-[46px]

                ${
                  cancelled
                    ? "border-[#F3DCE7] bg-[#FAE6EE] text-[#D4146A]"
                    : row.completed
                    ? "border-[#D4146A] bg-[#D4146A] text-white"
                    : row.current
                    ? "border-[#D4146A] bg-white text-[#D4146A]"
                    : "border-[#F3DCE7] bg-white text-[#E5B6CC]"
                }
              `}
            >
              {row.completed ? (
                <Check
                  size={16}
                  strokeWidth={2}
                  className="
                    sm:size-[20px]

                    md:size-[24px]
                  "
                />
              ) : cancelled ? (
                <X
                  size={14}
                  strokeWidth={2}
                  className="
                    sm:size-[18px]
                  "
                />
              ) : (
                <span
                  className={`
                    h-[8px]
                    w-[8px]
                    rounded-full

                    sm:h-[10px]
                    sm:w-[10px]

                    md:h-[12px]
                    md:w-[12px]

                    ${row.current ? "bg-[#D4146A]" : "bg-[#E5B6CC]"}
                  `}
                />
              )}
            </span>

            {/* Step content */}
            <div
              className={`
                flex
                min-w-0
                flex-1
                flex-col
                justify-center
                pb-4

                sm:pb-5

                md:pb-6

                ${index === rows.length - 1 ? "!pb-0" : ""}
              `}
            >
              <span
                className={`
                  text-[12px]
                  font-medium
                  leading-5
                  text-right

                  sm:text-[16px]

                  md:text-[19px]

                  ${
                    cancelled
                      ? "text-[#999999]"
                      : row.completed || row.current
                      ? "text-[#111111]"
                      : "text-[#AAAAAA]"
                  }
                `}
              >
                {row.label}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}