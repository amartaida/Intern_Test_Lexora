import NewsCarousel from "./NewsCarousel";

export default function MediaPress() {
  return (
    <section id="media-press" aria-labelledby="media-title" className="relative overflow-hidden pb-[70px] pt-[100px] md:pb-[120px] md:pt-[150px] xl:pb-[261px] xl:pt-[189px]">
      {/* grey paper with torn top edge */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[114px] bg-[url('/images/torn-grey.svg')] bg-[length:100%_100%] bg-no-repeat" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[113px] bg-news-bg" />

      <div className="relative">
        <h2 id="media-title" data-reveal className="mx-auto w-fit font-heading text-[16px] font-light uppercase leading-[28px] text-crimson md:text-[24px] underline decoration-1 underline-offset-[5px]">
          Media &amp; press
        </h2>
        <div data-reveal data-reveal-delay="150" className="mt-[30px] md:mt-[54px]">
          <NewsCarousel />
        </div>
      </div>
    </section>
  );
}
