

import { Clock3, MailIcon, Phone } from "lucide-react";
import ContactMethodCard from "./ContactMethodCard.jsx";
import { CiInstagram } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CONTACT_PHONE, CONTACT_EMAIL } from "../../data/constants.js";
const methods = [
    {
        id: 3,
        title: "واتساب",
        value: CONTACT_PHONE,
        icon: PiWhatsappLogoLight,
        wide: false,
        href: "https://wa.me/966551234567",
    },
    {
        id: 2,
        title: "اتصال",
        value: CONTACT_PHONE,
        icon: Phone,
        wide: false,
        href: "tel:+966551234567",
    },
    {
      id: 1,
      title: "البريد الإلكتروني",
      value: CONTACT_EMAIL,
      icon: MailIcon,
      wide: false,
      href: "mailto:hello@hayatmakeup.com",
    },
    {
        id: 5,
        title: "إنستغرام",
        value: "@hayat.makeup",
        icon: CiInstagram,
        wide: true,
        href: "https://instagram.com/hayat.makeup",
    },
    {
      id: 4,
      title: "ساعات العمل",
      value: "يوميًا من 10:00 ص – 10:00 م",
      icon: Clock3,
      wide: true,
    },
];

export default function ContactMethods() {
  return (
    <section className="mt-3 sm:mt-8 md:mt-10">
      {/* Heading */}
      <div className="mb-3 text-center sm:mb-4 md:mb-5">
        <h2
          className="
            text-[20px]
            font-semibold
            text-[#111]

            sm:text-[26px]

            md:text-[33px]
          "
        >
          تواصل مباشر
        </h2>

        <span
          className="
            mx-auto
            mt-1
            block
            h-[1px]
            w-[48px]
            rounded-full
            bg-[#C91F72]

            sm:w-[62px]

            md:w-[78px]
          "
        />
      </div>

      {/* 3 top */}
      <div
        className="
          grid
          grid-cols-3
          gap-1

          sm:gap-3

          md:gap-5
        "
      >
        {methods
          .filter((method) => !method.wide)
          .map((method) => (
            <ContactMethodCard
              key={method.id}
              icon={method.icon}
              title={method.title}
              value={method.value}
              href={method.href}
            />
          ))}
      </div>

      {/* 2 bottom */}
      <div
        className="
          mt-1
          grid
          grid-cols-2
          gap-1

          sm:mt-3
          sm:gap-3

          md:mt-5
          md:gap-5
        "
      >
        {methods
          .filter((method) => method.wide)
          .map((method) => (
            <ContactMethodCard
              key={method.id}
              icon={method.icon}
              title={method.title}
              value={method.value}
              href={method.href}
            />
          ))}
      </div>
    </section>
  );
}