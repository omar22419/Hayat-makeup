import { isApiConfigured } from "../api/client.js";

/** Simulates a short network latency for mock service responses. */
export const delay = (ms = 1) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Resolves a mock payload (used by services for the local-data path).
 */
export async function resolveMock(payload, { latency = 1 } = {}) {
  await delay(latency);
  return payload;
}

/**
 * API / mock selector.
 *
 * - No backend configured: always returns mock data (fast, same reference).
 * - Backend configured: calls the API, and on failure falls back to mock so
 *   the UI keeps working during development.
 */
export async function withFallback(apiCall, mockValue, { latency = 1 } = {}) {
  if (!isApiConfigured) {
    await delay(latency);
    return mockValue;
  }

  try {
    return await apiCall();
  } catch (error) {
    console.warn("API call failed, using mock fallback:", error?.message || error);
    await delay(latency);
    return mockValue;
  }
}