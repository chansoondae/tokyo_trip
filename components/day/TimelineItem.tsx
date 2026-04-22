"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { GoogleMapsButton } from "@/components/common/GoogleMapsButton";
import { SpotComments } from "@/components/day/SpotComments";

interface Props {
  spotId: string;
  time: string;
  name: string;
  description: string;
  address?: string;
  imagePath: string;
  mapsUrl?: string;
  isLast: boolean;
}

export function TimelineItem({ spotId, time, name, description, address, imagePath, mapsUrl, isLast }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#ff6b35] mt-1 shrink-0" />
        {!isLast && <div className="w-0.5 bg-neutral-200 flex-1 mt-1" />}
      </div>
      <div className={`pb-6 flex-1 ${isLast ? "pb-0" : ""}`}>
        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
          {time}
        </span>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100">
          {!imgError && (
            <div className="relative w-full aspect-video">
              <Image
                src={imagePath}
                alt={name}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
              />
            </div>
          )}
          <div className="p-4 space-y-3">
            <h3 className="font-bold text-base">📍 {name}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">{description}</p>
            {address && (
              <div className="flex items-start gap-1.5 text-xs text-neutral-400">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
            )}
            {mapsUrl && <GoogleMapsButton url={mapsUrl} />}
            <SpotComments spotId={spotId} />
          </div>
        </div>
      </div>
    </div>
  );
}
