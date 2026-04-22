interface Props {
  breakfast: string;
  lunch: string;
  dinner: string;
}

export function MealInfo({ breakfast, lunch, dinner }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
      <h3 className="font-bold text-base">식사 정보</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span>🌅</span>
          <span className="text-neutral-500 w-10">조식</span>
          <span className="font-medium">{breakfast}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span>🍱</span>
          <span className="text-neutral-500 w-10">중식</span>
          <span className="font-medium">{lunch}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span>🍴</span>
          <span className="text-neutral-500 w-10">석식</span>
          <span className="font-medium">{dinner}</span>
        </div>
      </div>
    </div>
  );
}
