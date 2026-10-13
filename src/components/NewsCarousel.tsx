"use client";

import { useEffect, useState } from "react";
import { useHasPeek, useItemsPerView } from "@/hooks/useItemsPerView";
import { useNews } from "@/hooks/useNews";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";
import { Arrow } from "./ui/Icons";

const AUTOPLAY_MS = 5000;
const SWIPE_PX = 50;

/*
 * Layout is pure CSS: --n (cards per view), --gap and --peek change at the md / xl breakpoints.
 * On mobile --peek leaves room for the next card to show at the screen edge (as in the mockup),
 * so the first paint is already correct. On desktop (xl) the track bleeds to the right viewport edge and
 * shows 2 full cards plus ~60% of the third (--n: 2.6), the same "peek" idea. JS only needs `perView` to know how far it can scroll.
 */
const trackClasses = "flex [--n:1] [--gap:14px] [--peek:99px] md:[--n:2] md:[--gap:32px] md:[--peek:0px] xl:[--n:2.6] xl:[--gap:48px]";
const trackGap = { gap: "var(--gap)" };
const cardBasis = { flexBasis: "calc((100% - var(--peek) - (var(--n) - 1) * var(--gap)) / var(--n))" };

function CarouselArrow({ direction, onClick, disabled }: { direction: "prev" | "next"; onClick: () => void; disabled: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous articles" : "Next articles"}
      className="flex h-14 w-14 items-center justify-center border border-gold-ink text-gold-ink transition-colors hover:bg-crimson hover:text-white disabled:pointer-events-none disabled:opacity-30"
    >
      <Arrow className={direction === "prev" ? "rotate-180" : ""} />
    </button>
  );
}

function Message({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div role={children ? "alert" : "status"} className="mx-auto flex max-w-[520px] flex-col items-center gap-6 py-20 text-center">
      <p className="font-heading text-[24px] uppercase leading-[32px]">{title}</p>
      {children}
    </div>
  );
}

export default function NewsCarousel() {
  const { state, retry } = useNews();
  const perView = useItemsPerView();
  const hasPeek = useHasPeek();
  const [requestedIndex, setRequestedIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const articles = state.status === "success" ? state.articles : [];
  const maxIndex = Math.max(0, articles.length - perView);
  // Clamp on read so a resize (3 → 1 cards) can never leave us past the end.
  const index = Math.min(requestedIndex, maxIndex);

  const goTo = (i: number) => setRequestedIndex(Math.min(Math.max(i, 0), maxIndex));

  // Autoplay: loops, pauses on hover / focus, and is off for reduced-motion users.
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setRequestedIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : Math.min(i, maxIndex) + 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, maxIndex]);

  if (state.status === "error") {
    return (
      <Message title="We couldn’t load the latest news">
        <p className="text-[18px] leading-[30px]">Check your connection and try again.</p>
        <button
          type="button"
          onClick={retry}
          className="border border-gold-ink px-8 py-3 text-[18px] font-semibold uppercase tracking-[0.02em] text-gold-ink transition-colors hover:bg-crimson hover:text-white"
        >
          Try again
        </button>
      </Message>
    );
  }

  if (state.status === "success" && articles.length === 0) {
    return <Message title="No news to show right now" />;
  }

  const loading = state.status === "loading";
  const items = loading ? [0, 1, 2] : articles;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Latest news"
      aria-busy={loading}
      className="px-[30px] md:px-10 xl:pl-[60px] xl:pr-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="-mx-1 touch-pan-y overflow-hidden px-1 max-md:-mr-[30px] xl:mr-0"
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX;
          if (Math.abs(dx) > SWIPE_PX) goTo(index + (dx < 0 ? 1 : -1));
          setTouchStartX(null);
        }}
      >
        <div
          className={`${trackClasses} transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
          style={{
            ...trackGap,
            transform: `translateX(calc(${index} * ((100% - var(--peek) - (var(--n) - 1) * var(--gap)) / var(--n) + var(--gap)) * -1))`,
          }}
          aria-live={paused ? "polite" : "off"}
        >
          {loading
            ? items.map((i) => (
                <div key={i as number} style={cardBasis} className="shrink-0 grow-0">
                  <NewsCardSkeleton />
                </div>
              ))
            : articles.map((article, i) => (
                <div
                  key={article.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${articles.length}`}
                  // Off-screen cards must not be reachable by keyboard.
                  inert={i < index || i >= index + perView + (hasPeek ? 1 : 0)}
                  style={cardBasis}
                  className="shrink-0 grow-0"
                >
                  <NewsCard article={article} />
                </div>
              ))}
        </div>
      </div>

      {!loading && (
        <div className="mt-12 flex items-center justify-between xl:pr-[60px]">
          <p className="text-[16px] font-semibold" aria-hidden="true">
            {index + 1}–{Math.min(index + perView, articles.length)} of {articles.length}
          </p>
          <div className="flex gap-3">
            <CarouselArrow direction="prev" onClick={() => goTo(index - 1)} disabled={index === 0} />
            <CarouselArrow direction="next" onClick={() => goTo(index + 1)} disabled={index >= maxIndex} />
          </div>
        </div>
      )}
    </section>
  );
}
