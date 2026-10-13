/** Loading placeholder with the same proportions as NewsCard. */
export default function NewsCardSkeleton() {
  return (
    <div className="h-full animate-pulse" aria-hidden="true">
      <div className="aspect-[486/300] w-full bg-fog" />
      <div className="mt-8 h-7 w-11/12 bg-fog" />
      <div className="mt-2 h-7 w-2/3 bg-fog" />
      <div className="mt-5 h-5 w-1/2 bg-fog" />
      <div className="mt-4 h-4 w-full bg-fog" />
      <div className="mt-2 h-4 w-full bg-fog" />
      <div className="mt-2 h-4 w-3/4 bg-fog" />
      <div className="mt-8 h-5 w-32 bg-fog" />
    </div>
  );
}
