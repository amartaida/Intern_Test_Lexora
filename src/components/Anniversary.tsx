"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PlayTriangle } from "./ui/Icons";

export default function Anniversary() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section aria-label="Celebrating our 60th anniversary" className="relative h-[835px] text-paper md:h-[700px] xl:h-[692px]">
      {/* Ink stain that bleeds from behind the photo onto the paper below it (desktop only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-45px] top-[514px] hidden h-[597px] w-[895px] bg-[url('/images/texture-stain-right.webp')] bg-[length:100%_100%] opacity-70 [mask-image:radial-gradient(ellipse_70%_75%_at_75%_30%,#000_30%,transparent_100%)] xl:block"
      />
      <div className="absolute inset-0 overflow-hidden bg-slate">
        <Image src="/images/anniversary.webp" alt="" fill sizes="100vw" className="object-cover opacity-30" />
      </div>

      <div data-reveal="fade" className="relative mx-auto h-full max-w-[1440px]">
        {/*
          Below xl the title is a centred stack (Celebrating / ribbon with 60th / Anniversary);
          from xl up every piece is placed absolutely on the 1440px artboard (`xl:contents` removes the wrappers).
        */}
        <h2 className="m-0 absolute inset-x-0 top-[233px] flex flex-col items-center md:top-[180px] xl:contents">
          <span className="sr-only">Celebrating 60th anniversary</span>
          <span aria-hidden="true" className="contents">
            <span className="font-heading text-[30px] font-light uppercase leading-[36px] md:text-[44px] md:leading-[52px] xl:absolute xl:left-[321px] xl:top-[252px] xl:text-[54px] xl:leading-[64.8px]">
              Celebrating
            </span>

            <span className="relative mt-[42px] flex h-[92px] w-full items-center justify-center md:mt-[44px] md:h-[110px] xl:contents">
              <span className="absolute inset-y-0 left-[30px] right-[30px] bg-crimson/70 [clip-path:polygon(45px_0,100%_0,calc(100%_-_34px)_100%,0_100%)] md:left-[60px] md:right-[60px] xl:inset-y-auto xl:left-[231px] xl:right-auto xl:top-[242px] xl:h-[90px] xl:w-[932px] xl:[clip-path:polygon(58px_0,100%_0,879px_100%,0_100%)]" />
              <span className="relative flex items-start xl:contents">
                <span className="font-heading text-[104px] font-light leading-none md:text-[130px] xl:absolute xl:left-[618px] xl:top-[207px] xl:text-[154px]">60</span>
                <span className="-mt-[22px] ml-1 font-heading text-[30px] font-light uppercase leading-none md:-mt-[10px] md:text-[36px] xl:absolute xl:left-[763px] xl:top-[197px] xl:m-0 xl:text-[38px]">th</span>
              </span>
            </span>

            <span className="mt-[47px] font-heading text-[30px] font-light uppercase leading-[36px] md:mt-[34px] md:text-[44px] md:leading-[52px] xl:absolute xl:left-[802px] xl:top-[252px] xl:m-0 xl:text-[54px] xl:leading-[64.8px]">
              Anniversary
            </span>
          </span>
        </h2>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute left-1/2 top-[539px] flex w-[200px] -translate-x-1/2 flex-col items-center gap-4 md:top-[510px] xl:left-[620px] xl:top-[426px] xl:translate-x-0"
        >
          <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gold pl-[3px] transition-transform duration-300 hover:scale-110">
            <PlayTriangle className="h-[16px] w-[10px] text-paper" />
          </span>
          <span className="text-[12px] uppercase leading-4">Play video</span>
        </button>
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Anniversary video" className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-10">
          <div className="relative aspect-video w-full max-w-[960px] bg-charcoal">
            <p className="absolute inset-0 flex items-center justify-center text-[18px]">Video placeholder — embed URL to be provided</p>
            <button type="button" aria-label="Close video" onClick={() => setOpen(false)} className="absolute -top-10 right-0 text-[16px] uppercase">
              Close ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
