import { useEffect, useState } from "react";

/**
 * Loads data through a service while keeping a synchronous fallback for the
 * first paint (mock data), so switching pages to the service layer does not
 * change anything visually.
 *
 * - receives `fallback` (usually the mock value) rendered immediately
 * - runs `loader` (a service function) once mounted / when `deps` change
 * - swaps in the resolved value; keeps the fallback if the loader fails
 */
export function useAsyncData(loader, fallback, deps = []) {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let active = true;

    loader()
      .then((value) => {
        if (active) setData(value);
      })
      .catch((error) => {
        // Keep the mock fallback so the page stays functional.
        console.warn("Service load failed, keeping fallback:", error?.message || error);
      });

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return data;
}

export default useAsyncData;