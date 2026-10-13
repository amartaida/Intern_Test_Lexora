import NewsCarousel from "./NewsCarousel";

export default function MediaPress() {
  return (
    <section id="media-press" aria-labelledby="media-title" className="relative overflow-hidden pb-[261px] pt-[189px]">
      {/* grey paper with torn top edge */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[114px] bg-[url('/images/torn-grey.svg')] bg-[length:100%_100%] bg-no-repeat" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[113px] bg-news-bg" />

      <div className="relative">
        <h2 id="media-title" className="mx-auto w-fit font-heading text-[24px] font-light uppercase leading-[28px] text-crimson underline decoration-1 underline-offset-[5px]">
          Media &amp; press
        </h2>
        <div className="mt-[54px]">
          <NewsCarousel />
        </div>
      </div>
    </section>
  );
}
