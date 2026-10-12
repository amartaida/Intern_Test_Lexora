import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-[#F9F9F9]">
      {/* Soft skyline background with gray overlay like Figma */}
      <Image
        src="/images/singapore-skyline.jpg"
        alt=""
        fill
        className="object-cover object-center img-grayscale-soft opacity-40"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#DEE2E6]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />

      {/* Magenta geometric shapes (Figma #760525 / #AA0433) */}
      <div
        className="absolute top-0 left-0 w-[48%] h-full z-[1]"
        style={{
          background: "linear-gradient(135deg, #760525 0%, #AA0433 100%)",
          clipPath: "polygon(0 0, 70% 0, 38% 100%, 0 100%)",
        }}
      />
      {/* Secondary accent shape */}
      <div
        className="absolute bottom-0 left-[8%] w-[22%] h-[55%] z-[1] opacity-90"
        style={{
          background: "#AA0433",
          clipPath: "polygon(20% 0, 100% 15%, 85% 100%, 0 100%)",
        }}
      />

      {/* Lady Justice – grayscale metallic look like reference */}
      <div className="absolute left-0 bottom-0 w-[48%] h-[95%] z-[2] hidden lg:block pointer-events-none">
        <Image
          src="/images/lady-justice.png"
          alt="Lady Justice"
          fill
          className="object-contain object-bottom img-grayscale"
          sizes="48vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="lg:ml-[48%] max-w-xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] text-gray-900 mb-6">
            BECOME AN
            <br />
            <span className="text-[#AA0433]">AFFILIATE</span> OF THE
            <br />
            LEXORA
          </h1>
          <p className="font-body text-gray-600 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus.
          </p>
          <a
            href="#functions"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-gray-900 hover:text-[#AA0433] transition-colors uppercase group"
          >
            FIND LAWYER
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right dark gray bar (Figma #404040) with hamburger area */}
      <div className="absolute top-0 right-0 w-16 lg:w-32 h-full bg-[#404040] z-[5] hidden md:block" />

      {/* Scroll down */}
      <div className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase" style={{ writingMode: "vertical-rl" }}>
          SCROLL DOWN
        </span>
        <div className="w-px h-12 bg-white/30" />
        <div className="w-2 h-2 rounded-full border border-white/50" />
      </div>
    </section>
  );
}
