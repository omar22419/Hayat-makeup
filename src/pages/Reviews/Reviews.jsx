import { useState } from "react";

import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import ReviewsHeader from "../../components/reviews/ReviewsHeader.jsx";
import RatingSummary from "../../components/reviews/RatingSummary.jsx";
import ReviewFilters from "../../components/reviews/ReviewFilters.jsx";
import ReviewCard from "../../components/reviews/ReviewCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getReviews, reviewsMock } from "../../services/engagement.js";

export default function Reviews() {
  const [activeFilter, setActiveFilter] =
    useState("الكل (1,256)");

  const reviews = useAsyncData(getReviews, reviewsMock);

  const filteredReviews = reviews.filter((review) => {
    if (activeFilter.startsWith("مع صور")) {
      return Boolean(review.reviewImage);
    }

    if (activeFilter.startsWith("5 نجوم")) {
      return review.rating >= 5;
    }

    if (activeFilter.startsWith("4 نجوم")) {
      return review.rating >= 4 && review.rating < 5;
    }

    return true;
  });

  return (
    <div
      dir="ltr"
      className="
        min-h-screen
        bg-white
        pb-[78px]

        sm:pb-0
      "
    >
      <Header />

      <main
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-3

          sm:px-5

          md:px-8

          lg:px-10
        "
      >
        <ReviewsHeader />

        <RatingSummary />

        <ReviewFilters
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />

        <section
          className="
            mt-4
            flex
            flex-col
            gap-3
            pb-5

            sm:mt-5
            sm:gap-4

            md:mt-6
            md:gap-5
          "
        >
          {filteredReviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}