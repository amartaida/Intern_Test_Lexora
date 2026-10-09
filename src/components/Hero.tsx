export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50">
      <div
        className="absolute top-0 left-0 w-[45%] h-full bg-[#8B1A1A] origin-top-left"
        style={{ clipPath: "polygon(0 0, 70% 0, 40% 100%, 0 100%)" }}
      />

      <div className="absolute left-0 bottom-0 w-[42%] h-[90%] hidden lg:flex items-end justify-center pointer-events-none">
        <div className="relative w-full h-full flex items-end justify-center">
          <div className="w-[70%] h-[85%] relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 bg-gray-700/30 rounded-t-[50%]" />
            <div className="absolute top-[15%] right-[5%] text-gray-500/40">
              <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L4 9v2h2v8h4v-5h4v5h4v-8h2V9L12 3zm0 2.2L16.5 9H7.5L12 5.2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="lg:ml-[42%] max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
            BECOME AN
            <br />
            <span className="text-[#8B1A1A]">AFFILIATE</span> OF THE
            <br />
            LEXORA
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus.
          </p>
          <a
            href="#functions"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-gray-900 hover:text-[#8B1A1A] transition-colors uppercase group"
          >
            FIND LAWYER
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase" style={{ writingMode: "vertical-rl" }}>
          SCROLL DOWN
        </span>
        <div className="w-px h-12 bg-gray-300" />
        <div className="w-2 h-2 rounded-full border border-gray-400" />
      </div>
    </section>
  );
}
