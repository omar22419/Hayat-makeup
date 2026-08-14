import { orderApi } from "../api/orders.js";
import { isApiConfigured } from "../api/client.js";

import { orderProducts, successOrderNumber } from "../data/order.js";
import { trackingRecords, trackedSteps } from "../data/orderTracking.js";

import { withFallback, delay } from "./mock.js";

/** Order statuses that map to a terminal timeline position. */
export const TRACKING_STATUS_ORDER = [
  "pending",
  "confirmed",
  "preparing",
  "shipped",
  "out_for_delivery",
  "delivered",
];

export const orderMock = {
  number: successOrderNumber,
  products: orderProducts,
};

/**
 * Normalizes a user-entered order number: strips a leading "#" and any
 * surrounding whitespace. Both "10245" and "#10245" resolve the same way.
 */
export function normalizeOrderNumber(orderNumber = "") {
  return String(orderNumber).trim().replace(/^#/, "");
}

/** Builds the timeline steps for a given order status. */
export function buildTrackingSteps(status) {
  const achievedIndex =
    status === "cancelled"
      ? "cancelled"
      : TRACKING_STATUS_ORDER.indexOf(status);

  return trackedSteps.map((step, index) => {
    if (achievedIndex === "cancelled") {
      return { ...step, completed: false };
    }

    return { ...step, completed: index <= achievedIndex };
  });
}

/**
 * Resolves tracking info for an order number.
 *
 * - Mock mode: matches against the local tracking records; rejects (via the
 *   thrown error) when the order does not exist so the UI can show the
 *   "not found" state.
 * - API mode: calls orderApi.getTracking, falling back to the mock lookup.
 */
export const getOrderTracking = async (orderNumber) => {
  const normalized = normalizeOrderNumber(orderNumber);

  const lookupMock = () => {
    const record = trackingRecords.find(
      (item) => normalizeOrderNumber(item.orderNumber) === normalized
    );

    if (!record) {
      throw new Error("ORDER_NOT_FOUND");
    }

    return { ...record, steps: buildTrackingSteps(record.status) };
  };

  if (!isApiConfigured) {
    await delay(250);
    return lookupMock();
  }

  try {
    return await orderApi.getTracking(orderNumber);
  } catch (error) {
    return lookupMock();
  }
};

export const createOrder = (payload) =>
  withFallback(() => orderApi.createOrder(payload), {
    id: "HM-2025-05873",
    number: successOrderNumber,
    status: "confirmed",
    createdAt: new Date().toISOString(),
    ...payload,
  });

export const getOrders = () =>
  withFallback(
    () => orderApi.getOrders(),
    [{ id: "HM-2025-05873", status: "confirmed", products: orderProducts }]
  );

export const getOrderById = (id) =>
  withFallback(
    () => orderApi.getOrderById(id),
    { id, status: "confirmed", products: orderProducts }
  );

export const getSuccessOrder = () => withFallback(() => orderApi.getOrders(), orderMock);

export const orderService = {
  createOrder,
  getOrders,
  getOrderById,
  getSuccessOrder,
  getOrderTracking,
};

export default orderService;