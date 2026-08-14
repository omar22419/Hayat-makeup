import { UserRound } from "lucide-react";

export default function AccountProfileCard({ user }) {
  return (
    <section
      className="
        flex
        items-center
        gap-3
        rounded-[14px]
        border
        border-[#EEEEEE]
        bg-white
        p-3

        sm:gap-4
        sm:rounded-[18px]
        sm:p-5

        md:gap-5
        md:rounded-[22px]
        md:p-6
      "
    >
      {/* Avatar */}
      <div
        className="
          flex
          h-[54px]
          w-[54px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#FBE3EF]
          text-[#D4146A]

          sm:h-[72px]
          sm:w-[72px]

          md:h-[92px]
          md:w-[92px]
        "
      >
        <UserRound
          size={28}
          strokeWidth={1.5}
          className="
            sm:size-[38px]

            md:size-[48px]
          "
        />
      </div>

      {/* Info */}
      <div className="min-w-0 text-right">
        <h1
          className="
            text-[16px]
            font-semibold
            leading-tight
            text-[#111111]

            sm:text-[22px]

            md:text-[28px]
          "
        >
          {user.name}
        </h1>

        <p
          className="
            mt-0.5
            text-[10px]
            leading-4
            text-[#888888]

            sm:mt-1
            sm:text-[13px]

            md:mt-1.5
            md:text-[16px]
          "
        >
          {user.email}
        </p>

        <p
          className="
            text-[9px]
            leading-4
            text-[#999999]

            sm:text-[11px]

            md:text-[13px]
          "
        >
          عميلة منذ {user.joinedAt}
        </p>
      </div>
    </section>
  );
}
