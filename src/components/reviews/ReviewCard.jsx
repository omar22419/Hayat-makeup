import { useState } from "react";
import {
  CheckCircle2,
  Droplets,
  MoreHorizontal,
  ThumbsUp,
  Star,
} from "lucide-react";

export default function ReviewCard({ review }) {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [isHelpful, setIsHelpful] = useState(false);

  const toggleHelpful = () => {
    setIsHelpful((prev) => {
      setHelpfulCount((count) => count + (prev ? -1 : 1));
      return !prev;
    });
  };
  return (
    <article
      dir="rtl"
      className="
        rounded-[8px]
        border
        border-[#EEEEEE]
        bg-white
        px-2.5
        py-2
        shadow-[0_2px_10px_rgba(0,0,0,0.03)]

        sm:rounded-[14px]
        sm:px-3
        sm:py-2.5

        md:rounded-[17px]
        md:px-4
        md:py-3
      "
    >
      {/* TOP */}
      <div
        className="
          flex
          items-start
          justify-between
          gap-2
        "
      >
        {/* User */}
        <div
          className="
            flex
            min-w-0
            items-start
            gap-1.5

            sm:gap-2

            md:gap-3
          "
        >
          {/* Avatar */}
          <div
            className="
              h-[34px]
              w-[34px]
              shrink-0
              overflow-hidden
              rounded-full
              bg-[#FFF0F5]

              sm:h-[44px]
              sm:w-[44px]

              md:h-[54px]
              md:w-[54px]
            "
          >
            {review.avatar ? (
              <img
                src={review.avatar}
                alt={review.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[12px] text-[#C91F72]">
                {review.name?.charAt(0)}
              </div>
            )}
          </div>

          <div className="min-w-0 text-right">
            <div className="flex items-center gap-1">
              <h3
                className="
                  truncate
                  text-[10px]
                  font-semibold
                  leading-4
                  text-[#111]

                  sm:text-[13px]

                  md:text-[17px]
                "
              >
                {review.name}
              </h3>

              {review.verified && (
                <CheckCircle2
                  size={13}
                  fill="#C91F72"
                  stroke="white"
                  strokeWidth={1.6}
                  className="
                    shrink-0

                    sm:size-[15px]

                    md:size-[18px]
                  "
                />
              )}
            </div>

            <div
              className="
                mt-0
                flex
                items-center
                gap-1
                text-[#777]
              "
            >
              <Droplets
                size={11}
                strokeWidth={1.5}
                className="
                  shrink-0
                  sm:size-[13px]
                  md:size-[16px]
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[7px]

                  sm:text-[10px]

                  md:text-[13px]
                "
              >
                نوع البشرة: {review.skinType}
              </span>
            </div>
          </div>
        </div>

        {/* More + Date */}
        <div
          className="
            flex
            shrink-0
            flex-col
            items-start
          "
        >
          <button
            type="button"
            aria-label="المزيد"
            className="
              text-[#999]
            "
          >
            <MoreHorizontal
              size={15}
              strokeWidth={1.5}
              className="
                sm:size-[18px]
                md:size-[21px]
              "
            />
          </button>

          <time
            className="
              mt-1
              whitespace-nowrap
              text-[7px]
              text-[#999]

              sm:mt-2
              sm:text-[10px]

              md:text-[13px]
            "
          >
            {review.date}
          </time>
        </div>
      </div>

      {/* BODY */}
      <div
        className="
          grid
          grid-cols-[55px_1fr_42px]
          items-end
          gap-1.5

          sm:mt-2.5
          sm:grid-cols-[72px_1fr_60px]
          sm:gap-2

          md:mt-3
          md:grid-cols-[90px_1fr_76px]
          md:gap-3
        "
      >
        {/* Review Image - Right */}
        <div
          className="
            order-1
            h-[42px]
            w-[42px]
            overflow-hidden
            rounded-[7px]

            sm:h-[60px]
            sm:w-[60px]
            sm:rounded-[9px]

            md:h-[78px]
            md:w-[78px]
            md:rounded-[11px]
          "
        >
          {review.reviewImage && (
            <img
              src={review.reviewImage}
              alt=""
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* Review Content */}
        <div
          className="
            order-2
            min-w-0
            self-end
            text-right
          "
        >
          {/* Product Name + Stars */}
          <div
            className="
              flex
              items-center
              gap-1.5
              whitespace-nowrap

              sm:gap-2

              md:gap-2.5
            "
          >
            <h4
              className="
                min-w-0
                truncate
                text-[9px]
                font-semibold
                leading-4
                text-[#111]

                sm:text-[12px]

                md:text-[16px]
              "
            >
              {review.productName}
            </h4>

            <div
              dir="ltr"
              className="
                flex
                shrink-0
                items-center
                gap-0

                sm:gap-0.5

                md:gap-1
              "
            >
              {[0, 1, 2, 3, 4].map((item) => (
                <Star
                  key={item}
                  size={12}
                  fill="#C91F72"
                  strokeWidth={0}
                  className="
                    sm:size-[15px]
                    md:size-[19px]
                  "
                />
              ))}
            </div>
          </div>

          {/* Variant */}
          {review.variant && (
            <p
              className="
                mt-0
                text-[8px]
                font-medium
                leading-4
                text-[#222]

                sm:text-[10px]

                md:text-[14px]
              "
            >
              {review.variant}
            </p>
          )}

          {/* Review Text */}
          <p
            className="
              mt-0.5
              line-clamp-3
              text-[7px]
              leading-4
              text-[#444]

              sm:mt-1
              sm:text-[10px]
              sm:leading-5

              md:text-[13px]
              md:leading-6
            "
          >
            {review.text}
          </p>
        </div>

        {/* Product Image - Bottom Left */}
        <div
          className="
            order-3
            flex
            h-[70px]
            w-[42px]
            items-end
            justify-center

            sm:h-[88px]
            sm:w-[60px]

            md:h-[110px]
            md:w-[76px]
          "
        >
          <img
            src={review.productImage}
            alt={review.productName}
            className="
              max-h-full
              max-w-full
              object-contain
            "
          />
        </div>
      </div>

      {/* Footer */}
      <div
      
        className="
          mt-1
          flex
          items-center
          justify-end

          sm:mt-2
        "
      >
        <button
            dir="ltr"
          type="button"
          onClick={toggleHelpful}
          className="
            flex
            items-center
            gap-1
            text-[#999]

            sm:gap-1
          "
        >
          <span
            className="
              text-[7px]

              sm:text-[10px]

              md:text-[13px]
            "
          >
            {isHelpful ? "شكراً على تقييمك" : "مفيد"} <span className="text-[#C91F72]">({helpfulCount})</span> 
          </span>

          <ThumbsUp
            size={12}
            strokeWidth={1.5}
            className="
              sm:size-[15px]
              md:size-[18px]
            "
          />
        </button>
      </div>
    </article>
  );
}