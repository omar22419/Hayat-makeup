const tabs = [
  { id: "all", label: "الكل" },
  { id: "orders", label: "الطلبات" },
  { id: "offers", label: "العروض" },
  { id: "products", label: "المنتجات" },
];

export default function NotificationTabs({
  activeTab,
  onChange,
}) {
  return (
    <div
      className="
        flex
        w-full
        items-center
        gap-2
        overflow-x-auto
        pb-1
        no-scrollbar

        sm:gap-3
      "
    >
      {tabs.map((tab) => {
        const active = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`
              h-[25px]
              shrink-0
              rounded-full
              border
              px-[23px]
              md:px-[70px]
              !text-[12px]
              md:!text-[16px]
              font-medium
              transition-colors

              sm:h-[46px]
              sm:px-8
              sm:text-[14px]

              md:h-[50px]
              md:px-10
              md:text-[16px]

              ${
                active
                  ? "border-[#C91F72] bg-[#C91F72] text-white"
                  : "border-[#D9D9D9] bg-white text-[#222]"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}