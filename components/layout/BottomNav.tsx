"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane, Bus, Mountain, PlaneLanding, Info } from "lucide-react";

const tabs = [
  { href: "/day/1", icon: Plane, label: "1일차" },
  { href: "/day/2", icon: Bus, label: "2일차" },
  { href: "/day/3", icon: Mountain, label: "3일차" },
  { href: "/day/4", icon: PlaneLanding, label: "4일차" },
  { href: "/info", icon: Info, label: "정보" },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="max-w-lg mx-auto flex">
        {tabs.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center py-2 min-h-[56px] gap-1 text-xs font-medium transition-all
                ${active ? "text-[#ff6b35] font-bold" : "text-neutral-400"}`}
            >
              <Icon className={`h-5 w-5 ${active ? "scale-110" : ""} transition-transform`} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
