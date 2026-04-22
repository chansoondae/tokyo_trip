"use client";
import { useRouter } from "next/navigation";
import { useFontSize } from "@/components/FontSizeProvider";
import { FileDown } from "lucide-react";

export function TopBar() {
  const router = useRouter();
  const { step, increase, decrease } = useFontSize();
  const atMin = step === 0;
  const atMax = step === 4;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200 h-14">
      <div className="max-w-lg mx-auto h-full flex items-center justify-between px-4">
        <button
          onClick={() => router.push("/")}
          className="text-lg font-bold text-neutral-900"
        >
          🗼 도쿄 아트 투어
        </button>
        <div className="flex items-center gap-1">
          <button
            onClick={decrease}
            disabled={atMin}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition
              ${atMin ? "text-neutral-300" : "text-neutral-600 active:bg-neutral-100"}`}
            aria-label="글자 작게"
          >
            −
          </button>
          <button
            onClick={increase}
            disabled={atMax}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition
              ${atMax ? "text-neutral-300" : "text-neutral-600 active:bg-neutral-100"}`}
            aria-label="글자 크게"
          >
            +
          </button>
          <button
            onClick={() => window.print()}
            className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-600 active:bg-neutral-100 transition"
            aria-label="PDF 다운로드"
          >
            <FileDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
