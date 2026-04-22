"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Comment {
  id: string;
  nickname: string;
  content: string;
  created_at: string;
}

export function SpotComments({ spotId }: { spotId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase
      .from("comments_tokyo")
      .select("*")
      .eq("spot_id", spotId)
      .order("created_at", { ascending: true })
      .then(({ data }) => setComments(data ?? []));
  }, [spotId]);

  async function handleDelete(id: string) {
    const pw = window.prompt("비밀번호를 입력하세요");
    if (pw !== "1234") {
      if (pw !== null) alert("비밀번호가 틀렸습니다.");
      return;
    }
    await supabase.from("comments_tokyo").delete().eq("id", id);
    setComments((prev) => prev.filter((c) => c.id !== id));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nickname.trim() || !content.trim()) return;
    setLoading(true);
    await supabase.from("comments_tokyo").insert({ spot_id: spotId, nickname, content });
    const { data } = await supabase
      .from("comments_tokyo")
      .select("*")
      .eq("spot_id", spotId)
      .order("created_at", { ascending: true });
    setComments(data ?? []);
    setContent("");
    setLoading(false);
  }

  return (
    <div className="mt-3 border-t border-neutral-100 pt-3 space-y-3">
      <p className="text-xs font-semibold text-neutral-500">
        💬 댓글{comments.length > 0 ? ` (${comments.length})` : ""}
      </p>

      <div className="space-y-2">
        {comments.length === 0 && (
          <p className="text-xs text-neutral-400">첫 번째 댓글을 남겨보세요!</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="bg-neutral-50 rounded-xl px-3 py-2 space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-orange-500">{c.nickname}</span>
              <button
                onClick={() => handleDelete(c.id)}
                className="text-[10px] text-neutral-300 hover:text-red-400 transition"
              >
                삭제
              </button>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">{c.content}</p>
            <p className="text-[10px] text-neutral-400">
              {new Date(c.created_at).toLocaleString("ko-KR", {
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
          maxLength={20}
          className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-orange-400"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="댓글을 입력하세요..."
          rows={2}
          maxLength={300}
          className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-orange-400 resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-[#ff6b35] text-white text-xs font-semibold px-4 py-2 disabled:opacity-50 active:scale-95 transition"
        >
          {loading ? "등록 중..." : "등록"}
        </button>
      </form>
    </div>
  );
}
