import ContactHeader from "../../components/contact/ContactHeader.jsx";
import ContactSupport from "../../components/contact/ContactSupport.jsx";
import ContactMethods from "../../components/contact/ContactMethods.jsx";
import ContactForm from "../../components/contact/ContactForm.jsx";

export default function Contact() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-[#111]
      "
    >
      <ContactHeader />

      <main
        className="
          mx-auto
          w-full
          max-w-[1050px]
          px-4
          sm:px-6
          md:px-8
          lg:px-0
        "
      >
        {/* Page Intro */}
        <section
          className="
            mt-3
            text-center

            sm:mt-7

            md:mt-9
          "
        >
          <div className="flex items-center justify-center gap-2">
            <h1
              className="
                text-[20px]
                font-semibold
                leading-tight
                text-[#111]

                sm:text-[35px]

                md:text-[44px]

                lg:text-[52px]
              "
            >
              تواصل معنا
            </h1>

            <span
              className="
                text-[20px]
                leading-none
                text-[#C91F72]

                sm:text-[36px]

                md:text-[44px]
              "
            >
              ♡
            </span>
          </div>

          <p
            className="
              mt-2
              text-[10px]
              leading-3
              text-[#555]

              sm:text-[14px]
              sm:leading-6

              md:text-[18px]

              lg:text-[21px]
            "
          >
            نحن هنا لخدمتك والرد على جميع استفساراتك بكل حب <span className="text-[#C91F72]">✦</span> 
          </p>
        </section>

        <ContactSupport />

        <ContactMethods />

        <ContactForm />
      </main>
    </div>
  );
}
