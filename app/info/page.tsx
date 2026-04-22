import { PhoneButton } from "@/components/common/PhoneButton";
import { ExternalLinkButton } from "@/components/common/ExternalLinkButton";

const sections = [
  {
    emoji: "💴",
    title: "환전",
    content: "일본은 현금 사용이 많습니다. 엔화로 환전하여 준비하세요. 공항 환전보다 시중 은행이나 환전소가 유리할 수 있습니다. 1인 기준 5만엔~10만엔 정도 준비 권장합니다.",
  },
  {
    emoji: "📱",
    title: "유심/로밍",
    content: "국내 통신사 데이터 로밍 또는 인천공항 유심 수령을 추천합니다. 일본 전역에서 데이터 사용이 가능한 상품을 선택하세요. 공항 수령 시 당일 출발 2시간 전까지 신청해야 합니다.",
  },
  {
    emoji: "🛡️",
    title: "여행자보험",
    content: "여행자보험은 각자 개별 가입하시기 바랍니다. 가족형 상품도 가능합니다. 출발 전에 미리 가입해두시면 안심입니다. 해외 의료비, 휴대품 손해 등을 커버하는 상품을 권장합니다.",
  },
  {
    emoji: "🔐",
    title: "귀중품 보관",
    content: "여권은 항상 안전하게 보관하세요. 호텔 룸 세이프(금고)나 프런트에 맡기는 것을 권장합니다. 분실 시 대사관 연락처: 주일 한국대사관 +81-3-3452-7611",
  },
  {
    emoji: "👕",
    title: "옷차림",
    content: "4월 말 도쿄는 봄 날씨입니다. 낮에는 15~20°C 내외, 아침저녁은 다소 쌀쌀할 수 있어 가벼운 겉옷을 챙기세요. 미술관 관람이 많으므로 편한 신발 필수입니다.",
  },
  {
    emoji: "🍽️",
    title: "식사",
    content: "전 일정 식사가 포함되어 있습니다. 알레르기나 식이 제한이 있으신 분은 사전에 인솔자에게 알려주세요. 불포함 식사(개인 간식, 음료 등)는 개별 부담입니다.",
  },
  {
    emoji: "📞",
    title: "비상연락처",
    content: "인솔자 서찬수(차순): 010-5663-5153\n주일 한국대사관: +81-3-3452-7611\n일본 긴급: 110(경찰) / 119(소방·구급)",
  },
];

export default function InfoPage() {
  return (
    <div className="space-y-4 px-4 py-6">
      <h1 className="text-2xl font-bold">여행 정보</h1>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
        <h2 className="text-lg font-bold">📞 인솔자 연락처</h2>
        <div className="flex flex-col gap-3">
          <PhoneButton phone="010-5663-5153" label="서찬수(차순) 010-5663-5153" />
          <ExternalLinkButton href="https://pf.kakao.com/_fxiRVM" label="카카오채널 몽트래블" />
        </div>
      </div>

      <div className="space-y-3">
        {sections.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-2">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <span>{s.emoji}</span>
              {s.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
