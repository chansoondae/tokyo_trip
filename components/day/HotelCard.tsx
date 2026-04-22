import { GoogleMapsButton } from "@/components/common/GoogleMapsButton";

interface Props {
  name: string;
  mapsUrl: string;
}

export function HotelCard({ name, mapsUrl }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
      <h3 className="font-bold text-base">🏨 숙소</h3>
      <p className="text-sm font-medium">{name}</p>
      <GoogleMapsButton url={mapsUrl} label="호텔 위치 보기" />
    </div>
  );
}
