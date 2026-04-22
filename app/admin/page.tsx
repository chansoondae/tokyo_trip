"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Comment {
  id: string;
  spot_id: string;
  nickname: string;
  content: string;
  created_at: string;
}

const SPOT_LABELS: Record<string, string> = {
  "spot-1-1": "1일차 1. 하네다 공항 도착",
  "spot-1-2": "1일차 2. 국립서양미술관",
  "spot-1-3": "1일차 3. 솜포 미술관",
  "spot-1-4": "1일차 4. 도쿄 프린스 호텔",
  "spot-2-1": "2일차 1. 후지 모토스코 리조트",
  "spot-2-2": "2일차 2. 도쿄 후지 미술관",
  "spot-2-3": "2일차 3. 샤부젠 롯폰기",
  "spot-3-1": "3일차 1. 폴라 미술관",
  "spot-3-2": "3일차 2. 시바자쿠라 축제",
  "spot-3-3": "3일차 3. 토리키조쿠",
  "spot-4-1": "4일차 1. 아티존 미술관",
  "spot-4-2": "4일차 2. 도쿄도 미술관",
  "spot-4-3": "4일차 3. 하네다 공항 출발",
};

export default function AdminPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    supabase
      .from("comments_tokyo")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setComments(data ?? []);
        setLoading(false);
      });
  }, []);

  const spotIds = Array.from(new Set(comments.map((c) => c.spot_id))).sort();
  const filtered = filter === "all" ? comments : comments.filter((c) => c.spot_id === filter);

  const grouped = filtered.reduce<Record<string, Comment[]>>((acc, c) => {
    acc[c.spot_id] = acc[c.spot_id] ?? [];
    acc[c.spot_id].push(c);
    return acc;
  }, {});

  return (
    <div className="fixed inset-0 z-[100] bg-neutral-50 overflow-y-auto">
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-xl font-bold text-neutral-900 mb-1">💬 댓글 관리</h1>
        <p className="text-sm text-neutral-400 mb-6">전체 댓글 {comments.length}개</p>

        {/* 필터 */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition
              ${filter === "all" ? "bg-[#ff6b35] text-white" : "bg-white text-neutral-500 border border-neutral-200"}`}
          >
            전체
          </button>
          {spotIds.map((sid) => (
            <button
              key={sid}
              onClick={() => setFilter(sid)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition
                ${filter === sid ? "bg-[#ff6b35] text-white" : "bg-white text-neutral-500 border border-neutral-200"}`}
            >
              {SPOT_LABELS[sid] ?? sid}
            </button>
          ))}
        </div>

        {loading && <p className="text-sm text-neutral-400">불러오는 중...</p>}

        {!loading && filtered.length === 0 && (
          <p className="text-sm text-neutral-400">댓글이 없습니다.</p>
        )}

        {Object.entries(grouped)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([spotId, spotComments]) => (
            <div key={spotId} className="mb-6">
              <h2 className="text-sm font-bold text-orange-500 mb-2">
                {SPOT_LABELS[spotId] ?? spotId} ({spotComments.length})
              </h2>
              <div className="space-y-2">
                {spotComments.map((c) => (
                  <div key={c.id} className="bg-white rounded-xl px-4 py-3 border border-neutral-100 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-orange-500">{c.nickname}</span>
                      <span className="text-[10px] text-neutral-400">
                        {new Date(c.created_at).toLocaleString("ko-KR", {
                          month: "numeric",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">{c.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
