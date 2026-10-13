import Image from "next/image";
import { STATUTORY_CARDS } from "@/data/content";
import { Arrow, Quote } from "./ui/Icons";
import SectionLabel from "./ui/SectionLabel";

/*
 * Cards are idle by default. The highlighted state only appears while a card is
 * hovered or keyboard-focused (:focus-visible) — pure CSS, nothing stays "stuck" active.
 */
export default function StatutoryFunctions() {
  return (
    <section id="what-we-do" aria-labelledby="wwd-title" className="relative pt-[121px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[451px] bg-[url('/images/texture-stain-left.webp')] bg-[length:1436px_451px] bg-[position:2px_0] bg-no-repeat opacity-60 [mask-image:linear-gradient(to_right,#000_0%,#000_15%,transparent_60%)]"
      />

      <div className="relative mx-auto w-[932px]">
        <div className="relative">
          <Quote className="absolute -left-[52px] top-[10px] text-charcoal" />
          <SectionLabel>What we do</SectionLabel>
        </div>
        <h2 id="wwd-title" className="mt-[26px] whitespace-nowrap font-heading text-[54px] font-normal uppercase leading-[64.8px]">
          We carry out various statutory functions
        </h2>
        <p className="mt-[21px] max-w-[960px] text-[18px] leading-[30.6px]">
          The mission of the Lexora is to serve its members and the public by sustaining an independent bar which
          upholds the rule of law and ensures access to justice. As part of its mission in ensuring access to justice
          for the needy, the Lexora has established Pro Bono SG&hellip;{" "}
          <a href="#what-we-do" className="font-semibold text-gold-ink">Read more</a>
        </p>
      </div>

      <ul className="relative mt-[98px] grid grid-cols-4 border-t border-[#c9ced3]">
        {STATUTORY_CARDS.map((card) => (
          <li key={card.id} className="group border-r border-[#c9ced3] last:border-r-0">
            <a href="#what-we-do" className="block">
              <div className="relative h-[356px] overflow-hidden">
                <Image src={card.image} alt="" fill sizes="25vw" className="object-cover" />
                <div className="absolute inset-0 bg-fog/55 opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-has-[:focus-visible]:opacity-0" />
                <div className="absolute inset-0 bg-charcoal/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100" />
                <svg
                  className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100"
                  viewBox="0 0 360 356"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id={`glow-${card.id}`} gradientUnits="userSpaceOnUse" x1="360" y1="484.5" x2="268" y2="241">
                      <stop stopColor="#EB2517" />
                      <stop offset="0.569" stopColor="#AA0433" stopOpacity="0.219" />
                      <stop offset="1" stopColor="#EB2517" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect width="360" height="356" fill={`url(#glow-${card.id})`} />
                </svg>

                <div className="relative px-[60px] pt-[75px] text-charcoal transition-colors duration-300 group-hover:text-paper group-has-[:focus-visible]:text-paper">
                  <p className="text-[16px] font-light leading-[24px]">{card.no}</p>
                  <h3 className="mt-[46px] font-heading text-[26px] font-normal leading-[41.6px]">
                    {card.title[0]}
                    <br />
                    {card.title[1]}
                  </h3>
                  {card.description && (
                    <p className="mt-[6px] max-w-[190px] text-[16px] leading-[29.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex h-[94px] items-center border-t border-[#c9ced3] bg-paper px-[60px] text-charcoal transition-colors duration-300 group-hover:bg-gold group-hover:text-paper group-has-[:focus-visible]:bg-gold group-has-[:focus-visible]:text-paper">
                <span className="mr-0 max-w-0 overflow-hidden whitespace-nowrap text-[18px] font-semibold uppercase tracking-[0.02em] opacity-0 transition-all duration-300 group-hover:mr-[14px] group-hover:max-w-[160px] group-hover:opacity-100 group-has-[:focus-visible]:mr-[14px] group-has-[:focus-visible]:max-w-[160px] group-has-[:focus-visible]:opacity-100">
                  More detail
                </span>
                <Arrow />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
