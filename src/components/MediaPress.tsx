import { PLACEHOLDER_NEWS } from "@/data/news";
import NewsCard from "./NewsCard";

export default function MediaPress() {
  return (
    <section id="media-press" aria-labelledby="media-title" className="relative overflow-hidden pb-[157px] pt-[189px]">
      {/* grey paper with torn top edge */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[114px] bg-[url('/images/torn-grey.svg')] bg-[length:100%_100%] bg-no-repeat" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[113px] bg-news-bg" />

      <div className="relative">
        <h2 id="media-title" className="mx-auto w-fit font-heading text-[24px] font-light uppercase leading-[28px] text-crimson underline decoration-1 underline-offset-[5px]">
          Media &amp; press
        </h2>
        {/* Static for now — the carousel behaviour and API data arrive in the next phase */}
        <div className="mt-[54px] flex gap-[50px] pl-[60px]">
          {PLACEHOLDER_NEWS.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
