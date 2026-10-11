import Image from "next/image";

export default function RoadTo2027() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <p className="text-[#8B1A1A] font-semibold tracking-wider uppercase text-sm mb-3">
          ROAD TO 2027
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight uppercase mb-10 lg:mb-14 max-w-2xl leading-tight">
          Celebrating a Legacy,
          <br />
          Journeying to the Future
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/handshake-scales.jpg"
              alt="Professional handshake with scales of justice"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-[#C9A227]">2025</span>
              <span className="text-gray-300">·</span>
              <span className="text-2xl sm:text-3xl font-bold text-gray-300">2026</span>
              <span className="text-gray-300">·</span>
              <span className="text-2xl sm:text-3xl font-bold text-gray-300">2027</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              A new beginning – Laying the groundwork for our future
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              As we embark on our journey towards LawSoc&apos;s 60th anniversary,
              2025 marks the beginning of our refreshed digital presence. This
              year, we&apos;re reimagining how we connect with members — through new
              digital tools, enhanced services, and stories from the legal
              community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
