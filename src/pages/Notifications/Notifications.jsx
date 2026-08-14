import { useMemo, useState } from "react";

import Header from "../../components/layout/Header.jsx";
import MobileBottomNav from "../../components/navigation/MobileBottomNav.jsx";

import NotificationTabs from "../../components/notifications/NotificationTabs.jsx";
import NotificationCard from "../../components/notifications/NotificationCard.jsx";

import { useAsyncData } from "../../hooks/useAsyncData.js";
import { getNotifications, notificationsMock } from "../../services/engagement.js";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = useAsyncData(getNotifications, notificationsMock);

  const filteredNotifications = useMemo(() => {
    if (activeTab === "all") {
      return notifications;
    }

    return notifications.filter(
      (notification) => notification.category === activeTab,
    );
  }, [activeTab]);

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
          max-w-[1100px]
          px-4
          pt-3

          sm:px-6
          sm:pt-7

          md:px-8
          md:pt-9

          lg:px-10
        "
      >
        {/* Title */}
        <section
          className="
            text-center
            sm:text-center
          "
        >
          <h1
            className="
              text-[18px]
              font-semibold
              leading-tight
              text-[#111]

              sm:text-[32px]

              md:text-[40px]

              lg:text-[46px]
            "
          >
            الإشعارات
          </h1>
        </section>

        {/* Tabs */}
        <section
          className="
            mt-3
            sm:mt-7
            md:mt-9
          "
        >
          <NotificationTabs activeTab={activeTab} onChange={setActiveTab} />
        </section>

        {/* Notifications */}
        <section
          className="
            mt-3
            flex
            flex-col
            gap-2

            sm:mt-7
            sm:gap-4

            md:mt-9
            md:gap-5
          "
        >
          {filteredNotifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}
