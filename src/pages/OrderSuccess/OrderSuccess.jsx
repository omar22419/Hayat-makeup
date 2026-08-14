import { useNavigate, useLocation } from "react-router-dom";

import Header from "../../components/layout/Header";
import MobileBottomNav from "../../components/navigation/MobileBottomNav";

import OrderSuccessHeader from "../../components/order/OrderSuccessHeader";
import OrderNumber from "../../components/order/OrderNumber";
import OrderSummary from "../../components/order/OrderSummary";
import DeliveryDetails from "../../components/order/DeliveryDetails";
import ExpectedDelivery from "../../components/order/ExpectedDelivery";
import OrderActions from "../../components/order/OrderActions";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getSuccessOrder, orderMock } from "../../services/orders.js";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const order = useAsyncData(getSuccessOrder, orderMock);

  const createdOrder = location.state?.order;

  const orderNumber = createdOrder?.number || order.number;

  const orderProducts = createdOrder?.items
    ? createdOrder.items.map((item) => ({
        id: item.id,
        name: item.name,
        variant: item.color || item.description || "",
        price: Number(item.price),
        quantity: item.quantity || 1,
        image: item.image,
      }))
    : order.products;

  const customer = createdOrder?.customer;

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        w-full
        bg-white
        pb-[78px]

        md:pb-0
      "
    >
      {/* Header */}
      <Header />

      <main
        className="
          mx-auto
          w-full
          px-[14px]
          pb-[20px]

          sm:px-[20px]
          sm:pb-[30px]

          md:max-w-[900px]
          md:px-[28px]
          md:pb-[40px]

          lg:max-w-[1000px]
          lg:px-[40px]
          lg:pb-[50px]
        "
      >
        {/* Success Header */}
        <OrderSuccessHeader />

        {/* Order Number */}
        <OrderNumber orderNumber={orderNumber} />

        {/* Order Summary */}
        <OrderSummary products={orderProducts} />

        {/* Delivery Details */}
        <DeliveryDetails customer={customer} />

        {/* Expected Delivery */}
        <ExpectedDelivery />

        {/* Actions */}
        <OrderActions
          onTrackOrder={() => navigate(`/track-order?order=${orderNumber}`)}
          onContinueShopping={() => navigate("/products")}
        />
      </main>

      {/* Bottom Navigation */}
      <MobileBottomNav activeItem="home" />
    </div>
  );
}