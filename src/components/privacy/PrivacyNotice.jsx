import { Shield } from "lucide-react";

export default function PrivacyNotice() {
  return (
    <div className="mt-3 flex items-center gap-3 rounded-[16px] border border-[#F2D6E3] bg-[#FFF9FB] px-4 py-4">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#FFF1F7]">
        <Shield
          size={27}
          strokeWidth={1.5}
          className="text-[#C91F72]"
        />
      </div>

      <p className="text-[13px] leading-[1.8] text-[#666]">
        باستخدامك لتطبيق
        <span className="text-[#C91F72]">
          {" "}
          HAYAT Makeup
        </span>
        ، فإنك توافق على شروط سياسة الخصوصية هذه.
      </p>
    </div>
  );
}