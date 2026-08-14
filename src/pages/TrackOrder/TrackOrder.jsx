import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PackageSearch } from "lucide-react";

import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";
import TrackOrderForm from "../../components/order-tracking/TrackOrderForm.jsx";
import OrderTrackingStatus from "../../components/order-tracking/OrderTrackingStatus.jsx";
import OrderTrackingTimeline from "../../components/order-tracking/OrderTrackingTimeline.jsx";
import OrderTrackingSummary from "../../components/order-tracking/OrderTrackingSummary.jsx";

import { getOrderTracking, normalizeOrderNumber } from "../../services/orders.js";

export default function TrackOrder() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlOrder = searchParams.get("order") || "";

  const [inputValue, setInputValue] = useState(urlOrder);
  const [loading, setLoading] = useState(false);
  const [tracking, setTracking] = useState(null);
  const [error, setError] = useState(false);

  const runTracking = useCallback(
    async (rawOrderNumber) => {
      const normalized = normalizeOrderNumber(rawOrderNumber);

      if (!normalized) {
        setTracking(null);
        setError(false);
        return;
      }

      setLoading(true);
      setError(false);

      try {
        const result = await getOrderTracking(normalized);
        setTracking(result);
        setSearchParams({ order: normalized }, { replace: true });
      } catch {
        setTracking(null);
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [setSearchParams]
  );

  // Support the shareable /track-order?order=10245 deep link.
  useEffect(() => {
    if (urlOrder && !tracking && !loading && !error) {
      runTracking(urlOrder);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    runTracking(inputValue);
  };

  const handleRetry = () => {
    setInputValue("");
    setTracking(null);
    setError(false);
  };

  return (
    <div
      dir="rtl"
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
          max-w-[720px]
          px-4
          pt-3

          sm:px-6
          sm:pt-7

          md:px-8
          md:pt-9

          lg:max-w-[820px]
        "
      >
        {/* Page Title */}
        <section className="text-center">
          <h1
            className="
              text-[20px]
              font-semibold
              leading-tight
              text-[#111]

              sm:text-[32px]

              md:text-[40px]
            "
          >
            تتبع الطلب
          </h1>

          <p
            className="
              mt-1.5
              text-[11px]
              leading-5
              text-[#555]

              sm:mt-2
              sm:text-[15px]
              sm:leading-7

              md:text-[18px]
            "
          >
            أدخلي رقم طلبك لمتابعة حالته
          </p>
        </section>

        {/* Search Form */}
        <section
          className="
            mt-4
            w-full

            sm:mt-8

            md:mt-10
          "
        >
          <TrackOrderForm
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </section>

        {/* States */}
        <section
          className="
            mt-4
            w-full

            sm:mt-8

            md:mt-10
          "
        >
          {!tracking && !error && !loading && (
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-[14px]
                border
                border-dashed
                border-[#EEEEEE]
                bg-white
                px-4
                py-10
                text-center

                sm:rounded-[16px]
                sm:py-14

                md:py-16
              "
            >
              <div
                className="
                  flex
                  h-[60px]
                  w-[60px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FBE3EF]
                  text-[#D4146A]

                  sm:h-[76px]
                  sm:w-[76px]
                "
              >
                <PackageSearch
                  size={28}
                  strokeWidth={1.4}
                  className="
                    sm:size-[38px]
                  "
                />
              </div>

              <p
                className="
                  mt-3
                  text-[13px]
                  font-medium
                  text-[#111111]

                  sm:mt-4
                  sm:text-[18px]
                "
              >
                أدخلي رقم طلبك للبدء
              </p>

              <p
                className="
                  mt-1
                  max-w-[280px]
                  text-[10px]
                  leading-5
                  text-[#888888]

                  sm:mt-2
                  sm:max-w-[380px]
                  sm:text-[13px]
                  sm:leading-6
                "
              >
                يمكنك إدخال رقم الطلب كما هو، أو مع علامة # في البداية.
              </p>
            </div>
          )}

          {error && (
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#F3DCE7]
                bg-[#FFF1F6]
                px-4
                py-10
                text-center

                sm:rounded-[16px]
                sm:py-14
              "
            >
              <div
                className="
                  flex
                  h-[60px]
                  w-[60px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FBE3EF]
                  text-[#D4146A]

                  sm:h-[76px]
                  sm:w-[76px]
                "
              >
                <PackageSearch
                  size={28}
                  strokeWidth={1.4}
                  className="
                    sm:size-[38px]
                  "
                />
              </div>

              <h2
                className="
                  mt-3
                  text-[15px]
                  font-semibold
                  text-[#111111]

                  sm:mt-4
                  sm:text-[20px]
                "
              >
                لم يتم العثور على الطلب
              </h2>

              <p
                className="
                  mt-1
                  max-w-[280px]
                  text-[10px]
                  leading-5
                  text-[#888888]

                  sm:mt-2
                  sm:max-w-[380px]
                  sm:text-[13px]
                  sm:leading-6
                "
              >
                تأكدي من رقم الطلب وحاولي مرة أخرى.
              </p>

              <button
                type="button"
                onClick={handleRetry}
                className="
                  mt-4
                  flex
                  h-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4146A]
                  bg-white
                  px-7
                  text-[12px]
                  font-medium
                  leading-none
                  text-[#D4146A]

                  sm:mt-6
                  sm:h-[50px]
                  sm:px-10
                  sm:text-[15px]
                "
              >
                محاولة جديدة
              </button>
            </div>
          )}

          {tracking && (
            <div className="flex w-full flex-col gap-3 sm:gap-5 md:gap-6">
              <OrderTrackingStatus status={tracking.status} />

              <OrderTrackingTimeline tracking={tracking} />

              <OrderTrackingSummary tracking={tracking} />

              <button
                type="button"
                onClick={() => navigate("/")}
                className="
                  mx-auto
                  flex
                  h-[44px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4146A]
                  bg-white
                  px-8
                  text-[13px]
                  font-medium
                  leading-none
                  text-[#D4146A]

                  sm:h-[52px]
                  sm:px-12
                  sm:text-[16px]
                "
              >
                العودة للرئيسية
              </button>
            </div>
          )}
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}