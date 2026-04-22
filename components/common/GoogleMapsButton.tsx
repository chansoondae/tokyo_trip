import { MapPin, ExternalLink } from "lucide-react";

interface Props {
  url: string;
  label?: string;
}

export function GoogleMapsButton({ url, label = "구글맵에서 열기" }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2.5
                 text-sm font-semibold text-blue-700 active:scale-95 transition
                 hover:bg-blue-100"
    >
      <MapPin className="h-4 w-4" />
      {label}
      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
    </a>
  );
}
