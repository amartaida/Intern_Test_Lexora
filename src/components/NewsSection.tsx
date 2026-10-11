import Image from "next/image";

const articles = [
  {
    id: "1",
    title: "The Lexora of Singapore Signs MOU with the Inner Temple",
    type: "Press Release",
    date: "April 2025",
    excerpt:
      'The Lexora of Singapore (the "Society") is pleased to announce the signing today of a five-year Memora…',
    image: "/images/news-mou.png",
  },
  {
    id: "2",
    title: "LawSoc Hosts Delegation from Hunan People's Procuratorate",
    type: "Media",
    date: "May 2025",
    excerpt:
      'The Lexora of Singapore (the "Society") is pleased to announce the signing today of a five-year Memora…',
    image: "/images/news-delegation.png",
  },
  {
    id: "3",
    title: "Lawyers & Students in Dialogue on Law and AI",
    type: "Media",
    date: "June 2025",
    excerpt:
      "Young Lawyers Committee members and Wern Hao See recently spoke…",
    image: "/images/news-dialogue.png",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <p className="text-center text-[#8B1A1A] font-semibold tracking-wider uppercase text-sm mb-10">
          MEDIA & PRESS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="aspect-[16/10] mb-4 overflow-hidden relative bg-gray-200">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase leading-snug mb-2 line-clamp-2 group-hover:text-[#8B1A1A] transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                {article.type} | {article.date}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                {article.excerpt}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#C9A227] hover:text-[#8B1A1A] transition-colors"
              >
                MORE DETAIL
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
