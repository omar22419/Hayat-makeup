const API_BASE_URL =
  (import.meta.env && import.meta.env.VITE_API_BASE_URL) || "";

export const isApiConfigured = Boolean(API_BASE_URL);

async function parseResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

/**
 * Thin fetch wrapper used by the domain API modules.
 * When no backend URL is configured (mock mode), these calls are replaced by
 * the mock services in `src/services`.
 */
export async function apiRequest(path, { method = "GET", body, headers = {} } = {}) {
  if (!API_BASE_URL) {
    throw new Error("VITE_API_BASE_URL is not set");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await parseResponse(response);
    throw new Error(
      typeof error === "string" ? error : error.message || `Request failed (${response.status})`
    );
  }

  return parseResponse(response);
}

export default apiRequest;