import { ExternalLink } from "lucide-react";

interface Props {
  href: string;
  label: string;
}

export function ExternalLinkButton({ href, label }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 min-h-[52px] rounded-2xl
                 bg-yellow-400 text-neutral-900 font-bold text-sm active:scale-95 transition"
    >
      {label}
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}
