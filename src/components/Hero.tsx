import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* Background skyline */}
      <Image
        src="/images/singapore-skyline.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/70" />

      {/* Magenta diagonal stripe */}
      <div
        className="absolute top-0 left-0 w-[48%] h-full bg-[#8B1A1A] z-[1]"
        style={{ clipPath: "polygon(0 0, 72% 0, 42% 100%, 0 100%)" }}
      />

      {/* Lady Justice */}
      <div className="absolute left-0 bottom-0 w-[45%] h-[92%] z-[2] hidden lg:block pointer-events-none">
        <Image
          src="/images/lady-justice.png"
          alt="Lady Justice"
          fill
          className="object-contain object-bottom"
          sizes="45vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="lg:ml-[45%] max-w-xl">
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

      {/* Scroll down */}
      <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase" style={{ writingMode: "vertical-rl" }}>
          SCROLL DOWN
        </span>
        <div className="w-px h-12 bg-gray-300" />
        <div className="w-2 h-2 rounded-full border border-gray-400" />
      </div>
    </section>
  );
}
