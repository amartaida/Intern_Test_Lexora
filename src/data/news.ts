export interface NewsArticle {
  id: string;
  image: string;
  imageAlt: string;
  category: string;
  /** ISO date string */
  publishedAt: string;
  title: string;
  excerpt: string;
  url: string;
}

/**
 * Static placeholder content that mirrors the mockup.
 * Phase 2 replaces this with live articles from The Guardian API —
 * the NewsArticle shape is what the API mapper will return.
 */
export const PLACEHOLDER_NEWS: NewsArticle[] = [
  {
    id: "mou-inner-temple",
    image: "/images/news-1.webp",
    imageAlt: "Two signatories holding the signed memorandum of understanding",
    category: "Press Release",
    publishedAt: "2025-04-15",
    title: "The Lexora of Singapore signs MOU with the Inner Temple",
    excerpt:
      "The Lexora of Singapore (the \u201cSociety\u201d) is pleased to announce the signing today of a five-year Memorandum of Understanding (\u201cMOU\u201d) with the Honourable Society of the Inner Temple to strengthen ties and open up new opportunities for collaboration.",
    url: "#media-press",
  },
  {
    id: "hunan-delegation",
    image: "/images/news-2.webp",
    imageAlt: "A host presenting a framed gift to a visiting delegate",
    category: "Media",
    publishedAt: "2025-05-20",
    title: "The Lexora hosts delegation from Hunan People\u2019s Procuratorate",
    excerpt:
      "The Lexora of Singapore (the \u201cSociety\u201d) is pleased to announce the signing today of a five-year Memorandum of Understanding (\u201cMOU\u201d) with the Honourable Society of the Inner Temple to strengthen ties and open up new opportunities for collaboration.",
    url: "#media-press",
  },
  {
    id: "lawyers-students-dialogue",
    image: "/images/news-3.webp",
    imageAlt: "Young lawyers speaking with students in a classroom",
    category: "Media",
    publishedAt: "2025-06-10",
    title: "Lawyers & students in dialogue on law and integrity",
    excerpt:
      "Members of the Young Lawyers Committee recently spoke with students at a secondary school, sharing candidly about what life as a lawyer is like, how no two days are ever quite the same, and the importance of integrity in the legal profession.",
    url: "#media-press",
  },
];
