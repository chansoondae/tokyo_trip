import type { Metadata, Viewport } from "next";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { FontSizeProvider } from "@/components/FontSizeProvider";

export const metadata: Metadata = {
  title: "도쿄 아트 투어 3박 4일",
  description: "2026.04.25 ~ 04.28 몽트래블 도쿄 아트 투어 일정표",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✈️</text></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <FontSizeProvider>
          <div className="max-w-lg mx-auto w-full relative">
            <TopBar />
            <main className="flex-1 pb-20 pt-14">
              {children}
            </main>
            <BottomNav />
          </div>
        </FontSizeProvider>
      </body>
    </html>
  );
}
