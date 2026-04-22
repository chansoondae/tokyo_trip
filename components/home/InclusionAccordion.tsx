const included = ["숙박 3박 (도쿄 프린스 호텔)", "전용차량 이용", "미술관 입장료", "전 일정 식사", "TAX 포함"];
const excluded = ["국제 항공권", "일본 내 개인 교통비", "매너팁", "여행자보험", "개인 쇼핑비"];

function Section({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div>
      <h3 className={`font-semibold text-sm mb-2 ${color}`}>{title}</h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
            <span>{color.includes("green") ? "✅" : "❌"}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InclusionAccordion() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-4">
      <h2 className="font-bold text-lg">포함/불포함 사항</h2>
      <Section title="✅ 포함" items={included} color="text-green-600" />
      <Section title="❌ 불포함" items={excluded} color="text-red-500" />
    </div>
  );
}
