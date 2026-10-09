const cards = [
  { num: "01", title: "Firm Closure Dates", description: "", dark: false, bg: "bg-gray-100" },
  { num: "02", title: "Pro Bono Services", description: "Lorem ipsum dolor sit amet Lorem ipsum", dark: true, bg: "bg-gray-700" },
  { num: "03", title: "Members' Library", description: "", dark: false, bg: "bg-gray-50" },
  { num: "04", title: "Specialists Directory", description: "", dark: false, bg: "bg-white" },
];

export default function StatutoryFunctions() {
  return (
    <section id="functions" className="relative bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-0">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-[#8B1A1A] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
            <span className="text-2xl leading-none">&ldquo;</span>
            WHAT WE DO
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-5 uppercase">
            We Carry Out Various Statutory Functions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            The mission of the Lexora is to serve its members and the public by
            sustaining an independent bar which upholds the rule of law and
            ensures access to justice. As part of its mission in ensuring access
            to justice for the needy, the Lexora has established Pro Bono SG…{" "}
            <a href="#" className="text-[#8B1A1A] font-semibold hover:underline">
              Read more
            </a>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.num}
            className={`relative group min-h-[280px] lg:min-h-[320px] flex flex-col justify-between p-6 lg:p-8 ${card.bg} ${
              card.dark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className={`absolute top-4 right-4 text-6xl lg:text-7xl font-bold leading-none opacity-20 ${card.dark ? "text-white" : "text-gray-300"}`}>
              {card.num}
            </span>
            <div className="relative z-10">
              <span className={`text-xs font-semibold tracking-wider ${card.dark ? "text-white/60" : "text-gray-400"}`}>
                {card.num}
              </span>
              <h3 className="text-lg lg:text-xl font-bold mt-2 mb-2">{card.title}</h3>
              {card.description && (
                <p className={`text-sm leading-relaxed ${card.dark ? "text-white/80" : "text-gray-600"}`}>
                  {card.description}
                </p>
              )}
            </div>
            <div className="relative z-10 mt-6">
              {card.dark ? (
                <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-gray-900 text-xs font-bold tracking-wider uppercase px-5 py-3 hover:bg-[#D4AF37] transition-colors">
                  MORE DETAIL
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ) : (
                <a href="#" className="inline-flex items-center text-gray-500 hover:text-[#8B1A1A] transition-colors" aria-label={`More about ${card.title}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
