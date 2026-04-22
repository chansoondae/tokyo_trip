export function HeroBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden h-52 bg-gradient-to-br from-orange-400 to-pink-400 flex flex-col items-center justify-center text-white text-center shadow-sm">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 px-4">
        <h1 className="text-2xl font-bold mb-1">도쿄 아트 투어 3박 4일</h1>
        <p className="text-sm opacity-90 mb-4">2026.04.25 토 → 04.28 화</p>
        <div className="flex flex-wrap justify-center gap-2">
          {["#아티존", "#솜포", "#폴라미술관", "#후지산", "#가마쿠라"].map((tag) => (
            <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
