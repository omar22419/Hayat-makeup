import maskaraImage from "../assets/products/maskara.png";
import lipstick from "../assets/products/lipstick.png";

/**
 * Order tracking mock data. Real API can replace this via orderApi without
 * changing the UI (orderApi.getTracking).
 */

/** Base products shown on a tracked order. */
export const trackingOrderProducts = [
  {
    id: 1,
    name: "ماسكارا حجم وطول",
    variant: "أسود",
    price: "95.00",
    image: maskaraImage,
  },
  {
    id: 2,
    name: "أحمر شفاه مطفي",
    variant: "وردي ناعم",
    price: "85.00",
    image: lipstick,
  },
];

/** Known mock tracking records (mock backend). */
export const trackingRecords = [
  {
    orderNumber: "10245",
    status: "shipped",
    customerName: "سارة العتيبي",
    createdAt: "2026-01-05",
    estimatedDelivery: "2026-01-10",
    items: trackingOrderProducts,
  },
  {
    orderNumber: "HM-2025-05873",
    status: "out_for_delivery",
    customerName: "نورة العتيبي",
    createdAt: "2026-01-02",
    estimatedDelivery: "2026-01-06",
    items: trackingOrderProducts,
  },
  {
    orderNumber: "20451",
    status: "delivered",
    customerName: "لمى السالم",
    createdAt: "2025-12-20",
    estimatedDelivery: "2025-12-24",
    items: trackingOrderProducts,
  },
  {
    orderNumber: "09832",
    status: "confirmed",
    customerName: "ريم القحطاني",
    createdAt: "2026-01-06",
    estimatedDelivery: "2026-01-09",
    items: trackingOrderProducts,
  },
  {
    orderNumber: "03012",
    status: "cancelled",
    customerName: "هند الدوسري",
    createdAt: "2025-12-28",
    estimatedDelivery: "2025-12-30",
    items: trackingOrderProducts,
  },
];

/** Base timeline step ids in order (UI resolves statuses against this). */
export const trackedSteps = [
  { id: "placed", label: "تم الطلب" },
  { id: "confirmed", label: "تم تأكيد الطلب" },
  { id: "preparing", label: "جاري تجهيز الطلب" },
  { id: "shipped", label: "تم شحن الطلب" },
  { id: "out_for_delivery", label: "جاري التوصيل" },
  { id: "delivered", label: "تم التوصيل" },
];