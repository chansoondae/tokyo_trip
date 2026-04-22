import { MapPin, Calendar, User, Bus, Hotel, Plane } from "lucide-react";

const items = [
  { icon: Calendar, label: "기간", value: "2026.04.25 ~ 04.28 (3박 4일)" },
  { icon: Plane, label: "출국", value: "OZ1085  김포 → 하네다  4/25 08:40 → 10:45" },
  { icon: Plane, label: "귀국", value: "OZ1035  하네다 → 김포  4/28 20:05 → 22:25" },
  { icon: User, label: "인솔자", value: "차가운순대(서찬수)" },
  { icon: Bus, label: "교통편", value: "전용차량 + OZ항공" },
  { icon: Hotel, label: "숙소", value: "도쿄 프린스 호텔 (3박)" },
];

export function TourSummaryCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
      <h2 className="text-lg font-bold">투어 요약</h2>
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-3">
          <Icon className="h-4 w-4 text-[#ff6b35] mt-0.5 shrink-0" />
          <div>
            <span className="text-xs text-neutral-500">{label}</span>
            <p className="text-sm font-medium">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
