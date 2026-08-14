import { reviewApi } from "../api/reviews.js";
import { notificationApi } from "../api/notifications.js";

import {
  reviews,
  ratingDistribution,
  OVERALL_RATING,
  TOTAL_REVIEWS,
  reviewFilters,
} from "../data/reviews.js";
import { notifications } from "../data/notifications.js";

import { withFallback } from "./mock.js";

export const reviewsMock = reviews;
export const reviewFiltersMock = reviewFilters;
export const ratingSummaryMock = {
  overall: OVERALL_RATING,
  total: TOTAL_REVIEWS,
  distribution: ratingDistribution,
};
export const notificationsMock = notifications;

export const getReviews = (params = {}) =>
  withFallback(() => reviewApi.getReviews(params), reviews);

export const getReviewFilters = () =>
  withFallback(() => reviewApi.getReviews({ filters: true }), reviewFilters);

export const getRatingSummary = () =>
  withFallback(
    () => reviewApi.getReviews({ summary: true }),
    {
      overall: OVERALL_RATING,
      total: TOTAL_REVIEWS,
      distribution: ratingDistribution,
    }
  );

export const getNotifications = () =>
  withFallback(() => notificationApi.getNotifications(), notifications);

export const engagementService = {
  getReviews,
  getReviewFilters,
  getRatingSummary,
  getNotifications,
};

export default engagementService;