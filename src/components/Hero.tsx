import Image from "next/image";
import ArrowLink from "./ui/ArrowLink";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative h-[860px] max-xl:overflow-hidden md:h-[960px] xl:h-[900px]">
      {/* Background skyline + tints */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-skyline.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_7%]"
        />
        <div className="absolute inset-0 bg-fog/50" />
      </div>

      {/* Crimson glow, bottom-right (exact gradient vector from the mockup) */}
      <svg className="absolute right-0 top-0 hidden h-[900px] w-[1440px] xl:block" viewBox="0 0 1440 900" aria-hidden="true">
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
      {/* Below xl the 1440px artboard is scaled down and shifted so the ribbon sits behind the smaller statue. */}
      <svg
        className="absolute left-0 top-0 h-[900px] w-[1440px] origin-top-left translate-x-[7.5px] translate-y-[386px] scale-[0.47] md:translate-x-[-40px] md:translate-y-[411px] md:scale-[0.736] xl:translate-x-0 xl:translate-y-0 xl:scale-100"
        viewBox="0 0 1440 900"
        aria-hidden="true"
      >
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
        className="absolute left-[-25px] top-[425px] h-auto w-[300px] max-w-none md:left-0 md:top-[400px] md:w-[440px] xl:left-[55px] xl:top-[-16px] xl:h-[916px] xl:w-[598px]"
      />

      <div className="relative mx-auto h-full max-w-[1440px]">
        <div className="absolute left-[30px] right-[108px] top-[135px] md:left-[60px] md:right-[188px] md:top-[150px] xl:left-auto xl:right-[198px] xl:top-[266px] xl:w-[565px]">
          <h1 id="hero-title" className="whitespace-nowrap font-heading text-[clamp(26px,8.7vw,36px)] font-medium uppercase leading-[1.47] text-charcoal md:text-[56px] md:leading-[1.2] xl:text-[72px] xl:leading-[86.4px]">
            <span className="block">Become an</span>
            <span className="block pl-[4.2vw] md:pl-[73px] xl:pl-[94px]">
              <span className="text-crimson">Affiliate</span> of the
            </span>
            <span className="block">Lexora</span>
          </h1>
          <p className="mt-6 line-clamp-3 text-[16px] leading-[30px] md:mt-8 md:line-clamp-3 md:max-w-[480px] xl:line-clamp-none xl:mt-10 xl:max-w-none xl:text-[18px] xl:leading-[30.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
            sed risus. Sed dignissim, metus.
          </p>
          <ArrowLink href="#legal-support" className="mt-6 xl:mt-[33px]">
            Find lawyer
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
