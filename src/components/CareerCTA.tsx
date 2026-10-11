import Image from "next/image";

export default function CareerCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px]">
        {/* Left */}
        <div className="bg-gray-100 flex items-center px-6 sm:px-10 lg:px-16 py-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#C9A227]/20 flex items-center justify-center shrink-0 mt-1">
              <svg className="w-5 h-5 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Support for your career growth
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                A guidance on career and work related issues
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-gray-900 hover:text-[#8B1A1A] transition-colors"
              >
                FIND CAREER
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right – magenta + phone */}
        <div className="relative bg-[#8B1A1A] flex items-center justify-center py-12 overflow-hidden min-h-[280px]">
          <div
            className="absolute left-0 top-0 bottom-0 w-16 bg-gray-100 hidden lg:block"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />

          <div className="relative z-10 w-40 h-72">
            <Image
              src="/images/phone-hand.png"
              alt="Mobile career app"
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
