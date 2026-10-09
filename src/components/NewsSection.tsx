const articles = [
  {
    id: "1",
    title: "The Lexora of Singapore Signs MOU with the Inner Temple",
    type: "Press Release",
    date: "April 2025",
    excerpt: 'The Lexora of Singapore (the "Society") is pleased to announce the signing today of a five-year Memora…',
  },
  {
    id: "2",
    title: "LawSoc Hosts Delegation from Hunan People's Procuratorate",
    type: "Media",
    date: "May 2025",
    excerpt: 'The Lexora of Singapore (the "Society") is pleased to announce the signing today of a five-year Memora…',
  },
  {
    id: "3",
    title: "Lawyers & Students in Dialogue on Law and AI",
    type: "Media",
    date: "June 2025",
    excerpt: "Young Lawyers Committee members and Wern Hao See recently spoke…",
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
              <div className="aspect-[16/10] bg-gray-300 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase leading-snug mb-2 line-clamp-2 group-hover:text-[#8B1A1A] transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{article.type} | {article.date}</p>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">{article.excerpt}</p>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#C9A227] hover:text-[#8B1A1A] transition-colors">
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
