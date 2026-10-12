import Image from "next/image";

const cards = [
  {
    num: "01",
    title: "Firm Closure Dates",
    description: "Lorem ipsum dolor sit amet Lorem ipsum",
    image: "/images/calendar.jpg",
  },
  {
    num: "02",
    title: "Pro Bono Services",
    description: "Lorem ipsum dolor sit amet Lorem ipsum",
    image: "/images/gavel.jpg",
  },
  {
    num: "03",
    title: "Members' Library",
    description: "Lorem ipsum dolor sit amet Lorem ipsum",
    image: "/images/book.jpg",
  },
  {
    num: "04",
    title: "Specialists Directory",
    description: "Lorem ipsum dolor sit amet Lorem ipsum",
    image: "/images/filing-cabinets.jpg",
  },
];

export default function StatutoryFunctions() {
  return (
    <section id="functions" className="relative bg-white">
      {/* Centered intro text */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-12 lg:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#AA0433] font-semibold tracking-wider uppercase text-sm mb-3 font-body flex items-center justify-center gap-2">
            <span className="text-2xl leading-none">&ldquo;</span>
            WHAT WE DO
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[54px] text-gray-900 mb-5">
            We Carry Out Various Statutory Functions
          </h2>
          <p className="font-body text-gray-600">
            The mission of the Lexora is to serve its members and the public by
            sustaining an independent bar which upholds the rule of law and
            ensures access to justice. As part of its mission in ensuring access
            to justice for the needy, the Lexora has established Pro Bono SG…{" "}
            <a href="#" className="text-[#AA0433] font-semibold hover:underline">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Cards – light by default, Pro Bono (dark + gold) style on hover */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.num}
            className="relative group min-h-[300px] lg:min-h-[340px] flex flex-col justify-end overflow-hidden cursor-pointer text-gray-900"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 img-grayscale"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Default: light gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/55 to-white/15 group-hover:opacity-0 transition-opacity duration-350" />

            {/* Hover: dark overlay like Pro Bono card */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

            {/* Large number watermark */}
            <span className="absolute top-4 right-4 text-6xl lg:text-7xl font-heading leading-none opacity-20 z-10 text-gray-400 group-hover:text-white/30 transition-colors duration-350">
              {card.num}
            </span>

            <div className="relative z-10 p-6 lg:p-8">
              <span className="text-xs font-semibold tracking-wider font-body text-gray-500 group-hover:text-white/60 transition-colors duration-350">
                {card.num}
              </span>
              <h3 className="font-heading text-lg lg:text-xl mt-1 mb-2 group-hover:text-white transition-colors duration-350">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 font-body text-gray-600 group-hover:text-white/80 transition-colors duration-350 line-clamp-2">
                {card.description}
              </p>

              {/* Default: simple arrow */}
              <span className="inline-flex items-center text-gray-500 group-hover:hidden transition-colors mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              {/* Hover: gold MORE DETAIL button (Pro Bono reference style) */}
              <span className="hidden group-hover:inline-flex items-center justify-center gap-2 bg-[#927642] text-white text-xs font-bold tracking-wider uppercase px-5 py-3 font-body">
                MORE DETAIL
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
