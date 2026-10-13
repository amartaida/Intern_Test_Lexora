"use client";

import Image from "next/image";
import { useState } from "react";
import type { NewsCardData } from "@/types/news";
import ArrowLink from "./ui/ArrowLink";
import { Landmark } from "./ui/Icons";

/** Shown when an article has no thumbnail or the image fails to load. */
function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-fog text-slate/50">
      <Landmark className="size-16" />
    </div>
  );
}

export default function NewsCard({ article }: { article: NewsCardData }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = article.imageUrl && !imageFailed;

  return (
    // @container lets the type scale with the card width, which changes per breakpoint.
    <article className="group @container h-full">
      <div className="relative aspect-[486/300] w-full overflow-hidden">
        {showImage ? (
          <Image
            src={article.imageUrl!}
            alt=""
            fill
            sizes="(min-width: 1280px) 38vw, (min-width: 768px) 50vw, 100vw"
            onError={() => setImageFailed(true)}
            className="object-cover grayscale transition duration-500 ease-out group-hover:grayscale-0 group-has-[:focus-visible]:grayscale-0 [@media(hover:none)]:grayscale-0"
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
      <h3 className="mt-8 line-clamp-2 font-heading text-[24px] font-normal uppercase leading-[37px] md:text-[clamp(20px,6.6cqw,32px)] md:leading-[1.5]">
        {article.title}
      </h3>
      <p className="mt-4 text-[16px] font-semibold leading-[1.5] md:text-[clamp(15px,4.1cqw,20px)]">
        {article.category} | {article.date}
      </p>
      <p className="mt-3 line-clamp-3 text-[17px] leading-[30px] md:text-[clamp(15px,3.7cqw,18px)] md:leading-[1.67]">{article.excerpt}</p>
      <ArrowLink
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6"
        aria-label={`Read more: ${article.title} (opens in a new tab)`}
      >
        Read more
      </ArrowLink>
    </article>
  );
}
