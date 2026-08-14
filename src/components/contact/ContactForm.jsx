import { useState } from "react";
import {
  FileText,
  Mail,
  PenLine,
  Send,
  UserRound,
  ShieldCheck,
} from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="mt-2 pb-1 sm:mt-9 md:mt-11">
      {/* Heading */}
      <div className="mb-2 text-center sm:mb-5 md:mb-6">
        <h2
          className="
            text-[18px]
            font-semibold
            text-[#111]

            sm:text-[27px]

            md:text-[34px]
          "
        >
          أرسل لنا رسالة
        </h2>

        <span
          className="
            mx-auto
            mt-1
            block
            h-[2px]
            w-[30px]
            rounded-full
            bg-[#C91F72]

            sm:w-[65px]

            md:w-[82px]
          "
        />
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-1 sm:space-y-3 md:space-y-4"
      >
        {/* Name */}
        <div className="relative">
          <UserRound
            size={13}
            strokeWidth={1.5}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-[#111]

              sm:right-4
              sm:size-[21px]

              md:size-[24px]
            "
          />

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="الاسم الكامل"
            className="
              h-[30px]
              w-full
              rounded-[8px]
              border
              border-[#E1E1E1]
              bg-white
              pr-10
              pl-4
              text-right
              !text-[11px]
              text-[#222]
              outline-none
              placeholder:text-[#999]
              focus:border-[#C91F72]

              sm:h-[58px]
              sm:rounded-[15px]
              sm:pr-12
              sm:text-[14px]

              md:h-[68px]
              md:rounded-[18px]
              md:pr-14
              md:text-[17px]
            "
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail
            size={13}
            strokeWidth={1.5}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-[#111]

              sm:right-4
              sm:size-[21px]

              md:size-[24px]
            "
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="البريد الإلكتروني"
            className="
              h-[30px]
              w-full
              rounded-[8px]
              border
              border-[#E1E1E1]
              bg-white
              pr-10
              pl-4
              text-right
              !text-[11px]
              text-[#222]
              outline-none
              placeholder:text-[#999]
              focus:border-[#C91F72]

              sm:h-[58px]
              sm:rounded-[15px]
              sm:pr-12
              sm:text-[14px]

              md:h-[68px]
              md:rounded-[18px]
              md:pr-14
              md:text-[17px]
            "
          />
        </div>

        {/* Subject */}
        <div className="relative">
          <FileText
            size={13}
            strokeWidth={1.5}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-[#111]

              sm:right-4
              sm:size-[21px]

              md:size-[24px]
            "
          />

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="الموضوع"
            className="
              h-[30px]
              w-full
              rounded-[8px]
              border
              border-[#E1E1E1]
              bg-white
              pr-10
              pl-4
              text-right
              !text-[11px]
              text-[#222]
              outline-none
              placeholder:text-[#999]
              focus:border-[#C91F72]

              sm:h-[58px]
              sm:rounded-[15px]
              sm:pr-12
              sm:text-[14px]

              md:h-[68px]
              md:rounded-[18px]
              md:pr-14
              md:text-[17px]
            "
          />
        </div>

        {/* Message */}
        <div className="relative">
          <PenLine
            size={13}
            strokeWidth={1.5}
            className="
              absolute
              right-3
              top-3
              text-[#111]

              sm:right-4
              sm:size-[21px]

              md:size-[24px]
            "
          />

          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="رسالتك"
            className="
              min-h-[80px]
              w-full
              resize-none
              rounded-[8px]
              border
              border-[#E1E1E1]
              bg-white
              pr-10
              pl-4
              pt-2
              text-right
              !text-[11px]
              text-[#222]
              outline-none
              placeholder:text-[#999]
              focus:border-[#C91F72]

              sm:min-h-[150px]
              sm:rounded-[15px]
              sm:pr-12
              sm:text-[14px]

              md:min-h-[180px]
              md:rounded-[18px]
              md:pr-14
              md:text-[17px]
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
    relative
    flex
    h-[30px]
    w-full
    items-center
    justify-center
    rounded-[8px]
    bg-[#D20A71]
    !text-[13px]
    font-medium
    text-white

    sm:h-[58px]
    sm:rounded-[15px]
    sm:text-[18px]

    md:h-[68px]
    md:rounded-[18px]
    md:text-[22px]
  "
        >
          <span>إرسال الرسالة</span>

          <Send
            size={15}
            strokeWidth={1.5}
            className="
      absolute
      right-3
      sm:right-5
      md:right-7
      sm:size-[23px]
      md:size-[27px]
    "
          />
        </button>

        {submitted && (
          <p className="text-center !text-[11px] text-[#0a8f3c] sm:text-[14px]">
            تم إرسال رسالتك بنجاح، سنرد عليك في أقرب وقت.
          </p>
        )}
      </form>

      {/* Privacy */}
      <div
        className="
          mt-2
          flex
          items-center
          justify-center
          gap-1.5
          text-[9px]
          text-[#595959]

          sm:mt-4
          sm:gap-2
          sm:text-[11px]

          md:mt-5
          md:text-[14px]
        "
      >
        <span>نحترم خصوصيتك ونضمن سرية بياناتك</span>

        <ShieldCheck
          size={16}
          strokeWidth={1.5}
          className="
            text-[#C91F72]

            sm:size-[20px]

            md:size-[24px]
          "
        />
      </div>
    </section>
  );
}
