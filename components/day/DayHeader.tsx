interface Props {
  dayNumber: number;
  date: string;
  weekday: string;
  region: string;
  summary: string;
}

export function DayHeader({ dayNumber, date, weekday, region, summary }: Props) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <span className="bg-[#ff6b35] text-white text-sm font-bold px-3 py-1 rounded-full">
          {dayNumber}일차
        </span>
        <span className="text-sm text-neutral-500">{region}</span>
      </div>
      <h1 className="text-2xl font-bold">{date}</h1>
      <p className="text-neutral-500 text-sm">{weekday}</p>
      <p className="text-sm text-neutral-600 mt-2 bg-neutral-100 rounded-xl px-3 py-2">{summary}</p>
    </div>
  );
}
