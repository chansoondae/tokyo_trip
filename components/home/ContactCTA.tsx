import { PhoneButton } from "@/components/common/PhoneButton";
import { ExternalLinkButton } from "@/components/common/ExternalLinkButton";

export function ContactCTA() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
      <h2 className="text-lg font-bold">인솔자 연락처</h2>
      <p className="text-sm text-neutral-600">궁금하신 사항은 인솔자에게 연락해 주세요.</p>
      <div className="flex flex-col gap-3">
        <PhoneButton phone="010-5663-5153" label="서찬수(차순) 010-5663-5153" />
        <ExternalLinkButton href="https://pf.kakao.com/_fxiRVM" label="카카오채널 몽트래블" />
      </div>
    </div>
  );
}
