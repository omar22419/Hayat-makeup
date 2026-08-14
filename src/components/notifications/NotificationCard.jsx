import {
  Bell,
  ShoppingBag,
  Truck,
  Heart,
  Tag,
  Sparkles,
  Ticket,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap = {
  orderConfirmed: ShoppingBag,
  orderShipped: Truck,
  product: Heart,
  offer: Tag,
  collection: Sparkles,
  coupon: Ticket,
};

export default function NotificationCard({ notification }) {
  const navigate = useNavigate();
  const Icon = iconMap[notification.icon] || Bell;

  return (
    <article
      onClick={() =>
        notification.target ? navigate(notification.target) : undefined
      }
      className="
        relative
        flex
        min-h-[70px]
        w-full
        items-center
        gap-3
        rounded-[16px]
        border
        border-[#EAEAEA]
        bg-white
        px-3
        py-3
        shadow-[0_1px_4px_rgba(0,0,0,0.02)]

        sm:min-h-[132px]
        sm:gap-4
        sm:rounded-[18px]
        sm:px-4
        sm:py-4

        md:min-h-[150px]
        md:gap-5
        md:px-5
        md:py-5
      "
    >
      {/* Unread Dot */}
      {!notification.read && (
        <span
          className="
            absolute
            left-4
            top-3
            h-[6px]
            w-[6px]
            rounded-full
            bg-[#C91F72]

            sm:left-5
            sm:top-9
            sm:h-[9px]
            sm:w-[9px]

            md:left-6
            md:top-10
          "
        />
      )}

      {/* Icon */}
      <div
        className="
          flex
          h-[50px]
          w-[50px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#FFF1F6]
          text-[#C91F72]

          sm:h-[64px]
          sm:w-[64px]

          md:h-[74px]
          md:w-[74px]
        "
      >
        <Icon
          size={22}
          strokeWidth={1.5}
          className="
            sm:size-[29px]
            md:size-[34px]
          "
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 text-right">
        <h2
          className="
            text-[12px]
            font-semibold
            leading-5
            text-[#111]

            sm:text-[17px]
            sm:leading-7

            md:text-[21px]
          "
        >
          {notification.title}
        </h2>

        <p
          className="
            line-clamp-2
            text-[9px]
            leading-5
            text-[#666]

            sm:text-[13px]
            sm:leading-6

            md:text-[16px]
          "
        >
          {notification.description}
        </p>

        <p
          className="
            mt-1
            text-[9px]
            text-[#666]

            sm:text-[11px]

            md:text-[14px]
          "
        >
          {notification.time}
        </p>
      </div>
    </article>
  );
}
