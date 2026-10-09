export default function AnniversaryBanner() {
  return (
    <section id="anniversary" className="relative">
      <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 gap-2 h-full p-8 items-end">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="bg-gray-500/50 rounded-sm" style={{ height: `${30 + (i % 5) * 12}%` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="bg-[#8B1A1A] px-8 sm:px-12 lg:px-16 py-4 sm:py-5 flex items-center gap-3 sm:gap-5 shadow-2xl relative">
              <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 bg-[#8B1A1A]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)", transform: "translateX(-100%)" }} />
              <span className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-[0.15em] uppercase">Celebrating</span>
              <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">60</span>
              <span className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-[0.15em] uppercase">Anniversary</span>
              <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 bg-[#8B1A1A]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)", transform: "translateX(100%)" }} />
            </div>

            <div className="flex justify-center mt-8">
              <button type="button" className="flex flex-col items-center gap-2 text-white group" aria-label="Play video">
                <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/80">Play Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
