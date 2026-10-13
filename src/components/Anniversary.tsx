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
    <section aria-label="Celebrating our 60th anniversary" className="relative h-[692px] text-paper">
      {/* Ink stain that bleeds from behind the photo onto the paper below it */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-45px] top-[514px] h-[597px] w-[895px] bg-[url('/images/texture-stain-right.webp')] bg-[length:100%_100%] opacity-70 [mask-image:radial-gradient(ellipse_70%_75%_at_75%_30%,#000_30%,transparent_100%)]"
      />
      <div className="absolute inset-0 overflow-hidden bg-slate">
        <Image src="/images/anniversary.webp" alt="" fill sizes="100vw" className="object-cover opacity-30" />
      </div>

      <div className="relative mx-auto h-full max-w-[1440px]">
        <div
          aria-hidden="true"
          className="absolute left-[231px] top-[242px] h-[90px] w-[932px] bg-crimson/70 [clip-path:polygon(58px_0,100%_0,879px_100%,0_100%)]"
        />
        <h2 className="m-0">
          <span className="sr-only">Celebrating 60th anniversary</span>
          <span aria-hidden="true">
            <span className="absolute left-[321px] top-[252px] font-heading text-[54px] font-light uppercase leading-[64.8px]">Celebrating</span>
            <span className="absolute left-[618px] top-[207px] font-heading text-[154px] font-light leading-none">60</span>
            <span className="absolute left-[763px] top-[197px] font-heading text-[38px] font-light uppercase leading-none">th</span>
            <span className="absolute left-[802px] top-[252px] font-heading text-[54px] font-light uppercase leading-[64.8px]">Anniversary</span>
          </span>
        </h2>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute left-[620px] top-[426px] flex w-[200px] flex-col items-center gap-4"
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
