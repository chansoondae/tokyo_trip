import { Phone } from "lucide-react";

interface Props {
  phone: string;
  label: string;
}

export function PhoneButton({ phone, label }: Props) {
  return (
    <a
      href={`tel:${phone}`}
      className="flex items-center justify-center gap-2 min-h-[52px] rounded-2xl
                 bg-[#ff6b35] text-white font-bold text-sm active:scale-95 transition"
    >
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}
