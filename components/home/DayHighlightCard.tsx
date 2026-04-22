import Link from "next/link";

interface Props {
  day: number;
  date: string;
  spots: string[];
  imagePath: string;
}

export function DayHighlightCard({ day, date, spots }: Props) {
  return (
    <Link href={`/day/${day}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 active:scale-[0.98] transition-transform">
        <div className="h-24 bg-gradient-to-r from-orange-100 to-pink-100 flex items-center justify-center">
          <span className="text-4xl">
            {day === 1 ? "✈️" : day === 2 ? "🚌" : day === 3 ? "⛰️" : "🏛️"}
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#ff6b35] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {day}일차
            </span>
            <span className="text-sm text-neutral-500">{date}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {spots.map((spot) => (
              <span key={spot} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-lg">
                {spot}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
