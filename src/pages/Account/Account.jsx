import { useNavigate } from "react-router-dom";

import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";
import AccountProfileCard from "../../components/account/AccountProfileCard.jsx";
import AccountStats from "../../components/account/AccountStats.jsx";
import AccountSections from "../../components/account/AccountSections.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getProfile, logout, userMock } from "../../services/account.js";
import { getOrders, orderMock } from "../../services/orders.js";
import { useCartStore } from "../../store/cartStore.js";
import { useFavoritesStore } from "../../store/favoritesStore.js";

export default function Account() {
  const navigate = useNavigate();

  const user = useAsyncData(getProfile, userMock);
  const orders = useAsyncData(getOrders, [orderMock]);

  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const favoritesCount = useFavoritesStore((state) => state.favorites.length);
  const clearCart = useCartStore((state) => state.clearCart);
  const clearFavorites = useFavoritesStore((state) => state.clearFavorites);

  const handleNavigate = (path) => {
    if (path) navigate(path);
  };

  const handleLogout = async () => {
    await logout();
    clearCart();
    clearFavorites();
    navigate("/");
  };

  const stats = [
    {
      id: "favorites",
      label: "المفضلة",
      value: favoritesCount,
      onClick: () => handleNavigate("/wishlist"),
    },
    {
      id: "cart",
      label: "السلة",
      value: cartCount,
      onClick: () => handleNavigate("/cart"),
    },
    {
      id: "orders",
      label: "الطلبات",
      value: orders.length,
      onClick: () => handleNavigate("/order-success"),
    },
  ];

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-white
        pb-[78px]

        md:pb-0
      "
    >
      <Header />

      <main
        className="
          mx-auto
          w-full
          px-3
          pt-3

          sm:px-5
          sm:pt-5

          md:max-w-[900px]
          md:px-8
          md:pt-7

          lg:px-10
        "
      >
        {/* Title */}
        <section className="text-right">
          <h1
            className="
              text-[18px]
              font-semibold
              leading-tight
              text-[#111111]

              sm:text-[30px]

              md:text-[38px]
            "
          >
            حسابي
          </h1>
        </section>

        {/* Profile */}
        <section className="mt-3 sm:mt-5 md:mt-7">
          <AccountProfileCard user={user} />
        </section>

        {/* Stats */}
        <section className="mt-2 sm:mt-4 md:mt-6">
          <AccountStats stats={stats} />
        </section>

        {/* Menu */}
        <section className="mt-4 sm:mt-7 md:mt-9">
          <AccountSections
            cartCount={cartCount}
            favoritesCount={favoritesCount}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}