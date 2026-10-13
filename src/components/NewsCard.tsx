import Image from "next/image";
import type { NewsArticle } from "@/data/news";
import { formatMonthYear } from "@/lib/format";
import ArrowLink from "./ui/ArrowLink";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group w-[486px] shrink-0">
      <div className="relative h-[300px] w-[486px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="486px"
          className="object-cover grayscale transition duration-500 ease-out group-hover:grayscale-0 group-has-[:focus-visible]:grayscale-0 [@media(hover:none)]:grayscale-0"
        />
      </div>
      <h3 className="mt-[51px] line-clamp-2 font-heading text-[32px] font-normal uppercase leading-[48px]">
        {article.title}
      </h3>
      <p className="mt-6 text-[20px] font-semibold leading-[30px]">
        {article.category} | {formatMonthYear(article.publishedAt)}
      </p>
      <p className="mt-3 line-clamp-2 text-[18px] leading-[30px]">{article.excerpt}</p>
      <ArrowLink href={article.url} className="mt-[33px]">
        More detail
      </ArrowLink>
    </article>
  );
}
