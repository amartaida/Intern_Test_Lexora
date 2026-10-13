import Image from "next/image";
import ArrowLink from "./ui/ArrowLink";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative h-[900px]">
      {/* Background skyline + tints */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-skyline.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_7%]"
        />
        <div className="absolute inset-0 bg-fog/50" />
      </div>

      {/* Crimson glow, bottom-right (exact gradient vector from the mockup) */}
      <svg className="absolute right-0 top-0 h-[900px] w-[1440px]" viewBox="0 0 1440 900" aria-hidden="true">
        <defs>
          <linearGradient id="hero-glow" gradientUnits="userSpaceOnUse" x1="1398.5" y1="1022" x2="1106.5" y2="683.5">
            <stop stopColor="#EB2517" />
            <stop offset="0.628" stopColor="#AA0433" stopOpacity="0.219" />
            <stop offset="1" stopColor="#EB2517" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#hero-glow)" />
      </svg>

      {/* Left-anchored art: sits against the viewport's left edge at any screen width */}
      {/* Crimson diagonal ribbon behind the statue */}
      <svg className="absolute left-0 top-0 h-[900px] w-[1440px]" viewBox="0 0 1440 900" aria-hidden="true">
        <g opacity="0.85">
          <path d="M238 400.5L-13.3127 179V353.693L147.942 501.51L238 400.5Z" fill="#760525" />
          <path d="M258.134 549.887C310.909 497.112 281.426 441.488 258.134 418.195L233.212 396.694L-16 670.828V848.209C52.0855 769.373 205 603.021 258.134 549.887Z" fill="#AA0433" />
        </g>
      </svg>

      <Image
        src="/images/hero-statue.webp"
        alt="Statue of Lady Justice holding scales and a sword"
        width={598}
        height={916}
        priority
        className="absolute left-[55px] top-[-16px] h-[916px] w-[598px] max-w-none"
      />

      <div className="relative mx-auto h-full max-w-[1440px]">
        <div className="absolute right-[198px] top-[266px] w-[565px]">
          <h1 id="hero-title" className="whitespace-nowrap font-heading text-[72px] font-medium uppercase leading-[86.4px] text-charcoal">
            <span className="block">Become an</span>
            <span className="block pl-[94px]">
              <span className="text-crimson">Affiliate</span> of the
            </span>
            <span className="block">Lexora</span>
          </h1>
          <p className="mt-10 text-[18px] leading-[30.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
            sed risus. Sed dignissim, metus.
          </p>
          <ArrowLink href="#legal-support" className="mt-[33px]">
            Find lawyer
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
